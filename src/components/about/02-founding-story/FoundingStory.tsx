"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

/**
 * FoundingStory Component
 * 
 * Ultra-Premium Editorial Layout with The Cube-Style Scroll & Masked Typography Animations:
 * - Exactly the authentic original data (Title, 2 narrative paragraphs, quote, 2009 badge, image)
 * - Zero extra data, zero pill badges, 100% design preserved
 * - Split-line kinetic masked text reveals and cinematic depth plinth scale
 */
export function FoundingStory() {
  const { t } = useLanguage();

  return (
    <section id="story" className="w-full py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 bg-white border-t border-b border-[#E8E2D9] relative z-10 shadow-[0_-24px_60px_rgba(17,19,21,0.08)] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Narrative & Bespoke Pull-Quote (Col 7) */}
        <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
          {/* Masked Line Kinetic Headline (The Cube Reference 1) */}
          <div className="overflow-hidden pt-3 sm:pt-4 pb-1">
            <motion.h2
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-[#111315] font-['Poppins',sans-serif] tracking-tight leading-[1.26] sm:leading-[1.3] pt-1.5 inline-block"
            >
              {t("about.story.title", "A Journey of Reliability")}
            </motion.h2>
          </div>

          <div className="flex flex-col gap-5 sm:gap-6 text-[#3A3630] font-['Outfit',sans-serif] text-base sm:text-lg leading-[1.8] font-normal">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: 35, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                {t("about.story.p1", "Sarvadnya Generators was founded in 2009 with a clear mission: to provide dependable and affordable power backup solutions for businesses, events, construction sites, and industrial operations across Nashik and nearby regions.")}
              </motion.p>
            </div>

            <div className="overflow-hidden">
              <motion.p
                initial={{ y: 35, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.75, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              >
                {t("about.story.p2", "What started with a small fleet of just one diesel generator has now grown into a trusted generator rental company. We are known for our reliability, quick service, and customer-focused support, ensuring that our clients never face power interruptions.")}
              </motion.p>
            </div>

            {/* Bespoke Luxury Pull-Quote with Growing Spine Accent */}
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-6 sm:pl-8 py-3 border-l-2 border-[#FF5500] mt-3"
            >
              <span className="text-4xl sm:text-5xl text-[#FF5500] font-serif leading-none block select-none mb-1 opacity-80" aria-hidden="true">&ldquo;</span>
              <p className="text-[#111315] font-serif italic text-base sm:text-lg lg:text-xl leading-relaxed">
                {t("about.story.quote", "Our commitment to reliability, transparent pricing, and 24/7 assistance makes us a trusted choice for temporary and long-term power requirements.")}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Museum-Grade Visual Plinth with Layered Depth Reveal (Col 5) */}
        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative h-[360px] sm:h-[480px] lg:h-[540px] rounded-3xl overflow-hidden border border-[#E8E2D9] shadow-[0_24px_60px_-15px_rgba(17,19,21,0.12)] bg-[#FAF8F5] group">
            <Image 
              src="/images/about/story-main.png" 
              alt="Sarvadnya Generators History" 
              fill 
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center filter saturate-[0.9] contrast-[1.05] transition-transform duration-700 group-hover:scale-[1.03]"
            />
            {/* Subtle Gradient Scrim for Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111315]/50 via-transparent to-transparent pointer-events-none" />

            {/* Atelier Frosted Glass Floating Badge with Pop Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 px-6 py-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E8E2D9] shadow-2xl z-10 flex items-center gap-4 sm:gap-5"
            >
              <div className="text-[#FF5500] text-3xl sm:text-4xl font-extrabold font-['Poppins',sans-serif] tracking-tight leading-none">
                {t("about.story.badgeYear", "2009")}
              </div>
              <div className="w-px h-8 sm:h-9 bg-[#E8E2D9]" />
              <div className="flex flex-col">
                <span className="text-[#111315] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] font-['Outfit',sans-serif]">
                  {t("about.story.badgeTitle", "The Beginning")}
                </span>
                <span className="text-[11px] text-[#71695F] font-medium font-['Outfit',sans-serif]">
                  {t("about.story.badgeCompany", "Sarvadnya Generators")}
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
