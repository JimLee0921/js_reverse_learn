require('./source_loader')
require('./source_module')
const CryptoJS = require('crypto-js');
v = window.loader(9816);
t = new v["a"];

t.encryptLong = function (A) {
    var e = this.getKey()
        , t = (e.n.bitLength() + 7 >> 3) - 11;
    try {
        var n = ""
            , r = "";
        if (A.length > t)
            return n = A.match(/.{1,50}/g),
                n.forEach((function (A) {
                        var t = e.encrypt(A);
                        r += t
                    }
                )),
                w(r);
        var a = e.encrypt(A)
            , s = w(a);
        return s
    } catch (i) {
        return i
    }
}

function w(A) {
    var e, t, n = "", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = "=";
    for (e = 0; e + 3 <= A.length; e += 3)
        t = parseInt(A.substring(e, e + 3), 16),
            n += r.charAt(t >> 6) + r.charAt(63 & t);
    e + 1 == A.length ? (t = parseInt(A.substring(e, e + 1), 16),
        n += r.charAt(t << 2)) : e + 2 == A.length && (t = parseInt(A.substring(e, e + 2), 16),
        n += r.charAt(t >> 2) + r.charAt((3 & t) << 4));
    while ((3 & n.length) > 0)
        n += a;
    return n
}


function genParam(page, publicKey) {

    t.setPublicKey(publicKey);
    param = {
        "inviteMethod": "",
        "businessClassfication": "",
        "mc": "",
        "lx": "ZBGG",
        "dwmc": "",
        "pageIndex": page
    }
    param.sign = CryptoJS.MD5(JSON.stringify(param)).toString();
    param.timeStamp = +new Date;

    s = t.encryptLong(JSON.stringify(param));
    return s;

}
