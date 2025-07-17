// pages/_app.tsx
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import '@/styles/globals.css'

// Zameni sa tvojim GA4 Measurement ID-em
const GA_ID = 'G-JF0XYKPFKP'

// Funkcija za slanje pageview eventa Google Analytics-u
function sendPageview(url: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_ID, {
      page_path: url,
    })
  }
}

// Funkcija za slanje custom događaja (eventa) Google Analytics-u
function sendEvent({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    })
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    // Pošalji prvi pageview kada se aplikacija učita
    sendPageview(window.location.pathname)

    // Pošalji pageview svaki put kad ruta promeni
    const handleRouteChange = (url: string) => {
      sendPageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  useEffect(() => {
    // Slušaj klikove na "tel:" linkove i šalji event u GA
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
      {/* Ubaci ove GA skripte u pages/_document.tsx ili koristite Next.js Script komponentu za bolje performanse */}
      {/* 
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          `,
          }}
        />
      */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
