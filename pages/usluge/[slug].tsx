import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Head from "next/head";
import { uslugeMap } from "@/components/uslugeMap";
import type { ComponentType } from "react";

type UslugaProps = {
  isNaseljePage: boolean;
  naselje?: string;
};

const usluge = {
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

  if (!slug || typeof slug !== "string") return null;

  const naziv = usluge[slug];
  const importFn = uslugeMap[slug];

  if (!naziv || !importFn) {
    return (
      <main className="text-center py-20">
        <h1 className="text-2xl text-red-600 font-semibold">
          404 – Stranica nije pronađena
        </h1>
      </main>
    );
  }

  const UslugaComponent = dynamic(importFn, { ssr: false }) as ComponentType<UslugaProps>;

  return (
    <>
      <Head>
        <title>{naziv} | MajstorDex</title>
        <meta
          name="description"
          content={`Brza i pouzdana usluga: ${naziv.toLowerCase()} u Beogradu. Dostupni 24/7 – pozovite nas odmah!`}
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 text-gray-800">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">{naziv}</h1>
        <UslugaComponent isNaseljePage={false} />
      </main>
    </>
  );
}
