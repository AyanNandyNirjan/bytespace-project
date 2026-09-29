import asyncio
import base64
import json
import os
import subprocess
import time
import urllib.request
import websockets

async def run():
    user_data = os.path.abspath('scratch/qa_mobile_profile')
    os.makedirs(user_data, exist_ok=True)
    out_dir = os.path.abspath('scratch/qa_pass3')
    os.makedirs(out_dir, exist_ok=True)

    cmd = [
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new',
        '--remote-debugging-port=9229',
        f'--user-data-dir={user_data}',
        '--disable-extensions',
        '--run-all-compositor-stages-before-draw',
        'http://localhost:4173/'
    ]
    proc = subprocess.Popen(cmd)
    time.sleep(2.5)

    try:
        with urllib.request.urlopen('http://127.0.0.1:9229/json') as r:
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
                'width': 390,
                'height': 844,
                'deviceScaleFactor': 2,
                'mobile': True
            })
            await send('Page.navigate', {'url': 'http://localhost:4173/'})
            await asyncio.sleep(2.0)
            ss = await send('Page.captureScreenshot', {'format': 'png'})
            with open(os.path.join(out_dir, 'hero_refined_mobile_390.png'), 'wb') as f:
                f.write(base64.b64decode(ss['result']['data']))
            print('Successfully captured refined mobile screenshot!')
    finally:
        proc.kill()

if __name__ == '__main__':
    asyncio.run(run())
