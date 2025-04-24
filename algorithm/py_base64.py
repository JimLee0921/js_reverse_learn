# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/03/25
"""
字符串变为字节: encode
字节变为字符串: decode
许多传输协议（如 HTTP、SMTP、JSON）只能安全地传输 ASCII 字符
不支持直接传二进制数据。Base64 把数据转成 ASCII 字符串，就能“伪装”成文本在这些通道中传输。
目前最常用的从二进制数据转为字节的工具就是 base64(64个符号组成: a-z A-Z 0-9 +/= 构成)
= 是为了末尾填充，每四位为一组，生成的位数一定是4的倍数
"""
import base64

# 字节处理为字符串
s = "fuck u, bitchjasfajfwadapfjafpwfapojfwajpodjwoadjaspofjwapfajsjfapwoajpsodjwa"

# 加密(模拟) 结果一定是字节
bs = s.encode("utf-8")

# 把字节处理成 base64 字符串
base64_encode = base64.b64encode(bs)
print(base64_encode)
print(len(base64_encode) / 4)

# 把字节再转为字符串(不需要指定编码)
print(base64_encode.decode())


# base64 解码
base64_decode = base64.b64decode(base64_encode)
print(base64_decode.decode('utf-8'))
