import data from "../public/dao.json";

export default function Dao() {
  // Durum rengini Tailwind sınıflarıyla belirleyelim
  const statusColor = data.status === "ready" 
    ? "bg-green-500 hover:bg-green-600" 
    : "bg-yellow-500 hover:bg-yellow-600";

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-xl p-10">
        
        <header className="text-center pb-8 border-b border-gray-200">
          <h1 className="text-5xl font-extrabold text-blue-700 mb-2">
            {data.dao_name} Yönetimi
          </h1>
          <p className="text-lg text-gray-600 italic">
            Merkeziyetsiz Yapı | Şeffaf Konsensüs
          </p>
        </header>

        <section className="mt-8 mb-10">
          <p className="text-center text-xl text-gray-700 leading-relaxed">
            Aidag Spiral DAO, merkeziyetsiz yönetimin temelini oluşturur. Tüm kararlar şeffaf ve ritüel tabanlı konsensüs ile alınır.
          </p>
        </section>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg shadow-inner">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">
            Mevcut DAO Durumu
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <p className="text-lg">
              <strong className="font-bold text-gray-800">Şahit (Witness):</strong> {data.witness}
            </p>
            <p className="text-lg">
              <strong className="font-bold text-gray-800">Teklif Modeli:</strong> {data.proposal_model}
            </p>
            <p className="text-lg">
              <strong className="font-bold text-gray-800">Oylama Mekanizması:</strong> {data.voting_mechanism}
            </p>
            <p className="text-lg">
              <strong className="font-bold text-gray-800">Hazine Görünürlüğü:</strong> {data.treasury_visibility}
            </p>
          </div>
          
          <div className="mt-6 pt-4 border-t border-blue-200 flex items-center justify-between">
            <span className="text-xl font-semibold text-gray-800">Sistem Durumu:</span>
            <span className={`text-white text-lg font-bold py-2 px-6 rounded-full transition duration-300 ${statusColor}`}>
              {data.status.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

