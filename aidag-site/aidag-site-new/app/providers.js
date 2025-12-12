// app/providers.js
'use client';

import * as React from 'react';
import {
  RainbowKitProvider,
  getDefaultConfig,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { SUPPORTED_CHAINS } from '@/config/web3Config'; 

// NOT: Kendi WalletConnect Proje ID'nizi buraya girmeyi unutmayın!
const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || 'YOUR_WALLET_CONNECT_PROJECT_ID'; 

const config = getDefaultConfig({
  appName: 'AIDAG-CHAIN DAO',
  projectId,
  chains: SUPPORTED_CHAINS,
  ssr: true,
});

export function Providers({ children }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <WagmiProvider config={config}>
      {/* AIDAG logosunu her yerde gösteren cüzdan entegrasyonu */}
      <RainbowKitProvider>
        {mounted && children}
      </RainbowKitProvider>
    </WagmiProvider>
  );
}
