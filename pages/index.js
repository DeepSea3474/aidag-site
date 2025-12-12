import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>AIDAG Spiral | Merkeziyetsiz Yönetim</title>
      </Head>

      {/* Ana Bölüm */}
      <main className="flex-grow flex items-center justify-center bg-gray-900 text-white p-8">
        <div className="text-center max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">
            AIDAG Spiral
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 font-light mb-10">
            Geleceğin Merkeziyetsiz Yönetim Mekanizması
          </p>

          {/* Aksiyon Butonları */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="/dao" 
              className="px-8 py-3 text-lg font-bold rounded-full transition duration-300 shadow-lg 
                       bg-indigo-600 hover:bg-indigo-700 text-white transform hover:scale-105"
            >
              DAO Yapısını İncele
            </a>
            <a 
              href="/panel" 
              className="px-8 py-3 text-lg font-bold rounded-full transition duration-300 shadow-lg 
                       bg-yellow-500 hover:bg-yellow-600 text-gray-900 transform hover:scale-105"
            >
              Sistem Metrikleri (Panel)
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-center p-4 text-gray-500 text-sm">
        © 2025 AIDAG Spiral. Tüm hakları saklıdır.
      </footer>
    </div>
  )
}
