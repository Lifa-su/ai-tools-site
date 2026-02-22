export interface Tool {
  name: string;
  slug: string;
  description: string;
  category: string;
  rating: number;
  pricing: string;
  website: string;
  affiliate?: string;
  logo?: string;
  pros: string[];
  cons: string[];
  publishedAt: string;
  updatedAt: string;
  content: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  description: string;
  category: string;
  keywords: string[];
  publishedAt: string;
  updatedAt: string;
  author: string;
  image?: string;
  content: string;
}

export const CATEGORIES = [
  { name: "AI Writing", slug: "writing", icon: "✍️" },
  { name: "AI Image", slug: "image", icon: "🎨" },
  { name: "AI Video", slug: "video", icon: "🎬" },
  { name: "AI Coding", slug: "coding", icon: "💻" },
  { name: "AI Chat", slug: "chatbots", icon: "💬" },
  { name: "AI Audio", slug: "audio", icon: "🎵" },
  { name: "AI Productivity", slug: "productivity", icon: "⚡" },
  { name: "AI Marketing", slug: "marketing", icon: "📈" },
  { name: "AI Design", slug: "design", icon: "🎯" },
  { name: "AI Research", slug: "research", icon: "🔬" },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];
