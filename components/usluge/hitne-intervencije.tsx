// pages/usluge/hitne-intervencije.tsx

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { cene } from "@/data/cene";

export default function HitneIntervencije() {
  const title = "Hitne elektro intervencije Beograd | MajstorDex 24/7";
  const desc =
    "Hitne elektro intervencije u Beogradu – brza reakcija, dolazak majstora za 60–90 minuta, rešavanje kratkog spoja, pregorelih osigurača i kvarova 24/7.";
  const url = "https://majstordex.rs/usluge/hitne-intervencije";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={url} />

        {/* OG */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content="https://majstordex.rs/images/hitne-intervencije.webp" />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="service" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content="https://majstordex.rs/images/hitne-intervencije.webp" />
      </Head>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-800">

        {/* HERO SLIKA */}
        <div className="w-full mb-8 rounded-2xl overflow-hidden shadow-lg bg-white">
          <Image
            src="/images/hitne-intervencije.webp"
            alt="Hitne elektro intervencije Beograd - MajstorDex 24/7"
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
          <Link href="/" className="hover:underline text-blue-600">Početna</Link>
          <span>›</span>
          <Link href="/usluge" className="hover:underline text-blue-600">Usluge</Link>
          <span>›</span>
          <span className="text-gray-800 font-semibold">Hitne intervencije</span>
        </nav>

        {/* OPIS USLUGE */}
        <section className="mb-12 text-lg leading-relaxed">

          <h1 className="text-3xl font-bold mb-4">
            Hitne elektro intervencije u Beogradu — dolazak 24/7
          </h1>

          <p>
            Kada dođe do iznenadnog kvara na elektro instalacijama, najvažnije je reagovati odmah.
            MajstorDex tim je dostupan <strong>non-stop</strong> i dolazi u roku od{" "}
            <strong>60–90 minuta</strong> na adresu u bilo kom delu Beograda.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">
            Najčešće hitne elektro intervencije
          </h2>

          <ul className="list-disc list-inside space-y-1">
            <li>Kratak spoj u elektro instalacijama</li>
            <li>Pregoreo automatski osigurač</li>
            <li>Izbijanje struje iz utičnice ili prekidača</li>
            <li>Neispravno svetlo, instalacija ili razvodna kutija</li>
            <li>Nestanak struje u delu ili celom stanu</li>
            <li>Hitni kvarovi na TA pećima i bojlerima</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Gde izlazimo?</h2>
          <p>
            Novi Beograd, Zemun, Stari Grad, Palilula, Voždovac, Vračar, Rakovica,
            Čukarica i sva ostala beogradska naselja.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Kada zvati hitnu intervenciju?</h2>
          <p>
            Svaki kvar koji uključuje varnice, dim, miris paljevine, prekid faze
            ili izbijanje osigurača zahteva hitnu reakciju. Naš tim rešava kvar na licu mesta.
          </p>
        </section>

        {/* 3 MINI KARTICE – identične kao TA template */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">Povezane usluge</h2>

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

            <Link href="/usluge/popravka-elektroinstalacija">
              <div className="bg-gray-50 p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center">
                <Image
                  src="/images/popravka-elektroinstalacija.webp"
                  width={300}
                  height={200}
                  alt="Popravka elektroinstalacija"
                  className="rounded-lg mb-3"
                />
                <h3 className="font-semibold text-lg">Popravka elektroinstalacija</h3>
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
            <li>Dolazak za 60–90 minuta</li>
            <li>Dostupni 24/7 — uključujući praznike</li>
            <li>Licencirani i pouzdani električari</li>
            <li>Garancija na rad i ugrađene delove</li>
            <li>Transparentne cene bez skrivenih troškova</li>
          </ul>
        </section>

        {/* CENA USLUGE */}
        <section className="bg-yellow-50 rounded-xl p-6 shadow-md mt-10 text-center">
          <h2 className="text-2xl font-bold mb-3 text-yellow-800">
            Cena hitne elektro intervencije
          </h2>

          <p className="text-gray-700 mb-2 text-lg">Orijentaciona cena:</p>
          <p className="text-3xl font-bold text-yellow-600 mb-2">
            {cene.hitneIntervencije}
          </p>

          <p className="text-sm text-gray-600">
            Tačna cena se određuje nakon dijagnostike — pozovite nas 0–24!
          </p>
        </section>

        {/* FAQ — identičan templejtu */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Često postavljana pitanja</h2>

          <div className="space-y-4">
            <details className="p-4 border rounded-lg bg-gray-50">
              <summary className="font-semibold cursor-pointer">
                Koliko brzo možete doći?
              </summary>
              <p className="mt-2">Najčešće u roku od 60–90 minuta.</p>
            </details>

            <details className="p-4 border rounded-lg bg-gray-50">
              <summary className="font-semibold cursor-pointer">
                Šta spada u hitne elektro intervencije?
              </summary>
              <p className="mt-2">
                Kratak spoj, pregoreli osigurači, prekid faze, dim, miris paljevine,
                iskrenje ili nestanak struje.
              </p>
            </details>

            <details className="p-4 border rounded-lg bg-gray-50">
              <summary className="font-semibold cursor-pointer">
                Da li radite noću i praznicima?
              </summary>
              <p className="mt-2">Da, MajstorDex radi non-stop, 24/7 tokom cele godine.</p>
            </details>
          </div>
        </section>

        {/* SCHEMA */}
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
                  { "@type": "ListItem", position: 3, name: "Hitne intervencije", item: url }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                name: "Hitne elektro intervencije Beograd",
                provider: {
                  "@type": "LocalBusiness",
                  name: "MajstorDex",
                  telephone: "+381600500063",
                  areaServed: "Beograd",
                  url: "https://majstordex.rs"
                },
                description: desc,
                serviceType: "Hitne elektro intervencije"
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Koliko brzo možete doći?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Najčešće za 60–90 minuta."
                    }
                  },
                  {
                    "@type": "Question",
                    name: "Šta spada u hitne elektro intervencije?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Kratak spoj, pregoreli osigurači, prekid faze, iskrenje, dim i nestanak struje."
                    }
                  },
                  {
                    "@type": "Question",
                    name: "Da li radite 24/7?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Da, dostupni smo 24/7 i praznicima."
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
