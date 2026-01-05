import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0xe6B06f7C63F6AC84729007ae8910010F6E721041";

const CONTRACT_ABI = [
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address owner) view returns (uint256)"
];

export default async function handler(req, res) {
  try {
    const provider = new ethers.JsonRpcProvider("https://bsc-dataseed.binance.org/");
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);

    const supply = await contract.totalSupply();

    res.status(200).json({ totalSupply: supply.toString() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Kontrata bağlanırken hata oluştu" });
  }
}
