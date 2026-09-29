import asyncio
import base64
import json
import os
import subprocess
import time
import urllib.request
import websockets

async def check_more_chip():
    user_data = os.path.abspath('scratch/qa_more_profile')
    out_dir = os.path.abspath('scratch/qa_more')
    os.makedirs(out_dir, exist_ok=True)

    cmd = [
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new',
        '--remote-debugging-port=9239',
        f'--user-data-dir={user_data}',
        '--disable-extensions',
        'http://localhost:4173/'
    ]
    p = subprocess.Popen(cmd)
    time.sleep(2)
    try:
        with urllib.request.urlopen('http://127.0.0.1:9239/json') as r:
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
            
            await send('Emulation.setDeviceMetricsOverride', {'width': 1440, 'height': 1024, 'deviceScaleFactor': 1, 'mobile': False})
            await send('Page.navigate', {'url': 'http://localhost:4173/'})
            await asyncio.sleep(2)
            
            # Scroll chips section into view instantly
            eval_res = await send('Runtime.evaluate', {
                'expression': '''(() => {
                    const buttons = Array.from(document.querySelectorAll('button'));
                    const moreBtn = buttons.find(b => b.textContent.trim() === '+ More');
                    if (!moreBtn) return null;
                    const top = moreBtn.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({ top: top - 300, behavior: 'instant' });
                    const r = moreBtn.getBoundingClientRect();
                    return { x: r.x, y: r.y, width: r.width, height: r.height };
                })()''',
                'returnByValue': True
            })
            await asyncio.sleep(0.5)
            # Re-read rect after scroll
            eval_res = await send('Runtime.evaluate', {
                'expression': '''(() => {
                    const buttons = Array.from(document.querySelectorAll('button'));
                    const moreBtn = buttons.find(b => b.textContent.trim() === '+ More');
                    const r = moreBtn.getBoundingClientRect();
                    return { x: r.x, y: r.y, width: r.width, height: r.height };
                })()''',
                'returnByValue': True
            })
            rect = eval_res['result']['result'].get('value')
            print('+ More button scrolled rect:', rect)
            
            if rect:
                # Capture zoom around '+ More' and preceding chip
                ss_zoom = await send('Page.captureScreenshot', {
                    'format': 'png',
                    'clip': {
                        'x': max(0, rect['x'] - 130),
                        'y': max(0, rect['y'] - 15),
                        'width': rect['width'] + 150,
                        'height': rect['height'] + 30,
                        'scale': 2
                    }
                })
                with open(os.path.join(out_dir, 'more_zoom_verified.png'), 'wb') as f:
                    f.write(base64.b64decode(ss_zoom['result']['data']))
                print('Captured more_zoom_verified.png')

            # Capture entire chips section
            eval_chips = await send('Runtime.evaluate', {
                'expression': '''(() => {
                    const heading = Array.from(document.querySelectorAll('h2')).find(h => h.textContent.includes('Discover Your Passion'));
                    if (!heading) return null;
                    const container = heading.closest('section');
                    if (!container) return null;
                    container.scrollIntoView({ block: 'start' });
                    const r = container.getBoundingClientRect();
                    return { x: r.x, y: r.y, width: r.width, height: Math.min(r.height, 600) };
                })()''',
                'returnByValue': True
            })
            chips_rect = eval_chips['result']['result'].get('value')
            print('Section rect:', chips_rect)
            if chips_rect:
                ss_chips = await send('Page.captureScreenshot', {
                    'format': 'png',
                    'clip': {
                        'x': max(0, chips_rect['x']),
                        'y': max(0, chips_rect['y']),
                        'width': chips_rect['width'],
                        'height': chips_rect['height'],
                        'scale': 1
                    }
                })
                with open(os.path.join(out_dir, 'section_chips_verified.png'), 'wb') as f:
                    f.write(base64.b64decode(ss_chips['result']['data']))
                print('Captured section_chips_verified.png')

    finally:
        p.kill()

if __name__ == '__main__':
    asyncio.run(check_more_chip())
