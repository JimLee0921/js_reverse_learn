var x = function () {
    console.log("hello world");
}


// ES6 箭头函数写法
var y = () => {
    console.log("hello world");
}

// 只有一个参数可以省略括号

var z = name => {
    console.log("hello " + name);
}

// 只有一个语句可以省略大括号

var w = name => console.log("hello " + name);