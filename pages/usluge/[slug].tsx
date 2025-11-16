import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Head from "next/head";
import { uslugeMap } from "@/components/uslugeMap";
import type { ComponentType } from "react";

type UslugaProps = {
  isNaseljePage: boolean;
  naselje?: string;
};

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

  // Dok Next još uvek generiše stranicu
  if (!slug || typeof slug !== "string") {
    return (
      <main className="max-w-4xl mx-auto px-4 py-16 text-center">
        <p className="text-lg text-gray-600">Učitavanje…</p>
      </main>
    );
  }

  const naziv = usluge[slug];
  const importFn = uslugeMap[slug];

  // Ako slug ne postoji u mapi — 404
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

  // SEO vrednosti
  const title = `${naziv} | MajstorDex`;
  const description = `Profesionalna usluga: ${naziv} u Beogradu. Dostupni 24/7 — dolazak za 60–90 minuta.`;
  const canonical = `https://majstordex.rs/usluge/${slug}`;
  const ogImage = `/images/${slug}.webp`; // radi jer svaka usluga sada ima svoju sliku

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />

        {/* OG / Social */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
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

      <main className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">{naziv}</h1>

        <UslugaComponent isNaseljePage={false} />
      </main>
    </>
  );
}
