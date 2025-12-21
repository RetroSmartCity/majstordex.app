import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

import { sveUsluge } from "@/data/usluge";
import { svaNaseljaObj } from "@/data/naselja";

export default function PretragaPage() {
  const router = useRouter();
  const { q } = router.query;

  const [resultsUsluge, setResultsUsluge] = useState<any[]>([]);
  const [resultsNaselja, setResultsNaselja] = useState<any[]>([]);

  useEffect(() => {
    if (!q || typeof q !== "string") return;

    const query = q.toLowerCase();

    const filteredUsluge = sveUsluge.filter((u) =>
      u.naziv.toLowerCase().includes(query)
    );

    const filteredNaselja = svaNaseljaObj.filter((n) =>
      n.naziv.toLowerCase().includes(query)
    );

    setResultsUsluge(filteredUsluge);
    setResultsNaselja(filteredNaselja);
  }, [q]);

  const title = q
    ? `Pretraga: ${q} | MajstorDex`
    : "Pretraga | MajstorDex";

  const desc = q
    ? `Rezultati pretrage za pojam: ${q}. MajstorDex – hitne elektro intervencije 0–24 u Beogradu.`
    : "Pretraga usluga i naselja – MajstorDex.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link
          rel="canonical"
          href={`https://majstordex.rs/pretraga${q ? `?q=${q}` : ""}`}
        />
      </Head>

      <main className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-extrabold mb-6">
          {q ? `Rezultati pretrage za: "${q}"` : "Pretraga"}
        </h1>

        {/* ✅ NASELJA — VODE TAČNO NA /naselje/[slug] */}
        {resultsNaselja.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Naselja</h2>
            <div className="flex flex-wrap gap-3">
              {resultsNaselja.map((n) => (
                <Link
                  key={n.slug}
                  href={`/naselje/${n.slug}`}
                  className="px-4 py-2 bg-white border rounded-lg shadow-sm hover:shadow-md"
                >
                  {n.naziv}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ✅ USLUGE — VODE NA IZBOR NASELJA POSLE */}
        {resultsUsluge.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Usluge</h2>
            <div className="flex flex-wrap gap-3">
              {resultsUsluge.map((u) => (
                <Link
                  key={u.slug}
                  href={`/usluge/${u.slug}`}
                  className="px-4 py-2 bg-white border rounded-lg shadow-sm hover:shadow-md"
                >
                  {u.naziv}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ✅ AKO NEMA REZULTATA */}
        {resultsUsluge.length === 0 && resultsNaselja.length === 0 && q && (
          <div className="text-gray-600">
            Nema rezultata za pretragu: <strong>{q}</strong>
          </div>
        )}

        {/* ✅ AKO JE PRAZNA PRETRAGA */}
        {!q && (
          <div className="text-gray-600">
            Unesi pojam za pretragu (npr: TA peć, bojler, Zvezdara…)
          </div>
        )}
      </main>
    </>
  );
}
