/**
 * 三元运算符
 * condition ? exprIfTrue : exprIfFalse
 */

// var a = 100;
// var b = 200;
//
// var c = a > b ? a : b;
//
// console.log(c)

var a = 10;
var b = 20;
var d = 17;
var c = 5

var e;
var m;
e = (e = a > 3 ? b : c, m = e < b++ ? c-- : a = 3 > b % d ? 27 : 37, m++)
console.log(e, c, m)