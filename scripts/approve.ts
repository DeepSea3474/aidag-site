import { ethers } from "ethers";
import contractABI from "../lib/contractABI.json";

async function main() {
  const provider = new ethers.JsonRpcProvider("https://bsc-dataseed.binance.org/");
  const wallet = new ethers.Wallet(process.env.DAO_PRIVATE_KEY!, provider);

  const contractAddress = "0xe6B06f7C63F6AC84729007ae8910010F6E721041";
  const contract = new ethers.Contract(contractAddress, contractABI, wallet);

  const amount = ethers.parseUnits("1000000", 18); // örnek: 1,000,000 AIDAG

  const tx = await contract.approve(contractAddress, amount);
  console.log("Approve tx sent:", tx.hash);

  await tx.wait();
  console.log("Approve confirmed!");
}

main().catch(console.error);
