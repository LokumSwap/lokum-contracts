require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "1337",
    },
    testnet: {
      provider: () => new HDWalletProvider(process.env["TESTNET_PRIVATE_KEY"], "https://data-seed-prebsc-1-s1.binance.org:8545/"),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    mainnet: {
      provider: () => new HDWalletProvider(process.env["MAINNET_PRIVATE_KEY"], "https://bsc-dataseed1.binance.org/"),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  compilers: {
    solc: {
        version: "0.6.12"
    }
  }
}