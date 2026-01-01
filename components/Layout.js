import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header />
      <main className="p-6">{children}</main>
      <footer className="bg-white shadow p-4 mt-12 text-center">
        © {new Date().getFullYear()} Aidag DAO — Autonomous & Transparent
      </footer>
    </div>
  );
}

