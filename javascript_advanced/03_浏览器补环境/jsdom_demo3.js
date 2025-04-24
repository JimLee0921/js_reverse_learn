const jsdom = require('jsdom');
const {JSDOM} = jsdom;

const resourceLoader = new jsdom.ResourceLoader({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36'
})

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hello World</title>
</head>
<body>
    <div id="app">
        <div>Hello World</div>
    </div>
</body>
</html>`

const dom = new JSDOM(html, {
    url: 'https://www.toutiao.com',
    refererrer: 'https://www.toutiao.com',
    contentType: 'text/html',
    resources: resourceLoader
});
// 有些不是使用window就是把对象挂载到了global，可以指定window为global进行使用
window = global;
const params = {
    location: {
        "ancestorOrigins": {},
        "href": "https://www.toutiao.com/",
        "origin": "https://www.toutiao.com",
        "protocol": "https:",
        "host": "www.toutiao.com",
        "hostname": "www.toutiao.com",
        "port": "",
        "pathname": "/",
        "search": "",
        "hash": ""
    },
    navigator: {
        "appCodeName": "Mozilla",
        "appName": "Netscape",
        "appVersion": "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    }
}
// Object.assign(param1, param2) 可以吧参数2合并到参数1
Object.assign(global, params)

console.log(location.href);
console.log(window.navigator.appVersion);