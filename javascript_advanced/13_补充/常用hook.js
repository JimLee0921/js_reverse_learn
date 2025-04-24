/**
 * hook 其实就是在
 * @type {function(*): any}
 * @private
 */
// eval hook代码
eval_ = eval;
eval = function (s) {
    console.log(s);
    debugger;
    return eval(s);
}
// 可能会被检测到hook，可以使用这种方案来进行伪装
eval.toString = function () {
    return 'function eval() { [native code] }';
}

// 处理无限 debugger
func_ = Function.prototype.constructor

Function.prototype.constructor = function () {
    if (arguments[0] === "debugger") {
        return;
    } else {
        return func_.apply(this, arguments);
    }
}

// hook 某个属性
var v;
Object.defineProperty(document, 'cookie', {
    set: function (val) {
        console.log("存入 cookie 被触发");
        v = val;
        debugger
        return val;
    },
    get() {
        console.log("获取 cookie 被触发");
        debugger;
        return v;
    }
})