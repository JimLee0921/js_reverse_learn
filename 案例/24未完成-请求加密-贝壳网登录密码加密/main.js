require('./env')
require('./source_webpack')

o = window.loader(62).default();
// o.publicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCJxBJn2gY+D2OdldUxpsNwIGyKc/QRvqbWWGIdIewE7SxyyGHNcLdT+2bb6E6Ko7jBlEElUBkKJJ93G761dp6pXu7ORTjJ1mta99Bjud7+u/3473mG+QReoH4ux8idsd+E0TW0HWUP6zyfYy42HPSaN3pjetM30sVazdWxpvAH6wIDAQAB'
console.log(o.ec.encrypt("2123141"))