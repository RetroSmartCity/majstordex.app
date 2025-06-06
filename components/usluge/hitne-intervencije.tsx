// pages/usluge/hitne-intervencije.tsx

import Head from "next/head";
import Link from "next/link";

export default function HitneIntervencije() {
  return (
    <>
      <Head>
        <title>Hitne elektro intervencije 24/7 u Beogradu | MajstorDex</title>
        <meta
          name="description"
          content="Brze i pouzdane hitne elektro intervencije u Beogradu. Dolazak majstora u roku od 60–90 minuta, dostupnost 24/7 za sve kvarove i hitne popravke."
        />
        <link rel="canonical" href="https://majstordex.rs/usluge/hitne-intervencije" />

        {/* Open Graph */}
        <meta property="og:title" content="Hitne elektro intervencije 24/7 u Beogradu | MajstorDex" />
        <meta
          property="og:description"
          content="Brze i pouzdane hitne elektro intervencije u Beogradu. Dolazak majstora u roku od 60–90 minuta, dostupnost 24/7 za sve kvarove i hitne popravke."
        />
        <meta property="og:url" content="https://majstordex.rs/usluge/hitne-intervencije" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://majstordex.rs/og-default.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hitne elektro intervencije 24/7 u Beogradu | MajstorDex" />
        <meta
          name="twitter:description"
          content="Brze i pouzdane hitne elektro intervencije u Beogradu. Dolazak majstora u roku od 60–90 minuta, dostupnost 24/7 za sve kvarove i hitne popravke."
        />
        <meta name="twitter:image" content="https://majstordex.rs/og-default.jpg" />
      </Head>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 text-gray-800">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm mb-6 text-gray-500 flex flex-wrap items-center gap-1">
          <Link href="/" className="hover:underline text-blue-600">
            Početna
          </Link>
          <span>›</span>
          <Link href="/usluge" className="hover:underline text-blue-600">
            Usluge
          </Link>
          <span>›</span>
          <span aria-current="page" className="text-gray-800 font-semibold">
            Hitne intervencije
          </span>
        </nav>

        {/* Opis usluge */}
        <section className="mb-12 text-lg leading-relaxed">
          <p>
            Kada vam je potrebna brza i pouzdana pomoć zbog elektro kvara, MajstorDex je tu za vas 24/7. Nudimo hitne elektro intervencije u Beogradu sa dolaskom majstora u roku od 60–90 minuta.
          </p>
          <p className="mt-4">
            Bilo da je u pitanju kvar na instalacijama, prekidačima, osiguračima ili bilo koji drugi hitan problem sa električnim uređajima i instalacijama, naš tim je spreman da brzo reši situaciju i obezbedi sigurnost u vašem domu ili poslovnom prostoru.
          </p>
          <p className="mt-4">
            Pokrivamo sva naselja u Beogradu, uključujući Novi Beograd, Zemun, Voždovac, Palilulu, Zvezdaru i druga. Pozovite nas u svakom trenutku, i majstor će doći brzo i spreman.
          </p>
        </section>

        {/* Zašto odabrati MajstorDex? */}
        <section className="bg-yellow-50 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Zašto odabrati MajstorDex za hitne intervencije?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base max-w-xl mx-auto">
            <li>✅ Dostupnost 24/7 za hitne situacije</li>
            <li>✅ Dolazak u roku od 60–90 minuta u Beogradu</li>
            <li>✅ Iskusni majstori sa dugogodišnjim radom</li>
            <li>✅ Sigurna i kvalitetna popravka bez skrivanja troškova</li>
            <li>✅ Garancija na izvedene radove</li>
          </ul>
        </section>

        {/* JSON-LD Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Početna", item: "https://majstordex.rs" },
                { "@type": "ListItem", position: 2, name: "Usluge", item: "https://majstordex.rs/usluge" },
                { "@type": "ListItem", position: 3, name: "Hitne intervencije", item: "https://majstordex.rs/usluge/hitne-intervencije" },
              ],
            }),
          }}
        />
      </article>
    </>
  );
}
