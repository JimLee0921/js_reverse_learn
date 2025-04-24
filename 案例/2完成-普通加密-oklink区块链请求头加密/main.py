# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/04/22
"""
x-apikey 请求头加密
网站 https://www.oklink.com/zh-hans/bitcoin/block-list/page/6
"""
import requests
import execjs

with open('main.js', 'r', encoding='utf-8') as f:
    js_code = f.read()
    ctx = execjs.compile(js_code)
    x_apikey = ctx.call('genApiKey')

headers = {
    'accept': 'application/json',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,sl;q=0.7',
    'app-type': 'web',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://www.oklink.com/zh-hans/bitcoin/block-list/page/2',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'x-apikey': x_apikey,
    'x-cdn': 'https://static.oklink.com',

}

params = {
    'offset': '20',
    'limit': '20',
    't': '1745305960630',
}

response = requests.get(
    'https://www.oklink.com/api/explorer/v1/btc/blocks',
    params=params,
    headers=headers
)
print(response.text)
