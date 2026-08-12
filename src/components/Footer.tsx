// src/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-edgi-ink py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-edgi-gray text-sm">
          © {new Date().getFullYear()} Environmental Data & Governance
          Initiative
        </p>
        <a
          href="mailto:restore.local.climate@envirodatagov.org"
          className="text-edgi-gray text-sm hover:text-edgi-teal transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </footer>
  );
}
