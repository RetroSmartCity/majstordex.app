import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { remark } from 'remark';
import html from 'remark-html';

type BlogPost = {
  title: string;
  slug: string;
  content: string;
  contentHtml: string;
};

type PostPageProps = {
  post: BlogPost;
};

export default function Post({ post }: PostPageProps) {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post: { slug: string }) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async (
  context: GetStaticPropsContext
) => {
  const { params } = context;

  if (!params || typeof params.slug !== 'string') {
    return { notFound: true };
  }

  const post = getPostBySlug(params.slug);

  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      post: {
        ...post,
        contentHtml,
      },
    },
  };
};
