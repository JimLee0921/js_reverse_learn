# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/04/10

from Crypto.Cipher import DES
from Crypto.Util.Padding import pad, unpad
import base64

"""
DES 加解密（对称加密算法）

- DES 密钥长度固定为 8 字节（64 位），不能再长。
- 加密块大小也是 8 字节，所以填充也要按 8 字节来。
- CBC 模式需要 IV，且 IV 也必须是 8 字节。
"""

data = "fuck u, bitch"

# DES 密钥（必须是 8 字节）
key = b"12345678"        # 👈 只能是 8 字节
iv = b"abcdefgh"         # 👈 CBC 模式 IV 也是 8 字节

# 1. 创建加密器（CBC 模式）
des_cipher_encrypt = DES.new(key, DES.MODE_CBC, iv)

# 2. 数据填充为 8 字节的倍数
data_padded = pad(data.encode(), 8)  # DES 是 8 字节块
print("Padded:", data_padded)

# 3. 加密
des_encrypted_data = des_cipher_encrypt.encrypt(data_padded)
print("Encrypted (raw):", des_encrypted_data)

# 4. Base64 编码
base64_encoded_data = base64.b64encode(des_encrypted_data).decode()
print("Base64 Encoded:", base64_encoded_data)

# 5. Base64 解码
base64_decoded_data = base64.b64decode(base64_encoded_data)
print("Base64 Decoded:", base64_decoded_data)

# 6. 创建新的解密器（CBC 模式）
des_cipher_decrypt = DES.new(key, DES.MODE_CBC, iv)

# 7. 解密
des_decrypted_data = des_cipher_decrypt.decrypt(base64_decoded_data)
print("Decrypted (raw):", des_decrypted_data)

# 8. 去填充
data_unpadded = unpad(des_decrypted_data, 8)
print("Decrypted (final):", data_unpadded.decode())
