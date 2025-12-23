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
  </div> import { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({days:0,hours:0,minutes:0,seconds:0});

  useEffect(() => {
    const targetDate = new Date("2026-01-15T00:00:00"); // ön satış tarihi
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({days:0,hours:0,minutes:0,seconds:0});
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <header>
        <nav>
          <a href="/panel">Panel</a> | <a href="/dao">DAO</a>
        </nav>
      </header>

      <main>
        <div className="announcement">
          <h1>🚀 Aidag Website Coming Soon</h1>
          <p>We are preparing to launch the Aidag platform. Stay tuned for the official release and presale announcement in early 2026!</p>
          <h2>Countdown to Presale:</h2>
          <p>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</p>
        </div>
      </main>
    </div>
  );
}

  {/* mevcut içerik burada kalır */}
</main>
    </div>
  );
}
