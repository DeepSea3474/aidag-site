import panelData from "../public/panel.json";

export default function Panel() {
  // Durum rengini Tailwind sınıflarıyla belirleyelim
  const accessColor = panelData.admin_access === "full" 
    ? "bg-green-500 hover:bg-green-600" 
    : "bg-red-500 hover:bg-red-600";

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-xl p-10">
        
        <header className="text-center pb-8 border-b border-gray-200">
          <h1 className="text-5xl font-extrabold text-yellow-600 mb-2">
            {panelData.panel_name}
          </h1>
          <p className="text-lg text-gray-600 italic">
            Canlı Sistem Metrikleri | Yönetim Paneli
          </p>
        </header>

        <section className="mt-8 mb-10">
          <p className="text-center text-xl text-gray-700 leading-relaxed">
            Bu yönetim paneli, sistemin canlı durumunu ve operasyonel metriklerini anlık olarak sunmaktadır.
          </p>
        </section>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg shadow-inner">
          <h2 className="text-3xl font-semibold text-yellow-800 mb-4">
            Sistem Performansı
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <p className="text-lg">
              <strong className="font-bold text-gray-800">Yazılım Versiyonu:</strong> {panelData.version}
            </p>
            <p className="text-lg">
              <strong className="font-bold text-gray-800">Aktif Bağlantı:</strong> {panelData.active_users} Kullanıcı
            </p>
            <p className="text-lg">
              <strong className="font-bold text-gray-800">Son Yapılandırma:</strong> {panelData.last_update}
            </p>
          </div>
          
          <div className="mt-6 pt-4 border-t border-yellow-200 flex items-center justify-between">
            <span className="text-xl font-semibold text-gray-800">Yönetici Erişimi:</span>
            <span className={`text-white text-lg font-bold py-2 px-6 rounded-full transition duration-300 ${accessColor}`}>
              {panelData.admin_access.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
