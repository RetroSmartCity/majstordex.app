import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

interface UslugaTemplateProps {
  title: string;
  desc: string;
  url: string;
  image?: string;
  h1: string;
  content: React.ReactNode;
  povezane?: {
    title: string;
    link: string;
    image: string;
  }[];
  price?: string;
  faq?: {
    question: string;
    answer: string;
  }[];

  /* NOVO: PREMIUM HERO */
  heroContent?: {
    title: string;
    subtitle?: string;
    buttonText?: string;
    buttonLink?: string;
    overlay?: boolean;
  };
}

export default function UslugaTemplate({
  title,
  desc,
  url,
  image = "/images/default.webp",
  h1,
  content,
  povezane = [],
  price,
  faq = [],
  heroContent
}: UslugaTemplateProps) {
  return (
    <>
      {/* -------------------------------- */}
      {/* SEO */}
      {/* -------------------------------- */}
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={url} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="service" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={image} />
      </Head>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-800">

        {/* -------------------------------------------------- */}
        {/* HERO BLOK – ako ima heroContent → prikazi premium */}
        {/* -------------------------------------------------- */}
        {heroContent ? (
          <div className="w-full mb-8 rounded-2xl overflow-hidden shadow-lg bg-white">
  <Image
    src={image}
    alt={title}
    width={1600}
    height={900}
    className="
      w-full 
      object-cover
      max-h-[260px] 
      md:max-h-[340px] 
      lg:max-h-[420px]
    "
    priority
  />
</div>


            {/* fiksna visina za mobilni / šira za desktop */}
            <div className="w-full h-64 md:h-[420px]"></div>
          </div>
        ) : (
          /* fallback: klasična hero slika kao pre */
          <div className="w-full mb-10 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={image}
              alt={h1}
              width={1600}
              height={900}
              className="w-full h-auto object-contain bg-white"
              priority
            />
          </div>
        )}

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="text-sm mb-6 text-gray-500 flex flex-wrap items-center gap-1"
        >
          <Link href="/" className="hover:underline text-blue-600">
            Početna
          </Link>
          <span>›</span>
          <Link href="/usluge" className="hover:underline text-blue-600">
            Usluge
          </Link>
          <span>›</span>
          <span aria-current="page" className="text-gray-800 font-semibold">
            {h1}
          </span>
        </nav>

        {/* Naslov + sadržaj */}
        <h1 className="text-3xl font-bold mb-4">{h1}</h1>
        <section className="text-lg leading-relaxed mb-14">{content}</section>

        {/* Povezane usluge */}
        {povezane.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Ostale usluge MajstorDex
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
              {povezane.map((p) => (
                <Link href={p.link} key={p.link}>
                  <div className="bg-white rounded-xl shadow hover:shadow-xl transition cursor-pointer p-4 text-center">
                    <Image
                      src={p.image}
                      alt={p.title}
                      width={400}
                      height={260}
                      className="rounded-xl mb-3 object-cover w-full h-56"
                    />
                    <h3 className="font-semibold text-lg">{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Cena */}
        {price && (
          <section className="bg-yellow-50 rounded-xl p-6 shadow-md mt-14 text-center">
            <h2 className="text-2xl font-bold mb-3 text-yellow-800">
              Cena usluge
            </h2>

            <p className="text-3xl font-bold text-yellow-600 mb-2">{price}</p>
            <p className="text-sm text-gray-600">
              Zavisi od vrste kvara, materijala i vremena rada.
            </p>
          </section>
        )}

        {/* FAQ */}
        {faq.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">
              Često postavljana pitanja
            </h2>

            <div className="space-y-4">
              {faq.map((q) => (
                <details key={q.question} className="p-4 border rounded-lg bg-gray-50">
                  <summary className="font-semibold cursor-pointer">
                    {q.question}
                  </summary>
                  <p className="mt-2">{q.answer}</p>
                </details>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
