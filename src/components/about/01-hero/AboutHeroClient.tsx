"use client";

import React from "react";
import { motion } from "framer-motion";
import { SlicedWavesBackground } from "@/components/common/SlicedWavesBackground";
import { useLanguage } from "@/lib/LanguageContext";

/**
 * AboutHeroClient Component
 *
 * Ultra-Premium Bright Luxury Hero Section:
 * - Dynamic SlicedWaves WebGL canvas with real-time pointer interaction
 * - Refined editorial typography (no cheap pill badges, zero unwanted cards)
 * - 4-pillar architectural executive metric horizon
 * - Precision conversion actions with smooth story navigation
 */
export function AboutHeroClient() {
  const { t } = useLanguage();

  return (
    <section className="w-full pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-20 lg:pb-24 flex flex-col items-center justify-center sticky top-0 z-0 min-h-screen overflow-hidden bg-[#FAF8F5]">
      {/* 
        Interactive SlicedWaves WebGL Canvas Stage from React Bits
        Reacts dynamically to pointer coordinates across depth
      */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto">
        <SlicedWavesBackground
          color1="#ff9d4d"
          color2="#ff2d78"
          color3="#3060ff"
          ribbons={3}
          spacing={28}
          perspective={0.45}
          blur={0.6}
          glow={1}
          position={0.76}
          mouseInteraction={true}
          barWidth={0.5}
          ribbonHeight={0.26}
          spread={0.1}
          amplitude={0.1}
          frequency={1}
          curve={0.5}
          slices={0}
          speed={1}
          brightness={1.25}
          rotation={0}
          grain={0.08}
          fade={0}
          opacity={1}
          intro={true}
          lightMode={true}
        />

        {/* Luminous Ivory Scrim Gradients for Maximum Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/92 via-[#FAF8F5]/40 to-[#FAF8F5] pointer-events-none" />
        <div className="absolute inset-0 bg-radial-[circle_at_50%_35%] from-transparent via-[#FAF8F5]/30 to-[#FAF8F5]/90 pointer-events-none" />
      </div>

      {/* Subtle Warm Amber Atmospheric Glow */}
      <div 
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#FF5500]/[0.05] blur-[150px] rounded-full pointer-events-none z-0" 
      />

      {/* Subtle Architectural Grid */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#111315_1px,transparent_1px),linear-gradient(to_bottom,#111315_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none z-0" 
      />

      <div className="w-full flex flex-col items-center text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Headline & Narrative Cluster */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center max-w-4xl"
        >
          {/* Pure Typography Heritage Marker (No Pill Bubble) */}
          <span className="font-['Outfit',sans-serif] uppercase tracking-[0.25em] text-xs sm:text-sm font-bold text-[#8C8275] mb-5">
            {t("about.hero.tagline", "EST. 2009 • NASHIK, MAHARASHTRA • 17 YEARS OF OPERATIONAL EXCELLENCE")}
          </span>

          {/* Monumental Display Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[78px] font-extrabold font-['Poppins',sans-serif] text-[#111315] leading-[1.22] sm:leading-[1.26] pt-2 pb-1.5 tracking-tight text-balance">
            {t("about.hero.title1", "Powering Nashik's")} <br />
            <span className="text-[#FF5500]">{t("about.hero.title2", "Grandest Milestones.")}</span>
          </h1>

          {/* High-Signal Editorial Copy */}
          <p className="text-base sm:text-xl text-[#403C36] max-w-3xl font-['Outfit',sans-serif] leading-relaxed font-normal mt-6 text-balance">
            {t("about.hero.desc", "Since 2009, Sarvadnya has engineered uninterrupted silent power solutions across Maharashtra. From high-stakes industrial operations and weddings to critical healthcare grids, we keep the state running with 5 to 250 kVA silent DG sets and 24/7 on-site technical dispatch.")}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
