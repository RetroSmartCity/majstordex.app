// components/Header.tsx
'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" passHref legacyBehavior>
          <a className="text-2xl font-bold hover:opacity-90 transition-opacity">
            Najbolje rešenja za Vaše probleme
          </a>
        </Link>
        <nav className="flex space-x-6" aria-label="Glavna navigacija">
          <Link href="/" passHref legacyBehavior>
            <a className="hover:underline transition">Početna</a>
          </Link>
          <Link href="/usluge" passHref legacyBehavior>
            <a className="hover:underline transition">Usluge</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
