import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit a Tool",
  description: "Submit your AI tool to be reviewed and listed on AI Tools Hub.",
};

export default function SubmitPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Submit a Tool</h1>
      <p className="text-[var(--color-text-secondary)] mb-8">
        Know an AI tool that should be on our list? Let us know and we&apos;ll review it.
      </p>
      <form className="space-y-6" action="https://formspree.io/f/placeholder" method="POST">
        <div>
          <label htmlFor="toolName" className="block text-sm font-medium mb-2">Tool Name</label>
          <input
            type="text"
            id="toolName"
            name="toolName"
            required
            className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="e.g. ChatGPT"
          />
        </div>
        <div>
          <label htmlFor="website" className="block text-sm font-medium mb-2">Website URL</label>
          <input
            type="url"
            id="website"
            name="website"
            required
            className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="https://..."
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium mb-2">Category</label>
          <select
            id="category"
            name="category"
            className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="writing">AI Writing</option>
            <option value="image">AI Image</option>
            <option value="video">AI Video</option>
            <option value="coding">AI Coding</option>
            <option value="chatbots">AI Chat</option>
            <option value="audio">AI Audio</option>
            <option value="productivity">AI Productivity</option>
            <option value="marketing">AI Marketing</option>
            <option value="design">AI Design</option>
            <option value="research">AI Research</option>
          </select>
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-2">Why should we review it?</label>
          <textarea
            id="description"
            name="description"
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Tell us what makes this tool special..."
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-colors"
        >
          Submit for Review
        </button>
      </form>
    </div>
  );
}
