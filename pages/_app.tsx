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

const GA_ID = "G-JF0XYKPFKP";       // GA4
const ADS_ID = "AW-17726843589";    // Google Ads Destination ID
// const ADS_TAG_ID = "GT-KVH24SZP"; // (info) Google tag id shown in Ads UI, not required in code

// Safe wrapper (works even if gtag loads a bit later)
const gtagSafe = (...args: any[]) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag(...args);
  }
};

// Pageview on route change (GA4)
const sendPageview = (url: string) => {
  gtagSafe("config", GA_ID, { page_path: url });
  // Optional: also send page_view to Ads (not mandatory, but ok)
  gtagSafe("config", ADS_ID);
};

type GAEventParams = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

// Custom event (GA4)
const sendEvent = ({ action, category, label, value }: GAEventParams) => {
  gtagSafe("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Track SPA navigation (GA4 pageviews)
  useEffect(() => {
    if (typeof window === "undefined") return;

    // First load
    sendPageview(window.location.pathname);

    const handleRouteChange = (url: string) => sendPageview(url);
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // Track click on tel: links
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const link = target.closest('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (!link) return;

      // GA event (you'll see this in GA4)
      sendEvent({
        action: "click",
        category: "Telefon",
        label: link.href,
      });

      /**
       * OPTIONAL (later): If you create a Google Ads conversion action "Calls from website"
       * you’ll get a LABEL like "AbCdEfGhIjK".
       * Then uncomment and set LABEL to send real Ads conversions.
       *
       * const ADS_CONV_LABEL = "PASTE_LABEL_HERE";
       * gtagSafe("event", "conversion", {
       *   send_to: `${ADS_ID}/${ADS_CONV_LABEL}`,
       * });
       */
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      {/* Load gtag.js once. You can load by GA_ID; we also configure ADS_ID below. */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />

      {/* Init Google tag for GA4 + Google Ads */}
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());

          // GA4
          gtag('config', '${GA_ID}', { page_path: window.location.pathname });

          // Google Ads Destination
          gtag('config', '${ADS_ID}');
        `}
      </Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
