const CryptoJS = require("crypto-js");
var r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function toBase36(e) {
    for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 9, b = e, n = ""; 0 != b;) {
        var o = b % 36
            , l = b / 36;
        n = r.charAt(o) + n,
            b = Math.round(Math.floor(l))
    }
    return ("0000000000000000" + n).substr(-t)
}

function randomInt(e, t) {
    return Math.floor(Math.random() * (t - e + 1) + e)
}

function genXB3TraceId() {
    return toBase36(new Date().getTime(), 9) + toBase36(randomInt(0, 78364164095), 7)
}

function f(e) {
    var t = (new Date).getTime();
    return (e ? "xxxxxxxxxxxxxyxxxxyxxxxxxxxxxxxx" : "xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxx").replace(/[xy]/g, (function (e) {
            var n = (t + 16 * Math.random()) % 16 | 0;
            return t = Math.floor(t / 16),
                ("x" == e ? n : 3 & n | 8).toString(16)
        }
    ))
}

function genXClientNonce() {
    return f(!0);
}

function getClientID() {
    return f();

}

function getXClientSid() {
    var d = toBase36(new Date().getTime(), 9);
    var h = toBase36(randomInt(0, 78364164095), 7);
    return "S_" + d + h;
}

function getClientTime() {
    return new Date().getTime();
}

const t = {};
// e 这里随便传个 {} 空对象都行，传别的也行。e在这里没用，只是为了函数参数对齐。这样自调用后把导出的对象赋给 d
// 这种 (t, e) 风格，是早期打包工具（比如 Webpack、Browserify）在模拟 CommonJS模块的时候， 通常标准是 (module, exports)
!(function dddd(t, e) {
    // 这里将 r 导出给 r对象,也可以删除这一句,然后在最后 return r; 然后使用变量接收 d = dddd() 来使用r 的各种方法
    t.exports = r;
    var n = null;
    try {
        n = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports
    } catch (t) {
    }

    function r(t, e, n) {
        this.low = 0 | t,
            this.high = 0 | e,
            this.unsigned = !!n
    }

    function o(t) {
        return !0 === (t && t.__isLong__)
    }

    r.prototype.__isLong__,
        Object.defineProperty(r.prototype, "__isLong__", {
            value: !0
        }),
        r.isLong = o;
    var l = {}
        , c = {};

    function h(t, e) {
        var n, r, o;
        return e ? (o = 0 <= (t >>>= 0) && t < 256) && (r = c[t]) ? r : (n = f(t, (0 | t) < 0 ? -1 : 0, !0),
        o && (c[t] = n),
            n) : (o = -128 <= (t |= 0) && t < 128) && (r = l[t]) ? r : (n = f(t, t < 0 ? -1 : 0, !1),
        o && (l[t] = n),
            n)
    }

    function d(t, e) {
        if (isNaN(t))
            return e ? k : C;
        if (e) {
            if (t < 0)
                return k;
            if (t >= w)
                return A
        } else {
            if (t <= -x)
                return I;
            if (t + 1 >= x)
                return O
        }
        return t < 0 ? d(-t, e).neg() : f(t % _ | 0, t / _ | 0, e)
    }

    function f(t, e, n) {
        return new r(t, e, n)
    }

    r.fromInt = h,
        r.fromNumber = d,
        r.fromBits = f;
    var m = Math.pow;

    function v(t, e, n) {
        if (0 === t.length)
            throw Error("empty string");
        if ("NaN" === t || "Infinity" === t || "+Infinity" === t || "-Infinity" === t)
            return C;
        if ("number" == typeof e ? (n = e,
            e = !1) : e = !!e,
        (n = n || 10) < 2 || 36 < n)
            throw RangeError("radix");
        var p;
        if ((p = t.indexOf("-")) > 0)
            throw Error("interior hyphen");
        if (0 === p)
            return v(t.substring(1), e, n).neg();
        for (var r = d(m(n, 8)), o = C, i = 0; i < t.length; i += 8) {
            var l = Math.min(8, t.length - i)
                , c = parseInt(t.substring(i, i + l), n);
            if (l < 8) {
                var h = d(m(n, l));
                o = o.mul(h).add(d(c))
            } else
                o = (o = o.mul(r)).add(d(c))
        }
        return o.unsigned = e,
            o
    }

    function y(t, e) {
        return "number" == typeof t ? d(t, e) : "string" == typeof t ? v(t, e) : f(t.low, t.high, "boolean" == typeof e ? e : t.unsigned)
    }

    r.fromString = v,
        r.fromValue = y;
    var _ = 4294967296
        , w = _ * _
        , x = w / 2
        , S = h(1 << 24)
        , C = h(0);
    r.ZERO = C;
    var k = h(0, !0);
    r.UZERO = k;
    var M = h(1);
    r.ONE = M;
    var E = h(1, !0);
    r.UONE = E;
    var T = h(-1);
    r.NEG_ONE = T;
    var O = f(-1, 2147483647, !1);
    r.MAX_VALUE = O;
    var A = f(-1, -1, !0);
    r.MAX_UNSIGNED_VALUE = A;
    var I = f(0, -2147483648, !1);
    r.MIN_VALUE = I;
    var L = r.prototype;
    L.toInt = function () {
        return this.unsigned ? this.low >>> 0 : this.low
    }
        ,
        L.toNumber = function () {
            return this.unsigned ? (this.high >>> 0) * _ + (this.low >>> 0) : this.high * _ + (this.low >>> 0)
        }
        ,
        L.toString = function (t) {
            if ((t = t || 10) < 2 || 36 < t)
                throw RangeError("radix");
            if (this.isZero())
                return "0";
            if (this.isNegative()) {
                if (this.eq(I)) {
                    var e = d(t)
                        , div = this.div(e)
                        , n = div.mul(e).sub(this);
                    return div.toString(t) + n.toInt().toString(t)
                }
                return "-" + this.neg().toString(t)
            }
            for (var r = d(m(t, 6), this.unsigned), o = this, l = ""; ;) {
                var c = o.div(r)
                    , h = (o.sub(c.mul(r)).toInt() >>> 0).toString(t);
                if ((o = c).isZero())
                    return h + l;
                for (; h.length < 6;)
                    h = "0" + h;
                l = "" + h + l
            }
        }
        ,
        L.getHighBits = function () {
            return this.high
        }
        ,
        L.getHighBitsUnsigned = function () {
            return this.high >>> 0
        }
        ,
        L.getLowBits = function () {
            return this.low
        }
        ,
        L.getLowBitsUnsigned = function () {
            return this.low >>> 0
        }
        ,
        L.getNumBitsAbs = function () {
            if (this.isNegative())
                return this.eq(I) ? 64 : this.neg().getNumBitsAbs();
            for (var t = 0 != this.high ? this.high : this.low, e = 31; e > 0 && 0 == (t & 1 << e); e--)
                ;
            return 0 != this.high ? e + 33 : e + 1
        }
        ,
        L.isZero = function () {
            return 0 === this.high && 0 === this.low
        }
        ,
        L.eqz = L.isZero,
        L.isNegative = function () {
            return !this.unsigned && this.high < 0
        }
        ,
        L.isPositive = function () {
            return this.unsigned || this.high >= 0
        }
        ,
        L.isOdd = function () {
            return 1 == (1 & this.low)
        }
        ,
        L.isEven = function () {
            return 0 == (1 & this.low)
        }
        ,
        L.equals = function (t) {
            return o(t) || (t = y(t)),
            (this.unsigned === t.unsigned || this.high >>> 31 != 1 || t.high >>> 31 != 1) && (this.high === t.high && this.low === t.low)
        }
        ,
        L.eq = L.equals,
        L.notEquals = function (t) {
            return !this.eq(t)
        }
        ,
        L.neq = L.notEquals,
        L.ne = L.notEquals,
        L.lessThan = function (t) {
            return this.comp(t) < 0
        }
        ,
        L.lt = L.lessThan,
        L.lessThanOrEqual = function (t) {
            return this.comp(t) <= 0
        }
        ,
        L.lte = L.lessThanOrEqual,
        L.le = L.lessThanOrEqual,
        L.greaterThan = function (t) {
            return this.comp(t) > 0
        }
        ,
        L.gt = L.greaterThan,
        L.greaterThanOrEqual = function (t) {
            return this.comp(t) >= 0
        }
        ,
        L.gte = L.greaterThanOrEqual,
        L.ge = L.greaterThanOrEqual,
        L.compare = function (t) {
            if (o(t) || (t = y(t)),
                this.eq(t))
                return 0;
            var e = this.isNegative()
                , n = t.isNegative();
            return e && !n ? -1 : !e && n ? 1 : this.unsigned ? t.high >>> 0 > this.high >>> 0 || t.high === this.high && t.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(t).isNegative() ? -1 : 1
        }
        ,
        L.comp = L.compare,
        L.negate = function () {
            return !this.unsigned && this.eq(I) ? I : this.not().add(M)
        }
        ,
        L.neg = L.negate,
        L.add = function (t) {
            o(t) || (t = y(t));
            var e = this.high >>> 16
                , n = 65535 & this.high
                , r = this.low >>> 16
                , l = 65535 & this.low
                , c = t.high >>> 16
                , h = 65535 & t.high
                , d = t.low >>> 16
                , m = 0
                , v = 0
                , _ = 0
                , w = 0;
            return _ += (w += l + (65535 & t.low)) >>> 16,
                v += (_ += r + d) >>> 16,
                m += (v += n + h) >>> 16,
                m += e + c,
                f((_ &= 65535) << 16 | (w &= 65535), (m &= 65535) << 16 | (v &= 65535), this.unsigned)
        }
        ,
        L.subtract = function (t) {
            return o(t) || (t = y(t)),
                this.add(t.neg())
        }
        ,
        L.sub = L.subtract,
        L.multiply = function (t) {
            if (this.isZero())
                return C;
            if (o(t) || (t = y(t)),
                n)
                return f(n.mul(this.low, this.high, t.low, t.high), n.get_high(), this.unsigned);
            if (t.isZero())
                return C;
            if (this.eq(I))
                return t.isOdd() ? I : C;
            if (t.eq(I))
                return this.isOdd() ? I : C;
            if (this.isNegative())
                return t.isNegative() ? this.neg().mul(t.neg()) : this.neg().mul(t).neg();
            if (t.isNegative())
                return this.mul(t.neg()).neg();
            if (this.lt(S) && t.lt(S))
                return d(this.toNumber() * t.toNumber(), this.unsigned);
            var e = this.high >>> 16
                , r = 65535 & this.high
                , l = this.low >>> 16
                , c = 65535 & this.low
                , h = t.high >>> 16
                , m = 65535 & t.high
                , v = t.low >>> 16
                , _ = 65535 & t.low
                , w = 0
                , x = 0
                , k = 0
                , M = 0;
            return k += (M += c * _) >>> 16,
                x += (k += l * _) >>> 16,
                k &= 65535,
                x += (k += c * v) >>> 16,
                w += (x += r * _) >>> 16,
                x &= 65535,
                w += (x += l * v) >>> 16,
                x &= 65535,
                w += (x += c * m) >>> 16,
                w += e * _ + r * v + l * m + c * h,
                f((k &= 65535) << 16 | (M &= 65535), (w &= 65535) << 16 | (x &= 65535), this.unsigned)
        }
        ,
        L.mul = L.multiply,
        L.divide = function (t) {
            if (o(t) || (t = y(t)),
                t.isZero())
                throw Error("division by zero");
            var e, r, l;
            if (n)
                return this.unsigned || -2147483648 !== this.high || -1 !== t.low || -1 !== t.high ? f((this.unsigned ? n.div_u : n.div_s)(this.low, this.high, t.low, t.high), n.get_high(), this.unsigned) : this;
            if (this.isZero())
                return this.unsigned ? k : C;
            if (this.unsigned) {
                if (t.unsigned || (t = t.toUnsigned()),
                    t.gt(this))
                    return k;
                if (t.gt(this.shru(1)))
                    return E;
                l = k
            } else {
                if (this.eq(I))
                    return t.eq(M) || t.eq(T) ? I : t.eq(I) ? M : (e = this.shr(1).div(t).shl(1)).eq(C) ? t.isNegative() ? M : T : (r = this.sub(t.mul(e)),
                        l = e.add(r.div(t)));
                if (t.eq(I))
                    return this.unsigned ? k : C;
                if (this.isNegative())
                    return t.isNegative() ? this.neg().div(t.neg()) : this.neg().div(t).neg();
                if (t.isNegative())
                    return this.div(t.neg()).neg();
                l = C
            }
            for (r = this; r.gte(t);) {
                e = Math.max(1, Math.floor(r.toNumber() / t.toNumber()));
                for (var c = Math.ceil(Math.log(e) / Math.LN2), h = c <= 48 ? 1 : m(2, c - 48), v = d(e), _ = v.mul(t); _.isNegative() || _.gt(r);)
                    _ = (v = d(e -= h, this.unsigned)).mul(t);
                v.isZero() && (v = M),
                    l = l.add(v),
                    r = r.sub(_)
            }
            return l
        }
        ,
        L.div = L.divide,
        L.modulo = function (t) {
            return o(t) || (t = y(t)),
                n ? f((this.unsigned ? n.rem_u : n.rem_s)(this.low, this.high, t.low, t.high), n.get_high(), this.unsigned) : this.sub(this.div(t).mul(t))
        }
        ,
        L.mod = L.modulo,
        L.rem = L.modulo,
        L.not = function () {
            return f(~this.low, ~this.high, this.unsigned)
        }
        ,
        L.and = function (t) {
            return o(t) || (t = y(t)),
                f(this.low & t.low, this.high & t.high, this.unsigned)
        }
        ,
        L.or = function (t) {
            return o(t) || (t = y(t)),
                f(this.low | t.low, this.high | t.high, this.unsigned)
        }
        ,
        L.xor = function (t) {
            return o(t) || (t = y(t)),
                f(this.low ^ t.low, this.high ^ t.high, this.unsigned)
        }
        ,
        L.shiftLeft = function (t) {
            return o(t) && (t = t.toInt()),
                0 == (t &= 63) ? this : t < 32 ? f(this.low << t, this.high << t | this.low >>> 32 - t, this.unsigned) : f(0, this.low << t - 32, this.unsigned)
        }
        ,
        L.shl = L.shiftLeft,
        L.shiftRight = function (t) {
            return o(t) && (t = t.toInt()),
                0 == (t &= 63) ? this : t < 32 ? f(this.low >>> t | this.high << 32 - t, this.high >> t, this.unsigned) : f(this.high >> t - 32, this.high >= 0 ? 0 : -1, this.unsigned)
        }
        ,
        L.shr = L.shiftRight,
        L.shiftRightUnsigned = function (t) {
            if (o(t) && (t = t.toInt()),
            0 === (t &= 63))
                return this;
            var e = this.high;
            return t < 32 ? f(this.low >>> t | e << 32 - t, e >>> t, this.unsigned) : f(32 === t ? e : e >>> t - 32, 0, this.unsigned)
        }
        ,
        L.shru = L.shiftRightUnsigned,
        L.shr_u = L.shiftRightUnsigned,
        L.toSigned = function () {
            return this.unsigned ? f(this.low, this.high, !1) : this
        }
        ,
        L.toUnsigned = function () {
            return this.unsigned ? this : f(this.low, this.high, !0)
        }
        ,
        L.toBytes = function (t) {
            return t ? this.toBytesLE() : this.toBytesBE()
        }
        ,
        L.toBytesLE = function () {
            var t = this.high
                , e = this.low;
            return [255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24, 255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24]
        }
        ,
        L.toBytesBE = function () {
            var t = this.high
                , e = this.low;
            return [t >>> 24, t >>> 16 & 255, t >>> 8 & 255, 255 & t, e >>> 24, e >>> 16 & 255, e >>> 8 & 255, 255 & e]
        }
        ,
        r.fromBytes = function (t, e, n) {
            return n ? r.fromBytesLE(t, e) : r.fromBytesBE(t, e)
        }
        ,
        r.fromBytesLE = function (t, e) {
            return new r(t[0] | t[1] << 8 | t[2] << 16 | t[3] << 24, t[4] | t[5] << 8 | t[6] << 16 | t[7] << 24, e)
        }
        ,
        r.fromBytesBE = function (t, e) {
            return new r(t[4] << 24 | t[5] << 16 | t[6] << 8 | t[7], t[0] << 24 | t[1] << 16 | t[2] << 8 | t[3], e)
        }
    // return r;
})(t, {});
const d = t.exports;

function genSign(e, head) {
    var t, n,
        f = ["w4jDq38=", "ST7CoA==", "GGDChQ==", "YQ1u", "azJe", "w4jClzc=", "wqrDpCM=", "woUiw5E=", "w6jDlUc=", "wovDrgI=", "FMKcfQ==", "wonCuMKH", "w5NwHQ==", "w4jCiWY=", "wrcHMw==", "w7kLQA==", "Z8OiwqU=", "IsKcwpk=", "IcKYIQ==", "w7Vzw5c=", "wqAbw4Q=", "djYB", "R8KzwpY=", "w5fDssKG", "fxpw", "wq8owrI=", "ZcKuwpw=", "wq4ewqo=", "wo5ow4E=", "Wmc/", "w7TDgCQ=", "woHDo8OY", "wo3DpcKT", "PnVd", "wqkcRw==", "w7PDm8KB", "wqtTXg==", "wpjDrSw=", "wokkPw==", "w550w6o=", "fDlM", "QMO7wrU=", "EmzDlA==", "PzrDkg==", "wpVzHA==", "w5UTwr4=", "wq4DwpA=", "woptdg==", "w7XDt8Km", "w7wHw5w=", "woMMw7w=", "wpoUGQ==", "AGNe", "AXfDrw==", "w6vDqi0=", "w7Rcw4U=", "SWA3", "wpzClTI=", "wrAoEw==", "w6XDkMKq", "wrEkJQ==", "wqLDnS8=", "w7I2w7o=", "BWzDqQ==", "w41ANg==", "w4JQw5I=", "wrPDglM=", "wofDscO/", "w5EZw60=", "wpxuwo8=", "c3Rl", "w4jCig0=", "wot8eg==", "wpjDu8Kw", "MUvDrw==", "MsKPIw==", "wow2BA==", "J8KawpA=", "X8O7wpo=", "LGlG", "LmVX", "wonCpcK9", "EsKaQA==", "woXDg8Oj", "FMKQdw==", "w55TRA==", "M8KYJw==", "dMKkw54=", "w6IJw6k=", "wpDCkmA=", "CsKQfQ==", "w7DDgxY=", "ZsKbQw==", "Cll6", "w55HQg==", "wrBLMg==", "wrB+MQ==", "wqtPw6M=", "w7nCtw0=", "w4pZGg==", "wpVwQg==", "HVRE", "wrzDtik=", "w6lOYQ==", "PGNj", "a3Rt", "wrgtw7o=", "VcOPHw=="];
    t = f,
        n = 130,
        function (e) {
            for (; --e;)
                t.push(t.shift())
        }(++n);
    var h, v, y, m, x, _, w, C, S, M, O, W, k, P, V, R, E, j, D, F, A, $, T, I, H = function e(t, n) {
            var r, o = f[t -= 0];
            if (void 0 === e.LXLBwO) {
                (r = function () {
                    var e = void 0;
                    try {
                        e = Function('return (function() {}.constructor("return this")( ));')()
                    } catch (t) {
                        e = window
                    }
                    return e
                }()).atob || (r.atob = function (e) {
                        for (var t, n, r = String(e).replace(/=+$/, ""), o = "", l = 0, c = 0; n = r.charAt(c++); ~n && (t = l % 4 ? 64 * t + n : n,
                        l++ % 4) ? o += String.fromCharCode(255 & t >> (-2 * l & 6)) : 0)
                            n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);
                        return o
                    }
                );
                e.wgSwSe = function (e, t) {
                    for (var n = [], r = 0, o = void 0, l = "", c = "", f = 0, d = (e = atob(e)).length; f < d; f++)
                        c += "%" + ("00" + e.charCodeAt(f).toString(16)).slice(-2);
                    e = decodeURIComponent(c);
                    var h = void 0;
                    for (h = 0; h < 256; h++)
                        n[h] = h;
                    for (h = 0; h < 256; h++)
                        r = (r + n[h] + t.charCodeAt(h % t.length)) % 256,
                            o = n[h],
                            n[h] = n[r],
                            n[r] = o;
                    h = 0,
                        r = 0;
                    for (var v = 0; v < e.length; v++)
                        r = (r + n[h = (h + 1) % 256]) % 256,
                            o = n[h],
                            n[h] = n[r],
                            n[r] = o,
                            l += String.fromCharCode(e.charCodeAt(v) ^ n[(n[h] + n[r]) % 256]);
                    return l
                }
                    ,
                    e.oiZDRX = {},
                    e.LXLBwO = !0
            }
            var l = e.oiZDRX[t];
            return void 0 === l ? (void 0 === e.pGfKGq && (e.pGfKGq = !0),
                o = e.wgSwSe(o, n),
                e.oiZDRX[t] = o) : o = l,
                o
        },
        L = '@yivymDYR*KTKhhBUJh5&e1^nlwN6f#V',
        G = 'EOi^0N5sWWHhkrF2A0gekY9U20BgnAcr',
        N = '!@iiD5R4Mljlk4JWYk*YOiub2RnKkahR',
        B = true, Q = {
            nonce: head['X-CLIENT-NONCE'],
            timestamp: String(head['X-CLIENT-TIME']),
            deviceId: head['X-CLIENT-ID'],
            secret: e['$env']['inApp'] ? L : B ? N : G,
            secretType: e['$env']['inApp'] ? 1 : B ? 3 : 2
        };
    return Q["nonce"] && Q["timestamp"] && Q["deviceId"] && (head["X-CLIENT-SIGN"] = (V = (h = Q).nonce,
            R = h.timestamp,
            E = h.deviceId,
            j = h.secret,
            D = h.secretType,
            v = V,
            // F = (0, l.default)(v)["toString"](),
            F = CryptoJS.SHA256(v).toString(),
            m = R,
            // A = (0, c.default)(m)["toString"](),
            A = CryptoJS.SHA384(m).toString(),
            _ = E,
            w = V,
            // $ = (0, r.default)(w + "(lo__ol)" + _)['toString'](),
            $ = CryptoJS.MD5(w + "(lo__ol)" + _).toString(),
            S = j,
            M = R,
            W = "",
            // W = (0, o.default)(M + "_hnw_+_--_123_)" + S)["toString"](),
            W = CryptoJS.SHA1(M + "_hnw_+_--_123_)" + S).toString(),
            W = W["substring"](W["length"] - 16, W["length"] - 1),

            T = d["fromString"](W, !0, 16)["toUnsigned"]()["toString"](10),
            P = [F, A, $, T],
            I = P.reduce((function (e, t) {
                    return e + "(o1o)" + t
                }
            )),
            // (0, c.default)(I)
            A = CryptoJS.SHA384(I).toString()
    )),
        head
}

// r.default 是 md5
// l.default 是 sha256
// o.default 是 sha1
// c.default 是 sha384


function getSign() {
    e = {
        $env: {
            "inDesktop": true,
            "inBrowser": true,
            "inWeex": false,
            "inApp": false,
            "inAppIOS": false,
            "inAppAndroid": false,
            "weexPlatform": false,
            "UA": "mozilla/5.0 (windows nt 10.0; win64; x64) applewebkit/537.36 (khtml, like gecko) chrome/135.0.0.0 safari/537.36",
            "isIE": false,
            "isIE9": false,
            "isEdge": false,
            "isAndroid": false,
            "isIOS": false,
            "isChrome": true,
            "isPhantomJS": false,
            "barHeight": 90
        },
        $version: "7.5.10",
        config: {
            "peach": "",
            "monk": "https://gateway.cnhnb.com/monk",
            "banana": "https://gateway.cnhnb.com/banana",
            "qiniu": {
                "privateUrl": "",
                "upLoadUrl": "http://upload-z2.qiniup.com",
                "downLoadUrl": ""
            },
            "fontEnd": "https://m.cnhnb.com",
            "mobile": "https://mobile.cnhnb.com",
            "merchant": "https://merchant.cnhnb.com",
            "news": "https://news.cnhnb.com",
            "m": "https://m.cnhnb.com",
            "pc": "https://www.cnhnb.com",
            "env": "pro",
            "imgUrl": "https://image.cnhnb.com/",
            "pigsy": "https://pcapi.cnhnb.com",
            "platform": "pc",
            "AppID": 4,
            "zst": "https://zst.cnhnb.com",
            "$defaultConfig": {
                "httpConfig": {
                    "method": "POST",
                    "isToastError": true,
                    "headers": {
                        "osType": "wap",
                        "content-type": "application/json"
                    }
                }
            }
        }
    }
    head = {
        "X-CLIENT-APPID": 4,
        "X-B3-TRACEID": genXB3TraceId(),
        "X-CLIENT-TIME": getClientTime(),
        "X-CLIENT-PAGE": "/supply/search/",
        "X-HN-JOB": "If you see these message, I hope you dont hack us, I hope you can join us! Please visit https://www.cnhnkj.com/job.html",
        "X-CLIENT-NONCE": genXClientNonce(),
        "X-CLIENT-ENVIRONMENT": "pro",
        "X-CLIENT-ID": getClientID(),
        "X-CLIENT-SID": getXClientSid()
    }

    return genSign(e, head);

}

console.log(getSign())