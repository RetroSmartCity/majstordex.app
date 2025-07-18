import Head from 'next/head';

type Props = {
  title: string;
  description: string;
  url: string;
  image?: string;
  siteName?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
  fbAppId?: string; // opcionalno, za Facebook Insights
};

export default function SEO({
  title,
  description,
  url,
  image = 'https://majstordex.rs/default-og.jpg',
  siteName = 'MajstorDex',
  author = 'MajstorDex Team',
  publishedTime,
  modifiedTime,
  keywords = [],
  fbAppId,
}: Props) {
  const isArticle = !!publishedTime;

  const synonymKeywords = ['MajstorDex', 'Majstor Dex', 'Dex Majstor'];
  const allKeywords = Array.from(new Set([...keywords, ...synonymKeywords]));

  const jsonLd = isArticle
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        image: [image],
        author: {
          '@type': 'Organization',
          name: author,
        },
        publisher: {
          '@type': 'Organization',
          name: siteName,
          logo: {
            '@type': 'ImageObject',
            url: 'https://majstordex.rs/favicon.ico',
          },
        },
        datePublished: publishedTime,
        dateModified: modifiedTime || publishedTime,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': url,
        },
        alternateName: synonymKeywords,
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteName,
        url,
        alternateName: synonymKeywords,
      };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {allKeywords.length > 0 && <meta name="keywords" content={allKeywords.join(', ')} />}
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      <link rel="alternate" type="application/rss+xml" title="MajstorDex RSS" href="/rss.xml" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={isArticle ? 'article' : 'website'} />
      <meta property="og:locale" content="sr_RS" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      {image && (
        <>
          <meta property="og:image" content={image} />
          <meta property="og:image:alt" content="Majstor Dex - Elektro intervencije 24/7 u Beogradu" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </>
      )}
      {fbAppId && <meta property="fb:app_id" content={fbAppId} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && (
        <>
          <meta name="twitter:image" content={image} />
          <meta name="twitter:image:alt" content="Majstor Dex - Hitne elektro usluge" />
        </>
      )}
      <meta name="twitter:site" content="@MajstorDex" />
      <meta name="twitter:creator" content="@MajstorDex" />

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </Head>
  );
}
