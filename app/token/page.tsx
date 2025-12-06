export default function TokenPage() {
  return (
    <main className="min-h-screen bg-white text-black p-8">
      <h1 className="text-3xl font-bold mb-4">Aidag Token Info</h1>
      <p className="mb-2">Resmi kontrat adresi: <code>0x123...abc</code></p>
      <p className="mb-2">Resmi cüzdan adresi: <code>0x456...def</code></p>
      <p className="mb-2">Toplam arz: 1,000,000 AIDAG</p>
      <p className="mb-2">Dağıtım: %50 satış, %30 ekip, %20 topluluk</p>
    </main>
  );
}
