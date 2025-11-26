// pages/usluge/popravka-elektroinstalacija.tsx

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { cene } from "@/data/cene";

export default function PopravkaElektroinstalacija() {
  const title =
    "Popravka elektroinstalacija Beograd | Zamena osigurača i utičnica | MajstorDex 24/7";
  const desc =
    "Profesionalna popravka elektroinstalacija u Beogradu – zamena osigurača, utičnica, prekidača, kablova i dijagnostika kvarova. Dolazak majstora za 60–90 min, dostupni 24/7.";
  const url = "https://majstordex.rs/usluge/popravka-elektroinstalacija";

  return (
    <>
      <Head>
        {/* SEO */}
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={url} />

        {/* OG */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta
          property="og:image"
          content="https://majstordex.rs/images/popravka-elektroinstalacija.webp"
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="service" />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta
          name="twitter:image"
          content="https://majstordex.rs/images/popravka-elektroinstalacija.webp"
        />
      </Head>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-800">

        {/* HERO SLIKA */}
        <div className="w-full mb-8 rounded-2xl overflow-hidden shadow-lg bg-white">
          <Image
            src="/images/popravka-elektroinstalacija.webp"
            alt="Popravka elektroinstalacija Beograd - zamena osigurača i utičnica"
            width={1600}
            height={900}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* BREADCRUMB */}
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
            Popravka elektroinstalacija
          </span>
        </nav>

        {/* OPIS USLUGE */}
        <section className="mb-12 text-lg leading-relaxed">
          <h1 className="text-3xl font-bold mb-4">
            Popravka elektroinstalacija u Beogradu — zamena osigurača i utičnica
          </h1>

          <p>
            Kvarovi na elektroinstalacijama mogu biti veoma opasni — pregoreli
            osigurači, varničenja, loše utičnice, pregrejani kablovi ili pad faze.
            MajstorDex obavlja kompletnu dijagnostiku i profesionalnu popravku
            svih elektro instalacija u stambenim i poslovnim objektima.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">
            Najčešće usluge popravke elektroinstalacija
          </h2>

          <ul className="list-disc list-inside space-y-1">
            <li>Zamena osigurača (automatskih i topljivih)</li>
            <li>Ugradnja i zamena utičnica i prekidača</li>
            <li>Popravka razvodnih kutija i prekida faze</li>
            <li>Rešavanje kratkih spojeva i pregorevanja</li>
            <li>Detekcija pada napona i problema sa fazama</li>
            <li>Zamena oštećenih kablova i nastavaka</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Gde radimo?</h2>

          <p>
            Dolazimo na celu teritoriju Beograda — Stari Grad, Zemun, Novi Beograd,
            Vračar, Rakovica, Zvezdara, Voždovac, Palilula i sva okolna naselja.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">
            Koliko je važna brza intervencija?
          </h2>

          <p>
            Loše instalacije mogu izazvati ozbiljne kvarove i požare. Brza reakcija i
            kvalitetna popravka sprečavaju dalju štetu i čuvaju bezbednost doma.
          </p>
        </section>

        {/* 3 MINI KARTICE */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Povezane usluge
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link href="/usluge/servis-bojlera">
              <div className="bg-gray-50 p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center">
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

            <Link href="/usluge/popravka-ta-peci">
              <div className="bg-gray-50 p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center">
                <Image
                  src="/images/popravka-ta-peci.webp"
                  width={300}
                  height={200}
                  alt="Popravka TA peći"
                  className="rounded-lg mb-3"
                />
                <h3 className="font-semibold text-lg">Popravka TA peći</h3>
              </div>
            </Link>

            <Link href="/usluge/hitne-intervencije">
              <div className="bg-gray-50 p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center">
                <Image
                  src="/images/hitne-intervencije.webp"
                  width={300}
                  height={200}
                  alt="Hitne intervencije"
                  className="rounded-lg mb-3"
                />
                <h3 className="font-semibold text-lg">Hitne intervencije 24/7</h3>
              </div>
            </Link>
          </div>
        </section>

        {/* ZAŠTO MAJSTORDEX */}
        <section className="bg-yellow-50 rounded-xl p-6 shadow-md mt-14">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Zašto izabrati MajstorDex?
          </h2>

          <ul className="list-disc list-inside space-y-2 text-gray-700 max-w-xl mx-auto">
            <li>Dolazak u roku od 60–90 minuta</li>
            <li>Licencirani i iskusni električari</li>
            <li>Garancija na rad i ugrađene delove</li>
            <li>Transparentne i jasne cene</li>
            <li>Dostupnost 24/7</li>
          </ul>
        </section>

        {/* CENA */}
        <section className="bg-yellow-50 rounded-xl p-6 shadow-md mt-10 text-center">
          <h2 className="text-2xl font-bold mb-3 text-yellow-800">
            Cena popravke elektroinstalacija
          </h2>

          <p className="text-gray-700 mb-2 text-lg">Orijentaciona cena:</p>
          <p className="text-3xl font-bold text-yellow-600 mb-2">
            {cene.popravкаElektroinstalacija}
          </p>

          <p className="text-sm text-gray-600">
            Tačna cena nakon pregleda — dostupni smo 0–24!
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">
            Često postavljana pitanja
          </h2>

          <div className="space-y-4">
            <details className="p-4 border rounded-lg bg-gray-50">
              <summary className="font-semibold cursor-pointer">
                Šta najčešće pravi problem na elektroinstalacijama?
              </summary>
              <p className="mt-2">
                Neispravni osigurači, loše utičnice, pregrejani kablovi ili kratki spojevi.
              </p>
            </details>

            <details className="p-4 border rounded-lg bg-gray-50">
              <summary className="font-semibold cursor-pointer">
                Da li dolazite hitno?
              </summary>
              <p className="mt-2">Da, dostupni smo 24/7 na celoj teritoriji Beograda.</p>
            </details>

            <details className="p-4 border rounded-lg bg-gray-50">
              <summary className="font-semibold cursor-pointer">
                Koliko traje popravka?
              </summary>
              <p className="mt-2">Najčešće 20–45 minuta, zavisno od kvara.</p>
            </details>
          </div>
        </section>

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Početna", item: "https://majstordex.rs" },
                  { "@type": "ListItem", position: 2, name: "Usluge", item: "https://majstordex.rs/usluge" },
                  { "@type": "ListItem", position: 3, name: "Popravka elektroinstalacija", item: url }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                name: "Popravka elektroinstalacija Beograd",
                provider: {
                  "@type": "LocalBusiness",
                  name: "MajstorDex",
                  telephone: "+381600500063",
                  areaServed: "Beograd",
                  url: "https://majstordex.rs"
                },
                description: desc,
                serviceType: "Popravka elektroinstalacija"
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Šta najčešće pravi problem na elektroinstalacijama?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Najčešći problemi su neispravni osigurači, loše utičnice, pregrejani kablovi ili kratki spojevi."
                    }
                  },
                  {
                    "@type": "Question",
                    name: "Da li radite hitne intervencije?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Da, dostupni smo 24/7 i dolazimo na celu teritoriju Beograda."
                    }
                  },
                  {
                    "@type": "Question",
                    name: "Koliko traje popravka?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Obično traje 20–45 minuta, u zavisnosti od vrste kvara."
                    }
                  }
                ]
              }
            ])
          }}
        />
      </article>
    </>
  );
}
