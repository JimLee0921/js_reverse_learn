# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/04/16
"""

"""
import json
import time

import requests
from hashlib import md5
from Crypto.Cipher import PKCS1_v1_5
from Crypto.PublicKey import RSA
import base64


class Chaojiying_Client(object):

    def __init__(self, username, password, soft_id):
        self.username = username
        password = password.encode('utf8')
        self.password = md5(password).hexdigest()
        self.soft_id = soft_id
        self.base_params = {
            'user': self.username,
            'pass2': self.password,
            'softid': self.soft_id,
        }
        self.headers = {
            'Connection': 'Keep-Alive',
            'User-Agent': 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0)',
        }

    def PostPic(self, im, codetype):
        """
        im: 图片字节
        codetype: 题目类型 参考 http://www.chaojiying.com/price.html
        """
        params = {
            'codetype': codetype,
        }
        params.update(self.base_params)
        files = {'userfile': ('ccc.jpg', im)}
        r = requests.post('http://upload.chaojiying.net/Upload/Processing.php', data=params, files=files,
                          headers=self.headers)
        return r.json()

    def PostPic_base64(self, base64_str, codetype):
        """
        im: 图片字节
        codetype: 题目类型 参考 http://www.chaojiying.com/price.html
        """
        params = {
            'codetype': codetype,
            'file_base64': base64_str
        }
        params.update(self.base_params)
        r = requests.post('http://upload.chaojiying.net/Upload/Processing.php', data=params, headers=self.headers)
        return r.json()

    def ReportError(self, im_id):
        """
        im_id:报错题目的图片ID
        """
        params = {
            'id': im_id,
        }
        params.update(self.base_params)
        r = requests.post('http://upload.chaojiying.net/Upload/ReportError.php', data=params, headers=self.headers)
        return r.json()


class WangxiaoClient:
    """
    网校登录客户端，封装了验证码识别、密码加密、登录、题目获取等逻辑
    """

    def __init__(self, username: str, password: str, chaojiying_user: str, chaojiying_pass: str,
                 chaojiying_soft_id: str):
        self.username = username
        self.password = password
        self.session = requests.Session()

        # 设置请求头
        self.session.headers = {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
            "referer": "https://user.wangxiao.cn/login/",
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-encoding": "gzip, deflate, br, zstd",
            "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,sl;q=0.7",
            "cache-control": "no-cache",
            "connection": "keep-alive",
            "content-type": "application/json;charset=UTF-8",
            "x-requested-with": "XMLHttpRequest"
        }
        self.session.get("https://user.wangxiao.cn/login/")  # 初始化 cookies

        # 初始化超级鹰验证码识别客户端
        self.chaojiying = Chaojiying_Client(chaojiying_user, chaojiying_pass, chaojiying_soft_id)

    def _build_pem_public_key(self, b64_key: str) -> str:
        """
        构造 PEM 格式的 RSA 公钥字符串
        """
        lines = [b64_key[i:i + 64] for i in range(0, len(b64_key), 64)]
        return "-----BEGIN PUBLIC KEY-----\n" + "\n".join(lines) + "\n-----END PUBLIC KEY-----"

    def _rsa_encrypt(self, data: str) -> str:
        """
        使用 RSA 公钥加密密码和时间戳
        """
        public_key = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDA5Zq6ZdH/RMSvC8WKhp5gj6Ue4Lqjo0Q2PnyGbSkTlYku0HtVzbh3S9F9oHbxeO55E8tEEQ5wj/+52VMLavcuwkDypG66N6c1z0Fo2HgxV3e0tqt1wyNtmbwg7ruIYmFM+dErIpTiLRDvOy+0vgPcBVDfSUHwUSgUtIkyC47UNQIDAQAB'
        pem_key = self._build_pem_public_key(public_key)
        rsa_public_key = RSA.importKey(pem_key)
        encryptor = PKCS1_v1_5.new(rsa_public_key)
        encrypted_data = encryptor.encrypt(data.encode("utf-8"))
        return base64.b64encode(encrypted_data).decode()

    def _get_time(self) -> str:
        """
        获取网校后端服务器当前时间戳字符串
        """
        url = "https://user.wangxiao.cn/apis//common/getTime"
        response = self.session.post(url)
        return response.json()["data"]

    def _get_captcha_code(self) -> str:
        """
        获取图片验证码，并使用超级鹰识别返回识别结果
        """
        captcha_url = "https://user.wangxiao.cn/apis//common/getImageCaptcha"
        response = self.session.post(captcha_url)
        img_base64_str = response.json()["data"].replace("data:image/png;base64,", "")
        result = self.chaojiying.PostPic_base64(img_base64_str, 1902)
        return result['pic_str']

    def login(self):
        """
        执行登录流程：验证码识别 -> 密码加密 -> 登录接口调用 -> 设置登录后的 cookies
        """
        captcha_code = self._get_captcha_code()
        encrypted_password = self._rsa_encrypt(self.password + self._get_time())
        login_url = "https://user.wangxiao.cn/apis//login/passwordLogin"
        data = {
            "userName": self.username,
            "password": encrypted_password,
            "imageCaptchaCode": captcha_code
        }
        response = self.session.post(login_url, json=data)
        response_data = response.json().get('data', {})

        # 登录成功后设置 cookies 以便后续请求使用
        self.session.cookies['autoLogin'] = "true"
        self.session.cookies['userInfo'] = json.dumps(response_data)
        self.session.cookies['token'] = response_data['token']
        self.session.cookies['UserCookieName'] = response_data['userName']
        self.session.cookies['OldUsername2'] = response_data['userNameCookies']
        self.session.cookies['OldUsername'] = response_data['userNameCookies']
        self.session.cookies['OldPassword'] = response_data['passwordCookies']
        self.session.cookies['UserCookieName_'] = response_data['userName']
        self.session.cookies['OldUsername2_'] = response_data['userNameCookies']
        self.session.cookies['OldUsername_'] = response_data['userNameCookies']
        self.session.cookies['OldPassword_'] = response_data['passwordCookies']
        self.session.cookies[response_data['userName'] + "_exam"] = response_data['sign']

    def get_question_list(self):
        """
        获取练习题列表
        """
        data = {
            'practiceType': '2',
            'sign': 'shg1',
            'subsign': '623eec9866528de212c0',
            'examPointType': '',
            'questionType': '',
            'top': '30',
        }
        response = self.session.post('https://ks.wangxiao.cn/practice/listQuestions', json=data)
        print(response.text)


if __name__ == '__main__':
    client = WangxiaoClient(
        username="19239553919",
        password="asd123...",
        chaojiying_user="JimLee",
        chaojiying_pass="dsb666..",
        chaojiying_soft_id="959791"
    )
    client.login()
    client.get_question_list()
