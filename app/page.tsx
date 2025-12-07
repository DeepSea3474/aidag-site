import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Aidag Chain</h1>
      <Image src="/logo.png" width={200} height={200} alt="Logo" />
    </div>
  );
}
