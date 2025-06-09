import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { remark } from 'remark';
import html from 'remark-html';

export default function Post({ post }: any) {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </div>
  );
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map((post: any) => ({ params: { slug: post.slug } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
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
}
