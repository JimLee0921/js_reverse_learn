# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/04/24
"""
webpack + 少量扣代码(直接扣代码未完成)
url: https://web.shanbay.com/wordsweb/#/words-table
"""
import requests
import execjs

cookies = {
    '_c_WBKFRo': 'p2g0YEmPxBtZimyWlTbHCSgOEAlIYS3rplXuIGm0',
    'auth_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQxMjkxODA1LCJleHAiOjE3NTMyNjIyNjQsImV4cF92MiI6MTc1MzI2MjI2NCwiZGV2aWNlIjoiIiwidXNlcm5hbWUiOiJRcV9iYTE1MGU3NTQzNTRlM2YwIiwiaXNfc3RhZmYiOjAsInNlc3Npb25faWQiOiJmYWVjMWYyYzIwZWMxMWYwYWVhZWJlNWQwZjYxNzBmZSJ9.22S7ppwewqF0ND_ZXSUmmV4nzq0JQ6emkEknp07GaVg',
    'csrftoken': '571ab6e3bee6fea51ccb5e2e128a25c3',
    '_ga': 'GA1.2.907361437.1745486272',
    'sensorsdata2015jssdkcross': '%7B%22distinct_id%22%3A%22eelhil%22%2C%22first_id%22%3A%2219667137fd5c83-00f1930a9975c9-26011c51-2073600-19667137fd612d7%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E8%87%AA%E7%84%B6%E6%90%9C%E7%B4%A2%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fwww.baidu.com%2Flink%22%7D%2C%22%24device_id%22%3A%2219667137fd5c83-00f1930a9975c9-26011c51-2073600-19667137fd612d7%22%7D',
    'tfstk': 'gpSrfcglKuEP3vjztKxE79i-pAtJW3V6-MOBK9XHFQAoV8LFu9fueeaLykbVtsLWZ0tW-pWhBawpq75qtsXCA06kOH8FM15eJ8dBtB5CKawbfl6ReHKhT5Z_f04PJJ1yEHmuKKvWp-9lYbhtJHK31SGSEvEev_XEM37ln-JBdLvltUxDnIprEHAk-j0DIIAHx6YonmvBIbDkrQD03pdDtHxhtncrHTXn0dTude67lGai8UdGEIonbApyrc1rR43-kLLksEAqxKs2UURGEGoS2Npcci86lvNXmOQfZK-a4fpPoO-kLMei8B8F2nRV_lmpHafPmeSbplWX4p8MxEknxt-hy1IHjlc2HZX5-gCrLDvRVGTe6EynvetcfFbGaveOn3vh9FIQ60dlKOIO5hrr6L7cQnSr7Xp0E7sdzX0erKp21-yVewU1WJkhQBgKJEx93CwWF23prKp21-yqJ2LDMKR_FL1..',
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
    # 'cookie': '_c_WBKFRo=p2g0YEmPxBtZimyWlTbHCSgOEAlIYS3rplXuIGm0; auth_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQxMjkxODA1LCJleHAiOjE3NTMyNjIyNjQsImV4cF92MiI6MTc1MzI2MjI2NCwiZGV2aWNlIjoiIiwidXNlcm5hbWUiOiJRcV9iYTE1MGU3NTQzNTRlM2YwIiwiaXNfc3RhZmYiOjAsInNlc3Npb25faWQiOiJmYWVjMWYyYzIwZWMxMWYwYWVhZWJlNWQwZjYxNzBmZSJ9.22S7ppwewqF0ND_ZXSUmmV4nzq0JQ6emkEknp07GaVg; csrftoken=571ab6e3bee6fea51ccb5e2e128a25c3; _ga=GA1.2.907361437.1745486272; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22eelhil%22%2C%22first_id%22%3A%2219667137fd5c83-00f1930a9975c9-26011c51-2073600-19667137fd612d7%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E8%87%AA%E7%84%B6%E6%90%9C%E7%B4%A2%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fwww.baidu.com%2Flink%22%7D%2C%22%24device_id%22%3A%2219667137fd5c83-00f1930a9975c9-26011c51-2073600-19667137fd612d7%22%7D; tfstk=gpSrfcglKuEP3vjztKxE79i-pAtJW3V6-MOBK9XHFQAoV8LFu9fueeaLykbVtsLWZ0tW-pWhBawpq75qtsXCA06kOH8FM15eJ8dBtB5CKawbfl6ReHKhT5Z_f04PJJ1yEHmuKKvWp-9lYbhtJHK31SGSEvEev_XEM37ln-JBdLvltUxDnIprEHAk-j0DIIAHx6YonmvBIbDkrQD03pdDtHxhtncrHTXn0dTude67lGai8UdGEIonbApyrc1rR43-kLLksEAqxKs2UURGEGoS2Npcci86lvNXmOQfZK-a4fpPoO-kLMei8B8F2nRV_lmpHafPmeSbplWX4p8MxEknxt-hy1IHjlc2HZX5-gCrLDvRVGTe6EynvetcfFbGaveOn3vh9FIQ60dlKOIO5hrr6L7cQnSr7Xp0E7sdzX0erKp21-yVewU1WJkhQBgKJEx93CwWF23prKp21-yqJ2LDMKR_FL1..',
}

params = {
    'ipp': '10',
    'page': '2',
}

response = requests.get(
    'https://apiv3.shanbay.com/wordsapp/user_material_books/odcxi/learning/words/unlearned_items',
    params=params,
    headers=headers,
    cookies=cookies
)
print(response.text)

encrypted_data = response.json()['data']

with open('main.js', 'r', encoding='utf-8') as f:
    js_code = f.read()
    ctx = execjs.compile(js_code)
    data = ctx.call('decrypted', encrypted_data)
    print(data)
