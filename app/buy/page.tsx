"use client";

import { useState } from "react";
import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0xe6B06f7C63F6AC84729007..."; // resmi kontrat adresini buraya tam yaz
const CONTRACT_ABI = [
  {
    type: "function",
    name: "buyToken",
    stateMutability: "payable",
    inputs: [
      { name: "to", type: "address" },
      { name: "amount", type: "uint256" }
    ],
    outputs: []
  }
];

export default function BuyPage() {
  const [account, setAccount] = useState<string | null>(null);
  const [amount, setAmount] = useState("");

  async function connectWallet() {
    if (typeof window.ethereum !== "undefined") {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setAccount(accounts[0]);
      } catch (err) {
        console.error("Wallet connection failed:", err);
      }
    } else {
      alert("No wallet found. Please install MetaMask or use WalletConnect.");
    }
  }

  async function buyTokens() {
    if (!account) {
      alert("Please connect your wallet first.");
      return;
    }
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

      const tx = await contract.buyToken(account, ethers.parseUnits(amount, 18), {
        value: ethers.parseEther("0.01") // örnek olarak 0.01 ETH gönderiliyor
      });
      await tx.wait();
      alert("Transaction successful!");
    } catch (err) {
      console.error("Transaction failed:", err);
    }
  }

  return (
    <div>
      <h1>Buy Aidag</h1>
      <button onClick={connectWallet}>
        {account ? `Connected: ${account}` : "Connect Wallet"}
      </button>
      <div>
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={buyTokens}>Buy Tokens</button>
      </div>
    </div>
  );
}
