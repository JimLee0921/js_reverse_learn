# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/04/29
"""
url: https://fanyi.youdao.com/index.html#/TextTranslate
某些东西是固定值，但也是从接口拿的
"""

import time
import execjs
import requests
from pathlib import Path


class YoudaoTranslator:
    """用于调用有道翻译 Web API 的类。"""

    def __init__(self, js_file_path='main.js'):
        """初始化翻译器，加载 JavaScript 文件以进行加密/解密操作。

        Args:
            js_file_path (str): 包含加密解密函数的 JavaScript 文件路径，默认为 'main.js'
        """
        self.js_context = self._load_js_file(js_file_path)
        self.base_url = 'https://dict.youdao.com/webtranslate'
        self.key_url = f'{self.base_url}/key'
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
                          '(KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36'
        }
        self.client_info = {
            'client': 'fanyideskweb',
            'product': 'webfanyi',
            'appVersion': '1.0.0',
            'vendor': 'web',
            'keyfrom': 'fanyi.web',
            'mid': '1',
            'screen': '1',
            'model': '1',
            'network': 'wifi',
            'abtest': '0',
            'yduuid': 'abcdefg'
        }

    def _load_js_file(self, js_file_path):
        """加载并编译 JavaScript 文件。

        Args:
            js_file_path (str): JavaScript 文件路径

        Returns:
            execjs.compile: 编译后的 JavaScript 上下文对象

        Raises:
            FileNotFoundError: 如果 JavaScript 文件不存在
        """
        js_file = Path(js_file_path)
        if not js_file.exists():
            raise FileNotFoundError(f"JavaScript 文件 {js_file_path} 不存在")
        with js_file.open('r', encoding='utf-8') as f:
            return execjs.compile(f.read())

    def _get_timestamp(self):
        """获取当前时间戳（毫秒）。

        Returns:
            int: 当前时间戳（毫秒）
        """
        return int(time.time() * 1000)

    def _get_key_sign(self, ts, secret_key='asdjnjfenknafdfsdfsd'):
        """生成用于获取密钥的签名。

        Args:
            ts (int): 时间戳（毫秒）
            secret_key (str): 用于签名的密钥，默认为固定值

        Returns:
            str: 生成的签名
        """
        return self.js_context.call('genSign', 'fanyideskweb', ts, 'webfanyi', secret_key)

    def _get_keys(self, ts):
        """获取翻译所需的密钥（secretKey, aesKey, aesIv）。

        Args:
            ts (int): 时间戳（毫秒）

        Returns:
            tuple: (secretKey, aesKey, aesIv)

        Raises:
            requests.RequestException: 如果请求失败
        """
        params = {
            'keyid': 'webfanyi-key-getter',
            'sign': self._get_key_sign(ts),
            'pointParam': 'client,mysticTime,product',
            'mysticTime': ts,
            **self.client_info
        }
        response = requests.get(self.key_url, params=params, headers=self.headers)
        response.raise_for_status()
        data = response.json()['data']
        return data['secretKey'], data['aesKey'], data['aesIv']

    def translate(self, text, from_lang='auto', to_lang=''):
        """翻译文本。

        Args:
            text (str): 要翻译的文本
            from_lang (str): 源语言，默认为 'auto'
            to_lang (str): 目标语言，默认为空（自动选择）

        Returns:
            dict: 解密后的翻译结果

        Raises:
            requests.RequestException: 如果翻译请求失败
            RuntimeError: 如果解密失败
        """
        ts = self._get_timestamp()
        secret_key, aes_key, aes_iv = self._get_keys(ts)
        translate_sign = self.js_context.call('genSign', 'fanyideskweb', ts, 'webfanyi', secret_key)

        data = {
            'i': text,
            'from': from_lang,
            'to': to_lang,
            'useTerm': 'false',
            'domain': '0',
            'dictResult': 'true',
            'keyid': 'webfanyi',
            'sign': translate_sign,
            'pointParam': 'client,mysticTime,product',
            'mysticTime': ts,
            **self.client_info
        }

        response = requests.post(self.base_url, headers=self.headers, data=data)
        response.raise_for_status()

        # 解密翻译结果
        decrypted_data = self.js_context.call('decryptData', response.text, aes_key, aes_iv)
        if not decrypted_data:
            raise RuntimeError("翻译结果解密失败")
        return decrypted_data


if __name__ == '__main__':
    try:
        translator = YoudaoTranslator()
        result = translator.translate('我是个大傻逼')
        print(result)
    except Exception as e:
        print(f"翻译失败: {e}")
