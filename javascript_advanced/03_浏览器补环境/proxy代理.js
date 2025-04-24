// 补环境让本地 Node.js 环境尽量“像浏览器”一样，方便执行/调试/还原前端代码逻辑。
// JavaScript中的Proxy是一种内置对象，它允许你在访问或操作对象之前拦截和自定义底层操作的行为。通过使用Proxy，你可以修改对象的默认行为，添加额外的逻辑或进行验证，以实现更高级的操作和控制。
// Proxy对象包装了另一个对象(目标对象)，并允许你定义一个处理程序(handler)来拦截对目标对象的操作。处理程序是一个带有特定方法的对象，这些方法被称为“捕获器"(traps)，它们会在执行相应的操作时被调用。

const target = {
    name: "Tuo Lee"
};

const handler = {
    get: function (target, property, receiver) {
        /*
        *   target	    原始对象，也就是被代理的对象，比如原始的 window 或 document
        *   property	当前访问的属性名，比如 "name"、"title"
        *   receiver	一般是代理对象本身（就是 proxy），也用于继承链中调用时作为 this 的绑定对象
        */
        console.log(`读取属性：${property}`);
        return property in target ? target[property] : "属性不存在";
    },
    set: function (target, property, value, receiver) {
        /*
        *  target	原始对象，也就是被代理的对象
        *  property	被赋值的属性名，比如 "age"
        *  value	要设置的新值，比如 30
        *  receiver	通常是代理对象本身，用于在原型链赋值时作为 this 的绑定对象
        */
        console.log(`设置属性：${property}=${value}`);
        target[property] = value;
        return true;
    }
};

const proxy = new Proxy(target, handler);

console.log(proxy.name);      // 打印：读取属性：name → Tuo Lee
console.log(proxy.age);       // 打印：读取属性：age → 属性不存在
proxy.age = 30;               // 打印：设置属性：age=30
