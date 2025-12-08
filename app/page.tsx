"use client";

import dynamic from "next/dynamic";

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

export default dynamic(() => Promise.resolve(HomePage), { ssr: false });

