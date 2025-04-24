/**
 * 用户2的js代码
 */
// 此函数的作用是为了产生一个局部空间，避免全局变量的污染
!function () {
    var name = "Rose";
    console.log("这里是的用户是: " + name);

    // 放这里是为了安全，外部不可以调用，但是可以使用 window 进行提升
    function encrypt() {
        console.log(name + "的加密函数")
    }

    function aesEncrypt() {
        console.log(name + "的AES加密函数")
    }

    function desEncrypt() {
        console.log(name + "的DES加密函数")
    }

    function md5Encrypt() {
        console.log(name + "的RSA加密函数")
    }

    function base64() {
        console.log(name + "的RSA加密函数")
    }

    // window.JimLeeEncrypt = encrypt; // 暴露给外部调用
    // 可以使用对象封装进行外部简化调用
    window.encryptFuncs = {
        encrypt,
        aesEncrypt,
        desEncrypt,
        md5Encrypt,
        base64
    }
}()


// 还可以使用return
window.encryptFuncs = (function () {
    var name = "Rose";
    console.log("这里是的用户是: " + name);

    // 放这里是为了安全，外部不可以调用，但是可以使用 window 进行提升
    function encrypt() {
        console.log(name + "的加密函数")
    }

    function aesEncrypt() {
        console.log(name + "的AES加密函数")
    }

    function desEncrypt() {
        console.log(name + "的DES加密函数")
    }

    function md5Encrypt() {
        console.log(name + "的RSA加密函数")
    }

    function base64() {
        console.log(name + "的RSA加密函数")
    }

    return {
        encrypt,
        aesEncrypt,
        desEncrypt,
        md5Encrypt,
        base64
    }
}())