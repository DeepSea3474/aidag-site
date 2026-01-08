import { useState, useEffect } from "react";
import { Contract } from "ethers";
import PresaleABI from "../abi/Presale.json";       // Presale ABI dosyan
import { provider } from "../lib/provider";         // Provider tanımın
import Layout from "../components/Layout";
import WalletButton from "../components/WalletButton";
import { TREASURY_ADDRESS } from "../lib/config";
import { getBalance } from "../lib/aidag";
import useTranslation from "../lib/useTranslation";

// ✅ Env guard
const presaleAddress = process.env.NEXT_PUBLIC_PRESALE_CONTRACT;
if (!presaleAddress) {
  throw new Error("❌ NEXT_PUBLIC_PRESALE_CONTRACT not defined in environment variables");
}

// ✅ Contract init
const presaleContract = new Contract(presaleAddress, PresaleABI, provider);

export default function Presale() {
  const { t } = useTranslation();
  const [treasuryBal, setTreasuryBal] = useState("");
  const [userAddr, setUserAddr] = useState(null);

  async function loadTreasuryBalance() {
    const bal = await getBalance(TREASURY_ADDRESS);
    setTreasuryBal(bal);
  }

  useEffect(() => {
    loadTreasuryBalance();
  }, []);

  return (
    <Layout>
      <h1 className="text-2xl font-bold">{t("presaleTitle")}</h1>
      <p><b>{t("treasuryBalance")}:</b> {treasuryBal}</p>
      <WalletButton onConnected={setUserAddr} />
      <button disabled={!userAddr} className="mt-6">
        {t("buyToken")}
      </button>
    </Layout>
  );
}
</Layout>
  );
}   // ✅ Bu fonksiyonun kapanış parantezi

