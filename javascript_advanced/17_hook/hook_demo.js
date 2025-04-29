(function () {
    var source = JSON.stringify;
    JSON.stringify = function (arg) {
        console.log("找到了source执行位置:::", arg);
        debugger;
        return source(arg); // 不改变原来的执行逻辑
    }
})();

// hook cookie
!(function () {
    'use strict'
    var _cookie = "";
    Object.defineProperty(document, 'cookie', {
        set: function (val) {
            console.log(val);
            debugger
            _cookie = val;
            return val;
        },
        get: function () {
            return _cookie;
        },
    });
})()

// hook header
!(function () {
    let set_header = window.XMLHttpRequest.prototype.setRequestHeader
    window.XMLHttpRequest.prototype.setRequestHeader = function (header, val) {
        if (header.toUpperCase() === "hexin-v".toUpperCase()) {
            debugger
        }
        return set_header.apply(this, arguments)
    }

})()