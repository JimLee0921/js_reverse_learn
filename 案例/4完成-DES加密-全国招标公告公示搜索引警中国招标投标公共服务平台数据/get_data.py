# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/03/20
"""

"""
import requests
from Crypto.Cipher import DES
from Crypto.Util.Padding import unpad
import requests
import base64
import json
import execjs
import time
from urllib.parse import urlencode


# 获取请求参数
def get_type__1017(url: str, params: dict):
    params.pop("type__1017", None)
    base_url = url + '?' + urlencode(params)
    with open('get_params.js', 'r', encoding='utf-8') as f:
        js_code = f.read()
        ctx = execjs.compile(js_code)
        type__1017 = ctx.call('get_type', base_url)
    return type__1017


# 使用 python 进行解密
def des_decrypted(text):
    des_cipher = DES.new(key=("1qaz@wsx3e".encode())[:8], mode=DES.MODE_ECB)
    data_str = unpad(des_cipher.decrypt(base64.b64decode(text)), 8).decode()
    return json.loads(data_str)


params = {
    'province': '',
    'industry': '',
    'type__1017': '',
}

url = 'https://ctbpsp.com/cutominfoapi/recommand/type/5/pagesize/10/currentpage/1'

params['type__1017'] = get_type__1017(url, params)
print(params)
timestamp = str(int(time.time() * 1000))
cookies = {
    'Hm_lvt_b966fe201514832da03dcf6cbf25b8a2': timestamp,
    'HMACCOUNT': 'EB3B754CBA210B99',
    'Hm_lpvt_b966fe201514832da03dcf6cbf25b8a2': timestamp,
    "acw_tc": "1a0c639317442702148916345e007e5a3305fd95685a251cb4b44635bc094d",
    "ssxmod_itna": "Yq+xyD9DBDcDnDRxDqqBcDB+eNf5vuGhWxq4hcG40QzDlhFxA5D8D6DQeGTa9t3bUi+xPKUY9+DmxbGoxYjxQQB8xe7LYBRKhdKfDB3DEx06a1WWxiiSDCeDIDWeDiDG4GmYqGtDpxG=D7OUlSuXSDi3DbOtDf4DmDGAg8qDgDYQDGwK2D7QDIkteFr4MmDDlmYaoGDDh0rhPhWQ3gwTZFxb4Y7tDjuTD/+hsoPTGPF4xheH1Tnp9DB6vxBQVBkiRBeqMYlXeX0xHK0h34bp3Q+GjWD45m7PeKVDeQAZaFx+Um+hKtO1elB4mwCDD34YhUALdQDxD===",
    "ssxmod_itna2": "Yq+xyD9DBDcDnDRxDqqBcDB+eNf5vuGhWxq4hcG40QD6cURG405x4R303rQMbLtWQqidtR=DbUaLYfdIb5umAQgROZi7nfxpC6t68nEqomMK2zq5QPYrUqHEioTRSKz8zuCfMOplz47d3cDnoS3MtAm8XxWb4oI2tK7wte9qmlK3oBmkGoobeDVr2+Q+QPmuNTbq+RIDxqIx+KOA3IGA55jnfDdTHPoDYu3wHW920OiA2cWnhE4QN4QfNI3k3C+bvK6bLl8mBAYt8pKyE0uhbIKkkI8m09imZ89qOexs2V4ebTVUFYfOTiqzI+8BLQsbtVE=L71rdoW+YF88i+TgiGq+hmuNF83rGYxMYmbtKxPi8PFfYZo330W30dauOD+xYLY4qFChxA3CQY=dGdY2Kc0DKODILKe0zgOQKMdPbrdp7noYFRv5rx5Y+tY=L0DSGv3DxU2bxRdqGYV4NQjojENIpQMRoUakERjTODYYo3Mw/itIBwTh=WmDom7UZDIoTZB0LGDMpxzrYvR+mioIa2NR+x8KI4mL06k6Rv6Xt+YTY5pP=EOkUPTqE6vc1ew+Oj0GfrMR07onUtz5x4rKoRCyveiMKEATortEzFNV2OG4gxbUFn56DDwPqPDh0zCmbGpEmCUZ8ljr0KYA65omUN4+xxbb+YZQCjdlze3eFKkrCn5MqFgXseyQOewGiAs9GD3QYPmD=9i0P4ea4CWMyqtDmn1rzIrbG4QwvPYLHO7sCBW7DqDDjKDYIo1b3DqfauG3BHxTjWWYGdRDoTBWDHxyrxkKqUwxuD7hcDbWmDOwPecDHZwPgV744D=="
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,sl;q=0.7',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Referer': 'https://ctbpsp.com/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

response = requests.get(
    url,
    params=params,
    cookies=cookies,
    headers=headers,
)
print(response.text)

print(des_decrypted(response.text))
