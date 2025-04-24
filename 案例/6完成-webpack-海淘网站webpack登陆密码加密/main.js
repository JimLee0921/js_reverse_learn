// 1. 导入加载模块和相关包依赖
require('./source1.js');
require('./source2.js');

// 2. 使用挂载到 window 的全局变量调用其函数
function getEncryptedPassword(password) {
    return window.loader('MuMZ').b(password);
}

// console.log(getEncryptedPassword('123456'));
