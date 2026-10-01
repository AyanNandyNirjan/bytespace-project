import asyncio, json, urllib.request, websockets, time, subprocess, os, base64

chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
profile_dir = r'C:\Users\nirjo\.gemini\antigravity\brain\dce8b0bb-4bd4-46fa-bbae-57258b7de772\scratch\chrome_final_verify_profile'

viewports = [
    {'name': 'Desktop_1920', 'width': 1920, 'height': 1080, 'mobile': False},
    {'name': 'Laptop_1440', 'width': 1440, 'height': 900, 'mobile': False},
    {'name': 'Tablet_iPad_768', 'width': 768, 'height': 1024, 'mobile': True},
    {'name': 'Mobile_iPhone_390', 'width': 390, 'height': 844, 'mobile': True},
    {'name': 'Mobile_Android_360', 'width': 360, 'height': 780, 'mobile': True}
]

routes = [
    {'name': 'home', 'path': '/'},
    {'name': 'courses', 'path': '/courses'},
    {'name': 'course_detail', 'path': '/course/build-digital-asset'},
    {'name': 'login', 'path': '/login'},
    {'name': 'register', 'path': '/register'},
    {'name': 'creator', 'path': '/creator/purepearl-studio'}
]

async def run_verification():
    proc = subprocess.Popen([
        chrome_path,
        '--remote-debugging-port=9229',
        f'--user-data-dir={profile_dir}',
        '--headless=new',
        '--no-first-run',
        '--no-default-browser-check',
        '--disable-gpu',
        'about:blank'
    ])
    
    time.sleep(1.5)
    ws_url = None
    for _ in range(25):
        try:
            with urllib.request.urlopen('http://127.0.0.1:9229/json/list', timeout=1) as resp:
                data = json.loads(resp.read().decode())
                if data:
                    ws_url = data[0]['webSocketDebuggerUrl']
                    break
        except Exception:
            time.sleep(0.4)
            
    if not ws_url:
        print('Could not connect to Chrome debugging port')
        proc.terminate()
        return

    output_dir = r'C:\Users\nirjo\.gemini\antigravity\brain\dce8b0bb-4bd4-46fa-bbae-57258b7de772\scratch\device_verification'
    os.makedirs(output_dir, exist_ok=True)

    overflow_issues = []

    async with websockets.connect(ws_url) as ws:
        msg_id = 1
        async def call(method, params=None):
            nonlocal msg_id
            m = {'id': msg_id, 'method': method}
            if params: m['params'] = params
            msg_id += 1
            await ws.send(json.dumps(m))
            while True:
                res = json.loads(await ws.recv())
                if res.get('id') == m['id']: return res.get('result', {})

        for vp in viewports:
            print(f"\n--- Testing Viewport: {vp['name']} ({vp['width']}x{vp['height']}) ---")
            await call('Emulation.setDeviceMetricsOverride', {
                'width': vp['width'],
                'height': vp['height'],
                'deviceScaleFactor': 1,
                'mobile': vp['mobile']
            })

            for route in routes:
                url = f"http://localhost:4173{route['path']}"
                await call('Page.navigate', {'url': url})
                await asyncio.sleep(1.2)

                # Check horizontal overflow
                eval_res = await call('Runtime.evaluate', {
                    'expression': 'JSON.stringify({ sW: document.documentElement.scrollWidth, iW: window.innerWidth, title: document.title })',
                    'returnByValue': True
                })
                data = json.loads(eval_res.get('result', {}).get('value', '{}'))
                sW = data.get('sW', 0)
                iW = data.get('iW', 0)
                overflow = sW > iW
                status = "OVERFLOW" if overflow else "OK"
                print(f"[{status}] {route['name']}: scrollWidth={sW}, innerWidth={iW}")
                if overflow:
                    overflow_issues.append(f"{vp['name']} {route['name']}: sW={sW} > iW={iW}")

                # Capture selective screenshots for visual validation
                if route['name'] in ['home', 'login', 'register'] or vp['name'] in ['Mobile_iPhone_390', 'Desktop_1920']:
                    res = await call('Page.captureScreenshot', {
                        'format': 'png',
                        'captureBeyondViewport': False
                    })
                    snap_path = os.path.join(output_dir, f"{vp['name']}_{route['name']}.png")
                    with open(snap_path, 'wb') as f:
                        f.write(base64.b64decode(res['data']))

    proc.terminate()
    print("\n================ VERIFICATION SUMMARY ================")
    if not overflow_issues:
        print("PERFECT: ZERO horizontal overflow across all tested devices and routes!")
    else:
        print(f"FAILED with {len(overflow_issues)} issues:")
        for issue in overflow_issues:
            print(" - ", issue)

if __name__ == '__main__':
    asyncio.run(run_verification())
