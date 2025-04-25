(function () {
    var source = JSON.stringify;
    JSON.stringify = function (arg) {
        console.log("找到了source执行位置:::", arg);
        debugger;
        return source(arg); // 不改变原来的执行逻辑
    }
})();