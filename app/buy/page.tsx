"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// ethers'i client-side import et
const { ethers } = require("ethers");

const CONTRACT_ADDRESS = "0xe6B06f7C63F6AC84729007ae8910010F6E721041";
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

function BuyPage() {
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");

  async function handleBuy() {
    try {
      if (typeof window === "undefined" || !window.ethereum) {
        setStatus("MetaMask gerekli!");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

      const userAddress = await signer.getAddress();
      const value = ethers.parseEther(amount);

      const tx = await contract.buyToken(userAddress, value, { value });
      setStatus("İşlem gönderildi: " + tx.hash);

      await tx.wait();
      setStatus("Token satın alındı!");
    } catch (err: unknown) {
      console.error(err);
      if (err instanceof Error) {
        setStatus("Hata: " + err.message);
      } else {
        setStatus("Bilinmeyen hata");
      }
    }
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Buy Aidag Token</h1>
      <input
        type="text"
        placeholder="Miktar (ETH)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ marginRight: "1rem" }}
      />
      <button onClick={handleBuy}>Satın Al</button>
      <p>{status}</p>
    </div>
  );
}

// Dinamik export → SSR sırasında yüklenmez
export default dynamic(() => Promise.resolve(BuyPage), { ssr: false });
