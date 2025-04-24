# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/04/24
"""

"""
import hashlib
import json
import time
import requests


def gd(e: dict) -> list:
    """返回字典按 key 排序的键名列表"""
    return sorted(e.keys())


def _d(t):
    """处理值，对数组和对象进行 JSON 序列化"""
    if isinstance(t, list):
        for item in t:
            if isinstance(item, dict):
                keys_to_delete = [k for k, v in item.items() if v is None]
                for k in keys_to_delete:
                    del item[k]
                for k, v in item.items():
                    if isinstance(v, list):
                        _d(v)
        return json.dumps(t, separators=(',', ':'), ensure_ascii=False).strip()
    elif isinstance(t, dict):
        return json.dumps(t, separators=(',', ':'), ensure_ascii=False)
    else:
        return str(t)


def md(data: dict) -> str:
    """将字典转换为拼接字符串形式"""
    keys = gd(data)
    result = ''
    for key in keys:
        value = _d(data[key])
        if value and value != '""':
            result += f'{key}={value}&'
    return result


def pd(data: str, key: str, time: int) -> str:
    """data + key + time 的 MD5 签名"""
    raw = data + key + str(time)
    return hashlib.md5(raw.encode('utf-8')).hexdigest()


def gen_sign(data: dict, time: int) -> str:
    t = md(data)
    sign1 = pd(t, "ZuSj0gwgsKXP4fTEz55oAG2q2p1SVGKK", time)
    sign2 = pd(sign1, "mwMlWOdyM7OXbjzQPulT1ndRZIAjShDB", time)
    sign = pd(sign2, "ghaepVf6IhcHmgnk4NCTXLApxQkBcvh1", time)
    return sign


# 示例数据
data = {
    "eid": "",
    "achievementQueryType": "and",
    "achievementQueryDto": [],
    "personnelQueryDto": {
        "queryType": "and"
    },
    "aptitudeQueryDto": {
        "queryType": "and",
        "nameStr": "",
        "aptitudeQueryType": "and",
        "businessScopeQueryType": "or",
        "filePlaceType": "1",
        "aptitudeDtoList": [
            {
                "codeStr": "",
                "queryType": "and",
                "aptitudeType": "qualification"
            }
        ],
        "aptitudeSource": "new"
    },
    "page": {
        "page": 4,
        "limit": 20,
        "field": "",
        "order": ""
    }
}


def request_data(sign, ts: int):
    headers = {
        'sign': sign,
        'timestamp': str(ts),
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    }

    response = requests.post('https://capi.jiansheku.com/nationzj/enterprice/page', headers=headers, json=data)
    print(response.text)


if __name__ == "__main__":
    ts = int(time.time() * 1000)
    sign = gen_sign(data, ts)
    request_data(sign, ts)
