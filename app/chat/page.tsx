"use client";

import nextDynamic from "next/dynamic";

// Bu satır sayfanın prerender edilmesini engeller
export const dynamic = "force-dynamic";

function ChatPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>SoulwareAI Chat</h1>
      <p>Burada Aidag Chain kullanıcıları için chatbot çalışır.</p>
      <p>MetaMask veya WalletConnect entegrasyonu sadece client tarafında yapılır.</p>
    </div>
  );
}

export default nextDynamic(() => Promise.resolve(ChatPage), { ssr: false });
