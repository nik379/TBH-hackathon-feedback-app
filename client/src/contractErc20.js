//import the Nest SDK
const { ERC20 } = require('@nest25/evm-chains-lib');

// create a new instance of the ERC20 class
const erc20 = new ERC20();

// define the main function
const main = async () => {
    // call the deployContract method
    const result = await erc20.deployContract('klay','e04f31664c36bfd191b8884bad043fbed0f9da89f9d37c1ab38603bc77e5cd5b',5000,"finalTEST","TEST");

    // print the receipt
    console.log(`Contract deployed at ${result.contract.address}`);
};
// call the main function
main();

//contract deployed at 0x4133AeFd43d59F8916b3f3BeF148d71aaEFF53B1