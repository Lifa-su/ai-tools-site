import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About AI Tools Hub",
  description: "Learn about AI Tools Hub — our mission, how we review tools, and the team behind the site.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">About AI Tools Hub</h1>
      <div className="prose prose-lg max-w-none dark:prose-invert space-y-6">
        <p>
          AI Tools Hub is an independent directory and review site dedicated to helping people find the right AI tools for their needs. We test, compare, and review AI products so you don&apos;t have to wade through marketing hype.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
        <p>
          The AI tool landscape is exploding — thousands of new products launch every month. Our mission is to cut through the noise with honest, hands-on reviews and practical guides that help you make informed decisions.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">How We Review</h2>
        <p>
          Every tool on our site is tested by our team. We evaluate based on output quality, ease of use, pricing value, feature set, and reliability. Our ratings reflect real-world usage, not press releases.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Editorial Independence</h2>
        <p>
          Some links on this site are affiliate links, meaning we may earn a commission if you sign up through them. This never influences our ratings or recommendations. We recommend tools we genuinely believe in.
        </p>
      </div>
    </div>
  );
}
