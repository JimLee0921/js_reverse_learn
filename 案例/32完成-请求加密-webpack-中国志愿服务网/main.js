require('./source_webpack')

// var r = loader('mvHQ'),
//     i = loader.n(r),
//     o = loader('C4MV'),
//     a = loader.n(o)

var ccc = loader('KvKp').c()

function encrypt(data){
    return ccc.encrypt(data)
}

console.log(encrypt('{"pageNum":2,"pageSize":12,"itemtag":"","itemcategory":"","albx0072":"4","albx0072A":null,"albx0024":"","albx0004":"","albx0005":"","albx0013":"","albx0021":"000000000000000000","albx0014":"","albx0002":"","albx0009":"","code":"4"}'))