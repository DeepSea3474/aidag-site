import { ethers } from "ethers";
import abi from "./AidagABI.json";

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
const rpcUrl = process.env.NEXT_PUBLIC_RPC_URL;

const provider = new ethers.JsonRpcProvider(rpcUrl);

export const aidagContract = new ethers.Contract(contractAddress, abi, provider);

export async function getTokenDecimals() {
  return await aidagContract.decimals();
}

export async function getBalance(address) {
  const bal = await aidagContract.balanceOf(address);
  const dec = await getTokenDecimals();
  return ethers.formatUnits(bal, dec);
}
