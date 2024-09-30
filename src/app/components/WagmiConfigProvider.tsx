"use client";

import '@rainbow-me/rainbowkit/styles.css';
// import EduchainTestnet from "../utils/Educhainrpc"
// import { eduChain } from '../utils/eduChainConfig';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  sepolia,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import React from 'react';

const config = getDefaultConfig({
    appName: 'EinsteinAI',
    projectId: '161c5b182da611e44a12207fa871487f',
    chains: [mainnet, sepolia, polygon, optimism, base, arbitrum],
    ssr: true, 
  });

const queryClient = new QueryClient();

 function WagmiConfigProvider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default WagmiConfigProvider
