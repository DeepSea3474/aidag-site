"use client";

import { useAccount } from "wagmi";
import { Web3Button } from "@web3modal/react";
import { useBuyTokens } from "../../lib/contract";
import { useState } from "react";

export default function BuyPage() {
  const { address, isConnected } = useAccount();
  const { buyTokens } = useBuyTokens();
  const [amount, setAmount] = useState("1000");

  const handleBuy = async () => {
    const value = BigInt(parseInt(amount) * 10 ** 18);
    await buyTokens(address!, value);
  };

  return (
    <div>
      <h1>Buy Aidag Tokens</h1>
      {!isConnected ? (
        <Web3Button />
      ) : (
        <div>
          <p>Connected: {address}</p>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter token amount"
          />
          <button onClick={handleBuy}>
            Buy {amount} AIDAG
          </button>
        </div>
      )}
    </div>
  );
}
