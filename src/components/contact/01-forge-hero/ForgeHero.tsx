"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

/**
 * ForgeHero Component (Bright Luxury Theme)
 *
 * Architectural bright luxury contact hero with word-by-word masked reveal
 * and localized headline words for English, Hindi, and Marathi.
 */
export function ForgeHero() {
  const { language, t } = useLanguage();

  const headlineWords =
    language === "hi"
      ? ["हर", "काम", "की", "शुरुआत", "एक", "बातचीत", "से", "होती", "है"]
      : language === "mr"
        ? ["प्रत्येक", "तैनाती", "एका", "संवादातून", "सुरू", "होते"]
        : ["Every", "deployment", "starts", "with", "a", "conversation"];

  const accentWords = new Set(["conversation", "बातचीत", "संवादातून"]);

  return (
    <section className="relative min-h-[45vh] sm:min-h-[82vh] flex flex-col justify-end bg-[#FAF8F5] text-[#111315] overflow-hidden select-none pb-10 sm:pb-20 px-4 sm:px-10 lg:px-20 pt-28 sm:pt-36 border-b border-[#E8E2D9]">
      {/* High-Resolution Engineering Background Image - Crisp, Sharp & Clearly Visible */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/images/services/generator_engine_bg.jpg"
          alt="Sarvadnya Industrial Power Generator Engine"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter contrast-[1.05] saturate-[1.05] opacity-65"
        />
        {/* Crisp Directional Gradient Wash for Flawless Text Readability without Blurriness */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/85 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Main Foreground Editorial Content */}
      <div className="relative z-10 max-w-6xl w-full">
        {/* Display Title with Word-by-Word Masked Reveal Animation */}
        <h1
          data-no-translate="true"
          className="font-serif text-2xl sm:text-6xl md:text-7xl lg:text-[84px] font-normal tracking-tight text-[#111315] leading-[1.35] sm:leading-[1.32] mb-3 sm:mb-6 flex flex-wrap gap-x-2 sm:gap-x-5 gap-y-2 sm:gap-y-4"
        >
          {headlineWords.map((word, index) => (
            <span
              key={`${language}-${index}`}
              className={cn(
                "inline-block",
                language === "en"
                  ? "overflow-hidden pt-2 pb-1"
                  : "pt-2 pb-1 overflow-visible"
              )}
            >
              <motion.span
                initial={{ y: language === "en" ? "115%" : 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.85,
                  delay: 0.1 + index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={cn(
                  "inline-block leading-normal",
                  accentWords.has(word)
                    ? "text-[#FF5500] italic font-serif"
                    : "text-[#111315]"
                )}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Editorial Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-sans text-xs sm:text-base text-[#403C36] max-w-xl leading-relaxed mb-2 sm:mb-4"
        >
          {t(
            "contact.hero.subtitle",
            "Connect with Nashik's senior power engineers for 60-minute site dispatch, wedding silent DG sets, and turnkey industrial operations."
          )}
        </motion.p>
      </div>
    </section>
  );
}
