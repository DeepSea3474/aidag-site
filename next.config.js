/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // Cloudflare Pages için static export
  images: {
    unoptimized: true,     // Cloudflare Pages image optimizasyon hatalarını önler
  },
};

module.exports = nextConfig;

