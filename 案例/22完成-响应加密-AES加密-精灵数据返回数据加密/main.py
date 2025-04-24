# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/04/24
"""
url: https://www.jinglingshuju.com/articles
使用的是 MODE_ECB 不用传入 iv，js环境下虽然有iv但是其实没用
"""
import json

import requests
from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad
import base64
from tools.crypto_utils import words_to_bytes


def decrypted_data(data):
    # 使用 CryptoJS 的 key 和 iv 解密
    key_words = [
        1146640983,
        1685607770,
        896165747,
        1430671430
    ]
    # 转为字节取前16位
    key = words_to_bytes(key_words)[:16]
    ciphertext = base64.b64decode(data)
    cipher = AES.new(key, AES.MODE_ECB)
    plaintext = cipher.decrypt(ciphertext)
    data = unpad(plaintext, 16).decode('utf-8')
    return json.loads(data)


#
headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,sl;q=0.7',
    'cache-control': 'no-cache',
    # 'content-length': '0',
    'content-type': 'application/x-www-form-urlencoded',
    'origin': 'https://www.jinglingshuju.com',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
}
data = {
    "page": 2,
    "num": 20
}
response = requests.post('https://vapi.jinglingshuju.com/Data/getNewsList', headers=headers, data=data)
encrypted_data = response.json()['data']
print(decrypted_data(encrypted_data))
