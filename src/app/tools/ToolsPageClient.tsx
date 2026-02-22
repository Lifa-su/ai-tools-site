"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import type { Tool } from "@/lib/types";
import { CATEGORIES } from "@/lib/types";
import { ToolCard } from "@/components/ToolCard";

function ToolsFilter({ tools }: { tools: Tool[] }) {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const q = searchParams.get("q") || "";
    if (q) setQuery(q);
  }, [searchParams]);

  const filtered = tools.filter((tool) => {
    const matchesQuery =
      !query ||
      tool.name.toLowerCase().includes(query.toLowerCase()) ||
      tool.description.toLowerCase().includes(query.toLowerCase()) ||
      tool.category.toLowerCase().includes(query.toLowerCase());
    const matchesCategory =
      !selectedCategory || tool.category === selectedCategory;
    return matchesQuery && matchesCategory;
  });

  return (
    <>
      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search AI tools..."
            className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            aria-label="Search AI tools"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          aria-label="Filter by category"
        >
          <option value="">All Categories</option>
          {CATEGORIES.map((cat) => (
            <option key={cat.slug} value={cat.slug}>
              {cat.icon} {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Results count */}
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        {filtered.length} {filtered.length === 1 ? "tool" : "tools"} found
        {query && <> for &ldquo;{query}&rdquo;</>}
        {selectedCategory && (
          <> in {CATEGORIES.find((c) => c.slug === selectedCategory)?.name}</>
        )}
      </p>

      {/* Results */}
      {filtered.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl mb-2">No tools found</p>
          <p className="text-[var(--color-text-secondary)]">
            Try a different search term or category.
          </p>
        </div>
      )}
    </>
  );
}

export function ToolsPageClient({ tools }: { tools: Tool[] }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">All AI Tools</h1>
      <p className="text-[var(--color-text-secondary)] mb-8">
        {tools.length} tools reviewed and rated
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <ToolsFilter tools={tools} />
      </Suspense>
    </div>
  );
}
