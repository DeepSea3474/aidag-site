export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#000',
      color: '#0ff',
      fontFamily: 'monospace'
    }}>
      <h1>Welcome to Aidag</h1>
      <p>DAO + AI powered web ecosystem is launching soon.</p>
      <button style={{
        padding: '12px 24px',
        marginTop: '20px',
        fontSize: '18px',
        background: 'linear-gradient(90deg, #0ff, #f0f)',
        border: 'none',
        borderRadius: '8px',
        color: '#000',
        cursor: 'pointer',
        boxShadow: '0 0 20px #0ff'
      }}>
        Satın Al
      </button>
    </div>
  )
}

