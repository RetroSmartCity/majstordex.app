// pages/usluge/zamena-osiguraca-i-uticnica.tsx

import Head from "next/head";
import Link from "next/link";

export default function ZamenaOsiguracaIUticnica() {
  return (
    <>
      <Head>
        <title>Zamena osigurača i utičnica u Beogradu | MajstorDex</title>
        <meta
          name="description"
          content="Stručna i brza zamena osigurača i utičnica u Beogradu. Sigurnost i funkcionalnost elektro instalacija sa dolaskom majstora u roku od 60–90 minuta."
        />
        <link rel="canonical" href="https://majstordex.rs/usluge/zamena-osiguraca-i-uticnica" />

        {/* Open Graph */}
        <meta property="og:title" content="Zamena osigurača i utičnica u Beogradu | MajstorDex" />
        <meta
          property="og:description"
          content="Stručna i brza zamena osigurača i utičnica u Beogradu. Sigurnost i funkcionalnost elektro instalacija sa dolaskom majstora u roku od 60–90 minuta."
        />
        <meta property="og:url" content="https://majstordex.rs/usluge/zamena-osiguraca-i-uticnica" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://majstordex.rs/og-default.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zamena osigurača i utičnica u Beogradu | MajstorDex" />
        <meta
          name="twitter:description"
          content="Stručna i brza zamena osigurača i utičnica u Beogradu. Sigurnost i funkcionalnost elektro instalacija sa dolaskom majstora u roku od 60–90 minuta."
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
            Zamena osigurača i utičnica
          </span>
        </nav>

        {/* Opis usluge */}
        <section className="mb-12 text-lg leading-relaxed">
          <p>
            Zamena osigurača i utičnica je neophodna za bezbedno i pouzdano funkcionisanje vaše elektro instalacije. Naš tim stručnjaka vrši brzu i sigurnu zamenu, koristeći kvalitetne materijale i proverene metode.
          </p>
          <p className="mt-4">
            Bilo da je u pitanju dotrajala utičnica, oštećeni osigurač ili potreba za modernizacijom elektro sistema, obratite se MajstorDex-u za profesionalnu uslugu sa dolaskom u roku od 60–90 minuta širom Beograda.
          </p>
          <p className="mt-4">
            Vaša sigurnost nam je prioritet, zato koristimo samo sertifikovane komponente i pridržavamo se svih bezbednosnih standarda.
          </p>
        </section>

        {/* Zašto odabrati MajstorDex? */}
        <section className="bg-yellow-50 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Prednosti zamene osigurača i utičnica kod MajstorDex-a
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base max-w-xl mx-auto">
            <li>✅ Kvalitetni i sigurni materijali</li>
            <li>✅ Stručna i brza usluga</li>
            <li>✅ Dolazak u roku od 60–90 minuta širom Beograda</li>
            <li>✅ Garancija na rad i ugrađene komponente</li>
            <li>✅ Transparentna cena bez skrivenih troškova</li>
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
                { "@type": "ListItem", position: 3, name: "Zamena osigurača i utičnica", item: "https://majstordex.rs/usluge/zamena-osiguraca-i-uticnica" },
              ],
            }),
          }}
        />
      </article>
    </>
  );
}
