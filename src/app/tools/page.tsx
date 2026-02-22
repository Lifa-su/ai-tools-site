import type { Metadata } from "next";
import { getTools } from "@/lib/mdx";
import { ToolsPageClient } from "./ToolsPageClient";

export const metadata: Metadata = {
  title: "All AI Tools — Browse & Compare",
  description:
    "Browse our complete directory of AI tools. Filter by category, compare features, and find the perfect tool for your needs.",
};

export default function ToolsPage() {
  const tools = getTools();
  return <ToolsPageClient tools={tools} />;
}
