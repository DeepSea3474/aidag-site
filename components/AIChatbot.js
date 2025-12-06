import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

// Dil dosyalarını içe aktar
import en from '../locales/en.json';
import tr from '../locales/tr.json';
import de from '../locales/de.json';
import fr from '../locales/fr.json';
import ar from '../locales/ar.json';
import ru from '../locales/ru.json';
import es from '../locales/es.json';
import zh from '../locales/zh.json';

const locales = { en, tr, de, fr, ar, ru, es, zh };

export default function AIChatbot({ contractAddress, initialMessageDelay = 2000, inactivityTimeout = 15000 }) {
  const router = useRouter();
  const { locale } = router;
  const t = locales[locale];
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [chatState, setChatState] = useState('initial'); // 'initial', 'open', 'closed'

  // Robotun Konuşma Metinleri (Çeviriler buraya entegre edilecek)
  // Şimdilik sadece ana dilinizi kullanacağım. Diğer diller için daha sonra bu metinleri eklemeliyiz.
  const welcomeMessage = "AIDAG Soulware AI Asistanı hoş geldiniz! Tokenomikler, Ön Satış veya Akıllı Sözleşme hakkında bir sorunuz var mı?";

  // --- LOJİK VE ZAMANLAYICILAR ---

  // Aktivite algılama ve zamanlayıcıyı sıfırlama
  const resetTimer = useCallback(() => {
    if (inactivityTimeout > 0) {
      if (window.inactivityTimer) {
        clearTimeout(window.inactivityTimer);
      }
      window.inactivityTimer = setTimeout(() => {
        if (chatState !== 'open') {
          setIsVisible(false); // Kaybol
          setChatState('closed');
        }
      }, inactivityTimeout);
    }
  }, [inactivityTimeout, chatState]);

  // Sayfaya Giriş ve Otomatik Kaybolma Lojiği
  useEffect(() => {
    // 1. Belirtilen gecikme sonrası robotu göster
    const initialShowTimer = setTimeout(() => {
      setIsVisible(true);
      resetTimer(); // Göründükten sonra inaktivite sayacını başlat
    }, initialMessageDelay);

    // 2. Kullanıcı etkileşimi için dinleyicileri ayarla
    const events = ['mousemove', 'keypress', 'scroll', 'touchstart'];
    events.forEach(event => window.addEventListener(event, resetTimer));

    // Temizleme fonksiyonu
    return () => {
      clearTimeout(initialShowTimer);
      clearTimeout(window.inactivityTimer);
      events.forEach(event => window.removeEventListener(event, resetTimer));
    };
  }, [initialMessageDelay, resetTimer]);

  // Sohbeti açma/kapama
  const toggleChat = () => {
    if (!isOpen) {
        // Chat açıldığında inaktivite sayacını durdur
        clearTimeout(window.inactivityTimer); 
        setChatState('open');
    } else {
        // Chat kapatıldığında sayacı tekrar başlat
        setChatState('initial');
        resetTimer();
    }
    setIsOpen(!isOpen);
    setIsVisible(true); // Açıldığında her zaman görünür
  };

  // --- GÖRÜNÜM VE STİL ---

  if (chatState === 'closed' && !isVisible) {
    // Tamamen kapalıyken hiçbir şey render etme
    return null;
  }

  return (
    <div dir={dir} className={`fixed bottom-5 ${dir === 'rtl' ? 'left-5' : 'right-5'} z-50 transition-all duration-500`}>
      {/* 1. Balon ve Mesaj Penceresi */}
      {isOpen && (
        <div className={`bg-gray-800 p-4 rounded-lg shadow-2xl mb-2 w-72 md:w-80 border border-sky-500/50 transform origin-bottom-${dir === 'rtl' ? 'left' : 'right'} transition-opacity duration-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <div className="flex justify-between items-center pb-2 border-b border-gray-700">
            <h3 className="text-sky-400 font-bold">Soulware AI Asistanı</h3>
            <button 
                onClick={toggleChat}
                className="text-gray-400 hover:text-white transition"
            >
                &times;
            </button>
          </div>
          
          <p className="text-gray-300 text-sm mt-3">{welcomeMessage}</p>
          
          <div className="flex flex-wrap mt-4 gap-2">
            {/* Hızlı Aksiyon Düğmeleri */}
            <a href="#tokenomics" onClick={toggleChat} className="text-xs bg-sky-600 hover:bg-sky-700 text-white py-1 px-2 rounded transition">Tokenomik</a>
            <a href="#transparency" onClick={toggleChat} className="text-xs bg-sky-600 hover:bg-sky-700 text-white py-1 px-2 rounded transition">Akıllı Sözleşme</a>
            <a href="#" onClick={toggleChat} className="text-xs bg-sky-600 hover:bg-sky-700 text-white py-1 px-2 rounded transition">Ön Satış</a>
          </div>
          
          {/* Gelecekteki Chat Giriş Alanı */}
          <input 
              type="text" 
              placeholder="Sorunuzu buraya yazın..."
              className="w-full mt-4 p-2 bg-gray-900 border border-sky-500/50 rounded text-sm text-white focus:outline-none"
          />
        </div>
      )}

      {/* 2. Robot İkonu ve Hareketlilik (Trigger) */}
      <div 
        onClick={toggleChat}
        className={`w-16 h-16 rounded-full flex items-center justify-center cursor-pointer shadow-2xl transition-all duration-300 transform 
          ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} 
          ${isOpen ? 'bg-sky-700' : 'bg-sky-500 hover:bg-sky-600 animate-pulse-slow'} 
          border-4 border-white/20`}
        style={{
            animation: isOpen ? 'none' : 'pulse-slow 3s infinite', // Açıkken animasyon yok
        }}
      >
        {/* Robot İkonu (AIDAG logosuna benzer, basit bir AI yüzü) */}
        <div className="text-white text-3xl font-bold">
            {/* Robot Gözleri (Dinamik görünüm) */}
            <span className="block w-2 h-2 bg-white rounded-full mx-1 inline-block shadow-white/50 animate-glow"></span>
            <span className="block w-2 h-2 bg-white rounded-full mx-1 inline-block shadow-white/50 animate-glow" style={{animationDelay: '0.5s'}}></span>
        </div>
      </div>

      {/* Tailwind CSS için özel animasyon stilleri */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.7); /* Sky-400 */
          }
          50% {
            box-shadow: 0 0 0 10px rgba(56, 189, 248, 0);
          }
        }
        @keyframes glow {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
        .animate-glow {
            animation: glow 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
