// Promise 是 JavaScript 中用来处理异步操作的一种方式
// 它可以更优雅地处理像网络请求、定时器等耗时任务，避免“回调地狱”（callback hell）

// 基础语法
new Promise((resolve, reject) => {
  // 异步操作
  if (成功) {
    resolve(结果);
  } else {
    reject(错误信息);
  }
});