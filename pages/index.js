import Layout from "../components/Layout";
import useTranslation from "../lib/useTranslation";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Layout>
      <h1 className="text-3xl font-bold">{t("title")}</h1>
      <p className="mt-4">
        Autonomous, transparent and AI-powered DAO platform.  
        Presale, liquidity, staking and bonus operations run automatically on-chain.
      </p>
      <div className="mt-6">
        <a href="/presale" className="text-blue-600 underline">{t("presale")}</a> |{" "}
        <a href="/dao" className="text-blue-600 underline">{t("dao")}</a> |{" "}
        <a href="/docs" className="text-blue-600 underline">{t("docs")}</a>
      </div>
    </Layout>
  );
}

