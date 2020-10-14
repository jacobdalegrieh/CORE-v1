const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
module.exports = {
    networks: {
        kovan: {
            provider: function() {
                new HDWalletProvider(MNEMONIC = "oval merit shop cancel unlock aerobic border survey series sniff cricket return",
                    `https://kovan.infura.io/d1e42319efe449c5b2a63687b8708991`
                )
            },
            network_id: 42,
            gas: 4600000,
        },
        //     mainnet: {
        //         provider: mainnetProvider,
        //         network_id: 1,
        //         gas: 9999999,
        //         gasPrice: 100000000000
        //     }
    },
    compilers: {
        solc: {
            version: "0.6.12",
            docker: false,
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200
                },
                evmVersion: "byzantium"
            }
        }
    }
};