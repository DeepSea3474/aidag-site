"use client";

import { ReactNode } from "react";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Web3Modal } from "@web3modal/react";
import { mainnet } from "wagmi/chains";
import { createConfig, http } from "wagmi";
import { EthereumClient } from "@web3modal/ethereum";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID!;

// wagmi v3 config
const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http("https://mainnet.infura.io/v3/YOUR_KEY")
  }
});

const ethereumClient = new EthereumClient(config, [mainnet]);
const queryClient = new QueryClient();

export function Providers({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      </QueryClientProvider>
    </WagmiProvider>
  );
}

