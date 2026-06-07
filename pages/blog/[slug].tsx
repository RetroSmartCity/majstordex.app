import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import Link from "next/link";
import BlogImage from "@/components/BlogImage";

const postsDirectory = path.join(process.cwd(), "posts");

type FrontMatter = {
  title: string;
  excerpt?: string;
  date?: string;
  image?: string;
  category?: string;
};

type PostProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: FrontMatter;
};

const components = {
  BlogImage,
};

export default function PostPage({ source, frontMatter }: PostProps) {
  const title = frontMatter.title || "Naslov nije dostupan";
  const excerpt =
    frontMatter.excerpt || "Stručni saveti i rešavanje kvarova – MajstorDex.";
  const image = frontMatter.image;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={excerpt} />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
        {image && <meta property="og:image" content={image} />}
      </Head>

      <main className="bg-white">
        <article className="max-w-4xl mx-auto px-4 pt-12 pb-16">
          <Link
            href="/blog"
            className="mb-8 inline-block text-sm font-semibold text-blue-600 hover:text-blue-800"
          >
            ← Nazad na blog
          </Link>

          <header className="mb-10">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-yellow-100 px-4 py-1 text-sm font-semibold text-yellow-800">
                {frontMatter.category || "Saveti sa terena"}
              </span>

              {frontMatter.date && (
                <span className="text-sm text-gray-400">{frontMatter.date}</span>
              )}
            </div>

            <h1 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-5xl">
              {title}
            </h1>

            {excerpt && (
              <p className="max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl">
                {excerpt}
              </p>
            )}
          </header>

          {image && (
            <img
              src={image}
              alt={title}
              className="mb-10 max-h-[520px] w-full rounded-2xl object-cover shadow-sm"
            />
          )}

          <div className="prose prose-lg prose-neutral max-w-none prose-headings:font-bold prose-h2:mt-10 prose-h2:text-3xl prose-h3:text-2xl prose-p:leading-8 prose-p:text-gray-700 prose-li:text-gray-700">
            <MDXRemote {...source} components={components} />
          </div>

          <div className="mt-12 rounded-2xl bg-gray-100 p-6">
            <p className="mb-4 text-lg font-semibold text-gray-900">
              Imaš sličan problem sa bojlerom, klimom ili elektro instalacijom?
            </p>

            <a
              href="tel:0600500063"
              className="inline-block rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-300"
            >
              Pozovi – 060 0 5000 63
            </a>
          </div>
        </article>

        <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white p-3 shadow-lg sm:hidden">
          <a
            href="tel:0600500063"
            className="block w-full rounded-xl bg-yellow-400 py-3 text-center font-bold text-black"
          >
            Pozovi odmah – 060 0 5000 63
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const filenames = fs
    .readdirSync(postsDirectory)
    .filter((name) => name.endsWith(".mdx"));

  const paths = filenames.map((filename) => ({
    params: {
      slug: filename.replace(/\.mdx$/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostProps> = async (context) => {
  const slug = context.params?.slug;

  if (!slug || Array.isArray(slug)) {
    return { notFound: true };
  }

  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return { notFound: true };
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data: frontMatter, content } = matter(fileContents);

  const mdxSource = await serialize(content, {
    scope: frontMatter,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: frontMatter as FrontMatter,
    },
  };
};