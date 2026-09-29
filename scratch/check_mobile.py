import asyncio, base64, json, os, subprocess, time, urllib.request, websockets

async def check_mobile():
    user_data = os.path.abspath('scratch/qa_mobile_check')
    out_dir = os.path.abspath('scratch/qa_logos')
    cmd = [
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new',
        '--remote-debugging-port=9236',
        f'--user-data-dir={user_data}',
        '--disable-extensions',
        'http://localhost:4173/'
    ]
    p = subprocess.Popen(cmd)
    time.sleep(2)
    try:
        with urllib.request.urlopen('http://127.0.0.1:9236/json') as r:
            tabs = json.loads(r.read().decode())
        ws_url = next(t for t in tabs if t.get('type') == 'page')['webSocketDebuggerUrl']
        async with websockets.connect(ws_url) as ws:
            msg_id = 0
            async def send(method, params=None):
                nonlocal msg_id
                msg_id += 1
                payload = {'id': msg_id, 'method': method}
                if params: payload['params'] = params
                await ws.send(json.dumps(payload))
                while True:
                    resp = json.loads(await ws.recv())
                    if resp.get('id') == msg_id: return resp
            
            await send('Emulation.setDeviceMetricsOverride', {'width': 390, 'height': 844, 'deviceScaleFactor': 2, 'mobile': True})
            await send('Page.navigate', {'url': 'http://localhost:4173/'})
            await asyncio.sleep(2)
            
            # Check horizontal overflow
            eval_res = await send('Runtime.evaluate', {
                'expression': 'document.documentElement.scrollWidth > window.innerWidth',
                'returnByValue': True
            })
            print('Eval result:', eval_res)
            
            ss = await send('Page.captureScreenshot', {'format': 'png'})
            with open(os.path.join(out_dir, 'mobile_hero_and_logos.png'), 'wb') as f:
                f.write(base64.b64decode(ss['result']['data']))
            print('Captured mobile_hero_and_logos.png')
    finally:
        p.kill()

if __name__ == '__main__':
    asyncio.run(check_mobile())
