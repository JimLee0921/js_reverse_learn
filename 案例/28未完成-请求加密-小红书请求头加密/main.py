import requests
import json
cookies = {
    'abRequestId': 'a0b91e2b-61d8-5ec1-9224-2631e850d1c2',
    'xsecappid': 'xhs-pc-web',
    'a1': '1955abc08b5yt8ihorqq63uyryi8zrpu02wxowv9650000348978',
    'webId': '9bcd471049791a941f360e7d2329fda8',
    'gid': 'yj220DSyqY8Dyj220DS8YJEhD2v9Y3xlFAAKEjKq7vFv3C28YuFU7l888q4YjWY8qdW2WKyY',
    'webBuild': '4.62.3',
    'web_session': '030037a0f61aa806525f96c8742f4a22947900',
    'websectiga': '2a3d3ea002e7d92b5c9743590ebd24010cf3710ff3af8029153751e41a6af4a3',
    'sec_poison_id': '831f65e1-7a8c-44df-b17c-934bf36c2387',
    'acw_tc': '0a50872617456577358941596ef40e15d746437f7a9d94bd8e5386767e6832',
    'loadts': '1745657854575',
    'unread': '{%22ub%22:%2267eb6167000000001202da90%22%2C%22ue%22:%2267ee9122000000000b014bed%22%2C%22uc%22:29}',
}

headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,sl;q=0.7',
    'cache-control': 'no-cache',
    'content-type': 'application/json;charset=UTF-8',
    'origin': 'https://www.xiaohongshu.com',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://www.xiaohongshu.com/',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'x-b3-traceid': '7a73e387d5863a75',
    'x-mns': 'awjcXpIcHjyODMO1H1ncJoOuORZGzad0YcCjpkCYHJeY80Pg7B8RH809XIfQ+v3i6lIdZnz4JIINF5j2TSbwa+TXTjNyRn+CW/57cGcjngMTgGX4BRzKKhzPFc9MW1Xni1vtp7R2bKMB6ZuK/NikITjnEuXFxzveIDa8RRN7NvgJ7QdJ+0SKhnXFaTQSYFEfa98GJ+6ebIhC/J9vY0N6wg4efFwm2h8HCtkfoGXIz+QkFO5WIFBMKNn3bhWdy/lKE91zp97GFJmpGLifE0lbKdp1JaWMo8Cz7F+m66l1CLNjK7IdYgSzn07CNuCZt2BgJ43lZtSR+K/nkfXSgKQMBZKckNkS+yme6knz6udB/0b/BGx9FBzknhmHedQIbI+l1PuwbE5DCEuSHMM38ocOCymxhyJdnM2tJeDNuFOYlRlkhd+ldwtIF9Sp2f2vfnYvvl03HzZGTFnPvylmRDE0jT0gSMW9T7PakhOWG+K1S9e96PvOo6chIFaoLCQb',
    'x-s': 'XYW_eyJzaWduU3ZuIjoiNTYiLCJzaWduVHlwZSI6IngyIiwiYXBwSWQiOiJ4aHMtcGMtd2ViIiwic2lnblZlcnNpb24iOiIxIiwicGF5bG9hZCI6IjE1ZjBiMmE5NWZjMmMzZDk0MWQxYTU3YzUyYzRlOGNmM2E3YWQwNGVjNzFjN2ZiYjI2ODczNzVjMWUxNjMwMzhjYjE3ODY1ZTQ1MmI3YTEzMjI3ZTBmMWI4NGJhNzFlNTQ3YzYyYjc4OGRiMTQ2MDMzOTI1ZTc5Y2JjZjI2MGYxN2ZmODRlODI2YzIyOGYxOTU0MmI5NTNhMjRhN2NmMmRhYTFjNWVkYTgyNzEyOGM4MThhNjgyNjU4ZWUxNjFjNDY4OGE4YTFmNmQwM2U2MDYzYWZmMGUxZTVjYmJmYjQ4NzViOTRlNDFkOTlmMjQ5NTYxZTI0MDhmMDM3YjEzZDg1MmExMjBjZTJhMzBlZDQzNDNjODkyMDVkZWMzMmRmZTYyZDQxZDQxOWQ0ODE4OTNjM2Y3NzdkNzE5NTk3MzJlYjYyNDhhODIwYmYwYTY5MzRjOTBkNTVkOGNiNmRmNDk1NWMzM2NlZjBkMTBkZTEyNjdkNzMyZjBiNmMzYmMwYzY5Y2IyZTkwZTdkNmE1YWQ3MTJhZWE5NGE2YTUyNjBkIn0=',
    'x-s-common': '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',
    'x-t': '1745657856990',
    'x-xray-traceid': 'cb38a881ea91bb16c3cf04f30666bec1',
    # 'cookie': 'abRequestId=a0b91e2b-61d8-5ec1-9224-2631e850d1c2; xsecappid=xhs-pc-web; a1=1955abc08b5yt8ihorqq63uyryi8zrpu02wxowv9650000348978; webId=9bcd471049791a941f360e7d2329fda8; gid=yj220DSyqY8Dyj220DS8YJEhD2v9Y3xlFAAKEjKq7vFv3C28YuFU7l888q4YjWY8qdW2WKyY; webBuild=4.62.3; web_session=030037a0f61aa806525f96c8742f4a22947900; websectiga=2a3d3ea002e7d92b5c9743590ebd24010cf3710ff3af8029153751e41a6af4a3; sec_poison_id=831f65e1-7a8c-44df-b17c-934bf36c2387; acw_tc=0a50872617456577358941596ef40e15d746437f7a9d94bd8e5386767e6832; loadts=1745657854575; unread={%22ub%22:%2267eb6167000000001202da90%22%2C%22ue%22:%2267ee9122000000000b014bed%22%2C%22uc%22:29}',
}

data = {
    'cursor_score': '',
    'num': 21,
    'refresh_type': 1,
    'note_index': 35,
    'unread_begin_note_id': '',
    'unread_end_note_id': '',
    'unread_note_count': 0,
    'category': 'homefeed.career_v3',
    'search_key': '',
    'need_num': 6,
    'image_formats': [
        'jpg',
        'webp',
        'avif',
    ],
    'need_filter_image': False,
}
# 检测较严格，需要这样
data = json.dumps(data, separators=(",", ":"))

response = requests.post('https://edith.xiaohongshu.com/api/sns/web/v1/homefeed', cookies=cookies, headers=headers, data=data)
print(response.text)
# Note: json_data will not be serialized by requests
# exactly as it was in the original request.
#data = '{"cursor_score":"","num":21,"refresh_type":1,"note_index":35,"unread_begin_note_id":"","unread_end_note_id":"","unread_note_count":0,"category":"homefeed.career_v3","search_key":"","need_num":6,"image_formats":["jpg","webp","avif"],"need_filter_image":false}'
#response = requests.post('https://edith.xiaohongshu.com/api/sns/web/v1/homefeed', cookies=cookies, headers=headers, data=data)