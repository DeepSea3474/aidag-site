import { useWriteContract } from "wagmi";
import abi from "./abi.json"; // kendi ABI dosyanı buraya koy

export function BuyTokenButton() {
  const { writeContract } = useWriteContract();

  const handleBuy = async () => {
    await writeContract({
      address: "0xe6B06f7C63F6AC84729007ae8910010F6E721041", // resmi kontrat adresi
      abi,
      functionName: "transferFrom",
      args: [
        "0xUSER_ADDRESS", 
        "0xC16eC985D98Db96DE104Bf1e39E1F2Fdb9a712E9", // DAO adresi
        1000
      ]
    });
  };

  return <button onClick={handleBuy}>Buy Aidag</button>;
}
