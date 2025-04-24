window = global;

// 模拟浏览器真实环境,删除 node 中特有模块防止检测,也可以使用 jsdom 等模拟更真实环境
delete global;
delete Buffer;
// delete require;
// delete module;

document = {
    cookie: '_nano_fp=XpmYX59xX59JnqXxl9_0sSj9kNMN1IbVpqKDB9WW; api_uid=rBUUYGfjqBA0UTK2MvGwAg==',

    URL: "https://www.pinduoduo.com/home/food/"
}
document.addEventListener = function () {
}

screen = {
    availHeight: 1040,
    availLeft: 0,
    availTop: 0,
    availWidth: 1920,
    colorDepth: 24,
    height: 1080,
    isExtended: false,
    onchange: null,
    orientation: {
        angle: 0,
        onchange: null,
        type: "landscape-primary"
    },
    pixelDepth: 24,
    width: 1920
}
navigator = {
    webdriver: false,
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    appCodeName: "Mozilla",
    appName: "Netscape",
    appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    cookieEnabled: true,
    deprecatedRunAdAuctionEnforcesKAnonymity: false,
    deviceMemory: 8,
    doNotTrack: null,
}

history = {
    length: 13,
    scrollRestoration: "auto",
    state: {
        "url": "/subject?type=subject",
        "as": "/home/food/",
        "options": {}
    }
}

history.back = function () {
}

location = {
    "ancestorOrigins": {},
    "href": "https://www.pinduoduo.com/home/medical/",
    "origin": "https://www.pinduoduo.com",
    "protocol": "https:",
    "host": "www.pinduoduo.com",
    "hostname": "www.pinduoduo.com",
    "port": "",
    "pathname": "/home/medical/",
    "search": "",
    "hash": ""
}

// function browserProxy(obj) {
//     return new Proxy(obj, {
//         get: function (target, property, receiver) {
//             console.log("get:::", obj, property, target[property]);
//             return target[property];
//         }
//         ,
//         set: function (target, property, value, receiver) {
//             console.log("set:::", obj, property);
//             return Reflect.set(...arguments);
//         }
//
//     })
// }
//
// window = browserProxy(window);
// document = browserProxy(document);
// screen = browserProxy(screen);
// history = browserProxy(history);
// location = browserProxy(location);
// navigator = browserProxy(navigator);