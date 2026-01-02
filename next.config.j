/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    swcLoader: false,
    swcWasm: true
  }
}

module.exports = nextConfig
