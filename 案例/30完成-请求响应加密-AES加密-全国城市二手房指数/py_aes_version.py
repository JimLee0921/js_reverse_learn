# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/04/28
"""

"""
import json
import time
import requests
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
import base64


class CCHIndexAPI:
    def __init__(self):
        """初始化 API 配置"""
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        }
        self.api_url = 'http://www.cchindex.com/api/authorize/index/citys'
        self.key = "comkmu7wfcbu1kjk".encode('utf-8')  # AES 密钥

    def _encrypt(self, data):
        """AES 加密，模拟 JavaScript 的 encrypted 函数"""
        # 创建 AES 加密器（ECB 模式）
        cipher = AES.new(self.key, AES.MODE_ECB)
        # 对数据进行 PKCS7 填充
        padded_data = pad(data.encode('utf-8'), AES.block_size)
        # 加密
        encrypted_data = cipher.encrypt(padded_data)
        # 转换为十六进制字符串（匹配 JS 的 ciphertext.toString()）
        return encrypted_data.hex()

    def _decrypt(self, data):
        """AES 解密，模拟 JavaScript 的 decrypted 函数"""
        try:
            # 将十六进制字符串转换为字节
            encrypted_data = bytes.fromhex(data)
            # 创建 AES 解密器（ECB 模式）
            cipher = AES.new(self.key, AES.MODE_ECB)
            # 解密并移除 PKCS7 填充
            decrypted_data = unpad(cipher.decrypt(encrypted_data), AES.block_size)
            # 转换为 UTF-8 字符串
            return decrypted_data.decode('utf-8')
        except ValueError:
            return data  # 如果解密失败，返回原始数据

    def get_citys_data(self):
        """获取城市数据"""
        try:
            # 准备请求数据
            request_data = {
                "timestamp": int(time.time() * 1000)
            }

            # 生成 JSON 字符串并加密
            json_string = json.dumps(request_data, separators=(',', ':'))  # 移除空格
            sign_code = self._encrypt(json_string)

            # 构造 POST 请求的 JSON 数据
            json_data = {
                'signCode': sign_code,
            }

            # 发送 POST 请求
            response = requests.post(
                self.api_url,
                headers=self.headers,
                json=json_data,
                verify=False
            )
            response.raise_for_status()  # 检查请求是否成功

            # 解密响应数据
            response_data = response.json()['data']
            decrypted_data = self._decrypt(response_data)
            return decrypted_data

        except requests.RequestException as e:
            return f"错误：网络请求失败 - {str(e)}"
        except KeyError:
            return "错误：响应数据格式不正确"
        except Exception as e:
            return f"错误：未知错误 - {str(e)}"


# 使用示例
if __name__ == "__main__":
    api = CCHIndexAPI()
    result = api.get_citys_data()
    print(result)
