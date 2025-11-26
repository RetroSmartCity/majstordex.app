// components/usluge/led-rasveta.tsx
// pages/usluge/led-rasveta.tsx

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function LedRasveta() {
  const title =
    "LED rasveta Beograd | Prodaja i ugradnja lustera, plafonjera i LED traka | MajstorDex";
  const desc =
    "LED rasveta u Beogradu – prodaja i profesionalna ugradnja lustera, plafonjera, zidnih lampi, aluminijumskih profila i spoljne LED rasvete. Moderna i energetski efikasna rešenja za stan i lokal.";
  const url = "https://majstordex.rs/usluge/led-rasveta";

  const kategorije = [
    { naziv: "Lusteri", slug: "lusteri", slika: "luster.webp" },
    { naziv: "Plafonjere", slug: "plafonjere", slika: "plafonjera.webp" },
    { naziv: "Zidne lampe", slug: "zidne-lampe", slika: "zidna-lampa.webp" },
    {
      naziv: "LED aluminijumski profili",
      slug: "aluminijumski-profili-za-led",
      slika: "al-led-profil.webp",
    },
    {
      naziv: "Spoljna LED rasveta",
      slug: "spoljna-rasveta",
      slika: "kandilaber.webp",
    },
  ];

  return (
    <>
      <Head>
        {/* SEO */}
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={url} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={url} />
        <meta
          property="og:image"
          content="https://majstordex.rs/images/led-rasveta.webp"
        />
        <meta property="og:type" content="service" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta
          name="twitter:image"
          content="https://majstordex.rs/images/led-rasveta.webp"
        />
      </Head>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-800">
        {/* ------------------------------------------------ */}
        {/* HERO SLIKA – ujednačeno sa ostalim PRO templejtima */}
        {/* ------------------------------------------------ */}
        <div className="w-full mb-8 rounded-2xl overflow-hidden shadow-lg bg-white">
          <Image
            src="/images/led-rasveta.webp"
            alt="LED rasveta Beograd - montaža lustera, plafonjera i LED traka"
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
          className="text-sm mb-6 text-gray-500 flex flex-wrap items-center gap-1"
        >
          <Link href="/" className="hover:underline text-blue-600">
            Početna
          </Link>
          <span>›</span>
          <Link href="/usluge" className="hover:underline text-blue-600">
            Usluge
          </Link>
          <span>›</span>
          <span aria-current="page" className="text-gray-800 font-semibold">
            LED rasveta – prodaja i ugradnja
          </span>
        </nav>

        {/* ------------------------------------------------ */}
        {/* OPIS USLUGE */}
        {/* ------------------------------------------------ */}
        <section className="mb-12 text-lg leading-relaxed">
          <h1 className="text-3xl font-bold mb-4">
            LED rasveta u Beogradu — prodaja i profesionalna ugradnja
          </h1>

          <p>
            LED rasveta je danas standard u stanovima, kućama i lokalima – troši
            manje struje, pruža jače i prijatnije svetlo i traje znatno duže od
            klasičnih sijalica. MajstorDex nudi kompletno rešenje: od izbora
            lustera, plafonjera, zidnih lampi i LED traka do profesionalne
            ugradnje.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">
            Šta radimo u okviru LED rasvete?
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Ugradnja i zamena lustera i plafonjera</li>
            <li>Montaža zidnih lampi, spot svetala i dekor rasvete</li>
            <li>Postavljanje LED traka u kuhinji, hodniku, dnevnoj sobi</li>
            <li>Ugradnja LED aluminijumskih profila na stepeništu i u enterijeru</li>
            <li>Spoljna LED rasveta za dvorišta, terase i prilaze</li>
            <li>Povezivanje i testiranje rasvete uz poštovanje elektro standarda</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3">
            Gde radimo u Beogradu?
          </h2>
          <p>
            Izlazimo na teren širom Beograda — Novi Beograd, Zemun, Vračar,
            Stari Grad, Voždovac, Rakovica, Zvezdara, Čukarica, Palilula i druga
            naselja. Dolazak je najčešće u roku od{" "}
            <strong>60–90 minuta</strong>, po dogovoru.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">
            Prednosti prelaska na LED rasvetu
          </h2>
          <p>
            LED rasveta troši manje električne energije, manje se greje, daje
            jače i stabilnije svetlo i zahteva ređe održavanje. Uz pravilno
            odabrane luster, plafonjeru, profile i spoljnju rasvetu, vaš prostor
            dobija i potpuno novi vizuelni utisak.
          </p>
        </section>

        {/* ------------------------------------------------ */}
        {/* Naša ponuda LED rasvete – OVO OBAVEZNO OSTAJE */}
        {/* ------------------------------------------------ */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900">
            Naša ponuda LED rasvete
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kategorije.map((kat) => (
              <Link key={kat.slug} href={`/proizvodi/${kat.slug}`} legacyBehavior>
                <a className="flex flex-col bg-white border border-gray-200 hover:border-yellow-400 hover:shadow-xl transition rounded-xl overflow-hidden">
                  {/* Slika – ista logika kao na shop stranici */}
                  <div className="bg-gray-100 flex items-center justify-center h-40">
                    <img
                      src={`/images/${kat.slika}`}
                      alt={kat.naziv}
                      className="max-h-full max-w-full object-contain p-2"
                    />
                  </div>

                  <div className="p-4 text-center mt-auto">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {kat.naziv}
                    </h3>
                    <p className="text-sm text-gray-600">Pogledaj ponudu</p>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------ */}
        {/* POVEZANE USLUGE – 3 mini kartice, kao na PRO templejtu */}
        {/* ------------------------------------------------ */}
        <section className="mt-4 mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Ostale usluge MajstorDex
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link href="/usluge/popravka-elektroinstalacija">
              <div className="bg-gray-50 p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center">
                <Image
                  src="/images/popravka-elektroinstalacija.webp"
                  width={300}
                  height={200}
                  alt="Popravka elektroinstalacija"
                  className="rounded-lg mb-3 object-contain w-full h-auto"
                />
                <h3 className="font-semibold text-lg">
                  Popravka elektroinstalacija
                </h3>
              </div>
            </Link>

            <Link href="/usluge/servis-bojlera">
              <div className="bg-gray-50 p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center">
                <Image
                  src="/images/servis-bojlera.webp"
                  width={300}
                  height={200}
                  alt="Servis bojlera"
                  className="rounded-lg mb-3 object-contain w-full h-auto"
                />
                <h3 className="font-semibold text-lg">Servis bojlera</h3>
              </div>
            </Link>

            <Link href="/usluge/hitne-intervencije">
              <div className="bg-gray-50 p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center">
                <Image
                  src="/images/hitne-intervencije.webp"
                  width={300}
                  height={200}
                  alt="Hitne intervencije 24/7"
                  className="rounded-lg mb-3 object-contain w-full h-auto"
                />
                <h3 className="font-semibold text-lg">Hitne intervencije 24/7</h3>
              </div>
            </Link>
          </div>
        </section>

        {/* ------------------------------------------------ */}
        {/* ZAŠTO MAJSTORDEX */}
        {/* ------------------------------------------------ */}
        <section className="bg-yellow-50 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Zašto izabrati MajstorDex za LED rasvetu?
          </h2>

          <ul className="list-disc list-inside space-y-2 text-gray-700 max-w-xl mx-auto">
            <li>Profesionalna montaža LED rasvete i rasvetnih tela</li>
            <li>Planiranje osvetljenja u skladu sa prostorom</li>
            <li>Sigurno povezivanje na postojeće elektroinstalacije</li>
            <li>Dolazak u roku od 60–90 minuta po dogovoru</li>
            <li>Garancija na izvedene radove</li>
          </ul>
        </section>

        {/* ------------------------------------------------ */}
        {/* FAQ – Često postavljana pitanja */}
        {/* ------------------------------------------------ */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Često postavljana pitanja</h2>

          <div className="space-y-4">
            <details className="p-4 border rounded-lg bg-gray-50">
              <summary className="font-semibold cursor-pointer">
                Koliko je isplativo preći na LED rasvetu?
              </summary>
              <p className="mt-2">
                LED rasveta troši i do 80% manje struje u odnosu na klasične
                sijalice, ima duži vek trajanja i zahteva manje održavanja, pa se
                ulaganje vrlo brzo isplati.
              </p>
            </details>

            <details className="p-4 border rounded-lg bg-gray-50">
              <summary className="font-semibold cursor-pointer">
                Da li možete da odradite i rasvetu za stepenište i profile?
              </summary>
              <p className="mt-2">
                Da, ugrađujemo LED aluminijumske profile za stepeništa,
                hodnike, kuhinje i druge zone, uz ravnomerno i diskretno
                osvetljenje.
              </p>
            </details>

            <details className="p-4 border rounded-lg bg-gray-50">
              <summary className="font-semibold cursor-pointer">
                Da li radite i spoljnu LED rasvetu?
              </summary>
              <p className="mt-2">
                Da, radimo kompletnu spoljnu LED rasvetu za dvorišta, terase,
                prilaze, staze i objekte, sa odgovarajućom zaštitom od vlage i
                vremenskih uslova.
              </p>
            </details>
          </div>
        </section>

        {/* ------------------------------------------------ */}
        {/* JSON-LD SCHEMA (Breadcrumb + Service + FAQ) */}
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
                    name: "LED rasveta – prodaja i ugradnja",
                    item: url,
                  },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                name: "LED rasveta Beograd",
                provider: {
                  "@type": "LocalBusiness",
                  name: "MajstorDex",
                  telephone: "+381600500063",
                  areaServed: "Beograd",
                  url: "https://majstordex.rs",
                },
                description: desc,
                serviceType: "LED rasveta – prodaja i ugradnja",
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Koliko je isplativo preći na LED rasvetu?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "LED rasveta troši i do 80% manje energije, traje duže i zahteva manje održavanja, pa se ulaganje brzo isplati.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Da li ugrađujete LED profile i rasvetu za stepenište?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Da, ugrađujemo LED aluminijumske profile za stepeništa, hodnike, kuhinje i druge zone u enterijeru.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Da li radite spoljnu LED rasvetu?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Radimo kompletnu spoljnu LED rasvetu za dvorišta, terase, prilaze i objekte, sa odgovarajućom zaštitom od vlage.",
                    },
                  },
                ],
              },
            ]),
          }}
        />
      </article>
    </>
  );
}
