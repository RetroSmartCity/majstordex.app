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
  return (
    <>
      <Head>
        <title>{frontMatter.title ?? 'Blog post'}</title>
        <meta
          name="description"
          content={frontMatter.excerpt ?? 'MajstorDex blog post o elektro uslugama u Beogradu'}
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white">
          {frontMatter.title ?? 'Naslov nije dostupan'}
        </h1>

        {frontMatter.excerpt && (
          <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-8">
            {frontMatter.excerpt}
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

  const fileContents = fs.readFileSync(fullPath, 'utf-8');

  const { data: frontMatter, content } = matter(fileContents);

  if (!frontMatter.title) {
    frontMatter.title = 'Naslov nije dostupan';
  }

  const mdxSource = await serialize(content, { scope: frontMatter });

  return {
    props: {
      source: mdxSource,
      frontMatter: frontMatter as FrontMatter,
    },
  };
};
