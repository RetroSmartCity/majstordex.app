// pages/usluge/popravka-elektroinstalacija.tsx

import Head from "next/head";
import Link from "next/link";
import { cene } from "../../src/data/cene";


export default function PopravkaElektroinstalacija() {
  return (
    <>
      <Head>
        <title>Popravka elektroinstalacija u Beogradu | MajstorDex</title>
        <meta
          name="description"
          content="Stručna i sigurna popravka elektroinstalacija u Beogradu. Popravka prekidača, utičnica, osigurača i celokupnih instalacija sa dolaskom u roku od 60–90 minuta."
        />
        <link rel="canonical" href="https://majstordex.rs/usluge/popravka-elektroinstalacija" />

        {/* Open Graph */}
        <meta property="og:title" content="Popravka elektroinstalacija u Beogradu | MajstorDex" />
        <meta
          property="og:description"
          content="Stručna i sigurna popravka elektroinstalacija u Beogradu. Popravka prekidača, utičnica, osigurača i celokupnih instalacija sa dolaskom u roku od 60–90 minuta."
        />
        <meta property="og:url" content="https://majstordex.rs/usluge/popravka-elektroinstalacija" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://majstordex.rs/og-default.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Popravka elektroinstalacija u Beogradu | MajstorDex" />
        <meta
          name="twitter:description"
          content="Stručna i sigurna popravka elektroinstalacija u Beogradu. Popravka prekidača, utičnica, osigurača i celokupnih instalacija sa dolaskom u roku od 60–90 minuta."
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
            Popravka elektroinstalacija
          </span>
        </nav>

        {/* Opis usluge */}
        <section className="mb-12 text-lg leading-relaxed">
          <p>
            Popravka elektroinstalacija zahteva stručnost i preciznost. Naš tim
            pruža pouzdane usluge popravke prekidača, utičnica, osigurača,
            razvodnih kutija i drugih elemenata električnih instalacija.
          </p>
          <p className="mt-4">
            Radimo na svim tipovima elektroinstalacija u stanovima, kućama i poslovnim prostorima.
            Problemi sa strujom mogu ugroziti sigurnost, zato reagujte brzo i
            pozovite MajstorDex za hitnu i kvalitetnu popravku.
          </p>
          <p className="mt-4">
            Pokrivamo Beograd i okolna naselja sa dolaskom u roku od 60–90 minuta.
          </p>
        </section>

        {/* Zašto odabrati MajstorDex? */}
        <section className="bg-yellow-50 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Zašto odabrati MajstorDex za popravku elektroinstalacija?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base max-w-xl mx-auto">
            <li>✅ Brza i precizna dijagnostika i popravka</li>
            <li>✅ Dolazak u roku od 60–90 minuta širom Beograda</li>
            <li>✅ Iskusni električari sa višegodišnjim iskustvom</li>
            <li>✅ Transparentne cene i garancija na rad</li>
            <li>✅ Sigurnost vašeg doma na prvom mestu</li>
          </ul>
        </section>

        {/* Cena usluge */}
<section className="bg-yellow-50 rounded-xl p-6 shadow-md mt-10 text-center">
  <h2 className="text-2xl font-bold mb-3 text-yellow-800">Cena usluge</h2>
  <p className="text-gray-700 mb-2 text-lg">
    Orijentaciona cena za popravku elektroinstalacija:
  </p>
<p className="text-3xl font-bold text-yellow-600 mb-2">{cene.popravkaElektroinstalacija}</p>
  <p className="text-sm text-gray-600">
    Za preciznu cenu i termin dolaska, pozovite nas — dostupni smo 0-24!
  </p>
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
                { "@type": "ListItem", position: 3, name: "Popravka elektroinstalacija", item: "https://majstordex.rs/usluge/popravka-elektroinstalacija" },
              ],
            }),
          }}
        />
      </article>
    </>
  );
}
