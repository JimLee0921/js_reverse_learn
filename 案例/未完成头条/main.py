# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/04/21
"""

"""
import requests

# cookies = {
#     '__ac_nonce': '06805f2a5006b2c8446d9',
#     '__ac_signature': '_02B4Z6wo00f01.XTPfAAAIDCKojOv01Fig.18zlAAJV660',
#     'tt_webid': '7495663876227302923',
#     'gfkadpd': '24,6457',
#     'ttcid': 'd88f2e166e734e5c8105a68fbea114da18',
#     'local_city_cache': '%E5%AE%81%E6%B3%A2',
#     'ttwid': '1%7CzDl7tBsSuSVCmXKY3ZzdrbdqYAJUhUz5MoF12lxbkrU%7C1745220263%7C8df69164907b688504ab65aac2026d4ec97dc4cbc17d7d0f9f6148155a08cd82',
#     'x-web-secsdk-uid': 'fbfb5e30-6a4d-4605-942c-291f180e2216',
#     'csrftoken': '0208eee042438fdf9eb78386a269e65f',
#     'tt_scid': 'XdG4UucnVeC746W-.3zXSOik72vHVXk4ZGWftDFnNJOyEjsy67SYF-Xr8vCpNBbfb9ed',
#     's_v_web_id': 'verify_m9qr33zq_yd8Kn6d3_IYVK_4U3H_AKiX_fUDlLKuQ9WLa',
#     '__feed_out_channel_key': 'entertainment',
# }
#
headers = {
    # 'accept': 'application/json, text/plain, */*',
    # 'accept-language': 'zh-CN,zh;q=0.9',
    # 'cache-control': 'no-cache',
    # 'pragma': 'no-cache',
    # 'priority': 'u=1, i',
    # 'referer': 'https://www.toutiao.com/?wid=1745220262775',
    # 'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    # 'sec-ch-ua-mobile': '?0',
    # 'sec-ch-ua-platform': '"Windows"',
    # 'sec-fetch-dest': 'empty',
    # 'sec-fetch-mode': 'cors',
    # 'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    # 'cookie': '__ac_nonce=06805f2a5006b2c8446d9; __ac_signature=_02B4Z6wo00f01.XTPfAAAIDCKojOv01Fig.18zlAAJV660; tt_webid=7495663876227302923; gfkadpd=24,6457; ttcid=d88f2e166e734e5c8105a68fbea114da18; local_city_cache=%E5%AE%81%E6%B3%A2; ttwid=1%7CzDl7tBsSuSVCmXKY3ZzdrbdqYAJUhUz5MoF12lxbkrU%7C1745220263%7C8df69164907b688504ab65aac2026d4ec97dc4cbc17d7d0f9f6148155a08cd82; x-web-secsdk-uid=fbfb5e30-6a4d-4605-942c-291f180e2216; csrftoken=0208eee042438fdf9eb78386a269e65f; tt_scid=XdG4UucnVeC746W-.3zXSOik72vHVXk4ZGWftDFnNJOyEjsy67SYF-Xr8vCpNBbfb9ed; s_v_web_id=verify_m9qr33zq_yd8Kn6d3_IYVK_4U3H_AKiX_fUDlLKuQ9WLa; __feed_out_channel_key=entertainment',
}

params = {
    'channel_id': '3189398972',
    'min_behot_time': '0',
    'offset': '0',
    'refresh_count': '1',
    'category': 'pc_profile_channel',
    'client_extra_params': '{"short_video_item":"filter"}',
    'aid': '24',
    'app_name': 'toutiao_web',
    'msToken': '2Ec4_0oCpo5zKTASMdQrM5Gfu-ey1WhySNPN6gitLbTCdLDPzQ5D8hAe_o1ItM6J_nRvfCCn2QFg2xnSI9I7-UcHzFU2iJuY0pzruITKtkJvrkrr7i0rdiB-2u2cPFE=',
    'a_bogus': 'QJ8M/Ruvdk2kffyZ5U/LfY3qV1a3YgXm0t9b/Dhqrnf2d639HMTq9exEj2kvjARjxT/2Iebjy4hjT3NMic2jA3v6HW8Kl2A/-gWdt-Ph-9zj53iruyRkrzDF-vG-SaBBRk-lrOX0w7lHzbL209oH57qvPjoja3LkFk6FOoBU',
}

response = requests.get('https://www.toutiao.com/api/pc/list/feed', params=params, headers=headers)
print(response.text)