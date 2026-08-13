// src/components/Footer.tsx

import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-edgi-ink py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-edgi-gray text-sm">
          © {new Date().getFullYear()} Environmental Data & Governance
          Initiative
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://envirodatagov.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-edgi-gray text-sm hover:text-edgi-teal transition-colors"
          >
            envirodatagov.org
          </a>
          <a
            href="mailto:restore.local.climate@envirodatagov.org"
            className="text-edgi-gray text-sm hover:text-edgi-teal transition-colors"
          >
            <div className="flex flex-row items-center gap-1">
              <Mail className="w-3 h-4" />
              <span>Get in Touch</span>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
