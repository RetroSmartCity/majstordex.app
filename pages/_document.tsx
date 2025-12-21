// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

const GA_ID = "G-JF0XYKPFKP";

export default function Document() {
  const siteUrl = "https://majstordex.rs";
  const logoUrl = "https://majstordex.rs/logo.webp";

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "MajstorDex – Električar Beograd 0–24",
        url: siteUrl,
        logo: logoUrl,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+381600500063",
          contactType: "customer service",
          areaServed: "RS",
          availableLanguage: ["sr"],
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Beograd",
          addressCountry: "RS",
        },
      },

      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}#localbusiness`,
        name: "MajstorDex – Električar Beograd 0–24",
        image: logoUrl,
        telephone: "+381600500063",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Beograd",
          addressCountry: "RS",
        },
        areaServed: {
          "@type": "City",
          name: "Beograd",
        },
        openingHours: "Mo-Su 00:00-24:00",
        url: siteUrl,
        priceRange: "$$",
      },

      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: "MajstorDex",
        publisher: {
          "@id": `${siteUrl}#organization`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl}/pretraga?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <Html lang="sr">
      <Head>
        {/* ✅ Google Analytics GA4 */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* ✅ PWA + Ikone */}
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#facc15" />

        {/* ✅ MAX SEO SCHEMA — ORGANIZATION + WEBSITE + SEARCH BOX */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
