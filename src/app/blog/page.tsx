import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog — AI Tools Tutorials, Guides & Comparisons",
  description: "Learn how to use AI tools effectively. Tutorials, comparisons, and industry insights.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <p className="text-[var(--color-text-secondary)] mb-10">
        Tutorials, comparisons, and guides to help you get the most out of AI tools.
      </p>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-[var(--color-border)] pb-8">
            <span className="text-sm text-[var(--color-text-secondary)]">{post.publishedAt} · {post.category}</span>
            <h2 className="text-xl font-semibold mt-2 mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:text-indigo-600">{post.title}</Link>
            </h2>
            <p className="text-[var(--color-text-secondary)]">{post.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
