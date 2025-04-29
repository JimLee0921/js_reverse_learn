# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/04/29
"""
请求加密 webpack
url: https://chinavolunteer.mca.gov.cn/site/project
"""
import execjs
import json
import requests


class VolunteerProjectSpider:
    def __init__(self, js_path, headers=None):
        # 读取并编译JS
        with open(js_path, 'r', encoding='utf-8') as f:
            js_code = f.read()
        self.ctx = execjs.compile(js_code)

        # 默认请求头
        self.headers = headers or {
            'Accept': 'application/json, text/plain, */*',
            'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,sl;q=0.7',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Origin': 'https://chinavolunteer.mca.gov.cn',
            'Pragma': 'no-cache',
            'Referer': 'https://chinavolunteer.mca.gov.cn/site/project',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
            'ip': '183.133.68.240',
            'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'token': '',
        }

        # 请求地址
        self.url = 'https://chinavolunteer.mca.gov.cn/nvsidfapis/NVSIDF/restservices/webapi/listProjectsFortisWeb/query'

    def encrypt(self, params: dict) -> str:
        """调用JS加密"""
        params_str = json.dumps(params, separators=(',', ':'))
        return self.ctx.call('encrypt', params_str)

    def get_projects(self, page_num=1, page_size=12):
        """查询项目"""
        # 构建查询参数
        params = {
            "pageNum": page_num,
            "pageSize": page_size,
            "itemtag": "",
            "itemcategory": "",
            "albx0072": "4",
            "albx0072A": None,
            "albx0024": "",
            "albx0004": "",
            "albx0005": "",
            "albx0013": "",
            "albx0021": "000000000000000000",
            "albx0014": "",
            "albx0002": "",
            "albx0009": "",
            "code": "4"
        }

        # 加密
        encry_data = self.encrypt(params)

        # 组装请求体
        data = {
            'bean': json.dumps({"encryData": encry_data}, separators=(',', ':'))
        }

        # 发送请求
        response = requests.post(self.url, headers=self.headers, data=data)

        # 返回响应
        return response.json()


# ==================== 使用示例 ====================
if __name__ == '__main__':
    spider = VolunteerProjectSpider('main.js')

    # 查询第1页
    result = spider.get_projects(page_num=1)
    print('第1页返回数据：', result)

    # 查询第2页
    result = spider.get_projects(page_num=2)
    print('第2页返回数据：', result)
