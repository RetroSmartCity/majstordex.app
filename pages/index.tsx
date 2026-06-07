
import Head from "next/head";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import UslugeIndex from "@/components/home/UslugeIndex";
import LokacijeIndex from "@/components/home/LokacijeIndex";
import CTAblok from "@/components/home/CTAblok";
import { getAllPosts } from "@/lib/blog";

export default function Home({ posts = [] }) {
  return (
    <>
      <Head>
        <title>MajstorDex – Električar Beograd 0–24</title>

        <meta
          name="description"
          content="Hitne elektro intervencije u Beogradu. Dolazak za 60–90 minuta. Najbolje ocenjen električar sa 800+ pozitivnih recenzija."
        />

        <link
          rel="canonical"
          href="https://majstordex.rs/"
        />
      </Head>

      <main>
        <Hero />

        <TrustBar />

        <div id="usluge">
          <UslugeIndex />
        </div>

        <LokacijeIndex />

        <CTAblok />

        {/* 🔥 BLOG SEKCIJA */}
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="mb-10 max-w-3xl">
            <span className="inline-block mb-4 rounded-full bg-yellow-100 px-4 py-1 text-sm font-semibold text-yellow-800">
              MajstorDex blog
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Saveti i stvarni kvarovi sa terena
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Problemi sa bojlerima, klimama i elektro
              instalacijama koje svakodnevno rešavamo širom
              Beograda.
            </p>
          </div>

          {posts.length === 0 && (
            <p className="text-gray-500">
              Nema blog postova.
            </p>
          )}

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <a
                  href={`/blog/${post.slug}`}
                  className="block"
                >
                  <div className="overflow-hidden bg-gray-100">
                    <img
                      src={
                        post.image ||
                        "/images/blog/default-blog.webp"
                      }
                      alt={post.title}
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </a>

                <div className="p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-800">
                      {post.category ||
                        "Saveti sa terena"}
                    </span>

                    {post.date && (
                      <span className="text-xs text-gray-400">
                        {post.date}
                      </span>
                    )}
                  </div>

                  <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900">
                    <a
                      href={`/blog/${post.slug}`}
                      className="hover:text-yellow-600"
                    >
                      {post.title}
                    </a>
                  </h3>

                  {post.excerpt && (
                    <p className="mb-5 text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </p>
                  )}

                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex font-semibold text-blue-600 hover:text-blue-800"
                  >
                    Pročitaj više →
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="/blog"
              className="inline-flex rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:bg-yellow-300"
            >
              Pogledaj sve tekstove →
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

// 🔥 OVO JE KLJUČNO
export async function getStaticProps() {
  const posts = getAllPosts().slice(0, 3);

  return {
    props: {
      posts,
    },
  };
}

