// pages/usluge/[slug]/[naselje].tsx

import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ComponentType } from "react";

import { sveUsluge } from "@/data/usluge";
import { svaNaseljaObj, naseljaInfo } from "@/data/naselja";
import { uslugeMap } from "@/components/uslugeMap";

export default function UslugaNaseljePage() {
  const router = useRouter();
  const { slug, naselje } = router.query;

  if (!slug || !naselje) {
    return <p className="p-10 text-center text-gray-600">Učitavanje...</p>;
  }

  const info = sveUsluge.find((u) => u.slug === slug);
  const naseljeObj = svaNaseljaObj.find((n) => n.slug === naselje);

  if (!info || !naseljeObj) {
    return (
      <p className="p-12 text-center text-red-600 font-semibold">
        Stranica nije pronađena.
      </p>
    );
  }

  const nazivNaselja = naseljeObj.naziv;
  const nazivUsluge = info.naziv;

  const lokalniPodaci = naseljaInfo[naselje as string] || {
    ime: nazivNaselja,
    ulice: [],
    opis: "",
    problemi: [],
  };

  /* ------------------------------------------------------------
     PREMIUM KOMBINATOR LOGIKA
  ------------------------------------------------------------ */

  const random = (arr: string[]) =>
    arr[Math.floor(Math.random() * arr.length)];

  const varijantaUsluge = random(info.varijante);
  const problemUsluge = random(info.problemi);
  const resenjeUsluge = random(info.resenja);
  const naslovUsluge = random(info.naslovi);

  const ulica1 = lokalniPodaci.ulice[0] || nazivNaselja;
  const ulica2 = lokalniPodaci.ulice[1] || nazivNaselja;

  const lokalniOpis = lokalniPodaci.opis;
  const lokalniProblem = random(lokalniPodaci.problemi || []);

  const kombinovaniOpis = `
    ${varijantaUsluge} U naselju ${nazivNaselja}, posebno oko ulica ${ulica1} i ${ulica2},
    najčešći problemi uključuju ${problemUsluge}${
    lokalniProblem ? ` i lokalni kvar kao što je ${lokalniProblem}.` : "."
  }
    U većini slučajeva rešenje je ${resenjeUsluge}, uz brzu intervenciju na licu mesta.
  `.trim();

  // SEO opis
  const seoDesc = `${varijantaUsluge} Dostupno u naselju ${nazivNaselja}. ${lokalniOpis}`;

  /* ------------------------------------------------------------
     Komponenta usluge (specifičan sadržaj)
  ------------------------------------------------------------ */

  const Component = dynamic(uslugeMap[slug as string], {
    ssr: false,
  }) as ComponentType<{ naselje: string; kombinacija: string }>;

  /* ------------------------------------------------------------
     SEO PODACI
  ------------------------------------------------------------ */

  const seoTitle = `${naslovUsluge} – ${nazivNaselja} | MajstorDex`;
  const canonicalUrl = `https://majstordex.rs/usluge/${slug}/${naselje}`;

  const faq = [
    {
      question: `Koliko brzo dolazite u naselje ${nazivNaselja}?`,
      answer: `Najčešće dolazimo za 60–90 minuta u naselje ${nazivNaselja}.`,
    },
    {
      question: `Koji su najčešći kvarovi u ${nazivNaselja}?`,
      answer: `Najčešći kvarovi su: ${problemUsluge}, ${lokalniProblem}.`,
    },
    {
      question: `Da li radite ${nazivUsluge.toLowerCase()} u ${nazivNaselja}?`,
      answer: `Da, radimo ${nazivUsluge.toLowerCase()} u svim delovima naselja ${nazivNaselja}.`,
    },
    {
      question: `Da li je moguća hitna intervencija u ${nazivNaselja}?`,
      answer: `Da, dostupni smo 24/7 i dolazimo hitno u ${nazivNaselja}.`,
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beograd",
        item: "https://majstordex.rs/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: nazivNaselja,
        item: `https://majstordex.rs/naselje/${naselje}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: nazivUsluge,
        item: canonicalUrl,
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MajstorDex",
    description: seoDesc,
    url: canonicalUrl,
    areaServed: nazivNaselja,
    telephone: "+381600500063",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Beograd",
      addressCountry: "RS",
    },
    openingHours: "Mo-Su 00:00-24:00",
  };

  const serviceAreaSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: nazivUsluge,
    serviceType: nazivUsluge,
    areaServed: {
      "@type": "City",
      name: nazivNaselja,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Usluge dostupne u naselju ${nazivNaselja}`,
      itemListElement: sveUsluge.map((u) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: u.naziv,
          url: `https://majstordex.rs/usluge/${u.slug}/${naselje}`,
        },
      })),
    },
  };

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <link rel="canonical" href={canonicalUrl} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreaSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      {/* ------------------ Breadcrumb ------------------ */}
      <nav className="max-w-4xl mx-auto px-4 pt-8 pb-2 text-sm text-gray-600">
        <ol className="flex items-center gap-1">
          <li>
            <Link href="/" className="text-blue-600 hover:underline">
              Beograd
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li>
            <Link
              href={`/naselje/${naselje}`}
              className="text-blue-600 hover:underline"
            >
              {nazivNaselja}
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li className="font-semibold text-gray-900">{nazivUsluge}</li>
        </ol>
      </nav>

      {/* ------------------ Naslov ------------------ */}
      <section className="max-w-4xl mx-auto px-4 pt-6 pb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          {nazivUsluge} – {nazivNaselja}
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed">{kombinovaniOpis}</p>
      </section>

      {/* ------------------ Dinamički deo usluge ------------------ */}
      <main className="max-w-4xl mx-auto px-4 py-10">
        <Component naselje={nazivNaselja} kombinacija={kombinovaniOpis} />
      </main>

      {/* ------------------ Ostala naselja ------------------ */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          {nazivUsluge} je dostupna i u drugim naseljima
        </h3>

        <div className="flex flex-wrap gap-3">
          {svaNaseljaObj
            .filter((n) => n.slug !== naselje)
            .slice(0, 14)
            .map((n) => (
              <Link
                key={n.slug}
                href={`/usluge/${slug}/${n.slug}`}
                className="px-5 py-2 bg-white border rounded-full shadow-sm hover:shadow-md hover:bg-gray-50 transition text-sm"
              >
                {n.naziv}
              </Link>
            ))}
        </div>
      </section>

      {/* ------------------ Ostale usluge ------------------ */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Ostale usluge u naselju {nazivNaselja}
        </h3>

        <div className="flex flex-wrap gap-3">
          {sveUsluge
            .filter((u) => u.slug !== slug)
            .map((u) => (
              <Link
                key={u.slug}
                href={`/usluge/${u.slug}/${naselje}`}
                className="px-5 py-2 bg-white border rounded-full shadow-sm hover:shadow-md hover:bg-gray-50 transition text-sm"
              >
                {u.naziv}
              </Link>
            ))}
        </div>
      </section>
    </>
  );
}
