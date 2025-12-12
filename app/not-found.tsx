"use client";

import nextDynamic from "next/dynamic";

// Bu satır sayfanın prerender edilmesini engeller
export const dynamic = "force-dynamic";

function NotFoundPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>404 - Sayfa Bulunamadı</h1>
      <p>Aradığınız sayfa mevcut değil. Lütfen menüden doğru sayfaya gidin.</p>
    </div>
  );
}

export default nextDynamic(() => Promise.resolve(NotFoundPage), { ssr: false });
