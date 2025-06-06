import Head from "next/head";

type Props = {
  title: string;
  description: string;
  url: string;
  image?: string;
  siteName?: string;
  author?: string;
  publishedTime?: string; // ISO format: '2023-06-01T12:00:00Z'
  modifiedTime?: string;  // ISO format
  keywords?: string[];    // niz ključnih reči
};

export default function SEO({
  title,
  description,
  url,
  image,
  siteName = "MajstorDex",
  author = "MajstorDex Team",
  publishedTime,
  modifiedTime,
  keywords = [],
}: Props) {
  // JSON-LD structured data za WebSite + Article (ako ima publishedTime)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": publishedTime ? "Article" : "WebSite",
    ...(publishedTime && {
      headline: title,
      image: image ? [image] : undefined,
      author: {
        "@type": "Organization",
        name: author,
      },
      publisher: {
        "@type": "Organization",
        name: siteName,
        logo: {
          "@type": "ImageObject",
          url: "/favicon.ico",
        },
      },
      datePublished: publishedTime,
      dateModified: modifiedTime || publishedTime,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
    }),
    ...(publishedTime === undefined && {
      name: siteName,
      url,
    }),
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={publishedTime ? "article" : "website"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      <meta name="twitter:creator" content={`@${author.replace(/\s/g, "")}`} />

      {/* Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}

