import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Tool, BlogPost } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "src/content");

export function getTools(): Tool[] {
  const dir = path.join(CONTENT_DIR, "tools");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const raw = fs.readFileSync(path.join(dir, filename), "utf-8");
      const { data, content } = matter(raw);
      return { ...data, content } as Tool;
    })
    .sort((a, b) => b.rating - a.rating);
}

export function getToolBySlug(slug: string): Tool | undefined {
  const tools = getTools();
  return tools.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: string): Tool[] {
  return getTools().filter((t) => t.category === category);
}

export function getBlogPosts(): BlogPost[] {
  const dir = path.join(CONTENT_DIR, "blog");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const raw = fs.readFileSync(path.join(dir, filename), "utf-8");
      const { data, content } = matter(raw);
      return { ...data, content } as BlogPost;
    })
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getBlogPosts().find((p) => p.slug === slug);
}

export function getAllToolSlugs(): string[] {
  return getTools().map((t) => t.slug);
}

export function getAllBlogSlugs(): string[] {
  return getBlogPosts().map((p) => p.slug);
}
