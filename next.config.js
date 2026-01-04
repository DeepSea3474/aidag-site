/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  turbopack: {},   // ⚡️ boş config → uyarıyı susturur
  webpack: (config) => {
    config.watchOptions = {
      ignored: ['**/node_modules/**', '/data/**', '/usr/**', '/']
    }
    return config
  }
}

module.exports = nextConfig
