"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export const GENERATOR_HERO_FILTER_EVENT = "generator-hero-filter";

export interface GeneratorHeroFilterDetail {
  kvaRange?: string;
  industry?: string;
  duration?: string;
  city?: string;
  reset?: boolean;
}

/**
 * GeneratorHero Component — Concept 1: The Expanding Architectural Portal
 *
 * Awwwards-Level Architectural Hero:
 * - Single Crystal-Clear 2.7K Image (Uncompressed, raw clarity, zero blur)
 * - Opens on load through an elegant centered architectural rounded stadium/pill shape
 *   that smoothly expands outward with luxury spring physics into full viewport bleed
 * - Masked kinetic line typography reveals with signature #FF5500 accents
 * - Floating 4-pillar architectural metrics horizon ribbon (Archevo style)
 * - 75–80% Viewport height allowing the generator catalog (#gallery) to peek cleanly below
 */
export function GeneratorHero() {
  const router = useRouter();
  const { t } = useLanguage();

  // Smooth scroll to gallery
  const scrollToGallery = () => {
    const galleryEl = document.getElementById("gallery");
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    router.push("/generators#gallery");
  };

  return (
    <section className="relative w-full min-h-[70vh] lg:h-[85vh] lg:min-h-[640px] max-h-[820px] flex flex-col justify-center bg-[#0D0E10] pt-24 sm:pt-28 pb-10 sm:pb-16 overflow-hidden select-none border-b border-white/10">
      
      {/* 
        ========================================================================
        1. THE EXPANDING ARCHITECTURAL PORTAL STAGE
        - Starts framed inside an architectural rounded stadium/pill mask
        - Smoothly blossoms open into full-bleed canvas with luxury easing
        - 2752x1536 2.7K raw uncompressed crystal-clear generator photo
        ========================================================================
      */}
      <motion.div
        initial={{
          clipPath: "inset(10% 12% 10% 12% round 48px)",
          scale: 0.94,
        }}
        animate={{
          clipPath: "inset(0% 0% 0% 0% round 0px)",
          scale: 1.0,
        }}
        transition={{
          duration: 1.45,
          delay: 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <motion.div
          initial={{ scale: 1.14 }}
          animate={{ scale: 1.0 }}
          transition={{
            duration: 1.85,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/generators/fleet_hero_industrial.jpg"
            alt="Sarvadnya Industrial Prime Generator Fleet Station"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-center lg:object-right"
          />
        </motion.div>
      </motion.div>

      {/* 
        ========================================================================
        2. HERO CONTENT CLUSTER (LEFT-ALIGNED EDITORIAL NARRATIVE - 85% PRESENCE)
        - Masked kinetic text reveal headline
        - Signature orange accent line
        - High-signal editorial copy
        - Direct action button
        ========================================================================
      */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto py-4">
        <div className="max-w-4xl lg:max-w-[85%] w-full flex flex-col items-start text-left">

          {/* Monumental Headline with Masked Kinetic Line Reveals */}
          <h1 className="font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-[70px] xl:text-[78px] tracking-tight leading-[1.12] sm:leading-[1.12] text-white pt-0.5 pb-1 drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] max-w-full">
            {/* Line 1 Masked Reveal */}
            <span className="block overflow-hidden py-0.5">
              <motion.span
                className="inline-block text-white"
                initial={{ y: "115%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.95,
                  delay: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {t("generators.hero.title1", "The Fleet of")}
              </motion.span>
            </span>

            {/* Line 2 Masked Reveal with Signature Orange Accent */}
            <span className="block overflow-hidden py-0.5">
              <motion.span
                className="inline-block text-[#FF5500] drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]"
                initial={{ y: "115%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.95,
                  delay: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {t("generators.hero.title2", "Unbroken Power.")}
              </motion.span>
            </span>
          </h1>

          {/* Subtle Orange Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="w-20 h-0.5 bg-[#FF5500] origin-left mt-3 mb-2 shadow-[0_0_12px_rgba(255,85,0,0.6)]"
          />

          {/* High-Signal Editorial Description */}
          <div className="overflow-hidden mt-1.5 max-w-2xl sm:max-w-3xl">
            <motion.p
              initial={{ y: 26, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.85,
                delay: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-xs sm:text-sm lg:text-base text-white/95 leading-relaxed font-sans font-medium text-balance drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]"
            >
              {t(
                "generators.hero.desc",
                "Deploying Maharashtra's most dependable acoustic-enclosed diesel generator fleet. 100% CPCB-IV+ certified with dual electronic governors and guaranteed continuous prime backup across industrial manufacturing, luxury weddings, and critical healthcare grids."
              )}
            </motion.p>
          </div>

          {/* Primary Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-7"
          >
            <button
              type="button"
              onClick={scrollToGallery}
              className="group inline-flex items-center gap-3 px-6 py-3.5 sm:px-7 sm:py-4 rounded-2xl bg-white/15 hover:bg-[#FF5500] text-white font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-md backdrop-blur-md border border-white/20 hover:border-transparent hover:shadow-xl hover:shadow-[#FF5500]/20 cursor-pointer active:scale-[0.98]"
            >
              <span>{t("generators.hero.browse", "Browse All 18 Fleet Models")}</span>
              <ArrowDown className="w-4 h-4 text-[#FF5500] group-hover:text-white transition-colors duration-300 group-hover:translate-y-0.5" />
            </button>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
