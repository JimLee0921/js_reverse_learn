# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/04/23
"""
js版本 标准 md5 加密，需要请求数据，时间戳和固定字符串
url: https://www.jiansheku.com/search/enterprise/
"""
import time
import execjs
import requests

json_data = {
    'eid': '',
    'achievementQueryType': 'and',
    'achievementQueryDto': [],
    'personnelQueryDto': {
        'queryType': 'and',
    },
    'aptitudeQueryDto': {
        'queryType': 'and',
        'nameStr': '',
        'aptitudeQueryType': 'and',
        'businessScopeQueryType': 'or',
        'filePlaceType': '1',
        'aptitudeDtoList': [
            {
                'codeStr': '',
                'queryType': 'and',
                'aptitudeType': 'qualification',
            },
        ],
        'aptitudeSource': 'new',
    },
    'page': {
        'page': 1,
        'limit': 20,
        'field': '',
        'order': '',
    },
}
ts = int(time.time() * 1000)

with open('main.js', 'r', encoding='utf-8') as f:
    js_code = f.read()
    js_code = execjs.compile(js_code)
    sign = js_code.call('genSign', json_data, ts)
    print(sign)

headers = {
    'sign': sign,
    'timestamp': str(ts),
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
}

response = requests.post('https://capi.jiansheku.com/nationzj/enterprice/page', headers=headers, json=json_data)
print(response.text)
