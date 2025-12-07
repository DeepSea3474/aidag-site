"use client";

import dynamic from "next/dynamic";

function NotFoundPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>404 - Sayfa Bulunamadı</h1>
      <p>Aradığınız sayfa mevcut değil. Lütfen menüden doğru sayfaya gidin.</p>
    </div>
  );
}

// SSR tamamen kapatıldı → sadece client tarafında render
export default dynamic(() => Promise.resolve(NotFoundPage), { ssr: false });
