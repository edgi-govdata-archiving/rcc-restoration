// src/components/CTASection.tsx

import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="bg-edgi-paper py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-8">
        <Link
          href="/tools"
          className="bg-edgi-green text-edgi-ink font-medium px-8 py-4 rounded-full text-sm hover:bg-edgi-teal transition-colors"
        >
          Explore the Tools
        </Link>
        <a
          href="https://forms.gle/LwjQZ7YwL6MshKV68"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-edgi-green text-edgi-ink font-medium px-8 py-4 rounded-full text-sm hover:bg-edgi-teal transition-colors"
        >
          Report a Tool You Use ↗
        </a>
      </div>
    </section>
  );
}
