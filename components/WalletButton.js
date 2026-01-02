import { useState } from "react";

export default function WalletButton({ onConnected }) {
  const [address, setAddress] = useState(null);

  async function connectWallet() {
    if (!window.ethereum) {
      alert("Metamask gerekli!");
      return;
    }
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    setAddress(accounts[0]);
    onConnected(accounts[0]);
  }

  return (
    <button onClick={connectWallet} className="bg-purple-600 text-white px-4 py-2 rounded">
      {address ? `Bağlı: ${address.slice(0,6)}...${address.slice(-4)}` : "Cüzdan Bağla"}
    </button>
  );
}

