// pages/usluge/zamena-osiguraca-i-uticnica.tsx

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { cene } from "@/data/cene";

export default function ZamenaOsiguracaIUticnica() {
  const title =
    "Zamena osigurača i utičnica Beograd | Električar 24/7 | MajstorDex";
  const desc =
    "Profesionalna zamena osigurača, automatskih sklopki, utičnica i prekidača u Beogradu. Dolazak na teren u roku od 60–90 minuta, dostupni 24/7. Sigurne i pouzdane elektroinstalacije.";
  const url = "https://majstordex.rs/usluge/zamena-osiguraca-i-uticnica";

  return (
    <>
      <Head>
        {/* ----------------------------------------- */}
        {/* SEO                                      */}
        {/* ----------------------------------------- */}
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={url} />

        {/* OG */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta
          property="og:image"
          content="https://majstordex.rs/images/zamena-osigraca-i-uticnica.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="sr_RS" />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="service" />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta
          name="twitter:image"
          content="https://majstordex.rs/images/zamena-osigraca-i-uticnica.webp"
        />
      </Head>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-800">
        {/* ------------------------------------------------ */}
        {/* HERO SLIKA – identičan stil kao TA/bojler       */}
        {/* ------------------------------------------------ */}
        <div className="w-full mb-8 rounded-2xl overflow-hidden shadow-lg bg-white">
          <Image
            src="/images/zamena-osigraca-i-uticnica.webp"
            alt="Zamena osigurača i utičnica u Beogradu – MajstorDex električar 24/7"
            width={1600}
            height={900}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* ------------------------------------------------ */}
        {/* Breadcrumb                                       */}
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
            Zamena osigurača i utičnica
          </span>
        </nav>

        {/* ------------------------------------------------ */}
        {/* OPIS USLUGE                                      */}
        {/* ------------------------------------------------ */}
        <section className="mb-12 text-lg leading-relaxed">
          <h1 className="text-3xl font-bold mb-4">
            Zamena osigurača i utičnica u Beogradu
          </h1>

          <p>
            Zamena osigurača, automatskih sklopki, utičnica i prekidača ključna
            je za bezbedno i stabilno funkcionisanje elektroinstalacija. Neispravan
            osigurač ili labava utičnica mogu dovesti do varničenja, pregrevanja
            i u najgorem slučaju požara.
          </p>

          <p className="mt-3">
            MajstorDex vrši profesionalnu zamenu osigurača i utičnica uz dolazak
            na adresu u roku od <strong>60–90 minuta</strong> širom Beograda.
            Dostupni smo 24/7 – radnim danima, vikendom i praznicima.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">
            Kada je vreme za zamenu osigurača?
          </h2>

          <ul className="list-disc list-inside space-y-1">
            <li>osigurač često pregoreva bez vidljivog razloga</li>
            <li>kućište osigurača je crno, deformisano ili istopljeno</li>
            <li>automatska sklopka često iskače i teško se vraća</li>
            <li>FID sklopka reaguje čim se uključi određeni potrošač</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3">
            Simptomi loših utičnica i prekidača
          </h2>

          <ul className="list-disc list-inside space-y-1">
            <li>utičnica je labava, utikač “šeta” ili ispada</li>
            <li>primetan miris paljevine oko utičnice ili prekidača</li>
            <li>tragovi čađi ili žutilo plastike</li>
            <li>varnice pri uključivanju uređaja</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Gde radimo?</h2>
          <p>
            Zamenu osigurača i utičnica radimo na celoj teritoriji Beograda —
            Novi Beograd, Zemun, Zvezdara, Vračar, Stari Grad, Rakovica,
            Voždovac, Čukarica, Palilula i ostala naselja.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">
            Zašto je važna pravovremena zamena?
          </h2>
          <p>
            Neispravan osigurač ili loša utičnica mogu dovesti do varničenja,
            pregrevanja i oštećenja instalacije. Pravovremena zamena osigurača,
            utičnica i prekidača povećava bezbednost, stabilnost instalacije i
            smanjuje rizik od većih kvarova.
          </p>
        </section>

        {/* ------------------------------------------------ */}
        {/* 3 MINI KARTICE – Povezane usluge (vizuelno isto) */}
        {/* ------------------------------------------------ */}
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
                  alt="Servis bojlera i zamena grejača"
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
                  alt="Hitne elektro intervencije 0–24 Beograd"
                  className="rounded-lg mb-3"
                />
                <h3 className="font-semibold text-lg">
                  Hitne elektro intervencije
                </h3>
              </div>
            </Link>
          </div>
        </section>

        {/* ------------------------------------------------ */}
        {/* CENA USLUGE – identičan stil kao TA/bojler      */}
        {/* ------------------------------------------------ */}
        <section className="bg-yellow-50 rounded-xl p-6 shadow-md mt-10 text-center">
          <h2 className="text-2xl font-bold mb-3 text-yellow-800">
            Cena zamene osigurača i utičnica
          </h2>

          <p className="text-gray-700 mb-2 text-lg">
            Orijentaciona cena usluge:
          </p>
          <p className="text-3xl font-bold text-yellow-600 mb-2">
            {cene.zamenaOsiguraca}
          </p>

          <p className="text-sm text-gray-600">
            Tačna cena se određuje nakon pregleda instalacije — pozovite nas
            0–24!
          </p>
        </section>

        {/* ------------------------------------------------ */}
        {/* FAQ – isti dizajn kao TA/bojler templejt        */}
        {/* ------------------------------------------------ */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">
            Često postavljana pitanja
          </h2>

          <div className="space-y-4">
            <details className="p-4 border rounded-lg bg-gray-50">
              <summary className="font-semibold cursor-pointer">
                Kada treba zameniti osigurač?
              </summary>
              <p className="mt-2">
                Osigurač treba zameniti ako često pregoreva, deformisan je, crn
                je ili se topi. To su jasni znaci da više ne radi kako treba i
                da može biti opasan.
              </p>
            </details>

            <details className="p-4 border rounded-lg bg-gray-50">
              <summary className="font-semibold cursor-pointer">
                Da li je opasno koristiti labavu utičnicu?
              </summary>
              <p className="mt-2">
                Da, labava utičnica može da varniči i pregreva se, što
                predstavlja rizik od požara i oštećenja uređaja. Preporučuje se
                što skorija zamena.
              </p>
            </details>

            <details className="p-4 border rounded-lg bg-gray-50">
              <summary className="font-semibold cursor-pointer">
                Da li radite hitnu zamenu osigurača i utičnica?
              </summary>
              <p className="mt-2">
                Da, dostupni smo 24/7 i dolazimo u roku od 60–90 minuta na
                teritoriji Beograda, u zavisnosti od lokacije i trenutne
                gužve u saobraćaju.
              </p>
            </details>
          </div>
        </section>

        {/* ------------------------------------------------ */}
        {/* JSON-LD: Breadcrumb + Service + FAQPage          */}
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
                    name: "Zamena osigurača i utičnica",
                    item: url,
                  },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                name: "Zamena osigurača i utičnica Beograd",
                serviceType: "Zamena osigurača i utičnica",
                areaServed: "Beograd",
                provider: {
                  "@type": "LocalBusiness",
                  name: "MajstorDex",
                  telephone: "+381600500063",
                  url: "https://majstordex.rs",
                },
                description: desc,
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Kada treba zameniti osigurač?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Osigurač treba zameniti ako često pregoreva, deformisan je, crn ili se topi.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Da li je opasno koristiti labavu utičnicu?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Da, labava utičnica može da varniči i pregreva se, što predstavlja rizik od požara.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Da li radite hitnu zamenu osigurača i utičnica?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Da, dostupni smo 24/7 i dolazimo u roku od 60–90 minuta na teritoriji Beograda.",
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
