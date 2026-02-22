import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "AI Tools Hub privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: February 2026</p>
      <div className="prose prose-lg max-w-none dark:prose-invert space-y-6">
        <h2 className="text-xl font-bold mt-6 mb-3">Information We Collect</h2>
        <p>We collect minimal data to operate this site. This includes standard web analytics (page views, referral sources) through privacy-friendly analytics tools. We do not collect personal information unless you voluntarily submit it through our contact or submission forms.</p>

        <h2 className="text-xl font-bold mt-6 mb-3">Cookies</h2>
        <p>We use essential cookies for site functionality and analytics cookies to understand how visitors use our site. You can disable cookies in your browser settings.</p>

        <h2 className="text-xl font-bold mt-6 mb-3">Affiliate Links</h2>
        <p>Some links on this site are affiliate links. When you click these links and make a purchase, we may earn a commission. The affiliate programs may use cookies to track referrals. This does not affect the price you pay.</p>

        <h2 className="text-xl font-bold mt-6 mb-3">Third-Party Services</h2>
        <p>We use Vercel for hosting and analytics. Their privacy policies apply to data they process on our behalf.</p>

        <h2 className="text-xl font-bold mt-6 mb-3">Contact</h2>
        <p>If you have questions about this privacy policy, please reach out through our submission form.</p>
      </div>
    </div>
  );
}
