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
        <link rel="canonical" href="https://majstordex.rs/" />
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
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6">
            Saveti i rešavanje kvarova
          </h2>

          {posts.length === 0 && (
            <p className="text-gray-500">Nema blog postova.</p>
          )}

          {posts.map((post) => (
            <div key={post.slug} className="mb-6">
              <h3 className="text-xl font-semibold">
                {post.title}
              </h3>

              <p className="text-gray-600">
                {post.excerpt}
              </p>

              <a
                href={`/blog/${post.slug}`}
                className="text-blue-600"
              >
                Pročitaj više →
              </a>
            </div>
          ))}

          <a href="/blog" className="text-sm text-gray-500">
            Pogledaj sve tekstove →
          </a>
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