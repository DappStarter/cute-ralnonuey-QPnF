require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom produce bone foot champion renew rifle universe install cloth equal genuine'; 
let testAccounts = [
"0xf4c8dfdee4afdf452e4fd2b94d4d1eb55291774b9c8a1f4c4fab19e8ac400d06",
"0x28eae253f1b7771c17e4026532dba58293103fe7486fa9648fdd66b77046e89c",
"0x7f3d438bb95d985472a62d8732426719a735775efe8e3ae0635bf9f261943969",
"0x560159cd8adfc2362bb68accae95c72d419bf762ac3d4a4f142e420de8068878",
"0xf207ca403a6ae1b7c23711a7d53e4f2a1b57267ea87c953a2028c447f3554f6c",
"0xe24537065837e0fae92b24fd910a0643320f8f0e27523c9ce7d596f0d6d25786",
"0x2aaae9f9e28f3c74ebc7c98f18bf2eb5afcd992213531d6c45070a8b4fc71524",
"0x1939580a73ca49de415d919c55733b9dba75918e3a15c9270126fe553a73106a",
"0x07da0271dc0dfd59c0a60d3b465d6370296c78bbcd5f0d8db938f03d5ffdb734",
"0xa16ca6d28b1b7a3a58847548eb1f47b8ef9defd2b129742cf8c77a99b4b7bb26"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

