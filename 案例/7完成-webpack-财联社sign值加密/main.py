# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/04/23
"""
财联社 sign 请求参数 sign 值加密
网址: https://www.cls.cn/telegraph
请求参数中根据时间返回数据不同
"""
import time
import requests
import execjs

params = {
    'app': 'CailianpressWeb',
    'category': '',
    'lastTime': time.time(),
    'last_time': time.time(),
    'os': 'web',
    'refresh_type': '1',
    'rn': '60',
    'sv': '8.4.6',
}
with open('main.js', 'r', encoding='utf-8') as f:
    js_code = f.read()
    ctx = execjs.compile(js_code)
    sign = ctx.call('genSign', params)
    params['sign'] = sign

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,sl;q=0.7',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json;charset=utf-8',
    'Pragma': 'no-cache',
    'Referer': 'https://www.cls.cn/telegraph',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

response = requests.get('https://www.cls.cn/nodeapi/telegraphList', params=params, headers=headers)
item_list = response.json()['data']['roll_data']
for item in item_list:
    print(item)
