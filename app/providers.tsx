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
    </WagmiConfig>
  );
}
