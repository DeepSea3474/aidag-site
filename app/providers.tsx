<<<<<<< HEAD
// providers.tsx dosyasının en üst satırı:
'use client'; 

import * as React from 'react';
import { WagmiConfig, createConfig, mainnet, http } from 'wagmi';

// 1. Kullanmak istediğiniz ağları (chains) tanımlayın
const config = createConfig({
  chains: [mainnet], // Başlangıç için sadece Ethereum Mainnet'i kullanıyoruz.
                      // Diğer ağları (polygon, arbitrum vb.) buraya ekleyebilirsiniz.
  transports: {
    [mainnet.id]: http(), // Buraya kendi RPC URL'nizi veya altyapı sağlayıcınızı ekleyebilirsiniz (Opsiyonel)
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={config}>
      {children}
      {/* İleride buraya Web3Modal veya başka bir UI bileşenini ekleyeceksiniz */}
=======
"use client";

import { WagmiConfig, createConfig, configureChains } from "wagmi";
import { mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
>>>>>>> 029d86c9ac8ae8e932d6c74f86a53ccd41ceffde
    </WagmiConfig>
  );
}
