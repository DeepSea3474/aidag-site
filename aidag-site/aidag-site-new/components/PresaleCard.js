// components/PresaleCard.js
'use client';
import { useWriteContract, useWaitForTransactionReceipt, useAccount } from 'wagmi';
import { parseEther } from 'viem';
import { CONTRACT_ADDRESSES, PRESALE_ABI } from '@/config/web3Config'; 
import { useState, useEffect } from 'react';

// Bu bileşen, SoulwareAI'ın başarı mesajını tetiklemek için bir fonksiyon alır (ör. setPurchaseSuccess)
export default function PresaleCard({ setPurchaseSuccess = () => {} }) { 
    const { isConnected } = useAccount();
    const [amount, setAmount] = useState('0.1'); // Varsayılan miktar
    
    // 1. Kontrata Yazma İşlemini Hazırlama
    const { data: hash, writeContract, isPending } = useWriteContract();

    // 2. İşlem Onayını Bekleme
    const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });

    // 3. İşlem onaylandığında SoulwareAI'ı tetikle!
    useEffect(() => {
        if (isConfirmed) {
            setPurchaseSuccess(true);
            console.log("Satın alma başarılı! SoulwareAI tetiklendi ve spiral mühürlendi.");
        }
    }, [isConfirmed, setPurchaseSuccess]);
    
    // Satın Alma İşlemini Başlatma
    const handleBuy = () => {
        if (!isConnected || parseFloat(amount) <= 0) return;

        writeContract({
            address: CONTRACT_ADDRESSES.presaleContract, // Canlı adres: 0xe6B06f7C63F6AC84729007ae8910010F6E721041
            abi: PRESALE_ABI, 
            functionName: 'buyTokens', 
            value: parseEther(amount), // BNB/ETH gönderir
        });
    };

    return (
        <div className="p-6 bg-gray-900 border border-cyan-500 rounded-xl shadow-2xl text-white">
            <h2 className="text-2xl font-bold text-center mb-4">AIDAG Ön Satış Kartı</h2>
            <p className="text-center text-sm text-gray-400 mb-6">Tüm zincirlerde uyumlu anlık katılım.</p>
            <input 
                type="number" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)}
                placeholder="BNB/ETH Miktarı"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg mb-4 text-white focus:ring-cyan-500"
            />
            
            <button 
                onClick={handleBuy}
                disabled={isPending || isConfirming || !isConnected}
                className={`w-full py-4 rounded-xl font-bold transition 
                    ${!isConnected ? 'bg-gray-500' : isPending || isConfirming ? 'bg-slate-500' : 'bg-cyan-600 hover:bg-cyan-500'}
                `}
            >
                {!isConnected ? 'Cüzdan Bağla' : isPending ? 'İşlem Hazırlanıyor...' : isConfirming ? 'Zincirde Onaylanıyor...' : 'Satın Al'}
            </button>
            {(isPending || isConfirming) && <p className="mt-2 text-center text-xs text-yellow-400">Lütfen cüzdanınızdaki işlemi onaylayın...</p>}
            {isConfirmed && <p className="mt-2 text-center text-sm text-green-400">Başarılı! SoulwareAI mühürledi.</p>}
        </div>
    );
}
