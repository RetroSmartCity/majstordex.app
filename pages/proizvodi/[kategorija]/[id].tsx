// pages/proizvodi/[kategorija]/[id].tsx
"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { supabase } from "@/lib/supabaseClient";

interface Proizvod {
  id: number;
  naziv: string;
  opis: string;
  cena: number;
  kategorija: string;
  slug: string;
  slike: string[] | string | null;
}

export default function ProizvodPage() {
  const router = useRouter();
  const { kategorija, id } = router.query;

  const [proizvod, setProizvod] = useState<Proizvod | null>(null);

  useEffect(() => {
    if (!id) return;

    supabase
      .from("proizvodi")
      .select("*")
      .eq("slug", id)
      .single()
      .then(({ data }) => {
        if (data) {
          // normalize images
          let slikeArray: string[] = [];

          if (Array.isArray(data.slike)) slikeArray = data.slike;
          else if (typeof data.slike === "string") {
            try {
              slikeArray = JSON.parse(data.slike);
            } catch {
              slikeArray = [];
            }
          }

          setProizvod({
            ...data,
            slike: slikeArray,
          });
        }
      });
  }, [id]);

  if (!proizvod) {
    return <p className="p-6">Učitavanje...</p>;
  }

  const url = `https://majstordex.rs/proizvodi/${kategorija}/${proizvod.slug}`;
  const mainImage =
    proizvod.slike && proizvod.slike.length > 0
      ? proizvod.slike[0]
      : "/placeholder.webp";

  // SEO JSON-LD
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: proizvod.naziv,
    image: proizvod.slike,
    description: proizvod.opis,
    sku: proizvod.slug,
    offers: {
      "@type": "Offer",
      url: url,
      priceCurrency: "RSD",
      price: proizvod.cena,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <Head>
        {/* TITLE */}
        <title>{proizvod.naziv} | MajstorDex</title>

        {/* META DESCRIPTION */}
        <meta
          name="description"
          content={`${proizvod.naziv} – ${proizvod.opis.substring(0, 150)}... Cena: ${proizvod.cena} RSD`}
        />

        {/* CANONICAL */}
        <link rel="canonical" href={url} />

        {/* OPEN GRAPH */}
        <meta property="og:title" content={proizvod.naziv} />
        <meta property="og:description" content={proizvod.opis} />
        <meta property="og:image" content={mainImage} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="product" />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
      </Head>

      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">{proizvod.naziv}</h1>

        {/* GLAVNA SLIKA */}
        <img
          src={mainImage}
          alt={proizvod.naziv}
          className="w-full h-96 object-cover rounded shadow mb-6"
        />

        {/* OSTALe SLIKE */}
        {proizvod.slike.length > 1 && (
          <div className="grid grid-cols-3 gap-4 mb-6">
            {proizvod.slike.slice(1).map((sl: string, i: number) => (
              <img
                key={i}
                src={sl}
                alt={`${proizvod.naziv} slika ${i + 2}`}
                className="w-full h-32 object-cover rounded border"
              />
            ))}
          </div>
        )}

        {/* OPIS */}
        <p className="text-lg text-gray-700 whitespace-pre-line mb-4">
          {proizvod.opis}
        </p>

        {/* CENA */}
        <p className="text-2xl font-bold text-green-700">
          {proizvod.cena.toLocaleString()} RSD
        </p>
      </main>
    </>
  );
}
