
import data from "../public/dao.json";

export default function Dao() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>{data.dao_name}</h1>
      <p>Bu sayfa, DAO’nun ana yapısını, JSON dosyasından dinamik olarak çekmektedir. Yayın probleminizi bu yolla çözüyoruz.</p>
      
      <div style={{ marginTop: "30px", border: "1px solid #ccc", padding: "15px" }}>
        <h2>DAO Özellikleri</h2>
        <p><strong>Şahit:</strong> {data.witness}</p>
        <p><strong>Teklif Modeli:</strong> {data.proposal_model}</p>
        <p><strong>Oylama Mekanizması:</strong> {data.voting_mechanism}</p>
        <p><strong>Hazine Görünürlüğü:</strong> {data.treasury_visibility}</p>
        <p><strong>Durum:</strong> 
          <span style={{ color: data.status === "ready" ? "green" : "orange", fontWeight: "bold" }}>
            {data.status.toUpperCase()}
          </span>
        </p>
      </div>
    </div>
  );
}

