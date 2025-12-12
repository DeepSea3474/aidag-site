// app/providers.tsx

'use client'; 

import * as React from 'react';
// Artık 'http' veya 'injected' i Wagmi'den çağırmıyoruz
import { WagmiConfig, createConfig, mainnet } from 'wagmi'; 
import { http, createPublicClient, createClient } from 'viem'; // viem'den gerekli öğeleri çağırıyoruz

// 1. Ağları Tanımlayın
// Not: mainnet (Ethereum) zaten Wagmi'den geliyor.

// 2. Transport ayarını viem'den gelen http() ile yapın
const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});

// 3. Wagmi Config'i Oluşturun (artık sadece publicClient kullanacağız)
const config = createConfig({
  autoConnect: true,
  publicClient, // viem'den gelen publicClient'ı kullanın

  // viem'de connectors kullanımı biraz değişti, 
  // ancak Next.js ve Web3Modal için genellikle sadece 
  // publicClient yeterli olur.
  // DİKKAT: Eğer Wagmi 1.x kullanıyorsanız aşağıdaki satırları eklemeniz gerekebilir:
  // connectors: [
  //   new InjectedConnector({ chains: [mainnet] }),
  // ],
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={config}>
      {children}
    </WagmiConfig>
  );
}

