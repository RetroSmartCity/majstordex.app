import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import { uslugeMap } from "@/components/uslugeMap";
import SEO from "@/components/SEO"; // ✅ Dodato

const usluge = [
  { slug: "servis-bojlera", naziv: "Servis bojlera", ikona: "🚿" },
  { slug: "pranje-klime", naziv: "Pranje klima uređaja", ikona: "🧊" },
  { slug: "popravka-ta-peci", naziv: "Popravka TA peći", ikona: "🔥" },
  { slug: "popravka-elektroinstalacija", naziv: "Popravka elektroinstalacija", ikona: "💡" },
  { slug: "zamena-osiguraca-i-uticnica", naziv: "Zamena osigurača i utičnica", ikona: "🔌" },
  { slug: "hitne-intervencije", naziv: "Hitne intervencije 0-24", ikona: "🔧" },
] as const;

const naselja: Record<string, string> = {
  "stari-grad": "Stari Grad",
  "savski-venac": "Savski Venac",
  "vracar": "Vračar",
  "novi-beograd": "Novi Beograd",
  "zemun": "Zemun",
  "cukarica": "Čukarica",
  "vozdovac": "Voždovac",
  "palilula": "Palilula",
  "rakovica": "Rakovica",
  "zvezdara": "Zvezdara",
};

type UslugaProps = {
  isNaseljePage: boolean;
  naselje: string;
};

export default function UslugaNaseljePage() {
  const router = useRouter();
  const { slug, naselje } = router.query;

  if (!slug || !naselje || typeof slug !== "string" || typeof naselje !== "string") {
    return null;
  }

  const prikazNaselja = naselja[naselje];
  const uslugaObj = usluge.find((u) => u.slug === slug);
  const importFn = uslugeMap[slug];

  if (!prikazNaselja || !uslugaObj || !importFn) {
    return (
      <main className="text-center py-20">
        <h1 className="text-2xl text-red-600 font-semibold">
          404 – Stranica nije pronađena
        </h1>
      </main>
    );
  }

  const pageTitle = `${uslugaObj.naziv} – ${prikazNaselja} | MajstorDex`;
  const pageDescription = `Brza usluga: ${uslugaObj.naziv.toLowerCase()} u naselju ${prikazNaselja}. Dolazak za 60–90 minuta. Dostupni 24/7!`;
  const pageUrl = `https://majstordex.rs/usluge/${slug}/${naselje}`;

  const UslugaComponent = dynamic(importFn, { ssr: false }) as ComponentType<UslugaProps>;

  return (
    <>
      {/* ✅ SEO meta + Open Graph */}
      <SEO
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        image="/og-default.jpg"
      />

      {/* ✅ JSON-LD Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Početna",
                item: "https://majstordex.rs"
              },
              {
                "@type": "ListItem",
                position: 2,
                name: uslugaObj.naziv,
                item: `https://majstordex.rs/usluge/${slug}`
              },
              {
                "@type": "ListItem",
                position: 3,
                name: prikazNaselja,
                item: pageUrl
              }
            ]
          })
        }}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 text-gray-800">
        <div className="bg-gradient-to-r from-yellow-100 to-white p-6 rounded-lg shadow mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">
            {uslugaObj.naziv} – {prikazNaselja}
          </h1>
          <p className="text-lg text-gray-700">
            Nudimo {uslugaObj.naziv.toLowerCase()} na celoj teritoriji naselja{" "}
            {prikazNaselja}. Dolazak na adresu u roku od{" "}
            <strong>60–90 minuta</strong>. Pozovite nas 24/7!
          </p>
        </div>

        <section className="mb-12">
          <UslugaComponent isNaseljePage={true} naselje={prikazNaselja} />
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-4">
            Ostale usluge u naselju {prikazNaselja}:
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {usluge
              .filter((u) => u.slug !== slug)
              .map((u) => (
                <li key={u.slug}>
                  <Link
                    href={`/usluge/${u.slug}/${naselje}`}
                    className="block bg-gray-100 hover:bg-yellow-100 transition rounded-xl p-6 shadow text-center cursor-pointer"
                  >
                    <div className="text-2xl mb-2">{u.ikona}</div>
                    <p className="font-semibold">{u.naziv}</p>
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      </main>
    </>
  );
}
