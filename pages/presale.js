import { ethers } from "ethers";
import PresaleABI from "../abi/Presale.json";
import { provider } from "../lib/provider";

// Env test log
console.log("Presale contract env:", process.env.NEXT_PUBLIC_PRESALE_CONTRACT);

// Presale contract address
const presaleAddress = process.env.NEXT_PUBLIC_PRESALE_CONTRACT;

if (!presaleAddress || presaleAddress.length !== 42) {
  throw new Error("Presale contract address is missing or invalid");
}

// Presale contract instance
const presaleContract = new ethers.Contract(
  presaleAddress,
  PresaleABI,
  provider
);

// Other env variables
const daoWallet = process.env.NEXT_PUBLIC_DAO_WALLET;
const founderWallet = process.env.NEXT_PUBLIC_FOUNDER_WALLET;
const operationWallet = process.env.NEXT_PUBLIC_OPERATION_WALLET;
const tokenContract = process.env.NEXT_PUBLIC_TOKEN_CONTRACT;

export default function Presale() {
  return (
    <div>
      <h1>Presale</h1>
      <p>Contract: {presaleAddress}</p>
      <p>DAO Wallet: {daoWallet}</p>
      <p>Founder Wallet: {founderWallet}</p>
      <p>Operation Wallet: {operationWallet}</p>
      <p>Token Contract: {tokenContract}</p>
    </div>
  );
}

