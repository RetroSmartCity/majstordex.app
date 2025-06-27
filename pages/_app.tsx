// pages/_app.tsx
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import '@/styles/globals.css'

// Globalno dodajemo gtag u window za TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const GA_ID = 'G-JF0XYKPFKP'; // Tvoj Google Analytics 4 ID

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window.gtag === 'function') {
        window.gtag('config', GA_ID, {
          page_path: url,
        });
      }
    };

    const trackTelClicks = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a[href^="tel:"]') as HTMLAnchorElement | null;

      if (link && typeof window.gtag === 'function') {
        window.gtag('event', 'click_to_call', {
          event_category: 'engagement',
          event_label: link.href,
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    document.addEventListener('click', trackTelClicks);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      document.removeEventListener('click', trackTelClicks);
    };
  }, [router.events]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
