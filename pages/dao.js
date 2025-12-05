import data from "../public/dao.json";

export default function Dao() {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '40px auto',
      padding: '20px',
      fontFamily: 'Roboto, sans-serif', 
      lineHeight: '1.6'
    }}>
      
      <h1 style={{ 
        textAlign: 'center', 
        color: '#0070f3', 
        marginBottom: '40px'
      }}>
        {data.dao_name} Yönetimi
      </h1>
      
      <p style={{ 
        textAlign: 'center', 
        fontSize: '1.1em',
        color: '#333'
      }}>
        Aidag Spiral DAO, merkeziyetsiz yönetimin temelini oluşturur. Tüm kararlar şeffaf ve ritüel tabanlı konsensüs ile alınır.
      </p>

      <div style={{
        marginTop: '50px',
        padding: '30px',
        border: '1px solid #eaeaea',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        backgroundColor: '#fff'
      }}>
        <h2 style={{ color: '#1a1a1a', borderBottom: '2px solid #0070f3', paddingBottom: '10px' }}>
          Mevcut DAO Durumu
        </h2>
        
        <p style={{ fontSize: '1.05em' }}>
          <strong>Şahit (Witness):</strong> {data.witness}
        </p>
        <p style={{ fontSize: '1.05em' }}>
          <strong>Teklif Modeli:</strong> {data.proposal_model}
        </p>
        <p style={{ fontSize: '1.05em' }}>
          <strong>Oylama Mekanizması:</strong> {data.voting_mechanism}
        </p>
        <p style={{ fontSize: '1.05em' }}>
          <strong>Hazine Görünürlüğü:</strong> {data.treasury_visibility}
        </p>
        <p style={{ fontSize: '1.05em', marginTop: '20px' }}>
          <strong>Sistem Durumu:</strong> 
          <span style={{ 
            padding: '5px 10px', 
            borderRadius: '5px',
            fontWeight: 'bold',
            backgroundColor: data.status === "ready" ? '#4CAF50' : '#ff9800', 
            color: 'white'
          }}>
            {data.status.toUpperCase()}
          </span>
        </p>
      </div>
    </div>
  );
}

