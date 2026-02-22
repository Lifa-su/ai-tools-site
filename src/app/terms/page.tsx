import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "AI Tools Hub terms of service — rules and guidelines for using our site.",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: February 2026</p>
      <div className="prose prose-lg max-w-none dark:prose-invert space-y-6">
        <h2 className="text-xl font-bold mt-6 mb-3">Use of This Site</h2>
        <p>AI Tools Hub provides information and reviews about AI tools for educational and informational purposes. The content on this site represents our opinions based on testing and research.</p>

        <h2 className="text-xl font-bold mt-6 mb-3">Accuracy</h2>
        <p>We strive to keep our reviews and information accurate and up-to-date. However, AI tools change rapidly — pricing, features, and availability may differ from what is listed. Always verify details on the official tool website before making a purchase.</p>

        <h2 className="text-xl font-bold mt-6 mb-3">Affiliate Disclosure</h2>
        <p>This site contains affiliate links. We may earn a commission when you purchase through these links at no additional cost to you. Affiliate relationships do not influence our editorial content or ratings.</p>

        <h2 className="text-xl font-bold mt-6 mb-3">User Submissions</h2>
        <p>By submitting a tool for review, you grant us permission to evaluate and publish our findings. We are not obligated to review or list every submitted tool.</p>

        <h2 className="text-xl font-bold mt-6 mb-3">Limitation of Liability</h2>
        <p>AI Tools Hub is not responsible for any decisions made based on our reviews. Use the information provided at your own discretion.</p>
      </div>
    </div>
  );
}
