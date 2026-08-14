// src/components/Carousel.tsx
"use client";

import { useState, useEffect } from "react";

interface Quote {
  quote: string;
  name: string;
  title: string;
  publication: string;
  date: string;
  url: string;
}

export default function Carousel({ testimonies }: { testimonies: Quote[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setCurrentIndex(Math.floor(Math.random() * testimonies.length))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonies.length);
        setIsVisible(true);
      }, 500);
    }, 7000);

    return () => clearInterval(interval);
  }, [testimonies.length]);

  const current = testimonies[currentIndex];

  return (
    <div className="relative min-h-72 sm:min-h-44 sm:max-w-xl md:max-w-3xl mx-auto">
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-500"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <p className="text-edgi-ink text-lg leading-relaxed mb-2">
          "{current.quote}"
        </p>
        <a
          href={current.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-block"
        >
          <p className="text-edgi-ink font-semibold group-hover:text-edgi-green transition-colors">
            - {current.name}
            {": "}
            <span style={{ color: "#747270", fontWeight: 400 }}>
              {current.title}
            </span>
          </p>
          <p className="text-edgi-gray text-sm">
            {current.publication} · {current.date}
          </p>
        </a>
      </div>
    </div>
  );
}
