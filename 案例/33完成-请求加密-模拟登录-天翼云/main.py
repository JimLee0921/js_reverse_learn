# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/04/29
"""
天翼云模拟登陆参数加密
url: https://m.ctyun.cn/wap/main/auth/login
"""
import execjs
from decouple import config
import requests


class TianyiYunLogin:
    def __init__(self, js_file_path='main.js'):
        # 读取 JS 文件并编译
        with open(js_file_path, 'r', encoding='utf-8') as f:
            js_code = f.read()
        self.ctx = execjs.compile(js_code)

        # 初始化 headers 和 cookies
        self.headers = {
            'Accept': 'application/json, text/plain, */*',
            'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,sl;q=0.7',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Csm': '4e0c230dc504fafa92cdbb898274fc2ab0f803f12d15831ac90e738609350ebe',
            'Cst': '1745890679257',
            'Origin': 'https://m.ctyun.cn',
            'Pragma': 'no-cache',
            'Referer': 'https://m.ctyun.cn/wap/main/auth/login',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'x-riskdevicesign': '276debfca07a26ffaca0b3a50e97d21c',
        }

    def get_cookies(self):
        """获取 cookies"""
        return self.ctx.call('getCookies')

    def get_params(self):
        """获取请求的参数"""
        return self.ctx.call('getParams')

    def encrypt_password(self, username, password):
        """加密密码"""
        return self.ctx.call('encryptPassword', username, password)

    def login(self, username, password):
        """执行登录请求"""
        # 获取 cookies 和 params
        cookies = self.get_cookies()
        params = self.get_params()

        # 加密密码
        data = {
            'userName': username,
            'password': self.encrypt_password(username, password),
        }

        # 发送登录请求
        response = requests.post(
            'https://m.ctyun.cn/account/login',
            params=params,
            headers=self.headers,
            data=data,
            cookies=cookies
        )

        return response.text


# ==================== 使用示例 ====================
if __name__ == '__main__':
    # 创建登录类实例
    login = TianyiYunLogin()

    # 获取用户名和密码
    username = config('tianyiyun_username')
    password = config('tianyiyun_password')

    # 执行登录
    response = login.login(username, password)
    print(response)
