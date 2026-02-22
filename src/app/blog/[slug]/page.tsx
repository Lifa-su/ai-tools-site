import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getAllBlogSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { SchemaMarkup } from "@/components/SchemaMarkup";

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { "@type": "Organization", name: "AI Tools Hub" },
  };

  return (
    <>
      <SchemaMarkup data={schema} />
      <article className="max-w-3xl mx-auto px-4 py-16">
        <nav className="text-sm text-[var(--color-text-secondary)] mb-8">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          {" / "}
          <Link href="/blog" className="hover:text-indigo-600">Blog</Link>
          {" / "}
          <span>{post.title}</span>
        </nav>
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="text-[var(--color-text-secondary)] text-sm">
            {post.publishedAt} · {post.author}
          </div>
        </header>
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </>
  );
}
