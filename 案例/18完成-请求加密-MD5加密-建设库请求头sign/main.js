// pd 就是把参数拼接成字符串后标准 md5 加密
const CryptoJS = require('crypto-js');

function md(e) {
    var t = gd(e), n = "";
    for (var i in t) {
        var r = _d(e[t[i]]);
        null != r && "" != r.toString() && (n += t[i] + "=" + r + "&")
    }
    return n
}

function _d(t) {
    var n;
    if (Array.isArray(t)) {
        for (var r in n = new Array, t) {
            var o = t[r];
            for (var i in o) null == o[i] ? delete t[r][i] : Array.isArray(t[r][i]) && e(t[r][i])
        }
        return n = t, JSON.stringify(n).replace(/^(\s|")+|(\s|")+$/g, "")
    }
    return n = t && t.constructor === Object ? JSON.stringify(t) : t
}

function gd(e) {
    var t = new Array, n = 0;
    for (var i in e) t[n] = i, n++;
    return t.sort()
}


data = {
    "eid": "", "achievementQueryType": "and", "achievementQueryDto": [], "personnelQueryDto": {
        "queryType": "and"
    }, "aptitudeQueryDto": {
        "queryType": "and",
        "nameStr": "",
        "aptitudeQueryType": "and",
        "businessScopeQueryType": "or",
        "filePlaceType": "1",
        "aptitudeDtoList": [{
            "codeStr": "", "queryType": "and", "aptitudeType": "qualification"
        }],
        "aptitudeSource": "new"
    }, "page": {
        "page": 2, "limit": 20, "field": "", "order": ""
    }
}

function pd(key, data, time) {
    // 模拟拼接字符串后标准md5加密
    var raw = data + key + time;
    return CryptoJS.MD5(raw).toString();
}

function genSign(data, time) {
    // time = new Date().getTime();
    t = md(data);
    sign1 = pd("ZuSj0gwgsKXP4fTEz55oAG2q2p1SVGKK", t, time);
    sign2 = pd("mwMlWOdyM7OXbjzQPulT1ndRZIAjShDB", sign1, time);
    sign = pd("ghaepVf6IhcHmgnk4NCTXLApxQkBcvh1", sign2, time);
    return sign;
}

console.log(genSign(data));
