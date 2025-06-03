// components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Najbolje rešenja za Vaše probleme 
        </Link>
        <nav className="flex space-x-6">
          <Link href="/" className="hover:underline">
            Početna
          </Link>
          <Link href="/usluge" className="hover:underline">
            Usluge
          </Link>
        </nav>
      </div>
    </header>
  );
}
