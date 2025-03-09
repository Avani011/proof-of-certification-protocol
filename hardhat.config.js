// hardhat.config.js
require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');
require('solidity-coverage');
require('dotenv').config();

// Load environment variables or set defaults
const PRIVATE_KEY = process.env.PRIVATE_KEY || '0x0000000000000000000000000000000000000000000000000000000000000000';
const EDU_CHAIN_RPC_URL = process.env.EDU_CHAIN_RPC_URL || 'https://testnet-rpc.educhain.io';
const EDU_CHAIN_EXPLORER_API = process.env.EDU_CHAIN_EXPLORER_API || 'https://api-testnet.educhain.io/api';
const EDU_CHAIN_EXPLORER = process.env.EDU_CHAIN_EXPLORER || 'https://testnet-explorer.educhain.io';

module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    educhain: {
      url: EDU_CHAIN_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 12345, // Replace with actual EDU Chain testnet chain ID
      gasPrice: 20000000000 // 20 gwei
    }
  },
  etherscan: {
    // EDU Chain explorer API settings, if they have one
    apiKey: {
      educhain: process.env.EDUCHAIN_API_KEY || ''
    },
    customChains: [
      {
        network: "educhain",
        chainId: 12345, // Replace with actual EDU Chain testnet chain ID
        urls: {
          apiURL: EDU_CHAIN_EXPLORER_API,
          browserURL: EDU_CHAIN_EXPLORER
        }
      }
    ]
  },
  paths: {
    sources: "./contracts",
    tests: "./contracts/test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
};