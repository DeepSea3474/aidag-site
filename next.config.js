/** @type {import('next/types').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // 8 Dil Desteği
    locales: ['en', 'tr', 'de', 'fr', 'ar', 'ru', 'es', 'zh'],
    // Varsayılan Dil
    defaultLocale: 'en',
    // Alan Adı Alt Alan Yönlendirmesini Devre Dışı Bırak (Termux için zorunlu)
    localeDetection: false,
  },
  output: 'export', // Next.js'in statik HTML dosyaları oluşturmasını sağlar (Cloudflare için gerekli)
  images: {
    unoptimized: true, // Statik çıktı için resim optimizasyonunu devre dışı bırakır
  },
}

module.exports = nextConfig
