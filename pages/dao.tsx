import { useState } from "react";

export default function Dao() {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    alert(`DAO mesajı gönderildi: ${message}`);
  };

  return (
    <div>
      <h1>DAO Sayfası</h1>
      <p>Burada Web3 entegrasyonu yapılacak.</p>
      <input
        type="text"
        placeholder="Mesaj yaz"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSubmit}>Gönder</button>
    </div>
  );
}
