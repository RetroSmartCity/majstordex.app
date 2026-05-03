import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import BlogImage from "@/components/BlogImage";

const postsDirectory = path.join(process.cwd(), "posts");

type FrontMatter = {
  title: string;
  excerpt?: string;
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
    frontMatter.excerpt ||
    "Stručni saveti i rešavanje kvarova – MajstorDex.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={excerpt} />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-12">
        {/* HEADER – NORMALAN, LEVO */}
        <main className="max-w-3xl mx-auto px-4 pt-20 pb-12">
  <header className="mb-12">
    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
      {title}
    </h1>

    {excerpt && (
      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
        {excerpt}
      </p>
    )}
  </header>

  <article className="prose prose-neutral dark:prose-invert max-w-none">
    <MDXRemote {...source} components={components} />
  </article>
</main>

        {/* ARTICLE */}
        <article className="prose prose-neutral dark:prose-invert max-w-none prose-headings:mt-8 prose-headings:mb-3 prose-p:mb-4 prose-ul:mb-5 prose-li:mb-1">
          <MDXRemote {...source} components={components} />
        </article>

        {/* CTA – diskretan */}
        <div className="mt-12 p-5 rounded-lg bg-gray-100 dark:bg-gray-800">
          <p className="mb-3 font-medium">
            Sumnjaš da uređaj ne radi kako treba?
          </p>

          <a
            href="tel:0600500063"
            className="inline-block bg-yellow-400 text-black font-semibold px-5 py-2 rounded hover:bg-yellow-300 transition"
          >
            Pozovi – 060 0 5000 63
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