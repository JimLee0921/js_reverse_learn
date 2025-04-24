# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/04/23
"""
拼多多 anti-content 加密
url: https://www.pinduoduo.com/home/food/
需要注意的坑
1. 补环境的时候需要删除 node 环境中特有的 global 和 Buffer 等元素: delete global; delete Buffer;
2. 由于是直接扣的 webpack 代码,但是source_module1.js中的fbeZ加载器中的第五个主要加密逻辑模块的 exports 没有执行
但是实际中在exports导入时调用了函数ut并传入当前时间戳来更新系统时间戳,如果不修改就是用的时假的时间戳,可以选择在执行函数ut中直接修改假的时间戳
为 new Date().getTime(),也可以手动把函数ut赋予的lt使用window暴露,然后在生成时主动调用window.lt(new Date.getTime())来更新
3. 这是个大的webpack中包含了小webpack
4. 第二条中真实的 serverTime 是从接口获取的,但是模拟已经可以了
"""
import execjs
import requests

with open('main.js', 'r', encoding='utf-8') as f:
    js_code = f.read()
    ctx = execjs.compile(js_code)
    anti_content = ctx.call('genAntiContent')

headers = {
    'Accept': 'application/json, text/javascript',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,sl;q=0.7',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Origin': 'https://www.pinduoduo.com',
    'Pragma': 'no-cache',
    'Referer': 'https://www.pinduoduo.com/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

params = {
    'tf_id': 'TFRQ0v00000Y_13400',
    'page': '1',
    'size': '39',
    'anti_content': anti_content,
}

response = requests.get('https://apiv2.pinduoduo.com/api/gindex/tf/query_tf_goods_info', params=params, headers=headers)
print(response.text)
items = response.json()['result']
for item in items:
    print(item)
