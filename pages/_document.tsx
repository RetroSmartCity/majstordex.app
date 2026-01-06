// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const siteUrl = "https://majstordex.rs";
  const logoUrl = "https://majstordex.rs/logo.webp";
  const GTM_ID = "GTM-WTHBXKHS";

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
        {/* ✅ GTM (script) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />

        {/* ✅ PWA + Ikone */}
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#facc15" />

        {/* ✅ SEO Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <body>
        {/* ✅ GTM (noscript) – mora odmah posle <body> */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
