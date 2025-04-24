# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/03/20
"""

"""
import requests
import re

url = "http://127.0.0.1:8000/jsonp?callback=jQuery19109799324336401338_1742457429851&_=1742457429852"

response = requests.get(url)

print(response.text)

# 通用 jsonp 解析
jsonp_re = re.compile(r"\((?P<data>.*)\)", re.S)
data = jsonp_re.search(response.text).group("data")

print(data)
