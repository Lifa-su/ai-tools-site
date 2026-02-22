import type { Metadata } from "next";
import Link from "next/link";
import { getToolsByCategory } from "@/lib/mdx";
import { CATEGORIES } from "@/lib/types";
import { ToolCard } from "@/components/ToolCard";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const cat = CATEGORIES.find((c) => c.slug === category);
  return {
    title: `Best ${cat?.name || "AI"} Tools 2025`,
    description: `Discover the best ${cat?.name?.toLowerCase() || "AI"} tools. Compare features, pricing, and read honest reviews.`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = CATEGORIES.find((c) => c.slug === category);
  const tools = getToolsByCategory(category);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <nav className="text-sm text-[var(--color-text-secondary)] mb-8">
        <Link href="/" className="hover:text-indigo-600">Home</Link>
        {" / "}
        <span>{cat?.name || category}</span>
      </nav>
      <h1 className="text-3xl font-bold mb-4">
        {cat?.icon} Best {cat?.name || "AI"} Tools
      </h1>
      <p className="text-[var(--color-text-secondary)] mb-8">
        {tools.length} tools in this category
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </div>
  );
}
