import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getToolBySlug, getAllToolSlugs, getToolsByCategory } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { ToolCard } from "@/components/ToolCard";

export function generateStaticParams() {
  return getAllToolSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};
  return {
    title: `${tool.name} Review 2025 — Pricing, Pros & Cons`,
    description: tool.description,
    keywords: [tool.name, `${tool.name} review`, `${tool.name} pricing`],
  };
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const related = getToolsByCategory(tool.category)
    .filter((t) => t.slug !== tool.slug)
    .slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    applicationCategory: "AI Tool",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: tool.rating,
      bestRating: 5,
      worstRating: 1,
      ratingCount: 1,
    },
  };

  return (
    <>
      <SchemaMarkup data={schema} />
      <article className="max-w-4xl mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="text-sm text-[var(--color-text-secondary)] mb-8">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          {" / "}
          <Link href="/tools" className="hover:text-indigo-600">Tools</Link>
          {" / "}
          <span>{tool.name}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-4">{tool.name}</h1>
          <p className="text-xl text-[var(--color-text-secondary)] mb-4">
            {tool.description}
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
              {tool.category}
            </span>
            <span className="text-yellow-500 font-bold">
              {"★".repeat(Math.round(tool.rating))} {tool.rating}/5
            </span>
            <span className="text-sm text-[var(--color-text-secondary)]">
              {tool.pricing}
            </span>
          </div>
        </header>

        {/* Pros & Cons */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
            <h3 className="font-bold text-green-700 dark:text-green-400 mb-3">✅ Pros</h3>
            <ul className="space-y-2">
              {tool.pros.map((pro) => (
                <li key={pro} className="text-sm">{pro}</li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6">
            <h3 className="font-bold text-red-700 dark:text-red-400 mb-3">❌ Cons</h3>
            <ul className="space-y-2">
              {tool.cons.map((con) => (
                <li key={con} className="text-sm">{con}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[var(--color-bg-secondary)] rounded-xl p-6 mb-10 text-center">
          <a
            href={tool.affiliate || tool.website}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            Try {tool.name} →
          </a>
        </div>

        {/* MDX Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <MDXRemote source={tool.content} />
        </div>

        {/* Related Tools */}
        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Similar Tools</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((t) => (
                <ToolCard key={t.slug} tool={t} />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
