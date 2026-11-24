"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence, type MotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";

export interface ServiceSpec {
  label: string;
  value: string;
}

export interface ServiceVertical {
  id: string;
  index: string;
  tabLabel: string;
  tagline: string;
  title: string;
  subtitle: string;
  description: string;
  capacity: string;
  specs: ServiceSpec[];
  primaryImage: string;
  unitImage: string;
  unitBadge: string;
  statusBadge: string;
  href: string;
  ctaText: string;
}

interface ServicesWeOfferClientProps {
  verticals: ServiceVertical[];
  activeIndex: number;
  scrollYProgress?: MotionValue<number>;
  onVerticalClick: (index: number) => void;
}

/**
 * ServicesWeOfferClient
 * 
 * High-end architectural layout adapted from Joint Talent (jointalent.net/about/):
 * - Light luxury background (#FAF8F5) with brand safety orange (#FF5500) accents
 * - Left column: Ultra-clean vertical tab navigation with animated progress indicator line
 * - Right column: Unified Single Card with generator unit image on top and specifications table below
 * - Staggered transitions on tab switch / scroll scrub
 * - Full English / Hindi / Marathi localization
 */
export function ServicesWeOfferClient({
  verticals,
  activeIndex,
  scrollYProgress,
  onVerticalClick,
}: ServicesWeOfferClientProps) {
  const { t } = useLanguage();
  const activeVertical = verticals[activeIndex] || verticals[0];

  // Dynamic vertical progress fill tracking scroll progress
  const lineProgress = useTransform(
    scrollYProgress || ({ get: () => 0 } as unknown as MotionValue<number>),
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <div className="w-full relative flex flex-col select-none">
      {/* 
        ========================================================================
        MOBILE NAVIGATION TAB BAR (< lg screens)
        ========================================================================
      */}
      {/* 
        ========================================================================
        MOBILE TOP VERTICAL LIST (< lg screens)
        Spacious, bold typography matching the reference
        ========================================================================
      */}
      <div className="lg:hidden w-full relative mb-4 sm:mb-5">
        {/* Vertical progress track on mobile */}
        <div className="absolute left-0 top-1 bottom-1 w-[3px] bg-[#E8E2D9] rounded-full overflow-hidden">
          <motion.div
            style={{
              height: scrollYProgress
                ? lineProgress
                : `${((activeIndex + 1) / verticals.length) * 100}%`,
            }}
            className="w-full bg-[#FF5500] shadow-[0_0_8px_rgba(255,85,0,0.4)]"
          />
        </div>

        {/* The 3 Titles on Mobile */}
        <div className="pl-4 sm:pl-5 flex flex-col gap-2.5 sm:gap-3">
          {verticals.map((vertical, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={`mob-title-${vertical.id}`}
                onClick={() => onVerticalClick(index)}
                className={cn(
                  "text-left transition-all duration-300 cursor-pointer select-none",
                  isActive ? "opacity-100" : "opacity-35 hover:opacity-60"
                )}
              >
                <h3
                  className={cn(
                    "font-sans tracking-tight transition-all duration-300",
                    isActive
                      ? "text-lg sm:text-xl font-black text-[#111315]"
                      : "text-base sm:text-lg font-bold text-[#8C847A]"
                  )}
                >
                  {vertical.title}
                </h3>
              </button>
            );
          })}
        </div>
      </div>

      {/* 
        ========================================================================
        MASTER SPLIT STAGE
        - Left: Clean Vertical Navigation with animated progress track (Desktop lg+)
        - Right: Unified Single Card in Table Format (Image + Specifications)
        ========================================================================
      */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-14 items-center">
        {/* 
          LEFT COLUMN: CLEAN VERTICAL NAVIGATION (Joint Talent style)
        */}
        <div className="hidden lg:flex lg:col-span-5 relative flex-col justify-center">
          {/* Vertical progress track on desktop */}
          <div className="hidden lg:block absolute left-0 top-3 bottom-3 w-[2px] bg-[#E8E2D9] rounded-full overflow-hidden">
            <motion.div
              style={{
                height: scrollYProgress
                  ? lineProgress
                  : `${((activeIndex + 1) / verticals.length) * 100}%`,
              }}
              className="w-full bg-[#FF5500] shadow-[0_0_10px_rgba(255,85,0,0.4)]"
            />
          </div>

          <div className="lg:pl-8 flex flex-col gap-8 lg:gap-11 xl:gap-13">
            {verticals.map((vertical, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={vertical.id}
                  onClick={() => onVerticalClick(index)}
                  className={cn(
                    "text-left transition-all duration-300 cursor-pointer select-none",
                    isActive ? "opacity-100" : "opacity-30 hover:opacity-60"
                  )}
                >
                  <h3
                    className={cn(
                      "font-sans font-black tracking-tight leading-[1.15] transition-all duration-300",
                      isActive
                        ? "text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] text-[#1F1F1E]"
                        : "text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] text-[#625D55]"
                    )}
                  >
                    {vertical.title}
                  </h3>
                </button>
              );
            })}
          </div>
        </div>

        {/* 
          RIGHT COLUMN: UNIFIED SINGLE CARD IN TABLE FORMAT
          (Generator Image on Top + Specifications Table Below)
        */}
        <div className="lg:col-span-7 relative w-full flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeVertical.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full rounded-2xl sm:rounded-3xl bg-white border border-[#E8E2D9] shadow-sm overflow-hidden flex flex-col"
            >
              {/* 
                1. UPPER SECTION: CLEAN GENERATOR IMAGE SHOWCASE
                (Generous height, prominent generator visual & soft ground contact shadow)
              */}
              <div className="relative w-full h-[175px] sm:h-[220px] lg:h-[295px] xl:h-[315px] bg-gradient-to-b from-[#FAF8F5]/80 via-white to-white flex items-center justify-center p-3 sm:p-6 overflow-hidden">
                {/* Subtle warm ambient volumetric warmth */}
                <div className="absolute w-[240px] sm:w-[360px] lg:w-[440px] h-[140px] sm:h-[160px] lg:h-[200px] bg-[#FF5500]/[0.05] blur-[50px] rounded-full pointer-events-none" />

                {/* Floating generator image with continuous levitation */}
                <motion.div
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
                  className="relative z-10 w-[78%] sm:w-[75%] lg:w-[76%] h-[140px] sm:h-[180px] lg:h-[220px] xl:h-[240px] flex items-center justify-center filter drop-shadow-[0_16px_22px_rgba(31,31,30,0.15)]"
                >
                  <Image
                    src={activeVertical.unitImage}
                    alt={activeVertical.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 80vw, 45vw"
                    className="object-contain"
                  />
                </motion.div>

                {/* Contact drop shadow */}
                <motion.div
                  animate={{
                    scaleX: [1, 0.92, 1],
                    opacity: [0.32, 0.2, 0.32],
                  }}
                  transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
                  className="absolute bottom-2 sm:bottom-4 lg:bottom-5 w-1/2 h-3 sm:h-4 lg:h-5 bg-black/20 blur-md rounded-full pointer-events-none"
                />
              </div>

              {/* 
                2. LOWER SECTION: SPECIFICATIONS TABLE FORMAT
                (Clean structured table rows with comfortable breathing room)
              */}
              <div className="w-full border-t border-[#E8E2D9] divide-y divide-[#E8E2D9] bg-white">
                {activeVertical.specs.map((spec, specIdx) => (
                  <div
                    key={spec.label}
                    className="flex items-center justify-between px-4 sm:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 xl:py-4.5 hover:bg-[#FAF8F5]/70 transition-colors"
                  >
                    {/* Parameter Label with Brand Font Index & Indicator Beacon */}
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <span className="font-mono text-xs lg:text-[13px] font-bold text-[#FF5500]">
                        0{specIdx + 1}
                      </span>
                      <span className="size-1 sm:size-1.5 rounded-full bg-[#FF5500]" />
                      <span className="font-sans text-xs sm:text-sm lg:text-[14px] xl:text-[15px] font-bold text-[#1F1F1E]">
                        {spec.label}
                      </span>
                    </div>

                    {/* Verified Precision Rating */}
                    <span className="font-sans text-xs sm:text-sm lg:text-[14px] xl:text-[15px] font-semibold text-[#403C36] text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
