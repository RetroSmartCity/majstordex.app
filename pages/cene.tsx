// pages/cene.tsx

import Head from "next/head";
import Link from "next/link";
import { cene } from "../src/data/cene";

export default function Cene() {
  return (
    <>
      <Head>
        <title>Cenovnik usluga | MajstorDex</title>
        <meta
          name="description"
          content="Pogledajte cenovnik usluga MajstorDex. Orijentacione cene za servis bojlera, čišćenje klima uređaja, popravku elektroinstalacija i još mnogo toga. Pozovite za tačne informacije!"
        />
        <link rel="canonical" href="https://majstordex.rs/cene" />

        {/* Open Graph */}
        <meta property="og:title" content="Cenovnik usluga | MajstorDex" />
        <meta
          property="og:description"
          content="Pogledajte cenovnik usluga MajstorDex. Orijentacione cene za servis bojlera, čišćenje klima uređaja, popravku elektroinstalacija i još mnogo toga."
        />
        <meta property="og:url" content="https://majstordex.rs/cene" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://majstordex.rs/og-default.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cenovnik usluga | MajstorDex" />
        <meta
          name="twitter:description"
          content="Pogledajte cenovnik usluga MajstorDex. Orijentacione cene za servis bojlera, čišćenje klima uređaja, popravku elektroinstalacija i još mnogo toga."
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
          <span aria-current="page" className="text-gray-800 font-semibold">
            Cenovnik usluga
          </span>
        </nav>

        {/* Naslov stranice */}
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">
          Cenovnik usluga
        </h1>
        <p className="text-center text-lg text-gray-700 mb-10">
          Ovde možete pronaći orijentacione cene za naše usluge. Za tačnu cenu i termin dolaska, pozovite nas — dostupni smo 24/7!
        </p>

        {/* Lista cena */}
        <section className="space-y-6">
          <div className="bg-yellow-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2 text-yellow-800">Servis bojlera</h2>
            <p className="text-xl font-bold text-yellow-600">{cene.servisBojlera}</p>
            <p className="text-gray-700 text-sm">Popravka grejača, termostata, ventila, čišćenje.</p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2 text-yellow-800">Čišćenje klima uređaja</h2>
            <p className="text-xl font-bold text-yellow-600">{cene.pranjeKlime}</p>
            <p className="text-gray-700 text-sm">Dubinsko pranje i dezinfekcija klima uređaja.</p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2 text-yellow-800">Popravka elektroinstalacija</h2>
            <p className="text-xl font-bold text-yellow-600">{cene.popravkaElektroinstalacija}</p>
            <p className="text-gray-700 text-sm">Zamena kablova, prekidača, utičnica, osigurača.</p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2 text-yellow-800">Popravka TA peći</h2>
            <p className="text-xl font-bold text-yellow-600">{cene.popravkaTaPeci}</p>
            <p className="text-gray-700 text-sm">Zamena grejača, termostata, popravka kontakata.</p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2 text-yellow-800">Zamena osigurača i utičnica</h2>
            <p className="text-xl font-bold text-yellow-600">{cene.zamenaOsiguracaIUticnica}</p>
            <p className="text-gray-700 text-sm">Ugradnja osigurača, utičnica, sigurnosne rasvete.</p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2 text-yellow-800">Hitne intervencije 0-24</h2>
            <p className="text-xl font-bold text-yellow-600">{cene.hitneIntervencije}</p>
            <p className="text-gray-700 text-sm">Dolazak na lice mesta u roku od 60-90 minuta.</p>
          </div>
        </section>

        {/* Poziv na akciju */}
        <p className="text-center mt-10 text-lg">
          📞 Pozovite nas za više informacija:{" "}
          <a
            href="tel:+381600500063"
            className="text-blue-600 hover:underline font-semibold"
          >
            060 0 5000 63
          </a>
        </p>
      </article>
    </>
  );
}
