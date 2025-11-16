// pages/usluge/[slug].tsx

import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { sveUsluge } from "@/data/usluge";
import { uslugeMap } from "@/components/uslugeMap";
import type { ComponentType } from "react";

type UslugaProps = {
  isNaseljePage: boolean;
  naselje?: string;
};

export default function UslugaPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug || typeof slug !== "string") return null;

  const info = sveUsluge.find((u) => u.slug === slug);
  const importFn = uslugeMap[slug];

  if (!info || !importFn) {
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
        <title>{info.naziv} | MajstorDex</title>
        <meta
          name="description"
          content={`Profesionalna usluga: ${info.naziv.toLowerCase()} u Beogradu. Dostupni 24/7.`}
        />
        <link rel="canonical" href={`https://majstordex.rs/usluge/${slug}`} />
      </Head>

      {/* HERO SLIKA — PREMIUM LETTERBOX */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">

        {/* BLUR POZADINA */}
        <Image
          src={info.slika}
          alt={info.naziv}
          fill
          className="object-cover blur-xl scale-110 opacity-40"
        />

        {/* ORIGINAL SLIKA */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <Image
            src={info.slika}
            alt={info.naziv}
            width={1200}
            height={800}
            className="object-contain drop-shadow-lg"
            priority
          />
        </div>

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          {info.naziv}
        </h1>

        <UslugaComponent isNaseljePage={false} />
      </main>
    </>
  );
}
