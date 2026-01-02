export default function Panel() {
  return (
    <div>
      <h1>Panel</h1>
      <p>Kullanıcı arayüzü burada olacak.</p>
      <table border={1}>
        <thead>
          <tr><th>ID</th><th>Ad</th><th>Durum</th></tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>DeepSea__</td><td>Aktif</td></tr>
        </tbody>
      </table>
    </div>
  );
}
