import { useWriteContract } from "wagmi";

// Resmi Aidag kontrat adresi
const contractAddress = "0xe6B06f7C63F6AC84729007ae8910010F6E721041";

// DAO cüzdan adresi (ön satış tokenleri burada mühürlü)
const daoAddress = "0xC16eC985D98Db96DE104Bf1e39E1F2Fdb9a712E9";

// Kontrat ABI (tam JSON)
const contractABI = [
  {"inputs":[],"stateMutability":"nonpayable","type":"constructor"},
  {"anonymous":false,"inputs":[
    {"indexed":true,"internalType":"address","name":"owner","type":"address"},
    {"indexed":true,"internalType":"address","name":"spender","type":"address"},
    {"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],
    "name":"Approval","type":"event"},
  {"anonymous":false,"inputs":[
    {"indexed":true,"internalType":"address","name":"from","type":"address"},
    {"indexed":true,"internalType":"address","name":"to","type":"address"},
    {"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],
    "name":"Transfer","type":"event"},
  {"inputs":[
    {"internalType":"address","name":"","type":"address"},
    {"internalType":"address","name":"","type":"address"}],
    "name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],
    "stateMutability":"view","type":"function"},
  {"inputs":[
    {"internalType":"address","name":"spender","type":"address"},
    {"internalType":"uint256","name":"value","type":"uint256"}],
    "name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],
    "stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"address","name":"","type":"address"}],
    "name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],
    "stateMutability":"view","type":"function"},
  {"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],
    "stateMutability":"view","type":"function"},
  {"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],
    "stateMutability":"view","type":"function"},
  {"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],
    "stateMutability":"view","type":"function"},
  {"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],
    "stateMutability":"view","type":"function"},
  {"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],
    "stateMutability":"view","type":"function"},
  {"inputs":[
    {"internalType":"address","name":"to","type":"address"},
    {"internalType":"uint256","name":"value","type":"uint256"}],
    "name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],
    "stateMutability":"nonpayable","type":"function"},
  {"inputs":[
    {"internalType":"address","name":"from","type":"address"},
    {"internalType":"address","name":"to","type":"address"},
    {"internalType":"uint256","name":"value","type":"uint256"}],
    "name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],
    "stateMutability":"nonpayable","type":"function"}
];

export function useBuyTokens() {
  const { writeContract } = useWriteContract();

  const buyTokens = async (userAddress: string, amount: bigint) => {
    await writeContract({
      address: contractAddress,
      abi: contractABI,
      functionName: "transferFrom",
      args: [daoAddress, userAddress, amount]
    });
  };

  return { buyTokens };
}
