import asyncio
import base64
import json
import os
import subprocess
import time
import urllib.request
import websockets

async def check_testimonials():
    user_data = os.path.abspath('scratch/qa_testimonials_profile')
    out_dir = os.path.abspath('scratch/qa_testimonials')
    os.makedirs(out_dir, exist_ok=True)

    cmd = [
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new',
        '--remote-debugging-port=9243',
        f'--user-data-dir={user_data}',
        '--disable-extensions',
        'http://localhost:4173/'
    ]
    p = subprocess.Popen(cmd)
    time.sleep(2)
    try:
        with urllib.request.urlopen('http://127.0.0.1:9243/json') as r:
            tabs = json.loads(r.read().decode())
        ws_url = next(t for t in tabs if t.get('type') == 'page')['webSocketDebuggerUrl']
        async with websockets.connect(ws_url, max_size=100_000_000) as ws:
            msg_id = 0
            async def send(method, params=None):
                nonlocal msg_id
                msg_id += 1
                await ws.send(json.dumps({'id': msg_id, 'method': method, 'params': params or {}}))
                while True:
                    resp = json.loads(await ws.recv())
                    if resp.get('id') == msg_id: return resp

            # 1. Desktop 1440x1024
            await send('Emulation.setDeviceMetricsOverride', {'width': 1440, 'height': 1024, 'deviceScaleFactor': 1, 'mobile': False})
            await send('Page.navigate', {'url': 'http://localhost:4173/'})
            await asyncio.sleep(2)

            # Scroll Testimonials section into view
            await send('Runtime.evaluate', {
                'expression': '''(() => {
                    const h2 = Array.from(document.querySelectorAll('h2')).find(h => h.textContent.includes('Discover What Our'));
                    if (h2) h2.scrollIntoView({ block: 'start', behavior: 'instant' });
                })()'''
            })
            await asyncio.sleep(1)

            # Capture desktop testimonials section
            ss = await send('Page.captureScreenshot', {'format': 'png'})
            desktop_path = os.path.join(out_dir, 'testimonials_desktop_verified.png')
            with open(desktop_path, 'wb') as f:
                f.write(base64.b64decode(ss['result']['data']))
            print('Captured testimonials_desktop_verified.png')

            # 2. Mobile 390x844
            await send('Emulation.setDeviceMetricsOverride', {'width': 390, 'height': 844, 'deviceScaleFactor': 2, 'mobile': True})
            await send('Page.navigate', {'url': 'http://localhost:4173/'})
            await asyncio.sleep(2)

            # Check overflow
            eval_res = await send('Runtime.evaluate', {
                'expression': 'document.documentElement.scrollWidth > window.innerWidth',
                'returnByValue': True
            })
            print('Mobile has horizontal scroll:', eval_res['result']['result'].get('value'))

            await send('Runtime.evaluate', {
                'expression': '''(() => {
                    const h2 = Array.from(document.querySelectorAll('h2')).find(h => h.textContent.includes('Discover What Our'));
                    if (h2) h2.scrollIntoView({ block: 'start', behavior: 'instant' });
                })()'''
            })
            await asyncio.sleep(1)

            ss_mob = await send('Page.captureScreenshot', {'format': 'png'})
            mob_path = os.path.join(out_dir, 'testimonials_mobile_verified.png')
            with open(mob_path, 'wb') as f:
                f.write(base64.b64decode(ss_mob['result']['data']))
            print('Captured testimonials_mobile_verified.png')

    finally:
        p.kill()

if __name__ == '__main__':
    asyncio.run(check_testimonials())
