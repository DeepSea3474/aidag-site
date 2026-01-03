import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import WalletButton from "../components/WalletButton";
import { getBalance } from "../lib/aidag";
import useTranslation from "../lib/useTranslation";

export default function Presale() {
  const { t } = useTranslation();
  const [treasuryBal, setTreasuryBal] = useState("0");
  const [userAddr, setUserAddr] = useState(null);

  async function loadTreasuryBalance() {
    const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
    const bal = await getBalance(contractAddress);
    setTreasuryBal(bal);
  }

  useEffect(() => {
    loadTreasuryBalance();
  }, []);

  return (
    <Layout>
      <h1>{t("presale.title")}</h1>
      <p>{t("presale.treasuryBalance")}: {treasuryBal}</p>
      <WalletButton onConnect={setUserAddr} />
    </Layout>
  );
}

