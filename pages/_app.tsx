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

const GA_ID = 'G-JF0XYKPFKP' // Zameni sa svojim GA4 ID

function sendPageview(url: string) {
  if (window.gtag) {
    window.gtag('config', GA_ID, {
      page_path: url,
    })
  }
}

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
    const handleRouteChange = (url: string) => {
      sendPageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    sendPageview(window.location.pathname)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement
      if (!target) return

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
