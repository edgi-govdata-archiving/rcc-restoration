// src/components/TestimonialsSection.tsx

import Carousel from "@/components/Carousel"

import quotes from "../../data/quotes.json"

export default function AuditDataSection() {
  return (
    <div className="bg-edgi-paper-dark py-16 px-56">
      <Carousel testimonies={quotes} />
    </div>
  );
}
