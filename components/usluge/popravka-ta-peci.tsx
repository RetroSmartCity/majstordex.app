// pages/usluge/popravka-ta-peci.tsx

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { cene } from "@/data/cene";

export default function PopravkaTaPeci() {
  const title =
    "Popravka TA peći Beograd | Zamena grejača, termostata, ventilatora | MajstorDex 24/7";
  const desc =
    "Profesionalna popravka TA peći u Beogradu – zamena grejača, termostata, ventilatora, sklopki i bimetala. Dolazak majstora za 60–90 minuta širom Beograda. Radimo 24/7, brza i pouzdana usluga.";
  const url = "https://majstordex.rs/usluge/popravka-ta-peci";

  return (
    <>
      <Head>
        {/* SEO osnovno */}
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={url} />

        {/* OG */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta
          property="og:image"
          content="https://majstordex.rs/images/popravka-ta-peci.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="sr_RS" />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="service" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta
          name="twitter:image"
          content="https://majstordex.rs/images/popravka-ta-peci.webp"
        />
      </Head>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-800">
        {/* HERO */}
        <div className="w-full mb-8 rounded-2xl overflow-hidden shadow-lg bg-white">
          <Image
            src="/images/popravka-ta-peci.webp"
            alt="Popravka TA peći u Beogradu – zamena grejača, termostata i sklopki - MajstorDex"
            width={1600}
            height={900}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Breadcrumb */}
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
          <span className="text-gray-800 font-semibold">
            Popravka TA peći
          </span>
        </nav>

        {/* OPIS USLUGE */}
        <section className="mb-12 text-lg leading-relaxed">
          <h1 className="text-3xl font-bold mb-4">
            Popravka TA peći u Beogradu — zamena grejača i termostata
          </h1>

          <p>
            TA peći su efikasan način grejanja, ali kao i svaki električni
            uređaj, vremenom mogu doći do kvarova: pregorelih grejača,
            neispravnih termostata, sklopki, bimetala ili problema sa
            ventilatorom. MajstorDex vrši profesionalnu popravku i servis svih
            modela TA peći.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">
            Najčešće usluge popravke TA peći
          </h2>

          <ul className="list-disc list-inside space-y-1">
            <li>Zamena grejača (jedan ili više)</li>
            <li>Popravka termostata, bimetala i sigurnosnih elemenata</li>
            <li>Zamena sklopki i osigurača</li>
            <li>Popravka ventilatora, turbine i ležajeva</li>
            <li>Rešavanje problema punjenja i grejanja</li>
            <li>Dijagnostika kompletnog sistema TA peći</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Gde radimo?</h2>
          <p>
            Dolazimo širom Beograda — Novi Beograd, Zvezdara, Rakovica, Voždovac,
            Zemun, Čukarica, Palilula, Stari Grad, Vračar i ostala naselja.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">
            Koliko je važan redovan servis?
          </h2>
          <p>
            Redovan pregled TA peći smanjuje potrošnju struje i sprečava veće
            kvarove. Preporučeni servis jednom godišnje povećava efikasnost i
            produžava vek uređaja.
          </p>
        </section>

        {/* POVEZANE USLUGE */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Povezane usluge
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link href="/usluge/popravka-elektroinstalacija">
              <div className="bg-gray-50 p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center">
                <Image
                  src="/images/popravka-elektroinstalacija.webp"
                  width={300}
                  height={200}
                  alt="Popravka elektroinstalacija u Beogradu"
                  className="rounded-lg mb-3"
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
                  alt="Servis bojlera Beograd – zamena grejača"
                  className="rounded-lg mb-3"
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
                  alt="Hitne elektro intervencije 24/7 Beograd"
                  className="rounded-lg mb-3"
                />
                <h3 className="font-semibold text-lg">
                  Hitne intervencije 24/7
                </h3>
              </div>
            </Link>
          </div>
        </section>

        {/* CENA */}
        <section className="bg-yellow-50 rounded-xl p-6 shadow-md mt-10 text-center">
          <h2 className="text-2xl font-bold mb-3 text-yellow-800">
            Cena popravke TA peći
          </h2>

          <p className="text-gray-700 mb-2 text-lg">Orijentaciona cena:</p>
          <p className="text-3xl font-bold text-yellow-600 mb-2">
            {cene.popravkaTaPeci}
          </p>

          <p className="text-sm text-gray-600">
            Cena zavisi od vrste kvara — tačnu cenu dobijate nakon pregleda.
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
                Koliko traje popravka TA peći?
              </summary>
              <p className="mt-2">Najčešće 30–60 minuta, zavisno od vrste kvara.</p>
            </details>

            <details className="p-4 border rounded-lg bg-gray-50">
              <summary className="font-semibold cursor-pointer">
                Koji su najčešći kvarovi?
              </summary>
              <p className="mt-2">
                Pregoreli grejači, neispravan termostat, loš kontakt sklopki i
                problemi sa ventilatorom.
              </p>
            </details>

            <details className="p-4 border rounded-lg bg-gray-50">
              <summary className="font-semibold cursor-pointer">
                Da li radite hitne intervencije?
              </summary>
              <p className="mt-2">Da — dostupni smo 24/7 i dolazimo u roku od 60–90 minuta.</p>
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
                    name: "Popravka TA peći",
                    item: url,
                  },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                name: "Popravka TA peći Beograd",
                description: desc,
                serviceType: "Popravka TA peći",
                areaServed: "Beograd",
                provider: {
                  "@type": "LocalBusiness",
                  name: "MajstorDex",
                  telephone: "+381600500063",
                  url: "https://majstordex.rs",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Koliko traje popravka TA peći?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Najčešće 30–60 minuta, zavisno od kvara.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Koji su najčešći kvarovi TA peći?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Pregoreli grejači, loš termostat, neispravne sklopke i kvar na ventilatoru.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Da li radite hitne intervencije?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Da — dostupni smo 24/7 i dolazimo za 60–90 minuta.",
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
