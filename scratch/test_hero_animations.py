import asyncio
import base64
import json
import os
import subprocess
import time
import urllib.request
import websockets

async def check_hero():
    user_data = os.path.abspath('scratch/qa_hero_profile')
    os.makedirs(user_data, exist_ok=True)
    out_dir = os.path.abspath('scratch/qa_pass3')
    os.makedirs(out_dir, exist_ok=True)

    cmd = [
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new',
        '--remote-debugging-port=9226',
        f'--user-data-dir={user_data}',
        '--disable-extensions',
        '--run-all-compositor-stages-before-draw',
        'http://localhost:4173/'
    ]
    proc = subprocess.Popen(cmd)
    time.sleep(2.5)

    try:
        with urllib.request.urlopen('http://127.0.0.1:9226/json') as r:
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
            # Wait 1.5s for entrance animations to settle into continuous GPU floating
            await asyncio.sleep(1.8)

            # Check overflow
            eval_res = await send('Runtime.evaluate', {
                'expression': '''(() => {
                    return {
                        scrollWidth: document.documentElement.scrollWidth,
                        innerWidth: window.innerWidth,
                        hasHScroll: document.documentElement.scrollWidth > window.innerWidth,
                        fpsAnimations: document.querySelectorAll(".animate-float-1, .animate-float-2, .animate-card-uiux, .animate-card-progress").length
                    };
                })()''',
                'returnByValue': True
            })
            print("Evaluation Result:", eval_res['result']['result']['value'])

            ss = await send('Page.captureScreenshot', {
                'format': 'png',
                'captureBeyondViewport': False
            })
            data = base64.b64decode(ss['result']['data'])
            img_path = os.path.join(out_dir, "hero_smooth_1440.png")
            with open(img_path, 'wb') as f:
                f.write(data)
            print(f"Captured {img_path}")

    finally:
        proc.terminate()
        proc.wait()

if __name__ == '__main__':
    asyncio.run(check_hero())
