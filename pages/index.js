import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Layout>
      <h1 className="text-3xl font-bold">{t("title")}</h1>
      <p className="mt-4">
        Autonomous, transparent and AI-powered DAO.
        Presale, liquidity, staking and bonus operations.
      </p>
      <div className="mt-6 space-x-4">
        <a href="/presale" className="text-blue-600 underline">Presale</a>
        <a href="/dao" className="text-blue-600 underline">DAO</a>
        <a href="/docs" className="text-blue-600 underline">Docs</a>
      </div>
    </Layout>
  );
}
