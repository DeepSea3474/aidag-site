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
const operationWallet = process.env.NEXT_PUBLIC_OPERATION_WALLET;
const tokenContract = process.env.NEXT_PUBLIC_TOKEN_CONTRACT;

// ✅ Default export edilen React component
export default function Presale() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Presale Dashboard</h1>
      <p><strong>DAO Wallet:</strong> {daoWallet}</p>
      <p><strong>Founder Wallet:</strong> {founderWallet}</p>
      <p><strong>Operation Wallet:</strong> {operationWallet}</p>
      <p><strong>Token Contract:</strong> {tokenContract}</p>
      <p><strong>Presale Contract:</strong> {presaleAddress}</p>
    </div>
  );
}

