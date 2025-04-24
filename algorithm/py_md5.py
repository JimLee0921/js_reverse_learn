# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/03/24
"""
python 实现 MD5 加密
MD5（Message Digest Algorithm 5）是一种广泛使用的哈希算法(不可逆)，用于生成数据的固定长度（128位）哈希值。
1. MD5 此类哈希算法是不可逆的，无法反向推理
2. 相同内容的 MD5 计算出来的摘要是相同的
3. 不同的内容计算出的ii俄国差别非常大
4. 0-f 的十六进制的数字
"""
from hashlib import md5, sha1, sha256, sha512, sha224, sha384


def md5_string(string: str):
    # 其它哈希算法也是这么操作
    value = md5(string.encode('utf-8'))  # 传入的必须是字节
    return value.hexdigest()  # 返回三十二位十六进制字符串


if __name__ == '__main__':
    print(md5_string('client=fanyideskweb&mysticTime=1742882445826&product=webfanyi&key=asdjnjfenknafdfsdfsd'))