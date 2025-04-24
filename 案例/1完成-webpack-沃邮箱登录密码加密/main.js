require('./source_loader')
require('./source_module')


function getEncryptedPassword(password) {
    e = "9987a2b680cb1a63dccf4876a9c36e00ab87190275ff66497972ccb755eef4c94f571b7b1fe98fb01e6644116e46183bf3f9e2188fb5767e6671f29f44ed9e6ae2d41bea9c1507eed0c9094f19c2156a1a80bee81e26481794a8a54c762a3b085e369c2f860086ef25dd06f62666b9e1d6f466b7c19f084a79be393d132df4e5";
    n = "10001";
    return window.loader(437).encrypt(password, e, n);
}