import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header>
        <Image src="/logo.png" alt="Aidag Logo" width={120} height={120} />
        <nav>
          <a href="/panel">Panel</a> | <a href="/dao">DAO</a>
        </nav>
      </header>
      <main>
               
  <div className="announcement">
    <h1>🚀 Aidag Website Coming Soon</h1>
    <p>We are preparing to launch the Aidag platform. Stay tuned for the official release and presale announcement in early 2026!</p>
  </div>

  {/* mevcut içerik burada kalır */}
</main>
    </div>
  );
}
