// pages/_app.tsx
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import '@/styles/globals.css'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

const GA_ID = 'G-JF0XYKPFKP' // tvoj GA4 ID

function sendPageview(url: string) {
  if (window.gtag) {
    window.gtag('config', GA_ID, {
      page_path: url,
    })
  }
}

function sendEvent({ action, category, label, value }: { action: string; category: string; label?: string; value?: number }) {
  if (window.gtag) {
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
    // Početni pageview
    sendPageview(window.location.pathname)

    // Prati promene rute
    const handleRouteChange = (url: string) => {
      sendPageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  // Dodaj listener za klik na telefon
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement
      if (!target) return

      // proveravamo da li je klik na <a href="tel:...">
      if (
        target.tagName === 'A' &&
        target.getAttribute('href')?.startsWith('tel:')
      ) {
        sendEvent({
          action: 'click',
          category: 'Phone',
          label: target.getAttribute('href') ?? '',
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
