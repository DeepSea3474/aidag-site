import { ethers } from "ethers";
import abi from "./AidagABI.json";
import { RPC_URL, TOKEN_ADDRESS } from "./config";

const provider = new ethers.JsonRpcProvider(RPC_URL);
export const aidagContract = new ethers.Contract(TOKEN_ADDRESS, abi, provider);

export async function getTokenDecimals() {
  return await aidagContract.decimals();
}

export async function getBalance(address) {
  const bal = await aidagContract.balanceOf(address);
  const dec = await getTokenDecimals();
  return ethers.formatUnits(bal, dec);
}

