// src/app/page.tsx

import Hero from "@/components/landing/Hero";
import SegmentsSection from "@/components/landing/SegmentsSection";
import AuditDataSection from "@/components/landing/AuditDataSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import VisibilitySection from "@/components/landing/CTASection";

export default function Home() {
  return (
    <main>
      <Hero />
      <SegmentsSection />
      <AuditDataSection />
      <TestimonialsSection />
      <VisibilitySection />
    </main>
  );
}
