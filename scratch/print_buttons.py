import asyncio, json, urllib.request, websockets, os, subprocess, time

async def check():
    user_data = os.path.abspath('scratch/qa_eval_profile')
    cmd = [
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new',
        '--remote-debugging-port=9238',
        f'--user-data-dir={user_data}',
        '--disable-extensions',
        'http://localhost:4173/'
    ]
    p = subprocess.Popen(cmd)
    time.sleep(2)
    try:
        with urllib.request.urlopen('http://127.0.0.1:9238/json') as r:
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
            
            await send('Page.navigate', {'url': 'http://localhost:4173/'})
            await asyncio.sleep(2)
            res = await send('Runtime.evaluate', {
                'expression': 'Array.from(document.querySelectorAll("button")).map(b => b.innerText || b.textContent)',
                'returnByValue': True
            })
            print('Buttons on page:', res['result']['result'].get('value'))
    finally:
        p.kill()

if __name__ == '__main__':
    asyncio.run(check())
