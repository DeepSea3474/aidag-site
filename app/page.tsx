"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to Aidag Chain</h1>
      <p>
        Go to <Link href="/buy">Buy Page</Link>
      </p>
      <p>
        See <Link href="/info">Info Page</Link>
      </p>
    </main>
  );
}

