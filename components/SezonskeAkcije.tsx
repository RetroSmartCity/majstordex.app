import { useState } from 'react';
import Link from 'next/link';

export default function SezonskeAkcije({
  akcije,
}: {
  akcije: { slug: string; title: string; opis: string; linkText: string }[];
}) {
  const [prikaziKartice, setPrikaziKartice] = useState(false);

  return (
    <section className="py-12 px-6 bg-yellow-50 border-t border-b border-yellow-300 max-w-6xl mx-auto text-center">
      {/* Klikabilni naslov sa animacijom */}
      <h2
        onClick={() => setPrikaziKartice(!prikaziKartice)}
        className="text-3xl font-bold mb-8 text-yellow-700 select-none cursor-pointer
          animate-pulse hover:text-yellow-900 transition-colors duration-300"
        role="button"
        aria-expanded={prikaziKartice}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setPrikaziKartice(!prikaziKartice);
          }
        }}
      >
        Sezonske Akcije
      </h2>

      {/* Kartice se prikazuju samo ako je prikaziKartice true */}
      {prikaziKartice && (
        <div className="flex flex-wrap justify-center gap-8">
          {akcije.map(({ slug, title, opis, linkText }) => (
            <div
              key={slug}
              className="bg-yellow-100 text-yellow-900 border border-yellow-300 rounded-lg px-6 py-5 shadow-md max-w-sm w-full"
            >
              <h3 className="text-lg font-semibold mb-2">
                {title.replace(/^Akcija:\s*/, '')}
              </h3>
              <p className="text-gray-800 text-sm mb-4">{opis}</p>
              <Link
                href={slug}
                className="text-blue-600 hover:underline font-medium"
              >
                {linkText}
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
