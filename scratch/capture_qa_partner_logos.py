import asyncio
import base64
import json
import os
import subprocess
import time
import urllib.request
import websockets

async def run():
    user_data = os.path.abspath('scratch/qa_logo_check_profile')
    os.makedirs(user_data, exist_ok=True)
    out_dir = os.path.abspath('scratch/qa_logos')
    os.makedirs(out_dir, exist_ok=True)

    cmd = [
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new',
        '--remote-debugging-port=9235',
        f'--user-data-dir={user_data}',
        '--disable-extensions',
        '--run-all-compositor-stages-before-draw',
        'http://localhost:4173/'
    ]
    proc = subprocess.Popen(cmd)
    time.sleep(2.5)

    try:
        with urllib.request.urlopen('http://127.0.0.1:9235/json') as r:
            tabs = json.loads(r.read().decode())
        page_tab = next(t for t in tabs if t.get('type') == 'page')
        ws_url = page_tab['webSocketDebuggerUrl']

        async with websockets.connect(ws_url, max_size=100_000_000) as ws:
            msg_id = 0
            async def send(method, params=None):
                nonlocal msg_id
                msg_id += 1
                payload = {'id': msg_id, 'method': method}
                if params:
                    payload['params'] = params
                await ws.send(json.dumps(payload))
                while True:
                    resp = json.loads(await ws.recv())
                    if resp.get('id') == msg_id:
                        return resp

            # 1. Desktop 1440x1024
            await send('Emulation.setDeviceMetricsOverride', {
                'width': 1440,
                'height': 1200,
                'deviceScaleFactor': 1,
                'mobile': False
            })
            await send('Page.navigate', {'url': 'http://localhost:4173/'})
            await asyncio.sleep(2.0)

            # Capture desktop view including logo strip
            ss = await send('Page.captureScreenshot', {'format': 'png'})
            with open(os.path.join(out_dir, 'home_desktop_with_logos.png'), 'wb') as f:
                f.write(base64.b64decode(ss['result']['data']))
            print('Captured home_desktop_with_logos.png')

            # Find partner strip element position and clip it
            eval_res = await send('Runtime.evaluate', {
                'expression': '''(() => {
                    const strip = document.querySelector('section.bg-\\\\[\\\\#F5F5F6\\\\]') || document.querySelector('section[class*="bg-[#F5F5F6]"]');
                    if (!strip) return null;
                    const rect = strip.getBoundingClientRect();
                    return { x: rect.x, y: rect.y + window.scrollY, width: rect.width, height: rect.height };
                })()''',
                'returnByValue': True
            })
            rect = eval_res['result'].get('value')
            print("Logo strip rect:", rect)

            if rect:
                ss_logo = await send('Page.captureScreenshot', {
                    'format': 'png',
                    'clip': {'x': rect['x'], 'y': rect['y'], 'width': rect['width'], 'height': rect['height'], 'scale': 1}
                })
                with open(os.path.join(out_dir, 'logo_strip_desktop.png'), 'wb') as f:
                    f.write(base64.b64decode(ss_logo['result']['data']))
                print('Captured logo_strip_desktop.png')

            # 2. Mobile 390x844
            await send('Emulation.setDeviceMetricsOverride', {
                'width': 390,
                'height': 844,
                'deviceScaleFactor': 2,
                'mobile': True
            })
            await send('Page.navigate', {'url': 'http://localhost:4173/'})
            await asyncio.sleep(2.0)

            eval_res_mob = await send('Runtime.evaluate', {
                'expression': '''(() => {
                    const strip = document.querySelector('section[class*="bg-[#F5F5F6]"]');
                    if (!strip) return null;
                    const rect = strip.getBoundingClientRect();
                    return { x: rect.x, y: rect.y + window.scrollY, width: rect.width, height: rect.height };
                })()''',
                'returnByValue': True
            })
            rect_mob = eval_res_mob['result'].get('value')
            print("Mobile logo strip rect:", rect_mob)

            if rect_mob:
                ss_logo_mob = await send('Page.captureScreenshot', {
                    'format': 'png',
                    'clip': {'x': rect_mob['x'], 'y': rect_mob['y'], 'width': rect_mob['width'], 'height': rect_mob['height'], 'scale': 2}
                })
                with open(os.path.join(out_dir, 'logo_strip_mobile.png'), 'wb') as f:
                    f.write(base64.b64decode(ss_logo_mob['result']['data']))
                print('Captured logo_strip_mobile.png')

    finally:
        proc.kill()

if __name__ == '__main__':
    asyncio.run(run())
