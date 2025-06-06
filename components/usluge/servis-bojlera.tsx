// pages/usluge/servis-bojlera.tsx

import Head from "next/head";
import Link from "next/link";

export default function ServisBojlera() {
  return (
    <>
      <Head>
        <title>Servis bojlera | MajstorDex</title>
        <meta
          name="description"
          content="Profesionalan servis bojlera u Beogradu. Brza i kvalitetna usluga sa dolaskom u roku od 60–90 minuta. Popravka grejača, termostata i drugih komponenti."
        />
        <link rel="canonical" href="https://majstordex.rs/usluge/servis-bojlera" />

        {/* Open Graph */}
        <meta property="og:title" content="Servis bojlera | MajstorDex" />
        <meta
          property="og:description"
          content="Profesionalan servis bojlera u Beogradu. Brza i kvalitetna usluga sa dolaskom u roku od 60–90 minuta. Popravka grejača, termostata i drugih komponenti."
        />
        <meta property="og:url" content="https://majstordex.rs/usluge/servis-bojlera" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://majstordex.rs/og-default.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Servis bojlera | MajstorDex" />
        <meta
          name="twitter:description"
          content="Profesionalan servis bojlera u Beogradu. Brza i kvalitetna usluga sa dolaskom u roku od 60–90 minuta. Popravka grejača, termostata i drugih komponenti."
        />
        <meta name="twitter:image" content="https://majstordex.rs/og-default.jpg" />
      </Head>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 text-gray-800">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="text-sm mb-6 text-gray-500 flex flex-wrap items-center gap-1"
        >
          <Link href="/" className="hover:underline text-blue-600">
            Početna
          </Link>
          <span>›</span>
          <Link href="/usluge" className="hover:underline text-blue-600">
            Usluge
          </Link>
          <span>›</span>
          <span aria-current="page" className="text-gray-800 font-semibold">
            Servis bojlera
          </span>
        </nav>

        {/* Opis usluge */}
        <section className="mb-12 text-lg leading-relaxed">
          <p>
            Bojleri su nezamenjiv deo svakog doma, ali kao i svaki uređaj, sa
            vremenom mogu doći do problema kao što su kvarovi grejača, termostata
            ili curenje vode. Naš stručni tim pruža profesionalan servis bojlera
            svih tipova i modela, brzo i efikasno, uz dolazak na adresu u roku
            od 60–90 minuta širom Beograda.
          </p>
          <div className="mt-4">
            <p>Usluge koje nudimo:</p>
            <ul className="list-disc list-inside mt-2">
              <li>Popravka i zamena grejača</li>
              <li>Popravka i zamena termostata</li>
              <li>Reparacija i zamena sigurnosnih ventila</li>
              <li>Rešavanje problema sa curenjem</li>
              <li>Čišćenje i održavanje bojlera</li>
              <li>Preventivne provere i dijagnostika</li>
            </ul>
          </div>
          <p className="mt-4">
            Pokrivamo sve beogradske opštine, uključujući Stari Grad, Zemun,
            Vračar, Novi Beograd i ostala naselja. Kontaktirajte nas za pouzdan i
            brz servis bojlera.
          </p>
          <p className="mt-4">
            Redovno održavanje bojlera produžava mu vek trajanja i štedi energiju.
            Ne dozvolite da kvarovi utiču na vašu udobnost – pozovite MajstorDex
            odmah!
          </p>
        </section>

        {/* Zašto odabrati MajstorDex? */}
        <section className="bg-yellow-50 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Zašto odabrati MajstorDex?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base max-w-xl mx-auto">
            <li>✅ Dolazak u roku od 60–90 minuta širom Beograda</li>
            <li>✅ Iskusni i pouzdani majstori sa višegodišnjim iskustvom</li>
            <li>✅ Transparentne cene i bez skrivenih troškova</li>
            <li>✅ Garancija na ugrađene delove i rad</li>
            <li>✅ Dostupnost 24/7 za hitne intervencije</li>
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
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Početna",
                  item: "https://majstordex.rs",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Usluge",
                  item: "https://majstordex.rs/usluge",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Servis bojlera",
                  item: "https://majstordex.rs/usluge/servis-bojlera",
                },
              ],
            }),
          }}
        />
      </article>
    </>
  );
}
