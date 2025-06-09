import { getAllPosts } from '@/lib/blog';

export default function Blog({ posts }: any) {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      {posts.map((post: any) => (
        <div key={post.slug} className="mb-6">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p>{post.excerpt}</p>
          <a href={`/blog/${post.slug}`} className="text-blue-600">Pročitaj više →</a>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
}
