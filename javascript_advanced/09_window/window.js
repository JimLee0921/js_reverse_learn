/**
 * 在浏览器中的 JavaScript 环境中，window 是全局对象，代表浏览器窗口
 * 提供了对浏览器功能的访问，是浏览器端 JavaScript 的核心部分。
 * 但是在 Node.js 环境中，情况完全不同
 * Node.js 是一个服务器端的 JavaScript 运行时，不运行在浏览器中，因此默认情况下不存在 window 对象
 */

// 下面这个代码使用 node 命令运行，会报错，因为 window 对象不存在
// 有时网站会通过 delete window 来删除 window 对象用来检测使用的环境
var myVar = 'hello';
console.log(window.myVar); // 输出 'hello'