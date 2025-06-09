import { GetStaticProps } from 'next';
import { getAllPosts } from '@/lib/blog';

type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
};

type BlogListProps = {
  posts: BlogPost[];
};

export default function Blog({ posts }: BlogListProps) {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      {posts.map((post) => (
        <div key={post.slug} className="mb-6">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p>{post.excerpt}</p>
          <a href={`/blog/${post.slug}`} className="text-blue-600">
            Pročitaj više →
          </a>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps<BlogListProps> = async () => {
  const posts = getAllPosts();
  return {
    props: { posts },
  };
};
