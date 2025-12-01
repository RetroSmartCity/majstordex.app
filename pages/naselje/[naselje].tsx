// pages/naselje/[naselje].tsx
// pages/naselje/[naselje].tsx
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import { sveUsluge } from "@/data/usluge";
import { svaNaseljaObj } from "@/data/naselja";

export default function NaseljePage() {
  const router = useRouter();
  const { naselje } = router.query;

  if (!naselje) {
    return <p className="p-10 text-center text-gray-600">Učitavanje...</p>;
  }

  const item = svaNaseljaObj.find((n) => n.slug === naselje);

  if (!item) {
    return (
      <p className="p-12 text-center text-red-600 font-semibold">
        Naselje nije pronađeno.
      </p>
    );
  }

  const naziv = item.naziv;

  /* ============================================================
     SEO AUTO PODACI
  ============================================================ */
  const seoTitle = `Električar ${naziv} – Dolazak 60–90 min | MajstorDex`;
  const seoDesc = `Pouzdan električar u naselju ${naziv}. Hitne intervencije 0–24, dolazak 60–90 min. Servis bojlera, TA peći, elektro instalacije, osigurači, utičnice, LED rasveta i klima uređaji.`;

  const canonicalUrl = `https://majstordex.rs/naselje/${naselje}`;

  /* ============================================================
     FAQ PODACI
  ============================================================ */
  const faq = [
    {
      question: `Koliko brzo dolazite u naselje ${naziv}?`,
      answer: `Dolazak u naselje ${naziv} najčešće je 60–90 minuta, 0–24h.`,
    },
    {
      question: `Da li radite hitne intervencije u ${naziv}?`,
      answer: `Da, MajstorDex pokriva sve hitne elektro intervencije u naselju ${naziv}.`,
    },
    {
      question: `Koje usluge pružate u ${naziv}?`,
      answer: `U naselju ${naziv} radimo sve elektro usluge – servis bojlera, TA peći, osigurače, utičnice, elektro instalacije, LED rasvetu i čišćenje klima uređaja.`,
    },
  ];

  /* ============================================================
     JSON-LD — BREADCRUMB
  ============================================================ */
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
        name: naziv,
        item: canonicalUrl,
      },
    ],
  };

  /* ============================================================
     JSON-LD — LocalBusiness
  ============================================================ */
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MajstorDex",
    description: seoDesc,
    url: canonicalUrl,
    telephone: "+381600500063",
    areaServed: naziv,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Beograd",
      addressCountry: "RS",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "44.7866",
      longitude: "20.4489",
    },
    openingHours: "Mo-Su 00:00-24:00",
    image: "https://majstordex.rs/images/og-default.webp",
  };

  /* ============================================================
     JSON-LD — SERVICE AREA (premium)
  ============================================================ */
  const serviceAreaSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Električar ${naziv}`,
    serviceType: "Električarske usluge",
    areaServed: {
      "@type": "City",
      name: naziv,
    },
    provider: {
      "@type": "LocalBusiness",
      name: "MajstorDex",
      telephone: "+381600500063",
      url: "https://majstordex.rs/",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Usluge dostupne u naselju ${naziv}`,
      itemListElement: sveUsluge.map((u) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: u.naziv,
          url: `https://majstordex.rs/usluge/${u.slug}/${naselje}`,
        },
      })),
    },
    url: canonicalUrl,
  };

  /* ============================================================
      JSON-LD — WEB SITE + SEARCH ACTION
  ============================================================ */
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MajstorDex",
    url: "https://majstordex.rs",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://majstordex.rs/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Hreflang */}
        <link rel="alternate" hrefLang="sr" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDesc} />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://majstordex.rs/images/og-default.webp"
        />
        <meta property="og:url" content={canonicalUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* Schema */}
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </Head>

      {/* ============================================================
          BREADCRUMB UI
      ============================================================ */}
      <nav className="max-w-4xl mx-auto px-4 pt-8 pb-3 text-sm text-gray-600">
        <ol className="flex items-center gap-1">
          <li>
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Beograd
            </Link>
          </li>

          <li className="text-gray-400">/</li>

          <li className="font-semibold text-gray-900">{naziv}</li>
        </ol>
      </nav>

      {/* ============================================================
          HERO
      ============================================================ */}
      <section className="max-w-4xl mx-auto px-4 pt-4 pb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Električar {naziv}
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed">{seoDesc}</p>

        <div className="mt-6">
          <a
            href="tel:+381600500063"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black 
            font-bold px-8 py-4 rounded-xl shadow-md text-lg transition"
          >
            📞 Pozovi odmah – 060 0 5000 63
          </a>
        </div>
      </section>

      {/* ============================================================
          USLUGE — KARTICE
      ============================================================ */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Usluge dostupne u naselju {naziv}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {sveUsluge.map((u) => (
            <Link
              key={u.slug}
              href={`/usluge/${u.slug}/${naselje}`}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm
              hover:shadow-xl hover:-translate-y-1 transition p-8 text-center"
            >
              <div className="text-5xl mb-4">{u.icon || "💡"}</div>
              <p className="font-semibold text-gray-900 text-lg mb-1">
                {u.naziv}
              </p>
              <p className="text-gray-500 text-sm">Pogledaj detalje →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ============================================================
          DRUGA NASELJA
      ============================================================ */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Pogledajte i druga naselja
        </h3>

        <div className="flex flex-wrap gap-3">
          {svaNaseljaObj
            .filter((n) => n.slug !== naselje)
            .map((n) => (
              <Link
                key={n.slug}
                href={`/naselje/${n.slug}`}
                className="px-5 py-2 bg-white border border-gray-200 rounded-full
                shadow-sm hover:shadow-md hover:bg-gray-50 transition text-sm"
              >
                {n.naziv}
              </Link>
            ))}
        </div>
      </section>

      {/* ============================================================
          FAQ
      ============================================================ */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">
          Česta pitanja – {naziv}
        </h3>

        <div className="space-y-8">
          {faq.map((item, index) => (
            <div key={index} className="border-b pb-4">
              <p className="font-semibold text-gray-900">{item.question}</p>
              <p className="text-gray-600 mt-2">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
