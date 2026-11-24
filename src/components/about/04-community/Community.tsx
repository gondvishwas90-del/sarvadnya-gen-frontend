"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

/**
 * Community Component — "The Sarvadnya Promise"
 *
 * Exact replication of The Cube (thecube.dk) layout & motion:
 * - 100% Scroll-Based Only: Scrolling smoothly advances 01 -> 02 -> 03 -> 04
 * - Left Side: 2x2 Grid with gap-0 where:
 *     - Top-Left: Solid square card with title aligned at bottom
 *     - Top-Right: Bare monumental number (NO card background)
 *     - Bottom-Left: Empty spacer
 *     - Bottom-Right: Outlined square card with description (corners touch at the grid intersection!)
 * - Right Side: Symmetrical aspect-square architectural photography
 * - Retains 100% Sarvadnya luxury bright palette (#FAF8F5, #FFFFFF, #FF5500, #111315, #E8E2D9)
 */
export function Community() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const promises = [
    {
      num: "1",
      title: t("about.promise.item1Title", "Guaranteed Zero Downtime"),
      desc: t(
        "about.promise.item1Desc",
        "Synchronized multi-generator setups and automatic load-transfer units ensure zero-second interruptions for mission-critical operations."
      ),
      image: "/images/services/generator_engine_bg.jpg",
      alt: "Synchronized diesel generator power setup for zero downtime",
    },
    {
      num: "2",
      title: t("about.promise.item2Title", "Acoustic Silence (<75 dBA)"),
      desc: t(
        "about.promise.item2Desc",
        "Engineered soundproof acoustic canopies with heavy-duty silencers designed specifically for luxury weddings, banquets, and urban healthcare sites."
      ),
      image: "/images/services/generator_only_bg.jpg",
      alt: "Soundproof acoustic canopy generator for ultra-silent operation",
    },
    {
      num: "3",
      title: t("about.promise.item3Title", "Stationed Field Engineers"),
      desc: t(
        "about.promise.item3Desc",
        "Certified mechanical and electrical engineers remain on-site throughout your deployment to manage fuel, live monitoring, and real-time load balancing."
      ),
      image: "/images/services/service_engineer_bg.jpg",
      alt: "Certified Sarvadnya service engineer performing technical site management",
    },
    {
      num: "4",
      title: t("about.promise.item4Title", "Rapid Transit Fleet"),
      desc: t(
        "about.promise.item4Desc",
        "In-house dedicated transportation trailers and mobile quick-response units ready for immediate deployment across 5 districts in Maharashtra."
      ),
      image: "/images/generators/truck_orange_generator.jpg",
      alt: "Dedicated heavy transportation vehicle delivering generator fleet",
    },
  ];

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const total = promises.length;
    const index = Math.min(total - 1, Math.max(0, Math.floor(latest * total)));
    setActiveIndex(index);
  });

  const current = promises[activeIndex];

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[320vh] bg-white border-b border-[#E8E2D9] z-10"
    >
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-4 sm:px-6 lg:px-12 overflow-hidden bg-white">
        <div className="max-w-7xl w-full mx-auto flex flex-col justify-center my-auto py-6 sm:py-8">
          
          {/* Section Header: Clean title */}
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center mb-6 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111315] font-['Poppins',sans-serif] tracking-tight leading-[1.12]">
              {t("about.promise.title1", "The Sarvadnya")}{" "}
              <span className="text-[#FF5500]">
                {t("about.promise.title2", "Promise")}
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#524E48] font-['Outfit',sans-serif] leading-relaxed mt-2 sm:mt-3">
              {t(
                "about.promise.desc",
                "We deliver uninterrupted power with rapid dispatch, meticulously maintained generator sets, and dedicated 24/7 technical engineers on site."
              )}
            </p>
          </div>

          {/* 
            The Cube Exact Architectural Split:
            Left: 2x2 Square Grid (gap-0) where Top-Left and Bottom-Right corners touch.
            Right: Symmetrical square architectural image.
          */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center justify-items-center">
            
            {/* LEFT COLUMN: 2x2 Grid with gap-0 (Col 6) */}
            <div className="lg:col-span-6 w-full flex justify-center">
              <div className="w-full max-w-[460px] sm:max-w-[500px] grid grid-cols-2 gap-0 aspect-square">
                
                {/* Top-Left: Solid Vibrant Brand Square (Title at Bottom) */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`title-${activeIndex}`}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="aspect-square bg-[#FF5500] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-end text-white select-none shadow-lg shadow-[#FF5500]/15"
                  >
                    <h3 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-white font-['Poppins',sans-serif] leading-tight">
                      {current.title}
                    </h3>
                  </motion.div>
                </AnimatePresence>

                {/* Top-Right: Bare Monumental Number — NO CARD BACKGROUND */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`num-${activeIndex}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="aspect-square flex items-center justify-center select-none"
                  >
                    <span className="text-7xl sm:text-8xl lg:text-[104px] font-bold text-[#FF5500] font-['Poppins',sans-serif] leading-none">
                      {current.num}
                    </span>
                  </motion.div>
                </AnimatePresence>

                {/* Bottom-Left: Empty Spacer */}
                <div className="aspect-square" aria-hidden="true" />

                {/* Bottom-Right: Outlined Specification Card (Edges touch Top-Left at the center corner) */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`desc-${activeIndex}`}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="aspect-square rounded-2xl sm:rounded-3xl border border-[#E8E2D9] p-6 sm:p-7 flex flex-col justify-center bg-white/80 shadow-xs"
                  >
                    <p className="text-xs sm:text-sm text-[#403C36] font-['Outfit',sans-serif] leading-relaxed">
                      {current.desc}
                    </p>
                  </motion.div>
                </AnimatePresence>

              </div>
            </div>

            {/* RIGHT COLUMN: Architectural Photography (Col 6) */}
            <div className="lg:col-span-6 w-full flex justify-center">
              <div className="w-full max-w-[460px] sm:max-w-[500px] aspect-square relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E8E2D9] shadow-lg bg-[#111315]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`img-${activeIndex}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 size-full"
                  >
                    <Image
                      src={current.image}
                      alt={current.alt}
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
