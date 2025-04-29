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
import requests
from decouple import config
import random


class BeikeLogin:
    def __init__(self):
        # 从 settings 中获取贝壳网的账号和密码
        self.username = config('beike_username')
        self.password = config('beike_password')

    def get_params(self):
        """
        获取登录请求的必要参数
        :return: 登录票据 ID, 公钥, 加密版本
        """
        data = {
            "service": "https://ajax.api.ke.com/login/login/getuserinfo",
            "version": "2.0"
        }
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        }

        # 发送 POST 请求获取登录参数
        response = requests.post("https://clogin.ke.com/authentication/initialize", json=data, headers=headers)
        response_data = response.json()

        # 提取返回的参数
        login_ticket_Id = response_data['loginTicketId']
        public_key = response_data['publicKey']['key']
        encode_version = response_data['publicKey']['version']

        return {
            "login_ticket_Id": login_ticket_Id,
            "public_key": public_key,
            "encode_version": encode_version
        }

    def encrypt_password(self, public_key):
        """
        使用公钥加密密码
        :param public_key: RSA 公钥
        :return: 加密后的密码
        """
        b64key = base64.b64decode(public_key)
        key = RSA.import_key(b64key)
        cipher = PKCS1_cipher.new(key)  # 生成一个加密的类
        encrypt_text = base64.b64encode(cipher.encrypt(self.password.encode()))  # 对密码进行加密
        return encrypt_text.decode()  # 对加密文本进行解码返回

    def get_random_coordinates(self):
        """
        模拟一个随机的用户点击坐标，以增加真实性
        :return: 随机坐标
        """
        # 随机模拟坐标，使用一些常见的屏幕尺寸范围
        screen_width = random.randint(1024, 1920)
        screen_height = random.randint(768, 1080)
        click_x = random.randint(0, screen_width)
        click_y = random.randint(0, screen_height)

        return {
            "registerPosLx": click_x - 100,  # 让坐标看起来更自然
            "registerPosLy": click_y - 100,
            "registerPosRx": click_x + 100,
            "registerPosRy": click_y + 100,
            "clickPosX": click_x,
            "clickPosY": click_y,
            "screen": f"{screen_width}_{screen_height}"
        }

    def login(self):
        """
        执行登录操作
        :return: 登录响应
        """
        param = self.get_params()
        encrypted_password = self.encrypt_password(param['public_key'])

        # 模拟更真实的坐标
        context = self.get_random_coordinates()

        json_data = {
            'service': 'https://ajax.api.ke.com/login/login/getuserinfo',
            'mainAuthMethodName': 'username-password',
            'accountSystem': 'customer',
            'credential': {
                'username': self.username,
                'password': encrypted_password,
                'encodeVersion': param['encode_version'],
            },
            'context': context,
            'loginTicketId': param['login_ticket_Id'],
            'version': '2.0',
            'srcId': 'eyJ0Ijoie1wiZGF0YVwiOlwiOTM4NGUyYTU4MTlkYmIyMDg3NzY3MWZhMDM2Y2IxODRhN2M4YTY1OGRhMWJlMzI2MWIzOWFlY2VhYmZjMTg3NGE5OTU0ZTcwNDEzNWYyNWI2NzQ3NmYzZTFkMjE5NjRiYThkMTMwNzBkNTE0NDk2NThkYTliYThiMGY5ZTI1OWQ5ZTJiNTQ5NmJmOWViMGNiZTkwMDAzYThhZjI5YWQ1ZmI5OTc3YzUzMjE5MDhkZjMwZDVkNjdhMzVkN2FjNDJmMWJlNGRiMmQ0NzY4ZjIzMTA4NmFlNjYzZGU0ZWMwYzRiZDJiZjY4ODlhZTY5YjBkNTVhNmE2NjAyZmViYWU5OFwiLFwia2V5X2lkXCI6XCIxXCIsXCJzaWduXCI6XCIxMzQ5MTdlOFwifSIsInIiOiJodHRwczovL2JqLnp1LmtlLmNvbS96dWZhbmcvcGcyLyNjb250ZW50TGlzdCIsIm9zIjoid2ViIiwidiI6IjAuMSJ9',
            'ticketMaxAge': 604800,
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
        }

        # 发起 POST 请求进行登录
        response = requests.post('https://clogin.ke.com/authentication/authenticate', headers=headers, json=json_data)
        return response.text


# 示例：使用类进行登录
if __name__ == "__main__":
    beike_login = BeikeLogin()
    login_response = beike_login.login()
    print(login_response)
