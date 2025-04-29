# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/04/29
"""
url: https://tousu.sina.com.cn/company/view/?couid=1003609&sid=26828
黑猫投诉请求加密
"""
import time
import execjs
import requests


class SinaComplaintAPI:
    def __init__(self, js_file='main.js', cookies=None, headers=None):
        """
        初始化 SinaComplaintAPI 类
        :param js_file: JavaScript 文件路径，包含加密逻辑
        :param cookies: 请求所需的 cookies
        :param headers: 请求所需的 headers
        """
        self.headers = headers or {
            'accept': '*/*',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,sl;q=0.7',
            'cache-control': 'no-cache',
            'pragma': 'no-cache',
            'priority': 'u=1, i',
            'referer': 'https://tousu.sina.com.cn/company/view/?couid=1003609&sid=26828',
            'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
            'x-requested-with': 'XMLHttpRequest',
        }

        # 读取 JS 加密文件并编译
        with open(js_file, 'r', encoding='utf-8') as f:
            js_code = f.read()
        self.ctx = execjs.compile(js_code)

    def get_encrypted_params(self, ts, type, page_size, page, sid):
        """
        使用 JS 函数获取加密后的参数
        :param ts: 时间戳
        :param type: 请求类型
        :param page_size: 每页大小
        :param page: 当前页码
        :param sid: SID
        :return: 返回加密后的 params，包括 rs 和 signature
        """
        # 调用 JS 函数获取加密参数
        dd = self.ctx.call('getParams', ts, type, page_size, page, sid)
        return dd

    def get_complaints(self, page=1, page_size=10, sid='26828'):
        """
        获取公司投诉数据
        :param page: 页码
        :param page_size: 每页大小
        :param sid: SID
        :return: 返回请求的响应结果
        """
        ts = int(time.time() * 1000)  # 获取当前时间戳（毫秒）

        # 初始请求参数
        params = {
            'ts': str(ts),
            'rs': '',
            'signature': 'd720d43d4aaea1a1bc1ac1a061cc4ac34bc1996b3d486e02f01f3898e8915bd7',
            'type': '1',
            'page_size': str(page_size),
            'page': str(page),
            'sid': sid,
        }

        # 获取加密后的参数
        dd = self.get_encrypted_params(ts, params['type'], params['page_size'], params['page'], params['sid'])
        params['rs'] = dd['rs']
        params['signature'] = dd['signature']

        # 发送请求并返回结果
        response = requests.get(
            'https://tousu.sina.com.cn/api/company/service_complaints',
            params=params,
            headers=self.headers,
        )
        return response.json()


# ==================== 使用示例 ====================
if __name__ == '__main__':
    # 实例化 SinaComplaintAPI 类
    sina_api = SinaComplaintAPI()

    # 获取公司投诉数据
    response_data = sina_api.get_complaints(page=4, page_size=10)

    # 打印返回的结果
    print(response_data)
