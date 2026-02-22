import Link from "next/link";

interface Category {
  readonly name: string;
  readonly slug: string;
  readonly icon: string;
}

export function CategoryNav({ categories }: { categories: readonly Category[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/categories/${cat.slug}`}
          className="flex flex-col items-center gap-2 p-4 rounded-xl border border-[var(--color-border)] hover:border-indigo-300 hover:shadow-md transition-all text-center"
        >
          <span className="text-3xl">{cat.icon}</span>
          <span className="text-sm font-medium">{cat.name}</span>
        </Link>
      ))}
    </div>
  );
}
