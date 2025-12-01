// pages/usluge/[slug].tsx

import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Head from "next/head";
import type { ComponentType } from "react";

import { uslugeMap } from "@/components/uslugeMap";

/* ==============================
   TIP PROPSA ZA DINAMIČKE USLUGE
============================== */
type UslugaProps = {
  isNaseljePage: boolean;
  naselje?: string; // opciono na slug stranici
};

/* ==============================
   VALIDNI SLUGOVI I NASLOVI
============================== */
const USLUGE: Record<string, string> = {
  "popravka-ta-peci": "Popravka TA peći",
  "servis-bojlera": "Servis bojlera",
  "pranje-klime": "Čišćenje i pranje klima uređaja",
  "popravka-elektroinstalacija": "Popravka elektroinstalacija",
  "zamena-osiguraca-i-uticnica": "Zamena osigurača i utičnica",
  "led-rasveta": "LED rasveta — ugradnja i montaža",
  "hitne-intervencije": "Hitne elektro intervencije 0–24",
};

/* ==============================
   IKONICE PO SLUGU
============================== */
const IKONE: Record<string, string> = {
  "popravka-ta-peci": "🔥",
  "servis-bojlera": "🚿",
  "pranje-klime": "❄️",
  "popravka-elektroinstalacija": "🔌",
  "zamena-osiguraca-i-uticnica": "🔧",
  "led-rasveta": "💡",
  "hitne-intervencije": "⚡",
};

export default function UslugaPage() {
  const router = useRouter();
  const { slug } = router.query;

  /* ==========================================================
     VALIDACIJA — rešava TS greške kada je slug undefined
  ========================================================== */
  if (typeof slug !== "string") {
    return (
      <main className="max-w-4xl mx-auto px-4 py-20 text-center text-gray-500">
        Učitavanje…
      </main>
    );
  }

  const naziv = USLUGE[slug];
  const icon = IKONE[slug];
  const importFn = uslugeMap[slug];

  /* ==========================================================
     404 — ako usluga ne postoji
  ========================================================== */
  if (!naziv || !importFn) {
    return (
      <main className="text-center py-24">
        <h1 className="text-4xl font-bold text-red-600 mb-2">
          404 — Usluga nije pronađena
        </h1>
        <p className="text-gray-600">Ova usluga nije dostupna.</p>
      </main>
    );
  }

  /* ==========================================================
     DINAMIČKI SADRŽAJ USLUGE SA TIPOVIMA
  ========================================================== */
  const UslugaComponent = dynamic(importFn, {
    ssr: false,
    loading: () => (
      <div className="text-center py-12 text-gray-500">Učitavanje…</div>
    ),
  }) as ComponentType<UslugaProps>;

  /* ============================
        SEO PODACI
  ============================ */
  const canonical = `https://majstordex.rs/usluge/${slug}`;
  const ogImage = `/images/${slug}.webp`;

  const description = `MajstorDex – profesionalna usluga: ${naziv}. Dolazak 60–90 minuta širom Beograda. Dostupno 24/7.`;

  return (
    <>
      <Head>
        <title>{naziv} | MajstorDex</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />

        {/* OpenGraph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${naziv} | MajstorDex`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonical} />

        <meta name="twitter:card" content="summary_large_image" />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: naziv,
              provider: {
                "@type": "LocalBusiness",
                name: "MajstorDex",
                telephone: "+381600500063",
                areaServed: "Beograd",
              },
              description,
              url: canonical,
              image: ogImage,
            }),
          }}
        />
      </Head>

      {/* ======================================================
                          PREMIUM HERO
      ======================================================= */}
      <section className="relative w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20 px-6 overflow-hidden">

        {/* Mesh background */}
        <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-500/25 via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Ikonica */}
          <div className="text-7xl mb-4 drop-shadow-xl">{icon}</div>

          {/* Naslov */}
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            {naziv}
          </h1>

          {/* Podnaslov */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            MajstorDex – stručno izvođenje usluge {naziv.toLowerCase()}.  
            Dostupni 24/7 – dolazak na lokaciju u roku od 60–90 minuta.
          </p>

          {/* CTA dugmad */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+381600500063"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 px-10 rounded-xl transition shadow-xl text-lg"
            >
              📞 Pozovi odmah
            </a>

            <a
              href="#detalji"
              className="border border-white/40 hover:bg-white/10 text-white py-4 px-10 rounded-xl transition shadow-xl text-lg"
            >
              Pogledaj detalje
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================
                          SADRŽAJ USLUGE
      ======================================================= */}
      <main id="detalji" className="max-w-4xl mx-auto px-4 py-14 text-gray-800">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
          Detalji usluge
        </h2>

        {/* Ova linija sada više nije crvena */}
        <UslugaComponent isNaseljePage={false} naselje="Beograd" />
      </main>
    </>
  );
}
