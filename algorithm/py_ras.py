# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/04/16
"""
RSA 是一种非对称加密算法(更安全按但更慢)
一个加密密钥一个解密密钥 公钥加密的东西只能用私钥解密
保存为 .pem 格式是因为广泛用于存储密钥、证书、加密数据的文件格式标准
格式 | 可读性 | 编码方式 | 用途/场景 | 是否标准
PEM | 可读（文本） | Base64 + Header/Footer | HTTPS、TLS、OpenSSL常用 | ✅ 标准
DER | 不可读（binary） | ASN.1 二进制 | Java keystore, Windows cert | ✅ 标准
OpenSSH | 可读（部分） | 自定义文本格式 | SSH 登录认证 | ❌ 非标准，OpenSSH 专属
如果网页上看到的其它非对称加密方式，直接搜 xxxx 加密，复制示例代码修改密钥等数据
对称算法不够安全，密钥被拦截便可以实现解密功能

1. 加密过程发生在客户端 (无法控制)
2. 加密时需要密钥  (也无法控制)
3. 加密的密钥可以用来解密 (换一种加密方式，加密解密使用不同密钥)

加密使用 RSA 较多，解密使用 AES和DES 较多
"""
from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_v1_5
import base64

# # RSA 生成密钥对用来生成密钥对，传入密钥长度，至少1024
# rsa_key = RSA.generate(bits=1024)
#
# # 单独导出加密密钥(public key公钥)
# rsa_public_key = rsa_key.public_key()
# print(rsa_public_key.exportKey().decode())
#
# # 单独导出解密密钥(private key私钥)
# rsa_private_key = rsa_key
# print(rsa_private_key.exportKey().decode())
#
# # 存储到文件(.pem格式)
# with open('pub_key.pem', 'w', encoding='utf-8') as f:
#     f.write(rsa_public_key.exportKey().decode())
#
# with open('pri_key.pem', 'w', encoding='utf-8') as f:
#     f.write(rsa_private_key.exportKey().decode())


data = 'Hello, World!'
# RSA 加密过程 读取公钥文件
with open('pub_key.pem', 'r', encoding='utf-8') as f:
    # 处理成 RSA key
    rsa_public_key = RSA.import_key(f.read())
    # 生成一个加密器
    rsa_encryptor = PKCS1_v1_5.new(rsa_public_key)
    # 加密
    encrypted_data = rsa_encryptor.encrypt(data.encode('utf-8'))
    # 数据传输处理成base64
    encrypted_data = base64.b64encode(encrypted_data)
    print(encrypted_data.decode())

# RSA 加密过程 读取密钥文件
with open('pri_key.pem', 'r', encoding='utf-8') as f:
    # 处理成 RSA key
    rsa_private_key = RSA.import_key(f.read())
    # 生成一个解密器
    rsa_decryptor = PKCS1_v1_5.new(rsa_private_key)
    # 解密，最后一个参数为 None，表示解密后的数据长度和加密前的数据长度一致，否则会报错
    decrypted_data = rsa_decryptor.decrypt(base64.b64decode(encrypted_data), None)
    print(decrypted_data.decode())
