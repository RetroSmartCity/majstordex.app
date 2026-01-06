// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

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
      },
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}#localbusiness`,
        name: "MajstorDex – Električar Beograd 0–24",
        telephone: "+381600500063",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Beograd",
          addressCountry: "RS",
        },
        openingHours: "Mo-Su 00:00-24:00",
        url: siteUrl,
      },
    ],
  };

  return (
    <Html lang="sr">
      <Head>
        {/* 🔥 GOOGLE TAG MANAGER */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WTHBXKHS');
            `,
          }}
        />

        {/* PWA */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#facc15" />

        {/* SEO Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <body>
        {/* GTM NOSCRIPT */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WTHBXKHS"
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
