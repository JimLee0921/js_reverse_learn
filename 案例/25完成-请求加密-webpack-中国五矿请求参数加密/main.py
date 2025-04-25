# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/04/25
"""
webpack + js 代码补充
需要先请求获取加密公钥
url: https://ec.minmetals.com.cn/open/home/purchase-info
"""
import requests
import execjs


class MinMetalsAPI:
    def __init__(self, base_url="https://ec.minmetals.com.cn"):
        """
        初始化 MinMetalsAPI 类
        :param base_url: 基础 API URL
        """
        self.base_url = base_url
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        }
        self.js_code = self.load_js_code()  # 加载 JavaScript 代码

    def load_js_code(self, js_file='main.js'):
        """
        从本地文件加载 JavaScript 代码
        :param js_file: JavaScript 文件路径
        :return: 返回 JavaScript 代码字符串
        """
        with open(js_file, 'r', encoding='utf-8') as f:
            return f.read()

    def get_public_key(self):
        """
        获取公共密钥
        :return: 公共密钥的响应文本
        """
        # 发送请求获取公共密钥
        response = requests.post(f'{self.base_url}/open/homepage/public', headers=self.headers)

        # 如果请求成功，返回密钥的文本内容
        if response.status_code == 200:
            return response.text
        else:
            response.raise_for_status()

    def gen_param(self, page, public_key):
        """
        使用 JavaScript 代码生成参数
        :param page: 页码，传递给 JavaScript 的第一个参数
        :param public_key: 公共密钥，用作生成参数的第二个参数
        :return: 返回生成的参数
        """
        ctx = execjs.compile(self.js_code)  # 编译 JavaScript 代码
        # 调用 JavaScript 函数生成参数
        return ctx.call('genParam', page, public_key)

    def send_request(self, param):
        """
        发送 POST 请求到指定的接口
        :param param: 请求体中的参数
        :return: 接口的响应文本
        """
        json_data = {'param': param}

        # 发送请求
        response = requests.post(
            f'{self.base_url}/open/homepage/zbs/by-lx-page',
            headers=self.headers,
            json=json_data
        )

        # 返回响应的文本内容
        if response.status_code == 200:
            return response.text
        else:
            response.raise_for_status()

    def run(self, page=1):
        """
        执行完整的流程：获取公钥 -> 生成参数 -> 发送请求
        :param page: 页码，默认为 1
        :return: 返回接口的响应结果
        """
        # 获取公共密钥
        public_key = self.get_public_key()

        # 使用公钥生成参数
        param = self.gen_param(page, public_key)

        # 发送请求并获取响应
        response = self.send_request(param)

        return response


# 使用类进行操作
if __name__ == "__main__":
    api = MinMetalsAPI()  # 创建 API 实例
    page = 3  # 假设你需要请求第 3 页
    response_text = api.run(page)  # 执行请求流程
    print(response_text)  # 打印响应结果
