# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/04/24
"""

"""
import requests

cookies = {
    'sajssdk_2015_cross_new_user': '1',
    '_c_WBKFRo': 'p2g0YEmPxBtZimyWlTbHCSgOEAlIYS3rplXuIGm0',
    '_nb_ioWEgULi': '',
    'auth_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQxMjkxODA1LCJleHAiOjE3NTMyNjIyNjQsImV4cF92MiI6MTc1MzI2MjI2NCwiZGV2aWNlIjoiIiwidXNlcm5hbWUiOiJRcV9iYTE1MGU3NTQzNTRlM2YwIiwiaXNfc3RhZmYiOjAsInNlc3Npb25faWQiOiJmYWVjMWYyYzIwZWMxMWYwYWVhZWJlNWQwZjYxNzBmZSJ9.22S7ppwewqF0ND_ZXSUmmV4nzq0JQ6emkEknp07GaVg',
    'csrftoken': '571ab6e3bee6fea51ccb5e2e128a25c3',
    'sensorsdata2015jssdkcross': '%7B%22distinct_id%22%3A%22eelhil%22%2C%22first_id%22%3A%2219667137fd5c83-00f1930a9975c9-26011c51-2073600-19667137fd612d7%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E8%87%AA%E7%84%B6%E6%90%9C%E7%B4%A2%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fwww.baidu.com%2Flink%22%7D%2C%22%24device_id%22%3A%2219667137fd5c83-00f1930a9975c9-26011c51-2073600-19667137fd612d7%22%7D',
    '_ga': 'GA1.2.907361437.1745486272',
    '_gat': '1',
    'tfstk': 'gDTseigh3R21j8eHsAhFNFuNOL_XCKgy6S1vZIUaMNQTHr9fLPJqjISflCWe7ORNW-pXGLUaQfmDd96pnO723fXfMdJh0KOmssBvHK62bDuysCbckYJjz4RgbrBKFnsTXyhAs_lF6EwgEobckYkUQ5FmlZv9GbrMkBhCgs5O6KCYvX1PGZUODPELp9fAkZITWwedZ_aYD1EtOBBhMZBvHGh8v71jfOAssYceCHmRgCBQkrLtoG67N9ChTe11fTIddrFwR1s1eCL77Pxl9e8C4MPqLwdkYdCCPVwl1Hd5WsTmwo6fcFbCdLg8o6x9CeIX8j0WTN1f2ZIQMrdCkhvkka38d6xp_nLMCSaAsF8PcTjIMrjVJUSJ2dNmZBQOMKjkuY4GBIdkr37S58f6vQ_C4x4PF1h8cWsul66rOXZ0mqhnie5bEOcOX6f1YXGQBnjOt6GKOXZmYGChTVhIOuzF.',
}

headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,sl;q=0.7',
    'cache-control': 'no-cache',
    'origin': 'https://web.shanbay.com',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://web.shanbay.com/',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'x-csrftoken': '571ab6e3bee6fea51ccb5e2e128a25c3',
    # 'cookie': 'sajssdk_2015_cross_new_user=1; _c_WBKFRo=p2g0YEmPxBtZimyWlTbHCSgOEAlIYS3rplXuIGm0; _nb_ioWEgULi=; auth_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQxMjkxODA1LCJleHAiOjE3NTMyNjIyNjQsImV4cF92MiI6MTc1MzI2MjI2NCwiZGV2aWNlIjoiIiwidXNlcm5hbWUiOiJRcV9iYTE1MGU3NTQzNTRlM2YwIiwiaXNfc3RhZmYiOjAsInNlc3Npb25faWQiOiJmYWVjMWYyYzIwZWMxMWYwYWVhZWJlNWQwZjYxNzBmZSJ9.22S7ppwewqF0ND_ZXSUmmV4nzq0JQ6emkEknp07GaVg; csrftoken=571ab6e3bee6fea51ccb5e2e128a25c3; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22eelhil%22%2C%22first_id%22%3A%2219667137fd5c83-00f1930a9975c9-26011c51-2073600-19667137fd612d7%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E8%87%AA%E7%84%B6%E6%90%9C%E7%B4%A2%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fwww.baidu.com%2Flink%22%7D%2C%22%24device_id%22%3A%2219667137fd5c83-00f1930a9975c9-26011c51-2073600-19667137fd612d7%22%7D; _ga=GA1.2.907361437.1745486272; _gat=1; tfstk=gDTseigh3R21j8eHsAhFNFuNOL_XCKgy6S1vZIUaMNQTHr9fLPJqjISflCWe7ORNW-pXGLUaQfmDd96pnO723fXfMdJh0KOmssBvHK62bDuysCbckYJjz4RgbrBKFnsTXyhAs_lF6EwgEobckYkUQ5FmlZv9GbrMkBhCgs5O6KCYvX1PGZUODPELp9fAkZITWwedZ_aYD1EtOBBhMZBvHGh8v71jfOAssYceCHmRgCBQkrLtoG67N9ChTe11fTIddrFwR1s1eCL77Pxl9e8C4MPqLwdkYdCCPVwl1Hd5WsTmwo6fcFbCdLg8o6x9CeIX8j0WTN1f2ZIQMrdCkhvkka38d6xp_nLMCSaAsF8PcTjIMrjVJUSJ2dNmZBQOMKjkuY4GBIdkr37S58f6vQ_C4x4PF1h8cWsul66rOXZ0mqhnie5bEOcOX6f1YXGQBnjOt6GKOXZmYGChTVhIOuzF.',
}

params = {
    'page': '1',
    'type_of': 'NEW',
    'ipp': '10',
}

response = requests.get(
    'https://apiv3.shanbay.com/wordscollection/learning/words/today_learning_items',
    params=params,
    cookies=cookies,
    headers=headers,
)
print(response.text)