require("@nomicfoundation/hardhat-toolbox");

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  network: {
    testnet:{
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97
    }
  }
};
