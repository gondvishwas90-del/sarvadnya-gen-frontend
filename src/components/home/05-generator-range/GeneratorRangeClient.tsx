"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import {
  SectionHeading,
  type IconName,
  type ProductDetailsData,
} from "@/components/common";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";

export interface GeneratorItem extends ProductDetailsData {
  icon: IconName;
  application?: string;
  recommendedLoads?: string;
}

interface GeneratorRangeClientProps {
  generators: GeneratorItem[];
}

/**
 * GeneratorRangeClient Component
 *
 * Compact, robust architectural showcase:
 * - 100% reliable rendering: all generator units & specs stay mounted in DOM with smooth CSS cross-fade (zero blank frames)
 * - Compact card proportions (240px–280px height) preventing any number cutting or viewport clipping on 768px+ viewports
 * - Synchronized 500vh scroll-scrub + click ticker for immediate exploration
 * - Full multi-lingual localization support
 */
export function GeneratorRangeClient({ generators }: GeneratorRangeClientProps) {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = generators.length;

  // Track natural page scroll through this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(total - 1, Math.max(0, Math.floor(latest * total)));
    setCurrentIndex(index);
  });

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500vh] bg-[#FAF8F5] border-b border-[#E8E2D9]"
    >
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#FAF8F5]">
        
        {/* Subtle Ambient Atmosphere */}
        <div
          aria-hidden="true"
          className="absolute w-[500px] h-[350px] bg-[#FF5500]/[0.035] blur-[140px] rounded-full pointer-events-none"
        />

        {/* Subtle Architectural Grid Accent */}
        <div 
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#111315_1px,transparent_1px),linear-gradient(to_bottom,#111315_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" 
        />

        <div className="max-w-7xl mx-auto w-full flex flex-col gap-4 sm:gap-6 relative z-10">
          
          {/* Section Heading */}
          <SectionHeading
            title={t("range.title")}
            description={t("range.desc")}
            align="left"
            className="mb-1 max-w-5xl"
          />

          {/* 
            The Cube 12-Column Responsive Layout:
            - Left (Cols 2-4, span 3): Compact Card (Rating + Description)
            - Center (Cols 5-10, span 6): Equipment Stage with instant image cross-fade
            - Right (Col 12, span 1): Outlined counter box (e.g. 1-6)
          */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center justify-items-center">
            
            {/* LEFT: Compact Outlined Card (Rating + Description) */}
            <div className="w-full lg:col-start-2 lg:col-span-3 flex justify-center">
              <div className="w-full max-w-[320px] h-[240px] sm:h-[260px] lg:h-[280px] border border-[#E8E2D9] rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-center text-left relative bg-white shadow-xs overflow-hidden">
                <div className="relative w-full h-full flex items-center">
                  {generators.map((gen, idx) => {
                    const isCurrent = idx === currentIndex;
                    return (
                      <div
                        key={`text-${gen.id}`}
                        className={cn(
                          "w-full transition-all duration-300 ease-out flex flex-col justify-center",
                          isCurrent
                            ? "opacity-100 translate-y-0 relative z-10 pointer-events-auto"
                            : "opacity-0 translate-y-2 absolute inset-0 z-0 pointer-events-none"
                        )}
                      >
                        {/* Rating Numeral with clean top clearance */}
                        <span className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#FF5500] font-sans tracking-tight block leading-normal pt-2 mb-2 select-none">
                          {t(`range.${gen.id.replace("-", "")}.badge`, gen.badge)}
                        </span>

                        {/* Editorial Description Text */}
                        <p className="text-xs sm:text-[13px] text-[#403C36] font-sans leading-relaxed line-clamp-4">
                          {t(`range.${gen.id.replace("-", "")}.desc`, gen.description)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* CENTER: Compact Equipment Photography Stage with Guaranteed Image Rendering */}
            <div className="w-full lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[420px] h-[240px] sm:h-[260px] lg:h-[280px] relative overflow-hidden flex items-center justify-center bg-white border border-[#E8E2D9] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-md shadow-[#111315]/5">
                <div className="relative w-full h-full flex items-center justify-center">
                  {generators.map((gen, idx) => {
                    const isCurrent = idx === currentIndex;
                    return (
                      <div
                        key={`img-${gen.id}`}
                        className={cn(
                          "absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out",
                          isCurrent
                            ? "opacity-100 scale-100 z-10 pointer-events-auto"
                            : "opacity-0 scale-95 z-0 pointer-events-none"
                        )}
                      >
                        <Image
                          src={gen.image}
                          alt={gen.title}
                          fill
                          priority={idx === 0}
                          sizes="(max-width: 1024px) 100vw, 45vw"
                          className="object-contain filter drop-shadow-[0_16px_22px_rgba(17,19,21,0.14)] p-3 sm:p-5"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT: Outlined Counter Box (e.g. 1-6) */}
            <div className="w-full lg:col-span-1 flex lg:flex-col justify-end items-end h-full self-end pb-2">
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Generator Capacity"
                className="border border-[#E8E2D9] bg-white rounded-xl sm:rounded-2xl px-4 py-2 sm:px-5 sm:py-2.5 flex items-center justify-center font-mono text-lg sm:text-xl font-extrabold text-[#FF5500] select-none hover:border-[#FF5500] hover:bg-[#FAF8F5] transition-all cursor-pointer shadow-xs"
              >
                <span className="block">
                  {currentIndex + 1}-{total}
                </span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
