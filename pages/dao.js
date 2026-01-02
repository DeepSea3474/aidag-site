import Layout from "../components/Layout";
import useTranslation from "../lib/useTranslation";

export default function DAO() {
  const { t } = useTranslation();

  return (
    <Layout>
      <h1 className="text-2xl font-bold">{t("dao")}</h1>
      <p className="mt-4">
        Here you can create proposals, vote, and execute decisions directly on-chain.
      </p>
      <div className="mt-6">
        <button className="bg-green-600 text-white px-4 py-2 rounded">Create Proposal</button>
        <button className="ml-4 bg-yellow-600 text-white px-4 py-2 rounded">Vote</button>
        <button className="ml-4 bg-red-600 text-white px-4 py-2 rounded">Execute</button>
      </div>
    </Layout>
  );
}

