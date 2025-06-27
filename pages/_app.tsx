// pages/_app.tsx
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import '@/styles/globals.css'

type GtagFunction = (
  command: 'config' | 'event' | 'set',
  targetId: string,
  params?: Record<string, unknown>
) => void;

declare global {
  interface Window {
    gtag?: GtagFunction;
  }
}

const GA_ID = 'G-JF0XYKPFKP' // zameni sa svojim GA4 ID

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (window.gtag) {
        window.gtag('config', GA_ID, {
          page_path: url,
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    // Početno praćenje stranice na prvu učitanost
    handleRouteChange(window.location.pathname);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    // Event za klik na telefon, prati klik na sve linkove sa tel:
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (!target) return;

      const link = target.closest('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (link && window.gtag) {
        window.gtag('event', 'click', {
          event_category: 'Telefon',
          event_label: link.href,
          transport_type: 'beacon',
        });
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
