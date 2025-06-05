import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-center sm:text-left">
          © {year} MajstorDex. Sva prava zadržana.
        </p>

        <div className="flex gap-4 text-gray-400">
          <Link href="/" className="hover:text-white transition">Početna</Link>
          <Link href="/#usluge" className="hover:text-white transition">Usluge</Link>
          <Link href="/#kontakt" className="hover:text-white transition">Kontakt</Link>
        </div>
      </div>
    </footer>
  );
}
