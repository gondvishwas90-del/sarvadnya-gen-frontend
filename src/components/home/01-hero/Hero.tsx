"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

interface FleetSlide {
  id: string;
  num: string;
  imageSrc: string;
  title1Key: string;
  title2Key: string;
  descKey: string;
}

const FLEET_SLIDES: FleetSlide[] = [
  {
    id: "industrial",
    num: "01",
    imageSrc: "/images/generators/fleet_hero_industrial.jpg",
    title1Key: "generators.hero.s1.title1",
    title2Key: "generators.hero.s1.title2",
    descKey: "generators.hero.s1.desc",
  },
  {
    id: "weddings",
    num: "02",
    imageSrc: "/images/generators/fleet_hero_weddings.jpg",
    title1Key: "generators.hero.s2.title1",
    title2Key: "generators.hero.s2.title2",
    descKey: "generators.hero.s2.desc",
  },
  {
    id: "healthcare",
    num: "03",
    imageSrc: "/images/generators/fleet_hero_hospital.jpg",
    title1Key: "generators.hero.s3.title1",
    title2Key: "generators.hero.s3.title2",
    descKey: "generators.hero.s3.desc",
  },
  {
    id: "dispatch",
    num: "04",
    imageSrc: "/images/generators/fleet_hero_dispatch.jpg",
    title1Key: "generators.hero.s4.title1",
    title2Key: "generators.hero.s4.title2",
    descKey: "generators.hero.s4.desc",
  },
];

const SLIDE_DURATION = 3000; // 3.0 seconds per scene change

/**
 * Hero Component (Home)
 *
 * Minimal Awwwards-Level Cinematic Hero:
 * - 4 Fullscreen 2.7K Crystal-Clear Generator Scenes auto-cycling every 3 seconds
 * - Staggered masked kinetic text reveals on slide change
 * - Primary Action: "Browse Fleet (5–250 kVA)"
 * - Ultra-minimal 3s linear indicator dashes (Zero boxy backgrounds)
 * - Viewport proportioning with natural breathing room
 */
export function Hero() {
  const router = useRouter();
  const { t } = useLanguage();

  const [activeIdx, setActiveIdx] = useState(0);

  const activeSlide = FLEET_SLIDES[activeIdx] || FLEET_SLIDES[0];

  // Auto-advance timer: strictly 3 seconds (continues smoothly even on hover)
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIdx((prev) => (prev + 1) % FLEET_SLIDES.length);
    }, SLIDE_DURATION);

    return () => clearTimeout(timer);
  }, [activeIdx]);

  // Smooth scroll to gallery or navigate to fleet
  const scrollToGallery = () => {
    const galleryEl = document.getElementById("gallery") || document.getElementById("applications");
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    router.push("/generators#gallery");
  };

  return (
    <section
      className="relative w-full min-h-[70vh] lg:h-[85vh] lg:min-h-[640px] max-h-[820px] flex flex-col justify-center overflow-hidden bg-[#0D0E10] pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-16 select-none border-b border-white/10"
    >
      {/* 
        ========================================================================
        1. FULLSCREEN SEQUENTIAL KINETIC BACKGROUND STAGE (3-SECOND TRANSITION)
        - 4 Crystal-clear 2.7K widescreen landscape scenes
        - Smooth crossfade + Ken Burns micro-drift (scale: 1.05 -> 1.0)
        - unoptimized={true} ensures 1:1 razor-sharp pixel rendering
        ========================================================================
      */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1.0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={activeSlide.imageSrc}
              alt={t(activeSlide.title1Key, "Sarvadnya Generator Fleet")}
              fill
              priority
              unoptimized
              sizes="100vw"
              className="object-cover object-center lg:object-right"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 
        ========================================================================
        2. HERO EDITORIAL CONTENT (LEFT-ALIGNED MONUMENTAL TYPOGRAPHY)
        - Staggered masked kinetic text reveals on slide change
        - High-signal narrative
        - Primary "Browse Fleet" action + Minimal 3s dash indicators
        ========================================================================
      */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto py-6 sm:py-10">
        <div className="max-w-4xl lg:max-w-[85%] w-full flex flex-col items-start text-left">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-start w-full"
            >
              {/* Monumental Headline with Masked Kinetic Text Reveal (85% Presence) */}
              <h1 className="font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-[70px] xl:text-[78px] tracking-tight leading-[1.12] sm:leading-[1.12] text-white pt-0.5 pb-1 drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] max-w-full">
                {/* Line 1 Masked Reveal */}
                <span className="block overflow-hidden py-0.5">
                  <motion.span
                    className="inline-block text-white"
                    initial={{ y: "115%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{
                      duration: 0.75,
                      delay: 0.04,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {t(activeSlide.title1Key, "Industrial Heavy Prime.")}
                  </motion.span>
                </span>

                {/* Line 2 Masked Reveal in Signature Electric Orange */}
                <span className="block overflow-hidden py-0.5">
                  <motion.span
                    className="inline-block text-[#FF5500] drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]"
                    initial={{ y: "115%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{
                      duration: 0.75,
                      delay: 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {t(activeSlide.title2Key, "Zero Production Halt.")}
                  </motion.span>
                </span>
              </h1>

              {/* Subtle Orange Accent Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-20 h-0.5 bg-[#FF5500] origin-left mt-2.5 mb-1.5 shadow-[0_0_12px_rgba(255,85,0,0.6)]"
              />

              {/* High-Signal Editorial Description */}
              <div className="overflow-hidden mt-3 max-w-2xl sm:max-w-3xl">
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.22,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-sm sm:text-base lg:text-lg text-white/95 leading-relaxed font-sans font-medium text-balance drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]"
                >
                  {t(
                    activeSlide.descKey,
                    "Heavy-duty 125 to 250 kVA synchronized diesel generators engineered for continuous 24/7 manufacturing shifts, high inductive motor loads, and automated power backup across Maharashtra."
                  )}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* 
            Action Row & Minimal 3-Second Slide Progress Indicator:
            - Primary Browse Full Fleet button
            - Sleek, zero-box indicator dashes showing active slide progress
          */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-6 mt-6 sm:mt-8">
            {/* Primary Action: Browse Full Fleet */}
            <button
              type="button"
              onClick={scrollToGallery}
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/15 hover:bg-[#FF5500] text-white text-xs sm:text-[13px] font-bold uppercase tracking-wider transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-transparent shadow-md hover:shadow-orange-500/25 active:scale-[0.98] cursor-pointer"
            >
              <span>{t("generators.hero.browse", "Browse Fleet (5–250 kVA)")}</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Ultra-Minimal 3s Slide Indicator (Zero Box Background) */}
            <div className="flex items-center gap-2">
              {FLEET_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`relative h-1 rounded-full overflow-hidden transition-all duration-300 cursor-pointer ${
                    idx === activeIdx ? "w-8 bg-white/80" : "w-3 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  {idx === activeIdx && (
                    <motion.div
                      key={`dash-${activeIdx}`}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                      className="h-full bg-[#FF5500] rounded-full"
                    />
                  )}
                </button>
              ))}
              <span className="font-mono text-xs font-bold text-white/80 ml-1.5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                0{activeIdx + 1} / 0{FLEET_SLIDES.length}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
