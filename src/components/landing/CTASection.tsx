// src/components/CTASection.tsx

import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="bg-edgi-paper py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-8 w-60 sm:w-auto">
        <Link
          href="/tools"
          className="bg-edgi-green text-edgi-ink font-medium px-8 py-4 rounded-full text-sm hover:bg-edgi-teal transition-colors text-center w-full sm:w-auto"
        >
          Explore the Tools
        </Link>
        <a
          href="https://forms.gle/LwjQZ7YwL6MshKV68"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-edgi-ink text-edgi-ink font-medium px-8 py-4 rounded-full text-sm hover:border-edgi-teal hover:text-edgi-teal transition-colors text-center w-full sm:w-auto"
        >
          Report a Tool You Use ↗
        </a>
      </div>
    </section>
  );
}
