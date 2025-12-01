"use client";

import Link from "next/link";

// Direktno ubacujemo naselja jer ne postoji src/data/naselja
const svaNaseljaObj = [
  { naziv: "Mirijevo", slug: "mirijevo" },
  { naziv: "Mirijevo I", slug: "mirijevo-i" },
  { naziv: "Mirijevo II", slug: "mirijevo-ii" },
  { naziv: "Mirijevo III", slug: "mirijevo-iii" },
  { naziv: "Mirijevo IV", slug: "mirijevo-iv" },
  { naziv: "Višnjica", slug: "visnjica" },
  { naziv: "Mali Mokri Lug", slug: "mali-mokri-lug" },
  { naziv: "Karaburma", slug: "karaburma" },
  { naziv: "Ovča", slug: "ovca" },
  { naziv: "Borča", slug: "borca" },
  { naziv: "Medaković", slug: "medakovic" },
  { naziv: "Zvezdara", slug: "zvezdara" },
  { naziv: "Stari Grad", slug: "stari-grad" },
  { naziv: "Savski Venac", slug: "savski-venac" },
  { naziv: "Vračar", slug: "vracar" },
  { naziv: "Novi Beograd", slug: "novi-beograd" },
  { naziv: "Zemun", slug: "zemun" },
  { naziv: "Čukarica", slug: "cukarica" },
  { naziv: "Voždovac", slug: "vozdovac" },
  { naziv: "Palilula", slug: "palilula" },
  { naziv: "Rakovica", slug: "rakovica" },
  { naziv: "Beograd", slug: "beograd" },
];

export default function LokacijeIndex() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
        Radimo na teritoriji celog Beograda
      </h2>

      <div className="flex flex-wrap gap-3 justify-center">
        {svaNaseljaObj.map((n) => (
          <Link
            key={n.slug}
            href={`/naselje/${n.slug}`}
            className="px-6 py-3 bg-white border border-gray-200 rounded-full
              shadow-sm hover:shadow-md hover:bg-gray-100 transition text-sm"
          >
            {n.naziv}
          </Link>
        ))}
      </div>
    </section>
  );
}
