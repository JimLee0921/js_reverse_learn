// AES 解密
// aes_decrypt.js
function aesDecrypt(ciphertext) {
    const CryptoJS = require("crypto-js");

    var key = {
        "words": [
            863652730,
            2036741733,
            1164342596,
            1782662963
        ],
        "sigBytes": 16
    };

    var iv = {
        "words": [
            1719227713,
            1314533489,
            1397643880,
            1749959510
        ],
        "sigBytes": 16
    };

    var decrypted = CryptoJS.AES.decrypt(ciphertext, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
}
