import asyncio
import base64
import json
import os
import subprocess
import time
import urllib.request
import websockets
from PIL import Image
import numpy as np

SHAPES = [
    'lime_cylinder',
    'lime_squiggle',
    'white_squiggle',
    'white_ring',
    'white_spiral',
    'white_triangle'
]

def trim_alpha(im):
    im = im.convert('RGBA')
    arr = np.array(im)
    alpha = arr[:, :, 3]
    rows = np.where(alpha > 1)[0]
    cols = np.where(alpha > 1)[1]
    if len(rows) == 0 or len(cols) == 0:
        return im
    # Pad by 6 pixels for antialiasing
    pad = 6
    ymin = max(0, rows.min() - pad)
    ymax = min(im.height, rows.max() + pad)
    xmin = max(0, cols.min() - pad)
    xmax = min(im.width, cols.max() + pad)
    return im.crop((xmin, ymin, xmax, ymax))

async def run():
    user_data = os.path.abspath('scratch/qa_shapes_profile')
    os.makedirs(user_data, exist_ok=True)
    out_dir = os.path.abspath('scratch/qa_shapes')
    os.makedirs(out_dir, exist_ok=True)

    cmd = [
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new',
        '--remote-debugging-port=9233',
        f'--user-data-dir={user_data}',
        '--disable-extensions',
        '--run-all-compositor-stages-before-draw',
        'about:blank'
    ]
    proc = subprocess.Popen(cmd)
    time.sleep(2.0)

    try:
        with urllib.request.urlopen('http://127.0.0.1:9233/json') as r:
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

            await send('Emulation.setDeviceMetricsOverride', {
                'width': 800,
                'height': 800,
                'deviceScaleFactor': 1,
                'mobile': False
            })
            await send('Emulation.setDefaultBackgroundColorOverride', {
                'color': {'r': 0, 'g': 0, 'b': 0, 'a': 0}
            })

            for shape in SHAPES:
                file_url = 'file:///' + os.path.abspath('scratch/render_all_shapes.html').replace('\\', '/') + f'?shape={shape}'
                await send('Page.navigate', {'url': file_url})
                await asyncio.sleep(0.8)
                ss = await send('Page.captureScreenshot', {
                    'format': 'png',
                    'fromSurface': True,
                    'omitBackground': True
                })
                raw_bytes = base64.b64decode(ss['result']['data'])
                import io
                raw_im = Image.open(io.BytesIO(raw_bytes))
                trimmed_im = trim_alpha(raw_im)
                
                out_path = os.path.join(out_dir, f'{shape}.png')
                trimmed_im.save(out_path, format='PNG')
                print(f'Rendered {shape} -> {out_path} ({trimmed_im.size})')
    finally:
        proc.kill()

if __name__ == '__main__':
    asyncio.run(run())
