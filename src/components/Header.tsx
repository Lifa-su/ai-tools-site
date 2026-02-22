"use client";

import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-[var(--color-border)] sticky top-0 bg-[var(--color-bg)]/80 backdrop-blur-md z-50">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-indigo-600">
          ⚡ AI Tools Hub
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/tools" className="hover:text-indigo-600 transition-colors">Tools</Link>
          <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
          <Link href="/about" className="hover:text-indigo-600 transition-colors">About</Link>
          <Link href="/submit" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            Submit Tool
          </Link>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 bg-current transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)]">
          <div className="flex flex-col px-4 py-4 gap-4 text-sm font-medium">
            <Link href="/tools" className="hover:text-indigo-600 transition-colors py-2" onClick={() => setMenuOpen(false)}>Tools</Link>
            <Link href="/blog" className="hover:text-indigo-600 transition-colors py-2" onClick={() => setMenuOpen(false)}>Blog</Link>
            <Link href="/about" className="hover:text-indigo-600 transition-colors py-2" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/submit" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-center" onClick={() => setMenuOpen(false)}>
              Submit Tool
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
