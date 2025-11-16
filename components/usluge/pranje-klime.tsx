// pages/usluge/pranje-klime.tsx

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { cene } from "../../src/data/cene";

export default function PranjeKlime() {
  return (
    <>
      <Head>
        <title>Pranje klima uređaja u Beogradu | MajstorDex</title>
        <meta
          name="description"
          content="Temeljno pranje i dezinfekcija klima uređaja u Beogradu. Brza usluga sa dolaskom majstora u roku od 60–90 minuta. Profesionalno čišćenje unutrašnje i spoljašnje jedinice."
        />
        <link rel="canonical" href="https://majstordex.rs/usluge/pranje-klime" />

        {/* Open Graph */}
        <meta property="og:title" content="Pranje klima uređaja u Beogradu | MajstorDex" />
        <meta
          property="og:description"
          content="Temeljno pranje i dezinfekcija klima uređaja u Beogradu. Brza usluga sa dolaskom majstora u roku od 60–90 minuta."
        />
        <meta property="og:url" content="https://majstordex.rs/usluge/pranje-klime" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://majstordex.rs/images/pranje-klime.webp" />
      </Head>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 text-gray-800">

        {/* HERO SLIKA */}
        <div className="w-full rounded-xl overflow-hidden bg-white shadow mb-10">
          <Image
            src="/images/ciscenje-klima.webp"
            alt="Pranje klima uređaja"
            width={1600}
            height={900}
            className="object-contain w-full h-auto"
            priority
          />
        </div>

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm mb-6 text-gray-500 flex flex-wrap items-center gap-1">
          <Link href="/" className="hover:underline text-blue-600">Početna</Link>
          <span>›</span>
          <Link href="/usluge" className="hover:underline text-blue-600">Usluge</Link>
          <span>›</span>
          <span aria-current="page" className="text-gray-800 font-semibold">Pranje klima uređaja</span>
        </nav>

        {/* Opis usluge */}
        <section className="mb-12 text-lg leading-relaxed">
          <p>
            Klima uređaji koji nisu redovno čišćeni mogu postati leglo bakterija, buđi i neprijatnih mirisa.
            Zato je važno bar jednom godišnje uraditi temeljno <strong>pranje klima uređaja</strong>.
          </p>

          <p className="mt-4">
            Naš tim iz MajstorDex Beograd vrši profesionalno
            {" "}
            <strong>pranje i dezinfekciju unutrašnje i spoljašnje jedinice</strong>,
            sa dolaskom u roku od 60–90 minuta na vašu adresu.
          </p>

          <p className="mt-4">
            Koristimo proverena sredstva i opremu koja uklanja prašinu, masnoće, buđ, polen i alergene — kako biste udisali zdrav i svež vazduh.
          </p>
        </section>

        {/* Zašto odabrati MajstorDex */}
        <section className="bg-yellow-50 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Zašto redovno prati klima uređaj?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base max-w-xl mx-auto">
            <li>✅ Uklanjanje buđi, bakterija i neprijatnih mirisa</li>
            <li>✅ Zdraviji i svežiji vazduh u prostoru</li>
            <li>✅ Ušteda na potrošnji struje</li>
            <li>✅ Duži vek trajanja klima uređaja</li>
            <li>✅ Smanjenje rizika od alergija i respiratornih tegoba</li>
          </ul>
        </section>

        {/* Cena usluge */}
        <section className="bg-yellow-50 rounded-xl p-6 shadow-md mt-10 text-center">
          <h2 className="text-2xl font-bold mb-3 text-yellow-800">Cena usluge</h2>
          <p className="text-gray-700 mb-2 text-lg">
            Orijentaciona cena za pranje klima uređaja:
          </p>
          <p className="text-3xl font-bold text-yellow-600 mb-2">
            {cene.pranjeKlime}
          </p>
          <p className="text-sm text-gray-600">
            Za preciznu cenu i termin dolaska, pozovite nas — dostupni smo 0-24!
          </p>
        </section>

        {/* JSON-LD Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Početna", item: "https://majstordex.rs" },
                { "@type": "ListItem", position: 2, name: "Usluge", item: "https://majstordex.rs/usluge" },
                { "@type": "ListItem", position: 3, name: "Pranje klima uređaja", item: "https://majstordex.rs/usluge/pranje-klime" },
              ],
            }),
          }}
        />
      </article>
    </>
  );
}
