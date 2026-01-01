import React from 'react'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Aidag Website Coming Soon" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Aidag</h1>
        <p className="text-lg text-gray-300">
          DAO + AI powered web ecosystem is launching soon.
        </p>
      </main>
    </>
  )
}
