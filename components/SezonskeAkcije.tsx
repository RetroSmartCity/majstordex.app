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
      {/* Naslov sa pulse animacijom */}
      <h2
        className="text-4xl font-bold mb-6 text-gray-900 animate-pulse"
      >
        Sezonske Akcije
      </h2>

      {/* Dugme za prikaz/sakrivanje kartica */}
      <button
        type="button"
        onClick={() => setPrikaziKartice(!prikaziKartice)}
        className="text-lg font-semibold px-6 py-3 mb-8 bg-yellow-400 text-yellow-900 rounded shadow hover:bg-yellow-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-600"
        aria-expanded={prikaziKartice}
      >
        {prikaziKartice ? '▲ Sakrij Akcije' : '▼ Prikaži Akcije'}
      </button>

      {/* Kartice */}
      {prikaziKartice && (
        <div className="flex flex-wrap justify-center gap-8">
          {akcije.map(({ slug, title, opis, linkText }) => (
            <div
              key={slug}
              className="bg-yellow-100 text-yellow-900 border border-yellow-300 rounded-lg px-6 py-5 shadow-md max-w-sm w-full text-left"
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
