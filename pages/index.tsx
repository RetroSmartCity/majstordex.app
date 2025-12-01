import Head from "next/head";

import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";

import UslugeIndex from "@/components/home/UslugeIndex";
import BenefitsPro from "@/components/BenefitsPro";
import LokacijeIndex from "@/components/home/LokacijeIndex";
import CTAblok from "@/components/home/CTAblok";

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://majstordex.rs/#localbusiness",
    name: "MajstorDex – Električar Beograd 0–24",
    description:
      "Hitne elektro intervencije u Beogradu sa dolaskom za 60–90 minuta. Preko 800 pozitivnih recenzija. Servis bojlera, TA peći, elektro instalacije, utičnice, osigurači i sve hitne intervencije.",
    url: "https://majstordex.rs/",
    telephone: "+381600500063",
    image: "https://majstordex.rs/logo.png",
    logo: "https://majstordex.rs/logo.png",
    priceRange: "$$",
    openingHours: "Mo-Su 00:00-24:00",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Beograd",
      addressCountry: "RS",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.8125,
      longitude: 20.4612,
    },
    areaServed: [
      "Stari Grad",
      "Vračar",
      "Novi Beograd",
      "Zemun",
      "Čukarica",
      "Voždovac",
      "Palilula",
      "Rakovica",
      "Zvezdara",
      "Savski Venac",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Servis bojlera",
          url: "https://majstordex.rs/usluge/servis-bojlera",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Popravka TA peći",
          url: "https://majstordex.rs/usluge/popravka-ta-peci",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Elektro instalacije",
          url: "https://majstordex.rs/usluge/popravka-elektroinstalacija",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hitne intervencije",
          url: "https://majstordex.rs/usluge/hitne-intervencije",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Električar Beograd 0–24 | MajstorDex</title>
        <meta
          name="description"
          content="Hitne elektro intervencije u Beogradu sa dolaskom 60–90 minuta. Preko 800 pozitivnih recenzija – električar Beograd 0–24."
        />
        <link rel="canonical" href="https://majstordex.rs/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </Head>

      {/* HERO */}
      <Hero />

      {/* TRUST BAR */}
      <TrustBar />

      {/* USLUGE – OVDE SMO DODALI ID */}
      <section id="usluge">
        <UslugeIndex />
      </section>

      {/* BENEFITI */}
      <BenefitsPro />

      {/* LOKACIJE */}
      <LokacijeIndex />

      {/* CTA BLOK */}
      <CTAblok />
    </>
  );
}
