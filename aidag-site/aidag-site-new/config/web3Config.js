// config/web3Config.js (CANLI VE MÜHÜRLENMİŞ KONFİGÜRASYON)

import { mainnet, bsc, polygon, avalanche } from 'wagmi/chains'; 

// --- AĞLAR ---
export const SUPPORTED_CHAINS = [mainnet, bsc, polygon, avalanche]; 

// --- TOKENOMICS BİLGİLERİ ---
export const AIDAG_TOKENOMICS = {
    totalSupply: 15999000, 
    symbol: 'AIDAG',
    decimals: 18, 
    name: 'AIDAG Token',
    distribution: { 
        presale: { percentage: 20, description: "Ön Satış/Halka Açık Arz" }, 
        daoTreasury: { percentage: 40, description: "DAO Hazine (SoulwareAI Yönetimi)" },
        teamLock: { percentage: 15, description: "Kurucu/Takım Kilitli" },
        liquidity: { percentage: 25, description: "Likidite Havuzları" },
    },
};

// --- KONTART VE CÜZDAN ADRESLERİ (CANLI) ---
export const CONTRACT_ADDRESSES = {
    // DAO Yönetim Kontratı (Oylama işlemleri)
    daoGovernance: "0xff01fa9d5d1e5fcc539efb9654523a657f32ed23", 
    
    // Ön Satış Kontratı (buyTokens işlemleri)
    presaleContract: "0xe6B06f7C63F6AC84729007ae8910010F6E721041", 
    
    // DAO Hazine Cüzdanı
    daoTreasury: "0xC16eC985D98Db96DE104Bf1e39E1F2Fdb9a712E9", 
};


// --- KONTART ABI'LARI ---

// AIDAG Presale Kontratı ABI'si
export const PRESALE_ABI = [
  { "inputs": [], "name": "buyTokens", "outputs": [], "stateMutability": "payable", "type": "function" },
  { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "buyer", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amountSpent", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "tokensBought", "type": "uint256" }], "name": "TokensPurchased", "type": "event" }
];

// AIDAG Governance Kontratı ABI'si
export const DAO_ABI = [
  { "inputs": [{ "internalType": "string", "name": "_description", "type": "string" }, { "internalType": "uint256", "name": "_durationInSeconds", "type": "uint256" }], "name": "createProposal", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [{ "internalType": "uint256", "name": "_proposalId", "type": "uint256" }, { "internalType": "bool", "name": "_support", "type": "bool" }], "name": "vote", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [{ "internalType": "uint256", "name": "_proposalId", "type": "uint256" }], "name": "executeProposal", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
];
