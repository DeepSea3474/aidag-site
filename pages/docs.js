import Layout from "../components/Layout";
import { TOKEN_ADDRESS, TREASURY_ADDRESS, GOVERNANCE_ADDRESS, FOUNDER_ADDRESS } from "../lib/config";
import useTranslation from "../lib/useTranslation";

export default function Docs() {
  const { t } = useTranslation();

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">{t("docs")}</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">{t("contractAddresses")}</h2>
        <ul className="list-disc ml-6 mt-2">
          <li><b>Token Contract:</b> {TOKEN_ADDRESS}</li>
          <li><b>Treasury (SoulwareAI + DAO):</b> {TREASURY_ADDRESS}</li>
          <li><b>Governance Contract:</b> {GOVERNANCE_ADDRESS}</li>
          <li><b>Founder Wallet:</b> {FOUNDER_ADDRESS}</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">{t("tokenomicsRules")}</h2>
        <p className="mt-2">{t("tokenomicsText")}</p>
        <ul className="list-disc ml-6 mt-2">
          <li>{t("rule40")}</li>
          <li>{t("rule60")}</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">{t("transparency")}</h2>
        <p className="mt-2">{t("transparencyText")}</p>
      </section>
    </Layout>
  );
}

