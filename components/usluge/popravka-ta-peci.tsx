// pages/usluge/popravka-ta-peci.tsx

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { cene } from "../../src/data/cene";

export default function PopravkaTaPeci() {
  const title = "Popravka TA peći | MajstorDex";
  const desc =
    "Profesionalna popravka TA peći u Beogradu — zamena grejača, termostata, ventilatora i svih električnih delova. Dolazak majstora za 60–90 minuta, dostupno 24/7.";
  const url = "https://majstordex.rs/usluge/popravka-ta-peci";
  const ogImage = "/images/popravka-ta-peci.webp";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={url} />

        {/* OG */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={ogImage} />
      </Head>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-800">

        {/* HERO SLIKA — ispravljen stil, bez sečenja */}
        <div className="w-full rounded-xl overflow-hidden shadow mb-10 bg-white">
          <Image
            src="/images/popravka-ta-peci.webp"
            alt="Popravka TA peći - MajstorDex"
            width={1600}
            height={900}
            className="object-contain w-full h-auto"
            priority
          />
        </div>

        {/* BREADCRUMB */}
        <nav className="text-sm mb-6 text-gray-500 flex flex-wrap gap-1">
          <Link href="/" className="hover:underline text-blue-600">Početna</Link>
          <span>›</span>
          <Link href="/usluge" className="hover:underline text-blue-600">Usluge</Link>
          <span>›</span>
          <span className="font-semibold text-gray-800">Popravka TA peći</span>
        </nav>

        {/* NASLOV */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Popravka TA peći u Beogradu
        </h1>

        {/* OPIS USLUGE */}
        <section className="mb-12 text-lg leading-relaxed">
          <p>
            TA peći su jedan od najisplativijih načina grejanja, ali mogu doći
            do kvarova poput pregorelih grejača, lošeg termostata, neispravnih
            sklopki ili ventilatora.
          </p>

          <p className="mt-4">
            MajstorDex vrši kompletnu dijagnostiku i popravku svih modela —
            Magnohrom, Elind, Alfa, MBS i druge.
          </p>

          <div className="mt-4">
            <p className="font-semibold">Najčešće intervencije:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Zamena i popravka grejača</li>
              <li>Popravka termostata i bimetala</li>
              <li>Zamena sklopki i osigurača</li>
              <li>Popravka ventilatora, ležajeva i turbina</li>
              <li>Rešavanje problema punjenja i grejanja</li>
            </ul>
          </div>

          <p className="mt-4">
            Dolazak majstora u Beogradu — najčešće u roku od{" "}
            <strong>60–90 minuta</strong>. Radimo 24/7.
          </p>
        </section>

        {/* BENEFITI */}
        <section className="bg-yellow-50 rounded-xl p-6 shadow-md mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Zašto izabrati MajstorDex?
          </h2>
          <ul className="list-disc list-inside space-y-2 max-w-xl mx-auto text-gray-700">
            <li>Dolazak za 60–90 minuta</li>
            <li>Iskusni i licencirani električari</li>
            <li>Garancija na rad i ugrađene delove</li>
            <li>Transparentne cene</li>
            <li>Dostupnost 24/7</li>
          </ul>
        </section>

        {/* CENA */}
        <section className="bg-yellow-50 rounded-xl p-6 shadow-md text-center">
          <h2 className="text-2xl font-bold mb-3 text-yellow-800">Cena usluge</h2>
          <p className="text-lg text-gray-700 mb-2">Orijentaciona cena popravke TA peći:</p>
          <p className="text-3xl font-bold text-yellow-600 mb-3">{cene.popravkaTaPeci}</p>
          <p className="text-sm text-gray-600">
            Za preciznu cenu pozovite — dostupni smo 0–24!
          </p>
        </section>
      </article>
    </>
  );
}
