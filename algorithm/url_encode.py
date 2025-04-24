# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/03/25
"""

"""
from urllib.parse import urlencode, urljoin, quote, quote_plus, unquote, unquote_plus

params = {
    'name': 'jimlee',
    'age': 18,
    'sex': 'male',
    'city': '河南',
}
# urlencode 只能接受字典
print(urlencode(params))
# quote 可以对字符串进行转义
print(quote('周杰伦'))

# 还原字符串
print(unquote('%E5%91%A8%E6%9D%B0%E4%BC%A6'))
