"use client";

import dyn from "next/dynamic";

// Bu satır sayfanın prerender edilmesini engeller
export const dynamic = "force-dynamic";

function HomePage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to Aidag Chain</h1>
      <p>Resmi kontrat adresi: 0xe6B06f7C63F6AC84729007ae8910010F6E721041</p>
      <p>Token satın almak için üst menüden <strong>Buy Aidag Token</strong> sayfasına gidin.</p>
    </div>
  );
}

// SSR tamamen kapatıldı → sadece client tarafında render
export default dyn(() => Promise.resolve(HomePage), { ssr: false });
