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

console.log(dom.window.Location);
console.log(dom.window.navigator.userAgent);
console.log(dom.window.document.referrer);