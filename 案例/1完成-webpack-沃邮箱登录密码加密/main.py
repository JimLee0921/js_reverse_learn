# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/04/23
"""
沃邮箱登录密码加密
网址: https://mail.wo.cn/coremail/index.jsp#normalForm
账号: 17633631196
密码: Aa85939521..
需要输入验证码就是校验成功
"""
import requests
import execjs


def encrypt_password(password: str, js_path: str = 'main.js') -> str:
    with open(js_path, 'r', encoding='utf-8') as f:
        js_code = f.read()
    ctx = execjs.compile(js_code)
    return ctx.call('getEncryptedPassword', password)


def login_to_wo_mail(username: str, password: str, sid: str) -> str:
    encrypted_password = encrypt_password(password)

    cookies = {
        'face': 'undefined',
        'locale': 'zh_CN',
        'saveUsername': 'true',
        'domain': '',
        'uid': username,
    }

    headers = {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,sl;q=0.7',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Origin': 'https://mail.wo.cn',
        'Pragma': 'no-cache',
        'Referer': f'https://mail.wo.cn/coremail/index.jsp?cus=1&sid={sid}',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }

    params = {
        'cus': '1',
        'sid': sid,
    }

    data = {
        'locale': 'zh_CN',
        'nodetect': 'false',
        'destURL': '',
        'supportLoginDevice': 'true',
        'accessToken': '',
        'timestamp': '',
        'signature': '',
        'nonce': '',
        'device': '{"uuid":"webmail_windows","imie":"webmail_windows","friendlyName":"chrome 135","model":"windows","os":"windows","osLanguage":"zh-CN","deviceType":"Webmail"}',
        'supportDynamicPwd': 'true',
        'supportBind2FA': 'true',
        'authorizeDevice': '',
        'loginType': 'normalForm',
        'uid': username,
        'domain': '',
        'password': encrypted_password,
        'action:login': '',
    }

    response = requests.post('https://mail.wo.cn/coremail/index.jsp',
                             params=params, cookies=cookies, headers=headers, data=data)

    return response.text


if __name__ == "__main__":
    sid = "EASXNbqqnhBQaiyeiQbBaippTYvZnzGq"
    username = "17633631196"
    password = "Aa85939521.."
    html = login_to_wo_mail(username, password, sid)
    print(html)
