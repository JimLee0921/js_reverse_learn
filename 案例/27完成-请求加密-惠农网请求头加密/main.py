# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/04/26
"""
使用了 md5, sha1, sha256等多种摘要算法进行加密
url: https://www.cnhnb.com/supply/search/?k=%E6%A1%83%E5%AD%90
"""
# from hashlib import md5, sha256, sha1, sha384
# print(sha384("1aab9e7c0e177b163384e3a98ee1fcfd".encode('utf-8')).hexdigest())

import requests
import execjs


class CNHNBClient:
    """
    中国惠农网（cnhnb.com）搜索API客户端
    封装了签名生成、请求发送的逻辑
    """

    def __init__(self, js_path: str):
        """
        初始化客户端，编译签名JS代码

        :param js_path: 本地JS文件路径，用于生成请求签名
        """
        self.js_path = js_path
        self.ctx = self._load_js()
        self.base_url = 'https://pcapi.cnhnb.com'
        self.session = requests.Session()

    def _load_js(self):
        """
        读取并编译本地JS文件
        """
        with open(self.js_path, 'r', encoding='utf-8') as f:
            js_code = f.read()
        return execjs.compile(js_code)

    def _get_sign_headers(self) -> dict:
        """
        调用JS函数生成动态签名头
        """
        header_params = self.ctx.call('getSign')

        # 确保签名相关字段是字符串类型
        header_params['X-CLIENT-APPID'] = str(header_params['X-CLIENT-APPID'])
        header_params['X-CLIENT-TIME'] = str(header_params['X-CLIENT-TIME'])

        return header_params

    def _build_headers(self) -> dict:
        """
        构建完整请求头（包括动态签名）
        """
        headers = {
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,sl;q=0.7',
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            'origin': 'https://www.cnhnb.com',
            'pragma': 'no-cache',
            'priority': 'u=1, i',
            'referer': 'https://www.cnhnb.com/',
            'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        }

        headers.update(self._get_sign_headers())
        return headers

    def search(self, keyword: str, page: int = 1, size: int = 20) -> dict:
        """
        搜索指定关键词的商品列表

        :param keyword: 搜索关键词，例如'葫芦'
        :param page: 页码（默认第1页）
        :param size: 每页条数（默认20条）
        :return: 返回API响应的JSON数据
        """
        url = f'{self.base_url}/esearch-pc/api/transform/supply/list'

        json_data = {
            'sortOrder': 'desc',
            'pageNumber': page,
            'pageSize': size,
            'keyword': keyword,
        }

        headers = self._build_headers()

        response = self.session.post(url, headers=headers, json=json_data)
        response.raise_for_status()  # 如果请求出错，会抛出异常

        return response.json()


if __name__ == '__main__':
    client = CNHNBClient('demo.js')
    result = client.search('葫芦')
    print(result)
