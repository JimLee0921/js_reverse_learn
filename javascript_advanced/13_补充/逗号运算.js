/**
 * 逗号运算符 , 是 JavaScript 中唯一一个同时具有两种角色的操作符：
 * 表达式分隔符（常规用法）
 * 运算符（返回最后一个表达式的值）
 */
function s() {
    // 作为分隔符，无返回值，单纯分割变量声明
    var x = 1, y = 2, c, d = 5;

    // 作为运算符，返回最后一个表达式的值
    var a = (1 + 2, 3 * 4);
    console.log(a);

    x = (y = 5, z = y * 2);
    console.log(x); // 10（z 的赋值结果）
}
function d(d, e, f, g){
    var h = {},
        i = 123;
    return h.encText = "Jim", // h: {encText: "Jim"}
        h.encText = "music",// h: {encText: "music"}
        h.encSeckey = "sb", // h: {encText: "music", encSeckey: "sb"}
        // 最终返回的就是h
        h
}

s()
console.log(d());