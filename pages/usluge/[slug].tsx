// pages/usluge/[slug].tsx

import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Head from "next/head";
import type { ComponentType } from "react";

// Mapa za dinamički import
import { uslugeMap } from "@/components/uslugeMap";

type UslugaProps = {
  isNaseljePage: boolean;
  naselje?: string;
};

// Lista usluga + nazivi
const usluge: Record<string, string> = {
  "adaptacija-stana": "Kompletna adaptacija stana - Ključ u ruke",
  "led-rasveta": "LED rasveta - prodaja i ugradnja",
  "servis-bojlera": "Servis bojlera",
  "pranje-klime": "Pranje klima uređaja",
  "popravka-ta-peci": "Popravka TA peći",
  "popravka-elektroinstalacija": "Popravka elektroinstalacija",
  "zamena-osiguraca-i-uticnica": "Zamena osigurača i utičnica",
  "hitne-intervencije": "Hitne intervencije 0-24",
};

export default function UslugaPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Loading stanje
  if (!slug || typeof slug !== "string") {
    return (
      <main className="max-w-4xl mx-auto px-4 py-16 text-center">
        <p className="text-lg text-gray-600">Učitavanje…</p>
      </main>
    );
  }

  const naziv = usluge[slug];
  const importFn = uslugeMap[slug];
  const ogImage = `/images/${slug}.webp`;

  // 404 fallback
  if (!naziv || !importFn) {
    return (
      <main className="text-center py-20">
        <h1 className="text-3xl text-red-600 font-semibold">
          404 – Stranica nije pronađena
        </h1>
      </main>
    );
  }

  const UslugaComponent = dynamic(importFn, {
    ssr: false,
    loading: () => (
      <div className="text-center py-10">
        <p className="text-gray-500 text-lg">Učitavanje sadržaja…</p>
      </div>
    ),
  }) as ComponentType<UslugaProps>;

  const title = `${naziv} | MajstorDex`;
  const description = `Profesionalna usluga: ${naziv} u Beogradu. Dostupni 24/7 — dolazak za 60–90 minuta.`;
  const canonical = `https://majstordex.rs/usluge/${slug}`;

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />

        {/* OG tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content={naziv} />

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
                areaServed: "Beograd",
              },
              url: canonical,
              image: ogImage,
              description,
            }),
          }}
        />
      </Head>

      {/* =============== PREMIUM HERO V2 =============== */}
      <section className="relative w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20 px-6 overflow-hidden">

        {/* Mesh background */}
        <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-500/30 via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">

          {/* Automatska ikonica */}
          <div className="text-6xl mb-6 drop-shadow-2xl">
            {{
              "servis-bojlera": "🚿",
              "popravka-ta-peci": "🔥",
              "led-rasveta": "💡",
              "pranje-klime": "🧊",
              "popravka-elektroinstalacija": "🔌",
              "zamena-osiguraca-i-uticnica": "🔧",
              "adaptacija-stana": "🏠",
              "hitne-intervencije": "⚡",
            }[slug] || "🔧"}
          </div>

          {/* H1 SEO naslov */}
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
            {naziv}
          </h1>

          {/* SEO opis */}
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10">
            Profesionalna usluga {naziv.toLowerCase()} u Beogradu. 
            Dostupni 24/7 — dolazak za 60–90 minuta bilo gde u gradu.
          </p>

          {/* CTA dugmići */}
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

      {/* =============== SADRŽAJ STRANICE =============== */}
      <main id="detalji" className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Detalji usluge
        </h2>

        <UslugaComponent isNaseljePage={false} />
      </main>
    </>
  );
}
