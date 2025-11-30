/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pages gibi statik barındırma ortamları için KRİTİK ayar.
  // Bu, Next.js'e tamamen statik HTML ve CSS dosyaları üretmesini söyler.
  output: 'export',
  
  // Önceki hataya neden olan 'experimental: { runtime: 'nodejs' }' bloğu kaldırıldı.
};

module.exports = nextConfig;
