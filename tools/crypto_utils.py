# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/03/25
"""
存放各种 py 实现的加解密工具
"""
from hashlib import md5


def md5_decrypt(string: str):
    """
    md5 加密
    :param string: 需要加密的字符串
    :return: md5 加密后的字符串
    """
    value = md5(string.encode('utf-8'))  # 传入的必须是字节
    return value.hexdigest()
