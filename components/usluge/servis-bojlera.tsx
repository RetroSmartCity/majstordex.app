// pages/usluge/servis-bojlera.tsx

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { cene } from "@/data/cene";

export default function ServisBojlera() {
  return (
    <>
      <Head>
        <title>Servis bojlera | MajstorDex</title>
        <meta
          name="description"
          content="Servis bojlera u Beogradu — zamena grejača, termostata, ventila i profesionalno čišćenje. Dolazak za 60–90 min. MajstorDex 24/7."
        />
        <link rel="canonical" href="https://majstordex.rs/usluge/servis-bojlera" />

        {/* Open Graph */}
        <meta property="og:title" content="Servis bojlera | MajstorDex" />
        <meta
          property="og:description"
          content="Profesionalan servis bojlera — popravka grejača, termostata i ventila. Dolazak u roku od 60–90 minuta. 24/7 dostupni."
        />
        <meta property="og:image" content="https://majstordex.rs/images/servis-bojlera.webp" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://majstordex.rs/images/servis-bojlera.webp" />
      </Head>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-800">

        {/* HERO SLIKA – u istom stilu kao sve ostale usluge */}
       <div className="w-full mb-8 rounded-2xl overflow-hidden shadow-lg bg-white">
  <Image
    src="/images/servis-bojlera.webp"
    alt="Servis bojlera MajstorDex"
    width={1600}
    height={900}
    className="w-full h-auto object-contain"
    priority
  />
</div>


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

        {/* OPIS USLUGE */}
        <section className="mb-12 text-lg leading-relaxed">
          <p>
            Bojleri vremenom mogu imati kvarove — pregoreo grejač, loš termostat,
            slabe instalacije, kamenac ili curenje vode. Naš tim pruža profesionalan
            servis bojlera svih brendova i modela uz dolazak u roku od 60–90 minuta.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            Usluge koje obavljamo:
          </h2>

          <ul className="list-disc list-inside space-y-1">
            <li>Zamena i popravka grejača</li>
            <li>Popravka ili zamena termostata</li>
            <li>Zamena sigurnosnog ventila</li>
            <li>Otklanjanje curenja i hidro problema</li>
            <li>Profesionalno čišćenje i uklanjanje kamenca</li>
            <li>Preventivna dijagnostika i pregled svih komponenti</li>
          </ul>

          <p className="mt-4">
            Radimo na celoj teritoriji Beograda — Stari Grad, Novi Beograd, Zemun,
            Rakovica, Voždovac, Zvezdara i ostala naselja.
          </p>

          <p className="mt-4">
            Redovno održavanje značajno produžava vek bojlera, smanjuje potrošnju
            struje i sprečava kvarove. Naša preporuka je da se servis radi jednom godišnje.
          </p>
        </section>

        {/* ZAŠTO MAJSTORDEX */}
        <section className="bg-yellow-50 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Zašto odabrati MajstorDex?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 max-w-xl mx-auto">
            <li>Dolazak u roku od 60–90 minuta</li>
            <li>Licencirani, iskusni majstori</li>
            <li>Garancija na ugrađene delove i rad</li>
            <li>Transparentne i fer cene</li>
            <li>Dostupni 24/7 – radimo i praznicima</li>
          </ul>
        </section>

        {/* CENA USLUGE */}
        <section className="bg-yellow-50 rounded-xl p-6 shadow-md mt-10 text-center">
          <h2 className="text-2xl font-bold mb-3 text-yellow-800">Cena usluge</h2>
          <p className="text-gray-700 mb-2 text-lg">Orijentaciona cena servisa bojlera:</p>
          <p className="text-3xl font-bold text-yellow-600 mb-2">{cene.servisBojlera}</p>
          <p className="text-sm text-gray-600">
            Preciznu cenu dobijate nakon dijagnostike — pozovite nas 0–24!
          </p>
        </section>

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Početna", item: "https://majstordex.rs" },
                { "@type": "ListItem", position: 2, name: "Usluge", item: "https://majstordex.rs/usluge" },
                { "@type": "ListItem", position: 3, name: "Servis bojlera", item: "https://majstordex.rs/usluge/servis-bojlera" }
              ]
            }),
          }}
        />
      </article>
    </>
  );
}
