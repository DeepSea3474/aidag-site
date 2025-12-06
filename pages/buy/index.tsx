"use client";

import { useState } from "react";
import { ethers } from "ethers";

// Kontrat bilgileri
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

export default function BuyPage() {
  const [account, setAccount] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");

  async function connectWallet() {
    if (typeof window !== "undefined" && (window as unknown as { ethereum?: unknown }).ethereum) {
      try {
        const ethereum = (window as unknown as { ethereum: any }).ethereum;
        const accounts: string[] = await ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
        setStatus("Wallet connected");
      } catch (err: unknown) {
        const error = err as Error;
        setStatus(error.message || "Wallet connection failed");
      }
    } else {
      setStatus("MetaMask yüklü değil. Lütfen tarayıcınıza ekleyin.");
    }
  }

  async function buyToken() {
    try {
      if (!account) {
        setStatus("Önce cüzdanı bağla.");
        return;
      }

      const ethereum = (window as unknown as { ethereum: any }).ethereum;
      const provider = new ethers.BrowserProvider(ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

      const tx = await contract.buyToken(account, ethers.parseUnits("100", 18), {
        value: ethers.parseEther("0.1")
      });

      setStatus("İşlem gönderildi, bekleniyor...");
      await tx.wait();
      setStatus(`İşlem tamamlandı: ${tx.hash}`);
    } catch (err: unknown) {
      const error = err as Error;
      setStatus(error.message || "İşlem başarısız");
    }
  }

  return (
    <main className="min-h-screen bg-white text-black p-8">
      <h1 className="text-3xl font-bold mb-4">Buy Aidag</h1>
      <p className="mb-4">
        MetaMask ile bağlanıp akıllı kontrat üzerinden Aidag satın alabilirsiniz.
      </p>

      <div className="mb-4">
        {account ? (
          <div className="p-4 bg-green-100 rounded">
            <p className="mb-2">Bağlı hesap:</p>
            <p className="font-mono">{account}</p>
          </div>
        ) : (
          <button onClick={connectWallet} className="px-4 py-2 bg-blue-600 text-white rounded">
            Connect Wallet
          </button>
        )}
      </div>

      <div className="mb-4">
        <button
          onClick={buyToken}
          className="px-4 py-2 bg-indigo-600 text-white rounded"
          disabled={!account}
        >
          Aidag Satın Al
        </button>
      </div>

      {status && (
        <div className="p-3 bg-gray-100 rounded text-sm">
          <span className="font-semibold">Durum: </span>{status}
        </div>
      )}
    </main>
  );
}
