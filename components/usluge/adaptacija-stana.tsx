// pages/usluge/adaptacija-stana.tsx

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function AdaptacijaStana() {
  const title =
    "Adaptacija stana Beograd | Kompletno renoviranje – ključ u ruke | MajstorDex";
  const desc =
    "Kompletna adaptacija stanova u Beogradu – elektro, molerski, vodoinstalaterski, podovi i završni radovi. Renoviranje ključ u ruke. MajstorDex 24/7.";
  const url = "https://majstordex.rs/usluge/adaptacija-stana";

  return (
    <>
      {/* ------------------------------------------------ */}
      {/* SEO */}
      {/* ------------------------------------------------ */}
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={url} />

        {/* OG */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta
          property="og:image"
          content="https://majstordex.rs/images/adaptacija-stanova.webp"
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="service" />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta
          name="twitter:image"
          content="https://majstordex.rs/images/adaptacija-stanova.webp"
        />
      </Head>

      {/* ------------------------------------------------ */}
      {/* PAGE CONTENT */}
      {/* ------------------------------------------------ */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-800">

        {/* ------------------------------------------------ */}
        {/* HERO SLIKA — 100% templejt stil */}
        {/* ------------------------------------------------ */}
        <div className="w-full mb-8 rounded-2xl overflow-hidden shadow-lg bg-white">
          <Image
            src="/images/adaptacija-stanova.webp"
            alt="Adaptacija stana Beograd – kompletno renoviranje"
            width={1600}
            height={900}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* ------------------------------------------------ */}
        {/* Breadcrumb */}
        {/* ------------------------------------------------ */}
        <nav
          aria-label="Breadcrumb"
          className="text-sm mb-6 text-gray-500 flex flex-wrap gap-1"
        >
          <Link href="/" className="hover:underline text-blue-600">
            Početna
          </Link>
          <span>›</span>
          <Link href="/usluge" className="hover:underline text-blue-600">
            Usluge
          </Link>
          <span>›</span>
          <span className="font-semibold text-gray-800">
            Adaptacija stana
          </span>
        </nav>

        {/* ------------------------------------------------ */}
        {/* H1 + OPIS */}
        {/* ------------------------------------------------ */}
        <section className="mb-12 text-lg leading-relaxed">
          <h1 className="text-3xl font-bold mb-4">
            Adaptacija stana u Beogradu — kompletno renoviranje „ključ u ruke“
          </h1>

          <p>
            Adaptacija stana je zahtevan proces koji obuhvata više vrsta radova —
            od rušenja, elektro i vodoinstalacija, preko podova, malterisanja i
            krečenja, do završnog uređenja enterijera. MajstorDex obavlja sve
            radove profesionalno i u dogovorenom roku.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">
            Šta obuhvata kompletna adaptacija?
          </h2>

          <ul className="list-disc list-inside space-y-1">
            <li>Rušenje zidova i priprema prostora</li>
            <li>Elektroinstalaterski radovi (nova instalacija u celom stanu)</li>
            <li>Vodoinstalaterski radovi</li>
            <li>Postavljanje podova (laminat, parket, keramika)</li>
            <li>Gletovanje, malterisanje i krečenje</li>
            <li>Montaža vrata, kuhinje i sanitarija</li>
            <li>Ugradnja rasvete i dekorativnih elemenata</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Gde radimo?</h2>
          <p>
            Radimo na celoj teritoriji Beograda — Novi Beograd, Zemun, Voždovac,
            Cukarica, Vračar, Stari Grad, Rakovica i sva ostala naselja.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">
            Prednosti kompletne adaptacije?
          </h2>
          <p>
            Jedna ekipa — svi radovi. Bez stresa, više majstora i gubljenja vremena.  
            Sve završavamo profesionalno, brzo i uredno.
          </p>
        </section>

        {/* ------------------------------------------------ */}
        {/* 3 MINI KARTICE (kao TA / Bojler templejt) */}
        {/* ------------------------------------------------ */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Povezane usluge
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            <Link href="/usluge/popravka-elektroinstalacija">
              <div className="bg-gray-50 p-5 rounded-xl shadow hover:shadow-lg transition text-center">
                <Image
                  src="/images/popravka-elektroinstalacija.webp"
                  width={300}
                  height={200}
                  alt="Popravka elektroinstalacija"
                  className="rounded-lg mb-3"
                />
                <h3 className="font-semibold text-lg">Elektroinstalacije</h3>
              </div>
            </Link>

            <Link href="/usluge/servis-bojlera">
              <div className="bg-gray-50 p-5 rounded-xl shadow hover:shadow-lg transition text-center">
                <Image
                  src="/images/servis-bojlera.webp"
                  width={300}
                  height={200}
                  alt="Servis bojlera"
                  className="rounded-lg mb-3"
                />
                <h3 className="font-semibold text-lg">Servis bojlera</h3>
              </div>
            </Link>

            <Link href="/usluge/hitne-intervencije">
              <div className="bg-gray-50 p-5 rounded-xl shadow hover:shadow-lg transition text-center">
                <Image
                  src="/images/hitne-intervencije.webp"
                  width={300}
                  height={200}
                  alt="Hitne elektro intervencije"
                  className="rounded-lg mb-3"
                />
                <h3 className="font-semibold text-lg">Hitne intervencije 24/7</h3>
              </div>
            </Link>

          </div>
        </section>

        {/* ------------------------------------------------ */}
        {/* ZAŠTO MAJSTORDEX */}
        {/* ------------------------------------------------ */}
        <section className="bg-yellow-50 rounded-xl p-6 shadow-md mt-14">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Zašto izabrati MajstorDex?
          </h2>

          <ul className="list-disc list-inside space-y-2 text-gray-700 max-w-xl mx-auto">
            <li>Jedna ekipa – svi radovi na jednom mestu</li>
            <li>Dogovor po sistemu „ključ u ruke”</li>
            <li>Poštovanje rokova i dogovora</li>
            <li>Transparentne cene, bez skrivenih troškova</li>
            <li>Više od 15 godina iskustva</li>
          </ul>
        </section>

        {/* ------------------------------------------------ */}
        {/* CENA – ako želiš cenu, može se dodati */}
        {/* ------------------------------------------------ */}
        <section className="bg-yellow-50 rounded-xl p-6 shadow-md mt-10 text-center">
          <h2 className="text-2xl font-bold mb-3 text-yellow-800">
            Cena adaptacije
          </h2>

          <p className="text-gray-700 mb-2 text-lg">
            Cena se formira u zavisnosti od obima radova.
          </p>

          <p className="text-3xl font-bold text-yellow-600 mb-2">
            Po dogovoru nakon obilaska stana
          </p>

          <p className="text-sm text-gray-600">
            Pozovite nas za besplatan savet i procenu.
          </p>
        </section>

        {/* ------------------------------------------------ */}
        {/* FAQ — identičan dizajn */}
        {/* ------------------------------------------------ */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">
            Često postavljana pitanja
          </h2>

          <div className="space-y-4">
            <details className="p-4 border rounded-lg bg-gray-50">
              <summary className="font-semibold cursor-pointer">
                Koliko traje adaptacija stana?
              </summary>
              <p className="mt-2">
                U zavisnosti od obima radova — obično 10 do 30 dana.
              </p>
            </details>

            <details className="p-4 border rounded-lg bg-gray-50">
              <summary className="font-semibold cursor-pointer">
                Da li radite adaptaciju po principu „ključ u ruke”?
              </summary>
              <p className="mt-2">
                Da, preuzimamo sve radove i završavamo kompletan projekat.
              </p>
            </details>

            <details className="p-4 border rounded-lg bg-gray-50">
              <summary className="font-semibold cursor-pointer">
                Da li je potrebna dozvola za rušenje zidova?
              </summary>
              <p className="mt-2">
                Za konstrukcione zidove – da. Za nenosive zidove – nije potrebna.
              </p>
            </details>
          </div>
        </section>

        {/* ------------------------------------------------ */}
        {/* JSON-LD */}
        {/* ------------------------------------------------ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Početna",
                    item: "https://majstordex.rs",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Usluge",
                    item: "https://majstordex.rs/usluge",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Adaptacija stana",
                    item: url,
                  },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                name: "Adaptacija stana Beograd",
                provider: {
                  "@type": "LocalBusiness",
                  name: "MajstorDex",
                  telephone: "+381600500063",
                  areaServed: "Beograd",
                  url: "https://majstordex.rs",
                },
                description: desc,
                serviceType: "Adaptacija stana",
              },
            ]),
          }}
        />
      </article>
    </>
  );
}
