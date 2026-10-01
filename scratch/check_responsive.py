import asyncio
import base64
import json
import os
import subprocess
import time
import urllib.request
import websockets

async def check_responsive():
    user_data = os.path.abspath('scratch/qa_snap_profile')
    os.makedirs('scratch/responsive', exist_ok=True)

    cmd = [
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new',
        '--remote-debugging-port=9235',
        f'--user-data-dir={user_data}',
        '--disable-extensions',
        'http://localhost:4173/'
    ]
    proc = subprocess.Popen(cmd)
    time.sleep(2.5)

    try:
        with urllib.request.urlopen('http://127.0.0.1:9235/json') as r:
            tabs = json.loads(r.read().decode())
        page_tab = next(t for t in tabs if t.get('type') == 'page')
        ws_url = page_tab['webSocketDebuggerUrl']

        async with websockets.connect(ws_url) as ws:
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

            viewports = [
                ('mobile_iphone', 390, 844),
                ('mobile_small', 360, 740),
                ('tablet_ipad', 768, 1024),
                ('laptop_1280', 1280, 800),
                ('desktop_1920', 1920, 1080),
            ]

            paths = ['/', '/courses', '/course/build-digital-asset', '/creator/purepearl-studio', '/login']

            results = []

            for path in paths:
                for vp_name, w, h in viewports:
                    await send('Emulation.setDeviceMetricsOverride', {
                        'width': w,
                        'height': h,
                        'deviceScaleFactor': 1,
                        'mobile': 'mobile' in vp_name
                    })
                    await send('Page.navigate', {'url': f'http://localhost:4173{path}'})
                    await asyncio.sleep(0.5)

                    eval_res = await send('Runtime.evaluate', {
                        'expression': 'JSON.stringify({ scrollWidth: document.documentElement.scrollWidth, innerWidth: window.innerWidth, overflows: document.documentElement.scrollWidth > window.innerWidth })',
                        'returnByValue': True
                    })
                    val = json.loads(eval_res['result']['result']['value'])
                    results.append((path, vp_name, val))
                    sw = val['scrollWidth']
                    iw = val['innerWidth']
                    ov = val['overflows']
                    print(f'{path} @ {vp_name}: sW={sw} iW={iw} overflow={ov}')

                    if vp_name in ['mobile_iphone', 'tablet_ipad']:
                        clean_path = path.replace('/', '_').strip('_') or 'home'
                        out_name = f'scratch/responsive/{clean_path}_{vp_name}.png'
                        ss = await send('Page.captureScreenshot', {'format': 'png', 'captureBeyondViewport': False})
                        data = base64.b64decode(ss['result']['data'])
                        with open(out_name, 'wb') as f:
                            f.write(data)

            overflows = [r for r in results if r[2]['overflows']]
            print(f'Done. Total overflow issues: {len(overflows)}')
    finally:
        proc.terminate()
        proc.wait()

if __name__ == '__main__':
    asyncio.run(check_responsive())
