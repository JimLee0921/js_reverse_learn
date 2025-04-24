/**
 * 用户1的js代码
 */
// 此函数的作用是为了产生一个局部空间，避免全局变量的污染
!function () {
    var name = "JimLee";
    console.log("这里是的用户是: " + name)

    // 使用外部函数
    window.encryptFuncs.encrypt();
    window.encryptFuncs.base64();
    window.encryptFuncs.aesEncrypt();
    window.encryptFuncs.desEncrypt();

}()