require('./source_webpack')

o = window.loader(215)

function getParams(ts, type, pageSize, pageNum, sid) {
    /**
     * ts: 时间戳
     * type: 应该跟接口有关, 破解的接口应该默认是 1
     * pageSize: 每页大小
     * pageNum: 页码
     * sid: 应该也是固定值 "26828"
     */
    var d = "$d6eb7ff91ee257475%",
        h = function (e, t, r) {
            var i = ""
                , n = t
                ,
                o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
            e && (n = Math.round(Math.random() * (r - t)) + t);
            for (var a = 0; a < n; a++) {
                i += o[Math.round(Math.random() * (o.length - 1))]
            }
            return i
        }(!1, 16);
    r = "".concat(o([ts, h, d, sid, type, pageSize, pageNum].sort().join("")));
    return {
        rs: h,
        signature: r
    }
}

// console.log(getParams());

