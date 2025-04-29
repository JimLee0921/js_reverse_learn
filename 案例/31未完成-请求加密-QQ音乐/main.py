# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/04/21
"""

"""
import requests

cookies = {
    'RK': 'dfNBkZOKWR',
    'ptcz': 'f4872e93e29251a5f793dbcf282060920b7b3db5607ef24c07c36023c9b27200',
    '_ga': 'GA1.1.1485066606.1737084043',
    '_ga_S0Y0QJNCMH': 'GS1.1.1737084042.1.1.1737084073.29.0.0',
    'pgv_pvid': '7041672341',
    'fqm_pvqid': '3f49aa2b-c67e-46ee-be2d-a895c59fe5b6',
    'ts_uid': '9737588874',
    'ts_refer': 'i.y.qq.com/',
    'eas_sid': 'jz8SwF4PhLn4ylQ14V4wiiyOHp',
    'suid': 'user_0_6i9M0PHtMbPx9',
    'pac_uid': '0_s8WWFEptkTJtN',
    '_qimei_q36': '',
    '_qimei_h38': 'fded5d1f901d87c9a10436a50200000af18702',
    'fqm_sessionid': '5a22a903-ae69-47a3-a1ac-283487e2ad90',
    'pgv_info': 'ssid=s6407755166',
    '_qpsvr_localtk': '0.974967723760174',
    'wxuin': '1152921504835033322',
    'qm_keyst': 'W_X_63B0az9HfatUw5DMR9C80-WNo6ANdAhRvwHBg3ZsSYnaliT-duDdJyvhsDWg2MbbsszU81bo0rYInso0oYdN976Zz-fc',
    'qm_keyst': 'W_X_63B0az9HfatUw5DMR9C80-WNo6ANdAhRvwHBg3ZsSYnaliT-duDdJyvhsDWg2MbbsszU81bo0rYInso0oYdN976Zz-fc',
    'psrf_qqrefresh_token': '',
    'wxrefresh_token': '91_ZXUqAmuLyrZ1Yq2ONZWKnn8tAjgkC9pv7dKWHc8ubzgjK_CBcyPHeWPlnmcp_YM7PE_UOJZjDOxdmaxT5KYZP3myu50cquzBJRIsN_dNRbI',
    'psrf_qqopenid': '',
    'psrf_qqunionid': '',
    'wxuin': '1152921504835033322',
    'wxunionid': 'oqFLxsk-i2WJ1_sjI8V_cY-IEkN0',
    'psrf_qqaccess_token': '',
    'qqmusic_key': 'W_X_63B0az9HfatUw5DMR9C80-WNo6ANdAhRvwHBg3ZsSYnaliT-duDdJyvhsDWg2MbbsszU81bo0rYInso0oYdN976Zz-fc',
    'euin': 'oK6kowEAoK4z7eci7KnioioAoc**',
    'wxopenid': 'opCFJw71CCHJIVAQHzoy-uMe4uXM',
    'tmeLoginType': '1',
    'login_type': '2',
    'ts_last': 'y.qq.com/n/ryqq/playlist/9276043911',
}

headers = {
    'accept': 'application/json',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,sl;q=0.7',
    'cache-control': 'no-cache',
    'content-type': 'application/x-www-form-urlencoded',
    'origin': 'https://y.qq.com',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://y.qq.com/',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    # 'cookie': 'RK=dfNBkZOKWR; ptcz=f4872e93e29251a5f793dbcf282060920b7b3db5607ef24c07c36023c9b27200; _ga=GA1.1.1485066606.1737084043; _ga_S0Y0QJNCMH=GS1.1.1737084042.1.1.1737084073.29.0.0; pgv_pvid=7041672341; fqm_pvqid=3f49aa2b-c67e-46ee-be2d-a895c59fe5b6; ts_uid=9737588874; ts_refer=i.y.qq.com/; eas_sid=jz8SwF4PhLn4ylQ14V4wiiyOHp; suid=user_0_6i9M0PHtMbPx9; pac_uid=0_s8WWFEptkTJtN; _qimei_q36=; _qimei_h38=fded5d1f901d87c9a10436a50200000af18702; fqm_sessionid=5a22a903-ae69-47a3-a1ac-283487e2ad90; pgv_info=ssid=s6407755166; _qpsvr_localtk=0.974967723760174; wxuin=1152921504835033322; qm_keyst=W_X_63B0az9HfatUw5DMR9C80-WNo6ANdAhRvwHBg3ZsSYnaliT-duDdJyvhsDWg2MbbsszU81bo0rYInso0oYdN976Zz-fc; qm_keyst=W_X_63B0az9HfatUw5DMR9C80-WNo6ANdAhRvwHBg3ZsSYnaliT-duDdJyvhsDWg2MbbsszU81bo0rYInso0oYdN976Zz-fc; psrf_qqrefresh_token=; wxrefresh_token=91_ZXUqAmuLyrZ1Yq2ONZWKnn8tAjgkC9pv7dKWHc8ubzgjK_CBcyPHeWPlnmcp_YM7PE_UOJZjDOxdmaxT5KYZP3myu50cquzBJRIsN_dNRbI; psrf_qqopenid=; psrf_qqunionid=; wxuin=1152921504835033322; wxunionid=oqFLxsk-i2WJ1_sjI8V_cY-IEkN0; psrf_qqaccess_token=; qqmusic_key=W_X_63B0az9HfatUw5DMR9C80-WNo6ANdAhRvwHBg3ZsSYnaliT-duDdJyvhsDWg2MbbsszU81bo0rYInso0oYdN976Zz-fc; euin=oK6kowEAoK4z7eci7KnioioAoc**; wxopenid=opCFJw71CCHJIVAQHzoy-uMe4uXM; tmeLoginType=1; login_type=2; ts_last=y.qq.com/n/ryqq/playlist/9276043911',
}

params = {
    '_': '1745821636176',
    'sign': 'zzcafa3e41g8imi1mkalajchxwmhyo9efqfiea5111f1',
}

data = '{"comm":{"cv":4747474,"ct":24,"format":"json","inCharset":"utf-8","outCharset":"utf-8","notice":0,"platform":"yqq.json","needNewCode":1,"uin":"1152921504835033322","g_tk_new_20200303":1888323351,"g_tk":1888323351},"req_1":{"module":"music.musicsearch.HotkeyService","method":"GetHotkeyForQQMusicMobile","param":{"searchid":"29079836338815549","remoteplace":"txt.yqq.top","from":"yqqweb"}},"req_2":{"module":"yqq.WhiteListServer","method":"Pass","param":{}},"req_3":{"module":"music.srfDissInfo.aiDissInfo","method":"uniform_get_Dissinfo","param":{"disstid":9276043911,"userinfo":1,"tag":1,"orderlist":1,"song_begin":0,"song_num":10,"onlysonglist":0,"enc_host_uin":""}},"req_4":{"module":"music.paycenterapi.LoginStateVerificationApi","method":"GetChargeAccount","param":{"appid":"mlive"}},"req_5":{"module":"userInfo.VipQueryServer","method":"SRFVipQuery_V2","param":{"uin_list":["1152921504835033322"]}},"req_6":{"module":"userInfo.BaseUserInfoServer","method":"get_user_baseinfo_v2","param":{"vec_uin":["1152921504835033322"]}},"req_7":{"module":"music.lvz.VipIconUiShowSvr","method":"GetVipIconUiV2","param":{"PID":3}},"req_8":{"module":"MessageCenter.MessageCenterServer","method":"GetMessage","param":{"uin":"1152921504835033322","red_dot":[{"msg_type":1}]}},"req_9":{"module":"GlobalComment.GlobalCommentMessageReadServer","method":"GetMessage","param":{"uin":"1152921504835033322","page_num":0,"page_size":1,"last_msg_id":"","type":0}}}'

response = requests.post(
    'https://u6.y.qq.com/cgi-bin/musics.fcg',
    params=params,
    cookies=cookies,
    headers=headers,
    data=data
)
print(response.text)
