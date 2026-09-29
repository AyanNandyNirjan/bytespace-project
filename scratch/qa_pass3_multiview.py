import asyncio
import base64
import json
import os
import subprocess
import time
import urllib.request
import websockets

BREAKPOINTS = [1920, 1536, 1440, 1366, 1280, 1024, 768, 430, 390, 375]

ROUTES = [
    ("/", "home"),
    ("/courses", "courses"),
    ("/course/build-digital-asset", "course_about"),
    ("/course/build-digital-asset/lessons", "course_lessons"),
    ("/course/build-digital-asset/reviews", "course_reviews"),
    ("/creator/purepearl-studio", "creator"),
    ("/login", "login"),
    ("/register", "register"),
    ("/non-existent-path-for-404", "not_found")
]

async def run_qa():
    user_data = os.path.abspath('scratch/qa3_profile')
    os.makedirs(user_data, exist_ok=True)
    out_dir = os.path.abspath('scratch/qa_pass3')
    os.makedirs(out_dir, exist_ok=True)

    cmd = [
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new',
        '--remote-debugging-port=9224',
        f'--user-data-dir={user_data}',
        '--disable-extensions',
        '--run-all-compositor-stages-before-draw',
        'http://localhost:4173/'
    ]
    proc = subprocess.Popen(cmd)
    time.sleep(2.5)

    try:
        with urllib.request.urlopen('http://127.0.0.1:9224/json') as r:
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

            results = []

            # 1. Test every route at key viewports: 1440, 1024, 768, 390
            # And test responsive ladder [1920, 1536, 1440, 1366, 1280, 1024, 768, 430, 390, 375] for course views & home
            for path, name in ROUTES:
                for w in BREAKPOINTS:
                    h = 900 if w >= 768 else 844
                    is_mobile = w < 768
                    dpr = 1 if w >= 1024 else 2

                    await send('Emulation.setDeviceMetricsOverride', {
                        'width': w,
                        'height': h,
                        'deviceScaleFactor': dpr,
                        'mobile': is_mobile
                    })
                    await send('Page.navigate', {'url': f"http://localhost:4173{path}"})
                    await asyncio.sleep(0.5)

                    # Trigger scroll to load lazy / motion sections
                    await send('Runtime.evaluate', {
                        'expression': '''(() => {
                            window.scrollTo(0, document.body.scrollHeight / 2);
                        })()'''
                    })
                    await asyncio.sleep(0.15)
                    await send('Runtime.evaluate', {
                        'expression': '''(() => {
                            window.scrollTo(0, 0);
                        })()'''
                    })
                    await asyncio.sleep(0.15)

                    # Evaluate overflow
                    eval_res = await send('Runtime.evaluate', {
                        'expression': '''(() => {
                            return {
                                scrollWidth: document.documentElement.scrollWidth,
                                innerWidth: window.innerWidth,
                                hasHScroll: document.documentElement.scrollWidth > window.innerWidth,
                                title: document.title
                            };
                        })()''',
                        'returnByValue': True
                    })
                    val = eval_res['result']['result']['value']
                    
                    status_line = f"[{name} @ {w}px] scrollWidth={val['scrollWidth']} innerWidth={val['innerWidth']} hasHScroll={val['hasHScroll']}"
                    print(status_line)
                    results.append({"route": path, "name": name, "width": w, "data": val})

                    # Take representative screenshots for 1440 and 390, plus 768
                    if w in [1440, 768, 390]:
                        ss = await send('Page.captureScreenshot', {
                            'format': 'png',
                            'captureBeyondViewport': True
                        })
                        data = base64.b64decode(ss['result']['data'])
                        img_path = os.path.join(out_dir, f"{name}_{w}.png")
                        with open(img_path, 'wb') as f:
                            f.write(data)

            with open(os.path.join(out_dir, 'summary.json'), 'w') as f:
                json.dump(results, f, indent=2)

            any_overflow = any(r['data']['hasHScroll'] for r in results)
            print("\n=================================")
            print(f"TOTAL TESTS: {len(results)}")
            print(f"ANY OVERFLOW DETECTED: {any_overflow}")
            print("=================================")

    finally:
        proc.terminate()
        proc.wait()

if __name__ == '__main__':
    asyncio.run(run_qa())
