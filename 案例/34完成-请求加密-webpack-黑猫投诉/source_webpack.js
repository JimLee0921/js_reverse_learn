window = global;
!function(e) {
    var t = {};
    function r(i) {
        if (t[i])
            return t[i].exports;
        var n = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        console.log("加载模块::::", i)
        return e[i].call(n.exports, n, n.exports, r),
        n.l = !0,
        n.exports
    }
    window.loader =r;
    r.m = e,
    r.c = t,
    r.d = function(e, t, i) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }
    ,
    r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(e, t) {
        if (1 & t && (e = r(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var i = Object.create(null);
        if (r.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var n in e)
                r.d(i, n, function(t) {
                    return e[t]
                }
                .bind(null, n));
        return i
    }
    ,
    r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return r.d(t, "a", t),
        t
    }
    ,
    r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    r.p = "//n.sinaimg.cn/finance/blackcat/pc/"
    // r(r.s = 429)
}([
    function(e, t) {
    var r = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = r)
}
, function(e, t) {
    var r = e.exports = {
        version: "2.6.11"
    };
    "number" == typeof __e && (__e = r)
}
, function(e, t) {
    "function" == typeof Object.create ? e.exports = function(e, t) {
        t && (e.super_ = t,
        e.prototype = Object.create(t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }))
    }
    : e.exports = function(e, t) {
        if (t) {
            e.super_ = t;
            var r = function() {};
            r.prototype = t.prototype,
            e.prototype = new r,
            e.prototype.constructor = e
        }
    }
}
, function(e, t, r) {
    e.exports = !r(7)((function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    }
    ))
}
, function(e, t, r) {
    var i = r(20)
      , n = i.Buffer;
    function o(e, t) {
        for (var r in e)
            t[r] = e[r]
    }
    function a(e, t, r) {
        return n(e, t, r)
    }
    n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? e.exports = i : (o(i, t),
    t.Buffer = a),
    o(n, a),
    a.from = function(e, t, r) {
        if ("number" == typeof e)
            throw new TypeError("Argument must not be a number");
        return n(e, t, r)
    }
    ,
    a.alloc = function(e, t, r) {
        if ("number" != typeof e)
            throw new TypeError("Argument must be a number");
        var i = n(e);
        return void 0 !== t ? "string" == typeof r ? i.fill(t, r) : i.fill(t) : i.fill(0),
        i
    }
    ,
    a.allocUnsafe = function(e) {
        if ("number" != typeof e)
            throw new TypeError("Argument must be a number");
        return n(e)
    }
    ,
    a.allocUnsafeSlow = function(e) {
        if ("number" != typeof e)
            throw new TypeError("Argument must be a number");
        return i.SlowBuffer(e)
    }
}
, function(e, t, r) {
    var i = r(0)
      , n = r(1)
      , o = r(18)
      , a = r(12)
      , s = r(13)
      , f = function(e, t, r) {
        var c, h, d, u = e & f.F, l = e & f.G, p = e & f.S, b = e & f.P, m = e & f.B, y = e & f.W, g = l ? n : n[t] || (n[t] = {}), v = g.prototype, _ = l ? i : p ? i[t] : (i[t] || {}).prototype;
        for (c in l && (r = t),
        r)
            (h = !u && _ && void 0 !== _[c]) && s(g, c) || (d = h ? _[c] : r[c],
            g[c] = l && "function" != typeof _[c] ? r[c] : m && h ? o(d, i) : y && _[c] == d ? function(e) {
                var t = function(t, r, i) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(t);
                        case 2:
                            return new e(t,r)
                        }
                        return new e(t,r,i)
                    }
                    return e.apply(this, arguments)
                };
                return t.prototype = e.prototype,
                t
            }(d) : b && "function" == typeof d ? o(Function.call, d) : d,
            b && ((g.virtual || (g.virtual = {}))[c] = d,
            e & f.R && v && !v[c] && a(v, c, d)))
    };
    f.F = 1,
    f.G = 2,
    f.S = 4,
    f.P = 8,
    f.B = 16,
    f.W = 32,
    f.U = 64,
    f.R = 128,
    e.exports = f
}
, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}
, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}
, function(e, t) {
    e.exports = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}
, function(e, t, r) {
    "use strict";
    var i = "//" + location.host + "/api/";
    location.host;
    e.exports = {
        LAWS_FEED: i + "laws/feed",
        INDEX_FEED: i + "index/feed",
        index_article: i + "articles/notice",
        PRAISE: i + "votes/add",
        MY_COMPLAINTS: i + "user/complaints",
        RECEIVED_COMPLAINTS: i + "user/received_complaints",
        COMPLETE_COMPLAINT: i + "complaint/completed/",
        SHARE_AMOUNT_COMPLAINT: i + "complaint/share_amount/",
        SHARE_AMOUNT_LAWS: i + "laws/share_amount/",
        NEW_SEND_MSG: i + "sms/send",
        CHANGE_SEND_MSG: i + "user/cert_send",
        CHANGE_SEND_CODE: i + "user/verify_phone",
        BINGDING_PHONE: i + "user/update_phone",
        MY_COMPLAINT_HISTORY: i + "company/my_search",
        MY_COMPLAINT_HOT: i + "company/hot",
        MY_COMPLAINT_COMPANY: i + "company/search",
        COMPLAINT_STORE: i + "complaint/store",
        COMPLAINT_STORE_UPDATE: i + "complaint/update",
        COMPLAINT_STORE_REPLY: i + "complaint/store_reply",
        COMPLAINT_STAR: i + "complaint/completed_evaluate",
        tousu_check: i + "complaint/check_input",
        tousu_verify: i + "complaint/check_alertword",
        tousu_special_company: i + "company/special_company?",
        evaluate_star: i + "complaint/evaluate_after_auto_cocomplete",
        UPLOAD_IMAGES: i + "files/image_uploader?add_water=1",
        SEARCH_SUGGEST: i + "index/suggest",
        SEARCH_RESULT: i + "index/s",
        MESSAGE_LIST: i + "user/message_list",
        GET_VIDEOID: i + "video/create_video_and_notify",
        GET_AUTH_URL: i + "video/get_authed_s3_url",
        REPORT_FEED: i + "articles/feed",
        SELLER_FEED: i + "company/received_complaints",
        service_feed: i + "company/service_complaints",
        SELLER_LIST: i + "company/main_search",
        JURY_FEED: i + "jury/feed",
        JURY_LIST: i + "jury/list_complaints",
        JURY_REPLY: i + "jury/store_reply",
        JURY_INVITE: i + "jury/invite",
        HANDLE_INVITE: i + "jury/handle_invite",
        jury_zan: i + "jury/vote",
        jury_hot: i + "jury/hot",
        jury_hot_comp: i + "jury/hotcomps",
        jury_rank: i + "jury/rank",
        invite_list: i + "jury/jury_list",
        company_search: i + "user/search_recv_complaints?k=",
        complaint_types: i + "company/issues",
        company_billboard: i + "top_rank/rank",
        company_field: i + "top_rank/rank_fields",
        file_hide: i + "complaint/set_atch_hide",
        company_datas: i + "company/get_stast",
        name_hide: i + "complaint/set_anon",
        email_vc: i + "company/email_vc",
        add_email: i + "company/add_email",
        del_email: i + "company/del_email",
        email_list: i + "company/emails",
        group_list: i + "grp_comp/feed",
        group_tslist: i + "grp_comp/feed_by_co",
        group_suggest: i + "grp_comp/suggs",
        group_progress: i + "grp_comp/progs",
        group_comps: i + "grp_comp/comps",
        user_glist: i + "grp_comp/init_grpcomps",
        company_glist: i + "grp_comp/recv_grpcomps",
        group_reply: i + "grp_comp/store_reply",
        group_join: i + "grp_comp/join_info",
        group_store_sugg: i + "grp_comp/store_sugg",
        group_share_img: i + "grp_comp/shr_img",
        group_share: i + "grp_comp/incr_shr_amt/",
        group_file_hide: i + "grp_comp/set_atch_hide",
        group_can_join: i + "grp_comp/can_join",
        heimao315: i + "leadership/get_items",
        dataCompany: i + "company/quick_stat_list",
        dataStat: i + "company/quick_stat",
        join_company: i + "company/apply_settle",
        message_read: i + "user/message_read",
        message_read_all: i + "user/message_read_all",
        top_card_time: i + "top_rank/grprank_span",
        new_rank_card: i + "top_rank/grprank_card",
        filed_rank_card: i + "top_rank/grprank_field_card",
        top_card_list: i + "top_rank/grprank_list",
        week_rank_list: i + "top_rank/riserank_list",
        user_is_law: "".concat(i, "complaint/sync_lawfirm?"),
        all_comp_field: "".concat(i, "complaint/qxzx_fields?"),
        comp_is_field: "".concat(i, "company/field?"),
        comp_is_tip: "".concat(i, "company/get_popup"),
        comp_set_tip: "".concat(i, "company/set_popup"),
        comp_is_notice: "".concat(i, "user/check_agree?"),
        comp_set_notice: "".concat(i, "user/sign_agree?"),
        comp_car_data: "".concat(i, "company/auto_products?"),
        comp_digi_data: "".concat(i, "company/digi_products?"),
        comp_ecom_data: "".concat(i, "company/eshop_issues?"),
        comp_autocomplete: "".concat(i, "complaint/set_autocomplete?"),
        group_digi: "".concat(i, "grp_comp/feed_by_co_type?"),
        ecomp_uids: "".concat(i, "company/eshop_companies?"),
        ecomp_services: "".concat(i, "company/eshop_services?"),
        company_service: "".concat(i, "company/rel_service"),
        company_info: "".concat(i, "company/info")
    }
}
, function(e, t, r) {
    var i = r(11)
      , n = r(24)
      , o = r(22)
      , a = Object.defineProperty;
    t.f = r(3) ? Object.defineProperty : function(e, t, r) {
        if (i(e),
        t = o(t, !0),
        i(r),
        n)
            try {
                return a(e, t, r)
            } catch (e) {}
        if ("get"in r || "set"in r)
            throw TypeError("Accessors not supported!");
        return "value"in r && (e[t] = r.value),
        e
    }
}
, function(e, t, r) {
    var i = r(6);
    e.exports = function(e) {
        if (!i(e))
            throw TypeError(e + " is not an object!");
        return e
    }
}
, function(e, t, r) {
    var i = r(10)
      , n = r(17);
    e.exports = r(3) ? function(e, t, r) {
        return i.f(e, t, n(1, r))
    }
    : function(e, t, r) {
        return e[t] = r,
        e
    }
}
, function(e, t) {
    var r = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return r.call(e, t)
    }
}
, function(e, t, r) {
    "use strict";
    e.exports = {
        request: function(e, t, r, i) {
            $.ajax({
                url: e.url,
                data: e.data || {},
                type: e.type || "GET",
                xhrFields: {
                    withCredentials: !0
                },
                timeout: e.timeout,
                success: function(e) {
                    t && "function" == typeof t && t(e)
                },
                error: function() {
                    r && "function" == typeof r && r()
                },
                complete: function() {
                    i && "function" == typeof i && i()
                }
            })
        }
    }
}
, function(e, t, r) {
    (function(e) {
        !function(e, t) {
            "use strict";
            function i(e, t) {
                if (!e)
                    throw new Error(t || "Assertion failed")
            }
            function n(e, t) {
                e.super_ = t;
                var r = function() {};
                r.prototype = t.prototype,
                e.prototype = new r,
                e.prototype.constructor = e
            }
            function o(e, t, r) {
                if (o.isBN(e))
                    return e;
                this.negative = 0,
                this.words = null,
                this.length = 0,
                this.red = null,
                null !== e && ("le" !== t && "be" !== t || (r = t,
                t = 10),
                this._init(e || 0, t || 10, r || "be"))
            }
            var a;
            "object" == typeof e ? e.exports = o : t.BN = o,
            o.BN = o,
            o.wordSize = 26;
            try {
                a = r(258).Buffer
            } catch (e) {}
            function s(e, t, r) {
                for (var i = 0, n = Math.min(e.length, r), o = t; o < n; o++) {
                    var a = e.charCodeAt(o) - 48;
                    i <<= 4,
                    i |= a >= 49 && a <= 54 ? a - 49 + 10 : a >= 17 && a <= 22 ? a - 17 + 10 : 15 & a
                }
                return i
            }
            function f(e, t, r, i) {
                for (var n = 0, o = Math.min(e.length, r), a = t; a < o; a++) {
                    var s = e.charCodeAt(a) - 48;
                    n *= i,
                    n += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s
                }
                return n
            }
            o.isBN = function(e) {
                return e instanceof o || null !== e && "object" == typeof e && e.constructor.wordSize === o.wordSize && Array.isArray(e.words)
            }
            ,
            o.max = function(e, t) {
                return e.cmp(t) > 0 ? e : t
            }
            ,
            o.min = function(e, t) {
                return e.cmp(t) < 0 ? e : t
            }
            ,
            o.prototype._init = function(e, t, r) {
                if ("number" == typeof e)
                    return this._initNumber(e, t, r);
                if ("object" == typeof e)
                    return this._initArray(e, t, r);
                "hex" === t && (t = 16),
                i(t === (0 | t) && t >= 2 && t <= 36);
                var n = 0;
                "-" === (e = e.toString().replace(/\s+/g, ""))[0] && n++,
                16 === t ? this._parseHex(e, n) : this._parseBase(e, t, n),
                "-" === e[0] && (this.negative = 1),
                this.strip(),
                "le" === r && this._initArray(this.toArray(), t, r)
            }
            ,
            o.prototype._initNumber = function(e, t, r) {
                e < 0 && (this.negative = 1,
                e = -e),
                e < 67108864 ? (this.words = [67108863 & e],
                this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, e / 67108864 & 67108863],
                this.length = 2) : (i(e < 9007199254740992),
                this.words = [67108863 & e, e / 67108864 & 67108863, 1],
                this.length = 3),
                "le" === r && this._initArray(this.toArray(), t, r)
            }
            ,
            o.prototype._initArray = function(e, t, r) {
                if (i("number" == typeof e.length),
                e.length <= 0)
                    return this.words = [0],
                    this.length = 1,
                    this;
                this.length = Math.ceil(e.length / 3),
                this.words = new Array(this.length);
                for (var n = 0; n < this.length; n++)
                    this.words[n] = 0;
                var o, a, s = 0;
                if ("be" === r)
                    for (n = e.length - 1,
                    o = 0; n >= 0; n -= 3)
                        a = e[n] | e[n - 1] << 8 | e[n - 2] << 16,
                        this.words[o] |= a << s & 67108863,
                        this.words[o + 1] = a >>> 26 - s & 67108863,
                        (s += 24) >= 26 && (s -= 26,
                        o++);
                else if ("le" === r)
                    for (n = 0,
                    o = 0; n < e.length; n += 3)
                        a = e[n] | e[n + 1] << 8 | e[n + 2] << 16,
                        this.words[o] |= a << s & 67108863,
                        this.words[o + 1] = a >>> 26 - s & 67108863,
                        (s += 24) >= 26 && (s -= 26,
                        o++);
                return this.strip()
            }
            ,
            o.prototype._parseHex = function(e, t) {
                this.length = Math.ceil((e.length - t) / 6),
                this.words = new Array(this.length);
                for (var r = 0; r < this.length; r++)
                    this.words[r] = 0;
                var i, n, o = 0;
                for (r = e.length - 6,
                i = 0; r >= t; r -= 6)
                    n = s(e, r, r + 6),
                    this.words[i] |= n << o & 67108863,
                    this.words[i + 1] |= n >>> 26 - o & 4194303,
                    (o += 24) >= 26 && (o -= 26,
                    i++);
                r + 6 !== t && (n = s(e, t, r + 6),
                this.words[i] |= n << o & 67108863,
                this.words[i + 1] |= n >>> 26 - o & 4194303),
                this.strip()
            }
            ,
            o.prototype._parseBase = function(e, t, r) {
                this.words = [0],
                this.length = 1;
                for (var i = 0, n = 1; n <= 67108863; n *= t)
                    i++;
                i--,
                n = n / t | 0;
                for (var o = e.length - r, a = o % i, s = Math.min(o, o - a) + r, c = 0, h = r; h < s; h += i)
                    c = f(e, h, h + i, t),
                    this.imuln(n),
                    this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);
                if (0 !== a) {
                    var d = 1;
                    for (c = f(e, h, e.length, t),
                    h = 0; h < a; h++)
                        d *= t;
                    this.imuln(d),
                    this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c)
                }
            }
            ,
            o.prototype.copy = function(e) {
                e.words = new Array(this.length);
                for (var t = 0; t < this.length; t++)
                    e.words[t] = this.words[t];
                e.length = this.length,
                e.negative = this.negative,
                e.red = this.red
            }
            ,
            o.prototype.clone = function() {
                var e = new o(null);
                return this.copy(e),
                e
            }
            ,
            o.prototype._expand = function(e) {
                for (; this.length < e; )
                    this.words[this.length++] = 0;
                return this
            }
            ,
            o.prototype.strip = function() {
                for (; this.length > 1 && 0 === this.words[this.length - 1]; )
                    this.length--;
                return this._normSign()
            }
            ,
            o.prototype._normSign = function() {
                return 1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
            }
            ,
            o.prototype.inspect = function() {
                return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
            }
            ;
            var c = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"]
              , h = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
              , d = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
            function u(e, t, r) {
                r.negative = t.negative ^ e.negative;
                var i = e.length + t.length | 0;
                r.length = i,
                i = i - 1 | 0;
                var n = 0 | e.words[0]
                  , o = 0 | t.words[0]
                  , a = n * o
                  , s = 67108863 & a
                  , f = a / 67108864 | 0;
                r.words[0] = s;
                for (var c = 1; c < i; c++) {
                    for (var h = f >>> 26, d = 67108863 & f, u = Math.min(c, t.length - 1), l = Math.max(0, c - e.length + 1); l <= u; l++) {
                        var p = c - l | 0;
                        h += (a = (n = 0 | e.words[p]) * (o = 0 | t.words[l]) + d) / 67108864 | 0,
                        d = 67108863 & a
                    }
                    r.words[c] = 0 | d,
                    f = 0 | h
                }
                return 0 !== f ? r.words[c] = 0 | f : r.length--,
                r.strip()
            }
            o.prototype.toString = function(e, t) {
                var r;
                if (t = 0 | t || 1,
                16 === (e = e || 10) || "hex" === e) {
                    r = "";
                    for (var n = 0, o = 0, a = 0; a < this.length; a++) {
                        var s = this.words[a]
                          , f = (16777215 & (s << n | o)).toString(16);
                        r = 0 !== (o = s >>> 24 - n & 16777215) || a !== this.length - 1 ? c[6 - f.length] + f + r : f + r,
                        (n += 2) >= 26 && (n -= 26,
                        a--)
                    }
                    for (0 !== o && (r = o.toString(16) + r); r.length % t != 0; )
                        r = "0" + r;
                    return 0 !== this.negative && (r = "-" + r),
                    r
                }
                if (e === (0 | e) && e >= 2 && e <= 36) {
                    var u = h[e]
                      , l = d[e];
                    r = "";
                    var p = this.clone();
                    for (p.negative = 0; !p.isZero(); ) {
                        var b = p.modn(l).toString(e);
                        r = (p = p.idivn(l)).isZero() ? b + r : c[u - b.length] + b + r
                    }
                    for (this.isZero() && (r = "0" + r); r.length % t != 0; )
                        r = "0" + r;
                    return 0 !== this.negative && (r = "-" + r),
                    r
                }
                i(!1, "Base should be between 2 and 36")
            }
            ,
            o.prototype.toNumber = function() {
                var e = this.words[0];
                return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && i(!1, "Number can only safely store up to 53 bits"),
                0 !== this.negative ? -e : e
            }
            ,
            o.prototype.toJSON = function() {
                return this.toString(16)
            }
            ,
            o.prototype.toBuffer = function(e, t) {
                return i(void 0 !== a),
                this.toArrayLike(a, e, t)
            }
            ,
            o.prototype.toArray = function(e, t) {
                return this.toArrayLike(Array, e, t)
            }
            ,
            o.prototype.toArrayLike = function(e, t, r) {
                var n = this.byteLength()
                  , o = r || Math.max(1, n);
                i(n <= o, "byte array longer than desired length"),
                i(o > 0, "Requested array length <= 0"),
                this.strip();
                var a, s, f = "le" === t, c = new e(o), h = this.clone();
                if (f) {
                    for (s = 0; !h.isZero(); s++)
                        a = h.andln(255),
                        h.iushrn(8),
                        c[s] = a;
                    for (; s < o; s++)
                        c[s] = 0
                } else {
                    for (s = 0; s < o - n; s++)
                        c[s] = 0;
                    for (s = 0; !h.isZero(); s++)
                        a = h.andln(255),
                        h.iushrn(8),
                        c[o - s - 1] = a
                }
                return c
            }
            ,
            Math.clz32 ? o.prototype._countBits = function(e) {
                return 32 - Math.clz32(e)
            }
            : o.prototype._countBits = function(e) {
                var t = e
                  , r = 0;
                return t >= 4096 && (r += 13,
                t >>>= 13),
                t >= 64 && (r += 7,
                t >>>= 7),
                t >= 8 && (r += 4,
                t >>>= 4),
                t >= 2 && (r += 2,
                t >>>= 2),
                r + t
            }
            ,
            o.prototype._zeroBits = function(e) {
                if (0 === e)
                    return 26;
                var t = e
                  , r = 0;
                return 0 == (8191 & t) && (r += 13,
                t >>>= 13),
                0 == (127 & t) && (r += 7,
                t >>>= 7),
                0 == (15 & t) && (r += 4,
                t >>>= 4),
                0 == (3 & t) && (r += 2,
                t >>>= 2),
                0 == (1 & t) && r++,
                r
            }
            ,
            o.prototype.bitLength = function() {
                var e = this.words[this.length - 1]
                  , t = this._countBits(e);
                return 26 * (this.length - 1) + t
            }
            ,
            o.prototype.zeroBits = function() {
                if (this.isZero())
                    return 0;
                for (var e = 0, t = 0; t < this.length; t++) {
                    var r = this._zeroBits(this.words[t]);
                    if (e += r,
                    26 !== r)
                        break
                }
                return e
            }
            ,
            o.prototype.byteLength = function() {
                return Math.ceil(this.bitLength() / 8)
            }
            ,
            o.prototype.toTwos = function(e) {
                return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone()
            }
            ,
            o.prototype.fromTwos = function(e) {
                return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone()
            }
            ,
            o.prototype.isNeg = function() {
                return 0 !== this.negative
            }
            ,
            o.prototype.neg = function() {
                return this.clone().ineg()
            }
            ,
            o.prototype.ineg = function() {
                return this.isZero() || (this.negative ^= 1),
                this
            }
            ,
            o.prototype.iuor = function(e) {
                for (; this.length < e.length; )
                    this.words[this.length++] = 0;
                for (var t = 0; t < e.length; t++)
                    this.words[t] = this.words[t] | e.words[t];
                return this.strip()
            }
            ,
            o.prototype.ior = function(e) {
                return i(0 == (this.negative | e.negative)),
                this.iuor(e)
            }
            ,
            o.prototype.or = function(e) {
                return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this)
            }
            ,
            o.prototype.uor = function(e) {
                return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this)
            }
            ,
            o.prototype.iuand = function(e) {
                var t;
                t = this.length > e.length ? e : this;
                for (var r = 0; r < t.length; r++)
                    this.words[r] = this.words[r] & e.words[r];
                return this.length = t.length,
                this.strip()
            }
            ,
            o.prototype.iand = function(e) {
                return i(0 == (this.negative | e.negative)),
                this.iuand(e)
            }
            ,
            o.prototype.and = function(e) {
                return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this)
            }
            ,
            o.prototype.uand = function(e) {
                return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this)
            }
            ,
            o.prototype.iuxor = function(e) {
                var t, r;
                this.length > e.length ? (t = this,
                r = e) : (t = e,
                r = this);
                for (var i = 0; i < r.length; i++)
                    this.words[i] = t.words[i] ^ r.words[i];
                if (this !== t)
                    for (; i < t.length; i++)
                        this.words[i] = t.words[i];
                return this.length = t.length,
                this.strip()
            }
            ,
            o.prototype.ixor = function(e) {
                return i(0 == (this.negative | e.negative)),
                this.iuxor(e)
            }
            ,
            o.prototype.xor = function(e) {
                return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this)
            }
            ,
            o.prototype.uxor = function(e) {
                return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this)
            }
            ,
            o.prototype.inotn = function(e) {
                i("number" == typeof e && e >= 0);
                var t = 0 | Math.ceil(e / 26)
                  , r = e % 26;
                this._expand(t),
                r > 0 && t--;
                for (var n = 0; n < t; n++)
                    this.words[n] = 67108863 & ~this.words[n];
                return r > 0 && (this.words[n] = ~this.words[n] & 67108863 >> 26 - r),
                this.strip()
            }
            ,
            o.prototype.notn = function(e) {
                return this.clone().inotn(e)
            }
            ,
            o.prototype.setn = function(e, t) {
                i("number" == typeof e && e >= 0);
                var r = e / 26 | 0
                  , n = e % 26;
                return this._expand(r + 1),
                this.words[r] = t ? this.words[r] | 1 << n : this.words[r] & ~(1 << n),
                this.strip()
            }
            ,
            o.prototype.iadd = function(e) {
                var t, r, i;
                if (0 !== this.negative && 0 === e.negative)
                    return this.negative = 0,
                    t = this.isub(e),
                    this.negative ^= 1,
                    this._normSign();
                if (0 === this.negative && 0 !== e.negative)
                    return e.negative = 0,
                    t = this.isub(e),
                    e.negative = 1,
                    t._normSign();
                this.length > e.length ? (r = this,
                i = e) : (r = e,
                i = this);
                for (var n = 0, o = 0; o < i.length; o++)
                    t = (0 | r.words[o]) + (0 | i.words[o]) + n,
                    this.words[o] = 67108863 & t,
                    n = t >>> 26;
                for (; 0 !== n && o < r.length; o++)
                    t = (0 | r.words[o]) + n,
                    this.words[o] = 67108863 & t,
                    n = t >>> 26;
                if (this.length = r.length,
                0 !== n)
                    this.words[this.length] = n,
                    this.length++;
                else if (r !== this)
                    for (; o < r.length; o++)
                        this.words[o] = r.words[o];
                return this
            }
            ,
            o.prototype.add = function(e) {
                var t;
                return 0 !== e.negative && 0 === this.negative ? (e.negative = 0,
                t = this.sub(e),
                e.negative ^= 1,
                t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0,
                t = e.sub(this),
                this.negative = 1,
                t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this)
            }
            ,
            o.prototype.isub = function(e) {
                if (0 !== e.negative) {
                    e.negative = 0;
                    var t = this.iadd(e);
                    return e.negative = 1,
                    t._normSign()
                }
                if (0 !== this.negative)
                    return this.negative = 0,
                    this.iadd(e),
                    this.negative = 1,
                    this._normSign();
                var r, i, n = this.cmp(e);
                if (0 === n)
                    return this.negative = 0,
                    this.length = 1,
                    this.words[0] = 0,
                    this;
                n > 0 ? (r = this,
                i = e) : (r = e,
                i = this);
                for (var o = 0, a = 0; a < i.length; a++)
                    o = (t = (0 | r.words[a]) - (0 | i.words[a]) + o) >> 26,
                    this.words[a] = 67108863 & t;
                for (; 0 !== o && a < r.length; a++)
                    o = (t = (0 | r.words[a]) + o) >> 26,
                    this.words[a] = 67108863 & t;
                if (0 === o && a < r.length && r !== this)
                    for (; a < r.length; a++)
                        this.words[a] = r.words[a];
                return this.length = Math.max(this.length, a),
                r !== this && (this.negative = 1),
                this.strip()
            }
            ,
            o.prototype.sub = function(e) {
                return this.clone().isub(e)
            }
            ;
            var l = function(e, t, r) {
                var i, n, o, a = e.words, s = t.words, f = r.words, c = 0, h = 0 | a[0], d = 8191 & h, u = h >>> 13, l = 0 | a[1], p = 8191 & l, b = l >>> 13, m = 0 | a[2], y = 8191 & m, g = m >>> 13, v = 0 | a[3], _ = 8191 & v, w = v >>> 13, S = 0 | a[4], M = 8191 & S, E = S >>> 13, k = 0 | a[5], A = 8191 & k, x = k >>> 13, I = 0 | a[6], B = 8191 & I, T = I >>> 13, R = 0 | a[7], C = 8191 & R, P = R >>> 13, j = 0 | a[8], O = 8191 & j, L = j >>> 13, D = 0 | a[9], N = 8191 & D, U = D >>> 13, q = 0 | s[0], z = 8191 & q, F = q >>> 13, H = 0 | s[1], K = 8191 & H, Y = H >>> 13, W = 0 | s[2], V = 8191 & W, G = W >>> 13, X = 0 | s[3], Z = 8191 & X, J = X >>> 13, $ = 0 | s[4], Q = 8191 & $, ee = $ >>> 13, te = 0 | s[5], re = 8191 & te, ie = te >>> 13, ne = 0 | s[6], oe = 8191 & ne, ae = ne >>> 13, se = 0 | s[7], fe = 8191 & se, ce = se >>> 13, he = 0 | s[8], de = 8191 & he, ue = he >>> 13, le = 0 | s[9], pe = 8191 & le, be = le >>> 13;
                r.negative = e.negative ^ t.negative,
                r.length = 19;
                var me = (c + (i = Math.imul(d, z)) | 0) + ((8191 & (n = (n = Math.imul(d, F)) + Math.imul(u, z) | 0)) << 13) | 0;
                c = ((o = Math.imul(u, F)) + (n >>> 13) | 0) + (me >>> 26) | 0,
                me &= 67108863,
                i = Math.imul(p, z),
                n = (n = Math.imul(p, F)) + Math.imul(b, z) | 0,
                o = Math.imul(b, F);
                var ye = (c + (i = i + Math.imul(d, K) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(d, Y) | 0) + Math.imul(u, K) | 0)) << 13) | 0;
                c = ((o = o + Math.imul(u, Y) | 0) + (n >>> 13) | 0) + (ye >>> 26) | 0,
                ye &= 67108863,
                i = Math.imul(y, z),
                n = (n = Math.imul(y, F)) + Math.imul(g, z) | 0,
                o = Math.imul(g, F),
                i = i + Math.imul(p, K) | 0,
                n = (n = n + Math.imul(p, Y) | 0) + Math.imul(b, K) | 0,
                o = o + Math.imul(b, Y) | 0;
                var ge = (c + (i = i + Math.imul(d, V) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(d, G) | 0) + Math.imul(u, V) | 0)) << 13) | 0;
                c = ((o = o + Math.imul(u, G) | 0) + (n >>> 13) | 0) + (ge >>> 26) | 0,
                ge &= 67108863,
                i = Math.imul(_, z),
                n = (n = Math.imul(_, F)) + Math.imul(w, z) | 0,
                o = Math.imul(w, F),
                i = i + Math.imul(y, K) | 0,
                n = (n = n + Math.imul(y, Y) | 0) + Math.imul(g, K) | 0,
                o = o + Math.imul(g, Y) | 0,
                i = i + Math.imul(p, V) | 0,
                n = (n = n + Math.imul(p, G) | 0) + Math.imul(b, V) | 0,
                o = o + Math.imul(b, G) | 0;
                var ve = (c + (i = i + Math.imul(d, Z) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(d, J) | 0) + Math.imul(u, Z) | 0)) << 13) | 0;
                c = ((o = o + Math.imul(u, J) | 0) + (n >>> 13) | 0) + (ve >>> 26) | 0,
                ve &= 67108863,
                i = Math.imul(M, z),
                n = (n = Math.imul(M, F)) + Math.imul(E, z) | 0,
                o = Math.imul(E, F),
                i = i + Math.imul(_, K) | 0,
                n = (n = n + Math.imul(_, Y) | 0) + Math.imul(w, K) | 0,
                o = o + Math.imul(w, Y) | 0,
                i = i + Math.imul(y, V) | 0,
                n = (n = n + Math.imul(y, G) | 0) + Math.imul(g, V) | 0,
                o = o + Math.imul(g, G) | 0,
                i = i + Math.imul(p, Z) | 0,
                n = (n = n + Math.imul(p, J) | 0) + Math.imul(b, Z) | 0,
                o = o + Math.imul(b, J) | 0;
                var _e = (c + (i = i + Math.imul(d, Q) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(d, ee) | 0) + Math.imul(u, Q) | 0)) << 13) | 0;
                c = ((o = o + Math.imul(u, ee) | 0) + (n >>> 13) | 0) + (_e >>> 26) | 0,
                _e &= 67108863,
                i = Math.imul(A, z),
                n = (n = Math.imul(A, F)) + Math.imul(x, z) | 0,
                o = Math.imul(x, F),
                i = i + Math.imul(M, K) | 0,
                n = (n = n + Math.imul(M, Y) | 0) + Math.imul(E, K) | 0,
                o = o + Math.imul(E, Y) | 0,
                i = i + Math.imul(_, V) | 0,
                n = (n = n + Math.imul(_, G) | 0) + Math.imul(w, V) | 0,
                o = o + Math.imul(w, G) | 0,
                i = i + Math.imul(y, Z) | 0,
                n = (n = n + Math.imul(y, J) | 0) + Math.imul(g, Z) | 0,
                o = o + Math.imul(g, J) | 0,
                i = i + Math.imul(p, Q) | 0,
                n = (n = n + Math.imul(p, ee) | 0) + Math.imul(b, Q) | 0,
                o = o + Math.imul(b, ee) | 0;
                var we = (c + (i = i + Math.imul(d, re) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(d, ie) | 0) + Math.imul(u, re) | 0)) << 13) | 0;
                c = ((o = o + Math.imul(u, ie) | 0) + (n >>> 13) | 0) + (we >>> 26) | 0,
                we &= 67108863,
                i = Math.imul(B, z),
                n = (n = Math.imul(B, F)) + Math.imul(T, z) | 0,
                o = Math.imul(T, F),
                i = i + Math.imul(A, K) | 0,
                n = (n = n + Math.imul(A, Y) | 0) + Math.imul(x, K) | 0,
                o = o + Math.imul(x, Y) | 0,
                i = i + Math.imul(M, V) | 0,
                n = (n = n + Math.imul(M, G) | 0) + Math.imul(E, V) | 0,
                o = o + Math.imul(E, G) | 0,
                i = i + Math.imul(_, Z) | 0,
                n = (n = n + Math.imul(_, J) | 0) + Math.imul(w, Z) | 0,
                o = o + Math.imul(w, J) | 0,
                i = i + Math.imul(y, Q) | 0,
                n = (n = n + Math.imul(y, ee) | 0) + Math.imul(g, Q) | 0,
                o = o + Math.imul(g, ee) | 0,
                i = i + Math.imul(p, re) | 0,
                n = (n = n + Math.imul(p, ie) | 0) + Math.imul(b, re) | 0,
                o = o + Math.imul(b, ie) | 0;
                var Se = (c + (i = i + Math.imul(d, oe) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(d, ae) | 0) + Math.imul(u, oe) | 0)) << 13) | 0;
                c = ((o = o + Math.imul(u, ae) | 0) + (n >>> 13) | 0) + (Se >>> 26) | 0,
                Se &= 67108863,
                i = Math.imul(C, z),
                n = (n = Math.imul(C, F)) + Math.imul(P, z) | 0,
                o = Math.imul(P, F),
                i = i + Math.imul(B, K) | 0,
                n = (n = n + Math.imul(B, Y) | 0) + Math.imul(T, K) | 0,
                o = o + Math.imul(T, Y) | 0,
                i = i + Math.imul(A, V) | 0,
                n = (n = n + Math.imul(A, G) | 0) + Math.imul(x, V) | 0,
                o = o + Math.imul(x, G) | 0,
                i = i + Math.imul(M, Z) | 0,
                n = (n = n + Math.imul(M, J) | 0) + Math.imul(E, Z) | 0,
                o = o + Math.imul(E, J) | 0,
                i = i + Math.imul(_, Q) | 0,
                n = (n = n + Math.imul(_, ee) | 0) + Math.imul(w, Q) | 0,
                o = o + Math.imul(w, ee) | 0,
                i = i + Math.imul(y, re) | 0,
                n = (n = n + Math.imul(y, ie) | 0) + Math.imul(g, re) | 0,
                o = o + Math.imul(g, ie) | 0,
                i = i + Math.imul(p, oe) | 0,
                n = (n = n + Math.imul(p, ae) | 0) + Math.imul(b, oe) | 0,
                o = o + Math.imul(b, ae) | 0;
                var Me = (c + (i = i + Math.imul(d, fe) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(d, ce) | 0) + Math.imul(u, fe) | 0)) << 13) | 0;
                c = ((o = o + Math.imul(u, ce) | 0) + (n >>> 13) | 0) + (Me >>> 26) | 0,
                Me &= 67108863,
                i = Math.imul(O, z),
                n = (n = Math.imul(O, F)) + Math.imul(L, z) | 0,
                o = Math.imul(L, F),
                i = i + Math.imul(C, K) | 0,
                n = (n = n + Math.imul(C, Y) | 0) + Math.imul(P, K) | 0,
                o = o + Math.imul(P, Y) | 0,
                i = i + Math.imul(B, V) | 0,
                n = (n = n + Math.imul(B, G) | 0) + Math.imul(T, V) | 0,
                o = o + Math.imul(T, G) | 0,
                i = i + Math.imul(A, Z) | 0,
                n = (n = n + Math.imul(A, J) | 0) + Math.imul(x, Z) | 0,
                o = o + Math.imul(x, J) | 0,
                i = i + Math.imul(M, Q) | 0,
                n = (n = n + Math.imul(M, ee) | 0) + Math.imul(E, Q) | 0,
                o = o + Math.imul(E, ee) | 0,
                i = i + Math.imul(_, re) | 0,
                n = (n = n + Math.imul(_, ie) | 0) + Math.imul(w, re) | 0,
                o = o + Math.imul(w, ie) | 0,
                i = i + Math.imul(y, oe) | 0,
                n = (n = n + Math.imul(y, ae) | 0) + Math.imul(g, oe) | 0,
                o = o + Math.imul(g, ae) | 0,
                i = i + Math.imul(p, fe) | 0,
                n = (n = n + Math.imul(p, ce) | 0) + Math.imul(b, fe) | 0,
                o = o + Math.imul(b, ce) | 0;
                var Ee = (c + (i = i + Math.imul(d, de) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(d, ue) | 0) + Math.imul(u, de) | 0)) << 13) | 0;
                c = ((o = o + Math.imul(u, ue) | 0) + (n >>> 13) | 0) + (Ee >>> 26) | 0,
                Ee &= 67108863,
                i = Math.imul(N, z),
                n = (n = Math.imul(N, F)) + Math.imul(U, z) | 0,
                o = Math.imul(U, F),
                i = i + Math.imul(O, K) | 0,
                n = (n = n + Math.imul(O, Y) | 0) + Math.imul(L, K) | 0,
                o = o + Math.imul(L, Y) | 0,
                i = i + Math.imul(C, V) | 0,
                n = (n = n + Math.imul(C, G) | 0) + Math.imul(P, V) | 0,
                o = o + Math.imul(P, G) | 0,
                i = i + Math.imul(B, Z) | 0,
                n = (n = n + Math.imul(B, J) | 0) + Math.imul(T, Z) | 0,
                o = o + Math.imul(T, J) | 0,
                i = i + Math.imul(A, Q) | 0,
                n = (n = n + Math.imul(A, ee) | 0) + Math.imul(x, Q) | 0,
                o = o + Math.imul(x, ee) | 0,
                i = i + Math.imul(M, re) | 0,
                n = (n = n + Math.imul(M, ie) | 0) + Math.imul(E, re) | 0,
                o = o + Math.imul(E, ie) | 0,
                i = i + Math.imul(_, oe) | 0,
                n = (n = n + Math.imul(_, ae) | 0) + Math.imul(w, oe) | 0,
                o = o + Math.imul(w, ae) | 0,
                i = i + Math.imul(y, fe) | 0,
                n = (n = n + Math.imul(y, ce) | 0) + Math.imul(g, fe) | 0,
                o = o + Math.imul(g, ce) | 0,
                i = i + Math.imul(p, de) | 0,
                n = (n = n + Math.imul(p, ue) | 0) + Math.imul(b, de) | 0,
                o = o + Math.imul(b, ue) | 0;
                var ke = (c + (i = i + Math.imul(d, pe) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(d, be) | 0) + Math.imul(u, pe) | 0)) << 13) | 0;
                c = ((o = o + Math.imul(u, be) | 0) + (n >>> 13) | 0) + (ke >>> 26) | 0,
                ke &= 67108863,
                i = Math.imul(N, K),
                n = (n = Math.imul(N, Y)) + Math.imul(U, K) | 0,
                o = Math.imul(U, Y),
                i = i + Math.imul(O, V) | 0,
                n = (n = n + Math.imul(O, G) | 0) + Math.imul(L, V) | 0,
                o = o + Math.imul(L, G) | 0,
                i = i + Math.imul(C, Z) | 0,
                n = (n = n + Math.imul(C, J) | 0) + Math.imul(P, Z) | 0,
                o = o + Math.imul(P, J) | 0,
                i = i + Math.imul(B, Q) | 0,
                n = (n = n + Math.imul(B, ee) | 0) + Math.imul(T, Q) | 0,
                o = o + Math.imul(T, ee) | 0,
                i = i + Math.imul(A, re) | 0,
                n = (n = n + Math.imul(A, ie) | 0) + Math.imul(x, re) | 0,
                o = o + Math.imul(x, ie) | 0,
                i = i + Math.imul(M, oe) | 0,
                n = (n = n + Math.imul(M, ae) | 0) + Math.imul(E, oe) | 0,
                o = o + Math.imul(E, ae) | 0,
                i = i + Math.imul(_, fe) | 0,
                n = (n = n + Math.imul(_, ce) | 0) + Math.imul(w, fe) | 0,
                o = o + Math.imul(w, ce) | 0,
                i = i + Math.imul(y, de) | 0,
                n = (n = n + Math.imul(y, ue) | 0) + Math.imul(g, de) | 0,
                o = o + Math.imul(g, ue) | 0;
                var Ae = (c + (i = i + Math.imul(p, pe) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(p, be) | 0) + Math.imul(b, pe) | 0)) << 13) | 0;
                c = ((o = o + Math.imul(b, be) | 0) + (n >>> 13) | 0) + (Ae >>> 26) | 0,
                Ae &= 67108863,
                i = Math.imul(N, V),
                n = (n = Math.imul(N, G)) + Math.imul(U, V) | 0,
                o = Math.imul(U, G),
                i = i + Math.imul(O, Z) | 0,
                n = (n = n + Math.imul(O, J) | 0) + Math.imul(L, Z) | 0,
                o = o + Math.imul(L, J) | 0,
                i = i + Math.imul(C, Q) | 0,
                n = (n = n + Math.imul(C, ee) | 0) + Math.imul(P, Q) | 0,
                o = o + Math.imul(P, ee) | 0,
                i = i + Math.imul(B, re) | 0,
                n = (n = n + Math.imul(B, ie) | 0) + Math.imul(T, re) | 0,
                o = o + Math.imul(T, ie) | 0,
                i = i + Math.imul(A, oe) | 0,
                n = (n = n + Math.imul(A, ae) | 0) + Math.imul(x, oe) | 0,
                o = o + Math.imul(x, ae) | 0,
                i = i + Math.imul(M, fe) | 0,
                n = (n = n + Math.imul(M, ce) | 0) + Math.imul(E, fe) | 0,
                o = o + Math.imul(E, ce) | 0,
                i = i + Math.imul(_, de) | 0,
                n = (n = n + Math.imul(_, ue) | 0) + Math.imul(w, de) | 0,
                o = o + Math.imul(w, ue) | 0;
                var xe = (c + (i = i + Math.imul(y, pe) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(y, be) | 0) + Math.imul(g, pe) | 0)) << 13) | 0;
                c = ((o = o + Math.imul(g, be) | 0) + (n >>> 13) | 0) + (xe >>> 26) | 0,
                xe &= 67108863,
                i = Math.imul(N, Z),
                n = (n = Math.imul(N, J)) + Math.imul(U, Z) | 0,
                o = Math.imul(U, J),
                i = i + Math.imul(O, Q) | 0,
                n = (n = n + Math.imul(O, ee) | 0) + Math.imul(L, Q) | 0,
                o = o + Math.imul(L, ee) | 0,
                i = i + Math.imul(C, re) | 0,
                n = (n = n + Math.imul(C, ie) | 0) + Math.imul(P, re) | 0,
                o = o + Math.imul(P, ie) | 0,
                i = i + Math.imul(B, oe) | 0,
                n = (n = n + Math.imul(B, ae) | 0) + Math.imul(T, oe) | 0,
                o = o + Math.imul(T, ae) | 0,
                i = i + Math.imul(A, fe) | 0,
                n = (n = n + Math.imul(A, ce) | 0) + Math.imul(x, fe) | 0,
                o = o + Math.imul(x, ce) | 0,
                i = i + Math.imul(M, de) | 0,
                n = (n = n + Math.imul(M, ue) | 0) + Math.imul(E, de) | 0,
                o = o + Math.imul(E, ue) | 0;
                var Ie = (c + (i = i + Math.imul(_, pe) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(_, be) | 0) + Math.imul(w, pe) | 0)) << 13) | 0;
                c = ((o = o + Math.imul(w, be) | 0) + (n >>> 13) | 0) + (Ie >>> 26) | 0,
                Ie &= 67108863,
                i = Math.imul(N, Q),
                n = (n = Math.imul(N, ee)) + Math.imul(U, Q) | 0,
                o = Math.imul(U, ee),
                i = i + Math.imul(O, re) | 0,
                n = (n = n + Math.imul(O, ie) | 0) + Math.imul(L, re) | 0,
                o = o + Math.imul(L, ie) | 0,
                i = i + Math.imul(C, oe) | 0,
                n = (n = n + Math.imul(C, ae) | 0) + Math.imul(P, oe) | 0,
                o = o + Math.imul(P, ae) | 0,
                i = i + Math.imul(B, fe) | 0,
                n = (n = n + Math.imul(B, ce) | 0) + Math.imul(T, fe) | 0,
                o = o + Math.imul(T, ce) | 0,
                i = i + Math.imul(A, de) | 0,
                n = (n = n + Math.imul(A, ue) | 0) + Math.imul(x, de) | 0,
                o = o + Math.imul(x, ue) | 0;
                var Be = (c + (i = i + Math.imul(M, pe) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(M, be) | 0) + Math.imul(E, pe) | 0)) << 13) | 0;
                c = ((o = o + Math.imul(E, be) | 0) + (n >>> 13) | 0) + (Be >>> 26) | 0,
                Be &= 67108863,
                i = Math.imul(N, re),
                n = (n = Math.imul(N, ie)) + Math.imul(U, re) | 0,
                o = Math.imul(U, ie),
                i = i + Math.imul(O, oe) | 0,
                n = (n = n + Math.imul(O, ae) | 0) + Math.imul(L, oe) | 0,
                o = o + Math.imul(L, ae) | 0,
                i = i + Math.imul(C, fe) | 0,
                n = (n = n + Math.imul(C, ce) | 0) + Math.imul(P, fe) | 0,
                o = o + Math.imul(P, ce) | 0,
                i = i + Math.imul(B, de) | 0,
                n = (n = n + Math.imul(B, ue) | 0) + Math.imul(T, de) | 0,
                o = o + Math.imul(T, ue) | 0;
                var Te = (c + (i = i + Math.imul(A, pe) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(A, be) | 0) + Math.imul(x, pe) | 0)) << 13) | 0;
                c = ((o = o + Math.imul(x, be) | 0) + (n >>> 13) | 0) + (Te >>> 26) | 0,
                Te &= 67108863,
                i = Math.imul(N, oe),
                n = (n = Math.imul(N, ae)) + Math.imul(U, oe) | 0,
                o = Math.imul(U, ae),
                i = i + Math.imul(O, fe) | 0,
                n = (n = n + Math.imul(O, ce) | 0) + Math.imul(L, fe) | 0,
                o = o + Math.imul(L, ce) | 0,
                i = i + Math.imul(C, de) | 0,
                n = (n = n + Math.imul(C, ue) | 0) + Math.imul(P, de) | 0,
                o = o + Math.imul(P, ue) | 0;
                var Re = (c + (i = i + Math.imul(B, pe) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(B, be) | 0) + Math.imul(T, pe) | 0)) << 13) | 0;
                c = ((o = o + Math.imul(T, be) | 0) + (n >>> 13) | 0) + (Re >>> 26) | 0,
                Re &= 67108863,
                i = Math.imul(N, fe),
                n = (n = Math.imul(N, ce)) + Math.imul(U, fe) | 0,
                o = Math.imul(U, ce),
                i = i + Math.imul(O, de) | 0,
                n = (n = n + Math.imul(O, ue) | 0) + Math.imul(L, de) | 0,
                o = o + Math.imul(L, ue) | 0;
                var Ce = (c + (i = i + Math.imul(C, pe) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(C, be) | 0) + Math.imul(P, pe) | 0)) << 13) | 0;
                c = ((o = o + Math.imul(P, be) | 0) + (n >>> 13) | 0) + (Ce >>> 26) | 0,
                Ce &= 67108863,
                i = Math.imul(N, de),
                n = (n = Math.imul(N, ue)) + Math.imul(U, de) | 0,
                o = Math.imul(U, ue);
                var Pe = (c + (i = i + Math.imul(O, pe) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(O, be) | 0) + Math.imul(L, pe) | 0)) << 13) | 0;
                c = ((o = o + Math.imul(L, be) | 0) + (n >>> 13) | 0) + (Pe >>> 26) | 0,
                Pe &= 67108863;
                var je = (c + (i = Math.imul(N, pe)) | 0) + ((8191 & (n = (n = Math.imul(N, be)) + Math.imul(U, pe) | 0)) << 13) | 0;
                return c = ((o = Math.imul(U, be)) + (n >>> 13) | 0) + (je >>> 26) | 0,
                je &= 67108863,
                f[0] = me,
                f[1] = ye,
                f[2] = ge,
                f[3] = ve,
                f[4] = _e,
                f[5] = we,
                f[6] = Se,
                f[7] = Me,
                f[8] = Ee,
                f[9] = ke,
                f[10] = Ae,
                f[11] = xe,
                f[12] = Ie,
                f[13] = Be,
                f[14] = Te,
                f[15] = Re,
                f[16] = Ce,
                f[17] = Pe,
                f[18] = je,
                0 !== c && (f[19] = c,
                r.length++),
                r
            };
            function p(e, t, r) {
                return (new b).mulp(e, t, r)
            }
            function b(e, t) {
                this.x = e,
                this.y = t
            }
            Math.imul || (l = u),
            o.prototype.mulTo = function(e, t) {
                var r = this.length + e.length;
                return 10 === this.length && 10 === e.length ? l(this, e, t) : r < 63 ? u(this, e, t) : r < 1024 ? function(e, t, r) {
                    r.negative = t.negative ^ e.negative,
                    r.length = e.length + t.length;
                    for (var i = 0, n = 0, o = 0; o < r.length - 1; o++) {
                        var a = n;
                        n = 0;
                        for (var s = 67108863 & i, f = Math.min(o, t.length - 1), c = Math.max(0, o - e.length + 1); c <= f; c++) {
                            var h = o - c
                              , d = (0 | e.words[h]) * (0 | t.words[c])
                              , u = 67108863 & d;
                            s = 67108863 & (u = u + s | 0),
                            n += (a = (a = a + (d / 67108864 | 0) | 0) + (u >>> 26) | 0) >>> 26,
                            a &= 67108863
                        }
                        r.words[o] = s,
                        i = a,
                        a = n
                    }
                    return 0 !== i ? r.words[o] = i : r.length--,
                    r.strip()
                }(this, e, t) : p(this, e, t)
            }
            ,
            b.prototype.makeRBT = function(e) {
                for (var t = new Array(e), r = o.prototype._countBits(e) - 1, i = 0; i < e; i++)
                    t[i] = this.revBin(i, r, e);
                return t
            }
            ,
            b.prototype.revBin = function(e, t, r) {
                if (0 === e || e === r - 1)
                    return e;
                for (var i = 0, n = 0; n < t; n++)
                    i |= (1 & e) << t - n - 1,
                    e >>= 1;
                return i
            }
            ,
            b.prototype.permute = function(e, t, r, i, n, o) {
                for (var a = 0; a < o; a++)
                    i[a] = t[e[a]],
                    n[a] = r[e[a]]
            }
            ,
            b.prototype.transform = function(e, t, r, i, n, o) {
                this.permute(o, e, t, r, i, n);
                for (var a = 1; a < n; a <<= 1)
                    for (var s = a << 1, f = Math.cos(2 * Math.PI / s), c = Math.sin(2 * Math.PI / s), h = 0; h < n; h += s)
                        for (var d = f, u = c, l = 0; l < a; l++) {
                            var p = r[h + l]
                              , b = i[h + l]
                              , m = r[h + l + a]
                              , y = i[h + l + a]
                              , g = d * m - u * y;
                            y = d * y + u * m,
                            m = g,
                            r[h + l] = p + m,
                            i[h + l] = b + y,
                            r[h + l + a] = p - m,
                            i[h + l + a] = b - y,
                            l !== s && (g = f * d - c * u,
                            u = f * u + c * d,
                            d = g)
                        }
            }
            ,
            b.prototype.guessLen13b = function(e, t) {
                var r = 1 | Math.max(t, e)
                  , i = 1 & r
                  , n = 0;
                for (r = r / 2 | 0; r; r >>>= 1)
                    n++;
                return 1 << n + 1 + i
            }
            ,
            b.prototype.conjugate = function(e, t, r) {
                if (!(r <= 1))
                    for (var i = 0; i < r / 2; i++) {
                        var n = e[i];
                        e[i] = e[r - i - 1],
                        e[r - i - 1] = n,
                        n = t[i],
                        t[i] = -t[r - i - 1],
                        t[r - i - 1] = -n
                    }
            }
            ,
            b.prototype.normalize13b = function(e, t) {
                for (var r = 0, i = 0; i < t / 2; i++) {
                    var n = 8192 * Math.round(e[2 * i + 1] / t) + Math.round(e[2 * i] / t) + r;
                    e[i] = 67108863 & n,
                    r = n < 67108864 ? 0 : n / 67108864 | 0
                }
                return e
            }
            ,
            b.prototype.convert13b = function(e, t, r, n) {
                for (var o = 0, a = 0; a < t; a++)
                    o += 0 | e[a],
                    r[2 * a] = 8191 & o,
                    o >>>= 13,
                    r[2 * a + 1] = 8191 & o,
                    o >>>= 13;
                for (a = 2 * t; a < n; ++a)
                    r[a] = 0;
                i(0 === o),
                i(0 == (-8192 & o))
            }
            ,
            b.prototype.stub = function(e) {
                for (var t = new Array(e), r = 0; r < e; r++)
                    t[r] = 0;
                return t
            }
            ,
            b.prototype.mulp = function(e, t, r) {
                var i = 2 * this.guessLen13b(e.length, t.length)
                  , n = this.makeRBT(i)
                  , o = this.stub(i)
                  , a = new Array(i)
                  , s = new Array(i)
                  , f = new Array(i)
                  , c = new Array(i)
                  , h = new Array(i)
                  , d = new Array(i)
                  , u = r.words;
                u.length = i,
                this.convert13b(e.words, e.length, a, i),
                this.convert13b(t.words, t.length, c, i),
                this.transform(a, o, s, f, i, n),
                this.transform(c, o, h, d, i, n);
                for (var l = 0; l < i; l++) {
                    var p = s[l] * h[l] - f[l] * d[l];
                    f[l] = s[l] * d[l] + f[l] * h[l],
                    s[l] = p
                }
                return this.conjugate(s, f, i),
                this.transform(s, f, u, o, i, n),
                this.conjugate(u, o, i),
                this.normalize13b(u, i),
                r.negative = e.negative ^ t.negative,
                r.length = e.length + t.length,
                r.strip()
            }
            ,
            o.prototype.mul = function(e) {
                var t = new o(null);
                return t.words = new Array(this.length + e.length),
                this.mulTo(e, t)
            }
            ,
            o.prototype.mulf = function(e) {
                var t = new o(null);
                return t.words = new Array(this.length + e.length),
                p(this, e, t)
            }
            ,
            o.prototype.imul = function(e) {
                return this.clone().mulTo(e, this)
            }
            ,
            o.prototype.imuln = function(e) {
                i("number" == typeof e),
                i(e < 67108864);
                for (var t = 0, r = 0; r < this.length; r++) {
                    var n = (0 | this.words[r]) * e
                      , o = (67108863 & n) + (67108863 & t);
                    t >>= 26,
                    t += n / 67108864 | 0,
                    t += o >>> 26,
                    this.words[r] = 67108863 & o
                }
                return 0 !== t && (this.words[r] = t,
                this.length++),
                this
            }
            ,
            o.prototype.muln = function(e) {
                return this.clone().imuln(e)
            }
            ,
            o.prototype.sqr = function() {
                return this.mul(this)
            }
            ,
            o.prototype.isqr = function() {
                return this.imul(this.clone())
            }
            ,
            o.prototype.pow = function(e) {
                var t = function(e) {
                    for (var t = new Array(e.bitLength()), r = 0; r < t.length; r++) {
                        var i = r / 26 | 0
                          , n = r % 26;
                        t[r] = (e.words[i] & 1 << n) >>> n
                    }
                    return t
                }(e);
                if (0 === t.length)
                    return new o(1);
                for (var r = this, i = 0; i < t.length && 0 === t[i]; i++,
                r = r.sqr())
                    ;
                if (++i < t.length)
                    for (var n = r.sqr(); i < t.length; i++,
                    n = n.sqr())
                        0 !== t[i] && (r = r.mul(n));
                return r
            }
            ,
            o.prototype.iushln = function(e) {
                i("number" == typeof e && e >= 0);
                var t, r = e % 26, n = (e - r) / 26, o = 67108863 >>> 26 - r << 26 - r;
                if (0 !== r) {
                    var a = 0;
                    for (t = 0; t < this.length; t++) {
                        var s = this.words[t] & o
                          , f = (0 | this.words[t]) - s << r;
                        this.words[t] = f | a,
                        a = s >>> 26 - r
                    }
                    a && (this.words[t] = a,
                    this.length++)
                }
                if (0 !== n) {
                    for (t = this.length - 1; t >= 0; t--)
                        this.words[t + n] = this.words[t];
                    for (t = 0; t < n; t++)
                        this.words[t] = 0;
                    this.length += n
                }
                return this.strip()
            }
            ,
            o.prototype.ishln = function(e) {
                return i(0 === this.negative),
                this.iushln(e)
            }
            ,
            o.prototype.iushrn = function(e, t, r) {
                var n;
                i("number" == typeof e && e >= 0),
                n = t ? (t - t % 26) / 26 : 0;
                var o = e % 26
                  , a = Math.min((e - o) / 26, this.length)
                  , s = 67108863 ^ 67108863 >>> o << o
                  , f = r;
                if (n -= a,
                n = Math.max(0, n),
                f) {
                    for (var c = 0; c < a; c++)
                        f.words[c] = this.words[c];
                    f.length = a
                }
                if (0 === a)
                    ;
                else if (this.length > a)
                    for (this.length -= a,
                    c = 0; c < this.length; c++)
                        this.words[c] = this.words[c + a];
                else
                    this.words[0] = 0,
                    this.length = 1;
                var h = 0;
                for (c = this.length - 1; c >= 0 && (0 !== h || c >= n); c--) {
                    var d = 0 | this.words[c];
                    this.words[c] = h << 26 - o | d >>> o,
                    h = d & s
                }
                return f && 0 !== h && (f.words[f.length++] = h),
                0 === this.length && (this.words[0] = 0,
                this.length = 1),
                this.strip()
            }
            ,
            o.prototype.ishrn = function(e, t, r) {
                return i(0 === this.negative),
                this.iushrn(e, t, r)
            }
            ,
            o.prototype.shln = function(e) {
                return this.clone().ishln(e)
            }
            ,
            o.prototype.ushln = function(e) {
                return this.clone().iushln(e)
            }
            ,
            o.prototype.shrn = function(e) {
                return this.clone().ishrn(e)
            }
            ,
            o.prototype.ushrn = function(e) {
                return this.clone().iushrn(e)
            }
            ,
            o.prototype.testn = function(e) {
                i("number" == typeof e && e >= 0);
                var t = e % 26
                  , r = (e - t) / 26
                  , n = 1 << t;
                return !(this.length <= r) && !!(this.words[r] & n)
            }
            ,
            o.prototype.imaskn = function(e) {
                i("number" == typeof e && e >= 0);
                var t = e % 26
                  , r = (e - t) / 26;
                if (i(0 === this.negative, "imaskn works only with positive numbers"),
                this.length <= r)
                    return this;
                if (0 !== t && r++,
                this.length = Math.min(r, this.length),
                0 !== t) {
                    var n = 67108863 ^ 67108863 >>> t << t;
                    this.words[this.length - 1] &= n
                }
                return this.strip()
            }
            ,
            o.prototype.maskn = function(e) {
                return this.clone().imaskn(e)
            }
            ,
            o.prototype.iaddn = function(e) {
                return i("number" == typeof e),
                i(e < 67108864),
                e < 0 ? this.isubn(-e) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < e ? (this.words[0] = e - (0 | this.words[0]),
                this.negative = 0,
                this) : (this.negative = 0,
                this.isubn(e),
                this.negative = 1,
                this) : this._iaddn(e)
            }
            ,
            o.prototype._iaddn = function(e) {
                this.words[0] += e;
                for (var t = 0; t < this.length && this.words[t] >= 67108864; t++)
                    this.words[t] -= 67108864,
                    t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
                return this.length = Math.max(this.length, t + 1),
                this
            }
            ,
            o.prototype.isubn = function(e) {
                if (i("number" == typeof e),
                i(e < 67108864),
                e < 0)
                    return this.iaddn(-e);
                if (0 !== this.negative)
                    return this.negative = 0,
                    this.iaddn(e),
                    this.negative = 1,
                    this;
                if (this.words[0] -= e,
                1 === this.length && this.words[0] < 0)
                    this.words[0] = -this.words[0],
                    this.negative = 1;
                else
                    for (var t = 0; t < this.length && this.words[t] < 0; t++)
                        this.words[t] += 67108864,
                        this.words[t + 1] -= 1;
                return this.strip()
            }
            ,
            o.prototype.addn = function(e) {
                return this.clone().iaddn(e)
            }
            ,
            o.prototype.subn = function(e) {
                return this.clone().isubn(e)
            }
            ,
            o.prototype.iabs = function() {
                return this.negative = 0,
                this
            }
            ,
            o.prototype.abs = function() {
                return this.clone().iabs()
            }
            ,
            o.prototype._ishlnsubmul = function(e, t, r) {
                var n, o, a = e.length + r;
                this._expand(a);
                var s = 0;
                for (n = 0; n < e.length; n++) {
                    o = (0 | this.words[n + r]) + s;
                    var f = (0 | e.words[n]) * t;
                    s = ((o -= 67108863 & f) >> 26) - (f / 67108864 | 0),
                    this.words[n + r] = 67108863 & o
                }
                for (; n < this.length - r; n++)
                    s = (o = (0 | this.words[n + r]) + s) >> 26,
                    this.words[n + r] = 67108863 & o;
                if (0 === s)
                    return this.strip();
                for (i(-1 === s),
                s = 0,
                n = 0; n < this.length; n++)
                    s = (o = -(0 | this.words[n]) + s) >> 26,
                    this.words[n] = 67108863 & o;
                return this.negative = 1,
                this.strip()
            }
            ,
            o.prototype._wordDiv = function(e, t) {
                var r = (this.length,
                e.length)
                  , i = this.clone()
                  , n = e
                  , a = 0 | n.words[n.length - 1];
                0 !== (r = 26 - this._countBits(a)) && (n = n.ushln(r),
                i.iushln(r),
                a = 0 | n.words[n.length - 1]);
                var s, f = i.length - n.length;
                if ("mod" !== t) {
                    (s = new o(null)).length = f + 1,
                    s.words = new Array(s.length);
                    for (var c = 0; c < s.length; c++)
                        s.words[c] = 0
                }
                var h = i.clone()._ishlnsubmul(n, 1, f);
                0 === h.negative && (i = h,
                s && (s.words[f] = 1));
                for (var d = f - 1; d >= 0; d--) {
                    var u = 67108864 * (0 | i.words[n.length + d]) + (0 | i.words[n.length + d - 1]);
                    for (u = Math.min(u / a | 0, 67108863),
                    i._ishlnsubmul(n, u, d); 0 !== i.negative; )
                        u--,
                        i.negative = 0,
                        i._ishlnsubmul(n, 1, d),
                        i.isZero() || (i.negative ^= 1);
                    s && (s.words[d] = u)
                }
                return s && s.strip(),
                i.strip(),
                "div" !== t && 0 !== r && i.iushrn(r),
                {
                    div: s || null,
                    mod: i
                }
            }
            ,
            o.prototype.divmod = function(e, t, r) {
                return i(!e.isZero()),
                this.isZero() ? {
                    div: new o(0),
                    mod: new o(0)
                } : 0 !== this.negative && 0 === e.negative ? (s = this.neg().divmod(e, t),
                "mod" !== t && (n = s.div.neg()),
                "div" !== t && (a = s.mod.neg(),
                r && 0 !== a.negative && a.iadd(e)),
                {
                    div: n,
                    mod: a
                }) : 0 === this.negative && 0 !== e.negative ? (s = this.divmod(e.neg(), t),
                "mod" !== t && (n = s.div.neg()),
                {
                    div: n,
                    mod: s.mod
                }) : 0 != (this.negative & e.negative) ? (s = this.neg().divmod(e.neg(), t),
                "div" !== t && (a = s.mod.neg(),
                r && 0 !== a.negative && a.isub(e)),
                {
                    div: s.div,
                    mod: a
                }) : e.length > this.length || this.cmp(e) < 0 ? {
                    div: new o(0),
                    mod: this
                } : 1 === e.length ? "div" === t ? {
                    div: this.divn(e.words[0]),
                    mod: null
                } : "mod" === t ? {
                    div: null,
                    mod: new o(this.modn(e.words[0]))
                } : {
                    div: this.divn(e.words[0]),
                    mod: new o(this.modn(e.words[0]))
                } : this._wordDiv(e, t);
                var n, a, s
            }
            ,
            o.prototype.div = function(e) {
                return this.divmod(e, "div", !1).div
            }
            ,
            o.prototype.mod = function(e) {
                return this.divmod(e, "mod", !1).mod
            }
            ,
            o.prototype.umod = function(e) {
                return this.divmod(e, "mod", !0).mod
            }
            ,
            o.prototype.divRound = function(e) {
                var t = this.divmod(e);
                if (t.mod.isZero())
                    return t.div;
                var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod
                  , i = e.ushrn(1)
                  , n = e.andln(1)
                  , o = r.cmp(i);
                return o < 0 || 1 === n && 0 === o ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1)
            }
            ,
            o.prototype.modn = function(e) {
                i(e <= 67108863);
                for (var t = (1 << 26) % e, r = 0, n = this.length - 1; n >= 0; n--)
                    r = (t * r + (0 | this.words[n])) % e;
                return r
            }
            ,
            o.prototype.idivn = function(e) {
                i(e <= 67108863);
                for (var t = 0, r = this.length - 1; r >= 0; r--) {
                    var n = (0 | this.words[r]) + 67108864 * t;
                    this.words[r] = n / e | 0,
                    t = n % e
                }
                return this.strip()
            }
            ,
            o.prototype.divn = function(e) {
                return this.clone().idivn(e)
            }
            ,
            o.prototype.egcd = function(e) {
                i(0 === e.negative),
                i(!e.isZero());
                var t = this
                  , r = e.clone();
                t = 0 !== t.negative ? t.umod(e) : t.clone();
                for (var n = new o(1), a = new o(0), s = new o(0), f = new o(1), c = 0; t.isEven() && r.isEven(); )
                    t.iushrn(1),
                    r.iushrn(1),
                    ++c;
                for (var h = r.clone(), d = t.clone(); !t.isZero(); ) {
                    for (var u = 0, l = 1; 0 == (t.words[0] & l) && u < 26; ++u,
                    l <<= 1)
                        ;
                    if (u > 0)
                        for (t.iushrn(u); u-- > 0; )
                            (n.isOdd() || a.isOdd()) && (n.iadd(h),
                            a.isub(d)),
                            n.iushrn(1),
                            a.iushrn(1);
                    for (var p = 0, b = 1; 0 == (r.words[0] & b) && p < 26; ++p,
                    b <<= 1)
                        ;
                    if (p > 0)
                        for (r.iushrn(p); p-- > 0; )
                            (s.isOdd() || f.isOdd()) && (s.iadd(h),
                            f.isub(d)),
                            s.iushrn(1),
                            f.iushrn(1);
                    t.cmp(r) >= 0 ? (t.isub(r),
                    n.isub(s),
                    a.isub(f)) : (r.isub(t),
                    s.isub(n),
                    f.isub(a))
                }
                return {
                    a: s,
                    b: f,
                    gcd: r.iushln(c)
                }
            }
            ,
            o.prototype._invmp = function(e) {
                i(0 === e.negative),
                i(!e.isZero());
                var t = this
                  , r = e.clone();
                t = 0 !== t.negative ? t.umod(e) : t.clone();
                for (var n, a = new o(1), s = new o(0), f = r.clone(); t.cmpn(1) > 0 && r.cmpn(1) > 0; ) {
                    for (var c = 0, h = 1; 0 == (t.words[0] & h) && c < 26; ++c,
                    h <<= 1)
                        ;
                    if (c > 0)
                        for (t.iushrn(c); c-- > 0; )
                            a.isOdd() && a.iadd(f),
                            a.iushrn(1);
                    for (var d = 0, u = 1; 0 == (r.words[0] & u) && d < 26; ++d,
                    u <<= 1)
                        ;
                    if (d > 0)
                        for (r.iushrn(d); d-- > 0; )
                            s.isOdd() && s.iadd(f),
                            s.iushrn(1);
                    t.cmp(r) >= 0 ? (t.isub(r),
                    a.isub(s)) : (r.isub(t),
                    s.isub(a))
                }
                return (n = 0 === t.cmpn(1) ? a : s).cmpn(0) < 0 && n.iadd(e),
                n
            }
            ,
            o.prototype.gcd = function(e) {
                if (this.isZero())
                    return e.abs();
                if (e.isZero())
                    return this.abs();
                var t = this.clone()
                  , r = e.clone();
                t.negative = 0,
                r.negative = 0;
                for (var i = 0; t.isEven() && r.isEven(); i++)
                    t.iushrn(1),
                    r.iushrn(1);
                for (; ; ) {
                    for (; t.isEven(); )
                        t.iushrn(1);
                    for (; r.isEven(); )
                        r.iushrn(1);
                    var n = t.cmp(r);
                    if (n < 0) {
                        var o = t;
                        t = r,
                        r = o
                    } else if (0 === n || 0 === r.cmpn(1))
                        break;
                    t.isub(r)
                }
                return r.iushln(i)
            }
            ,
            o.prototype.invm = function(e) {
                return this.egcd(e).a.umod(e)
            }
            ,
            o.prototype.isEven = function() {
                return 0 == (1 & this.words[0])
            }
            ,
            o.prototype.isOdd = function() {
                return 1 == (1 & this.words[0])
            }
            ,
            o.prototype.andln = function(e) {
                return this.words[0] & e
            }
            ,
            o.prototype.bincn = function(e) {
                i("number" == typeof e);
                var t = e % 26
                  , r = (e - t) / 26
                  , n = 1 << t;
                if (this.length <= r)
                    return this._expand(r + 1),
                    this.words[r] |= n,
                    this;
                for (var o = n, a = r; 0 !== o && a < this.length; a++) {
                    var s = 0 | this.words[a];
                    o = (s += o) >>> 26,
                    s &= 67108863,
                    this.words[a] = s
                }
                return 0 !== o && (this.words[a] = o,
                this.length++),
                this
            }
            ,
            o.prototype.isZero = function() {
                return 1 === this.length && 0 === this.words[0]
            }
            ,
            o.prototype.cmpn = function(e) {
                var t, r = e < 0;
                if (0 !== this.negative && !r)
                    return -1;
                if (0 === this.negative && r)
                    return 1;
                if (this.strip(),
                this.length > 1)
                    t = 1;
                else {
                    r && (e = -e),
                    i(e <= 67108863, "Number is too big");
                    var n = 0 | this.words[0];
                    t = n === e ? 0 : n < e ? -1 : 1
                }
                return 0 !== this.negative ? 0 | -t : t
            }
            ,
            o.prototype.cmp = function(e) {
                if (0 !== this.negative && 0 === e.negative)
                    return -1;
                if (0 === this.negative && 0 !== e.negative)
                    return 1;
                var t = this.ucmp(e);
                return 0 !== this.negative ? 0 | -t : t
            }
            ,
            o.prototype.ucmp = function(e) {
                if (this.length > e.length)
                    return 1;
                if (this.length < e.length)
                    return -1;
                for (var t = 0, r = this.length - 1; r >= 0; r--) {
                    var i = 0 | this.words[r]
                      , n = 0 | e.words[r];
                    if (i !== n) {
                        i < n ? t = -1 : i > n && (t = 1);
                        break
                    }
                }
                return t
            }
            ,
            o.prototype.gtn = function(e) {
                return 1 === this.cmpn(e)
            }
            ,
            o.prototype.gt = function(e) {
                return 1 === this.cmp(e)
            }
            ,
            o.prototype.gten = function(e) {
                return this.cmpn(e) >= 0
            }
            ,
            o.prototype.gte = function(e) {
                return this.cmp(e) >= 0
            }
            ,
            o.prototype.ltn = function(e) {
                return -1 === this.cmpn(e)
            }
            ,
            o.prototype.lt = function(e) {
                return -1 === this.cmp(e)
            }
            ,
            o.prototype.lten = function(e) {
                return this.cmpn(e) <= 0
            }
            ,
            o.prototype.lte = function(e) {
                return this.cmp(e) <= 0
            }
            ,
            o.prototype.eqn = function(e) {
                return 0 === this.cmpn(e)
            }
            ,
            o.prototype.eq = function(e) {
                return 0 === this.cmp(e)
            }
            ,
            o.red = function(e) {
                return new S(e)
            }
            ,
            o.prototype.toRed = function(e) {
                return i(!this.red, "Already a number in reduction context"),
                i(0 === this.negative, "red works only with positives"),
                e.convertTo(this)._forceRed(e)
            }
            ,
            o.prototype.fromRed = function() {
                return i(this.red, "fromRed works only with numbers in reduction context"),
                this.red.convertFrom(this)
            }
            ,
            o.prototype._forceRed = function(e) {
                return this.red = e,
                this
            }
            ,
            o.prototype.forceRed = function(e) {
                return i(!this.red, "Already a number in reduction context"),
                this._forceRed(e)
            }
            ,
            o.prototype.redAdd = function(e) {
                return i(this.red, "redAdd works only with red numbers"),
                this.red.add(this, e)
            }
            ,
            o.prototype.redIAdd = function(e) {
                return i(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, e)
            }
            ,
            o.prototype.redSub = function(e) {
                return i(this.red, "redSub works only with red numbers"),
                this.red.sub(this, e)
            }
            ,
            o.prototype.redISub = function(e) {
                return i(this.red, "redISub works only with red numbers"),
                this.red.isub(this, e)
            }
            ,
            o.prototype.redShl = function(e) {
                return i(this.red, "redShl works only with red numbers"),
                this.red.shl(this, e)
            }
            ,
            o.prototype.redMul = function(e) {
                return i(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, e),
                this.red.mul(this, e)
            }
            ,
            o.prototype.redIMul = function(e) {
                return i(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, e),
                this.red.imul(this, e)
            }
            ,
            o.prototype.redSqr = function() {
                return i(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
            }
            ,
            o.prototype.redISqr = function() {
                return i(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
            }
            ,
            o.prototype.redSqrt = function() {
                return i(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
            }
            ,
            o.prototype.redInvm = function() {
                return i(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
            }
            ,
            o.prototype.redNeg = function() {
                return i(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
            }
            ,
            o.prototype.redPow = function(e) {
                return i(this.red && !e.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, e)
            }
            ;
            var m = {
                k256: null,
                p224: null,
                p192: null,
                p25519: null
            };
            function y(e, t) {
                this.name = e,
                this.p = new o(t,16),
                this.n = this.p.bitLength(),
                this.k = new o(1).iushln(this.n).isub(this.p),
                this.tmp = this._tmp()
            }
            function g() {
                y.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
            }
            function v() {
                y.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
            }
            function _() {
                y.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
            }
            function w() {
                y.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
            }
            function S(e) {
                if ("string" == typeof e) {
                    var t = o._prime(e);
                    this.m = t.p,
                    this.prime = t
                } else
                    i(e.gtn(1), "modulus must be greater than 1"),
                    this.m = e,
                    this.prime = null
            }
            function M(e) {
                S.call(this, e),
                this.shift = this.m.bitLength(),
                this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26),
                this.r = new o(1).iushln(this.shift),
                this.r2 = this.imod(this.r.sqr()),
                this.rinv = this.r._invmp(this.m),
                this.minv = this.rinv.mul(this.r).isubn(1).div(this.m),
                this.minv = this.minv.umod(this.r),
                this.minv = this.r.sub(this.minv)
            }
            y.prototype._tmp = function() {
                var e = new o(null);
                return e.words = new Array(Math.ceil(this.n / 13)),
                e
            }
            ,
            y.prototype.ireduce = function(e) {
                var t, r = e;
                do {
                    this.split(r, this.tmp),
                    t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                } while (t > this.n);
                var i = t < this.n ? -1 : r.ucmp(this.p);
                return 0 === i ? (r.words[0] = 0,
                r.length = 1) : i > 0 ? r.isub(this.p) : r.strip(),
                r
            }
            ,
            y.prototype.split = function(e, t) {
                e.iushrn(this.n, 0, t)
            }
            ,
            y.prototype.imulK = function(e) {
                return e.imul(this.k)
            }
            ,
            n(g, y),
            g.prototype.split = function(e, t) {
                for (var r = Math.min(e.length, 9), i = 0; i < r; i++)
                    t.words[i] = e.words[i];
                if (t.length = r,
                e.length <= 9)
                    return e.words[0] = 0,
                    void (e.length = 1);
                var n = e.words[9];
                for (t.words[t.length++] = 4194303 & n,
                i = 10; i < e.length; i++) {
                    var o = 0 | e.words[i];
                    e.words[i - 10] = (4194303 & o) << 4 | n >>> 22,
                    n = o
                }
                n >>>= 22,
                e.words[i - 10] = n,
                0 === n && e.length > 10 ? e.length -= 10 : e.length -= 9
            }
            ,
            g.prototype.imulK = function(e) {
                e.words[e.length] = 0,
                e.words[e.length + 1] = 0,
                e.length += 2;
                for (var t = 0, r = 0; r < e.length; r++) {
                    var i = 0 | e.words[r];
                    t += 977 * i,
                    e.words[r] = 67108863 & t,
                    t = 64 * i + (t / 67108864 | 0)
                }
                return 0 === e.words[e.length - 1] && (e.length--,
                0 === e.words[e.length - 1] && e.length--),
                e
            }
            ,
            n(v, y),
            n(_, y),
            n(w, y),
            w.prototype.imulK = function(e) {
                for (var t = 0, r = 0; r < e.length; r++) {
                    var i = 19 * (0 | e.words[r]) + t
                      , n = 67108863 & i;
                    i >>>= 26,
                    e.words[r] = n,
                    t = i
                }
                return 0 !== t && (e.words[e.length++] = t),
                e
            }
            ,
            o._prime = function(e) {
                if (m[e])
                    return m[e];
                var t;
                if ("k256" === e)
                    t = new g;
                else if ("p224" === e)
                    t = new v;
                else if ("p192" === e)
                    t = new _;
                else {
                    if ("p25519" !== e)
                        throw new Error("Unknown prime " + e);
                    t = new w
                }
                return m[e] = t,
                t
            }
            ,
            S.prototype._verify1 = function(e) {
                i(0 === e.negative, "red works only with positives"),
                i(e.red, "red works only with red numbers")
            }
            ,
            S.prototype._verify2 = function(e, t) {
                i(0 == (e.negative | t.negative), "red works only with positives"),
                i(e.red && e.red === t.red, "red works only with red numbers")
            }
            ,
            S.prototype.imod = function(e) {
                return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.umod(this.m)._forceRed(this)
            }
            ,
            S.prototype.neg = function(e) {
                return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this)
            }
            ,
            S.prototype.add = function(e, t) {
                this._verify2(e, t);
                var r = e.add(t);
                return r.cmp(this.m) >= 0 && r.isub(this.m),
                r._forceRed(this)
            }
            ,
            S.prototype.iadd = function(e, t) {
                this._verify2(e, t);
                var r = e.iadd(t);
                return r.cmp(this.m) >= 0 && r.isub(this.m),
                r
            }
            ,
            S.prototype.sub = function(e, t) {
                this._verify2(e, t);
                var r = e.sub(t);
                return r.cmpn(0) < 0 && r.iadd(this.m),
                r._forceRed(this)
            }
            ,
            S.prototype.isub = function(e, t) {
                this._verify2(e, t);
                var r = e.isub(t);
                return r.cmpn(0) < 0 && r.iadd(this.m),
                r
            }
            ,
            S.prototype.shl = function(e, t) {
                return this._verify1(e),
                this.imod(e.ushln(t))
            }
            ,
            S.prototype.imul = function(e, t) {
                return this._verify2(e, t),
                this.imod(e.imul(t))
            }
            ,
            S.prototype.mul = function(e, t) {
                return this._verify2(e, t),
                this.imod(e.mul(t))
            }
            ,
            S.prototype.isqr = function(e) {
                return this.imul(e, e.clone())
            }
            ,
            S.prototype.sqr = function(e) {
                return this.mul(e, e)
            }
            ,
            S.prototype.sqrt = function(e) {
                if (e.isZero())
                    return e.clone();
                var t = this.m.andln(3);
                if (i(t % 2 == 1),
                3 === t) {
                    var r = this.m.add(new o(1)).iushrn(2);
                    return this.pow(e, r)
                }
                for (var n = this.m.subn(1), a = 0; !n.isZero() && 0 === n.andln(1); )
                    a++,
                    n.iushrn(1);
                i(!n.isZero());
                var s = new o(1).toRed(this)
                  , f = s.redNeg()
                  , c = this.m.subn(1).iushrn(1)
                  , h = this.m.bitLength();
                for (h = new o(2 * h * h).toRed(this); 0 !== this.pow(h, c).cmp(f); )
                    h.redIAdd(f);
                for (var d = this.pow(h, n), u = this.pow(e, n.addn(1).iushrn(1)), l = this.pow(e, n), p = a; 0 !== l.cmp(s); ) {
                    for (var b = l, m = 0; 0 !== b.cmp(s); m++)
                        b = b.redSqr();
                    i(m < p);
                    var y = this.pow(d, new o(1).iushln(p - m - 1));
                    u = u.redMul(y),
                    d = y.redSqr(),
                    l = l.redMul(d),
                    p = m
                }
                return u
            }
            ,
            S.prototype.invm = function(e) {
                var t = e._invmp(this.m);
                return 0 !== t.negative ? (t.negative = 0,
                this.imod(t).redNeg()) : this.imod(t)
            }
            ,
            S.prototype.pow = function(e, t) {
                if (t.isZero())
                    return new o(1).toRed(this);
                if (0 === t.cmpn(1))
                    return e.clone();
                var r = new Array(16);
                r[0] = new o(1).toRed(this),
                r[1] = e;
                for (var i = 2; i < r.length; i++)
                    r[i] = this.mul(r[i - 1], e);
                var n = r[0]
                  , a = 0
                  , s = 0
                  , f = t.bitLength() % 26;
                for (0 === f && (f = 26),
                i = t.length - 1; i >= 0; i--) {
                    for (var c = t.words[i], h = f - 1; h >= 0; h--) {
                        var d = c >> h & 1;
                        n !== r[0] && (n = this.sqr(n)),
                        0 !== d || 0 !== a ? (a <<= 1,
                        a |= d,
                        (4 === ++s || 0 === i && 0 === h) && (n = this.mul(n, r[a]),
                        s = 0,
                        a = 0)) : s = 0
                    }
                    f = 26
                }
                return n
            }
            ,
            S.prototype.convertTo = function(e) {
                var t = e.umod(this.m);
                return t === e ? t.clone() : t
            }
            ,
            S.prototype.convertFrom = function(e) {
                var t = e.clone();
                return t.red = null,
                t
            }
            ,
            o.mont = function(e) {
                return new M(e)
            }
            ,
            n(M, S),
            M.prototype.convertTo = function(e) {
                return this.imod(e.ushln(this.shift))
            }
            ,
            M.prototype.convertFrom = function(e) {
                var t = this.imod(e.mul(this.rinv));
                return t.red = null,
                t
            }
            ,
            M.prototype.imul = function(e, t) {
                if (e.isZero() || t.isZero())
                    return e.words[0] = 0,
                    e.length = 1,
                    e;
                var r = e.imul(t)
                  , i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
                  , n = r.isub(i).iushrn(this.shift)
                  , o = n;
                return n.cmp(this.m) >= 0 ? o = n.isub(this.m) : n.cmpn(0) < 0 && (o = n.iadd(this.m)),
                o._forceRed(this)
            }
            ,
            M.prototype.mul = function(e, t) {
                if (e.isZero() || t.isZero())
                    return new o(0)._forceRed(this);
                var r = e.mul(t)
                  , i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
                  , n = r.isub(i).iushrn(this.shift)
                  , a = n;
                return n.cmp(this.m) >= 0 ? a = n.isub(this.m) : n.cmpn(0) < 0 && (a = n.iadd(this.m)),
                a._forceRed(this)
            }
            ,
            M.prototype.invm = function(e) {
                return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)
            }
        }(e, this)
    }
    ).call(this, r(257)(e))
}
, function(e, t) {
    e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
}
, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}
, function(e, t, r) {
    var i = r(19);
    e.exports = function(e, t, r) {
        if (i(e),
        void 0 === t)
            return e;
        switch (r) {
        case 1:
            return function(r) {
                return e.call(t, r)
            }
            ;
        case 2:
            return function(r, i) {
                return e.call(t, r, i)
            }
            ;
        case 3:
            return function(r, i, n) {
                return e.call(t, r, i, n)
            }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}
, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e)
            throw TypeError(e + " is not a function!");
        return e
    }
}
, function(e, t, r) {
    "use strict";
    (function(e) {
        /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
        var i = r(218)
          , n = r(219)
          , o = r(220);
        function a() {
            return f.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }
        function s(e, t) {
            if (a() < t)
                throw new RangeError("Invalid typed array length");
            return f.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = f.prototype : (null === e && (e = new f(t)),
            e.length = t),
            e
        }
        function f(e, t, r) {
            if (!(f.TYPED_ARRAY_SUPPORT || this instanceof f))
                return new f(e,t,r);
            if ("number" == typeof e) {
                if ("string" == typeof t)
                    throw new Error("If encoding is specified then the first argument must be a string");
                return d(this, e)
            }
            return c(this, e, t, r)
        }
        function c(e, t, r, i) {
            if ("number" == typeof t)
                throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, r, i) {
                if (t.byteLength,
                r < 0 || t.byteLength < r)
                    throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < r + (i || 0))
                    throw new RangeError("'length' is out of bounds");
                t = void 0 === r && void 0 === i ? new Uint8Array(t) : void 0 === i ? new Uint8Array(t,r) : new Uint8Array(t,r,i);
                f.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = f.prototype : e = u(e, t);
                return e
            }(e, t, r, i) : "string" == typeof t ? function(e, t, r) {
                "string" == typeof r && "" !== r || (r = "utf8");
                if (!f.isEncoding(r))
                    throw new TypeError('"encoding" must be a valid string encoding');
                var i = 0 | p(t, r)
                  , n = (e = s(e, i)).write(t, r);
                n !== i && (e = e.slice(0, n));
                return e
            }(e, t, r) : function(e, t) {
                if (f.isBuffer(t)) {
                    var r = 0 | l(t.length);
                    return 0 === (e = s(e, r)).length ? e : (t.copy(e, 0, 0, r),
                    e)
                }
                if (t) {
                    if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length"in t)
                        return "number" != typeof t.length || (i = t.length) != i ? s(e, 0) : u(e, t);
                    if ("Buffer" === t.type && o(t.data))
                        return u(e, t.data)
                }
                var i;
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }(e, t)
        }
        function h(e) {
            if ("number" != typeof e)
                throw new TypeError('"size" argument must be a number');
            if (e < 0)
                throw new RangeError('"size" argument must not be negative')
        }
        function d(e, t) {
            if (h(t),
            e = s(e, t < 0 ? 0 : 0 | l(t)),
            !f.TYPED_ARRAY_SUPPORT)
                for (var r = 0; r < t; ++r)
                    e[r] = 0;
            return e
        }
        function u(e, t) {
            var r = t.length < 0 ? 0 : 0 | l(t.length);
            e = s(e, r);
            for (var i = 0; i < r; i += 1)
                e[i] = 255 & t[i];
            return e
        }
        function l(e) {
            if (e >= a())
                throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
            return 0 | e
        }
        function p(e, t) {
            if (f.isBuffer(e))
                return e.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer))
                return e.byteLength;
            "string" != typeof e && (e = "" + e);
            var r = e.length;
            if (0 === r)
                return 0;
            for (var i = !1; ; )
                switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                    return r;
                case "utf8":
                case "utf-8":
                case void 0:
                    return z(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * r;
                case "hex":
                    return r >>> 1;
                case "base64":
                    return F(e).length;
                default:
                    if (i)
                        return z(e).length;
                    t = ("" + t).toLowerCase(),
                    i = !0
                }
        }
        function b(e, t, r) {
            var i = !1;
            if ((void 0 === t || t < 0) && (t = 0),
            t > this.length)
                return "";
            if ((void 0 === r || r > this.length) && (r = this.length),
            r <= 0)
                return "";
            if ((r >>>= 0) <= (t >>>= 0))
                return "";
            for (e || (e = "utf8"); ; )
                switch (e) {
                case "hex":
                    return T(this, t, r);
                case "utf8":
                case "utf-8":
                    return A(this, t, r);
                case "ascii":
                    return I(this, t, r);
                case "latin1":
                case "binary":
                    return B(this, t, r);
                case "base64":
                    return k(this, t, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return R(this, t, r);
                default:
                    if (i)
                        throw new TypeError("Unknown encoding: " + e);
                    e = (e + "").toLowerCase(),
                    i = !0
                }
        }
        function m(e, t, r) {
            var i = e[t];
            e[t] = e[r],
            e[r] = i
        }
        function y(e, t, r, i, n) {
            if (0 === e.length)
                return -1;
            if ("string" == typeof r ? (i = r,
            r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648),
            r = +r,
            isNaN(r) && (r = n ? 0 : e.length - 1),
            r < 0 && (r = e.length + r),
            r >= e.length) {
                if (n)
                    return -1;
                r = e.length - 1
            } else if (r < 0) {
                if (!n)
                    return -1;
                r = 0
            }
            if ("string" == typeof t && (t = f.from(t, i)),
            f.isBuffer(t))
                return 0 === t.length ? -1 : g(e, t, r, i, n);
            if ("number" == typeof t)
                return t &= 255,
                f.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? n ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : g(e, [t], r, i, n);
            throw new TypeError("val must be string, number or Buffer")
        }
        function g(e, t, r, i, n) {
            var o, a = 1, s = e.length, f = t.length;
            if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                if (e.length < 2 || t.length < 2)
                    return -1;
                a = 2,
                s /= 2,
                f /= 2,
                r /= 2
            }
            function c(e, t) {
                return 1 === a ? e[t] : e.readUInt16BE(t * a)
            }
            if (n) {
                var h = -1;
                for (o = r; o < s; o++)
                    if (c(e, o) === c(t, -1 === h ? 0 : o - h)) {
                        if (-1 === h && (h = o),
                        o - h + 1 === f)
                            return h * a
                    } else
                        -1 !== h && (o -= o - h),
                        h = -1
            } else
                for (r + f > s && (r = s - f),
                o = r; o >= 0; o--) {
                    for (var d = !0, u = 0; u < f; u++)
                        if (c(e, o + u) !== c(t, u)) {
                            d = !1;
                            break
                        }
                    if (d)
                        return o
                }
            return -1
        }
        function v(e, t, r, i) {
            r = Number(r) || 0;
            var n = e.length - r;
            i ? (i = Number(i)) > n && (i = n) : i = n;
            var o = t.length;
            if (o % 2 != 0)
                throw new TypeError("Invalid hex string");
            i > o / 2 && (i = o / 2);
            for (var a = 0; a < i; ++a) {
                var s = parseInt(t.substr(2 * a, 2), 16);
                if (isNaN(s))
                    return a;
                e[r + a] = s
            }
            return a
        }
        function _(e, t, r, i) {
            return H(z(t, e.length - r), e, r, i)
        }
        function w(e, t, r, i) {
            return H(function(e) {
                for (var t = [], r = 0; r < e.length; ++r)
                    t.push(255 & e.charCodeAt(r));
                return t
            }(t), e, r, i)
        }
        function S(e, t, r, i) {
            return w(e, t, r, i)
        }
        function M(e, t, r, i) {
            return H(F(t), e, r, i)
        }
        function E(e, t, r, i) {
            return H(function(e, t) {
                for (var r, i, n, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a)
                    r = e.charCodeAt(a),
                    i = r >> 8,
                    n = r % 256,
                    o.push(n),
                    o.push(i);
                return o
            }(t, e.length - r), e, r, i)
        }
        function k(e, t, r) {
            return 0 === t && r === e.length ? i.fromByteArray(e) : i.fromByteArray(e.slice(t, r))
        }
        function A(e, t, r) {
            r = Math.min(e.length, r);
            for (var i = [], n = t; n < r; ) {
                var o, a, s, f, c = e[n], h = null, d = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                if (n + d <= r)
                    switch (d) {
                    case 1:
                        c < 128 && (h = c);
                        break;
                    case 2:
                        128 == (192 & (o = e[n + 1])) && (f = (31 & c) << 6 | 63 & o) > 127 && (h = f);
                        break;
                    case 3:
                        o = e[n + 1],
                        a = e[n + 2],
                        128 == (192 & o) && 128 == (192 & a) && (f = (15 & c) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (f < 55296 || f > 57343) && (h = f);
                        break;
                    case 4:
                        o = e[n + 1],
                        a = e[n + 2],
                        s = e[n + 3],
                        128 == (192 & o) && 128 == (192 & a) && 128 == (192 & s) && (f = (15 & c) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) > 65535 && f < 1114112 && (h = f)
                    }
                null === h ? (h = 65533,
                d = 1) : h > 65535 && (h -= 65536,
                i.push(h >>> 10 & 1023 | 55296),
                h = 56320 | 1023 & h),
                i.push(h),
                n += d
            }
            return function(e) {
                var t = e.length;
                if (t <= x)
                    return String.fromCharCode.apply(String, e);
                var r = ""
                  , i = 0;
                for (; i < t; )
                    r += String.fromCharCode.apply(String, e.slice(i, i += x));
                return r
            }(i)
        }
        t.Buffer = f,
        t.SlowBuffer = function(e) {
            +e != e && (e = 0);
            return f.alloc(+e)
        }
        ,
        t.INSPECT_MAX_BYTES = 50,
        f.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
            try {
                var e = new Uint8Array(1);
                return e.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                        return 42
                    }
                },
                42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
            } catch (e) {
                return !1
            }
        }(),
        t.kMaxLength = a(),
        f.poolSize = 8192,
        f._augment = function(e) {
            return e.__proto__ = f.prototype,
            e
        }
        ,
        f.from = function(e, t, r) {
            return c(null, e, t, r)
        }
        ,
        f.TYPED_ARRAY_SUPPORT && (f.prototype.__proto__ = Uint8Array.prototype,
        f.__proto__ = Uint8Array,
        "undefined" != typeof Symbol && Symbol.species && f[Symbol.species] === f && Object.defineProperty(f, Symbol.species, {
            value: null,
            configurable: !0
        })),
        f.alloc = function(e, t, r) {
            return function(e, t, r, i) {
                return h(t),
                t <= 0 ? s(e, t) : void 0 !== r ? "string" == typeof i ? s(e, t).fill(r, i) : s(e, t).fill(r) : s(e, t)
            }(null, e, t, r)
        }
        ,
        f.allocUnsafe = function(e) {
            return d(null, e)
        }
        ,
        f.allocUnsafeSlow = function(e) {
            return d(null, e)
        }
        ,
        f.isBuffer = function(e) {
            return !(null == e || !e._isBuffer)
        }
        ,
        f.compare = function(e, t) {
            if (!f.isBuffer(e) || !f.isBuffer(t))
                throw new TypeError("Arguments must be Buffers");
            if (e === t)
                return 0;
            for (var r = e.length, i = t.length, n = 0, o = Math.min(r, i); n < o; ++n)
                if (e[n] !== t[n]) {
                    r = e[n],
                    i = t[n];
                    break
                }
            return r < i ? -1 : i < r ? 1 : 0
        }
        ,
        f.isEncoding = function(e) {
            switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
            }
        }
        ,
        f.concat = function(e, t) {
            if (!o(e))
                throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length)
                return f.alloc(0);
            var r;
            if (void 0 === t)
                for (t = 0,
                r = 0; r < e.length; ++r)
                    t += e[r].length;
            var i = f.allocUnsafe(t)
              , n = 0;
            for (r = 0; r < e.length; ++r) {
                var a = e[r];
                if (!f.isBuffer(a))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                a.copy(i, n),
                n += a.length
            }
            return i
        }
        ,
        f.byteLength = p,
        f.prototype._isBuffer = !0,
        f.prototype.swap16 = function() {
            var e = this.length;
            if (e % 2 != 0)
                throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2)
                m(this, t, t + 1);
            return this
        }
        ,
        f.prototype.swap32 = function() {
            var e = this.length;
            if (e % 4 != 0)
                throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4)
                m(this, t, t + 3),
                m(this, t + 1, t + 2);
            return this
        }
        ,
        f.prototype.swap64 = function() {
            var e = this.length;
            if (e % 8 != 0)
                throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8)
                m(this, t, t + 7),
                m(this, t + 1, t + 6),
                m(this, t + 2, t + 5),
                m(this, t + 3, t + 4);
            return this
        }
        ,
        f.prototype.toString = function() {
            var e = 0 | this.length;
            return 0 === e ? "" : 0 === arguments.length ? A(this, 0, e) : b.apply(this, arguments)
        }
        ,
        f.prototype.equals = function(e) {
            if (!f.isBuffer(e))
                throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === f.compare(this, e)
        }
        ,
        f.prototype.inspect = function() {
            var e = ""
              , r = t.INSPECT_MAX_BYTES;
            return this.length > 0 && (e = this.toString("hex", 0, r).match(/.{2}/g).join(" "),
            this.length > r && (e += " ... ")),
            "<Buffer " + e + ">"
        }
        ,
        f.prototype.compare = function(e, t, r, i, n) {
            if (!f.isBuffer(e))
                throw new TypeError("Argument must be a Buffer");
            if (void 0 === t && (t = 0),
            void 0 === r && (r = e ? e.length : 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = this.length),
            t < 0 || r > e.length || i < 0 || n > this.length)
                throw new RangeError("out of range index");
            if (i >= n && t >= r)
                return 0;
            if (i >= n)
                return -1;
            if (t >= r)
                return 1;
            if (this === e)
                return 0;
            for (var o = (n >>>= 0) - (i >>>= 0), a = (r >>>= 0) - (t >>>= 0), s = Math.min(o, a), c = this.slice(i, n), h = e.slice(t, r), d = 0; d < s; ++d)
                if (c[d] !== h[d]) {
                    o = c[d],
                    a = h[d];
                    break
                }
            return o < a ? -1 : a < o ? 1 : 0
        }
        ,
        f.prototype.includes = function(e, t, r) {
            return -1 !== this.indexOf(e, t, r)
        }
        ,
        f.prototype.indexOf = function(e, t, r) {
            return y(this, e, t, r, !0)
        }
        ,
        f.prototype.lastIndexOf = function(e, t, r) {
            return y(this, e, t, r, !1)
        }
        ,
        f.prototype.write = function(e, t, r, i) {
            if (void 0 === t)
                i = "utf8",
                r = this.length,
                t = 0;
            else if (void 0 === r && "string" == typeof t)
                i = t,
                r = this.length,
                t = 0;
            else {
                if (!isFinite(t))
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                t |= 0,
                isFinite(r) ? (r |= 0,
                void 0 === i && (i = "utf8")) : (i = r,
                r = void 0)
            }
            var n = this.length - t;
            if ((void 0 === r || r > n) && (r = n),
            e.length > 0 && (r < 0 || t < 0) || t > this.length)
                throw new RangeError("Attempt to write outside buffer bounds");
            i || (i = "utf8");
            for (var o = !1; ; )
                switch (i) {
                case "hex":
                    return v(this, e, t, r);
                case "utf8":
                case "utf-8":
                    return _(this, e, t, r);
                case "ascii":
                    return w(this, e, t, r);
                case "latin1":
                case "binary":
                    return S(this, e, t, r);
                case "base64":
                    return M(this, e, t, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return E(this, e, t, r);
                default:
                    if (o)
                        throw new TypeError("Unknown encoding: " + i);
                    i = ("" + i).toLowerCase(),
                    o = !0
                }
        }
        ,
        f.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        }
        ;
        var x = 4096;
        function I(e, t, r) {
            var i = "";
            r = Math.min(e.length, r);
            for (var n = t; n < r; ++n)
                i += String.fromCharCode(127 & e[n]);
            return i
        }
        function B(e, t, r) {
            var i = "";
            r = Math.min(e.length, r);
            for (var n = t; n < r; ++n)
                i += String.fromCharCode(e[n]);
            return i
        }
        function T(e, t, r) {
            var i = e.length;
            (!t || t < 0) && (t = 0),
            (!r || r < 0 || r > i) && (r = i);
            for (var n = "", o = t; o < r; ++o)
                n += q(e[o]);
            return n
        }
        function R(e, t, r) {
            for (var i = e.slice(t, r), n = "", o = 0; o < i.length; o += 2)
                n += String.fromCharCode(i[o] + 256 * i[o + 1]);
            return n
        }
        function C(e, t, r) {
            if (e % 1 != 0 || e < 0)
                throw new RangeError("offset is not uint");
            if (e + t > r)
                throw new RangeError("Trying to access beyond buffer length")
        }
        function P(e, t, r, i, n, o) {
            if (!f.isBuffer(e))
                throw new TypeError('"buffer" argument must be a Buffer instance');
            if (t > n || t < o)
                throw new RangeError('"value" argument is out of bounds');
            if (r + i > e.length)
                throw new RangeError("Index out of range")
        }
        function j(e, t, r, i) {
            t < 0 && (t = 65535 + t + 1);
            for (var n = 0, o = Math.min(e.length - r, 2); n < o; ++n)
                e[r + n] = (t & 255 << 8 * (i ? n : 1 - n)) >>> 8 * (i ? n : 1 - n)
        }
        function O(e, t, r, i) {
            t < 0 && (t = 4294967295 + t + 1);
            for (var n = 0, o = Math.min(e.length - r, 4); n < o; ++n)
                e[r + n] = t >>> 8 * (i ? n : 3 - n) & 255
        }
        function L(e, t, r, i, n, o) {
            if (r + i > e.length)
                throw new RangeError("Index out of range");
            if (r < 0)
                throw new RangeError("Index out of range")
        }
        function D(e, t, r, i, o) {
            return o || L(e, 0, r, 4),
            n.write(e, t, r, i, 23, 4),
            r + 4
        }
        function N(e, t, r, i, o) {
            return o || L(e, 0, r, 8),
            n.write(e, t, r, i, 52, 8),
            r + 8
        }
        f.prototype.slice = function(e, t) {
            var r, i = this.length;
            if ((e = ~~e) < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i),
            (t = void 0 === t ? i : ~~t) < 0 ? (t += i) < 0 && (t = 0) : t > i && (t = i),
            t < e && (t = e),
            f.TYPED_ARRAY_SUPPORT)
                (r = this.subarray(e, t)).__proto__ = f.prototype;
            else {
                var n = t - e;
                r = new f(n,void 0);
                for (var o = 0; o < n; ++o)
                    r[o] = this[o + e]
            }
            return r
        }
        ,
        f.prototype.readUIntLE = function(e, t, r) {
            e |= 0,
            t |= 0,
            r || C(e, t, this.length);
            for (var i = this[e], n = 1, o = 0; ++o < t && (n *= 256); )
                i += this[e + o] * n;
            return i
        }
        ,
        f.prototype.readUIntBE = function(e, t, r) {
            e |= 0,
            t |= 0,
            r || C(e, t, this.length);
            for (var i = this[e + --t], n = 1; t > 0 && (n *= 256); )
                i += this[e + --t] * n;
            return i
        }
        ,
        f.prototype.readUInt8 = function(e, t) {
            return t || C(e, 1, this.length),
            this[e]
        }
        ,
        f.prototype.readUInt16LE = function(e, t) {
            return t || C(e, 2, this.length),
            this[e] | this[e + 1] << 8
        }
        ,
        f.prototype.readUInt16BE = function(e, t) {
            return t || C(e, 2, this.length),
            this[e] << 8 | this[e + 1]
        }
        ,
        f.prototype.readUInt32LE = function(e, t) {
            return t || C(e, 4, this.length),
            (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
        }
        ,
        f.prototype.readUInt32BE = function(e, t) {
            return t || C(e, 4, this.length),
            16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }
        ,
        f.prototype.readIntLE = function(e, t, r) {
            e |= 0,
            t |= 0,
            r || C(e, t, this.length);
            for (var i = this[e], n = 1, o = 0; ++o < t && (n *= 256); )
                i += this[e + o] * n;
            return i >= (n *= 128) && (i -= Math.pow(2, 8 * t)),
            i
        }
        ,
        f.prototype.readIntBE = function(e, t, r) {
            e |= 0,
            t |= 0,
            r || C(e, t, this.length);
            for (var i = t, n = 1, o = this[e + --i]; i > 0 && (n *= 256); )
                o += this[e + --i] * n;
            return o >= (n *= 128) && (o -= Math.pow(2, 8 * t)),
            o
        }
        ,
        f.prototype.readInt8 = function(e, t) {
            return t || C(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
        }
        ,
        f.prototype.readInt16LE = function(e, t) {
            t || C(e, 2, this.length);
            var r = this[e] | this[e + 1] << 8;
            return 32768 & r ? 4294901760 | r : r
        }
        ,
        f.prototype.readInt16BE = function(e, t) {
            t || C(e, 2, this.length);
            var r = this[e + 1] | this[e] << 8;
            return 32768 & r ? 4294901760 | r : r
        }
        ,
        f.prototype.readInt32LE = function(e, t) {
            return t || C(e, 4, this.length),
            this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }
        ,
        f.prototype.readInt32BE = function(e, t) {
            return t || C(e, 4, this.length),
            this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }
        ,
        f.prototype.readFloatLE = function(e, t) {
            return t || C(e, 4, this.length),
            n.read(this, e, !0, 23, 4)
        }
        ,
        f.prototype.readFloatBE = function(e, t) {
            return t || C(e, 4, this.length),
            n.read(this, e, !1, 23, 4)
        }
        ,
        f.prototype.readDoubleLE = function(e, t) {
            return t || C(e, 8, this.length),
            n.read(this, e, !0, 52, 8)
        }
        ,
        f.prototype.readDoubleBE = function(e, t) {
            return t || C(e, 8, this.length),
            n.read(this, e, !1, 52, 8)
        }
        ,
        f.prototype.writeUIntLE = function(e, t, r, i) {
            (e = +e,
            t |= 0,
            r |= 0,
            i) || P(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            var n = 1
              , o = 0;
            for (this[t] = 255 & e; ++o < r && (n *= 256); )
                this[t + o] = e / n & 255;
            return t + r
        }
        ,
        f.prototype.writeUIntBE = function(e, t, r, i) {
            (e = +e,
            t |= 0,
            r |= 0,
            i) || P(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            var n = r - 1
              , o = 1;
            for (this[t + n] = 255 & e; --n >= 0 && (o *= 256); )
                this[t + n] = e / o & 255;
            return t + r
        }
        ,
        f.prototype.writeUInt8 = function(e, t, r) {
            return e = +e,
            t |= 0,
            r || P(this, e, t, 1, 255, 0),
            f.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            this[t] = 255 & e,
            t + 1
        }
        ,
        f.prototype.writeUInt16LE = function(e, t, r) {
            return e = +e,
            t |= 0,
            r || P(this, e, t, 2, 65535, 0),
            f.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
            this[t + 1] = e >>> 8) : j(this, e, t, !0),
            t + 2
        }
        ,
        f.prototype.writeUInt16BE = function(e, t, r) {
            return e = +e,
            t |= 0,
            r || P(this, e, t, 2, 65535, 0),
            f.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
            this[t + 1] = 255 & e) : j(this, e, t, !1),
            t + 2
        }
        ,
        f.prototype.writeUInt32LE = function(e, t, r) {
            return e = +e,
            t |= 0,
            r || P(this, e, t, 4, 4294967295, 0),
            f.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24,
            this[t + 2] = e >>> 16,
            this[t + 1] = e >>> 8,
            this[t] = 255 & e) : O(this, e, t, !0),
            t + 4
        }
        ,
        f.prototype.writeUInt32BE = function(e, t, r) {
            return e = +e,
            t |= 0,
            r || P(this, e, t, 4, 4294967295, 0),
            f.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
            this[t + 1] = e >>> 16,
            this[t + 2] = e >>> 8,
            this[t + 3] = 255 & e) : O(this, e, t, !1),
            t + 4
        }
        ,
        f.prototype.writeIntLE = function(e, t, r, i) {
            if (e = +e,
            t |= 0,
            !i) {
                var n = Math.pow(2, 8 * r - 1);
                P(this, e, t, r, n - 1, -n)
            }
            var o = 0
              , a = 1
              , s = 0;
            for (this[t] = 255 & e; ++o < r && (a *= 256); )
                e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1),
                this[t + o] = (e / a >> 0) - s & 255;
            return t + r
        }
        ,
        f.prototype.writeIntBE = function(e, t, r, i) {
            if (e = +e,
            t |= 0,
            !i) {
                var n = Math.pow(2, 8 * r - 1);
                P(this, e, t, r, n - 1, -n)
            }
            var o = r - 1
              , a = 1
              , s = 0;
            for (this[t + o] = 255 & e; --o >= 0 && (a *= 256); )
                e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1),
                this[t + o] = (e / a >> 0) - s & 255;
            return t + r
        }
        ,
        f.prototype.writeInt8 = function(e, t, r) {
            return e = +e,
            t |= 0,
            r || P(this, e, t, 1, 127, -128),
            f.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            e < 0 && (e = 255 + e + 1),
            this[t] = 255 & e,
            t + 1
        }
        ,
        f.prototype.writeInt16LE = function(e, t, r) {
            return e = +e,
            t |= 0,
            r || P(this, e, t, 2, 32767, -32768),
            f.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
            this[t + 1] = e >>> 8) : j(this, e, t, !0),
            t + 2
        }
        ,
        f.prototype.writeInt16BE = function(e, t, r) {
            return e = +e,
            t |= 0,
            r || P(this, e, t, 2, 32767, -32768),
            f.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
            this[t + 1] = 255 & e) : j(this, e, t, !1),
            t + 2
        }
        ,
        f.prototype.writeInt32LE = function(e, t, r) {
            return e = +e,
            t |= 0,
            r || P(this, e, t, 4, 2147483647, -2147483648),
            f.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
            this[t + 1] = e >>> 8,
            this[t + 2] = e >>> 16,
            this[t + 3] = e >>> 24) : O(this, e, t, !0),
            t + 4
        }
        ,
        f.prototype.writeInt32BE = function(e, t, r) {
            return e = +e,
            t |= 0,
            r || P(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            f.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
            this[t + 1] = e >>> 16,
            this[t + 2] = e >>> 8,
            this[t + 3] = 255 & e) : O(this, e, t, !1),
            t + 4
        }
        ,
        f.prototype.writeFloatLE = function(e, t, r) {
            return D(this, e, t, !0, r)
        }
        ,
        f.prototype.writeFloatBE = function(e, t, r) {
            return D(this, e, t, !1, r)
        }
        ,
        f.prototype.writeDoubleLE = function(e, t, r) {
            return N(this, e, t, !0, r)
        }
        ,
        f.prototype.writeDoubleBE = function(e, t, r) {
            return N(this, e, t, !1, r)
        }
        ,
        f.prototype.copy = function(e, t, r, i) {
            if (r || (r = 0),
            i || 0 === i || (i = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            i > 0 && i < r && (i = r),
            i === r)
                return 0;
            if (0 === e.length || 0 === this.length)
                return 0;
            if (t < 0)
                throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length)
                throw new RangeError("sourceStart out of bounds");
            if (i < 0)
                throw new RangeError("sourceEnd out of bounds");
            i > this.length && (i = this.length),
            e.length - t < i - r && (i = e.length - t + r);
            var n, o = i - r;
            if (this === e && r < t && t < i)
                for (n = o - 1; n >= 0; --n)
                    e[n + t] = this[n + r];
            else if (o < 1e3 || !f.TYPED_ARRAY_SUPPORT)
                for (n = 0; n < o; ++n)
                    e[n + t] = this[n + r];
            else
                Uint8Array.prototype.set.call(e, this.subarray(r, r + o), t);
            return o
        }
        ,
        f.prototype.fill = function(e, t, r, i) {
            if ("string" == typeof e) {
                if ("string" == typeof t ? (i = t,
                t = 0,
                r = this.length) : "string" == typeof r && (i = r,
                r = this.length),
                1 === e.length) {
                    var n = e.charCodeAt(0);
                    n < 256 && (e = n)
                }
                if (void 0 !== i && "string" != typeof i)
                    throw new TypeError("encoding must be a string");
                if ("string" == typeof i && !f.isEncoding(i))
                    throw new TypeError("Unknown encoding: " + i)
            } else
                "number" == typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < r)
                throw new RangeError("Out of range index");
            if (r <= t)
                return this;
            var o;
            if (t >>>= 0,
            r = void 0 === r ? this.length : r >>> 0,
            e || (e = 0),
            "number" == typeof e)
                for (o = t; o < r; ++o)
                    this[o] = e;
            else {
                var a = f.isBuffer(e) ? e : z(new f(e,i).toString())
                  , s = a.length;
                for (o = 0; o < r - t; ++o)
                    this[o + t] = a[o % s]
            }
            return this
        }
        ;
        var U = /[^+\/0-9A-Za-z-_]/g;
        function q(e) {
            return e < 16 ? "0" + e.toString(16) : e.toString(16)
        }
        function z(e, t) {
            var r;
            t = t || 1 / 0;
            for (var i = e.length, n = null, o = [], a = 0; a < i; ++a) {
                if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
                    if (!n) {
                        if (r > 56319) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        if (a + 1 === i) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        n = r;
                        continue
                    }
                    if (r < 56320) {
                        (t -= 3) > -1 && o.push(239, 191, 189),
                        n = r;
                        continue
                    }
                    r = 65536 + (n - 55296 << 10 | r - 56320)
                } else
                    n && (t -= 3) > -1 && o.push(239, 191, 189);
                if (n = null,
                r < 128) {
                    if ((t -= 1) < 0)
                        break;
                    o.push(r)
                } else if (r < 2048) {
                    if ((t -= 2) < 0)
                        break;
                    o.push(r >> 6 | 192, 63 & r | 128)
                } else if (r < 65536) {
                    if ((t -= 3) < 0)
                        break;
                    o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                } else {
                    if (!(r < 1114112))
                        throw new Error("Invalid code point");
                    if ((t -= 4) < 0)
                        break;
                    o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                }
            }
            return o
        }
        function F(e) {
            return i.toByteArray(function(e) {
                if ((e = function(e) {
                    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                }(e).replace(U, "")).length < 2)
                    return "";
                for (; e.length % 4 != 0; )
                    e += "=";
                return e
            }(e))
        }
        function H(e, t, r, i) {
            for (var n = 0; n < i && !(n + r >= t.length || n >= e.length); ++n)
                t[n + r] = e[n];
            return n
        }
    }
    ).call(this, r(38))
}
, function(e, t, r) {
    var i = r(6)
      , n = r(0).document
      , o = i(n) && i(n.createElement);
    e.exports = function(e) {
        return o ? n.createElement(e) : {}
    }
}
, function(e, t, r) {
    var i = r(6);
    e.exports = function(e, t) {
        if (!i(e))
            return e;
        var r, n;
        if (t && "function" == typeof (r = e.toString) && !i(n = r.call(e)))
            return n;
        if ("function" == typeof (r = e.valueOf) && !i(n = r.call(e)))
            return n;
        if (!t && "function" == typeof (r = e.toString) && !i(n = r.call(e)))
            return n;
        throw TypeError("Can't convert object to primitive value")
    }
}
, function(e, t, r) {}
, function(e, t, r) {
    e.exports = !r(3) && !r(7)((function() {
        return 7 != Object.defineProperty(r(21)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }
    ))
}
, function(e, t) {
    e.exports = function(e) {
        if (null == e)
            throw TypeError("Can't call method on  " + e);
        return e
    }
}
, function(e, t, r) {
    "use strict";
    r(40),
    r(41),
    function(t) {
        var r = {
            alert: function(e, i) {
                if (e = e || "") {
                    i = i || {};
                    var n = (i = t.extend({
                        callback: function() {},
                        callbackTime: 1,
                        time: 1,
                        animate: "bounceIn",
                        animateOut: "bounceOut",
                        type: "wrong",
                        width: 200
                    }, i)).time;
                    i.callbackTime;
                    r.notice.close();
                    Math.max(t("body").width(), t(window).width()),
                    Math.max(t("body").height(), t(window).height());
                    var o, a, s = t('<div class="popup level2_alert animated"></div>').css({
                        "margin-left": -i.width / 2
                    });
                    t('<div class="popup_mask"></div>').css({
                        height: "100%",
                        "min-width": "1000px;"
                    }).appendTo(t("body")),
                    t("body").css("overflow", "hidden"),
                    t('<div class="alertContent ' + i.type + '"><i></i>' + e + "</div>").appendTo(s),
                    s.appendTo(t("body")).addClass(i.animate),
                    function(e, i, n) {
                        setTimeout((function() {
                            e.addClass(i.animateOut).delay(1e3).fadeOut(10, (function() {
                                r.notice.close(),
                                t("body").css("overflow", "auto")
                            }
                            ))
                        }
                        ), 1e3 * n)
                    }(s, i, n),
                    o = i.callback,
                    a = i.callbackTime,
                    setTimeout((function() {
                        "string" == typeof o && (location.href = o),
                        "function" == typeof o && o()
                    }
                    ), 1e3 * a)
                }
            },
            loading: function(e, i) {
                e = e || "加载中,请稍后...",
                i = i || {},
                i = t.extend({
                    time: 15e3,
                    type: "loading"
                }, i),
                r.alert(e, i)
            },
            getWeiboInfo: function(e) {
                var r = e.data.name;
                t("#unlogin_User").hide(),
                t("#logined_User").show().find("i").html(r),
                "function" == typeof userInfoCallBack && userInfoCallBack(e.data)
            },
            invite: {
                show: function(e) {
                    r.notice.close();
                    var i = e
                      , n = t('<div class="jury_nbox popup notice_popup animated"></div>').css({
                        width: i.width,
                        height: i.height,
                        "margin-left": -i.width / 2,
                        "margin-top": -i.height / 2
                    }).appendTo(t("body")).addClass(i.animate)
                      , o = Math.max(t("body").width(), t(window).width())
                      , a = Math.max(t("body").height(), t(window).height());
                    i.mask && t('<div class="popup_mask"></div>').css({
                        width: o,
                        height: a
                    }).appendTo(t("body"));
                    var s = t('<div class="popContent"></div>').css("height", i.height).appendTo(n);
                    if (i.title) {
                        t('<div class="popTitle"><h3>' + i.title + "</h3></div>").appendTo(s);
                        t('<div class="popClose" title="关闭"></div>').appendTo(s).on("click", (function() {
                            r.notice.close(i.animateOut),
                            i.reload && window.location.reload()
                        }
                        ))
                    }
                    var f = t('<div class="popInner"></div>').appendTo(s);
                    t('<div class="jury-form"><h3>第1步：选择帮帮官</h3>\n                                 <div class="jury_blk">\n                                    <form class="jury-type">\n                                       <p class="check-label"><span class="checkbox-ico"><input type="radio" name="lawer" value="3"/></span>律师<span class="jury_note">（可提供专业建议）</span></p>\n                                       <p class="check-label"><span class="checkbox-ico"><input type="radio" name="media" value="4"/></span>媒体<span class="jury_note">（有机会提高曝光）</span></p>\n                                    </form>\n                                    <div class="jury_nlist invite_list">\n                                       <p class="jury_note">注：每次可邀请1个帮帮官，最多能邀请2次。</p>\n                                       <form class="jury-invite"></form>\n                                    </div>\n                                 </div>\n                                 <div class="jury_nodiv">\n                                 <h3 class="step2">第2步：填写邀请理由<span class="jury_note">注：请向帮帮官简单描述目前纠纷的主要问题以及你最想得到哪方面的帮助</span></h3></h3>\n                                 <div class="jury-reason ts-item"><textarea id="jury_invite_reason" name="content" verify-words="0,100" verify-warning="邀请理由不能为空" class="jury-area" placeholder="填写邀请理由"></textarea>\n                                 <div class="clearfix"><div class="ts-textarea-num"><i id="jury_invite_reason_tip" class="">0</i>/100</div><span class="js-msg-clear ts-input-delete" title="清空"></span></div></div>\n                              </div></div>').appendTo(f);
                    if (0 == i.btn)
                        ;
                    else {
                        var c = t('<div class="pbtn"><span class="popCancel ' + i.cancelWClass + '">' + i.cancelW + '</span><span class="popConform">' + i.confirmW + "</span></div>").appendTo(f);
                        i.noCancelBtn && c.find(".popCancel").remove(),
                        c.on("click", ".popCancel", (function() {
                            r.notice._close(i.animateOut, (function() {
                                i.oncancel && i.oncancel(n)
                            }
                            ))
                        }
                        )).on("click", ".popConform", (function() {
                            i.callback()
                        }
                        ))
                    }
                    i.oncomplete && i.oncomplete(n)
                },
                close: function() {
                    t(".popup").remove(),
                    t(".popup_mask").remove()
                },
                _close: function(e, r) {
                    t(".popup").addClass(e).delay(1e3).fadeOut(10, (function() {
                        t(".popup").empty().remove(),
                        r && r.call()
                    }
                    )),
                    t(".popup_mask").animate({
                        opacity: 0
                    }, 1e3, (function() {
                        t(".popup_mask").remove()
                    }
                    ))
                }
            },
            notice: {
                show: function(e, i) {
                    r.notice.close();
                    var n = i
                      , o = t('<div class="popup notice_popup animated"></div>').css({
                        width: n.width,
                        height: n.height,
                        "margin-left": -n.width / 2,
                        "margin-top": -n.height / 2
                    }).appendTo(t("body")).addClass(n.animate)
                      , a = Math.max(t("body").width(), t(window).width())
                      , s = Math.max(t("body").height(), t(window).height());
                    n.mask && t('<div class="popup_mask"></div>').css({
                        width: a,
                        height: s
                    }).appendTo(t("body"));
                    var f = t('<div class="popContent"></div>').css("height", n.height).appendTo(o);
                    if (n.title) {
                        t('<div class="popTitle"><h3>' + n.title + "</h3></div>").appendTo(f);
                        t('<div class="popClose" title="关闭"></div>').appendTo(f).on("click", (function() {
                            n.onclose && n.onclose(o),
                            r.notice.close(n.animateOut),
                            n.reload && window.location.reload()
                        }
                        ))
                    }
                    var c = t('<div class="popInner"></div>').appendTo(f);
                    t('<div class="p ' + n.type + '">' + e + "</div>").appendTo(c);
                    if (0 == n.btn)
                        ;
                    else {
                        var h = t('<div class="pbtn"><span class="popCancel ' + n.cancelWClass + '">' + n.cancelW + '</span><span class="popConform">' + n.confirmW + "</span></div>").appendTo(c);
                        n.noCancelBtn && h.find(".popCancel").remove(),
                        h.on("click", ".popCancel", (function() {
                            r.notice._close(n.animateOut, (function() {
                                n.oncancel && n.oncancel(o)
                            }
                            ))
                        }
                        )).on("click", ".popConform", (function() {
                            n.callback && n.callback(o)
                        }
                        ))
                    }
                    n.oncomplete && n.oncomplete(o)
                },
                close: function() {
                    t(".popup").remove(),
                    t(".popup_mask").remove()
                },
                _close: function(e, r) {
                    t(".popup").addClass(e).delay(1e3).fadeOut(10, (function() {
                        t(".popup").empty().remove(),
                        r && r.call()
                    }
                    )),
                    t(".popup_mask").animate({
                        opacity: 0
                    }, 1e3, (function() {
                        t(".popup_mask").remove()
                    }
                    ))
                }
            },
            dialog: {
                open: function(e) {
                    r.notice.close();
                    var i = t.extend({
                        url: "",
                        width: 350,
                        height: 200,
                        mask: 1
                    }, e)
                      , n = t('<div class="popup dialog_popup"></div>').css({
                        width: i.width,
                        height: i.height,
                        "margin-left": -i.width / 2,
                        "margin-top": -i.height / 2
                    }).appendTo(t("body"))
                      , o = Math.max(t("body").width(), t(window).width())
                      , a = Math.max(t("body").height(), t(window).height());
                    i.mask && t('<div class="popup_mask"></div>').css({
                        width: o,
                        height: a
                    }).appendTo(t("body"));
                    var s = t('<div class="popContent"></div>').css("height", i.height).appendTo(n)
                      , f = t('<div class="popClose" title="关闭"></div>').appendTo(s);
                    t('<iframe frameborder="0" width="' + i.width + '" height="' + i.height + '" scrolling="no" ></iframe>').attr("src", i.url).appendTo(s),
                    f.on("click", (function() {
                        r.notice.close()
                    }
                    ))
                },
                close: function() {
                    t(".popup").empty().remove(),
                    t(".popup_mask").empty().remove()
                }
            },
            kick: function(e) {
                e = t.extend({
                    width: 450,
                    height: 200,
                    type: "notice",
                    title: "信息内容"
                }, e),
                _aLvl2.widgets.notice.show(e.title, {
                    width: e.width,
                    height: e.height,
                    type: e.type,
                    callback: function() {
                        webcfg.isKick = !0,
                        _aLvl2.pageLoad.pageloaded = !1,
                        _aLvl2.pageLoad._init("kick")
                    }
                })
            }
        }
          , i = {
            widgets: r
        };
        e.exports = i.widgets
    }(jQuery)
}
, function(e, t, r) {
    e.exports = r(34)
}
, , function(e, t, r) {
    var i = r(5)
      , n = r(25)
      , o = r(7)
      , a = r(16)
      , s = "[" + a + "]"
      , f = RegExp("^" + s + s + "*")
      , c = RegExp(s + s + "*$")
      , h = function(e, t, r) {
        var n = {}
          , s = o((function() {
            return !!a[e]() || "​" != "​"[e]()
        }
        ))
          , f = n[e] = s ? t(d) : a[e];
        r && (n[r] = f),
        i(i.P + i.F * s, "String", n)
    }
      , d = h.trim = function(e, t) {
        return e = String(n(e)),
        1 & t && (e = e.replace(f, "")),
        2 & t && (e = e.replace(c, "")),
        e
    }
    ;
    e.exports = h
}
, function(e, t, r) {
    "use strict";
    var i = r(8)(r(37))
      , n = {
        name: "Lang",
        version: 1,
        strLen: function(e) {
            return e.replace(/[^\x00-\xff]/g, "**").length
        },
        getUrlSearch: function(e, t) {
            var r = new RegExp("(^|&)" + t + "=([^&]*)(&|$)","i")
              , i = e.slice(e.indexOf("?") + 1).match(r);
            if (null != i)
                try {
                    return decodeURIComponent(i[2])
                } catch (e) {
                    return null
                }
            return null
        },
        formatTime: function(e, t, r) {
            var o, a, s;
            return e = +e,
            t ? (o = (0,
            i.default)() - e) < 0 ? (s = new Date(e),
            a = n.completeZero(s.getMonth() + 1) + "-" + n.completeZero(s.getDate()) + " " + n.completeZero(s.getHours()) + ":" + n.completeZero(s.getMinutes())) : o < 6e4 ? a = "一分钟内" : o < 36e5 ? a = (o / 60 / 1e3 | 0) + "分钟前" : o < 864e5 ? a = (o / 60 / 60 / 1e3 | 0) + "小时前" : (s = new Date(e),
            a = r ? n.completeZero(s.getMonth() + 1) + "-" + n.completeZero(s.getDate()) + " " + n.completeZero(s.getHours()) + ":" + n.completeZero(s.getMinutes()) : n.completeZero(s.getMonth() + 1) + "-" + n.completeZero(s.getDate())) : (s = new Date(e),
            a = r ? s.getFullYear() + "-" + n.completeZero(s.getMonth() + 1) + "-" + n.completeZero(s.getDate()) + " " + n.completeZero(s.getHours()) + ":" + n.completeZero(s.getMinutes()) + ":" + n.completeZero(s.getSeconds()) : s.getFullYear() + "-" + n.completeZero(s.getMonth() + 1) + "-" + n.completeZero(s.getDate())),
            a
        },
        completeZero: function(e, t) {
            var r = (e += "").length;
            return r < (t = t || 2) && (e = (Math.pow(10, t - r) + "").substring(1) + e),
            e
        },
        addUrlComponent: function(e, t, r) {
            var i = e.indexOf("#")
              , n = "";
            return i >= 0 && (n = e.substr(i),
            e = e.substr(0, i)),
            e + (e.indexOf("?") < 0 ? "?" : "&") + t + "=" + r + n
        },
        throttle: function(e, t, r) {
            var i, n = Array.prototype.slice.call(arguments, 3);
            return r = void 0 !== r ? r : 20,
            function() {
                t = t || this,
                clearTimeout(i),
                i = setTimeout((function() {
                    clearTimeout(i),
                    e.apply(t, n)
                }
                ), r)
            }
        },
        correctNum: function(e, t) {
            var r, i, n, o, a, s, f = t;
            return void 0 === t ? {
                num: e,
                str: e + ""
            } : (i = (r = Math.abs(+e)) * Math.pow(10, f) | 0,
            n = (r * Math.pow(10, f + 1) | 0) - 10 * i > 4 ? (i + 1) / Math.pow(10, f) : i / Math.pow(10, f),
            o = (n *= e < 0 ? -1 : 1) + "",
            f > 0 && ((a = o.indexOf(".")) < 0 ? (o += ".",
            s = f) : s = f - o.substring(a + 1).length,
            o += (Math.pow(10, s) + "").substring(1)),
            {
                num: n,
                str: o
            })
        },
        encodeDangerousCharacterToHTMLEntity: function(e) {
            try {
                return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/ /g, "&nbsp;").replace(/'/g, "&apos;").replace(/"/g, "&quot;")
            } catch (t) {
                throw new TypeError(e)
            }
        },
        removeProtocol: function(e) {
            if (!e)
                return e;
            try {
                return e.replace(/^http(|s):/, "")
            } catch (t) {
                return e
            }
        }
    };
    e.exports = n
}
, function(e, t, r) {}
, function(e, t) {
    function r(e, t) {
        if (!e)
            throw new Error(t || "Assertion failed")
    }
    e.exports = r,
    r.equal = function(e, t, r) {
        if (e != t)
            throw new Error(r || "Assertion failed: " + e + " != " + t)
    }
}
, function(e, t, r) {
    "use strict";
    var i = t
      , n = r(15)
      , o = r(32)
      , a = r(147);
    i.assert = o,
    i.toArray = a.toArray,
    i.zero2 = a.zero2,
    i.toHex = a.toHex,
    i.encode = a.encode,
    i.getNAF = function(e, t, r) {
        var i = new Array(Math.max(e.bitLength(), r) + 1);
        i.fill(0);
        for (var n = 1 << t + 1, o = e.clone(), a = 0; a < i.length; a++) {
            var s, f = o.andln(n - 1);
            o.isOdd() ? (s = f > (n >> 1) - 1 ? (n >> 1) - f : f,
            o.isubn(s)) : s = 0,
            i[a] = s,
            o.iushrn(1)
        }
        return i
    }
    ,
    i.getJSF = function(e, t) {
        var r = [[], []];
        e = e.clone(),
        t = t.clone();
        for (var i = 0, n = 0; e.cmpn(-i) > 0 || t.cmpn(-n) > 0; ) {
            var o, a, s, f = e.andln(3) + i & 3, c = t.andln(3) + n & 3;
            if (3 === f && (f = -1),
            3 === c && (c = -1),
            0 == (1 & f))
                o = 0;
            else
                o = 3 !== (s = e.andln(7) + i & 7) && 5 !== s || 2 !== c ? f : -f;
            if (r[0].push(o),
            0 == (1 & c))
                a = 0;
            else
                a = 3 !== (s = t.andln(7) + n & 7) && 5 !== s || 2 !== f ? c : -c;
            r[1].push(a),
            2 * i === o + 1 && (i = 1 - i),
            2 * n === a + 1 && (n = 1 - n),
            e.iushrn(1),
            t.iushrn(1)
        }
        return r
    }
    ,
    i.cachedProperty = function(e, t, r) {
        var i = "_" + t;
        e.prototype[t] = function() {
            return void 0 !== this[i] ? this[i] : this[i] = r.call(this)
        }
    }
    ,
    i.parseBytes = function(e) {
        return "string" == typeof e ? i.toArray(e, "hex") : e
    }
    ,
    i.intFromLE = function(e) {
        return new n(e,"hex","le")
    }
}
, function(e, t, r) {
    r(35),
    e.exports = r(1).parseInt
}
, function(e, t, r) {
    var i = r(5)
      , n = r(36);
    i(i.G + i.F * (parseInt != n), {
        parseInt: n
    })
}
, function(e, t, r) {
    var i = r(0).parseInt
      , n = r(29).trim
      , o = r(16)
      , a = /^[-+]?0[xX]/;
    e.exports = 8 !== i(o + "08") || 22 !== i(o + "0x16") ? function(e, t) {
        var r = n(String(e), 3);
        return i(r, t >>> 0 || (a.test(r) ? 16 : 10))
    }
    : i
}
, function(e, t, r) {
    e.exports = r(42)
}
, function(e, t) {
    var r;
    r = function() {
        return this
    }();
    try {
        r = r || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (r = window)
    }
    e.exports = r
}
, function(e, t, r) {
    "use strict";
    var i = r(32)
      , n = r(2);
    function o(e, t) {
        return 55296 == (64512 & e.charCodeAt(t)) && (!(t < 0 || t + 1 >= e.length) && 56320 == (64512 & e.charCodeAt(t + 1)))
    }
    function a(e) {
        return (e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (255 & e) << 24) >>> 0
    }
    function s(e) {
        return 1 === e.length ? "0" + e : e
    }
    function f(e) {
        return 7 === e.length ? "0" + e : 6 === e.length ? "00" + e : 5 === e.length ? "000" + e : 4 === e.length ? "0000" + e : 3 === e.length ? "00000" + e : 2 === e.length ? "000000" + e : 1 === e.length ? "0000000" + e : e
    }
    t.inherits = n,
    t.toArray = function(e, t) {
        if (Array.isArray(e))
            return e.slice();
        if (!e)
            return [];
        var r = [];
        if ("string" == typeof e)
            if (t) {
                if ("hex" === t)
                    for ((e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e),
                    n = 0; n < e.length; n += 2)
                        r.push(parseInt(e[n] + e[n + 1], 16))
            } else
                for (var i = 0, n = 0; n < e.length; n++) {
                    var a = e.charCodeAt(n);
                    a < 128 ? r[i++] = a : a < 2048 ? (r[i++] = a >> 6 | 192,
                    r[i++] = 63 & a | 128) : o(e, n) ? (a = 65536 + ((1023 & a) << 10) + (1023 & e.charCodeAt(++n)),
                    r[i++] = a >> 18 | 240,
                    r[i++] = a >> 12 & 63 | 128,
                    r[i++] = a >> 6 & 63 | 128,
                    r[i++] = 63 & a | 128) : (r[i++] = a >> 12 | 224,
                    r[i++] = a >> 6 & 63 | 128,
                    r[i++] = 63 & a | 128)
                }
        else
            for (n = 0; n < e.length; n++)
                r[n] = 0 | e[n];
        return r
    }
    ,
    t.toHex = function(e) {
        for (var t = "", r = 0; r < e.length; r++)
            t += s(e[r].toString(16));
        return t
    }
    ,
    t.htonl = a,
    t.toHex32 = function(e, t) {
        for (var r = "", i = 0; i < e.length; i++) {
            var n = e[i];
            "little" === t && (n = a(n)),
            r += f(n.toString(16))
        }
        return r
    }
    ,
    t.zero2 = s,
    t.zero8 = f,
    t.join32 = function(e, t, r, n) {
        var o = r - t;
        i(o % 4 == 0);
        for (var a = new Array(o / 4), s = 0, f = t; s < a.length; s++,
        f += 4) {
            var c;
            c = "big" === n ? e[f] << 24 | e[f + 1] << 16 | e[f + 2] << 8 | e[f + 3] : e[f + 3] << 24 | e[f + 2] << 16 | e[f + 1] << 8 | e[f],
            a[s] = c >>> 0
        }
        return a
    }
    ,
    t.split32 = function(e, t) {
        for (var r = new Array(4 * e.length), i = 0, n = 0; i < e.length; i++,
        n += 4) {
            var o = e[i];
            "big" === t ? (r[n] = o >>> 24,
            r[n + 1] = o >>> 16 & 255,
            r[n + 2] = o >>> 8 & 255,
            r[n + 3] = 255 & o) : (r[n + 3] = o >>> 24,
            r[n + 2] = o >>> 16 & 255,
            r[n + 1] = o >>> 8 & 255,
            r[n] = 255 & o)
        }
        return r
    }
    ,
    t.rotr32 = function(e, t) {
        return e >>> t | e << 32 - t
    }
    ,
    t.rotl32 = function(e, t) {
        return e << t | e >>> 32 - t
    }
    ,
    t.sum32 = function(e, t) {
        return e + t >>> 0
    }
    ,
    t.sum32_3 = function(e, t, r) {
        return e + t + r >>> 0
    }
    ,
    t.sum32_4 = function(e, t, r, i) {
        return e + t + r + i >>> 0
    }
    ,
    t.sum32_5 = function(e, t, r, i, n) {
        return e + t + r + i + n >>> 0
    }
    ,
    t.sum64 = function(e, t, r, i) {
        var n = e[t]
          , o = i + e[t + 1] >>> 0
          , a = (o < i ? 1 : 0) + r + n;
        e[t] = a >>> 0,
        e[t + 1] = o
    }
    ,
    t.sum64_hi = function(e, t, r, i) {
        return (t + i >>> 0 < t ? 1 : 0) + e + r >>> 0
    }
    ,
    t.sum64_lo = function(e, t, r, i) {
        return t + i >>> 0
    }
    ,
    t.sum64_4_hi = function(e, t, r, i, n, o, a, s) {
        var f = 0
          , c = t;
        return f += (c = c + i >>> 0) < t ? 1 : 0,
        f += (c = c + o >>> 0) < o ? 1 : 0,
        e + r + n + a + (f += (c = c + s >>> 0) < s ? 1 : 0) >>> 0
    }
    ,
    t.sum64_4_lo = function(e, t, r, i, n, o, a, s) {
        return t + i + o + s >>> 0
    }
    ,
    t.sum64_5_hi = function(e, t, r, i, n, o, a, s, f, c) {
        var h = 0
          , d = t;
        return h += (d = d + i >>> 0) < t ? 1 : 0,
        h += (d = d + o >>> 0) < o ? 1 : 0,
        h += (d = d + s >>> 0) < s ? 1 : 0,
        e + r + n + a + f + (h += (d = d + c >>> 0) < c ? 1 : 0) >>> 0
    }
    ,
    t.sum64_5_lo = function(e, t, r, i, n, o, a, s, f, c) {
        return t + i + o + s + c >>> 0
    }
    ,
    t.rotr64_hi = function(e, t, r) {
        return (t << 32 - r | e >>> r) >>> 0
    }
    ,
    t.rotr64_lo = function(e, t, r) {
        return (e << 32 - r | t >>> r) >>> 0
    }
    ,
    t.shr64_hi = function(e, t, r) {
        return e >>> r
    }
    ,
    t.shr64_lo = function(e, t, r) {
        return (e << 32 - r | t >>> r) >>> 0
    }
}
, function(e, t, r) {}
, function(e, t, r) {}
, function(e, t, r) {
    r(43),
    e.exports = r(1).Date.now
}
, function(e, t, r) {
    var i = r(5);
    i(i.S, "Date", {
        now: function() {
            return (new Date).getTime()
        }
    })
}
, , function(e, t) {
    var r, i, n = e.exports = {};
    function o() {
        throw new Error("setTimeout has not been defined")
    }
    function a() {
        throw new Error("clearTimeout has not been defined")
    }
    function s(e) {
        if (r === setTimeout)
            return setTimeout(e, 0);
        if ((r === o || !r) && setTimeout)
            return r = setTimeout,
            setTimeout(e, 0);
        try {
            return r(e, 0)
        } catch (t) {
            try {
                return r.call(null, e, 0)
            } catch (t) {
                return r.call(this, e, 0)
            }
        }
    }
    !function() {
        try {
            r = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
            r = o
        }
        try {
            i = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            i = a
        }
    }();
    var f, c = [], h = !1, d = -1;
    function u() {
        h && f && (h = !1,
        f.length ? c = f.concat(c) : d = -1,
        c.length && l())
    }
    function l() {
        if (!h) {
            var e = s(u);
            h = !0;
            for (var t = c.length; t; ) {
                for (f = c,
                c = []; ++d < t; )
                    f && f[d].run();
                d = -1,
                t = c.length
            }
            f = null,
            h = !1,
            function(e) {
                if (i === clearTimeout)
                    return clearTimeout(e);
                if ((i === a || !i) && clearTimeout)
                    return i = clearTimeout,
                    clearTimeout(e);
                try {
                    i(e)
                } catch (t) {
                    try {
                        return i.call(null, e)
                    } catch (t) {
                        return i.call(this, e)
                    }
                }
            }(e)
        }
    }
    function p(e, t) {
        this.fun = e,
        this.array = t
    }
    function b() {}
    n.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var r = 1; r < arguments.length; r++)
                t[r - 1] = arguments[r];
        c.push(new p(e,t)),
        1 !== c.length || h || s(l)
    }
    ,
    p.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    n.title = "browser",
    n.browser = !0,
    n.env = {},
    n.argv = [],
    n.version = "",
    n.versions = {},
    n.on = b,
    n.addListener = b,
    n.once = b,
    n.off = b,
    n.removeListener = b,
    n.removeAllListeners = b,
    n.emit = b,
    n.prependListener = b,
    n.prependOnceListener = b,
    n.listeners = function(e) {
        return []
    }
    ,
    n.binding = function(e) {
        throw new Error("process.binding is not supported")
    }
    ,
    n.cwd = function() {
        return "/"
    }
    ,
    n.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }
    ,
    n.umask = function() {
        return 0
    }
}
, function(e, t, r) {
    var i = r(4).Buffer
      , n = r(88).Transform
      , o = r(92).StringDecoder;
    function a(e) {
        n.call(this),
        this.hashMode = "string" == typeof e,
        this.hashMode ? this[e] = this._finalOrDigest : this.final = this._finalOrDigest,
        this._final && (this.__final = this._final,
        this._final = null),
        this._decoder = null,
        this._encoding = null
    }
    r(2)(a, n),
    a.prototype.update = function(e, t, r) {
        "string" == typeof e && (e = i.from(e, t));
        var n = this._update(e);
        return this.hashMode ? this : (r && (n = this._toString(n, r)),
        n)
    }
    ,
    a.prototype.setAutoPadding = function() {}
    ,
    a.prototype.getAuthTag = function() {
        throw new Error("trying to get auth tag in unsupported state")
    }
    ,
    a.prototype.setAuthTag = function() {
        throw new Error("trying to set auth tag in unsupported state")
    }
    ,
    a.prototype.setAAD = function() {
        throw new Error("trying to set aad in unsupported state")
    }
    ,
    a.prototype._transform = function(e, t, r) {
        var i;
        try {
            this.hashMode ? this._update(e) : this.push(this._update(e))
        } catch (e) {
            i = e
        } finally {
            r(i)
        }
    }
    ,
    a.prototype._flush = function(e) {
        var t;
        try {
            this.push(this.__final())
        } catch (e) {
            t = e
        }
        e(t)
    }
    ,
    a.prototype._finalOrDigest = function(e) {
        var t = this.__final() || i.alloc(0);
        return e && (t = this._toString(t, e, !0)),
        t
    }
    ,
    a.prototype._toString = function(e, t, r) {
        if (this._decoder || (this._decoder = new o(t),
        this._encoding = t),
        this._encoding !== t)
            throw new Error("can't switch encodings");
        var i = this._decoder.write(e);
        return r && (i += this._decoder.end()),
        i
    }
    ,
    e.exports = a
}
, , function(e, t, r) {
    "use strict";
    var i = r(71)
      , n = Object.keys || function(e) {
        var t = [];
        for (var r in e)
            t.push(r);
        return t
    }
    ;
    e.exports = d;
    var o = r(60);
    o.inherits = r(2);
    var a = r(125)
      , s = r(91);
    o.inherits(d, a);
    for (var f = n(s.prototype), c = 0; c < f.length; c++) {
        var h = f[c];
        d.prototype[h] || (d.prototype[h] = s.prototype[h])
    }
    function d(e) {
        if (!(this instanceof d))
            return new d(e);
        a.call(this, e),
        s.call(this, e),
        e && !1 === e.readable && (this.readable = !1),
        e && !1 === e.writable && (this.writable = !1),
        this.allowHalfOpen = !0,
        e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
        this.once("end", u)
    }
    function u() {
        this.allowHalfOpen || this._writableState.ended || i.nextTick(l, this)
    }
    function l(e) {
        e.end()
    }
    Object.defineProperty(d.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._writableState.highWaterMark
        }
    }),
    Object.defineProperty(d.prototype, "destroyed", {
        get: function() {
            return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
        },
        set: function(e) {
            void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e,
            this._writableState.destroyed = e)
        }
    }),
    d.prototype._destroy = function(e, t) {
        this.push(null),
        this.end(),
        i.nextTick(t, e)
    }
}
, , , , function(e, t, r) {
    "use strict";
    (function(t, i) {
        var n = 65536
          , o = 4294967295;
        var a = r(4).Buffer
          , s = t.crypto || t.msCrypto;
        s && s.getRandomValues ? e.exports = function(e, t) {
            if (e > o)
                throw new RangeError("requested too many random bytes");
            var r = a.allocUnsafe(e);
            if (e > 0)
                if (e > n)
                    for (var f = 0; f < e; f += n)
                        s.getRandomValues(r.slice(f, f + n));
                else
                    s.getRandomValues(r);
            if ("function" == typeof t)
                return i.nextTick((function() {
                    t(null, r)
                }
                ));
            return r
        }
        : e.exports = function() {
            throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")
        }
    }
    ).call(this, r(38), r(45))
}
, function(e, t, r) {
    var i = r(4).Buffer;
    function n(e, t) {
        this._block = i.alloc(e),
        this._finalSize = t,
        this._blockSize = e,
        this._len = 0
    }
    n.prototype.update = function(e, t) {
        "string" == typeof e && (t = t || "utf8",
        e = i.from(e, t));
        for (var r = this._block, n = this._blockSize, o = e.length, a = this._len, s = 0; s < o; ) {
            for (var f = a % n, c = Math.min(o - s, n - f), h = 0; h < c; h++)
                r[f + h] = e[s + h];
            s += c,
            (a += c) % n == 0 && this._update(r)
        }
        return this._len += o,
        this
    }
    ,
    n.prototype.digest = function(e) {
        var t = this._len % this._blockSize;
        this._block[t] = 128,
        this._block.fill(0, t + 1),
        t >= this._finalSize && (this._update(this._block),
        this._block.fill(0));
        var r = 8 * this._len;
        if (r <= 4294967295)
            this._block.writeUInt32BE(r, this._blockSize - 4);
        else {
            var i = (4294967295 & r) >>> 0
              , n = (r - i) / 4294967296;
            this._block.writeUInt32BE(n, this._blockSize - 8),
            this._block.writeUInt32BE(i, this._blockSize - 4)
        }
        this._update(this._block);
        var o = this._hash();
        return e ? o.toString(e) : o
    }
    ,
    n.prototype._update = function() {
        throw new Error("_update must be implemented by subclass")
    }
    ,
    e.exports = n
}
, , , function(e, t, r) {
    "use strict";
    r(57);
    var i = r(58);
    e.exports = {
        init: function(e, t) {
            $(window).on("scroll", i({
                fn: function(e, t) {
                    var r = $(".load-more");
                    e.length && "none" != r.css("display") && $(window).scrollTop() + window.innerHeight - (e.offset().top + e.height()) > 30 && t && "function" == typeof t && t()
                }
                .bind(this, e, t),
                context: null,
                delay: 300,
                mustRunDelay: null
            }))
        }
    }
}
, function(e, t, r) {}
, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        var t, r = null, i = e.fn, n = e.context, o = e.delay || 300, a = e.mustRunDelay;
        return function() {
            var e = arguments
              , s = +new Date;
            n = n || this,
            clearTimeout(r),
            t || (t = s),
            a && s - t >= a ? (i.apply(n, e),
            t = s) : r = setTimeout((function() {
                i.apply(n, e)
            }
            ), o)
        }
    }
}
, function(e, t, r) {
    "use strict";
    var i = r(2)
      , n = r(87)
      , o = r(93)
      , a = r(94)
      , s = r(46);
    function f(e) {
        s.call(this, "digest"),
        this._hash = e
    }
    i(f, s),
    f.prototype._update = function(e) {
        this._hash.update(e)
    }
    ,
    f.prototype._final = function() {
        return this._hash.digest()
    }
    ,
    e.exports = function(e) {
        return "md5" === (e = e.toLowerCase()) ? new n : "rmd160" === e || "ripemd160" === e ? new o : new f(a(e))
    }
}
, function(e, t, r) {
    (function(e) {
        function r(e) {
            return Object.prototype.toString.call(e)
        }
        t.isArray = function(e) {
            return Array.isArray ? Array.isArray(e) : "[object Array]" === r(e)
        }
        ,
        t.isBoolean = function(e) {
            return "boolean" == typeof e
        }
        ,
        t.isNull = function(e) {
            return null === e
        }
        ,
        t.isNullOrUndefined = function(e) {
            return null == e
        }
        ,
        t.isNumber = function(e) {
            return "number" == typeof e
        }
        ,
        t.isString = function(e) {
            return "string" == typeof e
        }
        ,
        t.isSymbol = function(e) {
            return "symbol" == typeof e
        }
        ,
        t.isUndefined = function(e) {
            return void 0 === e
        }
        ,
        t.isRegExp = function(e) {
            return "[object RegExp]" === r(e)
        }
        ,
        t.isObject = function(e) {
            return "object" == typeof e && null !== e
        }
        ,
        t.isDate = function(e) {
            return "[object Date]" === r(e)
        }
        ,
        t.isError = function(e) {
            return "[object Error]" === r(e) || e instanceof Error
        }
        ,
        t.isFunction = function(e) {
            return "function" == typeof e
        }
        ,
        t.isPrimitive = function(e) {
            return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
        }
        ,
        t.isBuffer = e.isBuffer
    }
    ).call(this, r(20).Buffer)
}
, function(e, t, r) {
    (function(t) {
        e.exports = function(e, r) {
            for (var i = Math.min(e.length, r.length), n = new t(i), o = 0; o < i; ++o)
                n[o] = e[o] ^ r[o];
            return n
        }
    }
    ).call(this, r(20).Buffer)
}
, function(e, t, r) {
    "use strict";
    var i = r(39)
      , n = r(32);
    function o() {
        this.pending = null,
        this.pendingTotal = 0,
        this.blockSize = this.constructor.blockSize,
        this.outSize = this.constructor.outSize,
        this.hmacStrength = this.constructor.hmacStrength,
        this.padLength = this.constructor.padLength / 8,
        this.endian = "big",
        this._delta8 = this.blockSize / 8,
        this._delta32 = this.blockSize / 32
    }
    t.BlockHash = o,
    o.prototype.update = function(e, t) {
        if (e = i.toArray(e, t),
        this.pending ? this.pending = this.pending.concat(e) : this.pending = e,
        this.pendingTotal += e.length,
        this.pending.length >= this._delta8) {
            var r = (e = this.pending).length % this._delta8;
            this.pending = e.slice(e.length - r, e.length),
            0 === this.pending.length && (this.pending = null),
            e = i.join32(e, 0, e.length - r, this.endian);
            for (var n = 0; n < e.length; n += this._delta32)
                this._update(e, n, n + this._delta32)
        }
        return this
    }
    ,
    o.prototype.digest = function(e) {
        return this.update(this._pad()),
        n(null === this.pending),
        this._digest(e)
    }
    ,
    o.prototype._pad = function() {
        var e = this.pendingTotal
          , t = this._delta8
          , r = t - (e + this.padLength) % t
          , i = new Array(r + this.padLength);
        i[0] = 128;
        for (var n = 1; n < r; n++)
            i[n] = 0;
        if (e <<= 3,
        "big" === this.endian) {
            for (var o = 8; o < this.padLength; o++)
                i[n++] = 0;
            i[n++] = 0,
            i[n++] = 0,
            i[n++] = 0,
            i[n++] = 0,
            i[n++] = e >>> 24 & 255,
            i[n++] = e >>> 16 & 255,
            i[n++] = e >>> 8 & 255,
            i[n++] = 255 & e
        } else
            for (i[n++] = 255 & e,
            i[n++] = e >>> 8 & 255,
            i[n++] = e >>> 16 & 255,
            i[n++] = e >>> 24 & 255,
            i[n++] = 0,
            i[n++] = 0,
            i[n++] = 0,
            i[n++] = 0,
            o = 8; o < this.padLength; o++)
                i[n++] = 0;
        return i
    }
}
, function(e, t, r) {
    var i = t;
    i.bignum = r(15),
    i.define = r(283).define,
    i.base = r(64),
    i.constants = r(153),
    i.decoders = r(288),
    i.encoders = r(290)
}
, function(e, t, r) {
    var i = t;
    i.Reporter = r(285).Reporter,
    i.DecoderBuffer = r(152).DecoderBuffer,
    i.EncoderBuffer = r(152).EncoderBuffer,
    i.Node = r(286)
}
, , , , , , , function(e, t, r) {
    "use strict";
    (function(t) {
        void 0 === t || !t.version || 0 === t.version.indexOf("v0.") || 0 === t.version.indexOf("v1.") && 0 !== t.version.indexOf("v1.8.") ? e.exports = {
            nextTick: function(e, r, i, n) {
                if ("function" != typeof e)
                    throw new TypeError('"callback" argument must be a function');
                var o, a, s = arguments.length;
                switch (s) {
                case 0:
                case 1:
                    return t.nextTick(e);
                case 2:
                    return t.nextTick((function() {
                        e.call(null, r)
                    }
                    ));
                case 3:
                    return t.nextTick((function() {
                        e.call(null, r, i)
                    }
                    ));
                case 4:
                    return t.nextTick((function() {
                        e.call(null, r, i, n)
                    }
                    ));
                default:
                    for (o = new Array(s - 1),
                    a = 0; a < o.length; )
                        o[a++] = arguments[a];
                    return t.nextTick((function() {
                        e.apply(null, o)
                    }
                    ))
                }
            }
        } : e.exports = t
    }
    ).call(this, r(45))
}
, function(e, t, r) {
    var i = r(4).Buffer;
    function n(e) {
        i.isBuffer(e) || (e = i.from(e));
        for (var t = e.length / 4 | 0, r = new Array(t), n = 0; n < t; n++)
            r[n] = e.readUInt32BE(4 * n);
        return r
    }
    function o(e) {
        for (; 0 < e.length; e++)
            e[0] = 0
    }
    function a(e, t, r, i, n) {
        for (var o, a, s, f, c = r[0], h = r[1], d = r[2], u = r[3], l = e[0] ^ t[0], p = e[1] ^ t[1], b = e[2] ^ t[2], m = e[3] ^ t[3], y = 4, g = 1; g < n; g++)
            o = c[l >>> 24] ^ h[p >>> 16 & 255] ^ d[b >>> 8 & 255] ^ u[255 & m] ^ t[y++],
            a = c[p >>> 24] ^ h[b >>> 16 & 255] ^ d[m >>> 8 & 255] ^ u[255 & l] ^ t[y++],
            s = c[b >>> 24] ^ h[m >>> 16 & 255] ^ d[l >>> 8 & 255] ^ u[255 & p] ^ t[y++],
            f = c[m >>> 24] ^ h[l >>> 16 & 255] ^ d[p >>> 8 & 255] ^ u[255 & b] ^ t[y++],
            l = o,
            p = a,
            b = s,
            m = f;
        return o = (i[l >>> 24] << 24 | i[p >>> 16 & 255] << 16 | i[b >>> 8 & 255] << 8 | i[255 & m]) ^ t[y++],
        a = (i[p >>> 24] << 24 | i[b >>> 16 & 255] << 16 | i[m >>> 8 & 255] << 8 | i[255 & l]) ^ t[y++],
        s = (i[b >>> 24] << 24 | i[m >>> 16 & 255] << 16 | i[l >>> 8 & 255] << 8 | i[255 & p]) ^ t[y++],
        f = (i[m >>> 24] << 24 | i[l >>> 16 & 255] << 16 | i[p >>> 8 & 255] << 8 | i[255 & b]) ^ t[y++],
        [o >>>= 0, a >>>= 0, s >>>= 0, f >>>= 0]
    }
    var s = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
      , f = function() {
        for (var e = new Array(256), t = 0; t < 256; t++)
            e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
        for (var r = [], i = [], n = [[], [], [], []], o = [[], [], [], []], a = 0, s = 0, f = 0; f < 256; ++f) {
            var c = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4;
            c = c >>> 8 ^ 255 & c ^ 99,
            r[a] = c,
            i[c] = a;
            var h = e[a]
              , d = e[h]
              , u = e[d]
              , l = 257 * e[c] ^ 16843008 * c;
            n[0][a] = l << 24 | l >>> 8,
            n[1][a] = l << 16 | l >>> 16,
            n[2][a] = l << 8 | l >>> 24,
            n[3][a] = l,
            l = 16843009 * u ^ 65537 * d ^ 257 * h ^ 16843008 * a,
            o[0][c] = l << 24 | l >>> 8,
            o[1][c] = l << 16 | l >>> 16,
            o[2][c] = l << 8 | l >>> 24,
            o[3][c] = l,
            0 === a ? a = s = 1 : (a = h ^ e[e[e[u ^ h]]],
            s ^= e[e[s]])
        }
        return {
            SBOX: r,
            INV_SBOX: i,
            SUB_MIX: n,
            INV_SUB_MIX: o
        }
    }();
    function c(e) {
        this._key = n(e),
        this._reset()
    }
    c.blockSize = 16,
    c.keySize = 32,
    c.prototype.blockSize = c.blockSize,
    c.prototype.keySize = c.keySize,
    c.prototype._reset = function() {
        for (var e = this._key, t = e.length, r = t + 6, i = 4 * (r + 1), n = [], o = 0; o < t; o++)
            n[o] = e[o];
        for (o = t; o < i; o++) {
            var a = n[o - 1];
            o % t == 0 ? (a = a << 8 | a >>> 24,
            a = f.SBOX[a >>> 24] << 24 | f.SBOX[a >>> 16 & 255] << 16 | f.SBOX[a >>> 8 & 255] << 8 | f.SBOX[255 & a],
            a ^= s[o / t | 0] << 24) : t > 6 && o % t == 4 && (a = f.SBOX[a >>> 24] << 24 | f.SBOX[a >>> 16 & 255] << 16 | f.SBOX[a >>> 8 & 255] << 8 | f.SBOX[255 & a]),
            n[o] = n[o - t] ^ a
        }
        for (var c = [], h = 0; h < i; h++) {
            var d = i - h
              , u = n[d - (h % 4 ? 0 : 4)];
            c[h] = h < 4 || d <= 4 ? u : f.INV_SUB_MIX[0][f.SBOX[u >>> 24]] ^ f.INV_SUB_MIX[1][f.SBOX[u >>> 16 & 255]] ^ f.INV_SUB_MIX[2][f.SBOX[u >>> 8 & 255]] ^ f.INV_SUB_MIX[3][f.SBOX[255 & u]]
        }
        this._nRounds = r,
        this._keySchedule = n,
        this._invKeySchedule = c
    }
    ,
    c.prototype.encryptBlockRaw = function(e) {
        return a(e = n(e), this._keySchedule, f.SUB_MIX, f.SBOX, this._nRounds)
    }
    ,
    c.prototype.encryptBlock = function(e) {
        var t = this.encryptBlockRaw(e)
          , r = i.allocUnsafe(16);
        return r.writeUInt32BE(t[0], 0),
        r.writeUInt32BE(t[1], 4),
        r.writeUInt32BE(t[2], 8),
        r.writeUInt32BE(t[3], 12),
        r
    }
    ,
    c.prototype.decryptBlock = function(e) {
        var t = (e = n(e))[1];
        e[1] = e[3],
        e[3] = t;
        var r = a(e, this._invKeySchedule, f.INV_SUB_MIX, f.INV_SBOX, this._nRounds)
          , o = i.allocUnsafe(16);
        return o.writeUInt32BE(r[0], 0),
        o.writeUInt32BE(r[3], 4),
        o.writeUInt32BE(r[2], 8),
        o.writeUInt32BE(r[1], 12),
        o
    }
    ,
    c.prototype.scrub = function() {
        o(this._keySchedule),
        o(this._invKeySchedule),
        o(this._key)
    }
    ,
    e.exports.AES = c
}
, function(e, t, r) {
    var i = r(4).Buffer
      , n = r(87);
    e.exports = function(e, t, r, o) {
        if (i.isBuffer(e) || (e = i.from(e, "binary")),
        t && (i.isBuffer(t) || (t = i.from(t, "binary")),
        8 !== t.length))
            throw new RangeError("salt should be Buffer with 8 byte length");
        for (var a = r / 8, s = i.alloc(a), f = i.alloc(o || 0), c = i.alloc(0); a > 0 || o > 0; ) {
            var h = new n;
            h.update(c),
            h.update(e),
            t && h.update(t),
            c = h.digest();
            var d = 0;
            if (a > 0) {
                var u = s.length - a;
                d = Math.min(a, c.length),
                c.copy(s, u, 0, d),
                a -= d
            }
            if (d < c.length && o > 0) {
                var l = f.length - o
                  , p = Math.min(o, c.length - d);
                c.copy(f, l, d, d + p),
                o -= p
            }
        }
        return c.fill(0),
        {
            key: s,
            iv: f
        }
    }
}
, function(e, t, r) {
    "use strict";
    var i = r(15)
      , n = r(33)
      , o = n.getNAF
      , a = n.getJSF
      , s = n.assert;
    function f(e, t) {
        this.type = e,
        this.p = new i(t.p,16),
        this.red = t.prime ? i.red(t.prime) : i.mont(this.p),
        this.zero = new i(0).toRed(this.red),
        this.one = new i(1).toRed(this.red),
        this.two = new i(2).toRed(this.red),
        this.n = t.n && new i(t.n,16),
        this.g = t.g && this.pointFromJSON(t.g, t.gRed),
        this._wnafT1 = new Array(4),
        this._wnafT2 = new Array(4),
        this._wnafT3 = new Array(4),
        this._wnafT4 = new Array(4),
        this._bitLength = this.n ? this.n.bitLength() : 0;
        var r = this.n && this.p.div(this.n);
        !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0,
        this.redN = this.n.toRed(this.red))
    }
    function c(e, t) {
        this.curve = e,
        this.type = t,
        this.precomputed = null
    }
    e.exports = f,
    f.prototype.point = function() {
        throw new Error("Not implemented")
    }
    ,
    f.prototype.validate = function() {
        throw new Error("Not implemented")
    }
    ,
    f.prototype._fixedNafMul = function(e, t) {
        s(e.precomputed);
        var r = e._getDoubles()
          , i = o(t, 1, this._bitLength)
          , n = (1 << r.step + 1) - (r.step % 2 == 0 ? 2 : 1);
        n /= 3;
        for (var a = [], f = 0; f < i.length; f += r.step) {
            var c = 0;
            for (t = f + r.step - 1; t >= f; t--)
                c = (c << 1) + i[t];
            a.push(c)
        }
        for (var h = this.jpoint(null, null, null), d = this.jpoint(null, null, null), u = n; u > 0; u--) {
            for (f = 0; f < a.length; f++) {
                (c = a[f]) === u ? d = d.mixedAdd(r.points[f]) : c === -u && (d = d.mixedAdd(r.points[f].neg()))
            }
            h = h.add(d)
        }
        return h.toP()
    }
    ,
    f.prototype._wnafMul = function(e, t) {
        var r = 4
          , i = e._getNAFPoints(r);
        r = i.wnd;
        for (var n = i.points, a = o(t, r, this._bitLength), f = this.jpoint(null, null, null), c = a.length - 1; c >= 0; c--) {
            for (t = 0; c >= 0 && 0 === a[c]; c--)
                t++;
            if (c >= 0 && t++,
            f = f.dblp(t),
            c < 0)
                break;
            var h = a[c];
            s(0 !== h),
            f = "affine" === e.type ? h > 0 ? f.mixedAdd(n[h - 1 >> 1]) : f.mixedAdd(n[-h - 1 >> 1].neg()) : h > 0 ? f.add(n[h - 1 >> 1]) : f.add(n[-h - 1 >> 1].neg())
        }
        return "affine" === e.type ? f.toP() : f
    }
    ,
    f.prototype._wnafMulAdd = function(e, t, r, i, n) {
        for (var s = this._wnafT1, f = this._wnafT2, c = this._wnafT3, h = 0, d = 0; d < i; d++) {
            var u = (k = t[d])._getNAFPoints(e);
            s[d] = u.wnd,
            f[d] = u.points
        }
        for (d = i - 1; d >= 1; d -= 2) {
            var l = d - 1
              , p = d;
            if (1 === s[l] && 1 === s[p]) {
                var b = [t[l], null, null, t[p]];
                0 === t[l].y.cmp(t[p].y) ? (b[1] = t[l].add(t[p]),
                b[2] = t[l].toJ().mixedAdd(t[p].neg())) : 0 === t[l].y.cmp(t[p].y.redNeg()) ? (b[1] = t[l].toJ().mixedAdd(t[p]),
                b[2] = t[l].add(t[p].neg())) : (b[1] = t[l].toJ().mixedAdd(t[p]),
                b[2] = t[l].toJ().mixedAdd(t[p].neg()));
                var m = [-3, -1, -5, -7, 0, 7, 5, 1, 3]
                  , y = a(r[l], r[p]);
                h = Math.max(y[0].length, h),
                c[l] = new Array(h),
                c[p] = new Array(h);
                for (var g = 0; g < h; g++) {
                    var v = 0 | y[0][g]
                      , _ = 0 | y[1][g];
                    c[l][g] = m[3 * (v + 1) + (_ + 1)],
                    c[p][g] = 0,
                    f[l] = b
                }
            } else
                c[l] = o(r[l], s[l], this._bitLength),
                c[p] = o(r[p], s[p], this._bitLength),
                h = Math.max(c[l].length, h),
                h = Math.max(c[p].length, h)
        }
        var w = this.jpoint(null, null, null)
          , S = this._wnafT4;
        for (d = h; d >= 0; d--) {
            for (var M = 0; d >= 0; ) {
                var E = !0;
                for (g = 0; g < i; g++)
                    S[g] = 0 | c[g][d],
                    0 !== S[g] && (E = !1);
                if (!E)
                    break;
                M++,
                d--
            }
            if (d >= 0 && M++,
            w = w.dblp(M),
            d < 0)
                break;
            for (g = 0; g < i; g++) {
                var k, A = S[g];
                0 !== A && (A > 0 ? k = f[g][A - 1 >> 1] : A < 0 && (k = f[g][-A - 1 >> 1].neg()),
                w = "affine" === k.type ? w.mixedAdd(k) : w.add(k))
            }
        }
        for (d = 0; d < i; d++)
            f[d] = null;
        return n ? w : w.toP()
    }
    ,
    f.BasePoint = c,
    c.prototype.eq = function() {
        throw new Error("Not implemented")
    }
    ,
    c.prototype.validate = function() {
        return this.curve.validate(this)
    }
    ,
    f.prototype.decodePoint = function(e, t) {
        e = n.toArray(e, t);
        var r = this.p.byteLength();
        if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * r)
            return 6 === e[0] ? s(e[e.length - 1] % 2 == 0) : 7 === e[0] && s(e[e.length - 1] % 2 == 1),
            this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r));
        if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r)
            return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
        throw new Error("Unknown point format")
    }
    ,
    c.prototype.encodeCompressed = function(e) {
        return this.encode(e, !0)
    }
    ,
    c.prototype._encode = function(e) {
        var t = this.curve.p.byteLength()
          , r = this.getX().toArray("be", t);
        return e ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", t))
    }
    ,
    c.prototype.encode = function(e, t) {
        return n.encode(this._encode(t), e)
    }
    ,
    c.prototype.precompute = function(e) {
        if (this.precomputed)
            return this;
        var t = {
            doubles: null,
            naf: null,
            beta: null
        };
        return t.naf = this._getNAFPoints(8),
        t.doubles = this._getDoubles(4, e),
        t.beta = this._getBeta(),
        this.precomputed = t,
        this
    }
    ,
    c.prototype._hasDoubles = function(e) {
        if (!this.precomputed)
            return !1;
        var t = this.precomputed.doubles;
        return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
    }
    ,
    c.prototype._getDoubles = function(e, t) {
        if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles;
        for (var r = [this], i = this, n = 0; n < t; n += e) {
            for (var o = 0; o < e; o++)
                i = i.dbl();
            r.push(i)
        }
        return {
            step: e,
            points: r
        }
    }
    ,
    c.prototype._getNAFPoints = function(e) {
        if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf;
        for (var t = [this], r = (1 << e) - 1, i = 1 === r ? null : this.dbl(), n = 1; n < r; n++)
            t[n] = t[n - 1].add(i);
        return {
            wnd: e,
            points: t
        }
    }
    ,
    c.prototype._getBeta = function() {
        return null
    }
    ,
    c.prototype.dblp = function(e) {
        for (var t = this, r = 0; r < e; r++)
            t = t.dbl();
        return t
    }
}
, function(e, t, r) {
    var i = r(282)
      , n = r(293)
      , o = r(294)
      , a = r(96)
      , s = r(134)
      , f = r(4).Buffer;
    function c(e) {
        var t;
        "object" != typeof e || f.isBuffer(e) || (t = e.passphrase,
        e = e.key),
        "string" == typeof e && (e = f.from(e));
        var r, c, h = o(e, t), d = h.tag, u = h.data;
        switch (d) {
        case "CERTIFICATE":
            c = i.certificate.decode(u, "der").tbsCertificate.subjectPublicKeyInfo;
        case "PUBLIC KEY":
            switch (c || (c = i.PublicKey.decode(u, "der")),
            r = c.algorithm.algorithm.join(".")) {
            case "1.2.840.113549.1.1.1":
                return i.RSAPublicKey.decode(c.subjectPublicKey.data, "der");
            case "1.2.840.10045.2.1":
                return c.subjectPrivateKey = c.subjectPublicKey,
                {
                    type: "ec",
                    data: c
                };
            case "1.2.840.10040.4.1":
                return c.algorithm.params.pub_key = i.DSAparam.decode(c.subjectPublicKey.data, "der"),
                {
                    type: "dsa",
                    data: c.algorithm.params
                };
            default:
                throw new Error("unknown key id " + r)
            }
            throw new Error("unknown key type " + d);
        case "ENCRYPTED PRIVATE KEY":
            u = function(e, t) {
                var r = e.algorithm.decrypt.kde.kdeparams.salt
                  , i = parseInt(e.algorithm.decrypt.kde.kdeparams.iters.toString(), 10)
                  , o = n[e.algorithm.decrypt.cipher.algo.join(".")]
                  , c = e.algorithm.decrypt.cipher.iv
                  , h = e.subjectPrivateKey
                  , d = parseInt(o.split("-")[1], 10) / 8
                  , u = s.pbkdf2Sync(t, r, i, d, "sha1")
                  , l = a.createDecipheriv(o, u, c)
                  , p = [];
                return p.push(l.update(h)),
                p.push(l.final()),
                f.concat(p)
            }(u = i.EncryptedPrivateKey.decode(u, "der"), t);
        case "PRIVATE KEY":
            switch (r = (c = i.PrivateKey.decode(u, "der")).algorithm.algorithm.join(".")) {
            case "1.2.840.113549.1.1.1":
                return i.RSAPrivateKey.decode(c.subjectPrivateKey, "der");
            case "1.2.840.10045.2.1":
                return {
                    curve: c.algorithm.curve,
                    privateKey: i.ECPrivateKey.decode(c.subjectPrivateKey, "der").privateKey
                };
            case "1.2.840.10040.4.1":
                return c.algorithm.params.priv_key = i.DSAparam.decode(c.subjectPrivateKey, "der"),
                {
                    type: "dsa",
                    params: c.algorithm.params
                };
            default:
                throw new Error("unknown key id " + r)
            }
            throw new Error("unknown key type " + d);
        case "RSA PUBLIC KEY":
            return i.RSAPublicKey.decode(u, "der");
        case "RSA PRIVATE KEY":
            return i.RSAPrivateKey.decode(u, "der");
        case "DSA PRIVATE KEY":
            return {
                type: "dsa",
                params: i.DSAPrivateKey.decode(u, "der")
            };
        case "EC PRIVATE KEY":
            return {
                curve: (u = i.ECPrivateKey.decode(u, "der")).parameters.value,
                privateKey: u.privateKey
            };
        default:
            throw new Error("unknown key type " + d)
        }
    }
    e.exports = c,
    c.signature = i.signature
}
, , , , , , , , , , , , function(e, t, r) {
    "use strict";
    var i = r(2)
      , n = r(124)
      , o = r(4).Buffer
      , a = new Array(16);
    function s() {
        n.call(this, 64),
        this._a = 1732584193,
        this._b = 4023233417,
        this._c = 2562383102,
        this._d = 271733878
    }
    function f(e, t) {
        return e << t | e >>> 32 - t
    }
    function c(e, t, r, i, n, o, a) {
        return f(e + (t & r | ~t & i) + n + o | 0, a) + t | 0
    }
    function h(e, t, r, i, n, o, a) {
        return f(e + (t & i | r & ~i) + n + o | 0, a) + t | 0
    }
    function d(e, t, r, i, n, o, a) {
        return f(e + (t ^ r ^ i) + n + o | 0, a) + t | 0
    }
    function u(e, t, r, i, n, o, a) {
        return f(e + (r ^ (t | ~i)) + n + o | 0, a) + t | 0
    }
    i(s, n),
    s.prototype._update = function() {
        for (var e = a, t = 0; t < 16; ++t)
            e[t] = this._block.readInt32LE(4 * t);
        var r = this._a
          , i = this._b
          , n = this._c
          , o = this._d;
        r = c(r, i, n, o, e[0], 3614090360, 7),
        o = c(o, r, i, n, e[1], 3905402710, 12),
        n = c(n, o, r, i, e[2], 606105819, 17),
        i = c(i, n, o, r, e[3], 3250441966, 22),
        r = c(r, i, n, o, e[4], 4118548399, 7),
        o = c(o, r, i, n, e[5], 1200080426, 12),
        n = c(n, o, r, i, e[6], 2821735955, 17),
        i = c(i, n, o, r, e[7], 4249261313, 22),
        r = c(r, i, n, o, e[8], 1770035416, 7),
        o = c(o, r, i, n, e[9], 2336552879, 12),
        n = c(n, o, r, i, e[10], 4294925233, 17),
        i = c(i, n, o, r, e[11], 2304563134, 22),
        r = c(r, i, n, o, e[12], 1804603682, 7),
        o = c(o, r, i, n, e[13], 4254626195, 12),
        n = c(n, o, r, i, e[14], 2792965006, 17),
        r = h(r, i = c(i, n, o, r, e[15], 1236535329, 22), n, o, e[1], 4129170786, 5),
        o = h(o, r, i, n, e[6], 3225465664, 9),
        n = h(n, o, r, i, e[11], 643717713, 14),
        i = h(i, n, o, r, e[0], 3921069994, 20),
        r = h(r, i, n, o, e[5], 3593408605, 5),
        o = h(o, r, i, n, e[10], 38016083, 9),
        n = h(n, o, r, i, e[15], 3634488961, 14),
        i = h(i, n, o, r, e[4], 3889429448, 20),
        r = h(r, i, n, o, e[9], 568446438, 5),
        o = h(o, r, i, n, e[14], 3275163606, 9),
        n = h(n, o, r, i, e[3], 4107603335, 14),
        i = h(i, n, o, r, e[8], 1163531501, 20),
        r = h(r, i, n, o, e[13], 2850285829, 5),
        o = h(o, r, i, n, e[2], 4243563512, 9),
        n = h(n, o, r, i, e[7], 1735328473, 14),
        r = d(r, i = h(i, n, o, r, e[12], 2368359562, 20), n, o, e[5], 4294588738, 4),
        o = d(o, r, i, n, e[8], 2272392833, 11),
        n = d(n, o, r, i, e[11], 1839030562, 16),
        i = d(i, n, o, r, e[14], 4259657740, 23),
        r = d(r, i, n, o, e[1], 2763975236, 4),
        o = d(o, r, i, n, e[4], 1272893353, 11),
        n = d(n, o, r, i, e[7], 4139469664, 16),
        i = d(i, n, o, r, e[10], 3200236656, 23),
        r = d(r, i, n, o, e[13], 681279174, 4),
        o = d(o, r, i, n, e[0], 3936430074, 11),
        n = d(n, o, r, i, e[3], 3572445317, 16),
        i = d(i, n, o, r, e[6], 76029189, 23),
        r = d(r, i, n, o, e[9], 3654602809, 4),
        o = d(o, r, i, n, e[12], 3873151461, 11),
        n = d(n, o, r, i, e[15], 530742520, 16),
        r = u(r, i = d(i, n, o, r, e[2], 3299628645, 23), n, o, e[0], 4096336452, 6),
        o = u(o, r, i, n, e[7], 1126891415, 10),
        n = u(n, o, r, i, e[14], 2878612391, 15),
        i = u(i, n, o, r, e[5], 4237533241, 21),
        r = u(r, i, n, o, e[12], 1700485571, 6),
        o = u(o, r, i, n, e[3], 2399980690, 10),
        n = u(n, o, r, i, e[10], 4293915773, 15),
        i = u(i, n, o, r, e[1], 2240044497, 21),
        r = u(r, i, n, o, e[8], 1873313359, 6),
        o = u(o, r, i, n, e[15], 4264355552, 10),
        n = u(n, o, r, i, e[6], 2734768916, 15),
        i = u(i, n, o, r, e[13], 1309151649, 21),
        r = u(r, i, n, o, e[4], 4149444226, 6),
        o = u(o, r, i, n, e[11], 3174756917, 10),
        n = u(n, o, r, i, e[2], 718787259, 15),
        i = u(i, n, o, r, e[9], 3951481745, 21),
        this._a = this._a + r | 0,
        this._b = this._b + i | 0,
        this._c = this._c + n | 0,
        this._d = this._d + o | 0
    }
    ,
    s.prototype._digest = function() {
        this._block[this._blockOffset++] = 128,
        this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64),
        this._update(),
        this._blockOffset = 0),
        this._block.fill(0, this._blockOffset, 56),
        this._block.writeUInt32LE(this._length[0], 56),
        this._block.writeUInt32LE(this._length[1], 60),
        this._update();
        var e = o.allocUnsafe(16);
        return e.writeInt32LE(this._a, 0),
        e.writeInt32LE(this._b, 4),
        e.writeInt32LE(this._c, 8),
        e.writeInt32LE(this._d, 12),
        e
    }
    ,
    e.exports = s
}
, function(e, t, r) {
    e.exports = n;
    var i = r(89).EventEmitter;
    function n() {
        i.call(this)
    }
    r(2)(n, i),
    n.Readable = r(90),
    n.Writable = r(230),
    n.Duplex = r(231),
    n.Transform = r(232),
    n.PassThrough = r(233),
    n.Stream = n,
    n.prototype.pipe = function(e, t) {
        var r = this;
        function n(t) {
            e.writable && !1 === e.write(t) && r.pause && r.pause()
        }
        function o() {
            r.readable && r.resume && r.resume()
        }
        r.on("data", n),
        e.on("drain", o),
        e._isStdio || t && !1 === t.end || (r.on("end", s),
        r.on("close", f));
        var a = !1;
        function s() {
            a || (a = !0,
            e.end())
        }
        function f() {
            a || (a = !0,
            "function" == typeof e.destroy && e.destroy())
        }
        function c(e) {
            if (h(),
            0 === i.listenerCount(this, "error"))
                throw e
        }
        function h() {
            r.removeListener("data", n),
            e.removeListener("drain", o),
            r.removeListener("end", s),
            r.removeListener("close", f),
            r.removeListener("error", c),
            e.removeListener("error", c),
            r.removeListener("end", h),
            r.removeListener("close", h),
            e.removeListener("close", h)
        }
        return r.on("error", c),
        e.on("error", c),
        r.on("end", h),
        r.on("close", h),
        e.on("close", h),
        e.emit("pipe", r),
        e
    }
}
, function(e, t, r) {
    "use strict";
    var i, n = "object" == typeof Reflect ? Reflect : null, o = n && "function" == typeof n.apply ? n.apply : function(e, t, r) {
        return Function.prototype.apply.call(e, t, r)
    }
    ;
    i = n && "function" == typeof n.ownKeys ? n.ownKeys : Object.getOwnPropertySymbols ? function(e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    }
    : function(e) {
        return Object.getOwnPropertyNames(e)
    }
    ;
    var a = Number.isNaN || function(e) {
        return e != e
    }
    ;
    function s() {
        s.init.call(this)
    }
    e.exports = s,
    s.EventEmitter = s,
    s.prototype._events = void 0,
    s.prototype._eventsCount = 0,
    s.prototype._maxListeners = void 0;
    var f = 10;
    function c(e) {
        return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners
    }
    function h(e, t, r, i) {
        var n, o, a, s;
        if ("function" != typeof r)
            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof r);
        if (void 0 === (o = e._events) ? (o = e._events = Object.create(null),
        e._eventsCount = 0) : (void 0 !== o.newListener && (e.emit("newListener", t, r.listener ? r.listener : r),
        o = e._events),
        a = o[t]),
        void 0 === a)
            a = o[t] = r,
            ++e._eventsCount;
        else if ("function" == typeof a ? a = o[t] = i ? [r, a] : [a, r] : i ? a.unshift(r) : a.push(r),
        (n = c(e)) > 0 && a.length > n && !a.warned) {
            a.warned = !0;
            var f = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            f.name = "MaxListenersExceededWarning",
            f.emitter = e,
            f.type = t,
            f.count = a.length,
            s = f,
            console && console.warn && console.warn(s)
        }
        return e
    }
    function d() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e.push(arguments[t]);
        this.fired || (this.target.removeListener(this.type, this.wrapFn),
        this.fired = !0,
        o(this.listener, this.target, e))
    }
    function u(e, t, r) {
        var i = {
            fired: !1,
            wrapFn: void 0,
            target: e,
            type: t,
            listener: r
        }
          , n = d.bind(i);
        return n.listener = r,
        i.wrapFn = n,
        n
    }
    function l(e, t, r) {
        var i = e._events;
        if (void 0 === i)
            return [];
        var n = i[t];
        return void 0 === n ? [] : "function" == typeof n ? r ? [n.listener || n] : [n] : r ? function(e) {
            for (var t = new Array(e.length), r = 0; r < t.length; ++r)
                t[r] = e[r].listener || e[r];
            return t
        }(n) : b(n, n.length)
    }
    function p(e) {
        var t = this._events;
        if (void 0 !== t) {
            var r = t[e];
            if ("function" == typeof r)
                return 1;
            if (void 0 !== r)
                return r.length
        }
        return 0
    }
    function b(e, t) {
        for (var r = new Array(t), i = 0; i < t; ++i)
            r[i] = e[i];
        return r
    }
    Object.defineProperty(s, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return f
        },
        set: function(e) {
            if ("number" != typeof e || e < 0 || a(e))
                throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            f = e
        }
    }),
    s.init = function() {
        void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null),
        this._eventsCount = 0),
        this._maxListeners = this._maxListeners || void 0
    }
    ,
    s.prototype.setMaxListeners = function(e) {
        if ("number" != typeof e || e < 0 || a(e))
            throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
        return this._maxListeners = e,
        this
    }
    ,
    s.prototype.getMaxListeners = function() {
        return c(this)
    }
    ,
    s.prototype.emit = function(e) {
        for (var t = [], r = 1; r < arguments.length; r++)
            t.push(arguments[r]);
        var i = "error" === e
          , n = this._events;
        if (void 0 !== n)
            i = i && void 0 === n.error;
        else if (!i)
            return !1;
        if (i) {
            var a;
            if (t.length > 0 && (a = t[0]),
            a instanceof Error)
                throw a;
            var s = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
            throw s.context = a,
            s
        }
        var f = n[e];
        if (void 0 === f)
            return !1;
        if ("function" == typeof f)
            o(f, this, t);
        else {
            var c = f.length
              , h = b(f, c);
            for (r = 0; r < c; ++r)
                o(h[r], this, t)
        }
        return !0
    }
    ,
    s.prototype.addListener = function(e, t) {
        return h(this, e, t, !1)
    }
    ,
    s.prototype.on = s.prototype.addListener,
    s.prototype.prependListener = function(e, t) {
        return h(this, e, t, !0)
    }
    ,
    s.prototype.once = function(e, t) {
        if ("function" != typeof t)
            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
        return this.on(e, u(this, e, t)),
        this
    }
    ,
    s.prototype.prependOnceListener = function(e, t) {
        if ("function" != typeof t)
            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
        return this.prependListener(e, u(this, e, t)),
        this
    }
    ,
    s.prototype.removeListener = function(e, t) {
        var r, i, n, o, a;
        if ("function" != typeof t)
            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
        if (void 0 === (i = this._events))
            return this;
        if (void 0 === (r = i[e]))
            return this;
        if (r === t || r.listener === t)
            0 == --this._eventsCount ? this._events = Object.create(null) : (delete i[e],
            i.removeListener && this.emit("removeListener", e, r.listener || t));
        else if ("function" != typeof r) {
            for (n = -1,
            o = r.length - 1; o >= 0; o--)
                if (r[o] === t || r[o].listener === t) {
                    a = r[o].listener,
                    n = o;
                    break
                }
            if (n < 0)
                return this;
            0 === n ? r.shift() : function(e, t) {
                for (; t + 1 < e.length; t++)
                    e[t] = e[t + 1];
                e.pop()
            }(r, n),
            1 === r.length && (i[e] = r[0]),
            void 0 !== i.removeListener && this.emit("removeListener", e, a || t)
        }
        return this
    }
    ,
    s.prototype.off = s.prototype.removeListener,
    s.prototype.removeAllListeners = function(e) {
        var t, r, i;
        if (void 0 === (r = this._events))
            return this;
        if (void 0 === r.removeListener)
            return 0 === arguments.length ? (this._events = Object.create(null),
            this._eventsCount = 0) : void 0 !== r[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[e]),
            this;
        if (0 === arguments.length) {
            var n, o = Object.keys(r);
            for (i = 0; i < o.length; ++i)
                "removeListener" !== (n = o[i]) && this.removeAllListeners(n);
            return this.removeAllListeners("removeListener"),
            this._events = Object.create(null),
            this._eventsCount = 0,
            this
        }
        if ("function" == typeof (t = r[e]))
            this.removeListener(e, t);
        else if (void 0 !== t)
            for (i = t.length - 1; i >= 0; i--)
                this.removeListener(e, t[i]);
        return this
    }
    ,
    s.prototype.listeners = function(e) {
        return l(this, e, !0)
    }
    ,
    s.prototype.rawListeners = function(e) {
        return l(this, e, !1)
    }
    ,
    s.listenerCount = function(e, t) {
        return "function" == typeof e.listenerCount ? e.listenerCount(t) : p.call(e, t)
    }
    ,
    s.prototype.listenerCount = p,
    s.prototype.eventNames = function() {
        return this._eventsCount > 0 ? i(this._events) : []
    }
}
, function(e, t, r) {
    (t = e.exports = r(125)).Stream = t,
    t.Readable = t,
    t.Writable = r(91),
    t.Duplex = r(48),
    t.Transform = r(128),
    t.PassThrough = r(229)
}
, function(e, t, r) {
    "use strict";
    (function(t, i, n) {
        var o = r(71);
        function a(e) {
            var t = this;
            this.next = null,
            this.entry = null,
            this.finish = function() {
                !function(e, t, r) {
                    var i = e.entry;
                    e.entry = null;
                    for (; i; ) {
                        var n = i.callback;
                        t.pendingcb--,
                        n(r),
                        i = i.next
                    }
                    t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e
                }(t, e)
            }
        }
        e.exports = g;
        var s, f = !t.browser && ["v0.10", "v0.9."].indexOf(t.version.slice(0, 5)) > -1 ? i : o.nextTick;
        g.WritableState = y;
        var c = r(60);
        c.inherits = r(2);
        var h = {
            deprecate: r(227)
        }
          , d = r(126)
          , u = r(4).Buffer
          , l = n.Uint8Array || function() {}
        ;
        var p, b = r(127);
        function m() {}
        function y(e, t) {
            s = s || r(48),
            e = e || {};
            var i = t instanceof s;
            this.objectMode = !!e.objectMode,
            i && (this.objectMode = this.objectMode || !!e.writableObjectMode);
            var n = e.highWaterMark
              , c = e.writableHighWaterMark
              , h = this.objectMode ? 16 : 16384;
            this.highWaterMark = n || 0 === n ? n : i && (c || 0 === c) ? c : h,
            this.highWaterMark = Math.floor(this.highWaterMark),
            this.finalCalled = !1,
            this.needDrain = !1,
            this.ending = !1,
            this.ended = !1,
            this.finished = !1,
            this.destroyed = !1;
            var d = !1 === e.decodeStrings;
            this.decodeStrings = !d,
            this.defaultEncoding = e.defaultEncoding || "utf8",
            this.length = 0,
            this.writing = !1,
            this.corked = 0,
            this.sync = !0,
            this.bufferProcessing = !1,
            this.onwrite = function(e) {
                !function(e, t) {
                    var r = e._writableState
                      , i = r.sync
                      , n = r.writecb;
                    if (function(e) {
                        e.writing = !1,
                        e.writecb = null,
                        e.length -= e.writelen,
                        e.writelen = 0
                    }(r),
                    t)
                        !function(e, t, r, i, n) {
                            --t.pendingcb,
                            r ? (o.nextTick(n, i),
                            o.nextTick(E, e, t),
                            e._writableState.errorEmitted = !0,
                            e.emit("error", i)) : (n(i),
                            e._writableState.errorEmitted = !0,
                            e.emit("error", i),
                            E(e, t))
                        }(e, r, i, t, n);
                    else {
                        var a = S(r);
                        a || r.corked || r.bufferProcessing || !r.bufferedRequest || w(e, r),
                        i ? f(_, e, r, a, n) : _(e, r, a, n)
                    }
                }(t, e)
            }
            ,
            this.writecb = null,
            this.writelen = 0,
            this.bufferedRequest = null,
            this.lastBufferedRequest = null,
            this.pendingcb = 0,
            this.prefinished = !1,
            this.errorEmitted = !1,
            this.bufferedRequestCount = 0,
            this.corkedRequestsFree = new a(this)
        }
        function g(e) {
            if (s = s || r(48),
            !(p.call(g, this) || this instanceof s))
                return new g(e);
            this._writableState = new y(e,this),
            this.writable = !0,
            e && ("function" == typeof e.write && (this._write = e.write),
            "function" == typeof e.writev && (this._writev = e.writev),
            "function" == typeof e.destroy && (this._destroy = e.destroy),
            "function" == typeof e.final && (this._final = e.final)),
            d.call(this)
        }
        function v(e, t, r, i, n, o, a) {
            t.writelen = i,
            t.writecb = a,
            t.writing = !0,
            t.sync = !0,
            r ? e._writev(n, t.onwrite) : e._write(n, o, t.onwrite),
            t.sync = !1
        }
        function _(e, t, r, i) {
            r || function(e, t) {
                0 === t.length && t.needDrain && (t.needDrain = !1,
                e.emit("drain"))
            }(e, t),
            t.pendingcb--,
            i(),
            E(e, t)
        }
        function w(e, t) {
            t.bufferProcessing = !0;
            var r = t.bufferedRequest;
            if (e._writev && r && r.next) {
                var i = t.bufferedRequestCount
                  , n = new Array(i)
                  , o = t.corkedRequestsFree;
                o.entry = r;
                for (var s = 0, f = !0; r; )
                    n[s] = r,
                    r.isBuf || (f = !1),
                    r = r.next,
                    s += 1;
                n.allBuffers = f,
                v(e, t, !0, t.length, n, "", o.finish),
                t.pendingcb++,
                t.lastBufferedRequest = null,
                o.next ? (t.corkedRequestsFree = o.next,
                o.next = null) : t.corkedRequestsFree = new a(t),
                t.bufferedRequestCount = 0
            } else {
                for (; r; ) {
                    var c = r.chunk
                      , h = r.encoding
                      , d = r.callback;
                    if (v(e, t, !1, t.objectMode ? 1 : c.length, c, h, d),
                    r = r.next,
                    t.bufferedRequestCount--,
                    t.writing)
                        break
                }
                null === r && (t.lastBufferedRequest = null)
            }
            t.bufferedRequest = r,
            t.bufferProcessing = !1
        }
        function S(e) {
            return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
        }
        function M(e, t) {
            e._final((function(r) {
                t.pendingcb--,
                r && e.emit("error", r),
                t.prefinished = !0,
                e.emit("prefinish"),
                E(e, t)
            }
            ))
        }
        function E(e, t) {
            var r = S(t);
            return r && (!function(e, t) {
                t.prefinished || t.finalCalled || ("function" == typeof e._final ? (t.pendingcb++,
                t.finalCalled = !0,
                o.nextTick(M, e, t)) : (t.prefinished = !0,
                e.emit("prefinish")))
            }(e, t),
            0 === t.pendingcb && (t.finished = !0,
            e.emit("finish"))),
            r
        }
        c.inherits(g, d),
        y.prototype.getBuffer = function() {
            for (var e = this.bufferedRequest, t = []; e; )
                t.push(e),
                e = e.next;
            return t
        }
        ,
        function() {
            try {
                Object.defineProperty(y.prototype, "buffer", {
                    get: h.deprecate((function() {
                        return this.getBuffer()
                    }
                    ), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                })
            } catch (e) {}
        }(),
        "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (p = Function.prototype[Symbol.hasInstance],
        Object.defineProperty(g, Symbol.hasInstance, {
            value: function(e) {
                return !!p.call(this, e) || this === g && (e && e._writableState instanceof y)
            }
        })) : p = function(e) {
            return e instanceof this
        }
        ,
        g.prototype.pipe = function() {
            this.emit("error", new Error("Cannot pipe, not readable"))
        }
        ,
        g.prototype.write = function(e, t, r) {
            var i, n = this._writableState, a = !1, s = !n.objectMode && (i = e,
            u.isBuffer(i) || i instanceof l);
            return s && !u.isBuffer(e) && (e = function(e) {
                return u.from(e)
            }(e)),
            "function" == typeof t && (r = t,
            t = null),
            s ? t = "buffer" : t || (t = n.defaultEncoding),
            "function" != typeof r && (r = m),
            n.ended ? function(e, t) {
                var r = new Error("write after end");
                e.emit("error", r),
                o.nextTick(t, r)
            }(this, r) : (s || function(e, t, r, i) {
                var n = !0
                  , a = !1;
                return null === r ? a = new TypeError("May not write null values to stream") : "string" == typeof r || void 0 === r || t.objectMode || (a = new TypeError("Invalid non-string/buffer chunk")),
                a && (e.emit("error", a),
                o.nextTick(i, a),
                n = !1),
                n
            }(this, n, e, r)) && (n.pendingcb++,
            a = function(e, t, r, i, n, o) {
                if (!r) {
                    var a = function(e, t, r) {
                        e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = u.from(t, r));
                        return t
                    }(t, i, n);
                    i !== a && (r = !0,
                    n = "buffer",
                    i = a)
                }
                var s = t.objectMode ? 1 : i.length;
                t.length += s;
                var f = t.length < t.highWaterMark;
                f || (t.needDrain = !0);
                if (t.writing || t.corked) {
                    var c = t.lastBufferedRequest;
                    t.lastBufferedRequest = {
                        chunk: i,
                        encoding: n,
                        isBuf: r,
                        callback: o,
                        next: null
                    },
                    c ? c.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest,
                    t.bufferedRequestCount += 1
                } else
                    v(e, t, !1, s, i, n, o);
                return f
            }(this, n, s, e, t, r)),
            a
        }
        ,
        g.prototype.cork = function() {
            this._writableState.corked++
        }
        ,
        g.prototype.uncork = function() {
            var e = this._writableState;
            e.corked && (e.corked--,
            e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || w(this, e))
        }
        ,
        g.prototype.setDefaultEncoding = function(e) {
            if ("string" == typeof e && (e = e.toLowerCase()),
            !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1))
                throw new TypeError("Unknown encoding: " + e);
            return this._writableState.defaultEncoding = e,
            this
        }
        ,
        Object.defineProperty(g.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function() {
                return this._writableState.highWaterMark
            }
        }),
        g.prototype._write = function(e, t, r) {
            r(new Error("_write() is not implemented"))
        }
        ,
        g.prototype._writev = null,
        g.prototype.end = function(e, t, r) {
            var i = this._writableState;
            "function" == typeof e ? (r = e,
            e = null,
            t = null) : "function" == typeof t && (r = t,
            t = null),
            null != e && this.write(e, t),
            i.corked && (i.corked = 1,
            this.uncork()),
            i.ending || i.finished || function(e, t, r) {
                t.ending = !0,
                E(e, t),
                r && (t.finished ? o.nextTick(r) : e.once("finish", r));
                t.ended = !0,
                e.writable = !1
            }(this, i, r)
        }
        ,
        Object.defineProperty(g.prototype, "destroyed", {
            get: function() {
                return void 0 !== this._writableState && this._writableState.destroyed
            },
            set: function(e) {
                this._writableState && (this._writableState.destroyed = e)
            }
        }),
        g.prototype.destroy = b.destroy,
        g.prototype._undestroy = b.undestroy,
        g.prototype._destroy = function(e, t) {
            this.end(),
            t(e)
        }
    }
    ).call(this, r(45), r(225).setImmediate, r(38))
}
, function(e, t, r) {
    "use strict";
    var i = r(228).Buffer
      , n = i.isEncoding || function(e) {
        switch ((e = "" + e) && e.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
            return !0;
        default:
            return !1
        }
    }
    ;
    function o(e) {
        var t;
        switch (this.encoding = function(e) {
            var t = function(e) {
                if (!e)
                    return "utf8";
                for (var t; ; )
                    switch (e) {
                    case "utf8":
                    case "utf-8":
                        return "utf8";
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return "utf16le";
                    case "latin1":
                    case "binary":
                        return "latin1";
                    case "base64":
                    case "ascii":
                    case "hex":
                        return e;
                    default:
                        if (t)
                            return;
                        e = ("" + e).toLowerCase(),
                        t = !0
                    }
            }(e);
            if ("string" != typeof t && (i.isEncoding === n || !n(e)))
                throw new Error("Unknown encoding: " + e);
            return t || e
        }(e),
        this.encoding) {
        case "utf16le":
            this.text = f,
            this.end = c,
            t = 4;
            break;
        case "utf8":
            this.fillLast = s,
            t = 4;
            break;
        case "base64":
            this.text = h,
            this.end = d,
            t = 3;
            break;
        default:
            return this.write = u,
            void (this.end = l)
        }
        this.lastNeed = 0,
        this.lastTotal = 0,
        this.lastChar = i.allocUnsafe(t)
    }
    function a(e) {
        return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
    }
    function s(e) {
        var t = this.lastTotal - this.lastNeed
          , r = function(e, t, r) {
            if (128 != (192 & t[0]))
                return e.lastNeed = 0,
                "�";
            if (e.lastNeed > 1 && t.length > 1) {
                if (128 != (192 & t[1]))
                    return e.lastNeed = 1,
                    "�";
                if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2]))
                    return e.lastNeed = 2,
                    "�"
            }
        }(this, e);
        return void 0 !== r ? r : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed),
        this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length),
        void (this.lastNeed -= e.length))
    }
    function f(e, t) {
        if ((e.length - t) % 2 == 0) {
            var r = e.toString("utf16le", t);
            if (r) {
                var i = r.charCodeAt(r.length - 1);
                if (i >= 55296 && i <= 56319)
                    return this.lastNeed = 2,
                    this.lastTotal = 4,
                    this.lastChar[0] = e[e.length - 2],
                    this.lastChar[1] = e[e.length - 1],
                    r.slice(0, -1)
            }
            return r
        }
        return this.lastNeed = 1,
        this.lastTotal = 2,
        this.lastChar[0] = e[e.length - 1],
        e.toString("utf16le", t, e.length - 1)
    }
    function c(e) {
        var t = e && e.length ? this.write(e) : "";
        if (this.lastNeed) {
            var r = this.lastTotal - this.lastNeed;
            return t + this.lastChar.toString("utf16le", 0, r)
        }
        return t
    }
    function h(e, t) {
        var r = (e.length - t) % 3;
        return 0 === r ? e.toString("base64", t) : (this.lastNeed = 3 - r,
        this.lastTotal = 3,
        1 === r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2],
        this.lastChar[1] = e[e.length - 1]),
        e.toString("base64", t, e.length - r))
    }
    function d(e) {
        var t = e && e.length ? this.write(e) : "";
        return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
    }
    function u(e) {
        return e.toString(this.encoding)
    }
    function l(e) {
        return e && e.length ? this.write(e) : ""
    }
    t.StringDecoder = o,
    o.prototype.write = function(e) {
        if (0 === e.length)
            return "";
        var t, r;
        if (this.lastNeed) {
            if (void 0 === (t = this.fillLast(e)))
                return "";
            r = this.lastNeed,
            this.lastNeed = 0
        } else
            r = 0;
        return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || ""
    }
    ,
    o.prototype.end = function(e) {
        var t = e && e.length ? this.write(e) : "";
        return this.lastNeed ? t + "�" : t
    }
    ,
    o.prototype.text = function(e, t) {
        var r = function(e, t, r) {
            var i = t.length - 1;
            if (i < r)
                return 0;
            var n = a(t[i]);
            if (n >= 0)
                return n > 0 && (e.lastNeed = n - 1),
                n;
            if (--i < r || -2 === n)
                return 0;
            if ((n = a(t[i])) >= 0)
                return n > 0 && (e.lastNeed = n - 2),
                n;
            if (--i < r || -2 === n)
                return 0;
            if ((n = a(t[i])) >= 0)
                return n > 0 && (2 === n ? n = 0 : e.lastNeed = n - 3),
                n;
            return 0
        }(this, e, t);
        if (!this.lastNeed)
            return e.toString("utf8", t);
        this.lastTotal = r;
        var i = e.length - (r - this.lastNeed);
        return e.copy(this.lastChar, 0, i),
        e.toString("utf8", t, i)
    }
    ,
    o.prototype.fillLast = function(e) {
        if (this.lastNeed <= e.length)
            return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal);
        e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
        this.lastNeed -= e.length
    }
}
, function(e, t, r) {
    "use strict";
    var i = r(20).Buffer
      , n = r(2)
      , o = r(124)
      , a = new Array(16)
      , s = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]
      , f = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]
      , c = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]
      , h = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
      , d = [0, 1518500249, 1859775393, 2400959708, 2840853838]
      , u = [1352829926, 1548603684, 1836072691, 2053994217, 0];
    function l() {
        o.call(this, 64),
        this._a = 1732584193,
        this._b = 4023233417,
        this._c = 2562383102,
        this._d = 271733878,
        this._e = 3285377520
    }
    function p(e, t) {
        return e << t | e >>> 32 - t
    }
    function b(e, t, r, i, n, o, a, s) {
        return p(e + (t ^ r ^ i) + o + a | 0, s) + n | 0
    }
    function m(e, t, r, i, n, o, a, s) {
        return p(e + (t & r | ~t & i) + o + a | 0, s) + n | 0
    }
    function y(e, t, r, i, n, o, a, s) {
        return p(e + ((t | ~r) ^ i) + o + a | 0, s) + n | 0
    }
    function g(e, t, r, i, n, o, a, s) {
        return p(e + (t & i | r & ~i) + o + a | 0, s) + n | 0
    }
    function v(e, t, r, i, n, o, a, s) {
        return p(e + (t ^ (r | ~i)) + o + a | 0, s) + n | 0
    }
    n(l, o),
    l.prototype._update = function() {
        for (var e = a, t = 0; t < 16; ++t)
            e[t] = this._block.readInt32LE(4 * t);
        for (var r = 0 | this._a, i = 0 | this._b, n = 0 | this._c, o = 0 | this._d, l = 0 | this._e, _ = 0 | this._a, w = 0 | this._b, S = 0 | this._c, M = 0 | this._d, E = 0 | this._e, k = 0; k < 80; k += 1) {
            var A, x;
            k < 16 ? (A = b(r, i, n, o, l, e[s[k]], d[0], c[k]),
            x = v(_, w, S, M, E, e[f[k]], u[0], h[k])) : k < 32 ? (A = m(r, i, n, o, l, e[s[k]], d[1], c[k]),
            x = g(_, w, S, M, E, e[f[k]], u[1], h[k])) : k < 48 ? (A = y(r, i, n, o, l, e[s[k]], d[2], c[k]),
            x = y(_, w, S, M, E, e[f[k]], u[2], h[k])) : k < 64 ? (A = g(r, i, n, o, l, e[s[k]], d[3], c[k]),
            x = m(_, w, S, M, E, e[f[k]], u[3], h[k])) : (A = v(r, i, n, o, l, e[s[k]], d[4], c[k]),
            x = b(_, w, S, M, E, e[f[k]], u[4], h[k])),
            r = l,
            l = o,
            o = p(n, 10),
            n = i,
            i = A,
            _ = E,
            E = M,
            M = p(S, 10),
            S = w,
            w = x
        }
        var I = this._b + n + M | 0;
        this._b = this._c + o + E | 0,
        this._c = this._d + l + _ | 0,
        this._d = this._e + r + w | 0,
        this._e = this._a + i + S | 0,
        this._a = I
    }
    ,
    l.prototype._digest = function() {
        this._block[this._blockOffset++] = 128,
        this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64),
        this._update(),
        this._blockOffset = 0),
        this._block.fill(0, this._blockOffset, 56),
        this._block.writeUInt32LE(this._length[0], 56),
        this._block.writeUInt32LE(this._length[1], 60),
        this._update();
        var e = i.alloc ? i.alloc(20) : new i(20);
        return e.writeInt32LE(this._a, 0),
        e.writeInt32LE(this._b, 4),
        e.writeInt32LE(this._c, 8),
        e.writeInt32LE(this._d, 12),
        e.writeInt32LE(this._e, 16),
        e
    }
    ,
    e.exports = l
}
, function(e, t, r) {
    (t = e.exports = function(e) {
        e = e.toLowerCase();
        var r = t[e];
        if (!r)
            throw new Error(e + " is not supported (we accept pull requests)");
        return new r
    }
    ).sha = r(234),
    t.sha1 = r(235),
    t.sha224 = r(236),
    t.sha256 = r(129),
    t.sha384 = r(237),
    t.sha512 = r(130)
}
, function(e, t, r) {
    "use strict";
    var i = r(32);
    function n(e) {
        this.options = e,
        this.type = this.options.type,
        this.blockSize = 8,
        this._init(),
        this.buffer = new Array(this.blockSize),
        this.bufferOff = 0
    }
    e.exports = n,
    n.prototype._init = function() {}
    ,
    n.prototype.update = function(e) {
        return 0 === e.length ? [] : "decrypt" === this.type ? this._updateDecrypt(e) : this._updateEncrypt(e)
    }
    ,
    n.prototype._buffer = function(e, t) {
        for (var r = Math.min(this.buffer.length - this.bufferOff, e.length - t), i = 0; i < r; i++)
            this.buffer[this.bufferOff + i] = e[t + i];
        return this.bufferOff += r,
        r
    }
    ,
    n.prototype._flushBuffer = function(e, t) {
        return this._update(this.buffer, 0, e, t),
        this.bufferOff = 0,
        this.blockSize
    }
    ,
    n.prototype._updateEncrypt = function(e) {
        var t = 0
          , r = 0
          , i = (this.bufferOff + e.length) / this.blockSize | 0
          , n = new Array(i * this.blockSize);
        0 !== this.bufferOff && (t += this._buffer(e, t),
        this.bufferOff === this.buffer.length && (r += this._flushBuffer(n, r)));
        for (var o = e.length - (e.length - t) % this.blockSize; t < o; t += this.blockSize)
            this._update(e, t, n, r),
            r += this.blockSize;
        for (; t < e.length; t++,
        this.bufferOff++)
            this.buffer[this.bufferOff] = e[t];
        return n
    }
    ,
    n.prototype._updateDecrypt = function(e) {
        for (var t = 0, r = 0, i = Math.ceil((this.bufferOff + e.length) / this.blockSize) - 1, n = new Array(i * this.blockSize); i > 0; i--)
            t += this._buffer(e, t),
            r += this._flushBuffer(n, r);
        return t += this._buffer(e, t),
        n
    }
    ,
    n.prototype.final = function(e) {
        var t, r;
        return e && (t = this.update(e)),
        r = "encrypt" === this.type ? this._finalEncrypt() : this._finalDecrypt(),
        t ? t.concat(r) : r
    }
    ,
    n.prototype._pad = function(e, t) {
        if (0 === t)
            return !1;
        for (; t < e.length; )
            e[t++] = 0;
        return !0
    }
    ,
    n.prototype._finalEncrypt = function() {
        if (!this._pad(this.buffer, this.bufferOff))
            return [];
        var e = new Array(this.blockSize);
        return this._update(this.buffer, 0, e, 0),
        e
    }
    ,
    n.prototype._unpad = function(e) {
        return e
    }
    ,
    n.prototype._finalDecrypt = function() {
        i.equal(this.bufferOff, this.blockSize, "Not enough data to decrypt");
        var e = new Array(this.blockSize);
        return this._flushBuffer(e, 0),
        this._unpad(e)
    }
}
, function(e, t, r) {
    var i = r(246)
      , n = r(254)
      , o = r(142);
    t.createCipher = t.Cipher = i.createCipher,
    t.createCipheriv = t.Cipheriv = i.createCipheriv,
    t.createDecipher = t.Decipher = n.createDecipher,
    t.createDecipheriv = t.Decipheriv = n.createDecipheriv,
    t.listCiphers = t.getCiphers = function() {
        return Object.keys(o)
    }
}
, function(e, t, r) {
    var i = {
        ECB: r(247),
        CBC: r(248),
        CFB: r(249),
        CFB8: r(250),
        CFB1: r(251),
        OFB: r(252),
        CTR: r(140),
        GCM: r(140)
    }
      , n = r(142);
    for (var o in n)
        n[o].module = i[n[o].mode];
    e.exports = n
}
, function(e, t, r) {
    var i;
    function n(e) {
        this.rand = e
    }
    if (e.exports = function(e) {
        return i || (i = new n(null)),
        i.generate(e)
    }
    ,
    e.exports.Rand = n,
    n.prototype.generate = function(e) {
        return this._rand(e)
    }
    ,
    n.prototype._rand = function(e) {
        if (this.rand.getBytes)
            return this.rand.getBytes(e);
        for (var t = new Uint8Array(e), r = 0; r < t.length; r++)
            t[r] = this.rand.getByte();
        return t
    }
    ,
    "object" == typeof self)
        self.crypto && self.crypto.getRandomValues ? n.prototype._rand = function(e) {
            var t = new Uint8Array(e);
            return self.crypto.getRandomValues(t),
            t
        }
        : self.msCrypto && self.msCrypto.getRandomValues ? n.prototype._rand = function(e) {
            var t = new Uint8Array(e);
            return self.msCrypto.getRandomValues(t),
            t
        }
        : "object" == typeof window && (n.prototype._rand = function() {
            throw new Error("Not implemented yet")
        }
        );
    else
        try {
            var o = r(259);
            if ("function" != typeof o.randomBytes)
                throw new Error("Not supported");
            n.prototype._rand = function(e) {
                return o.randomBytes(e)
            }
        } catch (e) {}
}
, function(e, t, r) {
    (function(t) {
        var i = r(15)
          , n = r(52);
        function o(e, r) {
            var n = function(e) {
                var t = a(e);
                return {
                    blinder: t.toRed(i.mont(e.modulus)).redPow(new i(e.publicExponent)).fromRed(),
                    unblinder: t.invm(e.modulus)
                }
            }(r)
              , o = r.modulus.byteLength()
              , s = (i.mont(r.modulus),
            new i(e).mul(n.blinder).umod(r.modulus))
              , f = s.toRed(i.mont(r.prime1))
              , c = s.toRed(i.mont(r.prime2))
              , h = r.coefficient
              , d = r.prime1
              , u = r.prime2
              , l = f.redPow(r.exponent1)
              , p = c.redPow(r.exponent2);
            l = l.fromRed(),
            p = p.fromRed();
            var b = l.isub(p).imul(h).umod(d);
            return b.imul(u),
            p.iadd(b),
            new t(p.imul(n.unblinder).umod(r.modulus).toArray(!1, o))
        }
        function a(e) {
            for (var t = e.modulus.byteLength(), r = new i(n(t)); r.cmp(e.modulus) >= 0 || !r.umod(e.prime1) || !r.umod(e.prime2); )
                r = new i(n(t));
            return r
        }
        e.exports = o,
        o.getr = a
    }
    ).call(this, r(20).Buffer)
}
, function(e, t, r) {
    "use strict";
    var i = t;
    i.version = r(264).version,
    i.utils = r(33),
    i.rand = r(98),
    i.curve = r(148),
    i.curves = r(101),
    i.ec = r(275),
    i.eddsa = r(279)
}
, function(e, t, r) {
    "use strict";
    var i, n = t, o = r(102), a = r(148), s = r(33).assert;
    function f(e) {
        "short" === e.type ? this.curve = new a.short(e) : "edwards" === e.type ? this.curve = new a.edwards(e) : this.curve = new a.mont(e),
        this.g = this.curve.g,
        this.n = this.curve.n,
        this.hash = e.hash,
        s(this.g.validate(), "Invalid curve"),
        s(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
    }
    function c(e, t) {
        Object.defineProperty(n, e, {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var r = new f(t);
                return Object.defineProperty(n, e, {
                    configurable: !0,
                    enumerable: !0,
                    value: r
                }),
                r
            }
        })
    }
    n.PresetCurve = f,
    c("p192", {
        type: "short",
        prime: "p192",
        p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
        a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
        b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
        n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
        hash: o.sha256,
        gRed: !1,
        g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
    }),
    c("p224", {
        type: "short",
        prime: "p224",
        p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
        a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
        b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
        n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
        hash: o.sha256,
        gRed: !1,
        g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
    }),
    c("p256", {
        type: "short",
        prime: null,
        p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
        a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
        b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
        n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
        hash: o.sha256,
        gRed: !1,
        g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
    }),
    c("p384", {
        type: "short",
        prime: null,
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
        a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
        b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
        n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
        hash: o.sha384,
        gRed: !1,
        g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
    }),
    c("p521", {
        type: "short",
        prime: null,
        p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
        a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
        b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
        n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
        hash: o.sha512,
        gRed: !1,
        g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
    }),
    c("curve25519", {
        type: "mont",
        prime: "p25519",
        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
        a: "76d06",
        b: "1",
        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
        hash: o.sha256,
        gRed: !1,
        g: ["9"]
    }),
    c("ed25519", {
        type: "edwards",
        prime: "p25519",
        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
        a: "-1",
        c: "1",
        d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
        hash: o.sha256,
        gRed: !1,
        g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
    });
    try {
        i = r(274)
    } catch (e) {
        i = void 0
    }
    c("secp256k1", {
        type: "short",
        prime: "k256",
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
        a: "0",
        b: "7",
        n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
        h: "1",
        hash: o.sha256,
        beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
        lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
        basis: [{
            a: "3086d221a7d46bcde86c90e49284eb15",
            b: "-e4437ed6010e88286f547fa90abfe4c3"
        }, {
            a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
            b: "3086d221a7d46bcde86c90e49284eb15"
        }],
        gRed: !1,
        g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", i]
    })
}
, function(e, t, r) {
    var i = t;
    i.utils = r(39),
    i.common = r(62),
    i.sha = r(268),
    i.ripemd = r(272),
    i.hmac = r(273),
    i.sha1 = i.sha.sha1,
    i.sha256 = i.sha.sha256,
    i.sha224 = i.sha.sha224,
    i.sha384 = i.sha.sha384,
    i.sha512 = i.sha.sha512,
    i.ripemd160 = i.ripemd.ripemd160
}
, , , , , , , , , , , , , , , , , , , , , , function(e, t, r) {
    "use strict";
    var i = r(4).Buffer
      , n = r(88).Transform;
    function o(e) {
        n.call(this),
        this._block = i.allocUnsafe(e),
        this._blockSize = e,
        this._blockOffset = 0,
        this._length = [0, 0, 0, 0],
        this._finalized = !1
    }
    r(2)(o, n),
    o.prototype._transform = function(e, t, r) {
        var i = null;
        try {
            this.update(e, t)
        } catch (e) {
            i = e
        }
        r(i)
    }
    ,
    o.prototype._flush = function(e) {
        var t = null;
        try {
            this.push(this.digest())
        } catch (e) {
            t = e
        }
        e(t)
    }
    ,
    o.prototype.update = function(e, t) {
        if (function(e, t) {
            if (!i.isBuffer(e) && "string" != typeof e)
                throw new TypeError(t + " must be a string or a buffer")
        }(e, "Data"),
        this._finalized)
            throw new Error("Digest already called");
        i.isBuffer(e) || (e = i.from(e, t));
        for (var r = this._block, n = 0; this._blockOffset + e.length - n >= this._blockSize; ) {
            for (var o = this._blockOffset; o < this._blockSize; )
                r[o++] = e[n++];
            this._update(),
            this._blockOffset = 0
        }
        for (; n < e.length; )
            r[this._blockOffset++] = e[n++];
        for (var a = 0, s = 8 * e.length; s > 0; ++a)
            this._length[a] += s,
            (s = this._length[a] / 4294967296 | 0) > 0 && (this._length[a] -= 4294967296 * s);
        return this
    }
    ,
    o.prototype._update = function() {
        throw new Error("_update is not implemented")
    }
    ,
    o.prototype.digest = function(e) {
        if (this._finalized)
            throw new Error("Digest already called");
        this._finalized = !0;
        var t = this._digest();
        void 0 !== e && (t = t.toString(e)),
        this._block.fill(0),
        this._blockOffset = 0;
        for (var r = 0; r < 4; ++r)
            this._length[r] = 0;
        return t
    }
    ,
    o.prototype._digest = function() {
        throw new Error("_digest is not implemented")
    }
    ,
    e.exports = o
}
, function(e, t, r) {
    "use strict";
    (function(t, i) {
        var n = r(71);
        e.exports = v;
        var o, a = r(221);
        v.ReadableState = g;
        r(89).EventEmitter;
        var s = function(e, t) {
            return e.listeners(t).length
        }
          , f = r(126)
          , c = r(4).Buffer
          , h = t.Uint8Array || function() {}
        ;
        var d = r(60);
        d.inherits = r(2);
        var u = r(222)
          , l = void 0;
        l = u && u.debuglog ? u.debuglog("stream") : function() {}
        ;
        var p, b = r(223), m = r(127);
        d.inherits(v, f);
        var y = ["error", "close", "destroy", "pause", "resume"];
        function g(e, t) {
            e = e || {};
            var i = t instanceof (o = o || r(48));
            this.objectMode = !!e.objectMode,
            i && (this.objectMode = this.objectMode || !!e.readableObjectMode);
            var n = e.highWaterMark
              , a = e.readableHighWaterMark
              , s = this.objectMode ? 16 : 16384;
            this.highWaterMark = n || 0 === n ? n : i && (a || 0 === a) ? a : s,
            this.highWaterMark = Math.floor(this.highWaterMark),
            this.buffer = new b,
            this.length = 0,
            this.pipes = null,
            this.pipesCount = 0,
            this.flowing = null,
            this.ended = !1,
            this.endEmitted = !1,
            this.reading = !1,
            this.sync = !0,
            this.needReadable = !1,
            this.emittedReadable = !1,
            this.readableListening = !1,
            this.resumeScheduled = !1,
            this.destroyed = !1,
            this.defaultEncoding = e.defaultEncoding || "utf8",
            this.awaitDrain = 0,
            this.readingMore = !1,
            this.decoder = null,
            this.encoding = null,
            e.encoding && (p || (p = r(92).StringDecoder),
            this.decoder = new p(e.encoding),
            this.encoding = e.encoding)
        }
        function v(e) {
            if (o = o || r(48),
            !(this instanceof v))
                return new v(e);
            this._readableState = new g(e,this),
            this.readable = !0,
            e && ("function" == typeof e.read && (this._read = e.read),
            "function" == typeof e.destroy && (this._destroy = e.destroy)),
            f.call(this)
        }
        function _(e, t, r, i, n) {
            var o, a = e._readableState;
            null === t ? (a.reading = !1,
            function(e, t) {
                if (t.ended)
                    return;
                if (t.decoder) {
                    var r = t.decoder.end();
                    r && r.length && (t.buffer.push(r),
                    t.length += t.objectMode ? 1 : r.length)
                }
                t.ended = !0,
                E(e)
            }(e, a)) : (n || (o = function(e, t) {
                var r;
                i = t,
                c.isBuffer(i) || i instanceof h || "string" == typeof t || void 0 === t || e.objectMode || (r = new TypeError("Invalid non-string/buffer chunk"));
                var i;
                return r
            }(a, t)),
            o ? e.emit("error", o) : a.objectMode || t && t.length > 0 ? ("string" == typeof t || a.objectMode || Object.getPrototypeOf(t) === c.prototype || (t = function(e) {
                return c.from(e)
            }(t)),
            i ? a.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : w(e, a, t, !0) : a.ended ? e.emit("error", new Error("stream.push() after EOF")) : (a.reading = !1,
            a.decoder && !r ? (t = a.decoder.write(t),
            a.objectMode || 0 !== t.length ? w(e, a, t, !1) : A(e, a)) : w(e, a, t, !1))) : i || (a.reading = !1));
            return function(e) {
                return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
            }(a)
        }
        function w(e, t, r, i) {
            t.flowing && 0 === t.length && !t.sync ? (e.emit("data", r),
            e.read(0)) : (t.length += t.objectMode ? 1 : r.length,
            i ? t.buffer.unshift(r) : t.buffer.push(r),
            t.needReadable && E(e)),
            A(e, t)
        }
        Object.defineProperty(v.prototype, "destroyed", {
            get: function() {
                return void 0 !== this._readableState && this._readableState.destroyed
            },
            set: function(e) {
                this._readableState && (this._readableState.destroyed = e)
            }
        }),
        v.prototype.destroy = m.destroy,
        v.prototype._undestroy = m.undestroy,
        v.prototype._destroy = function(e, t) {
            this.push(null),
            t(e)
        }
        ,
        v.prototype.push = function(e, t) {
            var r, i = this._readableState;
            return i.objectMode ? r = !0 : "string" == typeof e && ((t = t || i.defaultEncoding) !== i.encoding && (e = c.from(e, t),
            t = ""),
            r = !0),
            _(this, e, t, !1, r)
        }
        ,
        v.prototype.unshift = function(e) {
            return _(this, e, null, !0, !1)
        }
        ,
        v.prototype.isPaused = function() {
            return !1 === this._readableState.flowing
        }
        ,
        v.prototype.setEncoding = function(e) {
            return p || (p = r(92).StringDecoder),
            this._readableState.decoder = new p(e),
            this._readableState.encoding = e,
            this
        }
        ;
        var S = 8388608;
        function M(e, t) {
            return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function(e) {
                return e >= S ? e = S : (e--,
                e |= e >>> 1,
                e |= e >>> 2,
                e |= e >>> 4,
                e |= e >>> 8,
                e |= e >>> 16,
                e++),
                e
            }(e)),
            e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0,
            0))
        }
        function E(e) {
            var t = e._readableState;
            t.needReadable = !1,
            t.emittedReadable || (l("emitReadable", t.flowing),
            t.emittedReadable = !0,
            t.sync ? n.nextTick(k, e) : k(e))
        }
        function k(e) {
            l("emit readable"),
            e.emit("readable"),
            T(e)
        }
        function A(e, t) {
            t.readingMore || (t.readingMore = !0,
            n.nextTick(x, e, t))
        }
        function x(e, t) {
            for (var r = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (l("maybeReadMore read 0"),
            e.read(0),
            r !== t.length); )
                r = t.length;
            t.readingMore = !1
        }
        function I(e) {
            l("readable nexttick read 0"),
            e.read(0)
        }
        function B(e, t) {
            t.reading || (l("resume read 0"),
            e.read(0)),
            t.resumeScheduled = !1,
            t.awaitDrain = 0,
            e.emit("resume"),
            T(e),
            t.flowing && !t.reading && e.read(0)
        }
        function T(e) {
            var t = e._readableState;
            for (l("flow", t.flowing); t.flowing && null !== e.read(); )
                ;
        }
        function R(e, t) {
            return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length),
            t.buffer.clear()) : r = function(e, t, r) {
                var i;
                e < t.head.data.length ? (i = t.head.data.slice(0, e),
                t.head.data = t.head.data.slice(e)) : i = e === t.head.data.length ? t.shift() : r ? function(e, t) {
                    var r = t.head
                      , i = 1
                      , n = r.data;
                    e -= n.length;
                    for (; r = r.next; ) {
                        var o = r.data
                          , a = e > o.length ? o.length : e;
                        if (a === o.length ? n += o : n += o.slice(0, e),
                        0 === (e -= a)) {
                            a === o.length ? (++i,
                            r.next ? t.head = r.next : t.head = t.tail = null) : (t.head = r,
                            r.data = o.slice(a));
                            break
                        }
                        ++i
                    }
                    return t.length -= i,
                    n
                }(e, t) : function(e, t) {
                    var r = c.allocUnsafe(e)
                      , i = t.head
                      , n = 1;
                    i.data.copy(r),
                    e -= i.data.length;
                    for (; i = i.next; ) {
                        var o = i.data
                          , a = e > o.length ? o.length : e;
                        if (o.copy(r, r.length - e, 0, a),
                        0 === (e -= a)) {
                            a === o.length ? (++n,
                            i.next ? t.head = i.next : t.head = t.tail = null) : (t.head = i,
                            i.data = o.slice(a));
                            break
                        }
                        ++n
                    }
                    return t.length -= n,
                    r
                }(e, t);
                return i
            }(e, t.buffer, t.decoder),
            r);
            var r
        }
        function C(e) {
            var t = e._readableState;
            if (t.length > 0)
                throw new Error('"endReadable()" called on non-empty stream');
            t.endEmitted || (t.ended = !0,
            n.nextTick(P, t, e))
        }
        function P(e, t) {
            e.endEmitted || 0 !== e.length || (e.endEmitted = !0,
            t.readable = !1,
            t.emit("end"))
        }
        function j(e, t) {
            for (var r = 0, i = e.length; r < i; r++)
                if (e[r] === t)
                    return r;
            return -1
        }
        v.prototype.read = function(e) {
            l("read", e),
            e = parseInt(e, 10);
            var t = this._readableState
              , r = e;
            if (0 !== e && (t.emittedReadable = !1),
            0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended))
                return l("read: emitReadable", t.length, t.ended),
                0 === t.length && t.ended ? C(this) : E(this),
                null;
            if (0 === (e = M(e, t)) && t.ended)
                return 0 === t.length && C(this),
                null;
            var i, n = t.needReadable;
            return l("need readable", n),
            (0 === t.length || t.length - e < t.highWaterMark) && l("length less than watermark", n = !0),
            t.ended || t.reading ? l("reading or ended", n = !1) : n && (l("do read"),
            t.reading = !0,
            t.sync = !0,
            0 === t.length && (t.needReadable = !0),
            this._read(t.highWaterMark),
            t.sync = !1,
            t.reading || (e = M(r, t))),
            null === (i = e > 0 ? R(e, t) : null) ? (t.needReadable = !0,
            e = 0) : t.length -= e,
            0 === t.length && (t.ended || (t.needReadable = !0),
            r !== e && t.ended && C(this)),
            null !== i && this.emit("data", i),
            i
        }
        ,
        v.prototype._read = function(e) {
            this.emit("error", new Error("_read() is not implemented"))
        }
        ,
        v.prototype.pipe = function(e, t) {
            var r = this
              , o = this._readableState;
            switch (o.pipesCount) {
            case 0:
                o.pipes = e;
                break;
            case 1:
                o.pipes = [o.pipes, e];
                break;
            default:
                o.pipes.push(e)
            }
            o.pipesCount += 1,
            l("pipe count=%d opts=%j", o.pipesCount, t);
            var f = (!t || !1 !== t.end) && e !== i.stdout && e !== i.stderr ? h : v;
            function c(t, i) {
                l("onunpipe"),
                t === r && i && !1 === i.hasUnpiped && (i.hasUnpiped = !0,
                l("cleanup"),
                e.removeListener("close", y),
                e.removeListener("finish", g),
                e.removeListener("drain", d),
                e.removeListener("error", m),
                e.removeListener("unpipe", c),
                r.removeListener("end", h),
                r.removeListener("end", v),
                r.removeListener("data", b),
                u = !0,
                !o.awaitDrain || e._writableState && !e._writableState.needDrain || d())
            }
            function h() {
                l("onend"),
                e.end()
            }
            o.endEmitted ? n.nextTick(f) : r.once("end", f),
            e.on("unpipe", c);
            var d = function(e) {
                return function() {
                    var t = e._readableState;
                    l("pipeOnDrain", t.awaitDrain),
                    t.awaitDrain && t.awaitDrain--,
                    0 === t.awaitDrain && s(e, "data") && (t.flowing = !0,
                    T(e))
                }
            }(r);
            e.on("drain", d);
            var u = !1;
            var p = !1;
            function b(t) {
                l("ondata"),
                p = !1,
                !1 !== e.write(t) || p || ((1 === o.pipesCount && o.pipes === e || o.pipesCount > 1 && -1 !== j(o.pipes, e)) && !u && (l("false write response, pause", r._readableState.awaitDrain),
                r._readableState.awaitDrain++,
                p = !0),
                r.pause())
            }
            function m(t) {
                l("onerror", t),
                v(),
                e.removeListener("error", m),
                0 === s(e, "error") && e.emit("error", t)
            }
            function y() {
                e.removeListener("finish", g),
                v()
            }
            function g() {
                l("onfinish"),
                e.removeListener("close", y),
                v()
            }
            function v() {
                l("unpipe"),
                r.unpipe(e)
            }
            return r.on("data", b),
            function(e, t, r) {
                if ("function" == typeof e.prependListener)
                    return e.prependListener(t, r);
                e._events && e._events[t] ? a(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r)
            }(e, "error", m),
            e.once("close", y),
            e.once("finish", g),
            e.emit("pipe", r),
            o.flowing || (l("pipe resume"),
            r.resume()),
            e
        }
        ,
        v.prototype.unpipe = function(e) {
            var t = this._readableState
              , r = {
                hasUnpiped: !1
            };
            if (0 === t.pipesCount)
                return this;
            if (1 === t.pipesCount)
                return e && e !== t.pipes ? this : (e || (e = t.pipes),
                t.pipes = null,
                t.pipesCount = 0,
                t.flowing = !1,
                e && e.emit("unpipe", this, r),
                this);
            if (!e) {
                var i = t.pipes
                  , n = t.pipesCount;
                t.pipes = null,
                t.pipesCount = 0,
                t.flowing = !1;
                for (var o = 0; o < n; o++)
                    i[o].emit("unpipe", this, r);
                return this
            }
            var a = j(t.pipes, e);
            return -1 === a ? this : (t.pipes.splice(a, 1),
            t.pipesCount -= 1,
            1 === t.pipesCount && (t.pipes = t.pipes[0]),
            e.emit("unpipe", this, r),
            this)
        }
        ,
        v.prototype.on = function(e, t) {
            var r = f.prototype.on.call(this, e, t);
            if ("data" === e)
                !1 !== this._readableState.flowing && this.resume();
            else if ("readable" === e) {
                var i = this._readableState;
                i.endEmitted || i.readableListening || (i.readableListening = i.needReadable = !0,
                i.emittedReadable = !1,
                i.reading ? i.length && E(this) : n.nextTick(I, this))
            }
            return r
        }
        ,
        v.prototype.addListener = v.prototype.on,
        v.prototype.resume = function() {
            var e = this._readableState;
            return e.flowing || (l("resume"),
            e.flowing = !0,
            function(e, t) {
                t.resumeScheduled || (t.resumeScheduled = !0,
                n.nextTick(B, e, t))
            }(this, e)),
            this
        }
        ,
        v.prototype.pause = function() {
            return l("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing && (l("pause"),
            this._readableState.flowing = !1,
            this.emit("pause")),
            this
        }
        ,
        v.prototype.wrap = function(e) {
            var t = this
              , r = this._readableState
              , i = !1;
            for (var n in e.on("end", (function() {
                if (l("wrapped end"),
                r.decoder && !r.ended) {
                    var e = r.decoder.end();
                    e && e.length && t.push(e)
                }
                t.push(null)
            }
            )),
            e.on("data", (function(n) {
                (l("wrapped data"),
                r.decoder && (n = r.decoder.write(n)),
                r.objectMode && null == n) || (r.objectMode || n && n.length) && (t.push(n) || (i = !0,
                e.pause()))
            }
            )),
            e)
                void 0 === this[n] && "function" == typeof e[n] && (this[n] = function(t) {
                    return function() {
                        return e[t].apply(e, arguments)
                    }
                }(n));
            for (var o = 0; o < y.length; o++)
                e.on(y[o], this.emit.bind(this, y[o]));
            return this._read = function(t) {
                l("wrapped _read", t),
                i && (i = !1,
                e.resume())
            }
            ,
            this
        }
        ,
        Object.defineProperty(v.prototype, "readableHighWaterMark", {
            enumerable: !1,
            get: function() {
                return this._readableState.highWaterMark
            }
        }),
        v._fromList = R
    }
    ).call(this, r(38), r(45))
}
, function(e, t, r) {
    e.exports = r(89).EventEmitter
}
, function(e, t, r) {
    "use strict";
    var i = r(71);
    function n(e, t) {
        e.emit("error", t)
    }
    e.exports = {
        destroy: function(e, t) {
            var r = this
              , o = this._readableState && this._readableState.destroyed
              , a = this._writableState && this._writableState.destroyed;
            return o || a ? (t ? t(e) : !e || this._writableState && this._writableState.errorEmitted || i.nextTick(n, this, e),
            this) : (this._readableState && (this._readableState.destroyed = !0),
            this._writableState && (this._writableState.destroyed = !0),
            this._destroy(e || null, (function(e) {
                !t && e ? (i.nextTick(n, r, e),
                r._writableState && (r._writableState.errorEmitted = !0)) : t && t(e)
            }
            )),
            this)
        },
        undestroy: function() {
            this._readableState && (this._readableState.destroyed = !1,
            this._readableState.reading = !1,
            this._readableState.ended = !1,
            this._readableState.endEmitted = !1),
            this._writableState && (this._writableState.destroyed = !1,
            this._writableState.ended = !1,
            this._writableState.ending = !1,
            this._writableState.finished = !1,
            this._writableState.errorEmitted = !1)
        }
    }
}
, function(e, t, r) {
    "use strict";
    e.exports = a;
    var i = r(48)
      , n = r(60);
    function o(e, t) {
        var r = this._transformState;
        r.transforming = !1;
        var i = r.writecb;
        if (!i)
            return this.emit("error", new Error("write callback called multiple times"));
        r.writechunk = null,
        r.writecb = null,
        null != t && this.push(t),
        i(e);
        var n = this._readableState;
        n.reading = !1,
        (n.needReadable || n.length < n.highWaterMark) && this._read(n.highWaterMark)
    }
    function a(e) {
        if (!(this instanceof a))
            return new a(e);
        i.call(this, e),
        this._transformState = {
            afterTransform: o.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null
        },
        this._readableState.needReadable = !0,
        this._readableState.sync = !1,
        e && ("function" == typeof e.transform && (this._transform = e.transform),
        "function" == typeof e.flush && (this._flush = e.flush)),
        this.on("prefinish", s)
    }
    function s() {
        var e = this;
        "function" == typeof this._flush ? this._flush((function(t, r) {
            f(e, t, r)
        }
        )) : f(this, null, null)
    }
    function f(e, t, r) {
        if (t)
            return e.emit("error", t);
        if (null != r && e.push(r),
        e._writableState.length)
            throw new Error("Calling transform done when ws.length != 0");
        if (e._transformState.transforming)
            throw new Error("Calling transform done when still transforming");
        return e.push(null)
    }
    n.inherits = r(2),
    n.inherits(a, i),
    a.prototype.push = function(e, t) {
        return this._transformState.needTransform = !1,
        i.prototype.push.call(this, e, t)
    }
    ,
    a.prototype._transform = function(e, t, r) {
        throw new Error("_transform() is not implemented")
    }
    ,
    a.prototype._write = function(e, t, r) {
        var i = this._transformState;
        if (i.writecb = r,
        i.writechunk = e,
        i.writeencoding = t,
        !i.transforming) {
            var n = this._readableState;
            (i.needTransform || n.needReadable || n.length < n.highWaterMark) && this._read(n.highWaterMark)
        }
    }
    ,
    a.prototype._read = function(e) {
        var t = this._transformState;
        null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0,
        this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0
    }
    ,
    a.prototype._destroy = function(e, t) {
        var r = this;
        i.prototype._destroy.call(this, e, (function(e) {
            t(e),
            r.emit("close")
        }
        ))
    }
}
, function(e, t, r) {
    var i = r(2)
      , n = r(53)
      , o = r(4).Buffer
      , a = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]
      , s = new Array(64);
    function f() {
        this.init(),
        this._w = s,
        n.call(this, 64, 56)
    }
    function c(e, t, r) {
        return r ^ e & (t ^ r)
    }
    function h(e, t, r) {
        return e & t | r & (e | t)
    }
    function d(e) {
        return (e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10)
    }
    function u(e) {
        return (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7)
    }
    function l(e) {
        return (e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3
    }
    i(f, n),
    f.prototype.init = function() {
        return this._a = 1779033703,
        this._b = 3144134277,
        this._c = 1013904242,
        this._d = 2773480762,
        this._e = 1359893119,
        this._f = 2600822924,
        this._g = 528734635,
        this._h = 1541459225,
        this
    }
    ,
    f.prototype._update = function(e) {
        for (var t, r = this._w, i = 0 | this._a, n = 0 | this._b, o = 0 | this._c, s = 0 | this._d, f = 0 | this._e, p = 0 | this._f, b = 0 | this._g, m = 0 | this._h, y = 0; y < 16; ++y)
            r[y] = e.readInt32BE(4 * y);
        for (; y < 64; ++y)
            r[y] = 0 | (((t = r[y - 2]) >>> 17 | t << 15) ^ (t >>> 19 | t << 13) ^ t >>> 10) + r[y - 7] + l(r[y - 15]) + r[y - 16];
        for (var g = 0; g < 64; ++g) {
            var v = m + u(f) + c(f, p, b) + a[g] + r[g] | 0
              , _ = d(i) + h(i, n, o) | 0;
            m = b,
            b = p,
            p = f,
            f = s + v | 0,
            s = o,
            o = n,
            n = i,
            i = v + _ | 0
        }
        this._a = i + this._a | 0,
        this._b = n + this._b | 0,
        this._c = o + this._c | 0,
        this._d = s + this._d | 0,
        this._e = f + this._e | 0,
        this._f = p + this._f | 0,
        this._g = b + this._g | 0,
        this._h = m + this._h | 0
    }
    ,
    f.prototype._hash = function() {
        var e = o.allocUnsafe(32);
        return e.writeInt32BE(this._a, 0),
        e.writeInt32BE(this._b, 4),
        e.writeInt32BE(this._c, 8),
        e.writeInt32BE(this._d, 12),
        e.writeInt32BE(this._e, 16),
        e.writeInt32BE(this._f, 20),
        e.writeInt32BE(this._g, 24),
        e.writeInt32BE(this._h, 28),
        e
    }
    ,
    e.exports = f
}
, function(e, t, r) {
    var i = r(2)
      , n = r(53)
      , o = r(4).Buffer
      , a = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]
      , s = new Array(160);
    function f() {
        this.init(),
        this._w = s,
        n.call(this, 128, 112)
    }
    function c(e, t, r) {
        return r ^ e & (t ^ r)
    }
    function h(e, t, r) {
        return e & t | r & (e | t)
    }
    function d(e, t) {
        return (e >>> 28 | t << 4) ^ (t >>> 2 | e << 30) ^ (t >>> 7 | e << 25)
    }
    function u(e, t) {
        return (e >>> 14 | t << 18) ^ (e >>> 18 | t << 14) ^ (t >>> 9 | e << 23)
    }
    function l(e, t) {
        return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ e >>> 7
    }
    function p(e, t) {
        return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ (e >>> 7 | t << 25)
    }
    function b(e, t) {
        return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ e >>> 6
    }
    function m(e, t) {
        return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ (e >>> 6 | t << 26)
    }
    function y(e, t) {
        return e >>> 0 < t >>> 0 ? 1 : 0
    }
    i(f, n),
    f.prototype.init = function() {
        return this._ah = 1779033703,
        this._bh = 3144134277,
        this._ch = 1013904242,
        this._dh = 2773480762,
        this._eh = 1359893119,
        this._fh = 2600822924,
        this._gh = 528734635,
        this._hh = 1541459225,
        this._al = 4089235720,
        this._bl = 2227873595,
        this._cl = 4271175723,
        this._dl = 1595750129,
        this._el = 2917565137,
        this._fl = 725511199,
        this._gl = 4215389547,
        this._hl = 327033209,
        this
    }
    ,
    f.prototype._update = function(e) {
        for (var t = this._w, r = 0 | this._ah, i = 0 | this._bh, n = 0 | this._ch, o = 0 | this._dh, s = 0 | this._eh, f = 0 | this._fh, g = 0 | this._gh, v = 0 | this._hh, _ = 0 | this._al, w = 0 | this._bl, S = 0 | this._cl, M = 0 | this._dl, E = 0 | this._el, k = 0 | this._fl, A = 0 | this._gl, x = 0 | this._hl, I = 0; I < 32; I += 2)
            t[I] = e.readInt32BE(4 * I),
            t[I + 1] = e.readInt32BE(4 * I + 4);
        for (; I < 160; I += 2) {
            var B = t[I - 30]
              , T = t[I - 30 + 1]
              , R = l(B, T)
              , C = p(T, B)
              , P = b(B = t[I - 4], T = t[I - 4 + 1])
              , j = m(T, B)
              , O = t[I - 14]
              , L = t[I - 14 + 1]
              , D = t[I - 32]
              , N = t[I - 32 + 1]
              , U = C + L | 0
              , q = R + O + y(U, C) | 0;
            q = (q = q + P + y(U = U + j | 0, j) | 0) + D + y(U = U + N | 0, N) | 0,
            t[I] = q,
            t[I + 1] = U
        }
        for (var z = 0; z < 160; z += 2) {
            q = t[z],
            U = t[z + 1];
            var F = h(r, i, n)
              , H = h(_, w, S)
              , K = d(r, _)
              , Y = d(_, r)
              , W = u(s, E)
              , V = u(E, s)
              , G = a[z]
              , X = a[z + 1]
              , Z = c(s, f, g)
              , J = c(E, k, A)
              , $ = x + V | 0
              , Q = v + W + y($, x) | 0;
            Q = (Q = (Q = Q + Z + y($ = $ + J | 0, J) | 0) + G + y($ = $ + X | 0, X) | 0) + q + y($ = $ + U | 0, U) | 0;
            var ee = Y + H | 0
              , te = K + F + y(ee, Y) | 0;
            v = g,
            x = A,
            g = f,
            A = k,
            f = s,
            k = E,
            s = o + Q + y(E = M + $ | 0, M) | 0,
            o = n,
            M = S,
            n = i,
            S = w,
            i = r,
            w = _,
            r = Q + te + y(_ = $ + ee | 0, $) | 0
        }
        this._al = this._al + _ | 0,
        this._bl = this._bl + w | 0,
        this._cl = this._cl + S | 0,
        this._dl = this._dl + M | 0,
        this._el = this._el + E | 0,
        this._fl = this._fl + k | 0,
        this._gl = this._gl + A | 0,
        this._hl = this._hl + x | 0,
        this._ah = this._ah + r + y(this._al, _) | 0,
        this._bh = this._bh + i + y(this._bl, w) | 0,
        this._ch = this._ch + n + y(this._cl, S) | 0,
        this._dh = this._dh + o + y(this._dl, M) | 0,
        this._eh = this._eh + s + y(this._el, E) | 0,
        this._fh = this._fh + f + y(this._fl, k) | 0,
        this._gh = this._gh + g + y(this._gl, A) | 0,
        this._hh = this._hh + v + y(this._hl, x) | 0
    }
    ,
    f.prototype._hash = function() {
        var e = o.allocUnsafe(64);
        function t(t, r, i) {
            e.writeInt32BE(t, i),
            e.writeInt32BE(r, i + 4)
        }
        return t(this._ah, this._al, 0),
        t(this._bh, this._bl, 8),
        t(this._ch, this._cl, 16),
        t(this._dh, this._dl, 24),
        t(this._eh, this._el, 32),
        t(this._fh, this._fl, 40),
        t(this._gh, this._gl, 48),
        t(this._hh, this._hl, 56),
        e
    }
    ,
    e.exports = f
}
, function(e, t, r) {
    "use strict";
    var i = r(2)
      , n = r(238)
      , o = r(46)
      , a = r(4).Buffer
      , s = r(132)
      , f = r(93)
      , c = r(94)
      , h = a.alloc(128);
    function d(e, t) {
        o.call(this, "digest"),
        "string" == typeof t && (t = a.from(t));
        var r = "sha512" === e || "sha384" === e ? 128 : 64;
        (this._alg = e,
        this._key = t,
        t.length > r) ? t = ("rmd160" === e ? new f : c(e)).update(t).digest() : t.length < r && (t = a.concat([t, h], r));
        for (var i = this._ipad = a.allocUnsafe(r), n = this._opad = a.allocUnsafe(r), s = 0; s < r; s++)
            i[s] = 54 ^ t[s],
            n[s] = 92 ^ t[s];
        this._hash = "rmd160" === e ? new f : c(e),
        this._hash.update(i)
    }
    i(d, o),
    d.prototype._update = function(e) {
        this._hash.update(e)
    }
    ,
    d.prototype._final = function() {
        var e = this._hash.digest();
        return ("rmd160" === this._alg ? new f : c(this._alg)).update(this._opad).update(e).digest()
    }
    ,
    e.exports = function(e, t) {
        return "rmd160" === (e = e.toLowerCase()) || "ripemd160" === e ? new d("rmd160",t) : "md5" === e ? new n(s,t) : new d(e,t)
    }
}
, function(e, t, r) {
    var i = r(87);
    e.exports = function(e) {
        return (new i).update(e).digest()
    }
}
, function(e) {
    e.exports = JSON.parse('{"sha224WithRSAEncryption":{"sign":"rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"RSA-SHA224":{"sign":"ecdsa/rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"sha256WithRSAEncryption":{"sign":"rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"RSA-SHA256":{"sign":"ecdsa/rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"sha384WithRSAEncryption":{"sign":"rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"RSA-SHA384":{"sign":"ecdsa/rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"sha512WithRSAEncryption":{"sign":"rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA512":{"sign":"ecdsa/rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA1":{"sign":"rsa","hash":"sha1","id":"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{"sign":"ecdsa","hash":"sha1","id":""},"sha256":{"sign":"ecdsa","hash":"sha256","id":""},"sha224":{"sign":"ecdsa","hash":"sha224","id":""},"sha384":{"sign":"ecdsa","hash":"sha384","id":""},"sha512":{"sign":"ecdsa","hash":"sha512","id":""},"DSA-SHA":{"sign":"dsa","hash":"sha1","id":""},"DSA-SHA1":{"sign":"dsa","hash":"sha1","id":""},"DSA":{"sign":"dsa","hash":"sha1","id":""},"DSA-WITH-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-WITH-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-WITH-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-WITH-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-RIPEMD160":{"sign":"dsa","hash":"rmd160","id":""},"ripemd160WithRSA":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"RSA-RIPEMD160":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"md5WithRSAEncryption":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"},"RSA-MD5":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"}}')
}
, function(e, t, r) {
    t.pbkdf2 = r(240),
    t.pbkdf2Sync = r(137)
}
, function(e, t, r) {
    (function(t) {
        var r = Math.pow(2, 30) - 1;
        function i(e, r) {
            if ("string" != typeof e && !t.isBuffer(e))
                throw new TypeError(r + " must be a buffer or string")
        }
        e.exports = function(e, t, n, o) {
            if (i(e, "Password"),
            i(t, "Salt"),
            "number" != typeof n)
                throw new TypeError("Iterations not a number");
            if (n < 0)
                throw new TypeError("Bad iterations");
            if ("number" != typeof o)
                throw new TypeError("Key length not a number");
            if (o < 0 || o > r || o != o)
                throw new TypeError("Bad key length")
        }
    }
    ).call(this, r(20).Buffer)
}
, function(e, t, r) {
    (function(t) {
        var r;
        t.browser ? r = "utf-8" : r = parseInt(t.version.split(".")[0].slice(1), 10) >= 6 ? "utf-8" : "binary";
        e.exports = r
    }
    ).call(this, r(45))
}
, function(e, t, r) {
    var i = r(132)
      , n = r(93)
      , o = r(94)
      , a = r(135)
      , s = r(136)
      , f = r(4).Buffer
      , c = f.alloc(128)
      , h = {
        md5: 16,
        sha1: 20,
        sha224: 28,
        sha256: 32,
        sha384: 48,
        sha512: 64,
        rmd160: 20,
        ripemd160: 20
    };
    function d(e, t, r) {
        var a = function(e) {
            return "rmd160" === e || "ripemd160" === e ? function(e) {
                return (new n).update(e).digest()
            }
            : "md5" === e ? i : function(t) {
                return o(e).update(t).digest()
            }
        }(e)
          , s = "sha512" === e || "sha384" === e ? 128 : 64;
        t.length > s ? t = a(t) : t.length < s && (t = f.concat([t, c], s));
        for (var d = f.allocUnsafe(s + h[e]), u = f.allocUnsafe(s + h[e]), l = 0; l < s; l++)
            d[l] = 54 ^ t[l],
            u[l] = 92 ^ t[l];
        var p = f.allocUnsafe(s + r + 4);
        d.copy(p, 0, 0, s),
        this.ipad1 = p,
        this.ipad2 = d,
        this.opad = u,
        this.alg = e,
        this.blocksize = s,
        this.hash = a,
        this.size = h[e]
    }
    d.prototype.run = function(e, t) {
        return e.copy(t, this.blocksize),
        this.hash(t).copy(this.opad, this.blocksize),
        this.hash(this.opad)
    }
    ,
    e.exports = function(e, t, r, i, n) {
        a(e, t, r, i),
        f.isBuffer(e) || (e = f.from(e, s)),
        f.isBuffer(t) || (t = f.from(t, s));
        var o = new d(n = n || "sha1",e,t.length)
          , c = f.allocUnsafe(i)
          , u = f.allocUnsafe(t.length + 4);
        t.copy(u, 0, 0, t.length);
        for (var l = 0, p = h[n], b = Math.ceil(i / p), m = 1; m <= b; m++) {
            u.writeUInt32BE(m, t.length);
            for (var y = o.run(u, o.ipad1), g = y, v = 1; v < r; v++) {
                g = o.run(g, o.ipad2);
                for (var _ = 0; _ < p; _++)
                    y[_] ^= g[_]
            }
            y.copy(c, l),
            l += p
        }
        return c
    }
}
, function(e, t, r) {
    "use strict";
    t.readUInt32BE = function(e, t) {
        return (e[0 + t] << 24 | e[1 + t] << 16 | e[2 + t] << 8 | e[3 + t]) >>> 0
    }
    ,
    t.writeUInt32BE = function(e, t, r) {
        e[0 + r] = t >>> 24,
        e[1 + r] = t >>> 16 & 255,
        e[2 + r] = t >>> 8 & 255,
        e[3 + r] = 255 & t
    }
    ,
    t.ip = function(e, t, r, i) {
        for (var n = 0, o = 0, a = 6; a >= 0; a -= 2) {
            for (var s = 0; s <= 24; s += 8)
                n <<= 1,
                n |= t >>> s + a & 1;
            for (s = 0; s <= 24; s += 8)
                n <<= 1,
                n |= e >>> s + a & 1
        }
        for (a = 6; a >= 0; a -= 2) {
            for (s = 1; s <= 25; s += 8)
                o <<= 1,
                o |= t >>> s + a & 1;
            for (s = 1; s <= 25; s += 8)
                o <<= 1,
                o |= e >>> s + a & 1
        }
        r[i + 0] = n >>> 0,
        r[i + 1] = o >>> 0
    }
    ,
    t.rip = function(e, t, r, i) {
        for (var n = 0, o = 0, a = 0; a < 4; a++)
            for (var s = 24; s >= 0; s -= 8)
                n <<= 1,
                n |= t >>> s + a & 1,
                n <<= 1,
                n |= e >>> s + a & 1;
        for (a = 4; a < 8; a++)
            for (s = 24; s >= 0; s -= 8)
                o <<= 1,
                o |= t >>> s + a & 1,
                o <<= 1,
                o |= e >>> s + a & 1;
        r[i + 0] = n >>> 0,
        r[i + 1] = o >>> 0
    }
    ,
    t.pc1 = function(e, t, r, i) {
        for (var n = 0, o = 0, a = 7; a >= 5; a--) {
            for (var s = 0; s <= 24; s += 8)
                n <<= 1,
                n |= t >> s + a & 1;
            for (s = 0; s <= 24; s += 8)
                n <<= 1,
                n |= e >> s + a & 1
        }
        for (s = 0; s <= 24; s += 8)
            n <<= 1,
            n |= t >> s + a & 1;
        for (a = 1; a <= 3; a++) {
            for (s = 0; s <= 24; s += 8)
                o <<= 1,
                o |= t >> s + a & 1;
            for (s = 0; s <= 24; s += 8)
                o <<= 1,
                o |= e >> s + a & 1
        }
        for (s = 0; s <= 24; s += 8)
            o <<= 1,
            o |= e >> s + a & 1;
        r[i + 0] = n >>> 0,
        r[i + 1] = o >>> 0
    }
    ,
    t.r28shl = function(e, t) {
        return e << t & 268435455 | e >>> 28 - t
    }
    ;
    var i = [14, 11, 17, 4, 27, 23, 25, 0, 13, 22, 7, 18, 5, 9, 16, 24, 2, 20, 12, 21, 1, 8, 15, 26, 15, 4, 25, 19, 9, 1, 26, 16, 5, 11, 23, 8, 12, 7, 17, 0, 22, 3, 10, 14, 6, 20, 27, 24];
    t.pc2 = function(e, t, r, n) {
        for (var o = 0, a = 0, s = i.length >>> 1, f = 0; f < s; f++)
            o <<= 1,
            o |= e >>> i[f] & 1;
        for (f = s; f < i.length; f++)
            a <<= 1,
            a |= t >>> i[f] & 1;
        r[n + 0] = o >>> 0,
        r[n + 1] = a >>> 0
    }
    ,
    t.expand = function(e, t, r) {
        var i = 0
          , n = 0;
        i = (1 & e) << 5 | e >>> 27;
        for (var o = 23; o >= 15; o -= 4)
            i <<= 6,
            i |= e >>> o & 63;
        for (o = 11; o >= 3; o -= 4)
            n |= e >>> o & 63,
            n <<= 6;
        n |= (31 & e) << 1 | e >>> 31,
        t[r + 0] = i >>> 0,
        t[r + 1] = n >>> 0
    }
    ;
    var n = [14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1, 3, 10, 10, 6, 6, 12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8, 4, 15, 1, 12, 14, 8, 8, 2, 13, 4, 6, 9, 2, 1, 11, 7, 15, 5, 12, 11, 9, 3, 7, 14, 3, 10, 10, 0, 5, 6, 0, 13, 15, 3, 1, 13, 8, 4, 14, 7, 6, 15, 11, 2, 3, 8, 4, 14, 9, 12, 7, 0, 2, 1, 13, 10, 12, 6, 0, 9, 5, 11, 10, 5, 0, 13, 14, 8, 7, 10, 11, 1, 10, 3, 4, 15, 13, 4, 1, 2, 5, 11, 8, 6, 12, 7, 6, 12, 9, 0, 3, 5, 2, 14, 15, 9, 10, 13, 0, 7, 9, 0, 14, 9, 6, 3, 3, 4, 15, 6, 5, 10, 1, 2, 13, 8, 12, 5, 7, 14, 11, 12, 4, 11, 2, 15, 8, 1, 13, 1, 6, 10, 4, 13, 9, 0, 8, 6, 15, 9, 3, 8, 0, 7, 11, 4, 1, 15, 2, 14, 12, 3, 5, 11, 10, 5, 14, 2, 7, 12, 7, 13, 13, 8, 14, 11, 3, 5, 0, 6, 6, 15, 9, 0, 10, 3, 1, 4, 2, 7, 8, 2, 5, 12, 11, 1, 12, 10, 4, 14, 15, 9, 10, 3, 6, 15, 9, 0, 0, 6, 12, 10, 11, 1, 7, 13, 13, 8, 15, 9, 1, 4, 3, 5, 14, 11, 5, 12, 2, 7, 8, 2, 4, 14, 2, 14, 12, 11, 4, 2, 1, 12, 7, 4, 10, 7, 11, 13, 6, 1, 8, 5, 5, 0, 3, 15, 15, 10, 13, 3, 0, 9, 14, 8, 9, 6, 4, 11, 2, 8, 1, 12, 11, 7, 10, 1, 13, 14, 7, 2, 8, 13, 15, 6, 9, 15, 12, 0, 5, 9, 6, 10, 3, 4, 0, 5, 14, 3, 12, 10, 1, 15, 10, 4, 15, 2, 9, 7, 2, 12, 6, 9, 8, 5, 0, 6, 13, 1, 3, 13, 4, 14, 14, 0, 7, 11, 5, 3, 11, 8, 9, 4, 14, 3, 15, 2, 5, 12, 2, 9, 8, 5, 12, 15, 3, 10, 7, 11, 0, 14, 4, 1, 10, 7, 1, 6, 13, 0, 11, 8, 6, 13, 4, 13, 11, 0, 2, 11, 14, 7, 15, 4, 0, 9, 8, 1, 13, 10, 3, 14, 12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6, 8, 1, 6, 1, 6, 4, 11, 11, 13, 13, 8, 12, 1, 3, 4, 7, 10, 14, 7, 10, 9, 15, 5, 6, 0, 8, 15, 0, 14, 5, 2, 9, 3, 2, 12, 13, 1, 2, 15, 8, 13, 4, 8, 6, 10, 15, 3, 11, 7, 1, 4, 10, 12, 9, 5, 3, 6, 14, 11, 5, 0, 0, 14, 12, 9, 7, 2, 7, 2, 11, 1, 4, 14, 1, 7, 9, 4, 12, 10, 14, 8, 2, 13, 0, 15, 6, 12, 10, 9, 13, 0, 15, 3, 3, 5, 5, 6, 8, 11];
    t.substitute = function(e, t) {
        for (var r = 0, i = 0; i < 4; i++) {
            r <<= 4,
            r |= n[64 * i + (e >>> 18 - 6 * i & 63)]
        }
        for (i = 0; i < 4; i++) {
            r <<= 4,
            r |= n[256 + 64 * i + (t >>> 18 - 6 * i & 63)]
        }
        return r >>> 0
    }
    ;
    var o = [16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22, 30, 24, 8, 18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7];
    t.permute = function(e) {
        for (var t = 0, r = 0; r < o.length; r++)
            t <<= 1,
            t |= e >>> o[r] & 1;
        return t >>> 0
    }
    ,
    t.padSplit = function(e, t, r) {
        for (var i = e.toString(2); i.length < t; )
            i = "0" + i;
        for (var n = [], o = 0; o < t; o += r)
            n.push(i.slice(o, o + r));
        return n.join(" ")
    }
}
, function(e, t, r) {
    "use strict";
    var i = r(32)
      , n = r(2)
      , o = r(138)
      , a = r(95);
    function s() {
        this.tmp = new Array(2),
        this.keys = null
    }
    function f(e) {
        a.call(this, e);
        var t = new s;
        this._desState = t,
        this.deriveKeys(t, e.key)
    }
    n(f, a),
    e.exports = f,
    f.create = function(e) {
        return new f(e)
    }
    ;
    var c = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
    f.prototype.deriveKeys = function(e, t) {
        e.keys = new Array(32),
        i.equal(t.length, this.blockSize, "Invalid key length");
        var r = o.readUInt32BE(t, 0)
          , n = o.readUInt32BE(t, 4);
        o.pc1(r, n, e.tmp, 0),
        r = e.tmp[0],
        n = e.tmp[1];
        for (var a = 0; a < e.keys.length; a += 2) {
            var s = c[a >>> 1];
            r = o.r28shl(r, s),
            n = o.r28shl(n, s),
            o.pc2(r, n, e.keys, a)
        }
    }
    ,
    f.prototype._update = function(e, t, r, i) {
        var n = this._desState
          , a = o.readUInt32BE(e, t)
          , s = o.readUInt32BE(e, t + 4);
        o.ip(a, s, n.tmp, 0),
        a = n.tmp[0],
        s = n.tmp[1],
        "encrypt" === this.type ? this._encrypt(n, a, s, n.tmp, 0) : this._decrypt(n, a, s, n.tmp, 0),
        a = n.tmp[0],
        s = n.tmp[1],
        o.writeUInt32BE(r, a, i),
        o.writeUInt32BE(r, s, i + 4)
    }
    ,
    f.prototype._pad = function(e, t) {
        for (var r = e.length - t, i = t; i < e.length; i++)
            e[i] = r;
        return !0
    }
    ,
    f.prototype._unpad = function(e) {
        for (var t = e[e.length - 1], r = e.length - t; r < e.length; r++)
            i.equal(e[r], t);
        return e.slice(0, e.length - t)
    }
    ,
    f.prototype._encrypt = function(e, t, r, i, n) {
        for (var a = t, s = r, f = 0; f < e.keys.length; f += 2) {
            var c = e.keys[f]
              , h = e.keys[f + 1];
            o.expand(s, e.tmp, 0),
            c ^= e.tmp[0],
            h ^= e.tmp[1];
            var d = o.substitute(c, h)
              , u = s;
            s = (a ^ o.permute(d)) >>> 0,
            a = u
        }
        o.rip(s, a, i, n)
    }
    ,
    f.prototype._decrypt = function(e, t, r, i, n) {
        for (var a = r, s = t, f = e.keys.length - 2; f >= 0; f -= 2) {
            var c = e.keys[f]
              , h = e.keys[f + 1];
            o.expand(a, e.tmp, 0),
            c ^= e.tmp[0],
            h ^= e.tmp[1];
            var d = o.substitute(c, h)
              , u = a;
            a = (s ^ o.permute(d)) >>> 0,
            s = u
        }
        o.rip(a, s, i, n)
    }
}
, function(e, t, r) {
    var i = r(61)
      , n = r(4).Buffer
      , o = r(141);
    function a(e) {
        var t = e._cipher.encryptBlockRaw(e._prev);
        return o(e._prev),
        t
    }
    t.encrypt = function(e, t) {
        var r = Math.ceil(t.length / 16)
          , o = e._cache.length;
        e._cache = n.concat([e._cache, n.allocUnsafe(16 * r)]);
        for (var s = 0; s < r; s++) {
            var f = a(e)
              , c = o + 16 * s;
            e._cache.writeUInt32BE(f[0], c + 0),
            e._cache.writeUInt32BE(f[1], c + 4),
            e._cache.writeUInt32BE(f[2], c + 8),
            e._cache.writeUInt32BE(f[3], c + 12)
        }
        var h = e._cache.slice(0, t.length);
        return e._cache = e._cache.slice(t.length),
        i(t, h)
    }
}
, function(e, t) {
    e.exports = function(e) {
        for (var t, r = e.length; r--; ) {
            if (255 !== (t = e.readUInt8(r))) {
                t++,
                e.writeUInt8(t, r);
                break
            }
            e.writeUInt8(0, r)
        }
    }
}
, function(e) {
    e.exports = JSON.parse('{"aes-128-ecb":{"cipher":"AES","key":128,"iv":0,"mode":"ECB","type":"block"},"aes-192-ecb":{"cipher":"AES","key":192,"iv":0,"mode":"ECB","type":"block"},"aes-256-ecb":{"cipher":"AES","key":256,"iv":0,"mode":"ECB","type":"block"},"aes-128-cbc":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes-192-cbc":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes-256-cbc":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes128":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes192":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes256":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes-128-cfb":{"cipher":"AES","key":128,"iv":16,"mode":"CFB","type":"stream"},"aes-192-cfb":{"cipher":"AES","key":192,"iv":16,"mode":"CFB","type":"stream"},"aes-256-cfb":{"cipher":"AES","key":256,"iv":16,"mode":"CFB","type":"stream"},"aes-128-cfb8":{"cipher":"AES","key":128,"iv":16,"mode":"CFB8","type":"stream"},"aes-192-cfb8":{"cipher":"AES","key":192,"iv":16,"mode":"CFB8","type":"stream"},"aes-256-cfb8":{"cipher":"AES","key":256,"iv":16,"mode":"CFB8","type":"stream"},"aes-128-cfb1":{"cipher":"AES","key":128,"iv":16,"mode":"CFB1","type":"stream"},"aes-192-cfb1":{"cipher":"AES","key":192,"iv":16,"mode":"CFB1","type":"stream"},"aes-256-cfb1":{"cipher":"AES","key":256,"iv":16,"mode":"CFB1","type":"stream"},"aes-128-ofb":{"cipher":"AES","key":128,"iv":16,"mode":"OFB","type":"stream"},"aes-192-ofb":{"cipher":"AES","key":192,"iv":16,"mode":"OFB","type":"stream"},"aes-256-ofb":{"cipher":"AES","key":256,"iv":16,"mode":"OFB","type":"stream"},"aes-128-ctr":{"cipher":"AES","key":128,"iv":16,"mode":"CTR","type":"stream"},"aes-192-ctr":{"cipher":"AES","key":192,"iv":16,"mode":"CTR","type":"stream"},"aes-256-ctr":{"cipher":"AES","key":256,"iv":16,"mode":"CTR","type":"stream"},"aes-128-gcm":{"cipher":"AES","key":128,"iv":12,"mode":"GCM","type":"auth"},"aes-192-gcm":{"cipher":"AES","key":192,"iv":12,"mode":"GCM","type":"auth"},"aes-256-gcm":{"cipher":"AES","key":256,"iv":12,"mode":"GCM","type":"auth"}}')
}
, function(e, t, r) {
    var i = r(72)
      , n = r(4).Buffer
      , o = r(46)
      , a = r(2)
      , s = r(253)
      , f = r(61)
      , c = r(141);
    function h(e, t, r, a) {
        o.call(this);
        var f = n.alloc(4, 0);
        this._cipher = new i.AES(t);
        var h = this._cipher.encryptBlock(f);
        this._ghash = new s(h),
        r = function(e, t, r) {
            if (12 === t.length)
                return e._finID = n.concat([t, n.from([0, 0, 0, 1])]),
                n.concat([t, n.from([0, 0, 0, 2])]);
            var i = new s(r)
              , o = t.length
              , a = o % 16;
            i.update(t),
            a && (a = 16 - a,
            i.update(n.alloc(a, 0))),
            i.update(n.alloc(8, 0));
            var f = 8 * o
              , h = n.alloc(8);
            h.writeUIntBE(f, 0, 8),
            i.update(h),
            e._finID = i.state;
            var d = n.from(e._finID);
            return c(d),
            d
        }(this, r, h),
        this._prev = n.from(r),
        this._cache = n.allocUnsafe(0),
        this._secCache = n.allocUnsafe(0),
        this._decrypt = a,
        this._alen = 0,
        this._len = 0,
        this._mode = e,
        this._authTag = null,
        this._called = !1
    }
    a(h, o),
    h.prototype._update = function(e) {
        if (!this._called && this._alen) {
            var t = 16 - this._alen % 16;
            t < 16 && (t = n.alloc(t, 0),
            this._ghash.update(t))
        }
        this._called = !0;
        var r = this._mode.encrypt(this, e);
        return this._decrypt ? this._ghash.update(e) : this._ghash.update(r),
        this._len += e.length,
        r
    }
    ,
    h.prototype._final = function() {
        if (this._decrypt && !this._authTag)
            throw new Error("Unsupported state or unable to authenticate data");
        var e = f(this._ghash.final(8 * this._alen, 8 * this._len), this._cipher.encryptBlock(this._finID));
        if (this._decrypt && function(e, t) {
            var r = 0;
            e.length !== t.length && r++;
            for (var i = Math.min(e.length, t.length), n = 0; n < i; ++n)
                r += e[n] ^ t[n];
            return r
        }(e, this._authTag))
            throw new Error("Unsupported state or unable to authenticate data");
        this._authTag = e,
        this._cipher.scrub()
    }
    ,
    h.prototype.getAuthTag = function() {
        if (this._decrypt || !n.isBuffer(this._authTag))
            throw new Error("Attempting to get auth tag in unsupported state");
        return this._authTag
    }
    ,
    h.prototype.setAuthTag = function(e) {
        if (!this._decrypt)
            throw new Error("Attempting to set auth tag in unsupported state");
        this._authTag = e
    }
    ,
    h.prototype.setAAD = function(e) {
        if (this._called)
            throw new Error("Attempting to set AAD in unsupported state");
        this._ghash.update(e),
        this._alen += e.length
    }
    ,
    e.exports = h
}
, function(e, t, r) {
    var i = r(72)
      , n = r(4).Buffer
      , o = r(46);
    function a(e, t, r, a) {
        o.call(this),
        this._cipher = new i.AES(t),
        this._prev = n.from(r),
        this._cache = n.allocUnsafe(0),
        this._secCache = n.allocUnsafe(0),
        this._decrypt = a,
        this._mode = e
    }
    r(2)(a, o),
    a.prototype._update = function(e) {
        return this._mode.encrypt(this, e, this._decrypt)
    }
    ,
    a.prototype._final = function() {
        this._cipher.scrub()
    }
    ,
    e.exports = a
}
, function(e, t, r) {
    var i = r(52);
    e.exports = g,
    g.simpleSieve = m,
    g.fermatTest = y;
    var n = r(15)
      , o = new n(24)
      , a = new (r(146))
      , s = new n(1)
      , f = new n(2)
      , c = new n(5)
      , h = (new n(16),
    new n(8),
    new n(10))
      , d = new n(3)
      , u = (new n(7),
    new n(11))
      , l = new n(4)
      , p = (new n(12),
    null);
    function b() {
        if (null !== p)
            return p;
        var e = [];
        e[0] = 2;
        for (var t = 1, r = 3; r < 1048576; r += 2) {
            for (var i = Math.ceil(Math.sqrt(r)), n = 0; n < t && e[n] <= i && r % e[n] != 0; n++)
                ;
            t !== n && e[n] <= i || (e[t++] = r)
        }
        return p = e,
        e
    }
    function m(e) {
        for (var t = b(), r = 0; r < t.length; r++)
            if (0 === e.modn(t[r]))
                return 0 === e.cmpn(t[r]);
        return !0
    }
    function y(e) {
        var t = n.mont(e);
        return 0 === f.toRed(t).redPow(e.subn(1)).fromRed().cmpn(1)
    }
    function g(e, t) {
        if (e < 16)
            return new n(2 === t || 5 === t ? [140, 123] : [140, 39]);
        var r, p;
        for (t = new n(t); ; ) {
            for (r = new n(i(Math.ceil(e / 8))); r.bitLength() > e; )
                r.ishrn(1);
            if (r.isEven() && r.iadd(s),
            r.testn(1) || r.iadd(f),
            t.cmp(f)) {
                if (!t.cmp(c))
                    for (; r.mod(h).cmp(d); )
                        r.iadd(l)
            } else
                for (; r.mod(o).cmp(u); )
                    r.iadd(l);
            if (m(p = r.shrn(1)) && m(r) && y(p) && y(r) && a.test(p) && a.test(r))
                return r
        }
    }
}
, function(e, t, r) {
    var i = r(15)
      , n = r(98);
    function o(e) {
        this.rand = e || new n.Rand
    }
    e.exports = o,
    o.create = function(e) {
        return new o(e)
    }
    ,
    o.prototype._randbelow = function(e) {
        var t = e.bitLength()
          , r = Math.ceil(t / 8);
        do {
            var n = new i(this.rand.generate(r))
        } while (n.cmp(e) >= 0);
        return n
    }
    ,
    o.prototype._randrange = function(e, t) {
        var r = t.sub(e);
        return e.add(this._randbelow(r))
    }
    ,
    o.prototype.test = function(e, t, r) {
        var n = e.bitLength()
          , o = i.mont(e)
          , a = new i(1).toRed(o);
        t || (t = Math.max(1, n / 48 | 0));
        for (var s = e.subn(1), f = 0; !s.testn(f); f++)
            ;
        for (var c = e.shrn(f), h = s.toRed(o); t > 0; t--) {
            var d = this._randrange(new i(2), s);
            r && r(d);
            var u = d.toRed(o).redPow(c);
            if (0 !== u.cmp(a) && 0 !== u.cmp(h)) {
                for (var l = 1; l < f; l++) {
                    if (0 === (u = u.redSqr()).cmp(a))
                        return !1;
                    if (0 === u.cmp(h))
                        break
                }
                if (l === f)
                    return !1
            }
        }
        return !0
    }
    ,
    o.prototype.getDivisor = function(e, t) {
        var r = e.bitLength()
          , n = i.mont(e)
          , o = new i(1).toRed(n);
        t || (t = Math.max(1, r / 48 | 0));
        for (var a = e.subn(1), s = 0; !a.testn(s); s++)
            ;
        for (var f = e.shrn(s), c = a.toRed(n); t > 0; t--) {
            var h = this._randrange(new i(2), a)
              , d = e.gcd(h);
            if (0 !== d.cmpn(1))
                return d;
            var u = h.toRed(n).redPow(f);
            if (0 !== u.cmp(o) && 0 !== u.cmp(c)) {
                for (var l = 1; l < s; l++) {
                    if (0 === (u = u.redSqr()).cmp(o))
                        return u.fromRed().subn(1).gcd(e);
                    if (0 === u.cmp(c))
                        break
                }
                if (l === s)
                    return (u = u.redSqr()).fromRed().subn(1).gcd(e)
            }
        }
        return !1
    }
}
, function(e, t, r) {
    "use strict";
    var i = t;
    function n(e) {
        return 1 === e.length ? "0" + e : e
    }
    function o(e) {
        for (var t = "", r = 0; r < e.length; r++)
            t += n(e[r].toString(16));
        return t
    }
    i.toArray = function(e, t) {
        if (Array.isArray(e))
            return e.slice();
        if (!e)
            return [];
        var r = [];
        if ("string" != typeof e) {
            for (var i = 0; i < e.length; i++)
                r[i] = 0 | e[i];
            return r
        }
        if ("hex" === t) {
            (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e);
            for (i = 0; i < e.length; i += 2)
                r.push(parseInt(e[i] + e[i + 1], 16))
        } else
            for (i = 0; i < e.length; i++) {
                var n = e.charCodeAt(i)
                  , o = n >> 8
                  , a = 255 & n;
                o ? r.push(o, a) : r.push(a)
            }
        return r
    }
    ,
    i.zero2 = n,
    i.toHex = o,
    i.encode = function(e, t) {
        return "hex" === t ? o(e) : e
    }
}
, function(e, t, r) {
    "use strict";
    var i = t;
    i.base = r(74),
    i.short = r(265),
    i.mont = r(266),
    i.edwards = r(267)
}
, function(e, t, r) {
    "use strict";
    var i = r(39).rotr32;
    function n(e, t, r) {
        return e & t ^ ~e & r
    }
    function o(e, t, r) {
        return e & t ^ e & r ^ t & r
    }
    function a(e, t, r) {
        return e ^ t ^ r
    }
    t.ft_1 = function(e, t, r, i) {
        return 0 === e ? n(t, r, i) : 1 === e || 3 === e ? a(t, r, i) : 2 === e ? o(t, r, i) : void 0
    }
    ,
    t.ch32 = n,
    t.maj32 = o,
    t.p32 = a,
    t.s0_256 = function(e) {
        return i(e, 2) ^ i(e, 13) ^ i(e, 22)
    }
    ,
    t.s1_256 = function(e) {
        return i(e, 6) ^ i(e, 11) ^ i(e, 25)
    }
    ,
    t.g0_256 = function(e) {
        return i(e, 7) ^ i(e, 18) ^ e >>> 3
    }
    ,
    t.g1_256 = function(e) {
        return i(e, 17) ^ i(e, 19) ^ e >>> 10
    }
}
, function(e, t, r) {
    "use strict";
    var i = r(39)
      , n = r(62)
      , o = r(149)
      , a = r(32)
      , s = i.sum32
      , f = i.sum32_4
      , c = i.sum32_5
      , h = o.ch32
      , d = o.maj32
      , u = o.s0_256
      , l = o.s1_256
      , p = o.g0_256
      , b = o.g1_256
      , m = n.BlockHash
      , y = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
    function g() {
        if (!(this instanceof g))
            return new g;
        m.call(this),
        this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
        this.k = y,
        this.W = new Array(64)
    }
    i.inherits(g, m),
    e.exports = g,
    g.blockSize = 512,
    g.outSize = 256,
    g.hmacStrength = 192,
    g.padLength = 64,
    g.prototype._update = function(e, t) {
        for (var r = this.W, i = 0; i < 16; i++)
            r[i] = e[t + i];
        for (; i < r.length; i++)
            r[i] = f(b(r[i - 2]), r[i - 7], p(r[i - 15]), r[i - 16]);
        var n = this.h[0]
          , o = this.h[1]
          , m = this.h[2]
          , y = this.h[3]
          , g = this.h[4]
          , v = this.h[5]
          , _ = this.h[6]
          , w = this.h[7];
        for (a(this.k.length === r.length),
        i = 0; i < r.length; i++) {
            var S = c(w, l(g), h(g, v, _), this.k[i], r[i])
              , M = s(u(n), d(n, o, m));
            w = _,
            _ = v,
            v = g,
            g = s(y, S),
            y = m,
            m = o,
            o = n,
            n = s(S, M)
        }
        this.h[0] = s(this.h[0], n),
        this.h[1] = s(this.h[1], o),
        this.h[2] = s(this.h[2], m),
        this.h[3] = s(this.h[3], y),
        this.h[4] = s(this.h[4], g),
        this.h[5] = s(this.h[5], v),
        this.h[6] = s(this.h[6], _),
        this.h[7] = s(this.h[7], w)
    }
    ,
    g.prototype._digest = function(e) {
        return "hex" === e ? i.toHex32(this.h, "big") : i.split32(this.h, "big")
    }
}
, function(e, t, r) {
    "use strict";
    var i = r(39)
      , n = r(62)
      , o = r(32)
      , a = i.rotr64_hi
      , s = i.rotr64_lo
      , f = i.shr64_hi
      , c = i.shr64_lo
      , h = i.sum64
      , d = i.sum64_hi
      , u = i.sum64_lo
      , l = i.sum64_4_hi
      , p = i.sum64_4_lo
      , b = i.sum64_5_hi
      , m = i.sum64_5_lo
      , y = n.BlockHash
      , g = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
    function v() {
        if (!(this instanceof v))
            return new v;
        y.call(this),
        this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209],
        this.k = g,
        this.W = new Array(160)
    }
    function _(e, t, r, i, n) {
        var o = e & r ^ ~e & n;
        return o < 0 && (o += 4294967296),
        o
    }
    function w(e, t, r, i, n, o) {
        var a = t & i ^ ~t & o;
        return a < 0 && (a += 4294967296),
        a
    }
    function S(e, t, r, i, n) {
        var o = e & r ^ e & n ^ r & n;
        return o < 0 && (o += 4294967296),
        o
    }
    function M(e, t, r, i, n, o) {
        var a = t & i ^ t & o ^ i & o;
        return a < 0 && (a += 4294967296),
        a
    }
    function E(e, t) {
        var r = a(e, t, 28) ^ a(t, e, 2) ^ a(t, e, 7);
        return r < 0 && (r += 4294967296),
        r
    }
    function k(e, t) {
        var r = s(e, t, 28) ^ s(t, e, 2) ^ s(t, e, 7);
        return r < 0 && (r += 4294967296),
        r
    }
    function A(e, t) {
        var r = a(e, t, 14) ^ a(e, t, 18) ^ a(t, e, 9);
        return r < 0 && (r += 4294967296),
        r
    }
    function x(e, t) {
        var r = s(e, t, 14) ^ s(e, t, 18) ^ s(t, e, 9);
        return r < 0 && (r += 4294967296),
        r
    }
    function I(e, t) {
        var r = a(e, t, 1) ^ a(e, t, 8) ^ f(e, t, 7);
        return r < 0 && (r += 4294967296),
        r
    }
    function B(e, t) {
        var r = s(e, t, 1) ^ s(e, t, 8) ^ c(e, t, 7);
        return r < 0 && (r += 4294967296),
        r
    }
    function T(e, t) {
        var r = a(e, t, 19) ^ a(t, e, 29) ^ f(e, t, 6);
        return r < 0 && (r += 4294967296),
        r
    }
    function R(e, t) {
        var r = s(e, t, 19) ^ s(t, e, 29) ^ c(e, t, 6);
        return r < 0 && (r += 4294967296),
        r
    }
    i.inherits(v, y),
    e.exports = v,
    v.blockSize = 1024,
    v.outSize = 512,
    v.hmacStrength = 192,
    v.padLength = 128,
    v.prototype._prepareBlock = function(e, t) {
        for (var r = this.W, i = 0; i < 32; i++)
            r[i] = e[t + i];
        for (; i < r.length; i += 2) {
            var n = T(r[i - 4], r[i - 3])
              , o = R(r[i - 4], r[i - 3])
              , a = r[i - 14]
              , s = r[i - 13]
              , f = I(r[i - 30], r[i - 29])
              , c = B(r[i - 30], r[i - 29])
              , h = r[i - 32]
              , d = r[i - 31];
            r[i] = l(n, o, a, s, f, c, h, d),
            r[i + 1] = p(n, o, a, s, f, c, h, d)
        }
    }
    ,
    v.prototype._update = function(e, t) {
        this._prepareBlock(e, t);
        var r = this.W
          , i = this.h[0]
          , n = this.h[1]
          , a = this.h[2]
          , s = this.h[3]
          , f = this.h[4]
          , c = this.h[5]
          , l = this.h[6]
          , p = this.h[7]
          , y = this.h[8]
          , g = this.h[9]
          , v = this.h[10]
          , I = this.h[11]
          , B = this.h[12]
          , T = this.h[13]
          , R = this.h[14]
          , C = this.h[15];
        o(this.k.length === r.length);
        for (var P = 0; P < r.length; P += 2) {
            var j = R
              , O = C
              , L = A(y, g)
              , D = x(y, g)
              , N = _(y, g, v, I, B)
              , U = w(y, g, v, I, B, T)
              , q = this.k[P]
              , z = this.k[P + 1]
              , F = r[P]
              , H = r[P + 1]
              , K = b(j, O, L, D, N, U, q, z, F, H)
              , Y = m(j, O, L, D, N, U, q, z, F, H);
            j = E(i, n),
            O = k(i, n),
            L = S(i, n, a, s, f),
            D = M(i, n, a, s, f, c);
            var W = d(j, O, L, D)
              , V = u(j, O, L, D);
            R = B,
            C = T,
            B = v,
            T = I,
            v = y,
            I = g,
            y = d(l, p, K, Y),
            g = u(p, p, K, Y),
            l = f,
            p = c,
            f = a,
            c = s,
            a = i,
            s = n,
            i = d(K, Y, W, V),
            n = u(K, Y, W, V)
        }
        h(this.h, 0, i, n),
        h(this.h, 2, a, s),
        h(this.h, 4, f, c),
        h(this.h, 6, l, p),
        h(this.h, 8, y, g),
        h(this.h, 10, v, I),
        h(this.h, 12, B, T),
        h(this.h, 14, R, C)
    }
    ,
    v.prototype._digest = function(e) {
        return "hex" === e ? i.toHex32(this.h, "big") : i.split32(this.h, "big")
    }
}
, function(e, t, r) {
    var i = r(2)
      , n = r(64).Reporter
      , o = r(20).Buffer;
    function a(e, t) {
        n.call(this, t),
        o.isBuffer(e) ? (this.base = e,
        this.offset = 0,
        this.length = e.length) : this.error("Input not Buffer")
    }
    function s(e, t) {
        if (Array.isArray(e))
            this.length = 0,
            this.value = e.map((function(e) {
                return e instanceof s || (e = new s(e,t)),
                this.length += e.length,
                e
            }
            ), this);
        else if ("number" == typeof e) {
            if (!(0 <= e && e <= 255))
                return t.error("non-byte EncoderBuffer value");
            this.value = e,
            this.length = 1
        } else if ("string" == typeof e)
            this.value = e,
            this.length = o.byteLength(e);
        else {
            if (!o.isBuffer(e))
                return t.error("Unsupported type: " + typeof e);
            this.value = e,
            this.length = e.length
        }
    }
    i(a, n),
    t.DecoderBuffer = a,
    a.prototype.save = function() {
        return {
            offset: this.offset,
            reporter: n.prototype.save.call(this)
        }
    }
    ,
    a.prototype.restore = function(e) {
        var t = new a(this.base);
        return t.offset = e.offset,
        t.length = this.offset,
        this.offset = e.offset,
        n.prototype.restore.call(this, e.reporter),
        t
    }
    ,
    a.prototype.isEmpty = function() {
        return this.offset === this.length
    }
    ,
    a.prototype.readUInt8 = function(e) {
        return this.offset + 1 <= this.length ? this.base.readUInt8(this.offset++, !0) : this.error(e || "DecoderBuffer overrun")
    }
    ,
    a.prototype.skip = function(e, t) {
        if (!(this.offset + e <= this.length))
            return this.error(t || "DecoderBuffer overrun");
        var r = new a(this.base);
        return r._reporterState = this._reporterState,
        r.offset = this.offset,
        r.length = this.offset + e,
        this.offset += e,
        r
    }
    ,
    a.prototype.raw = function(e) {
        return this.base.slice(e ? e.offset : this.offset, this.length)
    }
    ,
    t.EncoderBuffer = s,
    s.prototype.join = function(e, t) {
        return e || (e = new o(this.length)),
        t || (t = 0),
        0 === this.length ? e : (Array.isArray(this.value) ? this.value.forEach((function(r) {
            r.join(e, t),
            t += r.length
        }
        )) : ("number" == typeof this.value ? e[t] = this.value : "string" == typeof this.value ? e.write(this.value, t) : o.isBuffer(this.value) && this.value.copy(e, t),
        t += this.length),
        e)
    }
}
, function(e, t, r) {
    var i = t;
    i._reverse = function(e) {
        var t = {};
        return Object.keys(e).forEach((function(r) {
            (0 | r) == r && (r |= 0);
            var i = e[r];
            t[i] = r
        }
        )),
        t
    }
    ,
    i.der = r(287)
}
, function(e, t, r) {
    var i = r(2)
      , n = r(63)
      , o = n.base
      , a = n.bignum
      , s = n.constants.der;
    function f(e) {
        this.enc = "der",
        this.name = e.name,
        this.entity = e,
        this.tree = new c,
        this.tree._init(e.body)
    }
    function c(e) {
        o.Node.call(this, "der", e)
    }
    function h(e, t) {
        var r = e.readUInt8(t);
        if (e.isError(r))
            return r;
        var i = s.tagClass[r >> 6]
          , n = 0 == (32 & r);
        if (31 == (31 & r)) {
            var o = r;
            for (r = 0; 128 == (128 & o); ) {
                if (o = e.readUInt8(t),
                e.isError(o))
                    return o;
                r <<= 7,
                r |= 127 & o
            }
        } else
            r &= 31;
        return {
            cls: i,
            primitive: n,
            tag: r,
            tagStr: s.tag[r]
        }
    }
    function d(e, t, r) {
        var i = e.readUInt8(r);
        if (e.isError(i))
            return i;
        if (!t && 128 === i)
            return null;
        if (0 == (128 & i))
            return i;
        var n = 127 & i;
        if (n > 4)
            return e.error("length octect is too long");
        i = 0;
        for (var o = 0; o < n; o++) {
            i <<= 8;
            var a = e.readUInt8(r);
            if (e.isError(a))
                return a;
            i |= a
        }
        return i
    }
    e.exports = f,
    f.prototype.decode = function(e, t) {
        return e instanceof o.DecoderBuffer || (e = new o.DecoderBuffer(e,t)),
        this.tree._decode(e, t)
    }
    ,
    i(c, o.Node),
    c.prototype._peekTag = function(e, t, r) {
        if (e.isEmpty())
            return !1;
        var i = e.save()
          , n = h(e, 'Failed to peek tag: "' + t + '"');
        return e.isError(n) ? n : (e.restore(i),
        n.tag === t || n.tagStr === t || n.tagStr + "of" === t || r)
    }
    ,
    c.prototype._decodeTag = function(e, t, r) {
        var i = h(e, 'Failed to decode tag of "' + t + '"');
        if (e.isError(i))
            return i;
        var n = d(e, i.primitive, 'Failed to get length of "' + t + '"');
        if (e.isError(n))
            return n;
        if (!r && i.tag !== t && i.tagStr !== t && i.tagStr + "of" !== t)
            return e.error('Failed to match tag: "' + t + '"');
        if (i.primitive || null !== n)
            return e.skip(n, 'Failed to match body of: "' + t + '"');
        var o = e.save()
          , a = this._skipUntilEnd(e, 'Failed to skip indefinite length body: "' + this.tag + '"');
        return e.isError(a) ? a : (n = e.offset - o.offset,
        e.restore(o),
        e.skip(n, 'Failed to match body of: "' + t + '"'))
    }
    ,
    c.prototype._skipUntilEnd = function(e, t) {
        for (; ; ) {
            var r = h(e, t);
            if (e.isError(r))
                return r;
            var i, n = d(e, r.primitive, t);
            if (e.isError(n))
                return n;
            if (i = r.primitive || null !== n ? e.skip(n) : this._skipUntilEnd(e, t),
            e.isError(i))
                return i;
            if ("end" === r.tagStr)
                break
        }
    }
    ,
    c.prototype._decodeList = function(e, t, r, i) {
        for (var n = []; !e.isEmpty(); ) {
            var o = this._peekTag(e, "end");
            if (e.isError(o))
                return o;
            var a = r.decode(e, "der", i);
            if (e.isError(a) && o)
                break;
            n.push(a)
        }
        return n
    }
    ,
    c.prototype._decodeStr = function(e, t) {
        if ("bitstr" === t) {
            var r = e.readUInt8();
            return e.isError(r) ? r : {
                unused: r,
                data: e.raw()
            }
        }
        if ("bmpstr" === t) {
            var i = e.raw();
            if (i.length % 2 == 1)
                return e.error("Decoding of string type: bmpstr length mismatch");
            for (var n = "", o = 0; o < i.length / 2; o++)
                n += String.fromCharCode(i.readUInt16BE(2 * o));
            return n
        }
        if ("numstr" === t) {
            var a = e.raw().toString("ascii");
            return this._isNumstr(a) ? a : e.error("Decoding of string type: numstr unsupported characters")
        }
        if ("octstr" === t)
            return e.raw();
        if ("objDesc" === t)
            return e.raw();
        if ("printstr" === t) {
            var s = e.raw().toString("ascii");
            return this._isPrintstr(s) ? s : e.error("Decoding of string type: printstr unsupported characters")
        }
        return /str$/.test(t) ? e.raw().toString() : e.error("Decoding of string type: " + t + " unsupported")
    }
    ,
    c.prototype._decodeObjid = function(e, t, r) {
        for (var i, n = [], o = 0; !e.isEmpty(); ) {
            var a = e.readUInt8();
            o <<= 7,
            o |= 127 & a,
            0 == (128 & a) && (n.push(o),
            o = 0)
        }
        128 & a && n.push(o);
        var s = n[0] / 40 | 0
          , f = n[0] % 40;
        if (i = r ? n : [s, f].concat(n.slice(1)),
        t) {
            var c = t[i.join(" ")];
            void 0 === c && (c = t[i.join(".")]),
            void 0 !== c && (i = c)
        }
        return i
    }
    ,
    c.prototype._decodeTime = function(e, t) {
        var r = e.raw().toString();
        if ("gentime" === t)
            var i = 0 | r.slice(0, 4)
              , n = 0 | r.slice(4, 6)
              , o = 0 | r.slice(6, 8)
              , a = 0 | r.slice(8, 10)
              , s = 0 | r.slice(10, 12)
              , f = 0 | r.slice(12, 14);
        else {
            if ("utctime" !== t)
                return e.error("Decoding " + t + " time is not supported yet");
            i = 0 | r.slice(0, 2),
            n = 0 | r.slice(2, 4),
            o = 0 | r.slice(4, 6),
            a = 0 | r.slice(6, 8),
            s = 0 | r.slice(8, 10),
            f = 0 | r.slice(10, 12);
            i = i < 70 ? 2e3 + i : 1900 + i
        }
        return Date.UTC(i, n - 1, o, a, s, f, 0)
    }
    ,
    c.prototype._decodeNull = function(e) {
        return null
    }
    ,
    c.prototype._decodeBool = function(e) {
        var t = e.readUInt8();
        return e.isError(t) ? t : 0 !== t
    }
    ,
    c.prototype._decodeInt = function(e, t) {
        var r = e.raw()
          , i = new a(r);
        return t && (i = t[i.toString(10)] || i),
        i
    }
    ,
    c.prototype._use = function(e, t) {
        return "function" == typeof e && (e = e(t)),
        e._getDecoder("der").tree
    }
}
, function(e, t, r) {
    var i = r(2)
      , n = r(20).Buffer
      , o = r(63)
      , a = o.base
      , s = o.constants.der;
    function f(e) {
        this.enc = "der",
        this.name = e.name,
        this.entity = e,
        this.tree = new c,
        this.tree._init(e.body)
    }
    function c(e) {
        a.Node.call(this, "der", e)
    }
    function h(e) {
        return e < 10 ? "0" + e : e
    }
    e.exports = f,
    f.prototype.encode = function(e, t) {
        return this.tree._encode(e, t).join()
    }
    ,
    i(c, a.Node),
    c.prototype._encodeComposite = function(e, t, r, i) {
        var o, a = function(e, t, r, i) {
            var n;
            "seqof" === e ? e = "seq" : "setof" === e && (e = "set");
            if (s.tagByName.hasOwnProperty(e))
                n = s.tagByName[e];
            else {
                if ("number" != typeof e || (0 | e) !== e)
                    return i.error("Unknown tag: " + e);
                n = e
            }
            if (n >= 31)
                return i.error("Multi-octet tag encoding unsupported");
            t || (n |= 32);
            return n |= s.tagClassByName[r || "universal"] << 6
        }(e, t, r, this.reporter);
        if (i.length < 128)
            return (o = new n(2))[0] = a,
            o[1] = i.length,
            this._createEncoderBuffer([o, i]);
        for (var f = 1, c = i.length; c >= 256; c >>= 8)
            f++;
        (o = new n(2 + f))[0] = a,
        o[1] = 128 | f;
        c = 1 + f;
        for (var h = i.length; h > 0; c--,
        h >>= 8)
            o[c] = 255 & h;
        return this._createEncoderBuffer([o, i])
    }
    ,
    c.prototype._encodeStr = function(e, t) {
        if ("bitstr" === t)
            return this._createEncoderBuffer([0 | e.unused, e.data]);
        if ("bmpstr" === t) {
            for (var r = new n(2 * e.length), i = 0; i < e.length; i++)
                r.writeUInt16BE(e.charCodeAt(i), 2 * i);
            return this._createEncoderBuffer(r)
        }
        return "numstr" === t ? this._isNumstr(e) ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: numstr supports only digits and space") : "printstr" === t ? this._isPrintstr(e) ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark") : /str$/.test(t) ? this._createEncoderBuffer(e) : "objDesc" === t ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: " + t + " unsupported")
    }
    ,
    c.prototype._encodeObjid = function(e, t, r) {
        if ("string" == typeof e) {
            if (!t)
                return this.reporter.error("string objid given, but no values map found");
            if (!t.hasOwnProperty(e))
                return this.reporter.error("objid not found in values map");
            e = t[e].split(/[\s\.]+/g);
            for (var i = 0; i < e.length; i++)
                e[i] |= 0
        } else if (Array.isArray(e)) {
            e = e.slice();
            for (i = 0; i < e.length; i++)
                e[i] |= 0
        }
        if (!Array.isArray(e))
            return this.reporter.error("objid() should be either array or string, got: " + JSON.stringify(e));
        if (!r) {
            if (e[1] >= 40)
                return this.reporter.error("Second objid identifier OOB");
            e.splice(0, 2, 40 * e[0] + e[1])
        }
        var o = 0;
        for (i = 0; i < e.length; i++) {
            var a = e[i];
            for (o++; a >= 128; a >>= 7)
                o++
        }
        var s = new n(o)
          , f = s.length - 1;
        for (i = e.length - 1; i >= 0; i--) {
            a = e[i];
            for (s[f--] = 127 & a; (a >>= 7) > 0; )
                s[f--] = 128 | 127 & a
        }
        return this._createEncoderBuffer(s)
    }
    ,
    c.prototype._encodeTime = function(e, t) {
        var r, i = new Date(e);
        return "gentime" === t ? r = [h(i.getFullYear()), h(i.getUTCMonth() + 1), h(i.getUTCDate()), h(i.getUTCHours()), h(i.getUTCMinutes()), h(i.getUTCSeconds()), "Z"].join("") : "utctime" === t ? r = [h(i.getFullYear() % 100), h(i.getUTCMonth() + 1), h(i.getUTCDate()), h(i.getUTCHours()), h(i.getUTCMinutes()), h(i.getUTCSeconds()), "Z"].join("") : this.reporter.error("Encoding " + t + " time is not supported yet"),
        this._encodeStr(r, "octstr")
    }
    ,
    c.prototype._encodeNull = function() {
        return this._createEncoderBuffer("")
    }
    ,
    c.prototype._encodeInt = function(e, t) {
        if ("string" == typeof e) {
            if (!t)
                return this.reporter.error("String int or enum given, but no values map");
            if (!t.hasOwnProperty(e))
                return this.reporter.error("Values map doesn't contain: " + JSON.stringify(e));
            e = t[e]
        }
        if ("number" != typeof e && !n.isBuffer(e)) {
            var r = e.toArray();
            !e.sign && 128 & r[0] && r.unshift(0),
            e = new n(r)
        }
        if (n.isBuffer(e)) {
            var i = e.length;
            0 === e.length && i++;
            var o = new n(i);
            return e.copy(o),
            0 === e.length && (o[0] = 0),
            this._createEncoderBuffer(o)
        }
        if (e < 128)
            return this._createEncoderBuffer(e);
        if (e < 256)
            return this._createEncoderBuffer([0, e]);
        i = 1;
        for (var a = e; a >= 256; a >>= 8)
            i++;
        for (a = (o = new Array(i)).length - 1; a >= 0; a--)
            o[a] = 255 & e,
            e >>= 8;
        return 128 & o[0] && o.unshift(0),
        this._createEncoderBuffer(new n(o))
    }
    ,
    c.prototype._encodeBool = function(e) {
        return this._createEncoderBuffer(e ? 255 : 0)
    }
    ,
    c.prototype._use = function(e, t) {
        return "function" == typeof e && (e = e(t)),
        e._getEncoder("der").tree
    }
    ,
    c.prototype._skipDefault = function(e, t, r) {
        var i, n = this._baseState;
        if (null === n.default)
            return !1;
        var o = e.join();
        if (void 0 === n.defaultBuffer && (n.defaultBuffer = this._encodeValue(n.default, t, r).join()),
        o.length !== n.defaultBuffer.length)
            return !1;
        for (i = 0; i < o.length; i++)
            if (o[i] !== n.defaultBuffer[i])
                return !1;
        return !0
    }
}
, function(e) {
    e.exports = JSON.parse('{"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}')
}
, function(e, t, r) {
    var i = r(59)
      , n = r(4).Buffer;
    function o(e) {
        var t = n.allocUnsafe(4);
        return t.writeUInt32BE(e, 0),
        t
    }
    e.exports = function(e, t) {
        for (var r, a = n.alloc(0), s = 0; a.length < t; )
            r = o(s++),
            a = n.concat([a, i("sha1").update(e).update(r).digest()]);
        return a.slice(0, t)
    }
}
, function(e, t) {
    e.exports = function(e, t) {
        for (var r = e.length, i = -1; ++i < r; )
            e[i] ^= t[i];
        return e
    }
}
, function(e, t, r) {
    var i = r(15)
      , n = r(4).Buffer;
    e.exports = function(e, t) {
        return n.from(e.toRed(i.mont(t.modulus)).redPow(new i(t.publicExponent)).fromRed().toArray())
    }
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, r) {
    var i;
    e.exports = (i = r(216),
    function(e) {
        var t = i
          , r = t.lib
          , n = r.WordArray
          , o = r.Hasher
          , a = t.algo
          , s = []
          , f = [];
        !function() {
            function t(t) {
                for (var r = e.sqrt(t), i = 2; i <= r; i++)
                    if (!(t % i))
                        return !1;
                return !0
            }
            function r(e) {
                return 4294967296 * (e - (0 | e)) | 0
            }
            for (var i = 2, n = 0; n < 64; )
                t(i) && (n < 8 && (s[n] = r(e.pow(i, .5))),
                f[n] = r(e.pow(i, 1 / 3)),
                n++),
                i++
        }();
        var c = []
          , h = a.SHA256 = o.extend({
            _doReset: function() {
                this._hash = new n.init(s.slice(0))
            },
            _doProcessBlock: function(e, t) {
                for (var r = this._hash.words, i = r[0], n = r[1], o = r[2], a = r[3], s = r[4], h = r[5], d = r[6], u = r[7], l = 0; l < 64; l++) {
                    if (l < 16)
                        c[l] = 0 | e[t + l];
                    else {
                        var p = c[l - 15]
                          , b = (p << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3
                          , m = c[l - 2]
                          , y = (m << 15 | m >>> 17) ^ (m << 13 | m >>> 19) ^ m >>> 10;
                        c[l] = b + c[l - 7] + y + c[l - 16]
                    }
                    var g = i & n ^ i & o ^ n & o
                      , v = (i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22)
                      , _ = u + ((s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25)) + (s & h ^ ~s & d) + f[l] + c[l];
                    u = d,
                    d = h,
                    h = s,
                    s = a + _ | 0,
                    a = o,
                    o = n,
                    n = i,
                    i = _ + (v + g) | 0
                }
                r[0] = r[0] + i | 0,
                r[1] = r[1] + n | 0,
                r[2] = r[2] + o | 0,
                r[3] = r[3] + a | 0,
                r[4] = r[4] + s | 0,
                r[5] = r[5] + h | 0,
                r[6] = r[6] + d | 0,
                r[7] = r[7] + u | 0
            },
            _doFinalize: function() {
                var t = this._data
                  , r = t.words
                  , i = 8 * this._nDataBytes
                  , n = 8 * t.sigBytes;
                return r[n >>> 5] |= 128 << 24 - n % 32,
                r[14 + (n + 64 >>> 9 << 4)] = e.floor(i / 4294967296),
                r[15 + (n + 64 >>> 9 << 4)] = i,
                t.sigBytes = 4 * r.length,
                this._process(),
                this._hash
            },
            clone: function() {
                var e = o.clone.call(this);
                return e._hash = this._hash.clone(),
                e
            }
        });
        t.SHA256 = o._createHelper(h),
        t.HmacSHA256 = o._createHmacHelper(h)
    }(Math),
    i.SHA256)
}
, function(e, t, r) {
    (function(t) {
        var i;
        e.exports = (i = i || function(e, i) {
            var n;
            if ("undefined" != typeof window && window.crypto && (n = window.crypto),
            !n && "undefined" != typeof window && window.msCrypto && (n = window.msCrypto),
            !n && void 0 !== t && t.crypto && (n = t.crypto),
            !n)
                try {
                    n = r(217)
                } catch (e) {}
            var o = function() {
                if (n) {
                    if ("function" == typeof n.getRandomValues)
                        try {
                            return n.getRandomValues(new Uint32Array(1))[0]
                        } catch (e) {}
                    if ("function" == typeof n.randomBytes)
                        try {
                            return n.randomBytes(4).readInt32LE()
                        } catch (e) {}
                }
                throw new Error("Native crypto module could not be used to get secure random number.")
            }
              , a = Object.create || function() {
                function e() {}
                return function(t) {
                    var r;
                    return e.prototype = t,
                    r = new e,
                    e.prototype = null,
                    r
                }
            }()
              , s = {}
              , f = s.lib = {}
              , c = f.Base = {
                extend: function(e) {
                    var t = a(this);
                    return e && t.mixIn(e),
                    t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() {
                        t.$super.init.apply(this, arguments)
                    }
                    ),
                    t.init.prototype = t,
                    t.$super = this,
                    t
                },
                create: function() {
                    var e = this.extend();
                    return e.init.apply(e, arguments),
                    e
                },
                init: function() {},
                mixIn: function(e) {
                    for (var t in e)
                        e.hasOwnProperty(t) && (this[t] = e[t]);
                    e.hasOwnProperty("toString") && (this.toString = e.toString)
                },
                clone: function() {
                    return this.init.prototype.extend(this)
                }
            }
              , h = f.WordArray = c.extend({
                init: function(e, t) {
                    e = this.words = e || [],
                    this.sigBytes = null != t ? t : 4 * e.length
                },
                toString: function(e) {
                    return (e || u).stringify(this)
                },
                concat: function(e) {
                    var t = this.words
                      , r = e.words
                      , i = this.sigBytes
                      , n = e.sigBytes;
                    if (this.clamp(),
                    i % 4)
                        for (var o = 0; o < n; o++) {
                            var a = r[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                            t[i + o >>> 2] |= a << 24 - (i + o) % 4 * 8
                        }
                    else
                        for (o = 0; o < n; o += 4)
                            t[i + o >>> 2] = r[o >>> 2];
                    return this.sigBytes += n,
                    this
                },
                clamp: function() {
                    var t = this.words
                      , r = this.sigBytes;
                    t[r >>> 2] &= 4294967295 << 32 - r % 4 * 8,
                    t.length = e.ceil(r / 4)
                },
                clone: function() {
                    var e = c.clone.call(this);
                    return e.words = this.words.slice(0),
                    e
                },
                random: function(e) {
                    for (var t = [], r = 0; r < e; r += 4)
                        t.push(o());
                    return new h.init(t,e)
                }
            })
              , d = s.enc = {}
              , u = d.Hex = {
                stringify: function(e) {
                    for (var t = e.words, r = e.sigBytes, i = [], n = 0; n < r; n++) {
                        var o = t[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                        i.push((o >>> 4).toString(16)),
                        i.push((15 & o).toString(16))
                    }
                    return i.join("")
                },
                parse: function(e) {
                    for (var t = e.length, r = [], i = 0; i < t; i += 2)
                        r[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
                    return new h.init(r,t / 2)
                }
            }
              , l = d.Latin1 = {
                stringify: function(e) {
                    for (var t = e.words, r = e.sigBytes, i = [], n = 0; n < r; n++) {
                        var o = t[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                        i.push(String.fromCharCode(o))
                    }
                    return i.join("")
                },
                parse: function(e) {
                    for (var t = e.length, r = [], i = 0; i < t; i++)
                        r[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - i % 4 * 8;
                    return new h.init(r,t)
                }
            }
              , p = d.Utf8 = {
                stringify: function(e) {
                    try {
                        return decodeURIComponent(escape(l.stringify(e)))
                    } catch (e) {
                        throw new Error("Malformed UTF-8 data")
                    }
                },
                parse: function(e) {
                    return l.parse(unescape(encodeURIComponent(e)))
                }
            }
              , b = f.BufferedBlockAlgorithm = c.extend({
                reset: function() {
                    this._data = new h.init,
                    this._nDataBytes = 0
                },
                _append: function(e) {
                    "string" == typeof e && (e = p.parse(e)),
                    this._data.concat(e),
                    this._nDataBytes += e.sigBytes
                },
                _process: function(t) {
                    var r, i = this._data, n = i.words, o = i.sigBytes, a = this.blockSize, s = o / (4 * a), f = (s = t ? e.ceil(s) : e.max((0 | s) - this._minBufferSize, 0)) * a, c = e.min(4 * f, o);
                    if (f) {
                        for (var d = 0; d < f; d += a)
                            this._doProcessBlock(n, d);
                        r = n.splice(0, f),
                        i.sigBytes -= c
                    }
                    return new h.init(r,c)
                },
                clone: function() {
                    var e = c.clone.call(this);
                    return e._data = this._data.clone(),
                    e
                },
                _minBufferSize: 0
            })
              , m = (f.Hasher = b.extend({
                cfg: c.extend(),
                init: function(e) {
                    this.cfg = this.cfg.extend(e),
                    this.reset()
                },
                reset: function() {
                    b.reset.call(this),
                    this._doReset()
                },
                update: function(e) {
                    return this._append(e),
                    this._process(),
                    this
                },
                finalize: function(e) {
                    return e && this._append(e),
                    this._doFinalize()
                },
                blockSize: 16,
                _createHelper: function(e) {
                    return function(t, r) {
                        return new e.init(r).finalize(t)
                    }
                },
                _createHmacHelper: function(e) {
                    return function(t, r) {
                        return new m.HMAC.init(e,r).finalize(t)
                    }
                }
            }),
            s.algo = {});
            return s
        }(Math),
        i)
    }
    ).call(this, r(38))
}
, function(e, t, r) {
    "use strict";
    t.randomBytes = t.rng = t.pseudoRandomBytes = t.prng = r(52),
    t.createHash = t.Hash = r(59),
    t.createHmac = t.Hmac = r(131);
    var i = r(239)
      , n = Object.keys(i)
      , o = ["sha1", "sha224", "sha256", "sha384", "sha512", "md5", "rmd160"].concat(n);
    t.getHashes = function() {
        return o
    }
    ;
    var a = r(134);
    t.pbkdf2 = a.pbkdf2,
    t.pbkdf2Sync = a.pbkdf2Sync;
    var s = r(241);
    t.Cipher = s.Cipher,
    t.createCipher = s.createCipher,
    t.Cipheriv = s.Cipheriv,
    t.createCipheriv = s.createCipheriv,
    t.Decipher = s.Decipher,
    t.createDecipher = s.createDecipher,
    t.Decipheriv = s.Decipheriv,
    t.createDecipheriv = s.createDecipheriv,
    t.getCiphers = s.getCiphers,
    t.listCiphers = s.listCiphers;
    var f = r(256);
    t.DiffieHellmanGroup = f.DiffieHellmanGroup,
    t.createDiffieHellmanGroup = f.createDiffieHellmanGroup,
    t.getDiffieHellman = f.getDiffieHellman,
    t.createDiffieHellman = f.createDiffieHellman,
    t.DiffieHellman = f.DiffieHellman;
    var c = r(262);
    t.createSign = c.createSign,
    t.Sign = c.Sign,
    t.createVerify = c.createVerify,
    t.Verify = c.Verify,
    t.createECDH = r(296);
    var h = r(297);
    t.publicEncrypt = h.publicEncrypt,
    t.privateEncrypt = h.privateEncrypt,
    t.publicDecrypt = h.publicDecrypt,
    t.privateDecrypt = h.privateDecrypt;
    var d = r(300);
    t.randomFill = d.randomFill,
    t.randomFillSync = d.randomFillSync,
    t.createCredentials = function() {
        throw new Error(["sorry, createCredentials is not implemented yet", "we accept pull requests", "https://github.com/crypto-browserify/crypto-browserify"].join("\n"))
    }
    ,
    t.constants = {
        DH_CHECK_P_NOT_SAFE_PRIME: 2,
        DH_CHECK_P_NOT_PRIME: 1,
        DH_UNABLE_TO_CHECK_GENERATOR: 4,
        DH_NOT_SUITABLE_GENERATOR: 8,
        NPN_ENABLED: 1,
        ALPN_ENABLED: 1,
        RSA_PKCS1_PADDING: 1,
        RSA_SSLV23_PADDING: 2,
        RSA_NO_PADDING: 3,
        RSA_PKCS1_OAEP_PADDING: 4,
        RSA_X931_PADDING: 5,
        RSA_PKCS1_PSS_PADDING: 6,
        POINT_CONVERSION_COMPRESSED: 2,
        POINT_CONVERSION_UNCOMPRESSED: 4,
        POINT_CONVERSION_HYBRID: 6
    }
}
, function(e, t, r) {
    "use strict";
    t.byteLength = function(e) {
        var t = c(e)
          , r = t[0]
          , i = t[1];
        return 3 * (r + i) / 4 - i
    }
    ,
    t.toByteArray = function(e) {
        var t, r, i = c(e), a = i[0], s = i[1], f = new o(function(e, t, r) {
            return 3 * (t + r) / 4 - r
        }(0, a, s)), h = 0, d = s > 0 ? a - 4 : a;
        for (r = 0; r < d; r += 4)
            t = n[e.charCodeAt(r)] << 18 | n[e.charCodeAt(r + 1)] << 12 | n[e.charCodeAt(r + 2)] << 6 | n[e.charCodeAt(r + 3)],
            f[h++] = t >> 16 & 255,
            f[h++] = t >> 8 & 255,
            f[h++] = 255 & t;
        2 === s && (t = n[e.charCodeAt(r)] << 2 | n[e.charCodeAt(r + 1)] >> 4,
        f[h++] = 255 & t);
        1 === s && (t = n[e.charCodeAt(r)] << 10 | n[e.charCodeAt(r + 1)] << 4 | n[e.charCodeAt(r + 2)] >> 2,
        f[h++] = t >> 8 & 255,
        f[h++] = 255 & t);
        return f
    }
    ,
    t.fromByteArray = function(e) {
        for (var t, r = e.length, n = r % 3, o = [], a = 0, s = r - n; a < s; a += 16383)
            o.push(h(e, a, a + 16383 > s ? s : a + 16383));
        1 === n ? (t = e[r - 1],
        o.push(i[t >> 2] + i[t << 4 & 63] + "==")) : 2 === n && (t = (e[r - 2] << 8) + e[r - 1],
        o.push(i[t >> 10] + i[t >> 4 & 63] + i[t << 2 & 63] + "="));
        return o.join("")
    }
    ;
    for (var i = [], n = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, f = a.length; s < f; ++s)
        i[s] = a[s],
        n[a.charCodeAt(s)] = s;
    function c(e) {
        var t = e.length;
        if (t % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
        var r = e.indexOf("=");
        return -1 === r && (r = t),
        [r, r === t ? 0 : 4 - r % 4]
    }
    function h(e, t, r) {
        for (var n, o, a = [], s = t; s < r; s += 3)
            n = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]),
            a.push(i[(o = n) >> 18 & 63] + i[o >> 12 & 63] + i[o >> 6 & 63] + i[63 & o]);
        return a.join("")
    }
    n["-".charCodeAt(0)] = 62,
    n["_".charCodeAt(0)] = 63
}
, function(e, t) {
    t.read = function(e, t, r, i, n) {
        var o, a, s = 8 * n - i - 1, f = (1 << s) - 1, c = f >> 1, h = -7, d = r ? n - 1 : 0, u = r ? -1 : 1, l = e[t + d];
        for (d += u,
        o = l & (1 << -h) - 1,
        l >>= -h,
        h += s; h > 0; o = 256 * o + e[t + d],
        d += u,
        h -= 8)
            ;
        for (a = o & (1 << -h) - 1,
        o >>= -h,
        h += i; h > 0; a = 256 * a + e[t + d],
        d += u,
        h -= 8)
            ;
        if (0 === o)
            o = 1 - c;
        else {
            if (o === f)
                return a ? NaN : 1 / 0 * (l ? -1 : 1);
            a += Math.pow(2, i),
            o -= c
        }
        return (l ? -1 : 1) * a * Math.pow(2, o - i)
    }
    ,
    t.write = function(e, t, r, i, n, o) {
        var a, s, f, c = 8 * o - n - 1, h = (1 << c) - 1, d = h >> 1, u = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0, l = i ? 0 : o - 1, p = i ? 1 : -1, b = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t),
        isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0,
        a = h) : (a = Math.floor(Math.log(t) / Math.LN2),
        t * (f = Math.pow(2, -a)) < 1 && (a--,
        f *= 2),
        (t += a + d >= 1 ? u / f : u * Math.pow(2, 1 - d)) * f >= 2 && (a++,
        f /= 2),
        a + d >= h ? (s = 0,
        a = h) : a + d >= 1 ? (s = (t * f - 1) * Math.pow(2, n),
        a += d) : (s = t * Math.pow(2, d - 1) * Math.pow(2, n),
        a = 0)); n >= 8; e[r + l] = 255 & s,
        l += p,
        s /= 256,
        n -= 8)
            ;
        for (a = a << n | s,
        c += n; c > 0; e[r + l] = 255 & a,
        l += p,
        a /= 256,
        c -= 8)
            ;
        e[r + l - p] |= 128 * b
    }
}
, function(e, t) {
    var r = {}.toString;
    e.exports = Array.isArray || function(e) {
        return "[object Array]" == r.call(e)
    }
}
, function(e, t) {
    var r = {}.toString;
    e.exports = Array.isArray || function(e) {
        return "[object Array]" == r.call(e)
    }
}
, function(e, t) {}
, function(e, t, r) {
    "use strict";
    var i = r(4).Buffer
      , n = r(224);
    e.exports = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.head = null,
            this.tail = null,
            this.length = 0
        }
        return e.prototype.push = function(e) {
            var t = {
                data: e,
                next: null
            };
            this.length > 0 ? this.tail.next = t : this.head = t,
            this.tail = t,
            ++this.length
        }
        ,
        e.prototype.unshift = function(e) {
            var t = {
                data: e,
                next: this.head
            };
            0 === this.length && (this.tail = t),
            this.head = t,
            ++this.length
        }
        ,
        e.prototype.shift = function() {
            if (0 !== this.length) {
                var e = this.head.data;
                return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next,
                --this.length,
                e
            }
        }
        ,
        e.prototype.clear = function() {
            this.head = this.tail = null,
            this.length = 0
        }
        ,
        e.prototype.join = function(e) {
            if (0 === this.length)
                return "";
            for (var t = this.head, r = "" + t.data; t = t.next; )
                r += e + t.data;
            return r
        }
        ,
        e.prototype.concat = function(e) {
            if (0 === this.length)
                return i.alloc(0);
            if (1 === this.length)
                return this.head.data;
            for (var t, r, n, o = i.allocUnsafe(e >>> 0), a = this.head, s = 0; a; )
                t = a.data,
                r = o,
                n = s,
                t.copy(r, n),
                s += a.data.length,
                a = a.next;
            return o
        }
        ,
        e
    }(),
    n && n.inspect && n.inspect.custom && (e.exports.prototype[n.inspect.custom] = function() {
        var e = n.inspect({
            length: this.length
        });
        return this.constructor.name + " " + e
    }
    )
}
, function(e, t) {}
, function(e, t, r) {
    (function(e) {
        var i = void 0 !== e && e || "undefined" != typeof self && self || window
          , n = Function.prototype.apply;
        function o(e, t) {
            this._id = e,
            this._clearFn = t
        }
        t.setTimeout = function() {
            return new o(n.call(setTimeout, i, arguments),clearTimeout)
        }
        ,
        t.setInterval = function() {
            return new o(n.call(setInterval, i, arguments),clearInterval)
        }
        ,
        t.clearTimeout = t.clearInterval = function(e) {
            e && e.close()
        }
        ,
        o.prototype.unref = o.prototype.ref = function() {}
        ,
        o.prototype.close = function() {
            this._clearFn.call(i, this._id)
        }
        ,
        t.enroll = function(e, t) {
            clearTimeout(e._idleTimeoutId),
            e._idleTimeout = t
        }
        ,
        t.unenroll = function(e) {
            clearTimeout(e._idleTimeoutId),
            e._idleTimeout = -1
        }
        ,
        t._unrefActive = t.active = function(e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 && (e._idleTimeoutId = setTimeout((function() {
                e._onTimeout && e._onTimeout()
            }
            ), t))
        }
        ,
        r(226),
        t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate,
        t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
    }
    ).call(this, r(38))
}
, function(e, t, r) {
    (function(e, t) {
        !function(e, r) {
            "use strict";
            if (!e.setImmediate) {
                var i, n, o, a, s, f = 1, c = {}, h = !1, d = e.document, u = Object.getPrototypeOf && Object.getPrototypeOf(e);
                u = u && u.setTimeout ? u : e,
                "[object process]" === {}.toString.call(e.process) ? i = function(e) {
                    t.nextTick((function() {
                        p(e)
                    }
                    ))
                }
                : !function() {
                    if (e.postMessage && !e.importScripts) {
                        var t = !0
                          , r = e.onmessage;
                        return e.onmessage = function() {
                            t = !1
                        }
                        ,
                        e.postMessage("", "*"),
                        e.onmessage = r,
                        t
                    }
                }() ? e.MessageChannel ? ((o = new MessageChannel).port1.onmessage = function(e) {
                    p(e.data)
                }
                ,
                i = function(e) {
                    o.port2.postMessage(e)
                }
                ) : d && "onreadystatechange"in d.createElement("script") ? (n = d.documentElement,
                i = function(e) {
                    var t = d.createElement("script");
                    t.onreadystatechange = function() {
                        p(e),
                        t.onreadystatechange = null,
                        n.removeChild(t),
                        t = null
                    }
                    ,
                    n.appendChild(t)
                }
                ) : i = function(e) {
                    setTimeout(p, 0, e)
                }
                : (a = "setImmediate$" + Math.random() + "$",
                s = function(t) {
                    t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(a) && p(+t.data.slice(a.length))
                }
                ,
                e.addEventListener ? e.addEventListener("message", s, !1) : e.attachEvent("onmessage", s),
                i = function(t) {
                    e.postMessage(a + t, "*")
                }
                ),
                u.setImmediate = function(e) {
                    "function" != typeof e && (e = new Function("" + e));
                    for (var t = new Array(arguments.length - 1), r = 0; r < t.length; r++)
                        t[r] = arguments[r + 1];
                    var n = {
                        callback: e,
                        args: t
                    };
                    return c[f] = n,
                    i(f),
                    f++
                }
                ,
                u.clearImmediate = l
            }
            function l(e) {
                delete c[e]
            }
            function p(e) {
                if (h)
                    setTimeout(p, 0, e);
                else {
                    var t = c[e];
                    if (t) {
                        h = !0;
                        try {
                            !function(e) {
                                var t = e.callback
                                  , i = e.args;
                                switch (i.length) {
                                case 0:
                                    t();
                                    break;
                                case 1:
                                    t(i[0]);
                                    break;
                                case 2:
                                    t(i[0], i[1]);
                                    break;
                                case 3:
                                    t(i[0], i[1], i[2]);
                                    break;
                                default:
                                    t.apply(r, i)
                                }
                            }(t)
                        } finally {
                            l(e),
                            h = !1
                        }
                    }
                }
            }
        }("undefined" == typeof self ? void 0 === e ? this : e : self)
    }
    ).call(this, r(38), r(45))
}
, function(e, t, r) {
    (function(t) {
        function r(e) {
            try {
                if (!t.localStorage)
                    return !1
            } catch (e) {
                return !1
            }
            var r = t.localStorage[e];
            return null != r && "true" === String(r).toLowerCase()
        }
        e.exports = function(e, t) {
            if (r("noDeprecation"))
                return e;
            var i = !1;
            return function() {
                if (!i) {
                    if (r("throwDeprecation"))
                        throw new Error(t);
                    r("traceDeprecation") ? console.trace(t) : console.warn(t),
                    i = !0
                }
                return e.apply(this, arguments)
            }
        }
    }
    ).call(this, r(38))
}
, function(e, t, r) {
    var i = r(20)
      , n = i.Buffer;
    function o(e, t) {
        for (var r in e)
            t[r] = e[r]
    }
    function a(e, t, r) {
        return n(e, t, r)
    }
    n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? e.exports = i : (o(i, t),
    t.Buffer = a),
    a.prototype = Object.create(n.prototype),
    o(n, a),
    a.from = function(e, t, r) {
        if ("number" == typeof e)
            throw new TypeError("Argument must not be a number");
        return n(e, t, r)
    }
    ,
    a.alloc = function(e, t, r) {
        if ("number" != typeof e)
            throw new TypeError("Argument must be a number");
        var i = n(e);
        return void 0 !== t ? "string" == typeof r ? i.fill(t, r) : i.fill(t) : i.fill(0),
        i
    }
    ,
    a.allocUnsafe = function(e) {
        if ("number" != typeof e)
            throw new TypeError("Argument must be a number");
        return n(e)
    }
    ,
    a.allocUnsafeSlow = function(e) {
        if ("number" != typeof e)
            throw new TypeError("Argument must be a number");
        return i.SlowBuffer(e)
    }
}
, function(e, t, r) {
    "use strict";
    e.exports = o;
    var i = r(128)
      , n = r(60);
    function o(e) {
        if (!(this instanceof o))
            return new o(e);
        i.call(this, e)
    }
    n.inherits = r(2),
    n.inherits(o, i),
    o.prototype._transform = function(e, t, r) {
        r(null, e)
    }
}
, function(e, t, r) {
    e.exports = r(91)
}
, function(e, t, r) {
    e.exports = r(48)
}
, function(e, t, r) {
    e.exports = r(90).Transform
}
, function(e, t, r) {
    e.exports = r(90).PassThrough
}
, function(e, t, r) {
    var i = r(2)
      , n = r(53)
      , o = r(4).Buffer
      , a = [1518500249, 1859775393, -1894007588, -899497514]
      , s = new Array(80);
    function f() {
        this.init(),
        this._w = s,
        n.call(this, 64, 56)
    }
    function c(e) {
        return e << 30 | e >>> 2
    }
    function h(e, t, r, i) {
        return 0 === e ? t & r | ~t & i : 2 === e ? t & r | t & i | r & i : t ^ r ^ i
    }
    i(f, n),
    f.prototype.init = function() {
        return this._a = 1732584193,
        this._b = 4023233417,
        this._c = 2562383102,
        this._d = 271733878,
        this._e = 3285377520,
        this
    }
    ,
    f.prototype._update = function(e) {
        for (var t, r = this._w, i = 0 | this._a, n = 0 | this._b, o = 0 | this._c, s = 0 | this._d, f = 0 | this._e, d = 0; d < 16; ++d)
            r[d] = e.readInt32BE(4 * d);
        for (; d < 80; ++d)
            r[d] = r[d - 3] ^ r[d - 8] ^ r[d - 14] ^ r[d - 16];
        for (var u = 0; u < 80; ++u) {
            var l = ~~(u / 20)
              , p = 0 | ((t = i) << 5 | t >>> 27) + h(l, n, o, s) + f + r[u] + a[l];
            f = s,
            s = o,
            o = c(n),
            n = i,
            i = p
        }
        this._a = i + this._a | 0,
        this._b = n + this._b | 0,
        this._c = o + this._c | 0,
        this._d = s + this._d | 0,
        this._e = f + this._e | 0
    }
    ,
    f.prototype._hash = function() {
        var e = o.allocUnsafe(20);
        return e.writeInt32BE(0 | this._a, 0),
        e.writeInt32BE(0 | this._b, 4),
        e.writeInt32BE(0 | this._c, 8),
        e.writeInt32BE(0 | this._d, 12),
        e.writeInt32BE(0 | this._e, 16),
        e
    }
    ,
    e.exports = f
}
, function(e, t, r) {
    var i = r(2)
      , n = r(53)
      , o = r(4).Buffer
      , a = [1518500249, 1859775393, -1894007588, -899497514]
      , s = new Array(80);
    function f() {
        this.init(),
        this._w = s,
        n.call(this, 64, 56)
    }
    function c(e) {
        return e << 5 | e >>> 27
    }
    function h(e) {
        return e << 30 | e >>> 2
    }
    function d(e, t, r, i) {
        return 0 === e ? t & r | ~t & i : 2 === e ? t & r | t & i | r & i : t ^ r ^ i
    }
    i(f, n),
    f.prototype.init = function() {
        return this._a = 1732584193,
        this._b = 4023233417,
        this._c = 2562383102,
        this._d = 271733878,
        this._e = 3285377520,
        this
    }
    ,
    f.prototype._update = function(e) {
        for (var t, r = this._w, i = 0 | this._a, n = 0 | this._b, o = 0 | this._c, s = 0 | this._d, f = 0 | this._e, u = 0; u < 16; ++u)
            r[u] = e.readInt32BE(4 * u);
        for (; u < 80; ++u)
            r[u] = (t = r[u - 3] ^ r[u - 8] ^ r[u - 14] ^ r[u - 16]) << 1 | t >>> 31;
        for (var l = 0; l < 80; ++l) {
            var p = ~~(l / 20)
              , b = c(i) + d(p, n, o, s) + f + r[l] + a[p] | 0;
            f = s,
            s = o,
            o = h(n),
            n = i,
            i = b
        }
        this._a = i + this._a | 0,
        this._b = n + this._b | 0,
        this._c = o + this._c | 0,
        this._d = s + this._d | 0,
        this._e = f + this._e | 0
    }
    ,
    f.prototype._hash = function() {
        var e = o.allocUnsafe(20);
        return e.writeInt32BE(0 | this._a, 0),
        e.writeInt32BE(0 | this._b, 4),
        e.writeInt32BE(0 | this._c, 8),
        e.writeInt32BE(0 | this._d, 12),
        e.writeInt32BE(0 | this._e, 16),
        e
    }
    ,
    e.exports = f
}
, function(e, t, r) {
    var i = r(2)
      , n = r(129)
      , o = r(53)
      , a = r(4).Buffer
      , s = new Array(64);
    function f() {
        this.init(),
        this._w = s,
        o.call(this, 64, 56)
    }
    i(f, n),
    f.prototype.init = function() {
        return this._a = 3238371032,
        this._b = 914150663,
        this._c = 812702999,
        this._d = 4144912697,
        this._e = 4290775857,
        this._f = 1750603025,
        this._g = 1694076839,
        this._h = 3204075428,
        this
    }
    ,
    f.prototype._hash = function() {
        var e = a.allocUnsafe(28);
        return e.writeInt32BE(this._a, 0),
        e.writeInt32BE(this._b, 4),
        e.writeInt32BE(this._c, 8),
        e.writeInt32BE(this._d, 12),
        e.writeInt32BE(this._e, 16),
        e.writeInt32BE(this._f, 20),
        e.writeInt32BE(this._g, 24),
        e
    }
    ,
    e.exports = f
}
, function(e, t, r) {
    var i = r(2)
      , n = r(130)
      , o = r(53)
      , a = r(4).Buffer
      , s = new Array(160);
    function f() {
        this.init(),
        this._w = s,
        o.call(this, 128, 112)
    }
    i(f, n),
    f.prototype.init = function() {
        return this._ah = 3418070365,
        this._bh = 1654270250,
        this._ch = 2438529370,
        this._dh = 355462360,
        this._eh = 1731405415,
        this._fh = 2394180231,
        this._gh = 3675008525,
        this._hh = 1203062813,
        this._al = 3238371032,
        this._bl = 914150663,
        this._cl = 812702999,
        this._dl = 4144912697,
        this._el = 4290775857,
        this._fl = 1750603025,
        this._gl = 1694076839,
        this._hl = 3204075428,
        this
    }
    ,
    f.prototype._hash = function() {
        var e = a.allocUnsafe(48);
        function t(t, r, i) {
            e.writeInt32BE(t, i),
            e.writeInt32BE(r, i + 4)
        }
        return t(this._ah, this._al, 0),
        t(this._bh, this._bl, 8),
        t(this._ch, this._cl, 16),
        t(this._dh, this._dl, 24),
        t(this._eh, this._el, 32),
        t(this._fh, this._fl, 40),
        e
    }
    ,
    e.exports = f
}
, function(e, t, r) {
    "use strict";
    var i = r(2)
      , n = r(4).Buffer
      , o = r(46)
      , a = n.alloc(128)
      , s = 64;
    function f(e, t) {
        o.call(this, "digest"),
        "string" == typeof t && (t = n.from(t)),
        this._alg = e,
        this._key = t,
        t.length > s ? t = e(t) : t.length < s && (t = n.concat([t, a], s));
        for (var r = this._ipad = n.allocUnsafe(s), i = this._opad = n.allocUnsafe(s), f = 0; f < s; f++)
            r[f] = 54 ^ t[f],
            i[f] = 92 ^ t[f];
        this._hash = [r]
    }
    i(f, o),
    f.prototype._update = function(e) {
        this._hash.push(e)
    }
    ,
    f.prototype._final = function() {
        var e = this._alg(n.concat(this._hash));
        return this._alg(n.concat([this._opad, e]))
    }
    ,
    e.exports = f
}
, function(e, t, r) {
    e.exports = r(133)
}
, function(e, t, r) {
    (function(t, i) {
        var n, o = r(135), a = r(136), s = r(137), f = r(4).Buffer, c = t.crypto && t.crypto.subtle, h = {
            sha: "SHA-1",
            "sha-1": "SHA-1",
            sha1: "SHA-1",
            sha256: "SHA-256",
            "sha-256": "SHA-256",
            sha384: "SHA-384",
            "sha-384": "SHA-384",
            "sha-512": "SHA-512",
            sha512: "SHA-512"
        }, d = [];
        function u(e, t, r, i, n) {
            return c.importKey("raw", e, {
                name: "PBKDF2"
            }, !1, ["deriveBits"]).then((function(e) {
                return c.deriveBits({
                    name: "PBKDF2",
                    salt: t,
                    iterations: r,
                    hash: {
                        name: n
                    }
                }, e, i << 3)
            }
            )).then((function(e) {
                return f.from(e)
            }
            ))
        }
        e.exports = function(e, r, l, p, b, m) {
            "function" == typeof b && (m = b,
            b = void 0);
            var y = h[(b = b || "sha1").toLowerCase()];
            if (!y || "function" != typeof t.Promise)
                return i.nextTick((function() {
                    var t;
                    try {
                        t = s(e, r, l, p, b)
                    } catch (e) {
                        return m(e)
                    }
                    m(null, t)
                }
                ));
            if (o(e, r, l, p),
            "function" != typeof m)
                throw new Error("No callback provided to pbkdf2");
            f.isBuffer(e) || (e = f.from(e, a)),
            f.isBuffer(r) || (r = f.from(r, a)),
            function(e, t) {
                e.then((function(e) {
                    i.nextTick((function() {
                        t(null, e)
                    }
                    ))
                }
                ), (function(e) {
                    i.nextTick((function() {
                        t(e)
                    }
                    ))
                }
                ))
            }(function(e) {
                if (t.process && !t.process.browser)
                    return Promise.resolve(!1);
                if (!c || !c.importKey || !c.deriveBits)
                    return Promise.resolve(!1);
                if (void 0 !== d[e])
                    return d[e];
                var r = u(n = n || f.alloc(8), n, 10, 128, e).then((function() {
                    return !0
                }
                )).catch((function() {
                    return !1
                }
                ));
                return d[e] = r,
                r
            }(y).then((function(t) {
                return t ? u(e, r, l, p, y) : s(e, r, l, p, b)
            }
            )), m)
        }
    }
    ).call(this, r(38), r(45))
}
, function(e, t, r) {
    var i = r(242)
      , n = r(96)
      , o = r(97)
      , a = r(255)
      , s = r(73);
    function f(e, t, r) {
        if (e = e.toLowerCase(),
        o[e])
            return n.createCipheriv(e, t, r);
        if (a[e])
            return new i({
                key: t,
                iv: r,
                mode: e
            });
        throw new TypeError("invalid suite type")
    }
    function c(e, t, r) {
        if (e = e.toLowerCase(),
        o[e])
            return n.createDecipheriv(e, t, r);
        if (a[e])
            return new i({
                key: t,
                iv: r,
                mode: e,
                decrypt: !0
            });
        throw new TypeError("invalid suite type")
    }
    t.createCipher = t.Cipher = function(e, t) {
        var r, i;
        if (e = e.toLowerCase(),
        o[e])
            r = o[e].key,
            i = o[e].iv;
        else {
            if (!a[e])
                throw new TypeError("invalid suite type");
            r = 8 * a[e].key,
            i = a[e].iv
        }
        var n = s(t, !1, r, i);
        return f(e, n.key, n.iv)
    }
    ,
    t.createCipheriv = t.Cipheriv = f,
    t.createDecipher = t.Decipher = function(e, t) {
        var r, i;
        if (e = e.toLowerCase(),
        o[e])
            r = o[e].key,
            i = o[e].iv;
        else {
            if (!a[e])
                throw new TypeError("invalid suite type");
            r = 8 * a[e].key,
            i = a[e].iv
        }
        var n = s(t, !1, r, i);
        return c(e, n.key, n.iv)
    }
    ,
    t.createDecipheriv = t.Decipheriv = c,
    t.listCiphers = t.getCiphers = function() {
        return Object.keys(a).concat(n.getCiphers())
    }
}
, function(e, t, r) {
    var i = r(46)
      , n = r(243)
      , o = r(2)
      , a = r(4).Buffer
      , s = {
        "des-ede3-cbc": n.CBC.instantiate(n.EDE),
        "des-ede3": n.EDE,
        "des-ede-cbc": n.CBC.instantiate(n.EDE),
        "des-ede": n.EDE,
        "des-cbc": n.CBC.instantiate(n.DES),
        "des-ecb": n.DES
    };
    function f(e) {
        i.call(this);
        var t, r = e.mode.toLowerCase(), n = s[r];
        t = e.decrypt ? "decrypt" : "encrypt";
        var o = e.key;
        a.isBuffer(o) || (o = a.from(o)),
        "des-ede" !== r && "des-ede-cbc" !== r || (o = a.concat([o, o.slice(0, 8)]));
        var f = e.iv;
        a.isBuffer(f) || (f = a.from(f)),
        this._des = n.create({
            key: o,
            iv: f,
            type: t
        })
    }
    s.des = s["des-cbc"],
    s.des3 = s["des-ede3-cbc"],
    e.exports = f,
    o(f, i),
    f.prototype._update = function(e) {
        return a.from(this._des.update(e))
    }
    ,
    f.prototype._final = function() {
        return a.from(this._des.final())
    }
}
, function(e, t, r) {
    "use strict";
    t.utils = r(138),
    t.Cipher = r(95),
    t.DES = r(139),
    t.CBC = r(244),
    t.EDE = r(245)
}
, function(e, t, r) {
    "use strict";
    var i = r(32)
      , n = r(2)
      , o = {};
    function a(e) {
        i.equal(e.length, 8, "Invalid IV length"),
        this.iv = new Array(8);
        for (var t = 0; t < this.iv.length; t++)
            this.iv[t] = e[t]
    }
    t.instantiate = function(e) {
        function t(t) {
            e.call(this, t),
            this._cbcInit()
        }
        n(t, e);
        for (var r = Object.keys(o), i = 0; i < r.length; i++) {
            var a = r[i];
            t.prototype[a] = o[a]
        }
        return t.create = function(e) {
            return new t(e)
        }
        ,
        t
    }
    ,
    o._cbcInit = function() {
        var e = new a(this.options.iv);
        this._cbcState = e
    }
    ,
    o._update = function(e, t, r, i) {
        var n = this._cbcState
          , o = this.constructor.super_.prototype
          , a = n.iv;
        if ("encrypt" === this.type) {
            for (var s = 0; s < this.blockSize; s++)
                a[s] ^= e[t + s];
            o._update.call(this, a, 0, r, i);
            for (s = 0; s < this.blockSize; s++)
                a[s] = r[i + s]
        } else {
            o._update.call(this, e, t, r, i);
            for (s = 0; s < this.blockSize; s++)
                r[i + s] ^= a[s];
            for (s = 0; s < this.blockSize; s++)
                a[s] = e[t + s]
        }
    }
}
, function(e, t, r) {
    "use strict";
    var i = r(32)
      , n = r(2)
      , o = r(95)
      , a = r(139);
    function s(e, t) {
        i.equal(t.length, 24, "Invalid key length");
        var r = t.slice(0, 8)
          , n = t.slice(8, 16)
          , o = t.slice(16, 24);
        this.ciphers = "encrypt" === e ? [a.create({
            type: "encrypt",
            key: r
        }), a.create({
            type: "decrypt",
            key: n
        }), a.create({
            type: "encrypt",
            key: o
        })] : [a.create({
            type: "decrypt",
            key: o
        }), a.create({
            type: "encrypt",
            key: n
        }), a.create({
            type: "decrypt",
            key: r
        })]
    }
    function f(e) {
        o.call(this, e);
        var t = new s(this.type,this.options.key);
        this._edeState = t
    }
    n(f, o),
    e.exports = f,
    f.create = function(e) {
        return new f(e)
    }
    ,
    f.prototype._update = function(e, t, r, i) {
        var n = this._edeState;
        n.ciphers[0]._update(e, t, r, i),
        n.ciphers[1]._update(r, i, r, i),
        n.ciphers[2]._update(r, i, r, i)
    }
    ,
    f.prototype._pad = a.prototype._pad,
    f.prototype._unpad = a.prototype._unpad
}
, function(e, t, r) {
    var i = r(97)
      , n = r(143)
      , o = r(4).Buffer
      , a = r(144)
      , s = r(46)
      , f = r(72)
      , c = r(73);
    function h(e, t, r) {
        s.call(this),
        this._cache = new u,
        this._cipher = new f.AES(t),
        this._prev = o.from(r),
        this._mode = e,
        this._autopadding = !0
    }
    r(2)(h, s),
    h.prototype._update = function(e) {
        var t, r;
        this._cache.add(e);
        for (var i = []; t = this._cache.get(); )
            r = this._mode.encrypt(this, t),
            i.push(r);
        return o.concat(i)
    }
    ;
    var d = o.alloc(16, 16);
    function u() {
        this.cache = o.allocUnsafe(0)
    }
    function l(e, t, r) {
        var s = i[e.toLowerCase()];
        if (!s)
            throw new TypeError("invalid suite type");
        if ("string" == typeof t && (t = o.from(t)),
        t.length !== s.key / 8)
            throw new TypeError("invalid key length " + t.length);
        if ("string" == typeof r && (r = o.from(r)),
        "GCM" !== s.mode && r.length !== s.iv)
            throw new TypeError("invalid iv length " + r.length);
        return "stream" === s.type ? new a(s.module,t,r) : "auth" === s.type ? new n(s.module,t,r) : new h(s.module,t,r)
    }
    h.prototype._final = function() {
        var e = this._cache.flush();
        if (this._autopadding)
            return e = this._mode.encrypt(this, e),
            this._cipher.scrub(),
            e;
        if (!e.equals(d))
            throw this._cipher.scrub(),
            new Error("data not multiple of block length")
    }
    ,
    h.prototype.setAutoPadding = function(e) {
        return this._autopadding = !!e,
        this
    }
    ,
    u.prototype.add = function(e) {
        this.cache = o.concat([this.cache, e])
    }
    ,
    u.prototype.get = function() {
        if (this.cache.length > 15) {
            var e = this.cache.slice(0, 16);
            return this.cache = this.cache.slice(16),
            e
        }
        return null
    }
    ,
    u.prototype.flush = function() {
        for (var e = 16 - this.cache.length, t = o.allocUnsafe(e), r = -1; ++r < e; )
            t.writeUInt8(e, r);
        return o.concat([this.cache, t])
    }
    ,
    t.createCipheriv = l,
    t.createCipher = function(e, t) {
        var r = i[e.toLowerCase()];
        if (!r)
            throw new TypeError("invalid suite type");
        var n = c(t, !1, r.key, r.iv);
        return l(e, n.key, n.iv)
    }
}
, function(e, t) {
    t.encrypt = function(e, t) {
        return e._cipher.encryptBlock(t)
    }
    ,
    t.decrypt = function(e, t) {
        return e._cipher.decryptBlock(t)
    }
}
, function(e, t, r) {
    var i = r(61);
    t.encrypt = function(e, t) {
        var r = i(t, e._prev);
        return e._prev = e._cipher.encryptBlock(r),
        e._prev
    }
    ,
    t.decrypt = function(e, t) {
        var r = e._prev;
        e._prev = t;
        var n = e._cipher.decryptBlock(t);
        return i(n, r)
    }
}
, function(e, t, r) {
    var i = r(4).Buffer
      , n = r(61);
    function o(e, t, r) {
        var o = t.length
          , a = n(t, e._cache);
        return e._cache = e._cache.slice(o),
        e._prev = i.concat([e._prev, r ? t : a]),
        a
    }
    t.encrypt = function(e, t, r) {
        for (var n, a = i.allocUnsafe(0); t.length; ) {
            if (0 === e._cache.length && (e._cache = e._cipher.encryptBlock(e._prev),
            e._prev = i.allocUnsafe(0)),
            !(e._cache.length <= t.length)) {
                a = i.concat([a, o(e, t, r)]);
                break
            }
            n = e._cache.length,
            a = i.concat([a, o(e, t.slice(0, n), r)]),
            t = t.slice(n)
        }
        return a
    }
}
, function(e, t, r) {
    var i = r(4).Buffer;
    function n(e, t, r) {
        var n = e._cipher.encryptBlock(e._prev)[0] ^ t;
        return e._prev = i.concat([e._prev.slice(1), i.from([r ? t : n])]),
        n
    }
    t.encrypt = function(e, t, r) {
        for (var o = t.length, a = i.allocUnsafe(o), s = -1; ++s < o; )
            a[s] = n(e, t[s], r);
        return a
    }
}
, function(e, t, r) {
    var i = r(4).Buffer;
    function n(e, t, r) {
        for (var i, n, a = -1, s = 0; ++a < 8; )
            i = t & 1 << 7 - a ? 128 : 0,
            s += (128 & (n = e._cipher.encryptBlock(e._prev)[0] ^ i)) >> a % 8,
            e._prev = o(e._prev, r ? i : n);
        return s
    }
    function o(e, t) {
        var r = e.length
          , n = -1
          , o = i.allocUnsafe(e.length);
        for (e = i.concat([e, i.from([t])]); ++n < r; )
            o[n] = e[n] << 1 | e[n + 1] >> 7;
        return o
    }
    t.encrypt = function(e, t, r) {
        for (var o = t.length, a = i.allocUnsafe(o), s = -1; ++s < o; )
            a[s] = n(e, t[s], r);
        return a
    }
}
, function(e, t, r) {
    (function(e) {
        var i = r(61);
        function n(e) {
            return e._prev = e._cipher.encryptBlock(e._prev),
            e._prev
        }
        t.encrypt = function(t, r) {
            for (; t._cache.length < r.length; )
                t._cache = e.concat([t._cache, n(t)]);
            var o = t._cache.slice(0, r.length);
            return t._cache = t._cache.slice(r.length),
            i(r, o)
        }
    }
    ).call(this, r(20).Buffer)
}
, function(e, t, r) {
    var i = r(4).Buffer
      , n = i.alloc(16, 0);
    function o(e) {
        var t = i.allocUnsafe(16);
        return t.writeUInt32BE(e[0] >>> 0, 0),
        t.writeUInt32BE(e[1] >>> 0, 4),
        t.writeUInt32BE(e[2] >>> 0, 8),
        t.writeUInt32BE(e[3] >>> 0, 12),
        t
    }
    function a(e) {
        this.h = e,
        this.state = i.alloc(16, 0),
        this.cache = i.allocUnsafe(0)
    }
    a.prototype.ghash = function(e) {
        for (var t = -1; ++t < e.length; )
            this.state[t] ^= e[t];
        this._multiply()
    }
    ,
    a.prototype._multiply = function() {
        for (var e, t, r, i = [(e = this.h).readUInt32BE(0), e.readUInt32BE(4), e.readUInt32BE(8), e.readUInt32BE(12)], n = [0, 0, 0, 0], a = -1; ++a < 128; ) {
            for (0 != (this.state[~~(a / 8)] & 1 << 7 - a % 8) && (n[0] ^= i[0],
            n[1] ^= i[1],
            n[2] ^= i[2],
            n[3] ^= i[3]),
            r = 0 != (1 & i[3]),
            t = 3; t > 0; t--)
                i[t] = i[t] >>> 1 | (1 & i[t - 1]) << 31;
            i[0] = i[0] >>> 1,
            r && (i[0] = i[0] ^ 225 << 24)
        }
        this.state = o(n)
    }
    ,
    a.prototype.update = function(e) {
        var t;
        for (this.cache = i.concat([this.cache, e]); this.cache.length >= 16; )
            t = this.cache.slice(0, 16),
            this.cache = this.cache.slice(16),
            this.ghash(t)
    }
    ,
    a.prototype.final = function(e, t) {
        return this.cache.length && this.ghash(i.concat([this.cache, n], 16)),
        this.ghash(o([0, e, 0, t])),
        this.state
    }
    ,
    e.exports = a
}
, function(e, t, r) {
    var i = r(143)
      , n = r(4).Buffer
      , o = r(97)
      , a = r(144)
      , s = r(46)
      , f = r(72)
      , c = r(73);
    function h(e, t, r) {
        s.call(this),
        this._cache = new d,
        this._last = void 0,
        this._cipher = new f.AES(t),
        this._prev = n.from(r),
        this._mode = e,
        this._autopadding = !0
    }
    function d() {
        this.cache = n.allocUnsafe(0)
    }
    function u(e, t, r) {
        var s = o[e.toLowerCase()];
        if (!s)
            throw new TypeError("invalid suite type");
        if ("string" == typeof r && (r = n.from(r)),
        "GCM" !== s.mode && r.length !== s.iv)
            throw new TypeError("invalid iv length " + r.length);
        if ("string" == typeof t && (t = n.from(t)),
        t.length !== s.key / 8)
            throw new TypeError("invalid key length " + t.length);
        return "stream" === s.type ? new a(s.module,t,r,!0) : "auth" === s.type ? new i(s.module,t,r,!0) : new h(s.module,t,r)
    }
    r(2)(h, s),
    h.prototype._update = function(e) {
        var t, r;
        this._cache.add(e);
        for (var i = []; t = this._cache.get(this._autopadding); )
            r = this._mode.decrypt(this, t),
            i.push(r);
        return n.concat(i)
    }
    ,
    h.prototype._final = function() {
        var e = this._cache.flush();
        if (this._autopadding)
            return function(e) {
                var t = e[15];
                if (t < 1 || t > 16)
                    throw new Error("unable to decrypt data");
                var r = -1;
                for (; ++r < t; )
                    if (e[r + (16 - t)] !== t)
                        throw new Error("unable to decrypt data");
                if (16 === t)
                    return;
                return e.slice(0, 16 - t)
            }(this._mode.decrypt(this, e));
        if (e)
            throw new Error("data not multiple of block length")
    }
    ,
    h.prototype.setAutoPadding = function(e) {
        return this._autopadding = !!e,
        this
    }
    ,
    d.prototype.add = function(e) {
        this.cache = n.concat([this.cache, e])
    }
    ,
    d.prototype.get = function(e) {
        var t;
        if (e) {
            if (this.cache.length > 16)
                return t = this.cache.slice(0, 16),
                this.cache = this.cache.slice(16),
                t
        } else if (this.cache.length >= 16)
            return t = this.cache.slice(0, 16),
            this.cache = this.cache.slice(16),
            t;
        return null
    }
    ,
    d.prototype.flush = function() {
        if (this.cache.length)
            return this.cache
    }
    ,
    t.createDecipher = function(e, t) {
        var r = o[e.toLowerCase()];
        if (!r)
            throw new TypeError("invalid suite type");
        var i = c(t, !1, r.key, r.iv);
        return u(e, i.key, i.iv)
    }
    ,
    t.createDecipheriv = u
}
, function(e, t) {
    t["des-ecb"] = {
        key: 8,
        iv: 0
    },
    t["des-cbc"] = t.des = {
        key: 8,
        iv: 8
    },
    t["des-ede3-cbc"] = t.des3 = {
        key: 24,
        iv: 8
    },
    t["des-ede3"] = {
        key: 24,
        iv: 0
    },
    t["des-ede-cbc"] = {
        key: 16,
        iv: 8
    },
    t["des-ede"] = {
        key: 16,
        iv: 0
    }
}
, function(e, t, r) {
    (function(e) {
        var i = r(145)
          , n = r(260)
          , o = r(261);
        var a = {
            binary: !0,
            hex: !0,
            base64: !0
        };
        t.DiffieHellmanGroup = t.createDiffieHellmanGroup = t.getDiffieHellman = function(t) {
            var r = new e(n[t].prime,"hex")
              , i = new e(n[t].gen,"hex");
            return new o(r,i)
        }
        ,
        t.createDiffieHellman = t.DiffieHellman = function t(r, n, s, f) {
            return e.isBuffer(n) || void 0 === a[n] ? t(r, "binary", n, s) : (n = n || "binary",
            f = f || "binary",
            s = s || new e([2]),
            e.isBuffer(s) || (s = new e(s,f)),
            "number" == typeof r ? new o(i(r, s),s,!0) : (e.isBuffer(r) || (r = new e(r,n)),
            new o(r,s,!0)))
        }
    }
    ).call(this, r(20).Buffer)
}
, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}
        ,
        e.paths = [],
        e.children || (e.children = []),
        Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }),
        Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }),
        e.webpackPolyfill = 1),
        e
    }
}
, function(e, t) {}
, function(e, t) {}
, function(e) {
    e.exports = JSON.parse('{"modp1":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},"modp2":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},"modp5":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},"modp14":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},"modp15":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},"modp16":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},"modp17":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},"modp18":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}')
}
, function(e, t, r) {
    (function(t) {
        var i = r(15)
          , n = new (r(146))
          , o = new i(24)
          , a = new i(11)
          , s = new i(10)
          , f = new i(3)
          , c = new i(7)
          , h = r(145)
          , d = r(52);
        function u(e, r) {
            return r = r || "utf8",
            t.isBuffer(e) || (e = new t(e,r)),
            this._pub = new i(e),
            this
        }
        function l(e, r) {
            return r = r || "utf8",
            t.isBuffer(e) || (e = new t(e,r)),
            this._priv = new i(e),
            this
        }
        e.exports = b;
        var p = {};
        function b(e, t, r) {
            this.setGenerator(t),
            this.__prime = new i(e),
            this._prime = i.mont(this.__prime),
            this._primeLen = e.length,
            this._pub = void 0,
            this._priv = void 0,
            this._primeCode = void 0,
            r ? (this.setPublicKey = u,
            this.setPrivateKey = l) : this._primeCode = 8
        }
        function m(e, r) {
            var i = new t(e.toArray());
            return r ? i.toString(r) : i
        }
        Object.defineProperty(b.prototype, "verifyError", {
            enumerable: !0,
            get: function() {
                return "number" != typeof this._primeCode && (this._primeCode = function(e, t) {
                    var r = t.toString("hex")
                      , i = [r, e.toString(16)].join("_");
                    if (i in p)
                        return p[i];
                    var d, u = 0;
                    if (e.isEven() || !h.simpleSieve || !h.fermatTest(e) || !n.test(e))
                        return u += 1,
                        u += "02" === r || "05" === r ? 8 : 4,
                        p[i] = u,
                        u;
                    switch (n.test(e.shrn(1)) || (u += 2),
                    r) {
                    case "02":
                        e.mod(o).cmp(a) && (u += 8);
                        break;
                    case "05":
                        (d = e.mod(s)).cmp(f) && d.cmp(c) && (u += 8);
                        break;
                    default:
                        u += 4
                    }
                    return p[i] = u,
                    u
                }(this.__prime, this.__gen)),
                this._primeCode
            }
        }),
        b.prototype.generateKeys = function() {
            return this._priv || (this._priv = new i(d(this._primeLen))),
            this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed(),
            this.getPublicKey()
        }
        ,
        b.prototype.computeSecret = function(e) {
            var r = (e = (e = new i(e)).toRed(this._prime)).redPow(this._priv).fromRed()
              , n = new t(r.toArray())
              , o = this.getPrime();
            if (n.length < o.length) {
                var a = new t(o.length - n.length);
                a.fill(0),
                n = t.concat([a, n])
            }
            return n
        }
        ,
        b.prototype.getPublicKey = function(e) {
            return m(this._pub, e)
        }
        ,
        b.prototype.getPrivateKey = function(e) {
            return m(this._priv, e)
        }
        ,
        b.prototype.getPrime = function(e) {
            return m(this.__prime, e)
        }
        ,
        b.prototype.getGenerator = function(e) {
            return m(this._gen, e)
        }
        ,
        b.prototype.setGenerator = function(e, r) {
            return r = r || "utf8",
            t.isBuffer(e) || (e = new t(e,r)),
            this.__gen = e,
            this._gen = new i(e),
            this
        }
    }
    ).call(this, r(20).Buffer)
}
, function(e, t, r) {
    (function(t) {
        var i = r(59)
          , n = r(88)
          , o = r(2)
          , a = r(263)
          , s = r(295)
          , f = r(133);
        function c(e) {
            n.Writable.call(this);
            var t = f[e];
            if (!t)
                throw new Error("Unknown message digest");
            this._hashType = t.hash,
            this._hash = i(t.hash),
            this._tag = t.id,
            this._signType = t.sign
        }
        function h(e) {
            n.Writable.call(this);
            var t = f[e];
            if (!t)
                throw new Error("Unknown message digest");
            this._hash = i(t.hash),
            this._tag = t.id,
            this._signType = t.sign
        }
        function d(e) {
            return new c(e)
        }
        function u(e) {
            return new h(e)
        }
        Object.keys(f).forEach((function(e) {
            f[e].id = new t(f[e].id,"hex"),
            f[e.toLowerCase()] = f[e]
        }
        )),
        o(c, n.Writable),
        c.prototype._write = function(e, t, r) {
            this._hash.update(e),
            r()
        }
        ,
        c.prototype.update = function(e, r) {
            return "string" == typeof e && (e = new t(e,r)),
            this._hash.update(e),
            this
        }
        ,
        c.prototype.sign = function(e, t) {
            this.end();
            var r = this._hash.digest()
              , i = a(r, e, this._hashType, this._signType, this._tag);
            return t ? i.toString(t) : i
        }
        ,
        o(h, n.Writable),
        h.prototype._write = function(e, t, r) {
            this._hash.update(e),
            r()
        }
        ,
        h.prototype.update = function(e, r) {
            return "string" == typeof e && (e = new t(e,r)),
            this._hash.update(e),
            this
        }
        ,
        h.prototype.verify = function(e, r, i) {
            "string" == typeof r && (r = new t(r,i)),
            this.end();
            var n = this._hash.digest();
            return s(r, n, e, this._signType, this._tag)
        }
        ,
        e.exports = {
            Sign: d,
            Verify: u,
            createSign: d,
            createVerify: u
        }
    }
    ).call(this, r(20).Buffer)
}
, function(e, t, r) {
    (function(t) {
        var i = r(131)
          , n = r(99)
          , o = r(100).ec
          , a = r(15)
          , s = r(75)
          , f = r(156);
        function c(e, r, n, o) {
            if ((e = new t(e.toArray())).length < r.byteLength()) {
                var a = new t(r.byteLength() - e.length);
                a.fill(0),
                e = t.concat([a, e])
            }
            var s = n.length
              , f = function(e, r) {
                e = (e = h(e, r)).mod(r);
                var i = new t(e.toArray());
                if (i.length < r.byteLength()) {
                    var n = new t(r.byteLength() - i.length);
                    n.fill(0),
                    i = t.concat([n, i])
                }
                return i
            }(n, r)
              , c = new t(s);
            c.fill(1);
            var d = new t(s);
            return d.fill(0),
            d = i(o, d).update(c).update(new t([0])).update(e).update(f).digest(),
            c = i(o, d).update(c).digest(),
            {
                k: d = i(o, d).update(c).update(new t([1])).update(e).update(f).digest(),
                v: c = i(o, d).update(c).digest()
            }
        }
        function h(e, t) {
            var r = new a(e)
              , i = (e.length << 3) - t.bitLength();
            return i > 0 && r.ishrn(i),
            r
        }
        function d(e, r, n) {
            var o, a;
            do {
                for (o = new t(0); 8 * o.length < e.bitLength(); )
                    r.v = i(n, r.k).update(r.v).digest(),
                    o = t.concat([o, r.v]);
                a = h(o, e),
                r.k = i(n, r.k).update(r.v).update(new t([0])).digest(),
                r.v = i(n, r.k).update(r.v).digest()
            } while (-1 !== a.cmp(e));
            return a
        }
        function u(e, t, r, i) {
            return e.toRed(a.mont(r)).redPow(t).fromRed().mod(i)
        }
        e.exports = function(e, r, i, l, p) {
            var b = s(r);
            if (b.curve) {
                if ("ecdsa" !== l && "ecdsa/rsa" !== l)
                    throw new Error("wrong private key type");
                return function(e, r) {
                    var i = f[r.curve.join(".")];
                    if (!i)
                        throw new Error("unknown curve " + r.curve.join("."));
                    var n = new o(i).keyFromPrivate(r.privateKey).sign(e);
                    return new t(n.toDER())
                }(e, b)
            }
            if ("dsa" === b.type) {
                if ("dsa" !== l)
                    throw new Error("wrong private key type");
                return function(e, r, i) {
                    var n, o = r.params.priv_key, s = r.params.p, f = r.params.q, l = r.params.g, p = new a(0), b = h(e, f).mod(f), m = !1, y = c(o, f, e, i);
                    for (; !1 === m; )
                        n = d(f, y, i),
                        p = u(l, n, s, f),
                        0 === (m = n.invm(f).imul(b.add(o.mul(p))).mod(f)).cmpn(0) && (m = !1,
                        p = new a(0));
                    return function(e, r) {
                        e = e.toArray(),
                        r = r.toArray(),
                        128 & e[0] && (e = [0].concat(e));
                        128 & r[0] && (r = [0].concat(r));
                        var i = [48, e.length + r.length + 4, 2, e.length];
                        return i = i.concat(e, [2, r.length], r),
                        new t(i)
                    }(p, m)
                }(e, b, i)
            }
            if ("rsa" !== l && "ecdsa/rsa" !== l)
                throw new Error("wrong private key type");
            e = t.concat([p, e]);
            for (var m = b.modulus.byteLength(), y = [0, 1]; e.length + y.length + 1 < m; )
                y.push(255);
            y.push(0);
            for (var g = -1; ++g < e.length; )
                y.push(e[g]);
            return n(y, b)
        }
        ,
        e.exports.getKey = c,
        e.exports.makeKey = d
    }
    ).call(this, r(20).Buffer)
}
, function(e) {
    e.exports = JSON.parse('{"_args":[["elliptic@6.5.2","/Users/lidan6/sinawork/project/0226_黑猫pc"]],"_development":true,"_from":"elliptic@6.5.2","_id":"elliptic@6.5.2","_inBundle":false,"_integrity":"sha512-f4x70okzZbIQl/NSRLkI/+tteV/9WqL98zx+SQ69KbXxmVrmjwsNUPn/gYJJ0sHvEak24cZgHIPegRePAtA/xw==","_location":"/elliptic","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"elliptic@6.5.2","name":"elliptic","escapedName":"elliptic","rawSpec":"6.5.2","saveSpec":null,"fetchSpec":"6.5.2"},"_requiredBy":["/browserify-sign","/create-ecdh"],"_resolved":"https://registry.npmjs.org/elliptic/-/elliptic-6.5.2.tgz","_spec":"6.5.2","_where":"/Users/lidan6/sinawork/project/0226_黑猫pc","author":{"name":"Fedor Indutny","email":"fedor@indutny.com"},"bugs":{"url":"https://github.com/indutny/elliptic/issues"},"dependencies":{"bn.js":"^4.4.0","brorand":"^1.0.1","hash.js":"^1.0.0","hmac-drbg":"^1.0.0","inherits":"^2.0.1","minimalistic-assert":"^1.0.0","minimalistic-crypto-utils":"^1.0.0"},"description":"EC cryptography","devDependencies":{"brfs":"^1.4.3","coveralls":"^3.0.8","grunt":"^1.0.4","grunt-browserify":"^5.0.0","grunt-cli":"^1.2.0","grunt-contrib-connect":"^1.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^1.0.1","grunt-mocha-istanbul":"^3.0.1","grunt-saucelabs":"^9.0.1","istanbul":"^0.4.2","jscs":"^3.0.7","jshint":"^2.10.3","mocha":"^6.2.2"},"files":["lib"],"homepage":"https://github.com/indutny/elliptic","keywords":["EC","Elliptic","curve","Cryptography"],"license":"MIT","main":"lib/elliptic.js","name":"elliptic","repository":{"type":"git","url":"git+ssh://git@github.com/indutny/elliptic.git"},"scripts":{"jscs":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","jshint":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","lint":"npm run jscs && npm run jshint","test":"npm run lint && npm run unit","unit":"istanbul test _mocha --reporter=spec test/index.js","version":"grunt dist && git add dist/"},"version":"6.5.2"}')
}
, function(e, t, r) {
    "use strict";
    var i = r(33)
      , n = r(15)
      , o = r(2)
      , a = r(74)
      , s = i.assert;
    function f(e) {
        a.call(this, "short", e),
        this.a = new n(e.a,16).toRed(this.red),
        this.b = new n(e.b,16).toRed(this.red),
        this.tinv = this.two.redInvm(),
        this.zeroA = 0 === this.a.fromRed().cmpn(0),
        this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3),
        this.endo = this._getEndomorphism(e),
        this._endoWnafT1 = new Array(4),
        this._endoWnafT2 = new Array(4)
    }
    function c(e, t, r, i) {
        a.BasePoint.call(this, e, "affine"),
        null === t && null === r ? (this.x = null,
        this.y = null,
        this.inf = !0) : (this.x = new n(t,16),
        this.y = new n(r,16),
        i && (this.x.forceRed(this.curve.red),
        this.y.forceRed(this.curve.red)),
        this.x.red || (this.x = this.x.toRed(this.curve.red)),
        this.y.red || (this.y = this.y.toRed(this.curve.red)),
        this.inf = !1)
    }
    function h(e, t, r, i) {
        a.BasePoint.call(this, e, "jacobian"),
        null === t && null === r && null === i ? (this.x = this.curve.one,
        this.y = this.curve.one,
        this.z = new n(0)) : (this.x = new n(t,16),
        this.y = new n(r,16),
        this.z = new n(i,16)),
        this.x.red || (this.x = this.x.toRed(this.curve.red)),
        this.y.red || (this.y = this.y.toRed(this.curve.red)),
        this.z.red || (this.z = this.z.toRed(this.curve.red)),
        this.zOne = this.z === this.curve.one
    }
    o(f, a),
    e.exports = f,
    f.prototype._getEndomorphism = function(e) {
        if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            var t, r;
            if (e.beta)
                t = new n(e.beta,16).toRed(this.red);
            else {
                var i = this._getEndoRoots(this.p);
                t = (t = i[0].cmp(i[1]) < 0 ? i[0] : i[1]).toRed(this.red)
            }
            if (e.lambda)
                r = new n(e.lambda,16);
            else {
                var o = this._getEndoRoots(this.n);
                0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(t)) ? r = o[0] : (r = o[1],
                s(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))))
            }
            return {
                beta: t,
                lambda: r,
                basis: e.basis ? e.basis.map((function(e) {
                    return {
                        a: new n(e.a,16),
                        b: new n(e.b,16)
                    }
                }
                )) : this._getEndoBasis(r)
            }
        }
    }
    ,
    f.prototype._getEndoRoots = function(e) {
        var t = e === this.p ? this.red : n.mont(e)
          , r = new n(2).toRed(t).redInvm()
          , i = r.redNeg()
          , o = new n(3).toRed(t).redNeg().redSqrt().redMul(r);
        return [i.redAdd(o).fromRed(), i.redSub(o).fromRed()]
    }
    ,
    f.prototype._getEndoBasis = function(e) {
        for (var t, r, i, o, a, s, f, c, h, d = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), u = e, l = this.n.clone(), p = new n(1), b = new n(0), m = new n(0), y = new n(1), g = 0; 0 !== u.cmpn(0); ) {
            var v = l.div(u);
            c = l.sub(v.mul(u)),
            h = m.sub(v.mul(p));
            var _ = y.sub(v.mul(b));
            if (!i && c.cmp(d) < 0)
                t = f.neg(),
                r = p,
                i = c.neg(),
                o = h;
            else if (i && 2 == ++g)
                break;
            f = c,
            l = u,
            u = c,
            m = p,
            p = h,
            y = b,
            b = _
        }
        a = c.neg(),
        s = h;
        var w = i.sqr().add(o.sqr());
        return a.sqr().add(s.sqr()).cmp(w) >= 0 && (a = t,
        s = r),
        i.negative && (i = i.neg(),
        o = o.neg()),
        a.negative && (a = a.neg(),
        s = s.neg()),
        [{
            a: i,
            b: o
        }, {
            a: a,
            b: s
        }]
    }
    ,
    f.prototype._endoSplit = function(e) {
        var t = this.endo.basis
          , r = t[0]
          , i = t[1]
          , n = i.b.mul(e).divRound(this.n)
          , o = r.b.neg().mul(e).divRound(this.n)
          , a = n.mul(r.a)
          , s = o.mul(i.a)
          , f = n.mul(r.b)
          , c = o.mul(i.b);
        return {
            k1: e.sub(a).sub(s),
            k2: f.add(c).neg()
        }
    }
    ,
    f.prototype.pointFromX = function(e, t) {
        (e = new n(e,16)).red || (e = e.toRed(this.red));
        var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b)
          , i = r.redSqrt();
        if (0 !== i.redSqr().redSub(r).cmp(this.zero))
            throw new Error("invalid point");
        var o = i.fromRed().isOdd();
        return (t && !o || !t && o) && (i = i.redNeg()),
        this.point(e, i)
    }
    ,
    f.prototype.validate = function(e) {
        if (e.inf)
            return !0;
        var t = e.x
          , r = e.y
          , i = this.a.redMul(t)
          , n = t.redSqr().redMul(t).redIAdd(i).redIAdd(this.b);
        return 0 === r.redSqr().redISub(n).cmpn(0)
    }
    ,
    f.prototype._endoWnafMulAdd = function(e, t, r) {
        for (var i = this._endoWnafT1, n = this._endoWnafT2, o = 0; o < e.length; o++) {
            var a = this._endoSplit(t[o])
              , s = e[o]
              , f = s._getBeta();
            a.k1.negative && (a.k1.ineg(),
            s = s.neg(!0)),
            a.k2.negative && (a.k2.ineg(),
            f = f.neg(!0)),
            i[2 * o] = s,
            i[2 * o + 1] = f,
            n[2 * o] = a.k1,
            n[2 * o + 1] = a.k2
        }
        for (var c = this._wnafMulAdd(1, i, n, 2 * o, r), h = 0; h < 2 * o; h++)
            i[h] = null,
            n[h] = null;
        return c
    }
    ,
    o(c, a.BasePoint),
    f.prototype.point = function(e, t, r) {
        return new c(this,e,t,r)
    }
    ,
    f.prototype.pointFromJSON = function(e, t) {
        return c.fromJSON(this, e, t)
    }
    ,
    c.prototype._getBeta = function() {
        if (this.curve.endo) {
            var e = this.precomputed;
            if (e && e.beta)
                return e.beta;
            var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
            if (e) {
                var r = this.curve
                  , i = function(e) {
                    return r.point(e.x.redMul(r.endo.beta), e.y)
                };
                e.beta = t,
                t.precomputed = {
                    beta: null,
                    naf: e.naf && {
                        wnd: e.naf.wnd,
                        points: e.naf.points.map(i)
                    },
                    doubles: e.doubles && {
                        step: e.doubles.step,
                        points: e.doubles.points.map(i)
                    }
                }
            }
            return t
        }
    }
    ,
    c.prototype.toJSON = function() {
        return this.precomputed ? [this.x, this.y, this.precomputed && {
            doubles: this.precomputed.doubles && {
                step: this.precomputed.doubles.step,
                points: this.precomputed.doubles.points.slice(1)
            },
            naf: this.precomputed.naf && {
                wnd: this.precomputed.naf.wnd,
                points: this.precomputed.naf.points.slice(1)
            }
        }] : [this.x, this.y]
    }
    ,
    c.fromJSON = function(e, t, r) {
        "string" == typeof t && (t = JSON.parse(t));
        var i = e.point(t[0], t[1], r);
        if (!t[2])
            return i;
        function n(t) {
            return e.point(t[0], t[1], r)
        }
        var o = t[2];
        return i.precomputed = {
            beta: null,
            doubles: o.doubles && {
                step: o.doubles.step,
                points: [i].concat(o.doubles.points.map(n))
            },
            naf: o.naf && {
                wnd: o.naf.wnd,
                points: [i].concat(o.naf.points.map(n))
            }
        },
        i
    }
    ,
    c.prototype.inspect = function() {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
    }
    ,
    c.prototype.isInfinity = function() {
        return this.inf
    }
    ,
    c.prototype.add = function(e) {
        if (this.inf)
            return e;
        if (e.inf)
            return this;
        if (this.eq(e))
            return this.dbl();
        if (this.neg().eq(e))
            return this.curve.point(null, null);
        if (0 === this.x.cmp(e.x))
            return this.curve.point(null, null);
        var t = this.y.redSub(e.y);
        0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
        var r = t.redSqr().redISub(this.x).redISub(e.x)
          , i = t.redMul(this.x.redSub(r)).redISub(this.y);
        return this.curve.point(r, i)
    }
    ,
    c.prototype.dbl = function() {
        if (this.inf)
            return this;
        var e = this.y.redAdd(this.y);
        if (0 === e.cmpn(0))
            return this.curve.point(null, null);
        var t = this.curve.a
          , r = this.x.redSqr()
          , i = e.redInvm()
          , n = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(i)
          , o = n.redSqr().redISub(this.x.redAdd(this.x))
          , a = n.redMul(this.x.redSub(o)).redISub(this.y);
        return this.curve.point(o, a)
    }
    ,
    c.prototype.getX = function() {
        return this.x.fromRed()
    }
    ,
    c.prototype.getY = function() {
        return this.y.fromRed()
    }
    ,
    c.prototype.mul = function(e) {
        return e = new n(e,16),
        this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e)
    }
    ,
    c.prototype.mulAdd = function(e, t, r) {
        var i = [this, t]
          , n = [e, r];
        return this.curve.endo ? this.curve._endoWnafMulAdd(i, n) : this.curve._wnafMulAdd(1, i, n, 2)
    }
    ,
    c.prototype.jmulAdd = function(e, t, r) {
        var i = [this, t]
          , n = [e, r];
        return this.curve.endo ? this.curve._endoWnafMulAdd(i, n, !0) : this.curve._wnafMulAdd(1, i, n, 2, !0)
    }
    ,
    c.prototype.eq = function(e) {
        return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))
    }
    ,
    c.prototype.neg = function(e) {
        if (this.inf)
            return this;
        var t = this.curve.point(this.x, this.y.redNeg());
        if (e && this.precomputed) {
            var r = this.precomputed
              , i = function(e) {
                return e.neg()
            };
            t.precomputed = {
                naf: r.naf && {
                    wnd: r.naf.wnd,
                    points: r.naf.points.map(i)
                },
                doubles: r.doubles && {
                    step: r.doubles.step,
                    points: r.doubles.points.map(i)
                }
            }
        }
        return t
    }
    ,
    c.prototype.toJ = function() {
        return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
    }
    ,
    o(h, a.BasePoint),
    f.prototype.jpoint = function(e, t, r) {
        return new h(this,e,t,r)
    }
    ,
    h.prototype.toP = function() {
        if (this.isInfinity())
            return this.curve.point(null, null);
        var e = this.z.redInvm()
          , t = e.redSqr()
          , r = this.x.redMul(t)
          , i = this.y.redMul(t).redMul(e);
        return this.curve.point(r, i)
    }
    ,
    h.prototype.neg = function() {
        return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
    }
    ,
    h.prototype.add = function(e) {
        if (this.isInfinity())
            return e;
        if (e.isInfinity())
            return this;
        var t = e.z.redSqr()
          , r = this.z.redSqr()
          , i = this.x.redMul(t)
          , n = e.x.redMul(r)
          , o = this.y.redMul(t.redMul(e.z))
          , a = e.y.redMul(r.redMul(this.z))
          , s = i.redSub(n)
          , f = o.redSub(a);
        if (0 === s.cmpn(0))
            return 0 !== f.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var c = s.redSqr()
          , h = c.redMul(s)
          , d = i.redMul(c)
          , u = f.redSqr().redIAdd(h).redISub(d).redISub(d)
          , l = f.redMul(d.redISub(u)).redISub(o.redMul(h))
          , p = this.z.redMul(e.z).redMul(s);
        return this.curve.jpoint(u, l, p)
    }
    ,
    h.prototype.mixedAdd = function(e) {
        if (this.isInfinity())
            return e.toJ();
        if (e.isInfinity())
            return this;
        var t = this.z.redSqr()
          , r = this.x
          , i = e.x.redMul(t)
          , n = this.y
          , o = e.y.redMul(t).redMul(this.z)
          , a = r.redSub(i)
          , s = n.redSub(o);
        if (0 === a.cmpn(0))
            return 0 !== s.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var f = a.redSqr()
          , c = f.redMul(a)
          , h = r.redMul(f)
          , d = s.redSqr().redIAdd(c).redISub(h).redISub(h)
          , u = s.redMul(h.redISub(d)).redISub(n.redMul(c))
          , l = this.z.redMul(a);
        return this.curve.jpoint(d, u, l)
    }
    ,
    h.prototype.dblp = function(e) {
        if (0 === e)
            return this;
        if (this.isInfinity())
            return this;
        if (!e)
            return this.dbl();
        if (this.curve.zeroA || this.curve.threeA) {
            for (var t = this, r = 0; r < e; r++)
                t = t.dbl();
            return t
        }
        var i = this.curve.a
          , n = this.curve.tinv
          , o = this.x
          , a = this.y
          , s = this.z
          , f = s.redSqr().redSqr()
          , c = a.redAdd(a);
        for (r = 0; r < e; r++) {
            var h = o.redSqr()
              , d = c.redSqr()
              , u = d.redSqr()
              , l = h.redAdd(h).redIAdd(h).redIAdd(i.redMul(f))
              , p = o.redMul(d)
              , b = l.redSqr().redISub(p.redAdd(p))
              , m = p.redISub(b)
              , y = l.redMul(m);
            y = y.redIAdd(y).redISub(u);
            var g = c.redMul(s);
            r + 1 < e && (f = f.redMul(u)),
            o = b,
            s = g,
            c = y
        }
        return this.curve.jpoint(o, c.redMul(n), s)
    }
    ,
    h.prototype.dbl = function() {
        return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
    }
    ,
    h.prototype._zeroDbl = function() {
        var e, t, r;
        if (this.zOne) {
            var i = this.x.redSqr()
              , n = this.y.redSqr()
              , o = n.redSqr()
              , a = this.x.redAdd(n).redSqr().redISub(i).redISub(o);
            a = a.redIAdd(a);
            var s = i.redAdd(i).redIAdd(i)
              , f = s.redSqr().redISub(a).redISub(a)
              , c = o.redIAdd(o);
            c = (c = c.redIAdd(c)).redIAdd(c),
            e = f,
            t = s.redMul(a.redISub(f)).redISub(c),
            r = this.y.redAdd(this.y)
        } else {
            var h = this.x.redSqr()
              , d = this.y.redSqr()
              , u = d.redSqr()
              , l = this.x.redAdd(d).redSqr().redISub(h).redISub(u);
            l = l.redIAdd(l);
            var p = h.redAdd(h).redIAdd(h)
              , b = p.redSqr()
              , m = u.redIAdd(u);
            m = (m = m.redIAdd(m)).redIAdd(m),
            e = b.redISub(l).redISub(l),
            t = p.redMul(l.redISub(e)).redISub(m),
            r = (r = this.y.redMul(this.z)).redIAdd(r)
        }
        return this.curve.jpoint(e, t, r)
    }
    ,
    h.prototype._threeDbl = function() {
        var e, t, r;
        if (this.zOne) {
            var i = this.x.redSqr()
              , n = this.y.redSqr()
              , o = n.redSqr()
              , a = this.x.redAdd(n).redSqr().redISub(i).redISub(o);
            a = a.redIAdd(a);
            var s = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a)
              , f = s.redSqr().redISub(a).redISub(a);
            e = f;
            var c = o.redIAdd(o);
            c = (c = c.redIAdd(c)).redIAdd(c),
            t = s.redMul(a.redISub(f)).redISub(c),
            r = this.y.redAdd(this.y)
        } else {
            var h = this.z.redSqr()
              , d = this.y.redSqr()
              , u = this.x.redMul(d)
              , l = this.x.redSub(h).redMul(this.x.redAdd(h));
            l = l.redAdd(l).redIAdd(l);
            var p = u.redIAdd(u)
              , b = (p = p.redIAdd(p)).redAdd(p);
            e = l.redSqr().redISub(b),
            r = this.y.redAdd(this.z).redSqr().redISub(d).redISub(h);
            var m = d.redSqr();
            m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m),
            t = l.redMul(p.redISub(e)).redISub(m)
        }
        return this.curve.jpoint(e, t, r)
    }
    ,
    h.prototype._dbl = function() {
        var e = this.curve.a
          , t = this.x
          , r = this.y
          , i = this.z
          , n = i.redSqr().redSqr()
          , o = t.redSqr()
          , a = r.redSqr()
          , s = o.redAdd(o).redIAdd(o).redIAdd(e.redMul(n))
          , f = t.redAdd(t)
          , c = (f = f.redIAdd(f)).redMul(a)
          , h = s.redSqr().redISub(c.redAdd(c))
          , d = c.redISub(h)
          , u = a.redSqr();
        u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
        var l = s.redMul(d).redISub(u)
          , p = r.redAdd(r).redMul(i);
        return this.curve.jpoint(h, l, p)
    }
    ,
    h.prototype.trpl = function() {
        if (!this.curve.zeroA)
            return this.dbl().add(this);
        var e = this.x.redSqr()
          , t = this.y.redSqr()
          , r = this.z.redSqr()
          , i = t.redSqr()
          , n = e.redAdd(e).redIAdd(e)
          , o = n.redSqr()
          , a = this.x.redAdd(t).redSqr().redISub(e).redISub(i)
          , s = (a = (a = (a = a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(o)).redSqr()
          , f = i.redIAdd(i);
        f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
        var c = n.redIAdd(a).redSqr().redISub(o).redISub(s).redISub(f)
          , h = t.redMul(c);
        h = (h = h.redIAdd(h)).redIAdd(h);
        var d = this.x.redMul(s).redISub(h);
        d = (d = d.redIAdd(d)).redIAdd(d);
        var u = this.y.redMul(c.redMul(f.redISub(c)).redISub(a.redMul(s)));
        u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
        var l = this.z.redAdd(a).redSqr().redISub(r).redISub(s);
        return this.curve.jpoint(d, u, l)
    }
    ,
    h.prototype.mul = function(e, t) {
        return e = new n(e,t),
        this.curve._wnafMul(this, e)
    }
    ,
    h.prototype.eq = function(e) {
        if ("affine" === e.type)
            return this.eq(e.toJ());
        if (this === e)
            return !0;
        var t = this.z.redSqr()
          , r = e.z.redSqr();
        if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0))
            return !1;
        var i = t.redMul(this.z)
          , n = r.redMul(e.z);
        return 0 === this.y.redMul(n).redISub(e.y.redMul(i)).cmpn(0)
    }
    ,
    h.prototype.eqXToP = function(e) {
        var t = this.z.redSqr()
          , r = e.toRed(this.curve.red).redMul(t);
        if (0 === this.x.cmp(r))
            return !0;
        for (var i = e.clone(), n = this.curve.redN.redMul(t); ; ) {
            if (i.iadd(this.curve.n),
            i.cmp(this.curve.p) >= 0)
                return !1;
            if (r.redIAdd(n),
            0 === this.x.cmp(r))
                return !0
        }
    }
    ,
    h.prototype.inspect = function() {
        return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
    }
    ,
    h.prototype.isInfinity = function() {
        return 0 === this.z.cmpn(0)
    }
}
, function(e, t, r) {
    "use strict";
    var i = r(15)
      , n = r(2)
      , o = r(74)
      , a = r(33);
    function s(e) {
        o.call(this, "mont", e),
        this.a = new i(e.a,16).toRed(this.red),
        this.b = new i(e.b,16).toRed(this.red),
        this.i4 = new i(4).toRed(this.red).redInvm(),
        this.two = new i(2).toRed(this.red),
        this.a24 = this.i4.redMul(this.a.redAdd(this.two))
    }
    function f(e, t, r) {
        o.BasePoint.call(this, e, "projective"),
        null === t && null === r ? (this.x = this.curve.one,
        this.z = this.curve.zero) : (this.x = new i(t,16),
        this.z = new i(r,16),
        this.x.red || (this.x = this.x.toRed(this.curve.red)),
        this.z.red || (this.z = this.z.toRed(this.curve.red)))
    }
    n(s, o),
    e.exports = s,
    s.prototype.validate = function(e) {
        var t = e.normalize().x
          , r = t.redSqr()
          , i = r.redMul(t).redAdd(r.redMul(this.a)).redAdd(t);
        return 0 === i.redSqrt().redSqr().cmp(i)
    }
    ,
    n(f, o.BasePoint),
    s.prototype.decodePoint = function(e, t) {
        return this.point(a.toArray(e, t), 1)
    }
    ,
    s.prototype.point = function(e, t) {
        return new f(this,e,t)
    }
    ,
    s.prototype.pointFromJSON = function(e) {
        return f.fromJSON(this, e)
    }
    ,
    f.prototype.precompute = function() {}
    ,
    f.prototype._encode = function() {
        return this.getX().toArray("be", this.curve.p.byteLength())
    }
    ,
    f.fromJSON = function(e, t) {
        return new f(e,t[0],t[1] || e.one)
    }
    ,
    f.prototype.inspect = function() {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
    }
    ,
    f.prototype.isInfinity = function() {
        return 0 === this.z.cmpn(0)
    }
    ,
    f.prototype.dbl = function() {
        var e = this.x.redAdd(this.z).redSqr()
          , t = this.x.redSub(this.z).redSqr()
          , r = e.redSub(t)
          , i = e.redMul(t)
          , n = r.redMul(t.redAdd(this.curve.a24.redMul(r)));
        return this.curve.point(i, n)
    }
    ,
    f.prototype.add = function() {
        throw new Error("Not supported on Montgomery curve")
    }
    ,
    f.prototype.diffAdd = function(e, t) {
        var r = this.x.redAdd(this.z)
          , i = this.x.redSub(this.z)
          , n = e.x.redAdd(e.z)
          , o = e.x.redSub(e.z).redMul(r)
          , a = n.redMul(i)
          , s = t.z.redMul(o.redAdd(a).redSqr())
          , f = t.x.redMul(o.redISub(a).redSqr());
        return this.curve.point(s, f)
    }
    ,
    f.prototype.mul = function(e) {
        for (var t = e.clone(), r = this, i = this.curve.point(null, null), n = []; 0 !== t.cmpn(0); t.iushrn(1))
            n.push(t.andln(1));
        for (var o = n.length - 1; o >= 0; o--)
            0 === n[o] ? (r = r.diffAdd(i, this),
            i = i.dbl()) : (i = r.diffAdd(i, this),
            r = r.dbl());
        return i
    }
    ,
    f.prototype.mulAdd = function() {
        throw new Error("Not supported on Montgomery curve")
    }
    ,
    f.prototype.jumlAdd = function() {
        throw new Error("Not supported on Montgomery curve")
    }
    ,
    f.prototype.eq = function(e) {
        return 0 === this.getX().cmp(e.getX())
    }
    ,
    f.prototype.normalize = function() {
        return this.x = this.x.redMul(this.z.redInvm()),
        this.z = this.curve.one,
        this
    }
    ,
    f.prototype.getX = function() {
        return this.normalize(),
        this.x.fromRed()
    }
}
, function(e, t, r) {
    "use strict";
    var i = r(33)
      , n = r(15)
      , o = r(2)
      , a = r(74)
      , s = i.assert;
    function f(e) {
        this.twisted = 1 != (0 | e.a),
        this.mOneA = this.twisted && -1 == (0 | e.a),
        this.extended = this.mOneA,
        a.call(this, "edwards", e),
        this.a = new n(e.a,16).umod(this.red.m),
        this.a = this.a.toRed(this.red),
        this.c = new n(e.c,16).toRed(this.red),
        this.c2 = this.c.redSqr(),
        this.d = new n(e.d,16).toRed(this.red),
        this.dd = this.d.redAdd(this.d),
        s(!this.twisted || 0 === this.c.fromRed().cmpn(1)),
        this.oneC = 1 == (0 | e.c)
    }
    function c(e, t, r, i, o) {
        a.BasePoint.call(this, e, "projective"),
        null === t && null === r && null === i ? (this.x = this.curve.zero,
        this.y = this.curve.one,
        this.z = this.curve.one,
        this.t = this.curve.zero,
        this.zOne = !0) : (this.x = new n(t,16),
        this.y = new n(r,16),
        this.z = i ? new n(i,16) : this.curve.one,
        this.t = o && new n(o,16),
        this.x.red || (this.x = this.x.toRed(this.curve.red)),
        this.y.red || (this.y = this.y.toRed(this.curve.red)),
        this.z.red || (this.z = this.z.toRed(this.curve.red)),
        this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)),
        this.zOne = this.z === this.curve.one,
        this.curve.extended && !this.t && (this.t = this.x.redMul(this.y),
        this.zOne || (this.t = this.t.redMul(this.z.redInvm()))))
    }
    o(f, a),
    e.exports = f,
    f.prototype._mulA = function(e) {
        return this.mOneA ? e.redNeg() : this.a.redMul(e)
    }
    ,
    f.prototype._mulC = function(e) {
        return this.oneC ? e : this.c.redMul(e)
    }
    ,
    f.prototype.jpoint = function(e, t, r, i) {
        return this.point(e, t, r, i)
    }
    ,
    f.prototype.pointFromX = function(e, t) {
        (e = new n(e,16)).red || (e = e.toRed(this.red));
        var r = e.redSqr()
          , i = this.c2.redSub(this.a.redMul(r))
          , o = this.one.redSub(this.c2.redMul(this.d).redMul(r))
          , a = i.redMul(o.redInvm())
          , s = a.redSqrt();
        if (0 !== s.redSqr().redSub(a).cmp(this.zero))
            throw new Error("invalid point");
        var f = s.fromRed().isOdd();
        return (t && !f || !t && f) && (s = s.redNeg()),
        this.point(e, s)
    }
    ,
    f.prototype.pointFromY = function(e, t) {
        (e = new n(e,16)).red || (e = e.toRed(this.red));
        var r = e.redSqr()
          , i = r.redSub(this.c2)
          , o = r.redMul(this.d).redMul(this.c2).redSub(this.a)
          , a = i.redMul(o.redInvm());
        if (0 === a.cmp(this.zero)) {
            if (t)
                throw new Error("invalid point");
            return this.point(this.zero, e)
        }
        var s = a.redSqrt();
        if (0 !== s.redSqr().redSub(a).cmp(this.zero))
            throw new Error("invalid point");
        return s.fromRed().isOdd() !== t && (s = s.redNeg()),
        this.point(s, e)
    }
    ,
    f.prototype.validate = function(e) {
        if (e.isInfinity())
            return !0;
        e.normalize();
        var t = e.x.redSqr()
          , r = e.y.redSqr()
          , i = t.redMul(this.a).redAdd(r)
          , n = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r)));
        return 0 === i.cmp(n)
    }
    ,
    o(c, a.BasePoint),
    f.prototype.pointFromJSON = function(e) {
        return c.fromJSON(this, e)
    }
    ,
    f.prototype.point = function(e, t, r, i) {
        return new c(this,e,t,r,i)
    }
    ,
    c.fromJSON = function(e, t) {
        return new c(e,t[0],t[1],t[2])
    }
    ,
    c.prototype.inspect = function() {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
    }
    ,
    c.prototype.isInfinity = function() {
        return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c))
    }
    ,
    c.prototype._extDbl = function() {
        var e = this.x.redSqr()
          , t = this.y.redSqr()
          , r = this.z.redSqr();
        r = r.redIAdd(r);
        var i = this.curve._mulA(e)
          , n = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t)
          , o = i.redAdd(t)
          , a = o.redSub(r)
          , s = i.redSub(t)
          , f = n.redMul(a)
          , c = o.redMul(s)
          , h = n.redMul(s)
          , d = a.redMul(o);
        return this.curve.point(f, c, d, h)
    }
    ,
    c.prototype._projDbl = function() {
        var e, t, r, i = this.x.redAdd(this.y).redSqr(), n = this.x.redSqr(), o = this.y.redSqr();
        if (this.curve.twisted) {
            var a = (c = this.curve._mulA(n)).redAdd(o);
            if (this.zOne)
                e = i.redSub(n).redSub(o).redMul(a.redSub(this.curve.two)),
                t = a.redMul(c.redSub(o)),
                r = a.redSqr().redSub(a).redSub(a);
            else {
                var s = this.z.redSqr()
                  , f = a.redSub(s).redISub(s);
                e = i.redSub(n).redISub(o).redMul(f),
                t = a.redMul(c.redSub(o)),
                r = a.redMul(f)
            }
        } else {
            var c = n.redAdd(o);
            s = this.curve._mulC(this.z).redSqr(),
            f = c.redSub(s).redSub(s);
            e = this.curve._mulC(i.redISub(c)).redMul(f),
            t = this.curve._mulC(c).redMul(n.redISub(o)),
            r = c.redMul(f)
        }
        return this.curve.point(e, t, r)
    }
    ,
    c.prototype.dbl = function() {
        return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl()
    }
    ,
    c.prototype._extAdd = function(e) {
        var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x))
          , r = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x))
          , i = this.t.redMul(this.curve.dd).redMul(e.t)
          , n = this.z.redMul(e.z.redAdd(e.z))
          , o = r.redSub(t)
          , a = n.redSub(i)
          , s = n.redAdd(i)
          , f = r.redAdd(t)
          , c = o.redMul(a)
          , h = s.redMul(f)
          , d = o.redMul(f)
          , u = a.redMul(s);
        return this.curve.point(c, h, u, d)
    }
    ,
    c.prototype._projAdd = function(e) {
        var t, r, i = this.z.redMul(e.z), n = i.redSqr(), o = this.x.redMul(e.x), a = this.y.redMul(e.y), s = this.curve.d.redMul(o).redMul(a), f = n.redSub(s), c = n.redAdd(s), h = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(o).redISub(a), d = i.redMul(f).redMul(h);
        return this.curve.twisted ? (t = i.redMul(c).redMul(a.redSub(this.curve._mulA(o))),
        r = f.redMul(c)) : (t = i.redMul(c).redMul(a.redSub(o)),
        r = this.curve._mulC(f).redMul(c)),
        this.curve.point(d, t, r)
    }
    ,
    c.prototype.add = function(e) {
        return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e)
    }
    ,
    c.prototype.mul = function(e) {
        return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e)
    }
    ,
    c.prototype.mulAdd = function(e, t, r) {
        return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !1)
    }
    ,
    c.prototype.jmulAdd = function(e, t, r) {
        return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !0)
    }
    ,
    c.prototype.normalize = function() {
        if (this.zOne)
            return this;
        var e = this.z.redInvm();
        return this.x = this.x.redMul(e),
        this.y = this.y.redMul(e),
        this.t && (this.t = this.t.redMul(e)),
        this.z = this.curve.one,
        this.zOne = !0,
        this
    }
    ,
    c.prototype.neg = function() {
        return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg())
    }
    ,
    c.prototype.getX = function() {
        return this.normalize(),
        this.x.fromRed()
    }
    ,
    c.prototype.getY = function() {
        return this.normalize(),
        this.y.fromRed()
    }
    ,
    c.prototype.eq = function(e) {
        return this === e || 0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY())
    }
    ,
    c.prototype.eqXToP = function(e) {
        var t = e.toRed(this.curve.red).redMul(this.z);
        if (0 === this.x.cmp(t))
            return !0;
        for (var r = e.clone(), i = this.curve.redN.redMul(this.z); ; ) {
            if (r.iadd(this.curve.n),
            r.cmp(this.curve.p) >= 0)
                return !1;
            if (t.redIAdd(i),
            0 === this.x.cmp(t))
                return !0
        }
    }
    ,
    c.prototype.toP = c.prototype.normalize,
    c.prototype.mixedAdd = c.prototype.add
}
, function(e, t, r) {
    "use strict";
    t.sha1 = r(269),
    t.sha224 = r(270),
    t.sha256 = r(150),
    t.sha384 = r(271),
    t.sha512 = r(151)
}
, function(e, t, r) {
    "use strict";
    var i = r(39)
      , n = r(62)
      , o = r(149)
      , a = i.rotl32
      , s = i.sum32
      , f = i.sum32_5
      , c = o.ft_1
      , h = n.BlockHash
      , d = [1518500249, 1859775393, 2400959708, 3395469782];
    function u() {
        if (!(this instanceof u))
            return new u;
        h.call(this),
        this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
        this.W = new Array(80)
    }
    i.inherits(u, h),
    e.exports = u,
    u.blockSize = 512,
    u.outSize = 160,
    u.hmacStrength = 80,
    u.padLength = 64,
    u.prototype._update = function(e, t) {
        for (var r = this.W, i = 0; i < 16; i++)
            r[i] = e[t + i];
        for (; i < r.length; i++)
            r[i] = a(r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16], 1);
        var n = this.h[0]
          , o = this.h[1]
          , h = this.h[2]
          , u = this.h[3]
          , l = this.h[4];
        for (i = 0; i < r.length; i++) {
            var p = ~~(i / 20)
              , b = f(a(n, 5), c(p, o, h, u), l, r[i], d[p]);
            l = u,
            u = h,
            h = a(o, 30),
            o = n,
            n = b
        }
        this.h[0] = s(this.h[0], n),
        this.h[1] = s(this.h[1], o),
        this.h[2] = s(this.h[2], h),
        this.h[3] = s(this.h[3], u),
        this.h[4] = s(this.h[4], l)
    }
    ,
    u.prototype._digest = function(e) {
        return "hex" === e ? i.toHex32(this.h, "big") : i.split32(this.h, "big")
    }
}
, function(e, t, r) {
    "use strict";
    var i = r(39)
      , n = r(150);
    function o() {
        if (!(this instanceof o))
            return new o;
        n.call(this),
        this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
    }
    i.inherits(o, n),
    e.exports = o,
    o.blockSize = 512,
    o.outSize = 224,
    o.hmacStrength = 192,
    o.padLength = 64,
    o.prototype._digest = function(e) {
        return "hex" === e ? i.toHex32(this.h.slice(0, 7), "big") : i.split32(this.h.slice(0, 7), "big")
    }
}
, function(e, t, r) {
    "use strict";
    var i = r(39)
      , n = r(151);
    function o() {
        if (!(this instanceof o))
            return new o;
        n.call(this),
        this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
    }
    i.inherits(o, n),
    e.exports = o,
    o.blockSize = 1024,
    o.outSize = 384,
    o.hmacStrength = 192,
    o.padLength = 128,
    o.prototype._digest = function(e) {
        return "hex" === e ? i.toHex32(this.h.slice(0, 12), "big") : i.split32(this.h.slice(0, 12), "big")
    }
}
, function(e, t, r) {
    "use strict";
    var i = r(39)
      , n = r(62)
      , o = i.rotl32
      , a = i.sum32
      , s = i.sum32_3
      , f = i.sum32_4
      , c = n.BlockHash;
    function h() {
        if (!(this instanceof h))
            return new h;
        c.call(this),
        this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
        this.endian = "little"
    }
    function d(e, t, r, i) {
        return e <= 15 ? t ^ r ^ i : e <= 31 ? t & r | ~t & i : e <= 47 ? (t | ~r) ^ i : e <= 63 ? t & i | r & ~i : t ^ (r | ~i)
    }
    function u(e) {
        return e <= 15 ? 0 : e <= 31 ? 1518500249 : e <= 47 ? 1859775393 : e <= 63 ? 2400959708 : 2840853838
    }
    function l(e) {
        return e <= 15 ? 1352829926 : e <= 31 ? 1548603684 : e <= 47 ? 1836072691 : e <= 63 ? 2053994217 : 0
    }
    i.inherits(h, c),
    t.ripemd160 = h,
    h.blockSize = 512,
    h.outSize = 160,
    h.hmacStrength = 192,
    h.padLength = 64,
    h.prototype._update = function(e, t) {
        for (var r = this.h[0], i = this.h[1], n = this.h[2], c = this.h[3], h = this.h[4], g = r, v = i, _ = n, w = c, S = h, M = 0; M < 80; M++) {
            var E = a(o(f(r, d(M, i, n, c), e[p[M] + t], u(M)), m[M]), h);
            r = h,
            h = c,
            c = o(n, 10),
            n = i,
            i = E,
            E = a(o(f(g, d(79 - M, v, _, w), e[b[M] + t], l(M)), y[M]), S),
            g = S,
            S = w,
            w = o(_, 10),
            _ = v,
            v = E
        }
        E = s(this.h[1], n, w),
        this.h[1] = s(this.h[2], c, S),
        this.h[2] = s(this.h[3], h, g),
        this.h[3] = s(this.h[4], r, v),
        this.h[4] = s(this.h[0], i, _),
        this.h[0] = E
    }
    ,
    h.prototype._digest = function(e) {
        return "hex" === e ? i.toHex32(this.h, "little") : i.split32(this.h, "little")
    }
    ;
    var p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]
      , b = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]
      , m = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]
      , y = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
}
, function(e, t, r) {
    "use strict";
    var i = r(39)
      , n = r(32);
    function o(e, t, r) {
        if (!(this instanceof o))
            return new o(e,t,r);
        this.Hash = e,
        this.blockSize = e.blockSize / 8,
        this.outSize = e.outSize / 8,
        this.inner = null,
        this.outer = null,
        this._init(i.toArray(t, r))
    }
    e.exports = o,
    o.prototype._init = function(e) {
        e.length > this.blockSize && (e = (new this.Hash).update(e).digest()),
        n(e.length <= this.blockSize);
        for (var t = e.length; t < this.blockSize; t++)
            e.push(0);
        for (t = 0; t < e.length; t++)
            e[t] ^= 54;
        for (this.inner = (new this.Hash).update(e),
        t = 0; t < e.length; t++)
            e[t] ^= 106;
        this.outer = (new this.Hash).update(e)
    }
    ,
    o.prototype.update = function(e, t) {
        return this.inner.update(e, t),
        this
    }
    ,
    o.prototype.digest = function(e) {
        return this.outer.update(this.inner.digest()),
        this.outer.digest(e)
    }
}
, function(e, t) {
    e.exports = {
        doubles: {
            step: 4,
            points: [["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"], ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"], ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"], ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"], ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"], ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"], ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"], ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"], ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"], ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"], ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"], ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"], ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"], ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"], ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"], ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"], ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"], ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"], ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"], ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"], ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"], ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"], ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"], ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"], ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"], ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"], ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"], ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"], ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"], ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"], ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"], ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"], ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"], ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"], ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"], ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"], ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"], ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"], ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"], ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"], ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"], ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"], ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"], ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"], ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"], ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"], ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"], ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"], ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"], ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"], ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"], ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"], ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"], ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"], ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"], ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"], ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"], ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"], ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"], ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"], ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"], ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"], ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"], ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"], ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]]
        },
        naf: {
            wnd: 7,
            points: [["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"], ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"], ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"], ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"], ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"], ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"], ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"], ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"], ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"], ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"], ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"], ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"], ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"], ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"], ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"], ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"], ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"], ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"], ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"], ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"], ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"], ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"], ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"], ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"], ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"], ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"], ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"], ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"], ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"], ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"], ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"], ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"], ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"], ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"], ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"], ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"], ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"], ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"], ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"], ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"], ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"], ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"], ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"], ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"], ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"], ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"], ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"], ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"], ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"], ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"], ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"], ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"], ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"], ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"], ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"], ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"], ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"], ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"], ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"], ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"], ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"], ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"], ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"], ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"], ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"], ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"], ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"], ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"], ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"], ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"], ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"], ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"], ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"], ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"], ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"], ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"], ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"], ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"], ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"], ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"], ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"], ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"], ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"], ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"], ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"], ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"], ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"], ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"], ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"], ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"], ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"], ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"], ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"], ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"], ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"], ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"], ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"], ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"], ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"], ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"], ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"], ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"], ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"], ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"], ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"], ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"], ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"], ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"], ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"], ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"], ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"], ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"], ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"], ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"], ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"], ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"], ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"], ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"], ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"], ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"], ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"], ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"], ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"], ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"], ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"], ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"], ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]]
        }
    }
}
, function(e, t, r) {
    "use strict";
    var i = r(15)
      , n = r(276)
      , o = r(33)
      , a = r(101)
      , s = r(98)
      , f = o.assert
      , c = r(277)
      , h = r(278);
    function d(e) {
        if (!(this instanceof d))
            return new d(e);
        "string" == typeof e && (f(a.hasOwnProperty(e), "Unknown curve " + e),
        e = a[e]),
        e instanceof a.PresetCurve && (e = {
            curve: e
        }),
        this.curve = e.curve.curve,
        this.n = this.curve.n,
        this.nh = this.n.ushrn(1),
        this.g = this.curve.g,
        this.g = e.curve.g,
        this.g.precompute(e.curve.n.bitLength() + 1),
        this.hash = e.hash || e.curve.hash
    }
    e.exports = d,
    d.prototype.keyPair = function(e) {
        return new c(this,e)
    }
    ,
    d.prototype.keyFromPrivate = function(e, t) {
        return c.fromPrivate(this, e, t)
    }
    ,
    d.prototype.keyFromPublic = function(e, t) {
        return c.fromPublic(this, e, t)
    }
    ,
    d.prototype.genKeyPair = function(e) {
        e || (e = {});
        for (var t = new n({
            hash: this.hash,
            pers: e.pers,
            persEnc: e.persEnc || "utf8",
            entropy: e.entropy || s(this.hash.hmacStrength),
            entropyEnc: e.entropy && e.entropyEnc || "utf8",
            nonce: this.n.toArray()
        }), r = this.n.byteLength(), o = this.n.sub(new i(2)); ; ) {
            var a = new i(t.generate(r));
            if (!(a.cmp(o) > 0))
                return a.iaddn(1),
                this.keyFromPrivate(a)
        }
    }
    ,
    d.prototype._truncateToN = function(e, t) {
        var r = 8 * e.byteLength() - this.n.bitLength();
        return r > 0 && (e = e.ushrn(r)),
        !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
    }
    ,
    d.prototype.sign = function(e, t, r, o) {
        "object" == typeof r && (o = r,
        r = null),
        o || (o = {}),
        t = this.keyFromPrivate(t, r),
        e = this._truncateToN(new i(e,16));
        for (var a = this.n.byteLength(), s = t.getPrivate().toArray("be", a), f = e.toArray("be", a), c = new n({
            hash: this.hash,
            entropy: s,
            nonce: f,
            pers: o.pers,
            persEnc: o.persEnc || "utf8"
        }), d = this.n.sub(new i(1)), u = 0; ; u++) {
            var l = o.k ? o.k(u) : new i(c.generate(this.n.byteLength()));
            if (!((l = this._truncateToN(l, !0)).cmpn(1) <= 0 || l.cmp(d) >= 0)) {
                var p = this.g.mul(l);
                if (!p.isInfinity()) {
                    var b = p.getX()
                      , m = b.umod(this.n);
                    if (0 !== m.cmpn(0)) {
                        var y = l.invm(this.n).mul(m.mul(t.getPrivate()).iadd(e));
                        if (0 !== (y = y.umod(this.n)).cmpn(0)) {
                            var g = (p.getY().isOdd() ? 1 : 0) | (0 !== b.cmp(m) ? 2 : 0);
                            return o.canonical && y.cmp(this.nh) > 0 && (y = this.n.sub(y),
                            g ^= 1),
                            new h({
                                r: m,
                                s: y,
                                recoveryParam: g
                            })
                        }
                    }
                }
            }
        }
    }
    ,
    d.prototype.verify = function(e, t, r, n) {
        e = this._truncateToN(new i(e,16)),
        r = this.keyFromPublic(r, n);
        var o = (t = new h(t,"hex")).r
          , a = t.s;
        if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0)
            return !1;
        if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0)
            return !1;
        var s, f = a.invm(this.n), c = f.mul(e).umod(this.n), d = f.mul(o).umod(this.n);
        return this.curve._maxwellTrick ? !(s = this.g.jmulAdd(c, r.getPublic(), d)).isInfinity() && s.eqXToP(o) : !(s = this.g.mulAdd(c, r.getPublic(), d)).isInfinity() && 0 === s.getX().umod(this.n).cmp(o)
    }
    ,
    d.prototype.recoverPubKey = function(e, t, r, n) {
        f((3 & r) === r, "The recovery param is more than two bits"),
        t = new h(t,n);
        var o = this.n
          , a = new i(e)
          , s = t.r
          , c = t.s
          , d = 1 & r
          , u = r >> 1;
        if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && u)
            throw new Error("Unable to find sencond key candinate");
        s = u ? this.curve.pointFromX(s.add(this.curve.n), d) : this.curve.pointFromX(s, d);
        var l = t.r.invm(o)
          , p = o.sub(a).mul(l).umod(o)
          , b = c.mul(l).umod(o);
        return this.g.mulAdd(p, s, b)
    }
    ,
    d.prototype.getKeyRecoveryParam = function(e, t, r, i) {
        if (null !== (t = new h(t,i)).recoveryParam)
            return t.recoveryParam;
        for (var n = 0; n < 4; n++) {
            var o;
            try {
                o = this.recoverPubKey(e, t, n)
            } catch (e) {
                continue
            }
            if (o.eq(r))
                return n
        }
        throw new Error("Unable to find valid recovery factor")
    }
}
, function(e, t, r) {
    "use strict";
    var i = r(102)
      , n = r(147)
      , o = r(32);
    function a(e) {
        if (!(this instanceof a))
            return new a(e);
        this.hash = e.hash,
        this.predResist = !!e.predResist,
        this.outLen = this.hash.outSize,
        this.minEntropy = e.minEntropy || this.hash.hmacStrength,
        this._reseed = null,
        this.reseedInterval = null,
        this.K = null,
        this.V = null;
        var t = n.toArray(e.entropy, e.entropyEnc || "hex")
          , r = n.toArray(e.nonce, e.nonceEnc || "hex")
          , i = n.toArray(e.pers, e.persEnc || "hex");
        o(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"),
        this._init(t, r, i)
    }
    e.exports = a,
    a.prototype._init = function(e, t, r) {
        var i = e.concat(t).concat(r);
        this.K = new Array(this.outLen / 8),
        this.V = new Array(this.outLen / 8);
        for (var n = 0; n < this.V.length; n++)
            this.K[n] = 0,
            this.V[n] = 1;
        this._update(i),
        this._reseed = 1,
        this.reseedInterval = 281474976710656
    }
    ,
    a.prototype._hmac = function() {
        return new i.hmac(this.hash,this.K)
    }
    ,
    a.prototype._update = function(e) {
        var t = this._hmac().update(this.V).update([0]);
        e && (t = t.update(e)),
        this.K = t.digest(),
        this.V = this._hmac().update(this.V).digest(),
        e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(),
        this.V = this._hmac().update(this.V).digest())
    }
    ,
    a.prototype.reseed = function(e, t, r, i) {
        "string" != typeof t && (i = r,
        r = t,
        t = null),
        e = n.toArray(e, t),
        r = n.toArray(r, i),
        o(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"),
        this._update(e.concat(r || [])),
        this._reseed = 1
    }
    ,
    a.prototype.generate = function(e, t, r, i) {
        if (this._reseed > this.reseedInterval)
            throw new Error("Reseed is required");
        "string" != typeof t && (i = r,
        r = t,
        t = null),
        r && (r = n.toArray(r, i || "hex"),
        this._update(r));
        for (var o = []; o.length < e; )
            this.V = this._hmac().update(this.V).digest(),
            o = o.concat(this.V);
        var a = o.slice(0, e);
        return this._update(r),
        this._reseed++,
        n.encode(a, t)
    }
}
, function(e, t, r) {
    "use strict";
    var i = r(15)
      , n = r(33).assert;
    function o(e, t) {
        this.ec = e,
        this.priv = null,
        this.pub = null,
        t.priv && this._importPrivate(t.priv, t.privEnc),
        t.pub && this._importPublic(t.pub, t.pubEnc)
    }
    e.exports = o,
    o.fromPublic = function(e, t, r) {
        return t instanceof o ? t : new o(e,{
            pub: t,
            pubEnc: r
        })
    }
    ,
    o.fromPrivate = function(e, t, r) {
        return t instanceof o ? t : new o(e,{
            priv: t,
            privEnc: r
        })
    }
    ,
    o.prototype.validate = function() {
        var e = this.getPublic();
        return e.isInfinity() ? {
            result: !1,
            reason: "Invalid public key"
        } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? {
            result: !0,
            reason: null
        } : {
            result: !1,
            reason: "Public key * N != O"
        } : {
            result: !1,
            reason: "Public key is not a point"
        }
    }
    ,
    o.prototype.getPublic = function(e, t) {
        return "string" == typeof e && (t = e,
        e = null),
        this.pub || (this.pub = this.ec.g.mul(this.priv)),
        t ? this.pub.encode(t, e) : this.pub
    }
    ,
    o.prototype.getPrivate = function(e) {
        return "hex" === e ? this.priv.toString(16, 2) : this.priv
    }
    ,
    o.prototype._importPrivate = function(e, t) {
        this.priv = new i(e,t || 16),
        this.priv = this.priv.umod(this.ec.curve.n)
    }
    ,
    o.prototype._importPublic = function(e, t) {
        if (e.x || e.y)
            return "mont" === this.ec.curve.type ? n(e.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || n(e.x && e.y, "Need both x and y coordinate"),
            void (this.pub = this.ec.curve.point(e.x, e.y));
        this.pub = this.ec.curve.decodePoint(e, t)
    }
    ,
    o.prototype.derive = function(e) {
        return e.mul(this.priv).getX()
    }
    ,
    o.prototype.sign = function(e, t, r) {
        return this.ec.sign(e, this, t, r)
    }
    ,
    o.prototype.verify = function(e, t) {
        return this.ec.verify(e, t, this)
    }
    ,
    o.prototype.inspect = function() {
        return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
    }
}
, function(e, t, r) {
    "use strict";
    var i = r(15)
      , n = r(33)
      , o = n.assert;
    function a(e, t) {
        if (e instanceof a)
            return e;
        this._importDER(e, t) || (o(e.r && e.s, "Signature without r or s"),
        this.r = new i(e.r,16),
        this.s = new i(e.s,16),
        void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam)
    }
    function s() {
        this.place = 0
    }
    function f(e, t) {
        var r = e[t.place++];
        if (!(128 & r))
            return r;
        for (var i = 15 & r, n = 0, o = 0, a = t.place; o < i; o++,
        a++)
            n <<= 8,
            n |= e[a];
        return t.place = a,
        n
    }
    function c(e) {
        for (var t = 0, r = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < r; )
            t++;
        return 0 === t ? e : e.slice(t)
    }
    function h(e, t) {
        if (t < 128)
            e.push(t);
        else {
            var r = 1 + (Math.log(t) / Math.LN2 >>> 3);
            for (e.push(128 | r); --r; )
                e.push(t >>> (r << 3) & 255);
            e.push(t)
        }
    }
    e.exports = a,
    a.prototype._importDER = function(e, t) {
        e = n.toArray(e, t);
        var r = new s;
        if (48 !== e[r.place++])
            return !1;
        if (f(e, r) + r.place !== e.length)
            return !1;
        if (2 !== e[r.place++])
            return !1;
        var o = f(e, r)
          , a = e.slice(r.place, o + r.place);
        if (r.place += o,
        2 !== e[r.place++])
            return !1;
        var c = f(e, r);
        if (e.length !== c + r.place)
            return !1;
        var h = e.slice(r.place, c + r.place);
        return 0 === a[0] && 128 & a[1] && (a = a.slice(1)),
        0 === h[0] && 128 & h[1] && (h = h.slice(1)),
        this.r = new i(a),
        this.s = new i(h),
        this.recoveryParam = null,
        !0
    }
    ,
    a.prototype.toDER = function(e) {
        var t = this.r.toArray()
          , r = this.s.toArray();
        for (128 & t[0] && (t = [0].concat(t)),
        128 & r[0] && (r = [0].concat(r)),
        t = c(t),
        r = c(r); !(r[0] || 128 & r[1]); )
            r = r.slice(1);
        var i = [2];
        h(i, t.length),
        (i = i.concat(t)).push(2),
        h(i, r.length);
        var o = i.concat(r)
          , a = [48];
        return h(a, o.length),
        a = a.concat(o),
        n.encode(a, e)
    }
}
, function(e, t, r) {
    "use strict";
    var i = r(102)
      , n = r(101)
      , o = r(33)
      , a = o.assert
      , s = o.parseBytes
      , f = r(280)
      , c = r(281);
    function h(e) {
        if (a("ed25519" === e, "only tested with ed25519 so far"),
        !(this instanceof h))
            return new h(e);
        e = n[e].curve;
        this.curve = e,
        this.g = e.g,
        this.g.precompute(e.n.bitLength() + 1),
        this.pointClass = e.point().constructor,
        this.encodingLength = Math.ceil(e.n.bitLength() / 8),
        this.hash = i.sha512
    }
    e.exports = h,
    h.prototype.sign = function(e, t) {
        e = s(e);
        var r = this.keyFromSecret(t)
          , i = this.hashInt(r.messagePrefix(), e)
          , n = this.g.mul(i)
          , o = this.encodePoint(n)
          , a = this.hashInt(o, r.pubBytes(), e).mul(r.priv())
          , f = i.add(a).umod(this.curve.n);
        return this.makeSignature({
            R: n,
            S: f,
            Rencoded: o
        })
    }
    ,
    h.prototype.verify = function(e, t, r) {
        e = s(e),
        t = this.makeSignature(t);
        var i = this.keyFromPublic(r)
          , n = this.hashInt(t.Rencoded(), i.pubBytes(), e)
          , o = this.g.mul(t.S());
        return t.R().add(i.pub().mul(n)).eq(o)
    }
    ,
    h.prototype.hashInt = function() {
        for (var e = this.hash(), t = 0; t < arguments.length; t++)
            e.update(arguments[t]);
        return o.intFromLE(e.digest()).umod(this.curve.n)
    }
    ,
    h.prototype.keyFromPublic = function(e) {
        return f.fromPublic(this, e)
    }
    ,
    h.prototype.keyFromSecret = function(e) {
        return f.fromSecret(this, e)
    }
    ,
    h.prototype.makeSignature = function(e) {
        return e instanceof c ? e : new c(this,e)
    }
    ,
    h.prototype.encodePoint = function(e) {
        var t = e.getY().toArray("le", this.encodingLength);
        return t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0,
        t
    }
    ,
    h.prototype.decodePoint = function(e) {
        var t = (e = o.parseBytes(e)).length - 1
          , r = e.slice(0, t).concat(-129 & e[t])
          , i = 0 != (128 & e[t])
          , n = o.intFromLE(r);
        return this.curve.pointFromY(n, i)
    }
    ,
    h.prototype.encodeInt = function(e) {
        return e.toArray("le", this.encodingLength)
    }
    ,
    h.prototype.decodeInt = function(e) {
        return o.intFromLE(e)
    }
    ,
    h.prototype.isPoint = function(e) {
        return e instanceof this.pointClass
    }
}
, function(e, t, r) {
    "use strict";
    var i = r(33)
      , n = i.assert
      , o = i.parseBytes
      , a = i.cachedProperty;
    function s(e, t) {
        this.eddsa = e,
        this._secret = o(t.secret),
        e.isPoint(t.pub) ? this._pub = t.pub : this._pubBytes = o(t.pub)
    }
    s.fromPublic = function(e, t) {
        return t instanceof s ? t : new s(e,{
            pub: t
        })
    }
    ,
    s.fromSecret = function(e, t) {
        return t instanceof s ? t : new s(e,{
            secret: t
        })
    }
    ,
    s.prototype.secret = function() {
        return this._secret
    }
    ,
    a(s, "pubBytes", (function() {
        return this.eddsa.encodePoint(this.pub())
    }
    )),
    a(s, "pub", (function() {
        return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv())
    }
    )),
    a(s, "privBytes", (function() {
        var e = this.eddsa
          , t = this.hash()
          , r = e.encodingLength - 1
          , i = t.slice(0, e.encodingLength);
        return i[0] &= 248,
        i[r] &= 127,
        i[r] |= 64,
        i
    }
    )),
    a(s, "priv", (function() {
        return this.eddsa.decodeInt(this.privBytes())
    }
    )),
    a(s, "hash", (function() {
        return this.eddsa.hash().update(this.secret()).digest()
    }
    )),
    a(s, "messagePrefix", (function() {
        return this.hash().slice(this.eddsa.encodingLength)
    }
    )),
    s.prototype.sign = function(e) {
        return n(this._secret, "KeyPair can only verify"),
        this.eddsa.sign(e, this)
    }
    ,
    s.prototype.verify = function(e, t) {
        return this.eddsa.verify(e, t, this)
    }
    ,
    s.prototype.getSecret = function(e) {
        return n(this._secret, "KeyPair is public only"),
        i.encode(this.secret(), e)
    }
    ,
    s.prototype.getPublic = function(e) {
        return i.encode(this.pubBytes(), e)
    }
    ,
    e.exports = s
}
, function(e, t, r) {
    "use strict";
    var i = r(15)
      , n = r(33)
      , o = n.assert
      , a = n.cachedProperty
      , s = n.parseBytes;
    function f(e, t) {
        this.eddsa = e,
        "object" != typeof t && (t = s(t)),
        Array.isArray(t) && (t = {
            R: t.slice(0, e.encodingLength),
            S: t.slice(e.encodingLength)
        }),
        o(t.R && t.S, "Signature without R or S"),
        e.isPoint(t.R) && (this._R = t.R),
        t.S instanceof i && (this._S = t.S),
        this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded,
        this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded
    }
    a(f, "S", (function() {
        return this.eddsa.decodeInt(this.Sencoded())
    }
    )),
    a(f, "R", (function() {
        return this.eddsa.decodePoint(this.Rencoded())
    }
    )),
    a(f, "Rencoded", (function() {
        return this.eddsa.encodePoint(this.R())
    }
    )),
    a(f, "Sencoded", (function() {
        return this.eddsa.encodeInt(this.S())
    }
    )),
    f.prototype.toBytes = function() {
        return this.Rencoded().concat(this.Sencoded())
    }
    ,
    f.prototype.toHex = function() {
        return n.encode(this.toBytes(), "hex").toUpperCase()
    }
    ,
    e.exports = f
}
, function(e, t, r) {
    "use strict";
    var i = r(63);
    t.certificate = r(292);
    var n = i.define("RSAPrivateKey", (function() {
        this.seq().obj(this.key("version").int(), this.key("modulus").int(), this.key("publicExponent").int(), this.key("privateExponent").int(), this.key("prime1").int(), this.key("prime2").int(), this.key("exponent1").int(), this.key("exponent2").int(), this.key("coefficient").int())
    }
    ));
    t.RSAPrivateKey = n;
    var o = i.define("RSAPublicKey", (function() {
        this.seq().obj(this.key("modulus").int(), this.key("publicExponent").int())
    }
    ));
    t.RSAPublicKey = o;
    var a = i.define("SubjectPublicKeyInfo", (function() {
        this.seq().obj(this.key("algorithm").use(s), this.key("subjectPublicKey").bitstr())
    }
    ));
    t.PublicKey = a;
    var s = i.define("AlgorithmIdentifier", (function() {
        this.seq().obj(this.key("algorithm").objid(), this.key("none").null_().optional(), this.key("curve").objid().optional(), this.key("params").seq().obj(this.key("p").int(), this.key("q").int(), this.key("g").int()).optional())
    }
    ))
      , f = i.define("PrivateKeyInfo", (function() {
        this.seq().obj(this.key("version").int(), this.key("algorithm").use(s), this.key("subjectPrivateKey").octstr())
    }
    ));
    t.PrivateKey = f;
    var c = i.define("EncryptedPrivateKeyInfo", (function() {
        this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(), this.key("decrypt").seq().obj(this.key("kde").seq().obj(this.key("id").objid(), this.key("kdeparams").seq().obj(this.key("salt").octstr(), this.key("iters").int())), this.key("cipher").seq().obj(this.key("algo").objid(), this.key("iv").octstr()))), this.key("subjectPrivateKey").octstr())
    }
    ));
    t.EncryptedPrivateKey = c;
    var h = i.define("DSAPrivateKey", (function() {
        this.seq().obj(this.key("version").int(), this.key("p").int(), this.key("q").int(), this.key("g").int(), this.key("pub_key").int(), this.key("priv_key").int())
    }
    ));
    t.DSAPrivateKey = h,
    t.DSAparam = i.define("DSAparam", (function() {
        this.int()
    }
    ));
    var d = i.define("ECPrivateKey", (function() {
        this.seq().obj(this.key("version").int(), this.key("privateKey").octstr(), this.key("parameters").optional().explicit(0).use(u), this.key("publicKey").optional().explicit(1).bitstr())
    }
    ));
    t.ECPrivateKey = d;
    var u = i.define("ECParameters", (function() {
        this.choice({
            namedCurve: this.objid()
        })
    }
    ));
    t.signature = i.define("signature", (function() {
        this.seq().obj(this.key("r").int(), this.key("s").int())
    }
    ))
}
, function(e, t, r) {
    var i = r(63)
      , n = r(2);
    function o(e, t) {
        this.name = e,
        this.body = t,
        this.decoders = {},
        this.encoders = {}
    }
    t.define = function(e, t) {
        return new o(e,t)
    }
    ,
    o.prototype._createNamed = function(e) {
        var t;
        try {
            t = r(284).runInThisContext("(function " + this.name + "(entity) {\n  this._initNamed(entity);\n})")
        } catch (e) {
            t = function(e) {
                this._initNamed(e)
            }
        }
        return n(t, e),
        t.prototype._initNamed = function(t) {
            e.call(this, t)
        }
        ,
        new t(this)
    }
    ,
    o.prototype._getDecoder = function(e) {
        return e = e || "der",
        this.decoders.hasOwnProperty(e) || (this.decoders[e] = this._createNamed(i.decoders[e])),
        this.decoders[e]
    }
    ,
    o.prototype.decode = function(e, t, r) {
        return this._getDecoder(t).decode(e, r)
    }
    ,
    o.prototype._getEncoder = function(e) {
        return e = e || "der",
        this.encoders.hasOwnProperty(e) || (this.encoders[e] = this._createNamed(i.encoders[e])),
        this.encoders[e]
    }
    ,
    o.prototype.encode = function(e, t, r) {
        return this._getEncoder(t).encode(e, r)
    }
}
, function(module, exports) {
    var indexOf = function(e, t) {
        if (e.indexOf)
            return e.indexOf(t);
        for (var r = 0; r < e.length; r++)
            if (e[r] === t)
                return r;
        return -1
    }
      , Object_keys = function(e) {
        if (Object.keys)
            return Object.keys(e);
        var t = [];
        for (var r in e)
            t.push(r);
        return t
    }
      , forEach = function(e, t) {
        if (e.forEach)
            return e.forEach(t);
        for (var r = 0; r < e.length; r++)
            t(e[r], r, e)
    }
      , defineProp = function() {
        try {
            return Object.defineProperty({}, "_", {}),
            function(e, t, r) {
                Object.defineProperty(e, t, {
                    writable: !0,
                    enumerable: !1,
                    configurable: !0,
                    value: r
                })
            }
        } catch (e) {
            return function(e, t, r) {
                e[t] = r
            }
        }
    }()
      , globals = ["Array", "Boolean", "Date", "Error", "EvalError", "Function", "Infinity", "JSON", "Math", "NaN", "Number", "Object", "RangeError", "ReferenceError", "RegExp", "String", "SyntaxError", "TypeError", "URIError", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "undefined", "unescape"];
    function Context() {}
    Context.prototype = {};
    var Script = exports.Script = function(e) {
        if (!(this instanceof Script))
            return new Script(e);
        this.code = e
    }
    ;
    Script.prototype.runInContext = function(e) {
        if (!(e instanceof Context))
            throw new TypeError("needs a 'context' argument.");
        var t = document.createElement("iframe");
        t.style || (t.style = {}),
        t.style.display = "none",
        document.body.appendChild(t);
        var r = t.contentWindow
          , i = r.eval
          , n = r.execScript;
        !i && n && (n.call(r, "null"),
        i = r.eval),
        forEach(Object_keys(e), (function(t) {
            r[t] = e[t]
        }
        )),
        forEach(globals, (function(t) {
            e[t] && (r[t] = e[t])
        }
        ));
        var o = Object_keys(r)
          , a = i.call(r, this.code);
        return forEach(Object_keys(r), (function(t) {
            (t in e || -1 === indexOf(o, t)) && (e[t] = r[t])
        }
        )),
        forEach(globals, (function(t) {
            t in e || defineProp(e, t, r[t])
        }
        )),
        document.body.removeChild(t),
        a
    }
    ,
    Script.prototype.runInThisContext = function() {
        return eval(this.code)
    }
    ,
    Script.prototype.runInNewContext = function(e) {
        var t = Script.createContext(e)
          , r = this.runInContext(t);
        return e && forEach(Object_keys(t), (function(r) {
            e[r] = t[r]
        }
        )),
        r
    }
    ,
    forEach(Object_keys(Script.prototype), (function(e) {
        exports[e] = Script[e] = function(t) {
            var r = Script(t);
            return r[e].apply(r, [].slice.call(arguments, 1))
        }
    }
    )),
    exports.isContext = function(e) {
        return e instanceof Context
    }
    ,
    exports.createScript = function(e) {
        return exports.Script(e)
    }
    ,
    exports.createContext = Script.createContext = function(e) {
        var t = new Context;
        return "object" == typeof e && forEach(Object_keys(e), (function(r) {
            t[r] = e[r]
        }
        )),
        t
    }
}
, function(e, t, r) {
    var i = r(2);
    function n(e) {
        this._reporterState = {
            obj: null,
            path: [],
            options: e || {},
            errors: []
        }
    }
    function o(e, t) {
        this.path = e,
        this.rethrow(t)
    }
    t.Reporter = n,
    n.prototype.isError = function(e) {
        return e instanceof o
    }
    ,
    n.prototype.save = function() {
        var e = this._reporterState;
        return {
            obj: e.obj,
            pathLen: e.path.length
        }
    }
    ,
    n.prototype.restore = function(e) {
        var t = this._reporterState;
        t.obj = e.obj,
        t.path = t.path.slice(0, e.pathLen)
    }
    ,
    n.prototype.enterKey = function(e) {
        return this._reporterState.path.push(e)
    }
    ,
    n.prototype.exitKey = function(e) {
        var t = this._reporterState;
        t.path = t.path.slice(0, e - 1)
    }
    ,
    n.prototype.leaveKey = function(e, t, r) {
        var i = this._reporterState;
        this.exitKey(e),
        null !== i.obj && (i.obj[t] = r)
    }
    ,
    n.prototype.path = function() {
        return this._reporterState.path.join("/")
    }
    ,
    n.prototype.enterObject = function() {
        var e = this._reporterState
          , t = e.obj;
        return e.obj = {},
        t
    }
    ,
    n.prototype.leaveObject = function(e) {
        var t = this._reporterState
          , r = t.obj;
        return t.obj = e,
        r
    }
    ,
    n.prototype.error = function(e) {
        var t, r = this._reporterState, i = e instanceof o;
        if (t = i ? e : new o(r.path.map((function(e) {
            return "[" + JSON.stringify(e) + "]"
        }
        )).join(""),e.message || e,e.stack),
        !r.options.partial)
            throw t;
        return i || r.errors.push(t),
        t
    }
    ,
    n.prototype.wrapResult = function(e) {
        var t = this._reporterState;
        return t.options.partial ? {
            result: this.isError(e) ? null : e,
            errors: t.errors
        } : e
    }
    ,
    i(o, Error),
    o.prototype.rethrow = function(e) {
        if (this.message = e + " at: " + (this.path || "(shallow)"),
        Error.captureStackTrace && Error.captureStackTrace(this, o),
        !this.stack)
            try {
                throw new Error(this.message)
            } catch (e) {
                this.stack = e.stack
            }
        return this
    }
}
, function(e, t, r) {
    var i = r(64).Reporter
      , n = r(64).EncoderBuffer
      , o = r(64).DecoderBuffer
      , a = r(32)
      , s = ["seq", "seqof", "set", "setof", "objid", "bool", "gentime", "utctime", "null_", "enum", "int", "objDesc", "bitstr", "bmpstr", "charstr", "genstr", "graphstr", "ia5str", "iso646str", "numstr", "octstr", "printstr", "t61str", "unistr", "utf8str", "videostr"]
      , f = ["key", "obj", "use", "optional", "explicit", "implicit", "def", "choice", "any", "contains"].concat(s);
    function c(e, t) {
        var r = {};
        this._baseState = r,
        r.enc = e,
        r.parent = t || null,
        r.children = null,
        r.tag = null,
        r.args = null,
        r.reverseArgs = null,
        r.choice = null,
        r.optional = !1,
        r.any = !1,
        r.obj = !1,
        r.use = null,
        r.useDecoder = null,
        r.key = null,
        r.default = null,
        r.explicit = null,
        r.implicit = null,
        r.contains = null,
        r.parent || (r.children = [],
        this._wrap())
    }
    e.exports = c;
    var h = ["enc", "parent", "children", "tag", "args", "reverseArgs", "choice", "optional", "any", "obj", "use", "alteredUse", "key", "default", "explicit", "implicit", "contains"];
    c.prototype.clone = function() {
        var e = this._baseState
          , t = {};
        h.forEach((function(r) {
            t[r] = e[r]
        }
        ));
        var r = new this.constructor(t.parent);
        return r._baseState = t,
        r
    }
    ,
    c.prototype._wrap = function() {
        var e = this._baseState;
        f.forEach((function(t) {
            this[t] = function() {
                var r = new this.constructor(this);
                return e.children.push(r),
                r[t].apply(r, arguments)
            }
        }
        ), this)
    }
    ,
    c.prototype._init = function(e) {
        var t = this._baseState;
        a(null === t.parent),
        e.call(this),
        t.children = t.children.filter((function(e) {
            return e._baseState.parent === this
        }
        ), this),
        a.equal(t.children.length, 1, "Root node can have only one child")
    }
    ,
    c.prototype._useArgs = function(e) {
        var t = this._baseState
          , r = e.filter((function(e) {
            return e instanceof this.constructor
        }
        ), this);
        e = e.filter((function(e) {
            return !(e instanceof this.constructor)
        }
        ), this),
        0 !== r.length && (a(null === t.children),
        t.children = r,
        r.forEach((function(e) {
            e._baseState.parent = this
        }
        ), this)),
        0 !== e.length && (a(null === t.args),
        t.args = e,
        t.reverseArgs = e.map((function(e) {
            if ("object" != typeof e || e.constructor !== Object)
                return e;
            var t = {};
            return Object.keys(e).forEach((function(r) {
                r == (0 | r) && (r |= 0);
                var i = e[r];
                t[i] = r
            }
            )),
            t
        }
        )))
    }
    ,
    ["_peekTag", "_decodeTag", "_use", "_decodeStr", "_decodeObjid", "_decodeTime", "_decodeNull", "_decodeInt", "_decodeBool", "_decodeList", "_encodeComposite", "_encodeStr", "_encodeObjid", "_encodeTime", "_encodeNull", "_encodeInt", "_encodeBool"].forEach((function(e) {
        c.prototype[e] = function() {
            var t = this._baseState;
            throw new Error(e + " not implemented for encoding: " + t.enc)
        }
    }
    )),
    s.forEach((function(e) {
        c.prototype[e] = function() {
            var t = this._baseState
              , r = Array.prototype.slice.call(arguments);
            return a(null === t.tag),
            t.tag = e,
            this._useArgs(r),
            this
        }
    }
    )),
    c.prototype.use = function(e) {
        a(e);
        var t = this._baseState;
        return a(null === t.use),
        t.use = e,
        this
    }
    ,
    c.prototype.optional = function() {
        return this._baseState.optional = !0,
        this
    }
    ,
    c.prototype.def = function(e) {
        var t = this._baseState;
        return a(null === t.default),
        t.default = e,
        t.optional = !0,
        this
    }
    ,
    c.prototype.explicit = function(e) {
        var t = this._baseState;
        return a(null === t.explicit && null === t.implicit),
        t.explicit = e,
        this
    }
    ,
    c.prototype.implicit = function(e) {
        var t = this._baseState;
        return a(null === t.explicit && null === t.implicit),
        t.implicit = e,
        this
    }
    ,
    c.prototype.obj = function() {
        var e = this._baseState
          , t = Array.prototype.slice.call(arguments);
        return e.obj = !0,
        0 !== t.length && this._useArgs(t),
        this
    }
    ,
    c.prototype.key = function(e) {
        var t = this._baseState;
        return a(null === t.key),
        t.key = e,
        this
    }
    ,
    c.prototype.any = function() {
        return this._baseState.any = !0,
        this
    }
    ,
    c.prototype.choice = function(e) {
        var t = this._baseState;
        return a(null === t.choice),
        t.choice = e,
        this._useArgs(Object.keys(e).map((function(t) {
            return e[t]
        }
        ))),
        this
    }
    ,
    c.prototype.contains = function(e) {
        var t = this._baseState;
        return a(null === t.use),
        t.contains = e,
        this
    }
    ,
    c.prototype._decode = function(e, t) {
        var r = this._baseState;
        if (null === r.parent)
            return e.wrapResult(r.children[0]._decode(e, t));
        var i, n = r.default, a = !0, s = null;
        if (null !== r.key && (s = e.enterKey(r.key)),
        r.optional) {
            var f = null;
            if (null !== r.explicit ? f = r.explicit : null !== r.implicit ? f = r.implicit : null !== r.tag && (f = r.tag),
            null !== f || r.any) {
                if (a = this._peekTag(e, f, r.any),
                e.isError(a))
                    return a
            } else {
                var c = e.save();
                try {
                    null === r.choice ? this._decodeGeneric(r.tag, e, t) : this._decodeChoice(e, t),
                    a = !0
                } catch (e) {
                    a = !1
                }
                e.restore(c)
            }
        }
        if (r.obj && a && (i = e.enterObject()),
        a) {
            if (null !== r.explicit) {
                var h = this._decodeTag(e, r.explicit);
                if (e.isError(h))
                    return h;
                e = h
            }
            var d = e.offset;
            if (null === r.use && null === r.choice) {
                if (r.any)
                    c = e.save();
                var u = this._decodeTag(e, null !== r.implicit ? r.implicit : r.tag, r.any);
                if (e.isError(u))
                    return u;
                r.any ? n = e.raw(c) : e = u
            }
            if (t && t.track && null !== r.tag && t.track(e.path(), d, e.length, "tagged"),
            t && t.track && null !== r.tag && t.track(e.path(), e.offset, e.length, "content"),
            n = r.any ? n : null === r.choice ? this._decodeGeneric(r.tag, e, t) : this._decodeChoice(e, t),
            e.isError(n))
                return n;
            if (r.any || null !== r.choice || null === r.children || r.children.forEach((function(r) {
                r._decode(e, t)
            }
            )),
            r.contains && ("octstr" === r.tag || "bitstr" === r.tag)) {
                var l = new o(n);
                n = this._getUse(r.contains, e._reporterState.obj)._decode(l, t)
            }
        }
        return r.obj && a && (n = e.leaveObject(i)),
        null === r.key || null === n && !0 !== a ? null !== s && e.exitKey(s) : e.leaveKey(s, r.key, n),
        n
    }
    ,
    c.prototype._decodeGeneric = function(e, t, r) {
        var i = this._baseState;
        return "seq" === e || "set" === e ? null : "seqof" === e || "setof" === e ? this._decodeList(t, e, i.args[0], r) : /str$/.test(e) ? this._decodeStr(t, e, r) : "objid" === e && i.args ? this._decodeObjid(t, i.args[0], i.args[1], r) : "objid" === e ? this._decodeObjid(t, null, null, r) : "gentime" === e || "utctime" === e ? this._decodeTime(t, e, r) : "null_" === e ? this._decodeNull(t, r) : "bool" === e ? this._decodeBool(t, r) : "objDesc" === e ? this._decodeStr(t, e, r) : "int" === e || "enum" === e ? this._decodeInt(t, i.args && i.args[0], r) : null !== i.use ? this._getUse(i.use, t._reporterState.obj)._decode(t, r) : t.error("unknown tag: " + e)
    }
    ,
    c.prototype._getUse = function(e, t) {
        var r = this._baseState;
        return r.useDecoder = this._use(e, t),
        a(null === r.useDecoder._baseState.parent),
        r.useDecoder = r.useDecoder._baseState.children[0],
        r.implicit !== r.useDecoder._baseState.implicit && (r.useDecoder = r.useDecoder.clone(),
        r.useDecoder._baseState.implicit = r.implicit),
        r.useDecoder
    }
    ,
    c.prototype._decodeChoice = function(e, t) {
        var r = this._baseState
          , i = null
          , n = !1;
        return Object.keys(r.choice).some((function(o) {
            var a = e.save()
              , s = r.choice[o];
            try {
                var f = s._decode(e, t);
                if (e.isError(f))
                    return !1;
                i = {
                    type: o,
                    value: f
                },
                n = !0
            } catch (t) {
                return e.restore(a),
                !1
            }
            return !0
        }
        ), this),
        n ? i : e.error("Choice not matched")
    }
    ,
    c.prototype._createEncoderBuffer = function(e) {
        return new n(e,this.reporter)
    }
    ,
    c.prototype._encode = function(e, t, r) {
        var i = this._baseState;
        if (null === i.default || i.default !== e) {
            var n = this._encodeValue(e, t, r);
            if (void 0 !== n && !this._skipDefault(n, t, r))
                return n
        }
    }
    ,
    c.prototype._encodeValue = function(e, t, r) {
        var n = this._baseState;
        if (null === n.parent)
            return n.children[0]._encode(e, t || new i);
        var o = null;
        if (this.reporter = t,
        n.optional && void 0 === e) {
            if (null === n.default)
                return;
            e = n.default
        }
        var a = null
          , s = !1;
        if (n.any)
            o = this._createEncoderBuffer(e);
        else if (n.choice)
            o = this._encodeChoice(e, t);
        else if (n.contains)
            a = this._getUse(n.contains, r)._encode(e, t),
            s = !0;
        else if (n.children)
            a = n.children.map((function(r) {
                if ("null_" === r._baseState.tag)
                    return r._encode(null, t, e);
                if (null === r._baseState.key)
                    return t.error("Child should have a key");
                var i = t.enterKey(r._baseState.key);
                if ("object" != typeof e)
                    return t.error("Child expected, but input is not object");
                var n = r._encode(e[r._baseState.key], t, e);
                return t.leaveKey(i),
                n
            }
            ), this).filter((function(e) {
                return e
            }
            )),
            a = this._createEncoderBuffer(a);
        else if ("seqof" === n.tag || "setof" === n.tag) {
            if (!n.args || 1 !== n.args.length)
                return t.error("Too many args for : " + n.tag);
            if (!Array.isArray(e))
                return t.error("seqof/setof, but data is not Array");
            var f = this.clone();
            f._baseState.implicit = null,
            a = this._createEncoderBuffer(e.map((function(r) {
                var i = this._baseState;
                return this._getUse(i.args[0], e)._encode(r, t)
            }
            ), f))
        } else
            null !== n.use ? o = this._getUse(n.use, r)._encode(e, t) : (a = this._encodePrimitive(n.tag, e),
            s = !0);
        if (!n.any && null === n.choice) {
            var c = null !== n.implicit ? n.implicit : n.tag
              , h = null === n.implicit ? "universal" : "context";
            null === c ? null === n.use && t.error("Tag could be omitted only for .use()") : null === n.use && (o = this._encodeComposite(c, s, h, a))
        }
        return null !== n.explicit && (o = this._encodeComposite(n.explicit, !1, "context", o)),
        o
    }
    ,
    c.prototype._encodeChoice = function(e, t) {
        var r = this._baseState
          , i = r.choice[e.type];
        return i || a(!1, e.type + " not found in " + JSON.stringify(Object.keys(r.choice))),
        i._encode(e.value, t)
    }
    ,
    c.prototype._encodePrimitive = function(e, t) {
        var r = this._baseState;
        if (/str$/.test(e))
            return this._encodeStr(t, e);
        if ("objid" === e && r.args)
            return this._encodeObjid(t, r.reverseArgs[0], r.args[1]);
        if ("objid" === e)
            return this._encodeObjid(t, null, null);
        if ("gentime" === e || "utctime" === e)
            return this._encodeTime(t, e);
        if ("null_" === e)
            return this._encodeNull();
        if ("int" === e || "enum" === e)
            return this._encodeInt(t, r.args && r.reverseArgs[0]);
        if ("bool" === e)
            return this._encodeBool(t);
        if ("objDesc" === e)
            return this._encodeStr(t, e);
        throw new Error("Unsupported tag: " + e)
    }
    ,
    c.prototype._isNumstr = function(e) {
        return /^[0-9 ]*$/.test(e)
    }
    ,
    c.prototype._isPrintstr = function(e) {
        return /^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(e)
    }
}
, function(e, t, r) {
    var i = r(153);
    t.tagClass = {
        0: "universal",
        1: "application",
        2: "context",
        3: "private"
    },
    t.tagClassByName = i._reverse(t.tagClass),
    t.tag = {
        0: "end",
        1: "bool",
        2: "int",
        3: "bitstr",
        4: "octstr",
        5: "null_",
        6: "objid",
        7: "objDesc",
        8: "external",
        9: "real",
        10: "enum",
        11: "embed",
        12: "utf8str",
        13: "relativeOid",
        16: "seq",
        17: "set",
        18: "numstr",
        19: "printstr",
        20: "t61str",
        21: "videostr",
        22: "ia5str",
        23: "utctime",
        24: "gentime",
        25: "graphstr",
        26: "iso646str",
        27: "genstr",
        28: "unistr",
        29: "charstr",
        30: "bmpstr"
    },
    t.tagByName = i._reverse(t.tag)
}
, function(e, t, r) {
    var i = t;
    i.der = r(154),
    i.pem = r(289)
}
, function(e, t, r) {
    var i = r(2)
      , n = r(20).Buffer
      , o = r(154);
    function a(e) {
        o.call(this, e),
        this.enc = "pem"
    }
    i(a, o),
    e.exports = a,
    a.prototype.decode = function(e, t) {
        for (var r = e.toString().split(/[\r\n]+/g), i = t.label.toUpperCase(), a = /^-----(BEGIN|END) ([^-]+)-----$/, s = -1, f = -1, c = 0; c < r.length; c++) {
            var h = r[c].match(a);
            if (null !== h && h[2] === i) {
                if (-1 !== s) {
                    if ("END" !== h[1])
                        break;
                    f = c;
                    break
                }
                if ("BEGIN" !== h[1])
                    break;
                s = c
            }
        }
        if (-1 === s || -1 === f)
            throw new Error("PEM section not found for: " + i);
        var d = r.slice(s + 1, f).join("");
        d.replace(/[^a-z0-9\+\/=]+/gi, "");
        var u = new n(d,"base64");
        return o.prototype.decode.call(this, u, t)
    }
}
, function(e, t, r) {
    var i = t;
    i.der = r(155),
    i.pem = r(291)
}
, function(e, t, r) {
    var i = r(2)
      , n = r(155);
    function o(e) {
        n.call(this, e),
        this.enc = "pem"
    }
    i(o, n),
    e.exports = o,
    o.prototype.encode = function(e, t) {
        for (var r = n.prototype.encode.call(this, e).toString("base64"), i = ["-----BEGIN " + t.label + "-----"], o = 0; o < r.length; o += 64)
            i.push(r.slice(o, o + 64));
        return i.push("-----END " + t.label + "-----"),
        i.join("\n")
    }
}
, function(e, t, r) {
    "use strict";
    var i = r(63)
      , n = i.define("Time", (function() {
        this.choice({
            utcTime: this.utctime(),
            generalTime: this.gentime()
        })
    }
    ))
      , o = i.define("AttributeTypeValue", (function() {
        this.seq().obj(this.key("type").objid(), this.key("value").any())
    }
    ))
      , a = i.define("AlgorithmIdentifier", (function() {
        this.seq().obj(this.key("algorithm").objid(), this.key("parameters").optional(), this.key("curve").objid().optional())
    }
    ))
      , s = i.define("SubjectPublicKeyInfo", (function() {
        this.seq().obj(this.key("algorithm").use(a), this.key("subjectPublicKey").bitstr())
    }
    ))
      , f = i.define("RelativeDistinguishedName", (function() {
        this.setof(o)
    }
    ))
      , c = i.define("RDNSequence", (function() {
        this.seqof(f)
    }
    ))
      , h = i.define("Name", (function() {
        this.choice({
            rdnSequence: this.use(c)
        })
    }
    ))
      , d = i.define("Validity", (function() {
        this.seq().obj(this.key("notBefore").use(n), this.key("notAfter").use(n))
    }
    ))
      , u = i.define("Extension", (function() {
        this.seq().obj(this.key("extnID").objid(), this.key("critical").bool().def(!1), this.key("extnValue").octstr())
    }
    ))
      , l = i.define("TBSCertificate", (function() {
        this.seq().obj(this.key("version").explicit(0).int().optional(), this.key("serialNumber").int(), this.key("signature").use(a), this.key("issuer").use(h), this.key("validity").use(d), this.key("subject").use(h), this.key("subjectPublicKeyInfo").use(s), this.key("issuerUniqueID").implicit(1).bitstr().optional(), this.key("subjectUniqueID").implicit(2).bitstr().optional(), this.key("extensions").explicit(3).seqof(u).optional())
    }
    ))
      , p = i.define("X509Certificate", (function() {
        this.seq().obj(this.key("tbsCertificate").use(l), this.key("signatureAlgorithm").use(a), this.key("signatureValue").bitstr())
    }
    ));
    e.exports = p
}
, function(e) {
    e.exports = JSON.parse('{"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}')
}
, function(e, t, r) {
    var i = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r\+\/\=]+)[\n\r]+/m
      , n = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m
      , o = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r\+\/\=]+)-----END \1-----$/m
      , a = r(73)
      , s = r(96)
      , f = r(4).Buffer;
    e.exports = function(e, t) {
        var r, c = e.toString(), h = c.match(i);
        if (h) {
            var d = "aes" + h[1]
              , u = f.from(h[2], "hex")
              , l = f.from(h[3].replace(/[\r\n]/g, ""), "base64")
              , p = a(t, u.slice(0, 8), parseInt(h[1], 10)).key
              , b = []
              , m = s.createDecipheriv(d, p, u);
            b.push(m.update(l)),
            b.push(m.final()),
            r = f.concat(b)
        } else {
            var y = c.match(o);
            r = new f(y[2].replace(/[\r\n]/g, ""),"base64")
        }
        return {
            tag: c.match(n)[1],
            data: r
        }
    }
}
, function(e, t, r) {
    (function(t) {
        var i = r(15)
          , n = r(100).ec
          , o = r(75)
          , a = r(156);
        function s(e, t) {
            if (e.cmpn(0) <= 0)
                throw new Error("invalid sig");
            if (e.cmp(t) >= t)
                throw new Error("invalid sig")
        }
        e.exports = function(e, r, f, c, h) {
            var d = o(f);
            if ("ec" === d.type) {
                if ("ecdsa" !== c && "ecdsa/rsa" !== c)
                    throw new Error("wrong public key type");
                return function(e, t, r) {
                    var i = a[r.data.algorithm.curve.join(".")];
                    if (!i)
                        throw new Error("unknown curve " + r.data.algorithm.curve.join("."));
                    var o = new n(i)
                      , s = r.data.subjectPrivateKey.data;
                    return o.verify(t, e, s)
                }(e, r, d)
            }
            if ("dsa" === d.type) {
                if ("dsa" !== c)
                    throw new Error("wrong public key type");
                return function(e, t, r) {
                    var n = r.data.p
                      , a = r.data.q
                      , f = r.data.g
                      , c = r.data.pub_key
                      , h = o.signature.decode(e, "der")
                      , d = h.s
                      , u = h.r;
                    s(d, a),
                    s(u, a);
                    var l = i.mont(n)
                      , p = d.invm(a);
                    return 0 === f.toRed(l).redPow(new i(t).mul(p).mod(a)).fromRed().mul(c.toRed(l).redPow(u.mul(p).mod(a)).fromRed()).mod(n).mod(a).cmp(u)
                }(e, r, d)
            }
            if ("rsa" !== c && "ecdsa/rsa" !== c)
                throw new Error("wrong public key type");
            r = t.concat([h, r]);
            for (var u = d.modulus.byteLength(), l = [1], p = 0; r.length + l.length + 2 < u; )
                l.push(255),
                p++;
            l.push(0);
            for (var b = -1; ++b < r.length; )
                l.push(r[b]);
            l = new t(l);
            var m = i.mont(d.modulus);
            e = (e = new i(e).toRed(m)).redPow(new i(d.publicExponent)),
            e = new t(e.fromRed().toArray());
            var y = p < 8 ? 1 : 0;
            for (u = Math.min(e.length, l.length),
            e.length !== l.length && (y = 1),
            b = -1; ++b < u; )
                y |= e[b] ^ l[b];
            return 0 === y
        }
    }
    ).call(this, r(20).Buffer)
}
, function(e, t, r) {
    (function(t) {
        var i = r(100)
          , n = r(15);
        e.exports = function(e) {
            return new a(e)
        }
        ;
        var o = {
            secp256k1: {
                name: "secp256k1",
                byteLength: 32
            },
            secp224r1: {
                name: "p224",
                byteLength: 28
            },
            prime256v1: {
                name: "p256",
                byteLength: 32
            },
            prime192v1: {
                name: "p192",
                byteLength: 24
            },
            ed25519: {
                name: "ed25519",
                byteLength: 32
            },
            secp384r1: {
                name: "p384",
                byteLength: 48
            },
            secp521r1: {
                name: "p521",
                byteLength: 66
            }
        };
        function a(e) {
            this.curveType = o[e],
            this.curveType || (this.curveType = {
                name: e
            }),
            this.curve = new i.ec(this.curveType.name),
            this.keys = void 0
        }
        function s(e, r, i) {
            Array.isArray(e) || (e = e.toArray());
            var n = new t(e);
            if (i && n.length < i) {
                var o = new t(i - n.length);
                o.fill(0),
                n = t.concat([o, n])
            }
            return r ? n.toString(r) : n
        }
        o.p224 = o.secp224r1,
        o.p256 = o.secp256r1 = o.prime256v1,
        o.p192 = o.secp192r1 = o.prime192v1,
        o.p384 = o.secp384r1,
        o.p521 = o.secp521r1,
        a.prototype.generateKeys = function(e, t) {
            return this.keys = this.curve.genKeyPair(),
            this.getPublicKey(e, t)
        }
        ,
        a.prototype.computeSecret = function(e, r, i) {
            return r = r || "utf8",
            t.isBuffer(e) || (e = new t(e,r)),
            s(this.curve.keyFromPublic(e).getPublic().mul(this.keys.getPrivate()).getX(), i, this.curveType.byteLength)
        }
        ,
        a.prototype.getPublicKey = function(e, t) {
            var r = this.keys.getPublic("compressed" === t, !0);
            return "hybrid" === t && (r[r.length - 1] % 2 ? r[0] = 7 : r[0] = 6),
            s(r, e)
        }
        ,
        a.prototype.getPrivateKey = function(e) {
            return s(this.keys.getPrivate(), e)
        }
        ,
        a.prototype.setPublicKey = function(e, r) {
            return r = r || "utf8",
            t.isBuffer(e) || (e = new t(e,r)),
            this.keys._importPublic(e),
            this
        }
        ,
        a.prototype.setPrivateKey = function(e, r) {
            r = r || "utf8",
            t.isBuffer(e) || (e = new t(e,r));
            var i = new n(e);
            return i = i.toString(16),
            this.keys = this.curve.genKeyPair(),
            this.keys._importPrivate(i),
            this
        }
    }
    ).call(this, r(20).Buffer)
}
, function(e, t, r) {
    t.publicEncrypt = r(298),
    t.privateDecrypt = r(299),
    t.privateEncrypt = function(e, r) {
        return t.publicEncrypt(e, r, !0)
    }
    ,
    t.publicDecrypt = function(e, r) {
        return t.privateDecrypt(e, r, !0)
    }
}
, function(e, t, r) {
    var i = r(75)
      , n = r(52)
      , o = r(59)
      , a = r(157)
      , s = r(158)
      , f = r(15)
      , c = r(159)
      , h = r(99)
      , d = r(4).Buffer;
    e.exports = function(e, t, r) {
        var u;
        u = e.padding ? e.padding : r ? 1 : 4;
        var l, p = i(e);
        if (4 === u)
            l = function(e, t) {
                var r = e.modulus.byteLength()
                  , i = t.length
                  , c = o("sha1").update(d.alloc(0)).digest()
                  , h = c.length
                  , u = 2 * h;
                if (i > r - u - 2)
                    throw new Error("message too long");
                var l = d.alloc(r - i - u - 2)
                  , p = r - h - 1
                  , b = n(h)
                  , m = s(d.concat([c, l, d.alloc(1, 1), t], p), a(b, p))
                  , y = s(b, a(m, h));
                return new f(d.concat([d.alloc(1), y, m], r))
            }(p, t);
        else if (1 === u)
            l = function(e, t, r) {
                var i, o = t.length, a = e.modulus.byteLength();
                if (o > a - 11)
                    throw new Error("message too long");
                i = r ? d.alloc(a - o - 3, 255) : function(e) {
                    var t, r = d.allocUnsafe(e), i = 0, o = n(2 * e), a = 0;
                    for (; i < e; )
                        a === o.length && (o = n(2 * e),
                        a = 0),
                        (t = o[a++]) && (r[i++] = t);
                    return r
                }(a - o - 3);
                return new f(d.concat([d.from([0, r ? 1 : 2]), i, d.alloc(1), t], a))
            }(p, t, r);
        else {
            if (3 !== u)
                throw new Error("unknown padding");
            if ((l = new f(t)).cmp(p.modulus) >= 0)
                throw new Error("data too long for modulus")
        }
        return r ? h(l, p) : c(l, p)
    }
}
, function(e, t, r) {
    var i = r(75)
      , n = r(157)
      , o = r(158)
      , a = r(15)
      , s = r(99)
      , f = r(59)
      , c = r(159)
      , h = r(4).Buffer;
    e.exports = function(e, t, r) {
        var d;
        d = e.padding ? e.padding : r ? 1 : 4;
        var u, l = i(e), p = l.modulus.byteLength();
        if (t.length > p || new a(t).cmp(l.modulus) >= 0)
            throw new Error("decryption error");
        u = r ? c(new a(t), l) : s(t, l);
        var b = h.alloc(p - u.length);
        if (u = h.concat([b, u], p),
        4 === d)
            return function(e, t) {
                var r = e.modulus.byteLength()
                  , i = f("sha1").update(h.alloc(0)).digest()
                  , a = i.length;
                if (0 !== t[0])
                    throw new Error("decryption error");
                var s = t.slice(1, a + 1)
                  , c = t.slice(a + 1)
                  , d = o(s, n(c, a))
                  , u = o(c, n(d, r - a - 1));
                if (function(e, t) {
                    e = h.from(e),
                    t = h.from(t);
                    var r = 0
                      , i = e.length;
                    e.length !== t.length && (r++,
                    i = Math.min(e.length, t.length));
                    var n = -1;
                    for (; ++n < i; )
                        r += e[n] ^ t[n];
                    return r
                }(i, u.slice(0, a)))
                    throw new Error("decryption error");
                var l = a;
                for (; 0 === u[l]; )
                    l++;
                if (1 !== u[l++])
                    throw new Error("decryption error");
                return u.slice(l)
            }(l, u);
        if (1 === d)
            return function(e, t, r) {
                var i = t.slice(0, 2)
                  , n = 2
                  , o = 0;
                for (; 0 !== t[n++]; )
                    if (n >= t.length) {
                        o++;
                        break
                    }
                var a = t.slice(2, n - 1);
                ("0002" !== i.toString("hex") && !r || "0001" !== i.toString("hex") && r) && o++;
                a.length < 8 && o++;
                if (o)
                    throw new Error("decryption error");
                return t.slice(n)
            }(0, u, r);
        if (3 === d)
            return u;
        throw new Error("unknown padding")
    }
}
, function(e, t, r) {
    "use strict";
    (function(e, i) {
        function n() {
            throw new Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11")
        }
        var o = r(4)
          , a = r(52)
          , s = o.Buffer
          , f = o.kMaxLength
          , c = e.crypto || e.msCrypto
          , h = Math.pow(2, 32) - 1;
        function d(e, t) {
            if ("number" != typeof e || e != e)
                throw new TypeError("offset must be a number");
            if (e > h || e < 0)
                throw new TypeError("offset must be a uint32");
            if (e > f || e > t)
                throw new RangeError("offset out of range")
        }
        function u(e, t, r) {
            if ("number" != typeof e || e != e)
                throw new TypeError("size must be a number");
            if (e > h || e < 0)
                throw new TypeError("size must be a uint32");
            if (e + t > r || e > f)
                throw new RangeError("buffer too small")
        }
        function l(e, t, r, n) {
            if (i.browser) {
                var o = e.buffer
                  , s = new Uint8Array(o,t,r);
                return c.getRandomValues(s),
                n ? void i.nextTick((function() {
                    n(null, e)
                }
                )) : e
            }
            if (!n)
                return a(r).copy(e, t),
                e;
            a(r, (function(r, i) {
                if (r)
                    return n(r);
                i.copy(e, t),
                n(null, e)
            }
            ))
        }
        c && c.getRandomValues || !i.browser ? (t.randomFill = function(t, r, i, n) {
            if (!(s.isBuffer(t) || t instanceof e.Uint8Array))
                throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
            if ("function" == typeof r)
                n = r,
                r = 0,
                i = t.length;
            else if ("function" == typeof i)
                n = i,
                i = t.length - r;
            else if ("function" != typeof n)
                throw new TypeError('"cb" argument must be a function');
            return d(r, t.length),
            u(i, r, t.length),
            l(t, r, i, n)
        }
        ,
        t.randomFillSync = function(t, r, i) {
            void 0 === r && (r = 0);
            if (!(s.isBuffer(t) || t instanceof e.Uint8Array))
                throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
            d(r, t.length),
            void 0 === i && (i = t.length - r);
            return u(i, r, t.length),
            l(t, r, i)
        }
        ) : (t.randomFill = n,
        t.randomFillSync = n)
    }
    ).call(this, r(38), r(45))
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function abc(e, t, r) {
    "use strict";
    r(23),
    r(31),
    r(430);
    var i = r(9)
      , n = r(431)
      , o = r(215)
      , a = r(26)
      , s = r(56)
      , f = 10;
    var c = (new Date).getTime()
      , h = function(e, t, r) {
        var i = ""
          , n = t
          , o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        e && (n = Math.round(Math.random() * (r - t)) + t);
        for (var a = 0; a < n; a++) {
            i += o[Math.round(Math.random() * (o.length - 1))]
        }
        return i
    }(!1, 16)
      , d = "$d6eb7ff91ee257475%"
      , u = r(30);
    new Vue({
        el: "#sellerService",
        data: function() {
            return {
                serviceId: "",
                serviceIndex: -1,
                serviceItem: {},
                serviceList: [],
                complaintList: [],
                pageNum: 1,
                pageTotal: 2,
                tabType: 1,
                moreTag: !1,
                timeTag: !1,
                timeIndex: 1,
                listMore: "",
                subcouid: ""
            }
        },
        mounted: function() {
            this.subcouid = u.getUrlSearch(location.href, "subcouid"),
            this.subcouid ? this.getSubService() : (this.serviceId = u.getUrlSearch(location.href, "sid"),
            this.getService()),
            this.initMore(),
            this.initEvent()
        },
        filters: {
            conversion: function(e) {
                return u.formatTime(1e3 * e)
            }
        },
        methods: {
            timeSelect: function(e) {
                this.timeTag = !1,
                this.timeIndex != e && (this.timeIndex = e)
            },
            showTime: function() {
                this.timeTag = !this.timeTag
            },
            showMore: function() {
                this.moreTag = !this.moreTag
            },
            initShare: function(e) {
                e.shareTag ? e.shareTag = 1 : Vue.set(e, "shareTag", 1),
                new FnShare(".share" + e.main.sn,{
                    url: location.protocol + e.main.url,
                    title: e.main.title,
                    security: "https"
                })
            },
            hideShare: function(e) {
                e.shareTag = 2
            },
            initEvent: function() {
                $(".myts-list").on("click", "div.praise", (function(e) {
                    n($(this), 1)
                }
                ))
            },
            initMore: function() {
                var e = this;
                s.init($(".myts-list"), (function() {
                    e.pageNum++,
                    e.pageNum <= e.pageTotal && e.getComplaints()
                }
                ))
            },
            tabChange: function(e) {
                this.tabType != e && (this.tabType = e,
                this.pageNum = 1,
                this.pageTotal = 2,
                this.complaintList = [],
                this.getComplaints())
            },
            serviceChange: function(e) {
                this.serviceIndex != e && (this.serviceIndex = e,
                this.serviceItem = -1 == e ? {} : this.serviceList[e],
                this.pageNum = 1,
                this.pageTotal = 2,
                this.complaintList = [],
                this.getComplaints())
            },
            getComplaints: function() {
                var e = this
                  , t = {
                    type: this.tabType,
                    page_size: f,
                    page: this.pageNum
                }
                  , r = ""
                  , n = ""
                  , s = this.serviceIndex;
                if (s < 0 || s >= 0 && 1 == this.serviceItem.dft) {
                    var u = PAGE_CONFIG.couid;
                    s >= 0 && 1 == this.serviceItem.dft && (u = this.serviceItem.couid),
                    r = o([c, h, d, u, this.tabType, f, this.pageNum].sort().join("")),
                    t.couid = u,
                    n = i.SELLER_FEED
                } else {
                    var l = this.serviceList[s].sid;
                    r = o([c, h, d, l, this.tabType, f, this.pageNum].sort().join("")),
                    t.sid = l,
                    n = i.service_feed
                }
                $.ajax({
                    url: "".concat(n, "?ts=").concat(c, "&rs=").concat(h, "&signature=").concat(r),
                    type: "GET",
                    data: t,
                    xhrFields: {
                        withCredentials: !0
                    },
                    success: function(t) {
                        var r = t.result.status.code;
                        if (0 == r) {
                            e.listMore = "";
                            var i = t.result.data;
                            i && (i.complaints && (e.complaintList = e.complaintList.concat(i.complaints)),
                            e.pageTotal = i.pager.page_amount)
                        } else
                            10017 == r ? (e.listMore = "登录查看更多内容",
                            a.notice.show('<div class="ts_pop_content"><div class="rs_pop_body"><p style="padding:25px 0 20px;font-size:18px;">登录查看更多内容</p></div> </div>', {
                                width: 400,
                                height: 200,
                                position: "center",
                                mask: 1,
                                animate: "bounceIn",
                                animateOut: "bounceOut",
                                type: "question",
                                title: "",
                                confirmW: "确定",
                                cancelW: "取消",
                                cancelWClass: "cancel",
                                oncomplete: function() {},
                                oncancel: function() {},
                                callback: function(e) {
                                    a.notice.close()
                                }
                            })) : 10018 == r ? (e.listMore = '<a href="https://tousu.sina.com.cn/about_app/index?frompage=heimaopc">打开App查看更多内容> </a>',
                            a.notice.show('<div class="ts_pop_content"><div class="rs_pop_body"><p style="padding:25px 0 20px;font-size:18px;">打开App查看更多内容</p></div> </div>', {
                                width: 400,
                                height: 200,
                                position: "center",
                                mask: 1,
                                animate: "bounceIn",
                                animateOut: "bounceOut",
                                type: "question",
                                title: "",
                                confirmW: "前往下载",
                                cancelW: "取消",
                                cancelWClass: "cancel",
                                oncomplete: function() {},
                                oncancel: function() {},
                                callback: function() {
                                    a.notice.close(),
                                    location.href = "https://tousu.sina.com.cn/about_app/index?frompage=heimaopc"
                                }
                            })) : window.alert(t.result.status.msg)
                    },
                    error: function() {}
                })
            },
            getSubService: function() {
                var e = this;
                $.ajax({
                    url: i.company_info,
                    type: "GET",
                    data: {
                        couid: this.subcouid
                    },
                    xhrFields: {
                        withCredentials: !0
                    },
                    success: function(t) {
                        0 == t.result.status.code ? (e.serviceItem = t.result.data,
                        e.serviceItem.dft = 1,
                        e.serviceItem.couid = e.subcouid,
                        e.serviceList.unshift(e.serviceItem),
                        e.serviceChange(0)) : window.alert(t.result.status.msg)
                    },
                    error: function() {}
                }),
                $.ajax({
                    url: i.company_service,
                    type: "GET",
                    data: {
                        couid: this.subcouid
                    },
                    xhrFields: {
                        withCredentials: !0
                    },
                    success: function(t) {
                        if (0 == t.result.status.code) {
                            var r = t.result.data;
                            r && (e.serviceList = e.serviceList.concat(r))
                        } else
                            window.alert(t.result.status.msg)
                    },
                    error: function() {}
                })
            },
            getService: function() {
                var e = this;
                $.ajax({
                    url: i.company_service,
                    type: "GET",
                    data: {
                        couid: PAGE_CONFIG.couid
                    },
                    xhrFields: {
                        withCredentials: !0
                    },
                    success: function(t) {
                        if (0 == t.result.status.code) {
                            var r = t.result.data;
                            r && (e.serviceList = r);
                            var i = e.serviceList.length;
                            if (0 == i)
                                e.getCompany(),
                                e.getComplaints();
                            else if (e.serviceId) {
                                for (var n = 0; n < i; n++)
                                    if (e.serviceId == r[n].sid) {
                                        e.serviceChange(n);
                                        break
                                    }
                            } else
                                e.getComplaints()
                        } else
                            window.alert(t.result.status.msg)
                    },
                    error: function() {}
                })
            },
            getCompany: function() {
                var e = this;
                $.ajax({
                    url: i.company_info,
                    type: "GET",
                    data: {
                        couid: PAGE_CONFIG.couid
                    },
                    xhrFields: {
                        withCredentials: !0
                    },
                    success: function(t) {
                        0 == t.result.status.code ? (e.serviceIndex = -2,
                        e.serviceItem = t.result.data) : window.alert(t.result.status.msg)
                    },
                    error: function() {}
                })
            }
        }
    })
}
, function(e, t, r) {}
, function(e, t, r) {
    "use strict";
    var i = r(8)(r(27))
      , n = r(14)
      , o = r(9);
    e.exports = function(e, t) {
        e && e.length && t && function(e, t) {
            if (window.SINA_OUTLOGIN_LAYER.isLogin()) {
                var r = e
                  , a = (0,
                i.default)($.trim(r.text()) || 0)
                  , s = r.parent().data("rid") || ""
                  , f = {
                    option: {
                        url: o.PRAISE,
                        data: {
                            type: t,
                            rid: s
                        },
                        type: "POST",
                        dataType: "json",
                        timeout: 1e4
                    },
                    successCb: function(e) {
                        var t = e.result;
                        if (t) {
                            t.data;
                            var i = t.status;
                            i && 0 === i.code ? r.hasClass("select") ? (r.removeClass("select"),
                            r.html('<i class="icon-code-3"></i>' + (a - 1))) : (r.addClass("select"),
                            r.html('<i class="icon-code-3"></i>' + (a + 1))) : alert("请稍后再试")
                        }
                    },
                    errCb: function(e) {
                        alert("请稍后再试")
                    }
                };
                n.request(f.option, f.successCb, f.errCb, null)
            } else
                alert("请先登录")
        }(e, t)
    }
}
]);
