require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const KLAY_URL = process.env.KLAY_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.17",
  networks: {
    baobab: {
      url: KLAY_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};