import panelData from "../public/panel.json";

export default function Panel() {
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
        color: '#ff9800', // Orange Accent Color
        marginBottom: '40px'
      }}>
        {panelData.panel_name}
      </h1>
      
      <p style={{ 
        textAlign: 'center', 
        fontSize: '1.1em',
        color: '#333'
      }}>
        Bu yönetim paneli, sistemin canlı durumunu ve operasyonel metriklerini anlık olarak sunmaktadır.
      </p>

      <div style={{
        marginTop: '50px',
        padding: '30px',
        border: '1px solid #eaeaea',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        backgroundColor: '#fff'
      }}>
        <h2 style={{ color: '#1a1a1a', borderBottom: '2px solid #ff9800', paddingBottom: '10px' }}>
          Sistem Metrikleri
        </h2>
        
        <p style={{ fontSize: '1.05em' }}>
          <strong>Yazılım Versiyonu:</strong> {panelData.version}
        </p>
        <p style={{ fontSize: '1.05em' }}>
          <strong>Yönetici Erişimi:</strong> 
          <span style={{ 
            fontWeight: 'bold', 
            color: panelData.admin_access === "full" ? '#4CAF50' : '#ff9800'
          }}>
            {panelData.admin_access.toUpperCase()}
          </span>
        </p>
        <p style={{ fontSize: '1.05em' }}>
          <strong>Aktif Bağlantı:</strong> {panelData.active_users} Kullanıcı
        </p>
        <p style={{ fontSize: '1.05em' }}>
          <strong>Son Yapılandırma:</strong> {panelData.last_update}
        </p>
      </div>
    </div>
  );
}

