# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/04/10
"""
AES 和 DES 是最常用对称加密(加密和解密的密钥是一样的)
python 需要安装 pycryptodome 模块进行操作: pip install pycryptodome
pycrypto 模块13年已停止维护

"""
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad  # 进行填充
import base64

"""
AES 加解密

AES 每次加密必须以 16 字节为一组的数据进行操作。
如果要加密的数据不是 16 字节的倍数 —— 就得填充（padding）。

常见 KEY 密钥位数要求
密钥位数	字节数（bytes）	安全级别
128 位	16 字节	AES-128
192 位	24 字节	AES-192
256 位	32 字节	AES-256（最安全）

常见 mode 模式
百分之99.99都是 ECB 和 CBC
ECB 模式不需要提供 IV
CBC 模式需要提供 IV

注意在 CryptoJS 中，iv（初始化向量）可以是字符串，也可以是 WordArray，但在底层它们都要被转为 16 字节的字节序列（bytes / WordArray）才能参与 AES 运算。
key 也可以是字符串，也可以是 WordArray，但是也需要转为指定字节的字节序列才能参与AES运算
"""
data = "fuck u, bitch"

# 1. 创建加密器
# cbc模式需要传入 IV(通常也是16位)
aes_cbc_cipher_encrypted = AES.new(key="feet85d5e4g1e4w5".encode(), mode=AES.MODE_CBC, iv="fj23fk3id3kfkg4f".encode())
# ecb模式
# aes_ecb_cipher = AES.new(key="feet85d5e4g1e4w5".encode(), mode=AES.MODE_ECB)

# 2. 把需要加密的数据填充为 16 字节的倍数(常规情况下倍数都是16)，可以自己写算法或直接使用封装好的 pad
data_padded = pad(data.encode(), 16)

# 3. 加密数据,加密后的东西无法识别，也不能使用 utf-8 等进行处理
aes_encrypted_data = aes_cbc_cipher_encrypted.encrypt(data_padded)
print(aes_encrypted_data)

# 4. 使用 base64 将字节处理为 base64 数据方便传输
base64_encoded_data = base64.b64encode(aes_encrypted_data).decode()
print(base64_encoded_data)

# cbc 模式加密后对象不能服用，再创建一个解密器
aes_cbc_cipher_decrypted = AES.new(key="feet85d5e4g1e4w5".encode(), mode=AES.MODE_CBC, iv="fj23fk3id3kfkg4f".encode())

#  5. 对数据进行 base64 解码
base64_decoded_data = base64.b64decode(base64_encoded_data)
print(base64_decoded_data)

# 6. 对字节进行解密
aes_decrypted_data = aes_cbc_cipher_decrypted.decrypt(base64_decoded_data)
print(aes_decrypted_data)

# 7. 去除填充的字符
data_unpadded = unpad(aes_decrypted_data, 16)
print(data_unpadded)
