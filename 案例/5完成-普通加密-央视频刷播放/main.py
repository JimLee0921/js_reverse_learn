# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/04/22
"""
央视频请求接口刷播放
url: https://w.yangshipin.cn/video?type=0&vid=g0000648jiz
"""
# from datetime import datetime
# import json
# import time
# import requests
# import execjs
# import re
#
# with open('get_params.js', 'r', encoding='utf-8') as f:
#     js_code = f.read()
#     ctx = execjs.compile(js_code)
# guid = ctx.call('genGuid')
# session = requests.session()
# session.headers = {
#     'accept': '*/*',
#     'accept-language': 'zh-CN,zh;q=0.9',
#     'cache-control': 'no-cache',
#     'pragma': 'no-cache',
#     'referer': 'https://w.yangshipin.cn/',
#     'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
#     'sec-ch-ua-mobile': '?0',
#     'sec-ch-ua-platform': '"Windows"',
#     'sec-fetch-dest': 'script',
#     'sec-fetch-mode': 'no-cors',
#     'sec-fetch-site': 'same-site',
#     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
#     # 'cookie': 'guid=m9s31ph5_kyx3objdidr',
# }
# PLATFORM = '4330701'
# VID = 'g0000648jiz'
# VIDEO_URL = f"https://w.yangshipin.cn/video?type=0&vid={VID}"
#
# params = {
#     'callback': 'jsonp1',
#     'guid': ctx.call('genGuid'),
#     'platform': PLATFORM,
#     'vid': VID,
#     'defn': 'auto',
#     'charge': '0',
#     'defaultfmt': 'auto',
#     'otype': 'json',
#     'defnpayver': '1',
#     'appVer': '1.33.75',
#     'sphttps': '1',
#     'sphls': '1',
#     'spwm': '4',
#     'dtype': '3',
#     'defsrc': '1',
#     'encryptVer': '8.1',
#     'sdtfrom': PLATFORM,
#     'cKey': ctx.call('getRequestCkey', VID, int(time.time()), '1.33.75', ctx.call('genGuid'), PLATFORM),
#     'panoramic': 'false',
#     'flowid': ctx.call('genGuid'),
# }
# # 请求 playvinfo 获取最终请求的 vkey 和 fn 参数来构造 vurl
# response = session.get('https://playvv.yangshipin.cn/playvinfo', params=params)
# # 通用 jsonp 解析
# jsonp_re = re.compile(r"\((?P<data>.*)\)", re.S)
#
# data = json.loads(jsonp_re.search(response.text).group("data"))['vl']['vi'][0]
# print(data)
# fn = data['fn']
# vkey = data['fvkey']
# print(fn, vkey)
# vurl = f"https://mp4playcloud-cdn.ysp.cctv.cn/{fn}?sdtfrom={PLATFORM}&guid={guid}&vkey={vkey}&platform=2"
# print(vurl)
#
# # 最终请求接口刷播放量
# params = {
#     'BossId': '2865',
# }
# data = {
#     'ctime': datetime.now().strftime("%y-%m-%d %H:%M:%S"),
#     'ua': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
#     'hh_ua': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
#     'platform': PLATFORM,
#     'guid': guid,
#     'Pwd': '1698957057',
#     'version': 'wc-1.33.75',
#     'url': VIDEO_URL,
#     'hh_ref': VIDEO_URL,
#     'vid': VID,
#     'isfocustab': 1,
#     'isvisible': 1,
#     'idx': 0,
#     'val': 159,
#     'pid': 'm9s3v8bo_cwdkmo9z39e',
#     'bi': 397,
#     'bt': 397,
#     'defn': 'hd',
#     'vurl': vurl,
#     'step': 30,
#     'val1': 0,
#     'val2': 2,
#     'fact1': '',
#     'fact2': '',
#     'fact3': '',
#     'fact4': '',
#     'fact5': '',
# }
#
# response = session.post('https://btrace.yangshipin.cn/kvcollect', params=params, data=data)
# print(response.status_code)

import requests
import json
import time
import re
from datetime import datetime
import execjs
import threading


class YangshipinPlayBooster:
    """
    模拟央视央视频（央视频平台）播放行为的类。
    通过获取视频 vurl、vkey 等参数并上报播放接口，实现刷播放量效果。
    支持多线程操作，可配置并发次数。
    """

    def __init__(self, vid, platform='4330701', appver='1.33.75'):
        self.vid = vid
        self.platform = platform
        self.appver = appver
        self.video_url = f"https://w.yangshipin.cn/video?type=0&vid={vid}"
        self.session = requests.Session()
        self._setup_headers()

        with open('get_params.js', 'r', encoding='utf-8') as f:
            self.ctx = execjs.compile(f.read())

    def _setup_headers(self):
        self.session.headers = {
            'accept': '*/*',
            'accept-language': 'zh-CN,zh;q=0.9',
            'cache-control': 'no-cache',
            'pragma': 'no-cache',
            'referer': 'https://w.yangshipin.cn/',
            'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'script',
            'sec-fetch-mode': 'no-cors',
            'sec-fetch-site': 'same-site',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        }

    def _gen_guid(self):
        return self.ctx.call('genGuid')

    def _get_ckey(self, vid, guid):
        return self.ctx.call('getRequestCkey', vid, int(time.time()), self.appver, guid, self.platform)

    def _get_playvinfo(self, guid):
        """
        获取播放信息接口，返回视频文件名和 vkey。
        用于后续构造播放地址。
        """
        params = {
            'callback': 'jsonp1',
            'guid': guid,
            'platform': self.platform,
            'vid': self.vid,
            'defn': 'auto',
            'charge': '0',
            'defaultfmt': 'auto',
            'otype': 'json',
            'defnpayver': '1',
            'appVer': self.appver,
            'sphttps': '1',
            'sphls': '1',
            'spwm': '4',
            'dtype': '3',
            'defsrc': '1',
            'encryptVer': '8.1',
            'sdtfrom': self.platform,
            'cKey': self._get_ckey(self.vid, guid),
            'panoramic': 'false',
            'flowid': self._gen_guid(),
        }
        resp = self.session.get('https://playvv.yangshipin.cn/playvinfo', params=params)
        jsonp_match = re.search(r"\((?P<data>.*)\)", resp.text, re.S)
        if not jsonp_match:
            raise ValueError("Failed to extract JSONP data.")
        data = json.loads(jsonp_match.group("data"))['vl']['vi'][0]
        return data['fn'], data['fvkey']

    def _post_kvcollect(self, guid, fn, vkey):
        """
        构造播放地址并请求上报接口，实现播放数据记录。
        """
        vurl = f"https://mp4playcloud-cdn.ysp.cctv.cn/{fn}?sdtfrom={self.platform}&guid={guid}&vkey={vkey}&platform=2"

        post_data = {
            'ctime': datetime.now().strftime("%y-%m-%d %H:%M:%S"),
            'ua': self.session.headers['user-agent'],
            'hh_ua': self.session.headers['user-agent'],
            'platform': self.platform,
            'guid': guid,
            'Pwd': str(int(time.time())),
            'version': f'wc-{self.appver}',
            'url': self.video_url,
            'hh_ref': self.video_url,
            'vid': self.vid,
            'isfocustab': 1,
            'isvisible': 1,
            'idx': 0,
            'val': 159,
            'pid': self._gen_guid(),
            'bi': 397,
            'bt': 397,
            'defn': 'hd',
            'vurl': vurl,
            'step': 30,
            'val1': 0,
            'val2': 2,
            'fact1': '',
            'fact2': '',
            'fact3': '',
            'fact4': '',
            'fact5': '',
        }

        resp = self.session.post('https://btrace.yangshipin.cn/kvcollect',
                                 params={'BossId': '2865'},
                                 data=post_data)
        print(f"[{guid}] Status: {resp.status_code}")

    def boost_once(self):
        """
        单次播放刷量流程：生成 guid，获取 vurl 参数并上报。
        """
        try:
            guid = self._gen_guid()
            fn, vkey = self._get_playvinfo(guid)
            self._post_kvcollect(guid, fn, vkey)
        except Exception as e:
            print(f"[ERROR] {e}")

    def run_multithreaded(self, count=10, max_threads=5):
        """
        多线程批量刷播放接口。
        :param count: 总共刷的次数
        :param max_threads: 每批最大线程数
        """
        threads = []
        for i in range(count):
            t = threading.Thread(target=self.boost_once)
            threads.append(t)
            t.start()
            if len(threads) >= max_threads:
                for t in threads:
                    t.join()
                threads = []

        # 等待最后一批
        for t in threads:
            t.join()


if __name__ == "__main__":
    booster = YangshipinPlayBooster(vid="g0000648jiz")
    booster.run_multithreaded(count=10000, max_threads=20)
