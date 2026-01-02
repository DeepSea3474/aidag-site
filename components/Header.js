import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/logo.png" alt="Aidag Logo" className="h-10 w-auto mr-3" />
        <h1 className="text-xl font-bold text-blue-600">Aidag DAO</h1>
      </div>
      <nav className="flex items-center">
        <a href="/" className="mr-4 text-blue-600">Home</a>
        <a href="/presale" className="mr-4 text-blue-600">Presale</a>
        <a href="/dao" className="mr-4 text-blue-600">DAO</a>
        <a href="/docs" className="mr-4 text-blue-600">Docs</a>
        <LanguageSwitcher />
      </nav>
    </header>
  );
}

