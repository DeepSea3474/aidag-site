/** @type {import('next').NextConfig} */
const nextConfig = {
  // NEXT.JS'e sadece statik HTML/CSS çıktısı almasını zorlar
  output: 'export', 
  // Tailwind CSS'in doğru çalışması için bu gereklidir
  trailingSlash: true,
};

module.exports = nextConfig;

// Git'in farkı görmesi için eklenen yorum (Örnek)
