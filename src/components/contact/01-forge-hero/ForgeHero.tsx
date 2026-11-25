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
  const { language } = useLanguage();

  const headlineWords =
    language === "hi"
      ? ["हर", "काम", "की", "शुरुआत", "एक", "बातचीत", "से", "होती", "है"]
      : language === "mr"
        ? ["प्रत्येक", "कामाची", "सुरुवात", "एका", "संवादातून", "होते"]
        : ["Every", "deployment", "starts", "with", "a", "conversation"];

  const accentWords = new Set(["conversation", "बातचीत", "संवादातून"]);

  return (
    <section className="relative min-h-[70vh] lg:h-[85vh] lg:min-h-[640px] max-h-[820px] flex flex-col justify-center bg-[#0D0E10] text-white overflow-hidden select-none pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-10 lg:px-20 border-b border-white/10">
      {/* High-Resolution Engineering Background Image - Crisp, Sharp & Clearly Visible */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/images/services/generator_engine_bg.jpg"
          alt="Sarvadnya Industrial Power Generator Engine"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter contrast-[1.05] saturate-[1.05]"
        />
      </div>

      {/* Main Foreground Editorial Content - Vertically Centered, Left-Aligned */}
      <div className="relative z-10 max-w-5xl lg:max-w-6xl w-full flex flex-col items-start text-left my-auto">
        {/* Display Title with Word-by-Word Masked Reveal Animation */}
        <h1
          data-no-translate="true"
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[84px] font-normal tracking-tight text-white leading-[1.22] sm:leading-[1.18] flex flex-wrap items-start text-left gap-x-2.5 sm:gap-x-4 gap-y-1.5 sm:gap-y-2 drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] max-w-full"
        >
          {headlineWords.map((word, index) => (
            <span
              key={`${language}-${index}`}
              className={cn(
                "inline-block",
                language === "en"
                  ? "overflow-hidden pt-1 pb-0.5"
                  : "pt-2 sm:pt-2.5 pb-1 overflow-visible",
                accentWords.has(word) && "mr-3 sm:mr-4.5 pr-1.5"
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
                  "inline-block leading-tight",
                  accentWords.has(word)
                    ? "text-[#FF5500] italic font-serif drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]"
                    : "text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]"
                )}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}
