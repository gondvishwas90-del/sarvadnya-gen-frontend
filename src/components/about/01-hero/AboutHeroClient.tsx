"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  ShieldCheck,
  Gauge,
  Clock,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

/**
 * AboutHeroClient Component
 *
 * Ultra-Sharp Crystal-Clear Architectural Generator Hero:
 * - 2752x1536 high-resolution uncompressed image (unoptimized={true}) with zero scale/transform subpixel blurring
 * - Zero fog/milky overlays on the generator: the entire right side and center are 100% crystal clear and razor-sharp
 * - Tight, subtle localized gradient on the far left to keep typography crisp without washing out the photo
 * - Perfectly sized viewport height (min-h-[82vh] lg:min-h-[760px]) ensuring bottom metrics bar is 100% visible
 * - Staggered masked kinetic text reveal animations for the monumental headline
 */
export function AboutHeroClient() {
  const { t } = useLanguage();

  return (
    <section className="sticky top-0 z-0 w-full h-screen min-h-[640px] max-h-[1080px] flex flex-col justify-between bg-[#FAF8F5] pt-20 sm:pt-24 pb-4 sm:pb-6 overflow-hidden">
      {/* 
        ========================================================================
        1. CRYSTAL-CLEAR FULLSCREEN GENERATOR IMAGE (ZERO BLUR, FULL RES)
        - 2752x1536 2.7K high-definition silent generator on concrete plinth
        - unoptimized={true} to bypass any Next.js lossy compression or downsampling
        - Zero CSS scale/transform to ensure 1:1 razor-sharp pixel rendering
        ========================================================================
      */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/about/about_hero_generator.jpg"
          alt="Sarvadnya Commercial Silent Diesel Generator Station"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center lg:object-right"
        />

        {/* 
          Ultra-light localized text scrim:
          Only gently tints the leftmost ~35% behind the text, leaving the 
          entire generator, exhaust, louvers, campus, and sky 100% raw and crystal-clear!
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/90 via-[#FAF8F5]/40 to-transparent via-35% lg:via-30% pointer-events-none" />

        {/* Subtle bottom transition blend */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FAF8F5] to-transparent pointer-events-none" />
      </div>

      {/* 
        ========================================================================
        2. HERO CONTENT CLUSTER (LEFT-ALIGNED EDITORIAL NARRATIVE)
        - Masked kinetic text reveal headline
        - Accent line
        - High-signal editorial narrative paragraph
        ========================================================================
      */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto py-2">
        <div className="max-w-2xl lg:max-w-3xl flex flex-col items-start text-left">

          {/* Monumental Headline with Masked Kinetic Text Reveal */}
          <h1 className="font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-[54px] xl:text-[62px] tracking-tight leading-[1.12] sm:leading-[1.14] text-[#111315] pt-0.5 pb-1 drop-shadow-xs">
            {/* Line 1 Masked Reveal */}
            <span className="block overflow-hidden py-0.5">
              <motion.span
                className="inline-block"
                initial={{ y: "115%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.95,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {t("about.hero.title1", "Powering Nashik's")}
              </motion.span>
            </span>

            {/* Line 2 Masked Reveal with Signature Orange Accent */}
            <span className="block overflow-hidden py-0.5">
              <motion.span
                className="inline-block text-[#FF5500]"
                initial={{ y: "115%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.95,
                  delay: 0.22,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {t("about.hero.title2", "Grandest Milestones.")}
              </motion.span>
            </span>
          </h1>

          {/* Subtle Orange Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-16 h-0.5 bg-[#FF5500] origin-left mt-2 mb-1.5"
          />

          {/* High-Signal Editorial Description */}
          <div className="overflow-hidden mt-1.5">
            <motion.p
              initial={{ y: 26, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.85,
                delay: 0.38,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-xs sm:text-sm lg:text-base text-[#302D28] max-w-xl font-sans leading-relaxed font-medium text-balance"
            >
              {t(
                "about.hero.desc",
                "Since 2009, Sarvadnya has engineered uninterrupted silent power solutions across Maharashtra. From high-stakes industrial operations and weddings to critical healthcare grids, we keep the state running with 5 to 250 kVA silent DG sets and 24/7 on-site technical dispatch."
              )}
            </motion.p>
          </div>

        </div>
      </div>

      {/* 
        ========================================================================
        3. BOTTOM METRICS HORIZON RIBBON (FULLY VISIBLE & UNCLIPPED)
        - Floating horizontal frosted glass container with 4 operational trust pillars
        - Generous vertical breathing room ensuring it is never cut off on any viewport
        ========================================================================
      */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.85,
          delay: 0.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-3 sm:pb-5 pt-1"
      >
        <div className="w-full bg-white/85 hover:bg-white/95 transition-all duration-300 backdrop-blur-xl border border-white/95 rounded-2xl sm:rounded-3xl p-3 sm:p-4.5 lg:p-5 shadow-[0_16px_40px_rgba(17,19,21,0.06)]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            
            {/* Stat 1: Deployments Completed */}
            <div className="flex items-center gap-3 sm:gap-4 sm:border-r sm:border-[#E8E2D9]/70 sm:pr-4 lg:pr-6">
              <div className="size-9 sm:size-11 rounded-xl sm:rounded-2xl bg-[#FF5500]/10 border border-[#FF5500]/20 flex items-center justify-center text-[#FF5500] shrink-0 shadow-2xs">
                <Building2 className="w-4.5 sm:w-5.5 h-4.5 sm:h-5.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-extrabold text-xl sm:text-2xl lg:text-3xl text-[#111315] tracking-tight leading-none">
                  {t("about.hero.metric2Value", "10,000+")}
                </span>
                <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#736B5E] mt-1 sm:mt-1.5 leading-tight">
                  {t("about.hero.metric2Desc", "Successful Project Deployments")}
                </span>
              </div>
            </div>

            {/* Stat 2: Years Experience */}
            <div className="flex items-center gap-3 sm:gap-4 lg:border-r lg:border-[#E8E2D9]/70 sm:pr-4 lg:pr-6">
              <div className="size-9 sm:size-11 rounded-xl sm:rounded-2xl bg-[#FF5500]/10 border border-[#FF5500]/20 flex items-center justify-center text-[#FF5500] shrink-0 shadow-2xs">
                <ShieldCheck className="w-4.5 sm:w-5.5 h-4.5 sm:h-5.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-extrabold text-xl sm:text-2xl lg:text-3xl text-[#111315] tracking-tight leading-none">
                  {t("about.track.stat1Value", "17+")}
                </span>
                <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#736B5E] mt-1 sm:mt-1.5 leading-tight">
                  {t("about.hero.metric1Desc", "17+ Years of Unbroken Trust")}
                </span>
              </div>
            </div>

            {/* Stat 3: Fleet Capacity */}
            <div className="flex items-center gap-3 sm:gap-4 sm:border-r sm:border-[#E8E2D9]/70 sm:pr-4 lg:pr-6">
              <div className="size-9 sm:size-11 rounded-xl sm:rounded-2xl bg-[#FF5500]/10 border border-[#FF5500]/20 flex items-center justify-center text-[#FF5500] shrink-0 shadow-2xs">
                <Gauge className="w-4.5 sm:w-5.5 h-4.5 sm:h-5.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-extrabold text-xl sm:text-2xl lg:text-3xl text-[#111315] tracking-tight leading-none">
                  {t("about.hero.metric3Value", "5 – 250 kVA")}
                </span>
                <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#736B5E] mt-1 sm:mt-1.5 leading-tight">
                  {t("about.hero.metric3Desc", "Silent CPCB-IV+ Certified Sets")}
                </span>
              </div>
            </div>

            {/* Stat 4: 24/7 Engineers */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="size-9 sm:size-11 rounded-xl sm:rounded-2xl bg-[#FF5500]/10 border border-[#FF5500]/20 flex items-center justify-center text-[#FF5500] shrink-0 shadow-2xs">
                <Clock className="w-4.5 sm:w-5.5 h-4.5 sm:h-5.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-extrabold text-xl sm:text-2xl lg:text-3xl text-[#111315] tracking-tight leading-none">
                  {t("about.hero.metric4Value", "24/7/365")}
                </span>
                <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#736B5E] mt-1 sm:mt-1.5 leading-tight">
                  {t("about.hero.metric4Desc", "On-Site Technical Engineers")}
                </span>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
