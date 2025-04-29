const crypto = require("crypto-js");

function encrypted(e) {
    var t = "FvHLszMezuy5hj+r1sv2wVO3Y2X4iINoHmsr717f0cGbisMwGv0QSlriGTaK5+wSS/82fItX1Wm5iWLSvO0iXy1zppS4/auzR/lDXh1ZlSpnii/JJSasSSD5lozUn46NbIAjM1hptk675JO3SMtQeFh0pO4TR/0rLlam7u1bE1U="
        , n = crypto.enc.Utf8.parse("comkmu7wfcbu1kjk")
        , a = crypto.AES.encrypt(e, n, {
        mode: crypto.mode.ECB,
        padding: crypto.pad.Pkcs7
    })
        , r = a.ciphertext.toString();
    return r
}

function decrypted(e) {
    var t = "FvHLszMezuy5hj+r1sv2wVO3Y2X4iINoHmsr717f0cGbisMwGv0QSlriGTaK5+wSS/82fItX1Wm5iWLSvO0iXy1zppS4/auzR/lDXh1ZlSpnii/JJSasSSD5lozUn46NbIAjM1hptk675JO3SMtQeFh0pO4TR/0rLlam7u1bE1U="
        , n = crypto.enc.Utf8.parse("comkmu7wfcbu1kjk")
        , a = crypto.AES.decrypt(e, n, {
        mode: crypto.mode.ECB,
        padding: crypto.pad.Pkcs7,
        format: crypto.format.Hex
    })
        , r = a.toString(crypto.enc.Utf8);
    return r.toString()
}

function getSignCode() {
    data = {
        timestamp: 1745818851578
    }
    return encrypted(JSON.stringify(data))
}

console.log(getSignCode());
