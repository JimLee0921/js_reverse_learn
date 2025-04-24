require('./source_loader')
require('./source_module')




function genSign(data) {
    return window.loader('W2Yj')(data)
}
// data = {
//     "os": "web",
//     "sv": "8.4.6",
//     "app": "CailianpressWeb"
// }
// console.log(genSign(data));