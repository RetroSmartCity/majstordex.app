// pages/usluge/popravka-ta-peci.tsx

import Head from "next/head";
import Link from "next/link";

export default function PopravkaTaPeci() {
  return (
    <>
      <Head>
        <title>Popravka TA peći | MajstorDex</title>
        <meta
          name="description"
          content="Profesionalna popravka TA peći u Beogradu. Brza i kvalitetna usluga sa dolaskom u roku od 60–90 minuta. Popravka grejača, termostata, ventilatora i drugih kvarova."
        />
        <link rel="canonical" href="https://majstordex.rs/usluge/popravka-ta-peci" />

        {/* Open Graph */}
        <meta property="og:title" content="Popravka TA peći | MajstorDex" />
        <meta
          property="og:description"
          content="Profesionalna popravka TA peći u Beogradu. Brza i kvalitetna usluga sa dolaskom u roku od 60–90 minuta. Popravka grejača, termostata, ventilatora i drugih kvarova."
        />
        <meta property="og:url" content="https://majstordex.rs/usluge/popravka-ta-peci" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://majstordex.rs/og-default.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Popravka TA peći | MajstorDex" />
        <meta
          name="twitter:description"
          content="Profesionalna popravka TA peći u Beogradu. Brza i kvalitetna usluga sa dolaskom u roku od 60–90 minuta. Popravka grejača, termostata, ventilatora i drugih kvarova."
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
            Popravka TA peći
          </span>
        </nav>

        {/* Opis usluge */}
        <section className="mb-12 text-lg leading-relaxed">
          <p>
            TA (termoakumulacione) peći su efikasan način grejanja, ali mogu se
            pokvariti zbog problema sa grejačem, termostatom, osiguračima ili
            ventilatorom. Naš stručni tim vrši dijagnostiku i popravku svih kvarova
            na TA pećima, bilo kog modela i proizvođača, brzo i profesionalno.
          </p>
          <div className="mt-4">
            <p>Popravke koje radimo uključuju:</p>
            <ul className="list-disc list-inside mt-2">
              <li>Zamenu i popravku grejača</li>
              <li>Popravku i zamenu termostata</li>
              <li>Zamenu pregorelih sklopki i osigurača</li>
              <li>Popravku i zamenu ventilatora</li>
              <li>Popravku električnih kablova i priključaka</li>
              <li>Rešavanje problema sa punjenjem i grejanjem</li>
            </ul>
          </div>
          <p className="mt-4">
            Radimo na teritoriji celog Beograda, uključujući Zemun, Novi Beograd,
            Voždovac, Zvezdaru, Palilulu i druga naselja. Dolazak majstora je
            moguć u roku od 60–90 minuta ili prema dogovoru.
          </p>
          <p className="mt-4">
            Neispravna TA peć može dovesti do povećane potrošnje električne
            energije i sigurnosnih problema. Ne čekajte da problem postane veći –
            pozovite MajstorDex odmah.
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
                  name: "Popravka TA peći",
                  item: "https://majstordex.rs/usluge/popravka-ta-peci",
                },
              ],
            }),
          }}
        />
      </article>
    </>
  );
}
