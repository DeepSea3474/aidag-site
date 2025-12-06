export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="text-center">
        <nav className="mb-6">
          <a href="/token" className="mr-4">Token Info</a>
          <a href="/buy">Buy Aidag</a>
        </nav>
        <h1 className="text-4xl font-bold mb-4">Aidag Chain'e Hoş Geldiniz</h1>
        <p className="text-lg">Yapay zeka destekli zincirleme sistemlerle geleceği inşa ediyoruz.</p>
      </div>
    </main>
  );
}
