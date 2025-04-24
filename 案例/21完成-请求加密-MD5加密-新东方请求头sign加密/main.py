# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/04/24
"""
请求头 sgin 值加密
url: https://souke.xdf.cn/search
"""
from urllib.parse import urlencode
import hashlib
import requests
import time

headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,sl;q=0.7',
    'cache-control': 'no-cache',
    'content-type': 'application/json',
    'origin': 'https://souke.xdf.cn',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://souke.xdf.cn/search?cityCode=330200',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'sign': '',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
}

params = {
    'appId': '5053',
    't': str(int(time.time() * 1000)),
    'cityCode': '330200',
    'pageIndex': '6',
    'pageSize': '12',
    'keyword': '英语',
    'order': '0',
}

sign = hashlib.md5(urlencode(params).encode('utf-8'))
# 拼接字符串
query_string = urlencode(params) + "750F82C2-D8F6-49F6-878C-1E7EBEBC8DA2"
# appId=5053&t=1745474791987&cityCode=330200&pageIndex=1&pageSize=12&keyword=%E8%8B%B1%E8%AF%AD&order=0
headers['sign'] = hashlib.md5(query_string.encode('utf-8')).hexdigest()

response = requests.get('https://dsapi.xdf.cn/product/v2/class/search', params=params, headers=headers)
print(response.text)
