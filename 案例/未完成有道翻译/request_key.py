# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/03/25
"""
sign 值的 md5 加密
这个文件请求的是翻译接口返回数据解密用到的密钥等信息
"""
import time
import hashlib
import requests
from tools.crypto_utils import md5_decrypt


def gen_sign(client, timestamp, product, key):
    return md5_decrypt(f"client={client}&mysticTime={timestamp}&product={product}&key={key}")

def decrypt_data(data, key, iv):
    """
    AES 解密
    :param data: 密文
    :param key:
    :param iv:
    :return:
    """
    key = hashlib.md5(key.encode('utf-8')).digest()
    iv = hashlib.md5(iv.encode('utf-8')).digest()




def get_secret():
    cookies = {
        'OUTFOX_SEARCH_USER_ID_NCOO': '441068363.5340472',
        'OUTFOX_SEARCH_USER_ID': '1291741945@183.133.76.252',
        'DICT_DOCTRANS_SESSION_ID': 'OTZlYjg5NTUtMGE2MS00NWU3LTkyNzktODg1YzEwOTU4M2Y0',
    }

    headers = {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,sl;q=0.7',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Origin': 'https://fanyi.youdao.com',
        'Pragma': 'no-cache',
        'Referer': 'https://fanyi.youdao.com/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        # 'Cookie': 'OUTFOX_SEARCH_USER_ID_NCOO=441068363.5340472; OUTFOX_SEARCH_USER_ID=1291741945@183.133.76.252; DICT_DOCTRANS_SESSION_ID=OTZlYjg5NTUtMGE2MS00NWU3LTkyNzktODg1YzEwOTU4M2Y0',
    }

    params = {
        'keyid': 'webfanyi-key-getter',
        'sign': None,
        'client': 'fanyideskweb',
        'product': 'webfanyi',
        'appVersion': '1.0.0',
        'vendor': 'web',
        'pointParam': 'client,mysticTime,product',
        'mysticTime': str(int(time.time() * 1000)),
        'keyfrom': 'fanyi.web',
        'mid': '1',
        'screen': '1',
        'model': '1',
        'network': 'wifi',
        'abtest': '0',
        'yduuid': 'abcdefg',
    }
    params['sign'] = gen_sign(params['client'], params['mysticTime'], params['product'], 'asdjnjfenknafdfsdfsd')

    response = requests.get(
        'https://dict.youdao.com/webtranslate/key',
        cookies=cookies,
        headers=headers,
        params=params,
    )
    return response.json().get('data', {})
