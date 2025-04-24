const CryptoJS = require('crypto-js');
const {logger} = require("node-gyp/lib/log");

function genGuid() {
    // 网站整体逻辑参数
    var e = "";
    var t = Date.now().toString(36)
        , r = Math.random().toString(36).replace(/^0./, "");
    e = "".concat(t, "_").concat(r);
    return e
}


function genQn(Vn) {
    // 生成 cKey 所需参数
    var Qn = 0;
    console.log(Vn.length)
    for (Ur = 0; Ur < Vn["length"]; Ur++)
        DSB = Vn["charCodeAt"](Ur),
            Qn = (Qn << -5516 + 1360 + 9081 - 4920) - Qn + DSB,
            Qn &= Qn;
    qn = Qn;
    return qn;
}

function getRequestCkey(t, e, r, n, i) {
    /*
    * 请求https://playvv.yangshipin.cn/playvinfo获取fvkey所需加密参数
    * t: 视频 id
    * e: 时间戳
    * r: 版本号
    * n: guid
    * i: 固定平台id
    * */
    Fn = `|${t}|${e}|mg3c3b04ba|${r}|${n}|${i}|https://w.yangshipin.cn/|mozilla/5.0 (windows nt ||Mozilla|Netscape|Win32|`
    qn = genQn(Fn)
    Yn = "|" + qn + Fn;                    // 拼接明文
    Kn = CryptoJS.enc.Hex.parse("4E2918885FD98109869D14E0231A0BF4");                       // 解析 key（十六进制 → WordArray）
    Xn = CryptoJS.enc.Hex.parse("16B17E519DDD0CE5B79D7A63A4DD801C");                         // 解析 iv（十六进制 → WordArray）
    return "--01" + CryptoJS.AES.encrypt(Yn, Kn, {
        iv: Xn,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }).ciphertext.toString().toUpperCase()
}

guid = genGuid();
console.log(guid)
timestamp = Math.floor(Date.now() / 1000)
console.log(getRequestCkey(
        'g0000648jiz',
        timestamp,
        '1.33.75',
        guid,
        4330701
    )
)
