require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remain method inflict kitten sugar spirit'; 
let testAccounts = [
"0xe64cb29607fdb4d550154bfe668cc7411ccabc829bb79549ffd5df7a187f0e07",
"0xe3d7bf1ba348987a6067313d0bcabd4016ea97738b3d441dd3e8e73538c948b3",
"0x47de4395c45abb527c3215c3cb3bd35956609f05eae481112bd680fa360df1e5",
"0xf05152d62c0957a18bb089cf1eb714c77bc727b1241ed3fc736173bbe5f3acb7",
"0xe1f576c6e96aa52ae8c28c8a99f84b90c59f036783c28b8d7923969ca1fa648c",
"0xf52f9bc11b959779615d57ba7c0484f44f7adb3feff9df4578e60ce485637837",
"0xfd765c37db4345e2a2173833e176fc63c1e224e52c9e7cbc46313615b04171d7",
"0xb45bfb10973941230b1bb66dcd6607beb3900d6eca096f9ec7e647ffc1f2d799",
"0x90a5a1a2fa29559d98d4e5b8ba1d0ad1ed5c552b2de10767dd82573e9c470552",
"0x69a00ca9d8d3b9e8bb91c5cb6f01fd5e8d7e305b46f23c1bcb817d5ecc22f5fe"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
