/**
 * JS 中的 exports 是 模块系统的一部分，主要用在 CommonJS 模块规范 中（尤其是 Node.js）。它用来导出模块内容，让其他文件可以 require() 使用。
 * 一个模块就是一个 JS 文件，每个文件默认是一个独立作用域。你想把一个模块里的函数/变量/类等导出，给其他地方用，就得用 exports 或 module.exports。
 */

console.log((exports === module.exports)); // true ✅

//  用法一：通过 exports 导出多个属性（常用）

// math.js


// index.js

