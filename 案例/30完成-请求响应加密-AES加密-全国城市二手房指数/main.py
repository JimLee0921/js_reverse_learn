# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/04/28
"""
url: http://www.cchindex.com/Home/index
需要注意 js 中的 JSON.stringify() 和 py 中的 json.dumps 不是太一样,需要移除空格以匹配JS环境
"""
import json
import time
import requests
import execjs


class CCHIndexAPI:
    def __init__(self, js_file_path='main.js'):
        """初始化，传入包含加密/解密逻辑的JavaScript文件路径"""
        self.js_file_path = js_file_path
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        }
        self.api_url = 'http://www.cchindex.com/api/authorize/index/citys'

    def _load_js_context(self):
        """加载并编译JavaScript文件，返回执行上下文"""
        with open(self.js_file_path, 'r', encoding='utf-8') as f:
            js_code = f.read()
        return execjs.compile(js_code)

    def get_citys_data(self):
        """获取城市数据"""
        # 准备请求数据
        request_data = {
            "timestamp": int(time.time() * 1000)
        }

        # 加载JS上下文并生成签名
        ctx = self._load_js_context()
        json_string = json.dumps(request_data, separators=(',', ':'))  # 移除空格以匹配JS环境
        sign_code = ctx.call('encrypted', json_string)

        # 构造POST请求的JSON数据
        json_data = {
            'signCode': sign_code,
        }

        # 发送POST请求
        response = requests.post(
            self.api_url,
            headers=self.headers,
            json=json_data,
            verify=False
        )
        response.raise_for_status()  # 检查请求是否成功

        # 解密响应数据
        decrypted_data = ctx.call('decrypted', response.json()['data'])
        return decrypted_data


# 使用示例
if __name__ == "__main__":
    api = CCHIndexAPI()
    result = api.get_citys_data()
    print(result)
