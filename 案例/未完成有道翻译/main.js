const crypto = require("crypto-js");

const client = "fanyideskweb";
const product = "webfanyi";

function genSign(e, t) {
    // 标准 md5 加密
    var str = `client=${client}&mysticTime=${e}&product=${product}&key=${t}`
    return crypto.MD5(str).toString()
}

console.log(genSign(1742882445826, "asdjnjfenknafdfsdfsd"));


function decrypt(e, t, a) {
    // 生成密钥和IV并转为Buffer
    const key = Buffer.alloc(16, crypto.MD5(t).toString())
        , iv = Buffer.alloc(16, crypto.MD5(a).toString())
        , encryptedData  = crypto.enc.Base64.parse(e);
    const decrypted = crypto.AES.decrypt(
        { ciphertext: encryptedData },
        key,
        {
            iv: iv,
            mode: crypto.mode.CBC,
            padding: crypto.pad.Pkcs7
        }
    )
    return decrypted.toString(crypto.enc.Utf8)
}

console.log(decrypt("Z21kD9ZK1ke6ugku2ccWuwRmpItPkRr5XcmzOgAKD0GcaHTZL9kyNKkN2aYY6yiOxg_Fd3fyq5LEn0HMG6iIx4P3mdafaf4GF3RFZf7tvm3b_BdT_meDgT2SXeM6gWddfX_zztoSOwl5wSHS91ZhH39A24Ih4IaorDrTd-OLlnEXOPNlU8cEOCcM9Iiul7D4", "ydsecret://query/key/B*RGygVywfNBwpmBaZg*WT7SIOUP2T0C9WHMZN39j^DAdaZhAnxvGcCY6VYFwnHl", "ydsecret://query/iv/C@lZe2YzHtZ2CYgaXKSVfsb7Y4QWHjITPPZ0nQp87fBeJ!Iv6v^6fvi2WN@bYpJ4"));