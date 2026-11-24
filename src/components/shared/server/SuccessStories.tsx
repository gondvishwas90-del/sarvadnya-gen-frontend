"use client";

import React from "react";
import { SuccessStoriesClient, FloatingGlow } from "../client";
import { useLanguage } from "@/lib/LanguageContext";

/**
 * SuccessStories Component
 * 
 * High-fidelity section with testimonials, images, and stats in bright theme.
 */
export function SuccessStories() {
  const { t } = useLanguage();

  return (
    <section className="w-full py-16 sm:py-20 lg:py-28 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto">
          <h2 className="text-[#111315] font-['Poppins',sans-serif] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-3">
            {t("services.stories.title", "Powering Maharashtra’s Flagship Operations")}
          </h2>

          <p className="text-[#524E48] font-['Outfit',sans-serif] text-sm sm:text-base md:text-lg leading-relaxed">
            {t("services.stories.subtitle", "How leading industries, healthcare networks, and flagship events maintain 100% operational continuity with Sarvadnya.")}
          </p>
        </div>

        {/* Client-Side Animated Content */}
        <SuccessStoriesClient />
      </div>
    </section>
  );
}
