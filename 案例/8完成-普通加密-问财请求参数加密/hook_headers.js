// 原生 ajax 是通过 XMLHttpRequest -> 浏览器发送 ajax


func_ = window.XMLHttpRequest.prototype.setRequestHeader;

window.XMLHttpRequest.prototype.setRequestHeader = function (name, value) {
    if (name === 'hexin-v') {
        debugger;
    }
    return func_.apply(this, [name, value]);
}