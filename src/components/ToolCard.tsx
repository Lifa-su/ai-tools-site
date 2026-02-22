import Link from "next/link";
import type { Tool } from "@/lib/types";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="border border-[var(--color-border)] rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold">
          <Link href={`/tools/${tool.slug}`} className="hover:text-indigo-600">
            {tool.name}
          </Link>
        </h3>
        <span className="text-yellow-500 text-sm font-bold whitespace-nowrap">
          ★ {tool.rating}
        </span>
      </div>
      <p className="text-sm text-[var(--color-text-secondary)] mb-4 line-clamp-2">
        {tool.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
          {tool.category}
        </span>
        <span className="text-xs text-[var(--color-text-secondary)]">
          {tool.pricing}
        </span>
      </div>
    </div>
  );
}
