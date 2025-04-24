# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/04/17
"""
目标: 通过 hook 获取 headers 中的 hexin-v 生成
如果请求头没有 hexin-v 就会校验 cookies 中的 v 参数
"""
import json
import re
import subprocess
from functools import partial
from urllib.parse import quote_plus
import execjs
import requests


class IwencaiClient:
    """
    封装同花顺 i问财接口的简易客户端。
    负责：
      1. 自动获取/刷新 hexin‑v
      2. 对外暴露统一的 query(question, …) 方法
    """

    _INDEX_URL = "https://www.iwencai.com/unifiedwap/home/index"
    _API_URL = "https://www.iwencai.com/customized/chart/get-robot-data"
    _JS_PATTERN = r'<script[^>]+src=["\'](//s\.thsi\.cn/js/[^"\']+)["\']'

    def __init__(self, *, ua: str | None = None, **requests_kwargs):
        """
        Parameters
        ----------
        ua : str | None
            自定义 User‑Agent；不传则使用一个较新的 Chrome UA。
        requests_kwargs :
            透传给 `requests.Session(**requests_kwargs)`，比如你想加 proxies / timeout。
        """
        # 1. 修补 Windows 平台某些情况下 Popen encoding 被忽略的问题
        subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")

        # 2. 会话 & 统一请求头
        self._sess = requests.Session(**requests_kwargs)
        self._common_headers = {
            "User-Agent": ua
                          or (
                              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                              "AppleWebKit/537.36 (KHTML, like Gecko) "
                              "Chrome/135.0.0.0 Safari/537.36"
                          ),
            "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
        }

        # 3. JS 执行上下文 & 缓存的 hexin‑v
        self._js_ctx: execjs.ExternalRuntime.Context | None = None

    # ---------- 公共 API ---------- #

    def query(
            self,
            question: str,
            *,
            perpage: int = 50,
            page: int = 1,
            source: str = "Ths_iwencai_Xuangu",
    ) -> dict:
        """
        向 i问财发起一次查询，返回 JSON 数据（已做 `json.loads`）。
        如果 hexin‑v 失效，会自动刷新并重试一次。
        """
        hexin_v = self._ensure_hexin_v()
        payload = {
            "source": source,
            "version": "2.0",
            "query_area": "",
            "block_list": "",
            "add_info": (
                '{"urp":{"scene":1,"company":1,"business":1},'
                '"contentType":"json","searchInfo":true}'
            ),
            "question": question,
            "perpage": perpage,
            "page": page,
            "secondary_intent": "",
            "log_info": '{"input_type":"typewrite"}',
            "rsh": "Ths_iwencai_Xuangu_qunb00lpluzv1zyub821gtpxlzu8uh5x",
        }
        headers = {
            **self._common_headers,
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "Origin": "https://www.iwencai.com",
            "Referer": f"https://www.iwencai.com/unifiedwap/result?w={quote_plus(question)}",
            "hexin-v": hexin_v,
        }

        resp = self._sess.post(self._API_URL, headers=headers, json=payload)
        try:
            return resp.json()
        except json.JSONDecodeError:
            # hexin‑v 可能过期 → 刷新后再试一次
            self._refresh_js_ctx(force=True)
            headers["hexin-v"] = self._ensure_hexin_v()
            resp = self._sess.post(self._API_URL, headers=headers, json=payload)
            resp.raise_for_status()
            return resp.json()

    # ---------- 私有工具 ---------- #

    def _ensure_hexin_v(self) -> str:
        """确保 JS 上下文已就绪，并返回 hexin‑v."""
        if self._js_ctx is None:
            self._refresh_js_ctx()
        return self._js_ctx.call("rt.update")  # type: ignore[union-attr]

    def _refresh_js_ctx(self, *, force: bool = False) -> None:
        """抓取首页，解析最新 JS 并构造 execjs 上下文."""
        if self._js_ctx is not None and not force:
            return

        # 1. 首页提取 JS 文件 URL
        idx_resp = self._sess.get(self._INDEX_URL, headers=self._common_headers)
        match = re.search(self._JS_PATTERN, idx_resp.text)
        if not match:
            raise RuntimeError("未能在首页找到 JS 链接")

        js_url = "https:" + match.group(1)
        js_resp = self._sess.get(js_url, headers=self._common_headers)
        js_resp.raise_for_status()

        # 2. token_server_time 为文件开头第一个分号之前
        token_server_time = js_resp.text.split(";", 1)[0]

        # 3. 读取本地补充脚本（gen_hexin-v.js），拼接后编译
        with open("gen_hexin-v.js", "r", encoding="utf-8") as f:
            full_js = token_server_time + "\n" + f.read()
        self._js_ctx = execjs.compile(full_js)


# ------------------ 使用示例 ------------------ #

if __name__ == "__main__":
    client = IwencaiClient()
    data = client.query("20250417涨停")
    items = (
        data["data"]["answer"][0]["txt"][0]["content"]["components"][0]["data"][
            "datas"
        ]
    )
    print(f"共返回 {len(items)} 条结果，前 3 条：")
    for row in items[:3]:
        print(row)
