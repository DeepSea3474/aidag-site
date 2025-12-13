/** @type {import('next').NextConfig} */
const nextConfig = {
  // NEXT.JS'e sadece statik HTML/CSS çıktısı almasını zorlar
  output: 'export', 
  // Tailwind CSS'in doğru çalışması için bu gereklidir
  trailingSlash: true, 

  // KRİTİK AYAR: Statik kaynaklar için göreceli yolları zorlar.
  // Bu, Cloudflare Pages gibi statik hostlar için gereklidir.
  assetPrefix: './', 
};

module.exports = nextConfig;
