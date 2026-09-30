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
    os.makedirs(user_data, exist_ok=True)
    out_dir = os.path.abspath('scratch/current_snaps')
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
                if params:
                    payload['params'] = params
                await ws.send(json.dumps(payload))
                while True:
                    resp = json.loads(await ws.recv())
                    if resp.get('id') == msg_id:
                        return resp

            await send('Emulation.setDeviceMetricsOverride', {
                'width': 1280,
                'height': 900,
                'deviceScaleFactor': 1,
                'mobile': False
            })

            targets = [
                ('/courses', 'courses_page.png'),
                ('/creator/purepearl-studio', 'creator_page.png'),
                ('/', 'home_page.png'),
            ]

            for path, filename in targets:
                url = f'http://localhost:4173{path}'
                await send('Page.navigate', {'url': url})
                await asyncio.sleep(1.5)

                shot = await send('Page.captureScreenshot', {'format': 'png', 'captureBeyondViewport': True})
                data = base64.b64decode(shot['result']['data'])
                out_path = os.path.join(out_dir, filename)
                with open(out_path, 'wb') as f:
                    f.write(data)
                print(f'Captured {filename} ({len(data)} bytes)')

    finally:
        proc.terminate()

if __name__ == '__main__':
    asyncio.run(main())
