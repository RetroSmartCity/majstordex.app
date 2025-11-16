// pages/usluge/zamena-osiguraca-i-uticnica.tsx

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { cene } from "../../src/data/cene";

export default function ZamenaOsiguracaIUticnica() {
  const title = "Zamena osigurača i utičnica u Beogradu | MajstorDex";
  const desc =
    "Stručna i brza zamena osigurača i utičnica u Beogradu. Sigurnost i pouzdan rad elektro instalacija uz dolazak majstora za 60–90 minuta.";
  const url = "https://majstordex.rs/usluge/zamena-osiguraca-i-uticnica";
  const ogImage = "/images/zamena-osigraca-i-uticnica.webp";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={url} />

        {/* OG */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={ogImage} />
      </Head>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-800">

        {/* HERO SLIKA – ista visina, bez sečenja */}
        <div className="w-full rounded-xl overflow-hidden shadow mb-10 bg-white">
          <Image
            src="/images/zamena-osigraca-i-uticnica.webp"
            alt="Zamena osigurača i utičnica - MajstorDex"
            width={1600}
            height={900}
            className="object-contain w-full h-auto"
            priority
          />
        </div>

        {/* BREADCRUMB */}
        <nav aria-label="Breadcrumb" className="text-sm mb-6 text-gray-500 flex flex-wrap items-center gap-1">
          <Link href="/" className="hover:underline text-blue-600">Početna</Link>
          <span>›</span>
          <Link href="/usluge" className="hover:underline text-blue-600">Usluge</Link>
          <span>›</span>
          <span className="text-gray-800 font-semibold">Zamena osigurača i utičnica</span>
        </nav>

        {/* NASLOV */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Zamena osigurača i utičnica u Beogradu
        </h1>

        {/* OPIS USLUGE */}
        <section className="mb-12 text-lg leading-relaxed">
          <p>
            Zamena osigurača i utičnica je ključna za bezbedno i pravilno
            funkcionisanje elektroinstalacija. Mnogi kvarovi nastaju zbog
            dotrajalih ili pregorelih komponenti.
          </p>

          <p className="mt-4">
            MajstorDex obavlja profesionalnu zamenu osigurača, automatskih
            sklopki, utičnica i prekidača — brzo, sigurno i uz poštovanje svih
            elektro standarda.
          </p>

          <p className="mt-4 font-semibold">Najčešće intervencije:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Zamena svih tipova osigurača (automatski, keramički, automativi)</li>
            <li>Montaža i zamena utičnica (šuko, uzemljenje, modularne)</li>
            <li>Zamena prekidača i kombinovanih tastera</li>
            <li>Rešavanje oštećenih kablova i izvoda</li>
            <li>Modernizacija elektro instalacije</li>
          </ul>

          <p className="mt-4">
            Dolazak majstora u Beogradu je u roku od{" "}
            <strong>60–90 minuta</strong>, a intervencije su dostupne 24/7.
          </p>
        </section>

        {/* BENEFITI */}
        <section className="bg-yellow-50 rounded-xl p-6 shadow-md mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Zašto izabrati MajstorDex?
          </h2>
          <ul className="list-disc list-inside max-w-xl mx-auto space-y-2 text-gray-700">
            <li>Kvalitetni i sigurni materijali</li>
            <li>Stručna i brza ugradnja</li>
            <li>Dolazak u roku od 60–90 minuta</li>
            <li>Garancija na rad i delove</li>
            <li>Transparentna cena bez skrivenih troškova</li>
          </ul>
        </section>

        {/* CENA */}
        <section className="bg-yellow-50 rounded-xl p-6 shadow-md text-center">
          <h2 className="text-2xl font-bold mb-3 text-yellow-800">Cena usluge</h2>
          <p className="text-gray-700 text-lg mb-2">
            Orijentaciona cena za zamenu osigurača i utičnica:
          </p>
          <p className="text-3xl font-bold text-yellow-600 mb-3">
            {cene.zamenaOsiguraca}
          </p>
          <p className="text-sm text-gray-600">
            Za preciznu cenu i termin dolaska — pozovite nas, dostupni smo 24/7!
          </p>
        </section>
      </article>
    </>
  );
}
