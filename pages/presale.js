import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import WalletButton from "../components/WalletButton";
import { TREASURY_ADDRESS } from "../lib/config";
import { getBalance } from "../lib/aidag";
import useTranslation from "../lib/useTranslation";

export default function Presale() {
  const { t } = useTranslation();
  const [treasuryBal, setTreasuryBal] = useState("-");
  const [userAddr, setUserAddr] = useState(null);

  async function loadTreasuryBalance() {
    const bal = await getBalance(TREASURY_ADDRESS);
    setTreasuryBal(bal);
  }

  useEffect(() => { loadTreasuryBalance(); }, []);

  return (
    <Layout>
      <h1 className="text-2xl font-bold">{t("presale")}</h1>
      <p><b>{t("treasuryBalance")}:</b> {treasuryBal}</p>
      <WalletButton onConnected={setUserAddr} />
      <button disabled={!userAddr} className="mt-6 bg-blue-600 text-white px-4 py-2 rounded">
        {t("buyToken")}
      </button>
    </Layout>
  );
}

