# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/04/25
"""
贝壳网登录密码加密
本质就是 RSA 加密。固定公钥进行加密
url: https://bj.zu.ke.com/zufang
"""
import base64
from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_v1_5 as PKCS1_cipher

public_key = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCJxBJn2gY+D2OdldUxpsNwIGyKc/QRvqbWWGIdIewE7SxyyGHNcLdT+2bb6E6Ko7jBlEElUBkKJJ93G761dp6pXu7ORTjJ1mta99Bjud7+u/3473mG+QReoH4ux8idsd+E0TW0HWUP6zyfYy42HPSaN3pjetM30sVazdWxpvAH6wIDAQAB"
b64key = base64.b64decode(public_key)
key = RSA.import_key(b64key)
cipher = PKCS1_cipher.new(key)  # 生成一个加密的类
msg = "123456"
encrypt_text = base64.b64encode(cipher.encrypt(msg.encode()))  # 对数据进行加密
print(encrypt_text.decode())  # 对文本进行解码码

import requests

cookies = {
    'select_city': '110000',
    'lianjia_uuid': 'd26faeec-8761-4ae4-a0c2-121a360e8318',
    'sajssdk_2015_cross_new_user': '1',
    'sensorsdata2015jssdkcross': '%7B%22distinct_id%22%3A%221966b67a1f763d-0ad79ab3bdfb2c-26011c51-2073600-1966b67a1f812b6%22%2C%22%24device_id%22%3A%221966b67a1f763d-0ad79ab3bdfb2c-26011c51-2073600-1966b67a1f812b6%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%7D%7D',
    'lianjia_ssid': '6445f43d-21a6-4028-9ec2-70886bea6e45',
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,sl;q=0.7',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json;charset=UTF-8',
    'Origin': 'https://bj.zu.ke.com',
    'Pragma': 'no-cache',
    'Referer': 'https://bj.zu.ke.com/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    # 'Cookie': 'select_city=110000; lianjia_uuid=d26faeec-8761-4ae4-a0c2-121a360e8318; sajssdk_2015_cross_new_user=1; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%221966b67a1f763d-0ad79ab3bdfb2c-26011c51-2073600-1966b67a1f812b6%22%2C%22%24device_id%22%3A%221966b67a1f763d-0ad79ab3bdfb2c-26011c51-2073600-1966b67a1f812b6%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%7D%7D; lianjia_ssid=6445f43d-21a6-4028-9ec2-70886bea6e45',
}

json_data = {
    'service': 'https://ajax.api.ke.com/login/login/getuserinfo',
    'mainAuthMethodName': 'username-password',
    'accountSystem': 'customer',
    'credential': {
        'username': '17582828587',
        'password': encrypt_text.decode(),
        'encodeVersion': '2',
    },
    'context': {
        'ua': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'clientSource': 'pc',
        'os': 'Windows',
        'osVersion': '10',
        'registerPosLx': -73,
        'registerPosLy': 425.5,
        'registerPosRx': 207,
        'registerPosRy': 469.5,
        'clickPosX': 86,
        'clickPosY': 434,
        'screen': '134_798',
        'dataId': 'DuStKwnn9Bv8phsQMThWXilZ1evXdKB3Pj+6pwOkqgBv0Ywj9iN6ckzyf/UNTzKQ',
    },
    'loginTicketId': 'sSFL27VGnpOQ0J1msEC1LdngKtFiu7Cr',
    'version': '2.0',
    'srcId': 'eyJ0Ijoie1wiZGF0YVwiOlwiOTM4NGUyYTU4MTlkYmIyMDg3NzY3MWZhMDM2Y2IxODRhN2M4YTY1OGRhMWJlMzI2MWIzOWFlY2VhYmZjMTg3NGE5OTU0ZTcwNDEzNWYyNWI2NzQ3NmYzZTFkMjE5NjRiYThkMTMwNzBkNTE0NDk2NThkYTliYThiMGY5ZTI1OWQ5ZTJiNTQ5NmJmOWViMGNiZTkwMDAzYThhZjI5YWQ1ZmI5OTc3YzUzMjE5MDhkZjMwZDVkNjdhMzVkN2FjNDJmMWJlNGRiMmQ0NzY4ZjIzMTA4NmFlNjYzZGU0ZWMwYzRiZDJiZjY4ODlhZTY5YjBkNTVhNmE2NjAyZmViYWU5OFwiLFwia2V5X2lkXCI6XCIxXCIsXCJzaWduXCI6XCIxMzQ5MTdlOFwifSIsInIiOiJodHRwczovL2JqLnp1LmtlLmNvbS96dWZhbmcvcGcyLyNjb250ZW50TGlzdCIsIm9zIjoid2ViIiwidiI6IjAuMSJ9',
    'ticketMaxAge': 604800,
}

response = requests.post('https://clogin.ke.com/authentication/authenticate', cookies=cookies, headers=headers,
                         json=json_data)
print(response.text)
