// pages/usluge/servis-bojlera.tsx

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { cene } from "@/data/cene";

export default function ServisBojlera() {
  const title =
    "Servis bojlera Beograd | Zamena grejača i termostata | MajstorDex 24/7";
  const desc =
    "Servis bojlera u Beogradu – zamena grejača, termostata, sigurnosnog ventila i čišćenje kamenca. Brz dolazak majstora 60–90 min, radimo 24/7. Profesionalan i pouzdan servis.";
  const url = "https://majstordex.rs/usluge/servis-bojlera";

  return (
    <>
      <Head>
        {/* ---------------------- SEO ---------------------- */}
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={url} />

        {/* ---------------------- OG ----------------------- */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta
          property="og:image"
          content="https://majstordex.rs/images/servis-bojlera.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="service" />
        <meta property="og:url" content={url} />
        <meta property="og:locale" content="sr_RS" />

        {/* -------------------- Twitter --------------------- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta
          name="twitter:image"
          content="https://majstordex.rs/images/servis-bojlera.webp"
        />
        <meta
          name="twitter:image:alt"
          content="Servis bojlera u Beogradu – zamena grejača i termostata"
        />
      </Head>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-800">
        {/* ---------------------- HERO ---------------------- */}
        <div className="w-full mb-8 rounded-2xl overflow-hidden shadow-lg bg-white">
          <Image
            src="/images/servis-bojlera.webp"
            alt="Servis bojlera u Beogradu – zamena grejača i termostata - MajstorDex"
            width={1600}
            height={900}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* -------------------- Breadcrumb ------------------ */}
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
          <span className="text-gray-800 font-semibold">Servis bojlera</span>
        </nav>

        {/* ------------------- OPIS USLUGE ------------------ */}
        <section className="mb-12 text-lg leading-relaxed">
          <h1 className="text-3xl font-bold mb-4">
            Servis bojlera u Beogradu – zamena grejača i termostata
          </h1>

          <p>
            MajstorDex vrši profesionalan servis bojlera svih modela – Atlantic,
            Elit, Termorad, Ariston i drugi. Najčešći kvarovi su pregoreo grejač,
            neispravan termostat, istopljeni kablovi, curenje vode ili sabijen
            kamenac.
          </p>

          <p className="mt-3">
            Dolazimo na teritoriji celog Beograda u roku od{" "}
            <strong>60–90 minuta</strong>. Radimo 0–24, vikendom i praznicima.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">
            Najčešće intervencije na bojlerima
          </h2>

          <ul className="list-disc list-inside space-y-1">
            <li>Zamena grejača (flanša) – 1.5kW / 2kW / 2.5kW</li>
            <li>Zamena termostata</li>
            <li>Čišćenje kamenca i ispiranje bojlera</li>
            <li>Popravka sigurnosnog ventila</li>
            <li>Zamena cevi, kablova i kontakata</li>
            <li>Provera instalacije i zaštitnih elemenata</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3">
            Kada je vreme za servis?
          </h2>

          <p>
            Ako bojler sporije greje, čuje se šuštanje, izbija sigurnosni
            ventil, curi voda ili izbacuje osigurač – vreme je za dijagnostiku i
            popravku. Kamenac je najčešći uzrok problema i treba ga čistiti
            jednom godišnje.
          </p>
        </section>

        {/* ---------------- POVEZANE USLUGE ---------------- */}
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

            <Link href="/usluge/popravka-ta-peci">
              <div className="bg-gray-50 p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center">
                <Image
                  src="/images/popravka-ta-peci.webp"
                  width={300}
                  height={200}
                  alt="Popravka TA peći u Beogradu"
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
                  alt="Hitne elektro intervencije Beograd 24/7"
                  className="rounded-lg mb-3"
                />
                <h3 className="font-semibold text-lg">
                  Hitne elektro intervencije 24/7
                </h3>
              </div>
            </Link>
          </div>
        </section>

        {/* ---------------------- CENA ---------------------- */}
        <section className="bg-yellow-50 rounded-xl p-6 shadow-md mt-10 text-center">
          <h2 className="text-2xl font-bold mb-3 text-yellow-800">
            Cena servisa bojlera
          </h2>

          <p className="text-gray-700 mb-2 text-lg">
            Orijentaciona cena servisa:
          </p>
          <p className="text-3xl font-bold text-yellow-600 mb-2">
            {cene.servisBojlera}
          </p>

          <p className="text-sm text-gray-600">
            Tačna cena se određuje nakon pregleda, u zavisnosti od potrebe za
            čišćenjem i zamenom delova.
          </p>
        </section>

        {/* ----------------------- FAQ ---------------------- */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">
            Često postavljana pitanja
          </h2>

          <div className="space-y-4">
            <details className="p-4 border rounded-lg bg-gray-50">
              <summary className="font-semibold cursor-pointer">
                Koliko traje servis bojlera?
              </summary>
              <p className="mt-2">
                U proseku 30–60 minuta, ako je u pitanju zamena grejača ili
                čišćenje kamenca.
              </p>
            </details>

            <details className="p-4 border rounded-lg bg-gray-50">
              <summary className="font-semibold cursor-pointer">
                Zašto bojler izbacuje osigurač?
              </summary>
              <p className="mt-2">
                Najčešći uzrok je pregoreo grejač, oštećen kabl ili loš kontakt
                unutar bojlera.
              </p>
            </details>

            <details className="p-4 border rounded-lg bg-gray-50">
              <summary className="font-semibold cursor-pointer">
                Koliko često treba čistiti bojler?
              </summary>
              <p className="mt-2">Preporučeno je jednom godišnje.</p>
            </details>
          </div>
        </section>

        {/* -------------------- JSON-LD --------------------- */}
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
                    name: "Servis bojlera",
                    item: url,
                  },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                name: "Servis bojlera Beograd",
                description: desc,
                serviceType: "Servis bojlera",
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
                    name: "Koliko traje servis bojlera?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "U proseku 30–60 minuta, u zavisnosti od kvara.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Zašto bojler izbacuje osigurač?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Najčešći uzrok je pregoreo grejač ili loš kontakt unutar bojlera.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Koliko često treba čistiti bojler?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Preporučeno je jednom godišnje radi efikasnog rada.",
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
