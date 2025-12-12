"use client";

import { useContractWrite } from "wagmi";
import abi from "./abi.json";

export default function BuyTokenButton() {
  const { write } = useContractWrite({
    address: "0xe6B06f7C63F6AC84729007ae8910010F6E721041", // resmi kontrat
    abi,
    functionName: "transferFrom",
  });

  async function handleBuy() {
    await write({
      args: [
        "0xUSER_ADDRESS",
        "0xC16eC985D98Db96DE104Bf1e39E1F2Fdb9a712E9", // DAO cüzdan
        1000
      ]
    });
  }

  return (
    <button onClick={handleBuy}>
      Buy Aidag
    </button>
  );
}
