import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-01-15T00:00:00");
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(timer);
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

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Aidag — DAO + AI Web Ecosystem</title>
        <meta name="description" content="Aidag Website Coming Soon" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <div className="mb-6">
          <Image src="/logo.png" alt="Aidag Spiral Logo" width={180} height={180} />
        </div>

        <h1 className="text-4xl font-bold mb-4">🚀 Aidag — DAO + AI Web Ecosystem</h1>
        <p className="text-lg mb-8">Pre-sale module and whitelist coming soon!</p>

        <div className="grid grid-cols-4 gap-4 text-center text-2xl font-mono">
          <div className="bg-blue-800 p-4 rounded-lg shadow-lg">
            <div>{timeLeft.days}</div>
            <span className="text-sm">Days</span>
          </div>
          <div className="bg-indigo-800 p-4 rounded-lg shadow-lg">
            <div>{timeLeft.hours}</div>
            <span className="text-sm">Hours</span>
          </div>
          <div className="bg-teal-800 p-4 rounded-lg shadow-lg">
            <div>{timeLeft.minutes}</div>
            <span className="text-sm">Minutes</span>
          </div>
          <div className="bg-pink-800 p-4 rounded-lg shadow-lg">
            <div>{timeLeft.seconds}</div>
            <span className="text-sm">Seconds</span>
          </div>
        </div>
      </main>
    </>
  );
}
