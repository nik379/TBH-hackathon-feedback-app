
const hre = require("hardhat");

async function main() {
  const Chai = await hre.ethers.getContractFactory("coffee"); //fetching bytecode and ABI
  const chai = await Chai.deploy(); //creating an instance of our smart contract

  await chai.deployed();//deploying your smart contract

  console.log("Deployed contract address:",`${chai.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//0x2AD3c9d50EE3f6D538934aCceB68a7F2D3eE9604