import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { cene } from "@/data/cene";

export default function ServisBojlera() {
  const title = "Servis bojlera Beograd | Zamena grejača i termostata | MajstorDex 24/7";
  const desc =
    "Profesionalan servis bojlera u Beogradu – zamena grejača, termostata, ventila i čišćenje. Dolazak majstora za 60–90 min. Dostupni 24/7.";
  const url = "https://majstordex.rs/usluge/servis-bojlera";

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
        <meta property="og:image" content="https://majstordex.rs/images/servis-bojlera.webp" />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="service" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content="https://majstordex.rs/images/servis-bojlera.webp" />
      </Head>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-800">

        {/* HERO SLIKA */}
        <div className="w-full mb-8 rounded-2xl overflow-hidden shadow-lg bg-white">
          <Image
            src="/images/servis-bojlera.webp"
            alt="Servis bojlera Beograd - zamena grejača i termostata"
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
          <span aria-current="page" className="text-gray-800 font-semibold">
            Servis bojlera
          </span>
        </nav>

        {/* OPIS USLUGE */}
        <section className="mb-12 text-lg leading-relaxed">

          <h1 className="text-3xl font-bold mb-4">
            Servis bojlera u Beogradu — zamena grejača i termostata
          </h1>

          <p>
            Bojleri često prestanu da greju zbog pregorelog grejača, lošeg termostata,
            previše kamenca ili curenja vode. MajstorDex vrši kompletan servis bojlera
            svih modela uz brz dolazak na adresu.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Najčešće usluge servisa bojlera</h2>

          <ul className="list-disc list-inside space-y-1">
            <li>Zamena grejača (flanš ili suvog grejača)</li>
            <li>Popravka ili zamena termostata</li>
            <li>Zamena sigurnosnog ventila</li>
            <li>Rešavanje curenja i hidro kvarova</li>
            <li>Kompletno čišćenje kamenca</li>
            <li>Dijagnostika električnih elemenata</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Gde radimo?</h2>
          <p>
            Dolazak na teritoriji celog Beograda — Novi Beograd, Stari Grad, Zemun,
            Rakovica, Voždovac, Zvezdara, Cukarica i ostala naselja.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Koliko je važan redovan servis?</h2>
          <p>
            Redovan servis sprečava pucanje bojlera, štedite struju i izbegavate velike kvarove.
            Preporuka je barem jednom godišnje izvršiti čišćenje kamenca i pregled elemenata.
          </p>
        </section>

        {/* 3 MINI KARTICE */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">Povezane usluge</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

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
            <li>Dolazak za 60–90 minuta</li>
            <li>Iskusni i licencirani majstori</li>
            <li>Garancija na rad i delove</li>
            <li>Transparentne cene</li>
            <li>Dostupni 24/7 — radimo i praznicima</li>
          </ul>
        </section>

        {/* CENA USLUGE */}
        <section className="bg-yellow-50 rounded-xl p-6 shadow-md mt-10 text-center">
          <h2 className="text-2xl font-bold mb-3 text-yellow-800">Cena servisa bojlera</h2>

          <p className="text-gray-700 mb-2 text-lg">Orijentaciona cena:</p>
          <p className="text-3xl font-bold text-yellow-600 mb-2">{cene.servisBojlera}</p>

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
                Koliko traje servis bojlera?
              </summary>
              <p className="mt-2">Najčešće 30–60 minuta, zavisno od kvara.</p>
            </details>

            <details className="p-4 border rounded-lg bg-gray-50">
              <summary className="font-semibold cursor-pointer">
                Kada treba zameniti grejač na bojleru?
              </summary>
              <p className="mt-2">
                Ako bojler ne greje, izbija osigurač ili se čuje šuštanje — vreme je za zamenu.
              </p>
            </details>

            <details className="p-4 border rounded-lg bg-gray-50">
              <summary className="font-semibold cursor-pointer">
                Da li radite hitne intervencije?
              </summary>
              <p className="mt-2">Da, dostupni smo 24/7 i dolazimo u roku od 60–90 minuta.</p>
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
                  { "@type": "ListItem", position: 3, name: "Servis bojlera", item: url }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                name: "Servis bojlera Beograd",
                provider: {
                  "@type": "LocalBusiness",
                  name: "MajstorDex",
                  telephone: "+381600500063",
                  areaServed: "Beograd",
                  url: "https://majstordex.rs"
                },
                description: desc,
                serviceType: "Servis bojlera"
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
                      text: "Najčešći servis traje 30–60 minuta."
                    }
                  },
                  {
                    "@type": "Question",
                    name: "Kada treba zameniti grejač?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Kada bojler ne greje, izbija osigurač ili ima puno kamenca."
                    }
                  },
                  {
                    "@type": "Question",
                    name: "Da li radite hitne intervencije?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Da, dostupni smo 24/7 i dolazimo za 60–90 minuta."
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
