// pages/blog/[slug].tsx

import { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import BlogImage from '@/components/BlogImage';
import Head from 'next/head';

const postsDirectory = path.join(process.cwd(), 'posts');

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
  const title = frontMatter.title || 'Naslov nije dostupan';
  const excerpt =
    frontMatter.excerpt ||
    'MajstorDex blog post o elektro uslugama u Beogradu. Saznajte više o servisima i stručnim savetima.';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={excerpt} />
        <meta name="robots" content="index, follow" />

        {/* Social meta */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-12">
        {/* Optional breadcrumb */}
        {/* <div className="text-sm text-gray-500 mb-4">
          <a href="/blog" className="hover:underline">← Nazad na blog</a>
        </div> */}

        <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-white mb-6">
          {title}
        </h1>

        {excerpt && (
          <p className="text-lg sm:text-xl text-center text-gray-700 dark:text-gray-300 mb-10">
            {excerpt}
          </p>
        )}

        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <MDXRemote {...source} components={components} />
        </article>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const filenames = fs.readdirSync(postsDirectory).filter((name) => name.endsWith('.mdx'));

  const paths = filenames.map((filename) => ({
    params: {
      slug: filename.replace(/\.mdx$/, ''),
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
    return {
      notFound: true,
    };
  }

  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    return {
      notFound: true,
    };
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
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
