import asyncio, json, urllib.request, websockets, time, subprocess, os, base64

chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
profile_dir = r'C:\Users\nirjo\.gemini\antigravity\brain\dce8b0bb-4bd4-46fa-bbae-57258b7de772\scratch\chrome_final_verify_profile'

async def capture():
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

    output_dir = r'C:\Users\nirjo\.gemini\antigravity\brain\dce8b0bb-4bd4-46fa-bbae-57258b7de772\scratch\scale_tests'
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

        await call('Emulation.setDeviceMetricsOverride', {
            'width': 1920,
            'height': 940,
            'deviceScaleFactor': 1,
            'mobile': False
        })

        for route, name in [('/login', 'login_126'), ('/register', 'register_126')]:
            await call('Page.navigate', {'url': f'http://localhost:4173{route}'})
            await asyncio.sleep(1.0)

            await call('Runtime.evaluate', {
                'expression': '''(() => {
                    const s = 1.25;
                    const container = document.querySelector('.brand-grid > div.lg\\\\:block');
                    if (container) {
                        container.style.width = Math.floor(1024 * s) + 'px';
                        container.style.height = Math.floor(728 * s) + 'px';
                        const inner = container.querySelector('div');
                        if (inner) {
                            inner.style.transform = 'translateX(-50%) scale(' + s + ')';
                        }
                    }
                })()'''
            })
            await asyncio.sleep(0.5)

            res = await call('Page.captureScreenshot', {
                'format': 'png',
                'captureBeyondViewport': False
            })
            snap_path = os.path.join(output_dir, f"{name}.png")
            with open(snap_path, 'wb') as f:
                f.write(base64.b64decode(res['data']))
            print(f"Captured {name}.png")

    proc.terminate()

if __name__ == '__main__':
    asyncio.run(capture())
