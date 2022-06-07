import "dotenv/config";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "hardhat-deploy";
import { HardhatUserConfig } from "hardhat/config";

const httpHeaders = {
  'Authorization': 'Basic ' + Buffer.from(process.env.ACCESS_KEY_ID + ':' + process.env.SECRET_ACCESS_KEY).toString('base64'),
}

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.0',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      }
    }
  },
  namedAccounts: {
    deployer: 0,
  },
  networks: {
    hardhat: {},
    cypress: {
      url: process.env.CYPRESS_HOST,
      httpHeaders,
      accounts: [
        process.env.DEPLOYER || ''
      ],
      chainId: 8217,
      gas: 7500000,
    },
    baobab: {
      url: process.env.BAOBAB_HOST,
      httpHeaders,
      accounts: [
        process.env.DEPLOYER || ''
      ],
      chainId: 1001,
      gas: 7500000,
    },
  },
  mocha: {
    timeout: 20000
  }
}

export default config;
