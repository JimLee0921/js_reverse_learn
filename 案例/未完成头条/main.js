function logActivity(type, objectName, prop, oldVal, newVal) {
    switch (type) {
        case 'get':
            console.log('取值:', `${objectName}.${prop}`, '=>', oldVal);
            break;
        case 'set':
            console.log('设置值:', `${objectName}.${prop}`, oldVal, '=>', newVal);
            break;
    }
}

function watch(func, name) {
    return new Proxy(func, {
        get(target, p, receiver) {
            if (p === 'Math' || p === 'isNaN' || p === 'encodeURI' || p === 'Uint8Array' || p === 'zzz' || p === 'innerHTML') {
                let val = Reflect.get(...arguments);
                return val;
            } else {
                let val = Reflect.get(...arguments);
                // Log the get operation
                logActivity('get', name, p, val);
                return val;
            }
        },
        set(target, p, value, receiver) {
            let val = Reflect.get(target, p, receiver);
            // Log the set operation
            logActivity('set', name, p, val, value);
            return Reflect.set(...arguments);
        }
    });
}

Window = function () {
    return global;
}
window = new Window();
window.requestAnimationFrame = function (tagName) {
    console.log("window.requestAnimationFrame: " + tagName)
}
delete global;
Object.defineProperties(window, Window.prototype)

function HTMLBodyElement() {
    this.tagName = "BODY"
    this.scrollHeight = 3214
    this.scrollLeft = 0
    this.scrollTop = 0
    this.scrollWidth = 1280
};
body = new HTMLBodyElement();
head = {
    tagName: "HEAD"
}
// 基础补环境方式
navigator = {
    appCodeName: "Mozilla",
    appName: "Netscape",
    appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36"
}
location = {
    host: "www.toutiao.com",
    hostname: "www.toutiao.com",
    href: "https://www.toutiao.com/",
    origin: "https://www.toutiao.com",
    pathname: "/",
    port: "",
    protocol: "https:"
}

function Document() {
};

XMLHttpRequest = function () {
};

Document.prototype = {
    URL: "https://www.toutiao.com/",
    body: body,
    cookie: "local_city_cache=%E5%AE%81%E6%B3%A2; csrftoken=8f2c79aac45eb11033842b75c6730f5f; s_v_web_id=verify_m911hbbt_G9dXfWIp_3DAI_4Y3q_AoFA_25HswU8lKHs7; gfkadpd=24,6457; __feed_out_channel_key=entertainment; tt_scid=6t8JGplVVdUiltkg5yLC2IESkHDZEWGWy4pNka6ho5.ve01i9ZVovmUY1ZXJeuFP6860",
    head: head,
    documentElement: {
        clientHeight: 904,
        clientLeft: 0,
        clientTop: 0,
        clientWidth: 502,
        contentEditable: "inherit",
        currentCSSZoom: 1,
        tagName: "HTML"
    },
    referrer: 'https://www.toutiao.com/'

}
// 原型链补法（有很多入参）
Object.defineProperty(Document.prototype, 'createElement', {
    value: function createElement(tagName) {
        console.log("Document.prototype.createElement:" + tagName)
        if (tagName === 'span') {
            return {}
        }
    }
})
// 普通补充（没有什么入参）
Document.prototype.createEvent = function createEvent(tagName) {
    console.log("Document.prototype.createEvent:" + tagName)
}
document = new Document();
navigator = {};
screen = {};
window = watch(window, 'window');
document = watch(document, 'document');
navigator = watch(navigator, 'navigator');
screen = watch(screen, 'screen');
location = watch(location, 'location');

require('./source.js')

params = {
    "0": 0,
    "1": 1,
    "2": 8,
    "3": "channel_id=3189398972&max_behot_time=1745275101&offset=0&category=pc_profile_channel&client_extra_params=%7B%22short_video_item%22%3A%22filter%22%7D&aid=24&app_name=toutiao_web&msToken=2bkJ-1kiokN8x_yWMrEz23SahHU4jO6vtIL10F13XYlKQC-PqZvWye45ankHPpdQii96SaR4d9UsR3xqKrtgJRs42Fq40-x460G4faqbs5h-IFjTawIgetoF6enpt7s%3D&msToken=2bkJ-1kiokN8x_yWMrEz23SahHU4jO6vtIL10F13XYlKQC-PqZvWye45ankHPpdQii96SaR4d9UsR3xqKrtgJRs42Fq40-x460G4faqbs5h-IFjTawIgetoF6enpt7s%3D",
    "4": "",
    "5": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36"
}

function get_a_bogus(params) {
    var r = entry.uuuu._v;
    return (0, entry._u)(r[0], params, r[1], r[2], this)
}


console.log(get_a_bogus(params))

