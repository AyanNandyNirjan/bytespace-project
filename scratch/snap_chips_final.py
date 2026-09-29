import asyncio
import base64
import json
import os
import subprocess
import time
import urllib.request
import websockets
from PIL import Image

async def main():
    user_data = os.path.abspath('scratch/qa_snap_chips')
    out_dir = os.path.abspath('scratch/qa_more')
    os.makedirs(out_dir, exist_ok=True)

    cmd = [
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new',
        '--remote-debugging-port=9240',
        f'--user-data-dir={user_data}',
        '--disable-extensions',
        'http://localhost:4173/'
    ]
    p = subprocess.Popen(cmd)
    time.sleep(2)
    try:
        with urllib.request.urlopen('http://127.0.0.1:9240/json') as r:
            tabs = json.loads(r.read().decode())
        ws_url = next(t for t in tabs if t.get('type') == 'page')['webSocketDebuggerUrl']
        async with websockets.connect(ws_url) as ws:
            msg_id = 0
            async def send(method, params=None):
                nonlocal msg_id
                msg_id += 1
                await ws.send(json.dumps({'id': msg_id, 'method': method, 'params': params or {}}))
                while True:
                    resp = json.loads(await ws.recv())
                    if resp.get('id') == msg_id: return resp
            
            await send('Emulation.setDeviceMetricsOverride', {'width': 1440, 'height': 1024, 'deviceScaleFactor': 1, 'mobile': False})
            await send('Page.navigate', {'url': 'http://localhost:4173/'})
            await asyncio.sleep(2)

            # Scroll so chips section is centered in viewport
            await send('Runtime.evaluate', {
                'expression': '''(() => {
                    const heading = Array.from(document.querySelectorAll('h2')).find(h => h.textContent.includes('Discover Your Passion'));
                    if (heading) heading.scrollIntoView({ block: 'start', behavior: 'instant' });
                })()'''
            })
            await asyncio.sleep(1)

            # Capture viewport directly
            ss = await send('Page.captureScreenshot', {'format': 'png'})
            viewport_path = os.path.join(out_dir, 'chips_section_viewport.png')
            with open(viewport_path, 'wb') as f:
                f.write(base64.b64decode(ss['result']['data']))
            print('Captured chips_section_viewport.png')

            # Get + More button bounding box relative to current viewport
            res = await send('Runtime.evaluate', {
                'expression': '''(() => {
                    const moreBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.trim() === '+ More');
                    const r = moreBtn.getBoundingClientRect();
                    return { x: r.x, y: r.y, width: r.width, height: r.height };
                })()''',
                'returnByValue': True
            })
            box = res['result']['result'].get('value')
            print('+ More viewport box:', box)

            if box:
                # Crop with PIL directly from the captured viewport screenshot
                im = Image.open(viewport_path)
                # Expand box slightly to include preceding chip 'Security'
                x1 = max(0, int(box['x'] - 110))
                y1 = max(0, int(box['y'] - 10))
                x2 = min(im.width, int(box['x'] + box['width'] + 20))
                y2 = min(im.height, int(box['y'] + box['height'] + 10))
                cropped = im.crop((x1, y1, x2, y2))
                crop_path = os.path.join(out_dir, 'more_button_cropped_verified.png')
                cropped.save(crop_path)
                print(f'Saved cropped + More with preceding chip to {crop_path}')

    finally:
        p.kill()

if __name__ == '__main__':
    asyncio.run(main())
