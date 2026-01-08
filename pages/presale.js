import { ethers } from "ethers";
import PresaleABI from "../abi/Presale.json";
import { provider } from "../lib/provider";

const presaleAddress = process.env.NEXT_PUBLIC_PRESALE_CONTRACT;

if (!presaleAddress || presaleAddress.length !== 42) {
  throw new Error("Presale contract address is missing or invalid");
}

const presaleContract = new ethers.Contract(
  presaleAddress,
  PresaleABI,
  provider
);

const daoWallet = process.env.NEXT_PUBLIC_DAO_WALLET;
const founderWallet = process.env.NEXT_PUBLIC_FOUNDER_WALLET;
const tokenContract = process.env.NEXT_PUBLIC_TOKEN_CONTRACT;
const operationWallet = process.env.NEXT_PUBLIC_OPERATION_WALLET;

const presaleStage1 = parseFloat(process.env.NEXT_PUBLIC_PRESALE_STAGE1);
const presaleStage2 = parseFloat(process.env.NEXT_PUBLIC_PRESALE_STAGE2);
const listingPrice = parseFloat(process.env.NEXT_PUBLIC_LISTING_PRICE);
const tokenSupply = parseInt(process.env.NEXT_PUBLIC_TOKEN_SUPPLY, 10);
const presaleTarget = parseInt(process.env.NEXT_PUBLIC_PRESALE_TARGET, 10);

export {
  presaleContract,
  daoWallet,
  founderWallet,
  tokenContract,
  operationWallet,
  presaleStage1,
  presaleStage2,
  listingPrice,
  tokenSupply,
  presaleTarget
};

