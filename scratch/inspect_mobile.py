import asyncio
import json
import os
import subprocess
import time
import urllib.request
import websockets

async def inspect():
    # Launch Chrome with temporary user data dir so no extension interference
    user_data = os.path.abspath('scratch/chrome_profile')
    os.makedirs(user_data, exist_ok=True)
    
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
            
            # Set device metrics to 360x740 mobile
            await send('Emulation.setDeviceMetricsOverride', {
                'width': 360,
                'height': 740,
                'deviceScaleFactor': 2,
                'mobile': True
            })
            await send('Page.navigate', {'url': 'http://localhost:4173/'})
            await asyncio.sleep(2)
            
            # Check window and document sizes and elements overflowing 360
            eval_res = await send('Runtime.evaluate', {
                'expression': '''(() => {
                    const docW = document.documentElement.scrollWidth;
                    const winW = window.innerWidth;
                    const allEls = document.querySelectorAll('*');
                    const overflowing = [];
                    for (const el of allEls) {
                        const r = el.getBoundingClientRect();
                        if (r.right > 360.5 || r.left < -0.5 || r.width > 360.5) {
                            overflowing.push({
                                tag: el.tagName,
                                class: el.className,
                                text: (el.innerText || '').slice(0, 30),
                                left: Math.round(r.left),
                                right: Math.round(r.right),
                                width: Math.round(r.width)
                            });
                        }
                    }
                    return {
                        docScrollWidth: docW,
                        winInnerWidth: winW,
                        bodyScrollWidth: document.body.scrollWidth,
                        overflowCount: overflowing.length,
                        sampleOverflowing: overflowing.slice(0, 10)
                    };
                })()''',
                'returnByValue': True
            })
            val = eval_res.get('result', {}).get('result', {}).get('value', {})
            print('Layout Inspection on 360px:')
            print(json.dumps(val, indent=2))
            
            # Take screenshot
            shot = await send('Page.captureScreenshot', {'format': 'png'})
            import base64
            img_data = base64.b64decode(shot['result']['data'])
            out_path = os.path.abspath('public/assets/real_mobile_360.png')
            with open(out_path, 'wb') as f:
                f.write(img_data)
            print(f'Screenshot saved to {out_path}')
            
    finally:
        proc.terminate()

asyncio.run(inspect())
