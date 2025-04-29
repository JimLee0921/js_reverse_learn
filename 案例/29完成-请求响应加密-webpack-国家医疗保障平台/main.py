# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/04/21
"""
url: https://fuwu.nhsa.gov.cn/nationalHallSt/#/search/pharmacies
请求参数加密和请求结果解密，直接把webpack给扣下来了
"""
import requests
import execjs
import json


class NHSAClient:
    """
    用于与国家医保服务平台API交互的类，查询零售药店信息。
    """

    def __init__(self, js_file_path='main.js'):
        """
        初始化NHSAClient，指定JavaScript加密/解密文件的路径。

        参数:
            js_file_path (str): 包含加密/解密函数的JavaScript文件路径
        """
        self.base_url = "https://fuwu.nhsa.gov.cn/ebus/fuwu/api"
        self.api_endpoint = "/nthl/api/CommQuery/queryRtalPhacBInfo"
        self.js_file_path = js_file_path
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
                          '(KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36'
        }
        # 加载并编译JavaScript代码
        with open(self.js_file_path, 'r', encoding='utf-8') as f:
            js_code = f.read()
            self.ctx = execjs.compile(js_code)

    def _build_request_data(self, addr="", regn_code="330200", medins_name="",
                            business_lv="", page_num=1, page_size=10):
        """
        构建API请求的数据结构。

        参数:
            addr (str): 地址筛选条件
            regn_code (str): 地区代码（默认: 330200）
            medins_name (str): 医疗机构名称筛选条件
            business_lv (str): 业务级别筛选条件
            page_num (int): 页码（默认: 1）
            page_size (int): 每页记录数（默认: 10）

        返回:
            dict: 格式化的请求数据
        """
        return {
            "transformRequest": {},
            "transformResponse": {},
            "timeout": 30000,
            "xsrfCookieName": "XSRF-TOKEN",
            "xsrfHeaderName": "X-XSRF-TOKEN",
            "maxContentLength": -1,
            "headers": {
                "common": {
                    "Accept": "application/json, text/plain, */*"
                },
                "delete": {},
                "get": {},
                "head": {},
                "post": {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                "put": {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                "patch": {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                "Accept": "application/json",
                "Content-Type": "application/json",
                "channel": "web"
            },
            "withCredentials": False,
            "baseURL": "/ebus/fuwu/api",
            "method": "post",
            "url": self.api_endpoint,
            "data": {
                "addr": addr,
                "regnCode": regn_code,
                "medinsName": medins_name,
                "businessLvOutMedOtp": business_lv,
                "pageNum": page_num,
                "pageSize": page_size,
                "queryDataSource": "es"
            }
        }

    def query_pharmacy_info(self, addr="", regn_code="330200", medins_name="",
                            business_lv="", page_num=1, page_size=10):
        """
        从国家医保服务平台API查询零售药店信息。

        参数:
            addr (str): 地址筛选条件
            regn_code (str): 地区代码（默认: 330200）
            medins_name (str): 医疗机构名称筛选条件
            business_lv (str): 业务级别筛选条件
            page_num (int): 页码（默认: 1）
            page_size (int): 每页记录数（默认: 10）

        返回:
            dict: 解密后的响应数据

        异常:
            requests.RequestException: 如果API请求失败
            KeyError: 如果响应结构无效
            RuntimeError: 如果JavaScript执行失败
        """
        # 构建请求数据
        origin_data = self._build_request_data(
            addr, regn_code, medins_name, business_lv, page_num, page_size
        )

        # 加密请求数据
        encrypted_data = self.ctx.call('encryptData', origin_data)

        # 发起API请求
        try:
            response = requests.post(
                f"{self.base_url}{self.api_endpoint}",
                headers=self.headers,
                json=encrypted_data
            )
            response.raise_for_status()
        except requests.RequestException as e:
            raise requests.RequestException(f"API请求失败: {str(e)}")

        # 解析响应
        try:
            response_data = response.json()
            enc_type = response_data['data']['encType']
        except (json.JSONDecodeError, KeyError) as e:
            raise KeyError(f"响应结构无效: {str(e)}")

        # 解密响应数据
        try:
            decrypted_data = self.ctx.call('decryptData', enc_type, response_data)
            return decrypted_data
        except Exception as e:
            raise RuntimeError(f"解密失败: {str(e)}")


if __name__ == "__main__":
    # 示例用法
    client = NHSAClient()
    result = client.query_pharmacy_info(
        addr="",
        regn_code="330200",
        medins_name="",
        business_lv="",
        page_num=1,
        page_size=10
    )
    print(json.dumps(result, indent=2, ensure_ascii=False))
