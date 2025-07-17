// pages/_app.tsx
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Script from 'next/script'
import Layout from '@/components/Layout'
import '@/styles/globals.css'

const GA_ID = 'G-JF0XYKPFKP'

// Funkcija za slanje pageview događaja
const sendPageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_ID, {
      page_path: url,
    })
  }
}

// Tip za custom event funkciju
type GAEventParams = {
  action: string
  category: string
  label?: string
  value?: number
}

// Funkcija za slanje custom događaja
const sendEvent = ({ action, category, label, value }: GAEventParams) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    })
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    sendPageview(window.location.pathname)

    const handleRouteChange = (url: string) => {
      sendPageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const link = target.closest('a[href^="tel:"]') as HTMLAnchorElement | null
      if (link) {
        sendEvent({
          action: 'click',
          category: 'Telefon',
          label: link.href,
        })
      }
    }

    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
