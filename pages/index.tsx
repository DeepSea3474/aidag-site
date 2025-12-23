import { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Bugünden 30 gün sonrası
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
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
        {/* Logo */}
        <div className="logo">
          <img
            src="/logo.png"
            alt="Aidag Logo"
            style={{
              maxWidth: "160px",
              marginBottom: "1rem",
              filter: "drop-shadow(0 0 12px rgba(0, 153, 255, 0.7))",
            }}
          />
        </div>

        {/* Duyuru */}
        <div className="announcement">
          <h1>🚀 Aidag Website Coming Soon</h1>
          <p>
            We are preparing to launch the Aidag platform. Stay tuned for the
            official release and presale announcement!
          </p>
          <h2>Countdown to Presale:</h2>
          <p className="countdown">
            <span className="digit">{timeLeft.days}d</span>{" "}
            <span className="digit">{timeLeft.hours}h</span>{" "}
            <span className="digit">{timeLeft.minutes}m</span>{" "}
            <span className="digit">{timeLeft.seconds}s</span>
          </p>
        </div>

        {/* Countdown Görseli */}
        <div className="hero-image">
          <img
            src="/aidag-countdown.jpeg"
            alt="Aidag Countdown"
            style={{
              maxWidth: "100%",
              borderRadius: "12px",
              boxShadow: "0 0 20px rgba(0, 153, 255, 0.5)",
              marginTop: "2rem",
            }}
          />
        </div>
      </main>
    </div>
  );
}
