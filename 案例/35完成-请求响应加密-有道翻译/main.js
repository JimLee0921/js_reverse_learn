// 网页用的标准加密库,这里直接标准加密库模拟, key和iv是固定的,也可以从接口拿
const crypto = require('crypto');  // 引入 Node.js 的 crypto 模块
function genSign(d, e, u, t) {
    return crypto.createHash("md5").update(`client=${d}&mysticTime=${e}&product=${u}&key=${t}`.toString()).digest("hex")
}

// console.log(genSign("fanyideskweb", new Date().getTime(), "webfanyi", "Vy4EQ1uwPkUoqvcP1nIu6WiAjxFeA3Y3"))


function T(e) {
    // 标准加密库
    return crypto.createHash("md5").update(e).digest()
}

function decryptData(e, t, a) {
    const o = T(t)

        , n = T(a)
        , r = crypto.createDecipheriv("aes-128-cbc", o, n);
    let s = r.update(e, "base64", "utf-8");
    return s += r.final("utf-8"),
        s
}
//
console.log(decryptData(
    "Z21kD9ZK1ke6ugku2ccWuwRmpItPkRr5XcmzOgAKD0GcaHTZL9kyNKkN2aYY6yiONNLtxLFqSgIL-vbaxYJGhabp_Xnb1mq1rfV9FOwaWKCYPTLh33L5XfJ479kIzXNgFoCf3ZKNZL8CAFJ7l-i2AOYxv8aqSvQLiu3OlyB_vMEx3lSiIcXx0poQxjps6lX2DSVs9AuA1WswpEXUPE6CAZzJa6S49XH7o2mqkRJq-4 o=",
    "ydsecret://query/key/B*RGygVywfNBwpmBaZg*WT7SIOUP2T0C9WHMZN39j^DAdaZhAnxvGcCY6VYFwnHl",
    "ydsecret://query/iv/C@lZe2YzHtZ2CYgaXKSVfsb7Y4QWHjITPPZ0nQp87fBeJ!Iv6v^6fvi2WN@bYpJ4"
))

//77a165720d3d4c2505af49adbed7729e