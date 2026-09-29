import asyncio
import base64
import json
import os
import subprocess
import time
import urllib.request
import websockets

async def capture_both_sections():
    user_data = os.path.abspath('scratch/qa_sections_profile')
    out_dir = os.path.abspath('scratch/qa_sections')
    os.makedirs(out_dir, exist_ok=True)

    cmd = [
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new',
        '--remote-debugging-port=9242',
        f'--user-data-dir={user_data}',
        '--disable-extensions',
        'http://localhost:4173/'
    ]
    p = subprocess.Popen(cmd)
    time.sleep(2)
    try:
        with urllib.request.urlopen('http://127.0.0.1:9242/json') as r:
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
            
            # 1. Desktop 1440
            await send('Emulation.setDeviceMetricsOverride', {'width': 1440, 'height': 1024, 'deviceScaleFactor': 1, 'mobile': False})
            await send('Page.navigate', {'url': 'http://localhost:4173/'})
            await asyncio.sleep(2)

            # Scroll to Section 5
            await send('Runtime.evaluate', {
                'expression': '''(() => {
                    const h2 = Array.from(document.querySelectorAll('h2')).find(h => h.textContent.includes('Your Path to Professional'));
                    if (h2) h2.scrollIntoView({ block: 'start', behavior: 'instant' });
                })()'''
            })
            await asyncio.sleep(1)
            ss5 = await send('Page.captureScreenshot', {'format': 'png'})
            with open(os.path.join(out_dir, 'section5_growth_desktop.png'), 'wb') as f:
                f.write(base64.b64decode(ss5['result']['data']))
            print('Captured section5_growth_desktop.png')

            # Scroll to Section 6
            await send('Runtime.evaluate', {
                'expression': '''(() => {
                    const h2 = Array.from(document.querySelectorAll('h2')).find(h => h.textContent.includes('Create & Manage'));
                    if (h2) h2.scrollIntoView({ block: 'start', behavior: 'instant' });
                })()'''
            })
            await asyncio.sleep(1)
            ss6 = await send('Page.captureScreenshot', {'format': 'png'})
            with open(os.path.join(out_dir, 'section6_manage_desktop.png'), 'wb') as f:
                f.write(base64.b64decode(ss6['result']['data']))
            print('Captured section6_manage_desktop.png')

            # 2. Check mobile responsiveness
            await send('Emulation.setDeviceMetricsOverride', {'width': 390, 'height': 844, 'deviceScaleFactor': 2, 'mobile': True})
            await send('Page.navigate', {'url': 'http://localhost:4173/'})
            await asyncio.sleep(2)

            res = await send('Runtime.evaluate', {
                'expression': 'document.documentElement.scrollWidth > window.innerWidth',
                'returnByValue': True
            })
            print('Mobile has horizontal scroll:', res['result']['result'].get('value'))

    finally:
        p.kill()

if __name__ == '__main__':
    asyncio.run(capture_both_sections())
