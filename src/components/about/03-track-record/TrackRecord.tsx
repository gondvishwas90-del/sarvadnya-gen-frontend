"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

/**
 * TrackRecord Component
 *
 * Ultra-Premium Operational Impact Section with Kinetic Masked Typography & Bento Metric Stagger:
 * - Desktop: Symmetric 2x2 luxury metric bento architecture with kinetic numeral reveals
 * - Mobile: High-density 2-column paired cards with staggered pop reveals
 * - Reliable scroll reveal (viewport once: true) with generous clearance for Devanagari matras
 */
export function TrackRecord() {
  const { t } = useLanguage();

  const stats = [
    {
      value: t("about.track.stat1Value", "17+"),
      label: t("about.track.stat1Label", "Years Experience"),
      desc: t("about.track.stat1Desc", "Continuous silent power rental operations across Maharashtra since 2009."),
    },
    {
      value: t("about.track.stat2Value", "2,000+"),
      label: t("about.track.stat2Label", "Satisfied Clients"),
      desc: t("about.track.stat2Desc", "Trusted by premier industrial plants, wedding venues, and corporate enterprises."),
    },
    {
      value: t("about.track.stat3Value", "24/7"),
      label: t("about.track.stat3Label", "Emergency Support"),
      desc: t("about.track.stat3Desc", "Immediate on-site technical dispatch with active standby backup readiness."),
    },
    {
      value: t("about.track.stat4Value", "10,000+"),
      label: t("about.track.stat4Label", "Successful Deployments"),
      desc: t("about.track.stat4Desc", "Proven track record of zero critical downtime power operations delivered."),
    },
  ];

  return (
    <section className="w-full py-16 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 bg-[#FAF8F5] border-b border-[#E8E2D9] relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Asymmetric 2-Column Architectural Layout (Heading Left, 2x2 Bento Metrics Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Heading & Narrative Context (Col 5) */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full lg:sticky lg:top-36 space-y-4 sm:space-y-6">
            <div className="pt-2 pb-1">
              <motion.h2
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111315] font-['Poppins',sans-serif] tracking-tight leading-[1.32] sm:leading-[1.35] pt-1.5 pb-1 block"
              >
                {t("about.track.title1", "Driven by Reliability,")}{" "}
                <br className="hidden lg:inline" />
                <span className="text-[#FF5500] block mt-1 sm:mt-2">{t("about.track.title2", "Measured by Results.")}</span>
              </motion.h2>
            </div>

            <div>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#625D55] font-['Outfit',sans-serif] text-sm sm:text-base leading-relaxed max-w-md"
              >
                {t("about.track.intro", "Real-world fleet performance telemetry and guaranteed uptime metrics powering industrial manufacturing corridors, healthcare lifelines, and high-stakes events across Maharashtra.")}
              </motion.p>
            </div>
          </div>

          {/* RIGHT COLUMN: 2x2 Bento Metric Grid (Col 7) */}
          <div className="lg:col-span-7">
            {/* Mobile View: 2 Cards Paired Grid with Animated Reveal (< sm) */}
            <div className="grid grid-cols-2 gap-3 sm:hidden w-full">
              {stats.map((stat, idx) => (
                <motion.div
                  key={`mobile-stat-${idx}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white rounded-2xl p-4 border border-[#E8E2D9] shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold tracking-tight font-['Poppins',sans-serif] block text-[#FF5500]">
                      {stat.value}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-[#111315] mt-1.5 font-['Poppins',sans-serif] leading-tight">
                      {stat.label}
                    </h3>
                  </div>
                  <p className="text-[10px] text-[#625D55] font-['Outfit',sans-serif] mt-1.5 leading-relaxed line-clamp-2">
                    {stat.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Desktop 2-Column Bento Grid (sm and above) */}
            <div className="hidden sm:grid sm:grid-cols-2 gap-5 sm:gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.65,
                    delay: idx * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.25, ease: "easeOut" },
                  }}
                  className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-9 border border-[#E8E2D9] shadow-xs hover:border-[#FF5500]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden min-h-[220px] sm:min-h-[260px]"
                >
                  {/* Subtle Laser Horizon Accent on Hover */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF5500] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  />

                  <div>
                    {/* Monumental Numeral Display - 100% visible, crisp color transition on card hover */}
                    <span className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#111315] tracking-tight font-['Poppins',sans-serif] block group-hover:text-[#FF5500] transition-colors leading-none">
                      {stat.value}
                    </span>

                    <h3 className="text-base sm:text-lg font-bold text-[#111315] mt-4 sm:mt-5 font-['Poppins',sans-serif]">
                      {stat.label}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#625D55] font-['Outfit',sans-serif] mt-2 leading-relaxed">
                    {stat.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
