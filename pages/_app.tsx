// pages/_app.tsx
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import '@/styles/globals.css'

const GA_ID = 'G-JF0XYKPFKP' // Zameni svojim GA4 ID-jem

// Funkcija za slanje pageview događaja GA4
function sendPageview(url: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_ID, {
      page_path: url,
    })
  }
}

// Funkcija za slanje custom događaja GA4
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
    // Pošalji prvi pageview odmah
    sendPageview(window.location.pathname)

    // Handler za promenu ruta (pageview)
    const handleRouteChange = (url: string) => {
      sendPageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  useEffect(() => {
    // Praćenje klikova na tel: linkove
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement
      if (!target) return

      // Pronađi najbliži <a> tag sa href koji počinje sa tel:
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
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
