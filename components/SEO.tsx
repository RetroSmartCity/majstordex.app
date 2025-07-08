import Head from 'next/head';

type Props = {
  title: string;
  description: string;
  url: string;
  image?: string;
  siteName?: string;
  author?: string;
  publishedTime?: string; // ISO format: '2023-06-01T12:00:00Z'
  modifiedTime?: string;  // ISO format
  keywords?: string[];
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
}: Props) {
  const isArticle = !!publishedTime;

  const jsonLd = isArticle
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        image: image ? [image] : undefined,
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
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteName,
        url,
      };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      <link rel="alternate" type="application/rss+xml" title="MajstorDex RSS" href="/rss.xml" />

      {/* Open Graph */}
      <meta property="og:type" content={isArticle ? 'article' : 'website'} />
      <meta property="og:locale" content="sr_RS" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      <meta name="twitter:creator" content={`@${author.replace(/\s/g, '')}`} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}
