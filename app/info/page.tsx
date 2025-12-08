"use client";

import dyn from "next/dynamic";

// Bu satır sayfanın prerender edilmesini engeller
export const dynamic = "force-dynamic";

function InfoPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Aidag Chain Info</h1>
      <p>Resmi kontrat adresi: 0xe6B06f7C63F6AC84729007ae8910010F6E721041</p>
      <p>DAO cüzdan adresi: [buraya DAO adresini ekle]</p>
      <p>Bu sayfa sadece bilgilendirme amaçlıdır. Token satın almak için <strong>Buy Aidag Token</strong> sayfasını kullanın.</p>
    </div>
  );
}

export default dyn(() => Promise.resolve(InfoPage), { ssr: false });
