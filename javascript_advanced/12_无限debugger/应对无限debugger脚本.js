// 1. 记录一下原本的Function.prototype.constructor
var xxx = Function.prototype.constructor

// 2. 给Function.prototype.constructor设置一个新的功能
Function.prototype.constructor = function () {
    // 3. 判断参数是否为debugger
    if (arguments[0] === "debugger") {
        return; // 4.拦截创建包含 debugger 的函数
    } else {
        // 5. 其他情况正常创建函数
        return xxx.apply(this, arguments);
    }
}


// eval 去除 debugger
var eval_ = window.eval();
window.eval = function () {
    let can = arguments[0];
    if (can.indexOf("debugger")) {
        return;
    } else {
        return eval_.apply(window, arguments);
    }
}