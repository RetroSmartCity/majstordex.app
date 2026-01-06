// pages/_app.tsx
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";

declare global {
  interface Window {
    dataLayer?: any[];
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // osiguraj dataLayer (GTM je ubacuje, ali nek bude sigurno)
    window.dataLayer = window.dataLayer || [];

    // ✅ SPA page_view na svaku promenu rute (Next.js client-side navigation)
    const handleRoute = (url: string) => {
      window.dataLayer?.push({
        event: "page_view",
        page_path: url,
      });
    };
    router.events.on("routeChangeComplete", handleRoute);

    // ✅ automatski hvata SVAKI klik na tel: link (bez menjanja komponenti)
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const a = target.closest('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (!a) return;

      const href = a.getAttribute("href") || "";
      const phone = href.replace(/^tel:/, "").trim();

      window.dataLayer?.push({
        event: "call_click",
        phone,
        link_url: href,
        page_path: window.location.pathname,
      });
    };

    document.addEventListener("click", onDocClick, true);

    return () => {
      router.events.off("routeChangeComplete", handleRoute);
      document.removeEventListener("click", onDocClick, true);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}
