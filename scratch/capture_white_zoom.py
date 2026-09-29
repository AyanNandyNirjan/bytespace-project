import asyncio
import base64
import json
import os
import subprocess
import time
import urllib.request
import websockets

async def run():
    user_data = os.path.abspath('scratch/qa_hero_zoom_profile')
    os.makedirs(user_data, exist_ok=True)
    out_dir = os.path.abspath('scratch/qa_shapes')
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

            await send('Emulation.setDeviceMetricsOverride', {
                'width': 1440,
                'height': 1024,
                'deviceScaleFactor': 1,
                'mobile': False
            })
            await send('Page.navigate', {'url': 'http://localhost:4173/'})
            await asyncio.sleep(2.0)

            # Crop bottom-left: white ring near lime arch
            ss_ring = await send('Page.captureScreenshot', {
                'format': 'png',
                'clip': {'x': 0, 'y': 620, 'width': 400, 'height': 380, 'scale': 1}
            })
            with open(os.path.join(out_dir, 'verified_white_ring_context.png'), 'wb') as f:
                f.write(base64.b64decode(ss_ring['result']['data']))
            print('Captured verified_white_ring_context.png')

            # Crop bottom-right: white spiral near lime arch
            ss_spiral = await send('Page.captureScreenshot', {
                'format': 'png',
                'clip': {'x': 1080, 'y': 620, 'width': 360, 'height': 380, 'scale': 1}
            })
            with open(os.path.join(out_dir, 'verified_white_spiral_context.png'), 'wb') as f:
                f.write(base64.b64decode(ss_spiral['result']['data']))
            print('Captured verified_white_spiral_context.png')
    finally:
        proc.kill()

if __name__ == '__main__':
    asyncio.run(run())
