// pages/_app.tsx
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import Layout from "@/components/Layout";
import "@/styles/globals.css";

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

const GA_ID = "G-JF0XYKPFKP"; // GA4
const ADS_ID = "AW-17726843589"; // Google Ads Destination ID

// OPTIONAL: ubaci kad napraviš Ads konverziju "Calls from website"
// const ADS_CONV_LABEL = "PASTE_LABEL_HERE";

const gtagSafe = (...args: any[]) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag(...args);
  }
};

const sendPageview = (url: string) => {
  // GA4 page_view
  gtagSafe("config", GA_ID, { page_path: url });
  // Ads config (ok da stoji)
  gtagSafe("config", ADS_ID);
};

type GAEventParams = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

const sendEvent = ({ action, category, label, value }: GAEventParams) => {
  gtagSafe("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // SPA pageviews
  useEffect(() => {
    if (typeof window === "undefined") return;

    // initial
    sendPageview(window.location.pathname);

    const handleRouteChange = (url: string) => sendPageview(url);
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // tel: click tracking
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const link = target.closest('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (!link) return;

      // GA4 event (vidi se u GA4 -> Events)
      sendEvent({
        action: "call_click",
        category: "Telefon",
        label: link.href,
        value: 1,
      });

      // ✅ Google Ads conversion (odkomentariši kad imaš label)
      // gtagSafe("event", "conversion", {
      //   send_to: `${ADS_ID}/${ADS_CONV_LABEL}`,
      // });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      {/* Load gtag.js once */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />

      {/* Init GA4 + Ads */}
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());

          gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          gtag('config', '${ADS_ID}');
        `}
      </Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
