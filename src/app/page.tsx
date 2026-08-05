// src/app/page.tsx

import Hero from "@/components/landing/Hero";
import SegmentsSection from "@/components/SegmentsSection";
import AuditDataSection from "@/components/AuditDataSection";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <SegmentsSection />
      <AuditDataSection />
    </main>
  );
}
