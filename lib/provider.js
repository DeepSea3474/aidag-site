import { ethers } from "ethers";

export const bscProvider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_BSC_RPC);
export const ethProvider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_ETH_RPC);

