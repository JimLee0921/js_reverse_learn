# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/03/20
"""

"""

# -*- coding: UTF-8 -*-
from fastapi import FastAPI, Response
# from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# 允许跨域请求（可选，JSONP本身解决跨域问题）
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )


@app.get("/jsonp")
def jsonp_endpoint(callback: str = "callback"):  # 从查询参数中获取callback的值
    data = {
        "message": "Hello from JSONP!",
        "status": "success",
        "data": {"user": "Alice", "age": 25}
    }

    # 构造JSONP响应
    js_code = f"{callback}({data})"
    return Response(content=js_code, media_type="application/javascript")
