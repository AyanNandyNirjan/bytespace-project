import asyncio, json, urllib.request, websockets, time, subprocess, os, base64

chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
profile_dir = r'C:\Users\nirjo\.gemini\antigravity\brain\dce8b0bb-4bd4-46fa-bbae-57258b7de772\scratch\chrome_final_verify_profile'

async def verify():
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

    output_dir = r'C:\Users\nirjo\.gemini\antigravity\brain\dce8b0bb-4bd4-46fa-bbae-57258b7de772\scratch\auth_verified_scaled'
    os.makedirs(output_dir, exist_ok=True)

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

        test_cases = [
            {'vp': {'width': 1920, 'height': 940, 'mobile': False}, 'name': 'Desktop_1920x940'},
            {'vp': {'width': 1440, 'height': 900, 'mobile': False}, 'name': 'Laptop_1440x900'},
            {'vp': {'width': 390, 'height': 844, 'mobile': True}, 'name': 'Mobile_390x844'}
        ]

        for tc in test_cases:
            vp = tc['vp']
            await call('Emulation.setDeviceMetricsOverride', {
                'width': vp['width'],
                'height': vp['height'],
                'deviceScaleFactor': 1,
                'mobile': vp['mobile']
            })

            for route in ['/login', '/register']:
                r_name = route.replace('/', '')
                await call('Page.navigate', {'url': f'http://localhost:4173{route}'})
                await asyncio.sleep(1.2)

                # Check scrollWidth vs innerWidth
                eval_res = await call('Runtime.evaluate', {
                    'expression': 'JSON.stringify({ sW: document.documentElement.scrollWidth, iW: window.innerWidth })',
                    'returnByValue': True
                })
                data = json.loads(eval_res.get('result', {}).get('value', '{}'))
                sW = data.get('sW', 0)
                iW = data.get('iW', 0)
                print(f"[{tc['name']} {r_name}] scrollWidth={sW}, innerWidth={iW}")

                res = await call('Page.captureScreenshot', {
                    'format': 'png',
                    'captureBeyondViewport': False
                })
                snap_path = os.path.join(output_dir, f"{tc['name']}_{r_name}.png")
                with open(snap_path, 'wb') as f:
                    f.write(base64.b64decode(res['data']))
                print(f"Saved {snap_path}")

    proc.terminate()

if __name__ == '__main__':
    asyncio.run(verify())
