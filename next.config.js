/** @type {import('next').NextConfig} */
const nextConfig = {
  // Çıktı klasörünü 'out' olarak ayarlamak için zorunlu (Cloudflare'a uyumlu).
  output: 'export',
  // Tailwind CSS için gereklidir.
  trailingSlash: true,

  // KRİTİK AYAR: Statik dosyaların yollarını göreceli yapar.
  assetPrefix: './',
};

module.exports = nextConfig;

