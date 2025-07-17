// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

const GA_ID = 'G-JF0XYKPFKP'; // Zameni sa svojim GA4 ID-em

export default function Document() {
  return (
    <Html lang="sr">
      <Head>
        {/* Google Analytics GA4 */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script
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

        {/* Manifest i ikone */}
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#facc15" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
