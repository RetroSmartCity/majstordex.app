"use client";

import { ReactNode, useEffect, useState } from "react";
import Head from "next/head";
import Router from "next/router";

import Header from "./Header";
import Footer from "./Footer";
import SocialBar from "./SocialBar";
import { Phone } from "lucide-react";

import { svaNaselja } from "../src/data/naselja";

// Loading bar state
let timeout: any;

export default function Layout({ children }: { children: ReactNode }) {
  const [showButton, setShowButton] = useState(false);
  const [loading, setLoading] = useState(false);

  /* ============================
      PAGE LOAD LISTENER (SPA)
  ============================ */
  useEffect(() => {
    const start = () => {
      clearTimeout(timeout);
      setLoading(true);
    };

    const end = () => {
      timeout = setTimeout(() => setLoading(false), 200);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  /* ============================
       SCROLL BEHAVIOR
  ============================ */
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 180);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ============================
        STRUCTURED DATA
  ============================ */
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "@id": "https://majstordex.rs/#business",
    name: "MajstorDex – Električar Beograd 0-24",
    description:
      "Hitne elektro intervencije, servis bojlera, popravka TA peći i elektro instalacija. Dolazak 60–90 min širom Beograda.",
    image: "https://majstordex.rs/logo-mdex-white.png",
    url: "https://majstordex.rs",
    telephone: "+381600500063",
    priceRange: "$$",
    areaServed: svaNaselja,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Beograd",
      addressCountry: "RS",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "44.790",
      longitude: "20.520",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: [
      "https://www.facebook.com/majstordex.rs/",
      "https://www.instagram.com/majstordex.rs/",
      "https://www.tiktok.com/@majstordex",
      "https://www.kupujemprodajem.com/profil/MajstorDex",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+381600500063",
      contactType: "customer service",
      availableLanguage: ["sr", "en"],
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">

      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="MajstorDex RSS"
          href="/rss.xml"
        />

        {/* GLOBAL JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </Head>

      {/* ===========================
          TOP LOADING BAR
      ============================ */}
      {loading && (
        <div className="fixed top-0 left-0 w-full h-[3px] bg-yellow-400 z-[9999] animate-pulse"></div>
      )}

      {/* HEADER */}
      <Header />

      {/* PAGE CONTENT */}
      <main className="flex-1 animate-fadeIn">{children}</main>

      {/* SOCIAL ICONS */}
      <SocialBar />

      {/* FOOTER */}
      <Footer />

      {/* MOBILE CALL BUTTON */}
      {showButton && (
        <a
          href="tel:+381600500063"
          aria-label="Pozovi Majstora Dejana"
          className="
            fixed bottom-24 right-4 z-50 
            bg-yellow-400 text-black
            px-5 py-3 rounded-full
            shadow-2xl flex items-center gap-2
            hover:bg-yellow-300 transition-all duration-300
            md:hidden
            active:scale-95 active:shadow-lg
          "
        >
          <Phone size={20} />
          Pozovi
        </a>
      )}
    </div>
  );
}
