// src/components/TestimonialsSection.tsx

import Carousel from "@/components/landing/Carousel"

import quotes from "../../../data/quotes.json"

export default function AuditDataSection() {
  return (
    <section className="bg-edgi-paper-dark py-16 px-56">
      <Carousel testimonies={quotes} />
    </section>
  );
}
