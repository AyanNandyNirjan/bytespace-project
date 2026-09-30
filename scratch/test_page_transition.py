import asyncio
import base64
import json
import os
import subprocess
import time
import urllib.request
import websockets

async def main():
    user_data = os.path.abspath('scratch/qa_snap_profile')
    out_dir = os.path.abspath('scratch/transition_snaps')
    os.makedirs(out_dir, exist_ok=True)

    cmd = [
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new',
        '--remote-debugging-port=9225',
        f'--user-data-dir={user_data}',
        '--disable-extensions',
        '--run-all-compositor-stages-before-draw',
        'http://localhost:4173/'
    ]
    proc = subprocess.Popen(cmd)
    time.sleep(2.0)

    try:
        with urllib.request.urlopen('http://127.0.0.1:9225/json') as r:
            tabs = json.loads(r.read().decode())
        page_tab = next(t for t in tabs if t.get('type') == 'page')
        ws_url = page_tab['webSocketDebuggerUrl']

        async with websockets.connect(ws_url, max_size=100_000_000) as ws:
            msg_id = 0
            async def send(method, params=None):
                nonlocal msg_id
                msg_id += 1
                payload = {'id': msg_id, 'method': method}
                if params: payload['params'] = params
                await ws.send(json.dumps(payload))
                while True:
                    resp = json.loads(await ws.recv())
                    if resp.get('id') == msg_id: return resp

            await send('Emulation.setDeviceMetricsOverride', {'width': 1280, 'height': 800, 'deviceScaleFactor': 1, 'mobile': False})
            await send('Page.navigate', {'url': 'http://localhost:4173/'})
            await asyncio.sleep(1.5)

            # Snap initial Home page
            shot = await send('Page.captureScreenshot', {'format': 'png'})
            with open(os.path.join(out_dir, '1_home.png'), 'wb') as f:
                f.write(base64.b64decode(shot['result']['data']))

            # Click on 'Courses' nav link
            print('Clicking Courses link...')
            await send('Runtime.evaluate', {
                'expression': "document.querySelector('nav a[href=\"/courses\"]').click()"
            })

            # Capture mid-transition frames
            for i in range(5):
                await asyncio.sleep(0.08)
                shot = await send('Page.captureScreenshot', {'format': 'png'})
                with open(os.path.join(out_dir, f'2_transition_frame_{i}.png'), 'wb') as f:
                    f.write(base64.b64decode(shot['result']['data']))

            # Settle on Courses page
            await asyncio.sleep(0.6)
            shot = await send('Page.captureScreenshot', {'format': 'png'})
            with open(os.path.join(out_dir, '3_courses_settled.png'), 'wb') as f:
                f.write(base64.b64decode(shot['result']['data']))

            # Click on 'Creators' nav link
            print('Clicking Creators link...')
            await send('Runtime.evaluate', {
                'expression': "document.querySelector('nav a[href=\"/creator/purepearl-studio\"]').click()"
            })
            for i in range(5):
                await asyncio.sleep(0.08)
                shot = await send('Page.captureScreenshot', {'format': 'png'})
                with open(os.path.join(out_dir, f'4_creator_transition_frame_{i}.png'), 'wb') as f:
                    f.write(base64.b64decode(shot['result']['data']))

            await asyncio.sleep(0.6)
            shot = await send('Page.captureScreenshot', {'format': 'png'})
            with open(os.path.join(out_dir, '5_creator_settled.png'), 'wb') as f:
                f.write(base64.b64decode(shot['result']['data']))

            print('All transition frames captured successfully!')
    finally:
        proc.terminate()

if __name__ == '__main__':
    asyncio.run(main())
