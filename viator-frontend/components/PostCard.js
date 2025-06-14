import Link from 'next/link';

export default function PostCard({ post }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold">
        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
      </h2>
      <p>{post.excerpt}</p>
    </div>
  );
}
