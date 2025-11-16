// pages/usluge/popravka-elektroinstalacija.tsx

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { cene } from "../../src/data/cene";

export default function PopravkaElektroinstalacija() {
  const title = "Popravka elektroinstalacija u Beogradu | MajstorDex";
  const desc =
    "Stručna i sigurna popravka elektroinstalacija u Beogradu. Popravka prekidača, utičnica, osigurača i električnih instalacija uz dolazak majstora za 60–90 minuta.";
  const url = "https://majstordex.rs/usluge/popravka-elektroinstalacija";
  const ogImage = "/images/popravka-elektroinstalacija.webp";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={url} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={ogImage} />
      </Head>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-800">

        {/* HERO SLIKA – ista visina, ne seče se */}
        <div className="w-full rounded-xl overflow-hidden shadow mb-10 bg-white">
          <Image
            src="/images/popravka-elektroinstalacija.webp"
            alt="Popravka elektroinstalacija - MajstorDex"
            width={1600}
            height={900}
            className="object-contain w-full h-auto"
            priority
          />
        </div>

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm mb-6 text-gray-500 flex flex-wrap items-center gap-1">
          <Link href="/" className="hover:underline text-blue-600">Početna</Link>
          <span>›</span>
          <Link href="/usluge" className="hover:underline text-blue-600">Usluge</Link>
          <span>›</span>
          <span className="text-gray-800 font-semibold">Popravka elektroinstalacija</span>
        </nav>

        {/* Naslov */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Popravka elektroinstalacija u Beogradu
        </h1>

        {/* Opis */}
        <section className="mb-12 text-lg leading-relaxed">
          <p>
            Popravka elektroinstalacija zahteva stručnost, odgovornost i iskustvo.
            Bilo da je problem u prekidaču, utičnici, osiguraču ili razvodnoj kutiji,
            naš tim pruža profesionalnu i sigurnu intervenciju.
          </p>

          <p className="mt-4">
            Radimo sve vrste elektroinstalacija — u stanovima, kućama, lokalima,
            poslovnim prostorima i objektima svih veličina.
          </p>

          <p className="mt-4 font-semibold">Najčešće intervencije uključuju:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Popravku i zamenu prekidača</li>
            <li>Zamenu i dijagnostiku utičnica</li>
            <li>Rekonstrukciju razvodnih kutija</li>
            <li>Rešavanje problema sa kablovima i konekcijama</li>
            <li>Pregled i popravku osigurača</li>
            <li>Lociranje kratkih spojeva i kvarova</li>
          </ul>

          <p className="mt-4">
            Dolazak majstora u Beogradu je u roku od{" "}
            <strong>60–90 minuta</strong>. Dostupni smo 24/7 za hitne intervencije.
          </p>
        </section>

        {/* Benefiti */}
        <section className="bg-yellow-50 rounded-xl p-6 shadow-md mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Zašto izabrati MajstorDex?
          </h2>

          <ul className="list-disc list-inside max-w-xl mx-auto space-y-2 text-gray-700">
            <li>Brza i precizna dijagnostika</li>
            <li>Dolazak u roku od 60–90 minuta</li>
            <li>Iskusni i sertifikovani električari</li>
            <li>Garancija na rad i ugrađene komponente</li>
            <li>Transparentne i realne cene</li>
          </ul>
        </section>

        {/* Cena */}
        <section className="bg-yellow-50 rounded-xl p-6 shadow-md text-center">
          <h2 className="text-2xl font-bold mb-3 text-yellow-800">Cena usluge</h2>
          <p className="text-lg text-gray-700 mb-2">
            Orijentaciona cena popravke elektroinstalacija:
          </p>
          <p className="text-3xl font-bold text-yellow-600 mb-3">
            {cene.popravkaElektroinstalacija}
          </p>
          <p className="text-sm text-gray-600">
            Za tačnu cenu i zakazivanje pozovite — dostupni smo 0–24!
          </p>
        </section>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Popravka elektroinstalacija",
              description: desc,
              areaServed: "Beograd",
              provider: {
                "@type": "LocalBusiness",
                name: "MajstorDex",
                url: "https://majstordex.rs",
              },
              url,
              image: ogImage,
            }),
          }}
        />
      </article>
    </>
  );
}
