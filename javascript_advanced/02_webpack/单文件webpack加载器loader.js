/*
 * Webpack 是一个前端资源打包工具，把一堆 HTML、CSS、JS、图片等文件打包成浏览器能高效加载的一包东西。
 * webpack 是通过 Loader 加载器的配置来实现对资源的编译的。对这些资源文件进行转换和处理,使其能被应用程序正确引用和加载
 *
 */
// 最简单匿名函数自执行
!function (x, y) {
    console.log(x);
    console.log(y)
}(10, 20)

// 加载器: ! function(形参){加载器构建}(功能模块(数组或对象))

// 数组版本
!function (e) {
    // t 起一个缓存效果
    var t = {};

    // 加载器
    function n(r) {
        if (t[r])
            return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        // 正常传参
        e[r].call(o.exports, o, o.exports, n);
        // 正常返回值
        return o.exports.exports;
    }

    // 调度器调度,数组通过下标索引,对象通过key
    console.log(n(0));
    console.log(n(1));
}([
    function () {
        console.log("foo");
        this.exports = 100;
    },
    function () {
        console.log("bar");
        this.exports = 200;
    }
])

// 对象版本
window = global;
!function (e) {
    // t 起一个缓存效果
    var t = {};

    // 加载器
    function n(r) {
        if (t[r])
            return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        // 正常传参
        e[r].call(o.exports, o, o.exports, n);
        // 正常返回值
        return o.exports.exports;
    }

    // 把调度器放到window上,可在外部调用
    window.loader = n;

    // 调度器调度,数组通过下标索引,对象通过key
    console.log(n(123));
    console.log(n(456));
}(
    {
        "123": function () {
            console.log("foo");
            this.exports = 100;
        },
        "456": function () {
            console.log("bar");
            this.exports = 200;
        }
    }
)
console.log(window.loader('123'));