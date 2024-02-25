import {Signer, ethers} from "ethers"
import "./Buy.css";
import abil from "../contractJson/erc20.json"
import { BigNumber } from "ethers";
// import the Nest SDK
import { ERC20 } from '@nest25/evm-chains-lib';

const privateKey = process.env.PRIVATE_KEY;

const Buy=({state})=>{
  // create a new instance of the ERC20 class

const erc20 = new ERC20();
  const contractABIL=abil; 
  const provider = new ethers.providers.Web3Provider(ethereum);//read the Blockchain
  const signer =  provider.getSigner(); //write the blockchain

    const buyChai = async(event)=>{
      event.preventDefault();
      const {contract}=state;
      const name = document.querySelector("#name").value;
      const message = document.querySelector("#message").value;
      //const amount = document.querySelector("#amount").value;
      const amount = {value:ethers.utils.parseEther("0.001")}
      // const transaction = await contract.buyChai(name,message,amount)
      // await transaction.wait();
      
      // KLAYY transfer details (replace with your actual values)
  // const klayyTokenAddress = "0x4133AeFd43d59F8916b3f3BeF148d71aaEFF53B1"; // Replace with actual KLAYY token address
  // const klayyDecimals = 18; // Replace with actual KLAYY token decimals
  // const recipientAddress = "0x2AD3c9d50EE3f6D538934aCceB68a7F2D3eE9604"; // Replace with actual recipient contract address
  //const klayyAmount =   BigNumber.from("50").mul(10**15); // 50 KLAYY tokens (adjust decimals)
   // 50 KLAYY tokens (adjust decimals)
   //const klayyAmount = ethers.utils.parseUnits("50", 18);

   const receipt = await erc20.transfer('klay','0x4133AeFd43d59F8916b3f3BeF148d71aaEFF53B1','0x1191EcEdB2c19C5cD340bD98e6649AaeF1cB2D22',"50", "e04f31664c36bfd191b8884bad043fbed0f9da89f9d37c1ab38603bc77e5cd5b");
    //parameters of transfer function are in this order : (contract address,reciever address,no. of tokens to be transferred,private-key)

   //We have provided our private key, as "signer" or "provider" instance of etherjs is not working with NestJs SDK
      
   //await receipt.wait();
      
   // print the receipt
   console.log({ receipt });

// Create KLAYY token instance (assuming you're using ethers.js)
// const klayyToken = new ethers.Contract(klayyTokenAddress, contractABIL, signer);

// const klayyTx = await klayyToken.transfer(recipientAddress, klayyAmount);
//     await klayyTx.wait();

    const transaction = await contract.buyChai(name,message,amount)
      await transaction.wait();

      alert("Transaction is successful");
      window.location.reload();
    }
    return  (
      <div className="center">
       <h1>Thanks</h1>
        <form onSubmit={buyChai}>
          <div className="inputbox">
            <input type="text" required="required" id="name" />
            <span>Name</span>
          </div>
          <div className="inputbox">
            <input type="text" required="required" id="message" />
            <span>Message</span>
          </div>
          <div className="inputbox">
            <input type="submit" value="Pay 50 COF tokens"  disabled={!state.contract}/>
          </div>
        </form>
          
        </div>
      );
}
export default Buy;
