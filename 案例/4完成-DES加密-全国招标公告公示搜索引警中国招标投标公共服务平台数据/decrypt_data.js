const CryptoJS = require('crypto-js');

// DES 加密函数
function encryptByDES(message) {
    const keyHex = CryptoJS.enc.Utf8.parse('1qaz@wsx3e');
    const encrypted = CryptoJS.DES.encrypt(message, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.toString(); // 返回 Base64 编码的密文
}

// DES 解密函数
function decryptByDES(ciphertext) {
    const keyHex = CryptoJS.enc.Utf8.parse('1qaz@wsx3e');
    const decrypted = CryptoJS.DES.decrypt(
        {
            ciphertext: CryptoJS.enc.Base64.parse(ciphertext),
        },
        keyHex,
        {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
        }
    );
    return decrypted.toString(CryptoJS.enc.Utf8); // 返回 UTF-8 明文
}

// 测试代码
const encrypted = "JwdsCjMM05cYt2qyeGSWuSHgk6JH8F+tpmlEilytOcYbcoffTupp3EAEJtodFrY7"

const decrypted = decryptByDES(encrypted);

console.log('解密结果:', decrypted);

// 导出函数（可选）
module.exports = { encryptByDES, decryptByDES };