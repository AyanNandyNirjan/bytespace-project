import asyncio
import base64
import json
import os
import subprocess
import time
import urllib.request
import websockets

PAGES_TO_TEST = [
    # Desktop 1440 Viewports
    {"name": "home_1440", "path": "/", "w": 1440, "h": 1024, "fullPage": False},
    {"name": "home_full_1440", "path": "/", "w": 1440, "h": 1024, "fullPage": True},
    {"name": "login_1440", "path": "/login", "w": 1440, "h": 1024, "fullPage": False},
    {"name": "register_1440", "path": "/register", "w": 1440, "h": 1024, "fullPage": False},
    {"name": "courses_1440", "path": "/courses", "w": 1440, "h": 1024, "fullPage": False},
    {"name": "courses_full_1440", "path": "/courses", "w": 1440, "h": 1024, "fullPage": True},
    {"name": "creator_1440", "path": "/creator/purepearl-studio", "w": 1440, "h": 1024, "fullPage": False},
    {"name": "creator_full_1440", "path": "/creator/purepearl-studio", "w": 1440, "h": 1024, "fullPage": True},
    {"name": "details_about_1440", "path": "/course/build-digital-asset", "w": 1440, "h": 1024, "fullPage": False},
    {"name": "details_about_full_1440", "path": "/course/build-digital-asset", "w": 1440, "h": 1024, "fullPage": True},
    {"name": "details_lessons_1440", "path": "/course/build-digital-asset/lessons", "w": 1440, "h": 1024, "fullPage": True},
    {"name": "details_reviews_1440", "path": "/course/build-digital-asset/reviews", "w": 1440, "h": 1024, "fullPage": True},
    {"name": "notfound_1440", "path": "/non-existent-page", "w": 1440, "h": 1024, "fullPage": False},

    # Mobile 390 Viewports
    {"name": "home_mobile_390", "path": "/", "w": 390, "h": 844, "mobile": True, "dpr": 2},
    {"name": "login_mobile_390", "path": "/login", "w": 390, "h": 844, "mobile": True, "dpr": 2},
    {"name": "register_mobile_390", "path": "/register", "w": 390, "h": 844, "mobile": True, "dpr": 2},
    {"name": "courses_mobile_390", "path": "/courses", "w": 390, "h": 844, "mobile": True, "dpr": 2},
    {"name": "creator_mobile_390", "path": "/creator/purepearl-studio", "w": 390, "h": 844, "mobile": True, "dpr": 2},
    {"name": "details_about_mobile_390", "path": "/course/build-digital-asset", "w": 390, "h": 844, "mobile": True, "dpr": 2},
    {"name": "notfound_mobile_390", "path": "/non-existent-page", "w": 390, "h": 844, "mobile": True, "dpr": 2}
]

async def run_qa():
    user_data = os.path.abspath('scratch/qa2_profile')
    os.makedirs(user_data, exist_ok=True)
    out_dir = os.path.abspath('scratch/qa_pass2')
    os.makedirs(out_dir, exist_ok=True)

    cmd = [
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new',
        '--remote-debugging-port=9223',
        f'--user-data-dir={user_data}',
        '--disable-extensions',
        '--run-all-compositor-stages-before-draw',
        'http://localhost:4173/'
    ]
    proc = subprocess.Popen(cmd)
    time.sleep(2)

    try:
        with urllib.request.urlopen('http://127.0.0.1:9223/json') as r:
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

            for item in PAGES_TO_TEST:
                w = item['w']
                h = item['h']
                mobile = item.get('mobile', False)
                dpr = item.get('dpr', 1)
                full = item.get('fullPage', False)

                await send('Emulation.setDeviceMetricsOverride', {
                    'width': w,
                    'height': h,
                    'deviceScaleFactor': dpr,
                    'mobile': mobile
                })
                await send('Page.navigate', {'url': f"http://localhost:4173{item['path']}"})
                await asyncio.sleep(1.0)

                # Scroll down in increments to trigger whileInView animations
                await send('Runtime.evaluate', {
                    'expression': '''(() => {
                        window.scrollTo(0, document.body.scrollHeight / 3);
                    })()'''
                })
                await asyncio.sleep(0.3)
                await send('Runtime.evaluate', {
                    'expression': '''(() => {
                        window.scrollTo(0, document.body.scrollHeight * 2 / 3);
                    })()'''
                })
                await asyncio.sleep(0.3)
                await send('Runtime.evaluate', {
                    'expression': '''(() => {
                        window.scrollTo(0, document.body.scrollHeight);
                    })()'''
                })
                await asyncio.sleep(0.4)

                # If viewport-only, scroll back to top
                if not full:
                    await send('Runtime.evaluate', {'expression': 'window.scrollTo(0, 0);'})
                    await asyncio.sleep(0.4)

                # Check scroll width
                eval_res = await send('Runtime.evaluate', {
                    'expression': f'''(() => {{
                        return {{
                            scrollWidth: document.documentElement.scrollWidth,
                            clientWidth: document.documentElement.clientWidth,
                            hasHScroll: document.documentElement.scrollWidth > {w} + 1
                        }};
                    }})()''',
                    'returnByValue': True
                })
                v = eval_res.get('result', {}).get('result', {}).get('value', {})
                results.append({"name": item['name'], **v})

                # Capture screenshot
                shot_params = {'format': 'png'}
                if full:
                    shot_params['captureBeyondViewport'] = True

                shot_res = await send('Page.captureScreenshot', shot_params)
                data = shot_res['result']['data']
                out_path = os.path.join(out_dir, f"{item['name']}.png")
                with open(out_path, 'wb') as f:
                    f.write(base64.b64decode(data))
                print(f"Captured: {item['name']} | HScroll: {v.get('hasHScroll')}")

            with open('scratch/qa_pass2_results.json', 'w') as f:
                json.dump(results, f, indent=2)
            print("QA Pass 2 complete! Results saved to scratch/qa_pass2_results.json")

    finally:
        proc.terminate()
        try:
            proc.wait(timeout=3)
        except:
            proc.kill()

if __name__ == '__main__':
    asyncio.run(run_qa())
