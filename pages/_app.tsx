// pages/_app.tsx
// pages/_app.tsx
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '@/components/Layout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#facc15" />
        <link rel="icon" href="/favicon.ico" />
        <title>Majstor Dex</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
