import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "AI Tools Hub — Find the Best AI Tools for Every Task",
    template: "%s | AI Tools Hub",
  },
  description:
    "Discover, compare, and choose the best AI tools. Honest reviews, tutorials, and guides to help you work smarter with AI.",
  keywords: ["ai tools", "ai tools directory", "best ai tools", "ai reviews"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AI Tools Hub",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
