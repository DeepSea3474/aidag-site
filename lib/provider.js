import { ethers } from "ethers";

// Binance Smart Chain provider
export const bscProvider = new ethers.JsonRpcProvider(
  process.env.NEXT_PUBLIC_BSC_RPC
);

// Ethereum provider
export const ethProvider = new ethers.JsonRpcProvider(
  process.env.NEXT_PUBLIC_ETH_RPC
);

// Default provider export (örnek: BSC)
export const provider = bscProvider;

