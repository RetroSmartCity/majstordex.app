// pages/_app.tsx
import type { AppProps } from "next/app";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import "@/styles/globals.css";

declare global {
  interface Window {
    dataLayer?: any[];
  }
}

function pushToDataLayer(event: Record<string, any>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // ✅ SPA page_view (ostavljeno kako si imao)
  useEffect(() => {
    const sendPageView = (url: string) => {
      pushToDataLayer({
        event: "page_view",
        page_path: url,
        page_location: window.location.href,
        page_title: document.title,
      });
    };

    sendPageView(window.location.pathname);

    const handleRouteChange = (url: string) => sendPageView(url);
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  /**
   * ✅ Stabilno tel: tracking (radi i na mobilnom)
   * Problem: dialer prekine JS pre nego što GTM obradi event.
   * Rešenje: preventDefault na ~150ms -> push -> onda otvori tel link.
   */
  const lastFireRef = useRef<number>(0);

  useEffect(() => {
    const fireTelEvent = (telHref: string) => {
      const now = Date.now();
      // anti-double fire (touch + click)
      if (now - lastFireRef.current < 800) return;
      lastFireRef.current = now;

      const phoneNumber = telHref.replace(/^tel:/, "").trim();

      pushToDataLayer({
        event: "call_click",
        phone_number: phoneNumber,
        link_url: telHref,
        page_path: window.location.pathname,
        page_location: window.location.href,
        page_title: document.title,
      });
    };

    const handler = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const a = target.closest('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (!a) return;

      const telHref = a.getAttribute("href") || "";
      if (!telHref) return;

      // samo za “pravi” klik/tap
      // (ne blokiramo npr. ctrl/cmd click / middle click)
      const me = e as MouseEvent;
      const isMouseLike =
        typeof me.button === "number" || typeof (me as any).metaKey === "boolean";

      if (isMouseLike) {
        const metaKey = (me as any).metaKey;
        const ctrlKey = (me as any).ctrlKey;
        const shiftKey = (me as any).shiftKey;
        const altKey = (me as any).altKey;
        const button = me.button;

        if (metaKey || ctrlKey || shiftKey || altKey) return;
        if (typeof button === "number" && button !== 0) return; // samo леви klik
      }

      // ključ: da GTM stigne pre tel navigacije
      e.preventDefault();

      fireTelEvent(telHref);

      // malo odloži otvaranje dialer-a
      setTimeout(() => {
        window.location.href = telHref;
      }, 150);
    };

    // pointerdown hvata tap ranije od click (bolje za mobilni)
    document.addEventListener("pointerdown", handler, true);
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("pointerdown", handler, true);
      document.removeEventListener("click", handler, true);
    };
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
