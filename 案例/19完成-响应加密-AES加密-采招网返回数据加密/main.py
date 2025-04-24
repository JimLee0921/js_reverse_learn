# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/04/24
"""
标准 AES 加密
url: https://search.bidcenter.com.cn/search?keywords=%e6%b0%b4%e5%a4%84%e7%90%86
"""
import requests
from Crypto.Cipher import AES
import base64
from urllib.parse import quote


def words_to_bytes(words):
    """将 CryptoJS 的 WordArray 转为 python 可用的 bytes"""
    b = bytearray()
    for word in words:
        b.extend(word.to_bytes(4, 'big'))
    return bytes(b)


def aes_decrypt(ciphertext_base64, key_words, iv_words):
    """使用 AES-CBC + ZeroPadding 解密"""
    key = words_to_bytes(key_words)[:16]
    iv = words_to_bytes(iv_words)[:16]

    ciphertext = base64.b64decode(ciphertext_base64)
    cipher = AES.new(key, AES.MODE_CBC, iv)
    plaintext_padded = cipher.decrypt(ciphertext)
    plaintext = plaintext_padded.rstrip(b'\x00')  # ZeroPadding 去尾部 0x00
    return plaintext.decode('utf-8', errors='ignore')


def search_bidcenter(keyword, page=1):
    """发送 POST 请求并解密返回数据"""
    url = "https://interface.bidcenter.com.cn/search/GetSearchProHandler.ashx"

    headers = {
        "accept": "text/plain, */*; q=0.01",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "origin": "https://search.bidcenter.com.cn",
        "referer": "https://search.bidcenter.com.cn/",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36"
    }

    data = {
        "from": "6137",
        "guid": "6a7b5942-764f-46ba-821f-4df27b895646",
        "location": "6138",
        "token": "",
        "next_token": "",
        "keywords": quote(keyword),  # URL 编码关键词
        "mod": "0",
        "page": str(page)
    }

    # 请求接口
    response = requests.post(url, headers=headers, data=data)
    if not response.ok:
        raise Exception(f"请求失败：{response.status_code} - {response.text}")

    encrypted_text = response.text

    # 使用 CryptoJS 的 key 和 iv 解密
    key_words = [863652730, 2036741733, 1164342596, 1782662963]
    iv_words = [1719227713, 1314533489, 1397643880, 1749959510]

    decrypted_text = aes_decrypt(encrypted_text, key_words, iv_words)
    return decrypted_text


if __name__ == "__main__":
    keyword = "园林 绿化"
    result = search_bidcenter(keyword, page=2)
    print("解密结果：", result)
