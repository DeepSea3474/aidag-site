"use client";

import { useState } from "react";
import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0xe6B06f7C63F6AC84729007..."; // buraya gerçek adresini yaz
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
  const [amount, setAmount] = useState("");

  async function handleBuy() {
    if (!window.ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    // ✅ 'any' yerine 'unknown' kullandık
    const provider = new ethers.BrowserProvider(window.ethereum as unknown);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

    try {
      const tx = await contract.buyToken(
        await signer.getAddress(),
        ethers.parseUnits(amount, 18),
        { value: ethers.parseEther("0.01") }
      );
      await tx.wait();
      alert("Transaction successful!");
    } catch (err) {
      console.error(err);
      alert("Transaction failed!");
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Buy Aidag Token</h1>
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 mr-2"
      />
      <button
        onClick={handleBuy}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Buy
      </button>
    </div>
  );
}
