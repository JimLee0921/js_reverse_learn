/**
 * JS 中的 exports 是 模块系统的一部分，主要用在 CommonJS 模块规范 中（尤其是 Node.js）。它用来导出模块内容，让其他文件可以 require() 使用。
 * 一个模块就是一个 JS 文件，每个文件默认是一个独立作用域。你想把一个模块里的函数/变量/类等导出，给其他地方用，就得用 exports 或 module.exports。
 * 模式	说明
 * 1. (t, e) 自调用 + t.exports = r	传统的模块导出（模拟 CommonJS）
 * 2. function getX() { return r }	普通函数返回对象（现代写法，更简单）
 * 它们本质上是一样的目标：
 * 就是：定义一堆东西（比如 r），然后暴露出去给外面用。
 */

console.log((exports === module.exports)); // true ✅

//  通过 exports 导出多个属性（常用）
// 模拟CommonJS模块系统
const t = {};

!(function (t, e) {
    const r = {
        add: (a, b) => a + b, multiply: (a, b) => a * b
    };
    t.exports = r; // 把 r 暴露出去
})(t, {});  // 传入t, e（e这里没用，只是占位）

const calculator1 = t.exports; // 得到 r

console.log(calculator1.add(2, 3));       // 5
console.log(calculator1.multiply(2, 3));  // 6


// 直接函数 return 出对象
function createCalculator() {
    const r = {
        add: (a, b) => a + b, multiply: (a, b) => a * b
    };
    return r; // 直接返回
}

const calculator2 = createCalculator(); // 直接调用得到 r

console.log(calculator2.add(2, 3));       // 5
console.log(calculator2.multiply(2, 3));  // 6
