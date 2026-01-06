// pages/_app.tsx
import type { AppProps } from "next/app";
import { useEffect } from "react";
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

  // SPA page_view
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

    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  // tel click => call_click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const a = target.closest('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (!a) return;

      const telHref = a.getAttribute("href") || "";
      const phoneNumber = telHref.replace("tel:", "");

      pushToDataLayer({
        event: "call_click",
        phone_number: phoneNumber,
        link_url: telHref,
        page_path: window.location.pathname,
        page_location: window.location.href,
        page_title: document.title,
      });
    };

    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
