import asyncio
import base64
import json
import os
import subprocess
import time
import urllib.request
import websockets

VIEWPORTS = [
    {"name": "android_360", "w": 360, "h": 740, "mobile": True, "dpr": 2},
    {"name": "iphone_se_375", "w": 375, "h": 667, "mobile": True, "dpr": 2},
    {"name": "iphone_14_390", "w": 390, "h": 844, "mobile": True, "dpr": 3},
    {"name": "iphone_max_430", "w": 430, "h": 932, "mobile": True, "dpr": 3},
    {"name": "tablet_768", "w": 768, "h": 1024, "mobile": True, "dpr": 2},
    {"name": "laptop_1024", "w": 1024, "h": 768, "mobile": False, "dpr": 1},
    {"name": "laptop_1280", "w": 1280, "h": 800, "mobile": False, "dpr": 1},
    {"name": "desktop_1440", "w": 1440, "h": 1024, "mobile": False, "dpr": 1},
    {"name": "ultrawide_1920", "w": 1920, "h": 1080, "mobile": False, "dpr": 1},
]

PAGES = [
    {"path": "/", "name": "home"},
    {"path": "/courses", "name": "courses"},
    {"path": "/course/build-digital-asset", "name": "course_details"},
    {"path": "/creator/purepearl-studio", "name": "creator"},
    {"path": "/login", "name": "auth"}
]

async def run_suite():
    user_data = os.path.abspath('scratch/chrome_profile')
    os.makedirs(user_data, exist_ok=True)
    out_dir = os.path.abspath('scratch/screenshots')
    os.makedirs(out_dir, exist_ok=True)

    cmd = [
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new',
        '--remote-debugging-port=9222',
        f'--user-data-dir={user_data}',
        '--disable-extensions',
        '--run-all-compositor-stages-before-draw',
        'http://localhost:4173/'
    ]
    proc = subprocess.Popen(cmd)
    time.sleep(2)

    try:
        with urllib.request.urlopen('http://127.0.0.1:9222/json') as r:
            tabs = json.loads(r.read().decode())
        page_tab = next(t for t in tabs if t.get('type') == 'page')
        ws_url = page_tab['webSocketDebuggerUrl']

        async with websockets.connect(ws_url, max_size=50_000_000) as ws:
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

            # 1. Test all viewports on Home
            for vp in VIEWPORTS:
                await send('Emulation.setDeviceMetricsOverride', {
                    'width': vp['w'],
                    'height': vp['h'],
                    'deviceScaleFactor': vp.get('dpr', 1),
                    'mobile': vp.get('mobile', False)
                })
                await send('Page.navigate', {'url': 'http://localhost:4173/'})
                await asyncio.sleep(1.2)

                # Check scrollWidth vs clientWidth
                eval_res = await send('Runtime.evaluate', {
                    'expression': f'''(() => {{
                        return {{
                            scrollWidth: document.documentElement.scrollWidth,
                            clientWidth: document.documentElement.clientWidth,
                            hasHScroll: document.documentElement.scrollWidth > {vp['w']} + 1
                        }};
                    }})()''',
                    'returnByValue': True
                })
                v = eval_res.get('result', {}).get('result', {}).get('value', {})
                results.append({"viewport": vp['name'], "url": "/", **v})

                # Capture top viewport screenshot
                shot = await send('Page.captureScreenshot', {'format': 'png'})
                img_path = os.path.join(out_dir, f"home_{vp['name']}.png")
                with open(img_path, 'wb') as f:
                    f.write(base64.b64decode(shot['result']['data']))

            # 2. Test Mobile Menu Drawer on 390px
            await send('Emulation.setDeviceMetricsOverride', {
                'width': 390,
                'height': 844,
                'deviceScaleFactor': 2,
                'mobile': True
            })
            await send('Page.navigate', {'url': 'http://localhost:4173/'})
            await asyncio.sleep(1.0)
            
            # Click visible hamburger button (aria-label="Open Navigation Menu")
            await send('Runtime.evaluate', {
                'expression': '''(() => {
                    const btns = Array.from(document.querySelectorAll('button[aria-label="Open Navigation Menu"]'));
                    const btn = btns.find(b => b.offsetParent !== null) || btns[btns.length - 1];
                    if (btn) btn.click();
                    return !!btn;
                })()'''
            })
            await asyncio.sleep(1.0)
            # Capture drawer screenshot
            shot = await send('Page.captureScreenshot', {'format': 'png'})
            with open(os.path.join(out_dir, "mobile_drawer_open_390.png"), 'wb') as f:
                f.write(base64.b64decode(shot['result']['data']))

            # 3. Test sub-pages on 390px (mobile) and 1440px (desktop)
            for page in PAGES[1:]:
                # Mobile
                await send('Emulation.setDeviceMetricsOverride', {
                    'width': 390,
                    'height': 844,
                    'deviceScaleFactor': 2,
                    'mobile': True
                })
                await send('Page.navigate', {'url': f"http://localhost:4173{page['path']}"})
                await asyncio.sleep(1.0)
                eval_m = await send('Runtime.evaluate', {
                    'expression': 'document.documentElement.scrollWidth > 391',
                    'returnByValue': True
                })
                shot = await send('Page.captureScreenshot', {'format': 'png'})
                with open(os.path.join(out_dir, f"{page['name']}_mobile_390.png"), 'wb') as f:
                    f.write(base64.b64decode(shot['result']['data']))

                # Desktop
                await send('Emulation.setDeviceMetricsOverride', {
                    'width': 1440,
                    'height': 1024,
                    'deviceScaleFactor': 1,
                    'mobile': False
                })
                await send('Page.navigate', {'url': f"http://localhost:4173{page['path']}"})
                await asyncio.sleep(1.0)
                shot = await send('Page.captureScreenshot', {'format': 'png'})
                with open(os.path.join(out_dir, f"{page['name']}_desktop_1440.png"), 'wb') as f:
                    f.write(base64.b64decode(shot['result']['data']))

            print("SUITE COMPLETED. Results:")
            print(json.dumps(results, indent=2))

    finally:
        proc.terminate()

asyncio.run(run_suite())
