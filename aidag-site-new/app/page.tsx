export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-indigo-900 to-purple-900 text-white font-sans">
      <section className="py-20 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
          AIDAG Spiral DAO Yönetimi
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Merkeziyetsiz yapı ve şeffaf konsensüs modeliyle yönetilen AIDAG Spiral DAO, topluluk odaklı karar alma süreçlerini destekler.
        </p>
        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          <a href="#presale" className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-lg font-semibold">
            Presale Başlat
          </a>
          <a href="#dao" className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold">
            DAO’ya Katıl
          </a>
        </div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-10 max-w-6xl mx-auto">
        {[
          { title: "Şahit (Witness)", value: "soulverse" },
          { title: "Teklif Modeli", value: "ritual-based consensus" },
          { title: "Oylama Mekanizması", value: "affirmation quorum" },
          { title: "Hazine Görünürlüğü", value: "mythic" }
        ].map((item, idx) => (
          <div key={idx} className="bg-white/10 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-sm">{item.value}</p>
          </div>
        ))}
      </section>

      <section className="text-center py-10">
        <p className="text-sm text-gray-300">Sistem Durumu: <span className="text-green-400 font-bold">READY</span></p>
      </section>
    </main>
  )
}
