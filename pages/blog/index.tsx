import { GetStaticProps } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

type BlogPost = {
  title: string;
  slug: string;
  excerpt?: string;
  date?: string;
  image?: string;
  category?: string;
};

type BlogListProps = {
  posts: BlogPost[];
};

export default function Blog({ posts }: BlogListProps) {
  return (
    <main className="bg-white">
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="mb-10 max-w-3xl">
          <span className="inline-block mb-4 rounded-full bg-yellow-100 px-4 py-1 text-sm font-semibold text-yellow-800">
            MajstorDex blog
          </span>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Saveti i stvarni kvarovi sa terena
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            Problemi sa bojlerima, klimama i elektro instalacijama koje
            svakodnevno rešavamo širom Beograda.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="overflow-hidden bg-gray-100">
                  <img
                    src={post.image || "/images/blog/default-blog.webp"}
                    alt={post.title}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>

              <div className="p-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-800">
                    {post.category || "Saveti sa terena"}
                  </span>

                  {post.date && (
                    <span className="text-xs text-gray-400">{post.date}</span>
                  )}
                </div>

                <h2 className="mb-3 text-xl font-bold leading-snug text-gray-900">
                  <Link href={`/blog/${post.slug}`} className="hover:text-yellow-600">
                    {post.title}
                  </Link>
                </h2>

                {post.excerpt && (
                  <p className="mb-5 text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                )}

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex font-semibold text-blue-600 hover:text-blue-800"
                >
                  Pročitaj više →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export const getStaticProps: GetStaticProps<BlogListProps> = async () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};