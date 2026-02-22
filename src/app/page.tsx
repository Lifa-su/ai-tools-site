import Link from "next/link";
import { getTools, getBlogPosts } from "@/lib/mdx";
import { CATEGORIES } from "@/lib/types";
import { ToolCard } from "@/components/ToolCard";
import { CategoryNav } from "@/components/CategoryNav";
import { SearchBar } from "@/components/SearchBar";
import { SchemaMarkup } from "@/components/SchemaMarkup";

export default function HomePage() {
  const tools = getTools().slice(0, 6);
  const posts = getBlogPosts().slice(0, 3);

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AI Tools Hub",
    url: "https://aitoolshub.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://aitoolshub.com/tools?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <SchemaMarkup data={websiteSchema} />

      {/* Hero */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-indigo-50 to-white dark:from-slate-900 dark:to-slate-800">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Find the <span className="text-indigo-600">Best AI Tools</span> for
          Every Task
        </h1>
        <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-8">
          Honest reviews, real comparisons, and practical tutorials. No fluff.
        </p>
        <SearchBar />
      </section>

      {/* Categories */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
        <CategoryNav categories={CATEGORIES} />
      </section>

      {/* Top Tools */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Top Rated Tools</h2>
          <Link
            href="/tools"
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            View all →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Latest Articles</h2>
          <Link
            href="/blog"
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Read more →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border border-[var(--color-border)] rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <span className="text-sm text-[var(--color-text-secondary)]">
                {post.publishedAt}
              </span>
              <h3 className="text-lg font-semibold mt-2 mb-3">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-indigo-600"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm">
                {post.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
