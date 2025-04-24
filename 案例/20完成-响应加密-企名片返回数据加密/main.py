# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/04/24
"""
url: https://research.qmpsee.com/ranking
返回数据加密
"""
import time

import requests
import execjs

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,sl;q=0.7',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Origin': 'https://research.qmpsee.com',
    'Pragma': 'no-cache',
    'Referer': 'https://research.qmpsee.com/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'cross-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

data = {
    'page': '1',
    'num': '8',
    'type': '榜单',
}

response = requests.post('https://wyiosapi.qimingpian.cn/web/webSiteCaNews', headers=headers, data=data)
encrypted_data = response.json()['encrypt_data']
with open('main.js', 'r', encoding='utf-8') as f:
    js_code = f.read()
    ctx = execjs.compile(js_code)
    decrypted_data = ctx.call('decrypted', encrypted_data)
    print(decrypted_data)
