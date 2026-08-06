// src/app/page.tsx

import Hero from "@/components/landing/Hero";
import SegmentsSection from "@/components/SegmentsSection";
import AuditDataSection from "@/components/AuditDataSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VisibilitySection from "@/components/VisibilitySection";

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
