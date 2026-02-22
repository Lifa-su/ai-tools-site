import Link from "next/link";
import { CATEGORIES } from "@/lib/types";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">⚡ AI Tools Hub</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Find the best AI tools for every task. Honest reviews, no fluff.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Categories</h4>
          <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
            {CATEGORIES.slice(0, 5).map((cat) => (
              <li key={cat.slug}>
                <Link href={`/categories/${cat.slug}`} className="hover:text-indigo-600">{cat.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
            <li><Link href="/blog" className="hover:text-indigo-600">Blog</Link></li>
            <li><Link href="/tools" className="hover:text-indigo-600">All Tools</Link></li>
            <li><Link href="/submit" className="hover:text-indigo-600">Submit a Tool</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
            <li><Link href="/privacy" className="hover:text-indigo-600">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-indigo-600">Terms of Service</Link></li>
            <li><Link href="/about" className="hover:text-indigo-600">About</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--color-border)] py-6 text-center text-sm text-[var(--color-text-secondary)]">
        © {new Date().getFullYear()} AI Tools Hub. All rights reserved.
      </div>
    </footer>
  );
}
