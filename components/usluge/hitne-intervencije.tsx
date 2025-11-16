// pages/usluge/hitne-intervencije.tsx

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { cene } from "../../src/data/cene";

export default function HitneIntervencije() {
  const title = "Hitne elektro intervencije 24/7 u Beogradu | MajstorDex";
  const desc =
    "Brze i pouzdane hitne elektro intervencije u Beogradu. Dolazak majstora za 60–90 minuta, dostupnost 24/7 za sve kvarove i elektro hitne situacije.";
  const url = "https://majstordex.rs/usluge/hitne-intervencije";
  const ogImage = "/images/hitne-intervencije.webp";

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

        {/* HERO SLIKA – ujednačeno, kao druge usluge */}
        <div className="w-full rounded-xl overflow-hidden shadow mb-10 bg-white">
          <Image
            src="/images/hitne-intervencije.webp"
            alt="Hitne elektro intervencije - MajstorDex"
            width={1600}
            height={900}
            className="object-contain w-full h-auto"
            priority
          />
        </div>

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="text-sm mb-6 text-gray-500 flex flex-wrap items-center gap-1"
        >
          <Link href="/" className="hover:underline text-blue-600">Početna</Link>
          <span>›</span>
          <Link href="/usluge" className="hover:underline text-blue-600">Usluge</Link>
          <span>›</span>
          <span className="text-gray-800 font-semibold">Hitne intervencije</span>
        </nav>

        {/* Naslov */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Hitne elektro intervencije u Beogradu — 24/7
        </h1>

        {/* Opis */}
        <section className="mb-12 text-lg leading-relaxed">
          <p>
            Kada se desi iznenadni kvar na elektro instalacijama, potrebno je reagovati odmah.
            MajstorDex tim je dostupan <strong>24 sata dnevno, svih 7 dana u nedelji</strong>.
          </p>

          <p className="mt-4">
            Dolazak majstora je u roku od <strong>60–90 minuta</strong> u svim beogradskim
            opštinama — Novi Beograd, Voždovac, Zemun, Palilula, Čukarica, Rakovica i druga.
          </p>

          <p className="mt-4 font-semibold">Najčešće hitne intervencije:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Kratak spoj u instalacijama</li>
            <li>Pregoreo osigurač ili kvar na automatskom osiguraču</li>
            <li>Izbijanje struje iz utičnice ili prekidača</li>
            <li>Neispravno svetlo, prekidač ili razvodna kutija</li>
            <li>Prekid faze ili nestanak struje u delu stana</li>
            <li>Hitni kvarovi na bojleru, TA peći i drugim uređajima</li>
          </ul>

          <p className="mt-4">
            Naš tim dolazi spreman sa potrebnim alatom i materijalom kako bi rešio kvar odmah na licu mesta.
          </p>
        </section>

        {/* Benefiti */}
        <section className="bg-yellow-50 rounded-xl p-6 shadow-md mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Zašto izabrati MajstorDex za hitne intervencije?
          </h2>

          <ul className="list-disc list-inside max-w-xl mx-auto space-y-2 text-gray-700">
            <li>Dolazak 24/7 — odmah nakon prijave</li>
            <li>Brza reakcija (60–90 minuta)</li>
            <li>Stručni i pouzdani električari</li>
            <li>Garancija na rad i delove</li>
            <li>Transparentne cene i profesionalna dijagnostika</li>
          </ul>
        </section>

        {/* Cena */}
        <section className="bg-yellow-50 rounded-xl p-6 shadow-md text-center">
          <h2 className="text-2xl font-bold mb-3 text-yellow-800">Cena usluge</h2>
          <p className="text-lg text-gray-700 mb-2">
            Orijentaciona cena hitne intervencije:
          </p>
          <p className="text-3xl font-bold text-yellow-600 mb-3">
            {cene.hitneIntervencije}
          </p>
          <p className="text-sm text-gray-600">
            Pozovite nas za tačnu cenu — dostupni smo 0–24!
          </p>
        </section>

        {/* SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Hitne elektro intervencije",
              description: desc,
              areaServed: "Beograd",
              provider: {
                "@type": "LocalBusiness",
                name: "MajstorDex",
                url: "https://majstordex.rs",
              },
              image: ogImage,
              url,
            }),
          }}
        />
      </article>
    </>
  );
}
