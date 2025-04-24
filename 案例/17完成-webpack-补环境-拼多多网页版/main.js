require('./env')
require('./source_module1.js')
require('./source_module2.js')
require('./source_loader.js')

function genAntiContent() {
    // 初始化
    window.loader('fbeZ');
    // 这里更新时间戳
    window.lt['updateServerTime'](new Date().getTime());
    return window.dt();

}


console.log(genAntiContent());
//
// console.log(123)