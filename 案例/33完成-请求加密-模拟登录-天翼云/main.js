const CryptoJS = require('crypto-js');

function genComParamSeqCode() {
    var e, n, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16,
        a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), o = [];
    if (r = r || a.length,
        t)
        for (e = 0; e < t; e++)
            o[e] = a[0 | Math.random() * r];
    else
        for (o[8] = o[13] = o[18] = o[23] = "-",
                 o[14] = "4",
                 e = 0; e < 36; e++)
            o[e] || (n = 0 | 16 * Math.random(),
                o[e] = a[19 === e ? 3 & n | 8 : n]);
    return o.join("")
}

function getParams() {
    var n = (new Date).getTime() - 154
        , t = "s54zv9bm1vd5czfujy6nnuxj1l4g2ny6"
        , r = genComParamSeqCode()
        , a = CryptoJS.MD5(n + r + CryptoJS.MD5(r + t + n).toString()).toString();
    return params = {
        referrer: "wap",
        mainVersion: "300031500",
        comParam_curTime: n,
        comParam_seqCode: r,
        comParam_signature: a,
        isCheck: !0,
        locale: "zh-cn"
    }
}

var b = {
    f: function f(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e && "string" === typeof e) {
            var t = n.text || "0"
                , r = n.length || 24;
            if (e.length < r)
                for (var a = e.length; a < r; a++)
                    e += t;
            else
                e = e.substring(0, r);
            return e
        }
    },
    g: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return e.replace(/\s+/g, "")
    },
    c: function (e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
            , t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
            , r = t.enc
            , a = void 0 === r ? "Utf8" : r
            , o = t.mode
            , i = void 0 === o ? "ECB" : o
            , c = t.padding
            , u = void 0 === c ? "Pkcs7" : c
            , d = CryptoJS.enc[a].parse(n)
            , s = {
            mode: CryptoJS.mode[i],
            padding: CryptoJS.pad[u]
        }
            , l = CryptoJS.TripleDES.encrypt(e, d, s);
        return l.toString()
    }
}
function encryptPassword(username, password) {
    return encodeURI(b["c"](password, b["f"](b["g"](username))))

}
function getCookies() {
    const t = Date.now();
    return {
        pvid: 1,
        sid1: `${t}-${we()}`,
        sid2: `${t}-${we()}`
    }
}
function we(e = 32, t = 16) {
    let n, r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), a = [];
    if (t = t || r.length,
        e)
        for (n = 0; n < e; n++)
            a[n] = r[0 | Math.random() * t];
    else {
        let e;
        for (a[8] = a[13] = a[18] = a[23] = "-",
                 a[14] = "4",
                 n = 0; n < 36; n++)
            a[n] || (e = 0 | 16 * Math.random(),
                a[n] = r[19 === n ? 3 & e | 8 : e])
    }
    return a.join("")
}

console.log(getCookies())


// console.log(getParams());
//
// console.log(encryptPassword("85939521@qq.com", "asd1123"))
