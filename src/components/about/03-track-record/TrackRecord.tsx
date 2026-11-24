"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

/**
 * TrackRecord Component
 *
 * Ultra-Premium Operational Impact Section with The Cube Metric Grid Stagger:
 * - Desktop: Symmetric 4-column luxury metric architecture with sequential pop reveals
 * - Mobile: Fluid horizontal touch-snap carousel with dot pagination
 * - 100% design preserved with elevated motion physics
 */
export function TrackRecord() {
  const { t } = useLanguage();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  const handleScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement;
    if (!card) return;
    const cardWidth = card.offsetWidth + 16;
    const index = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), stats.length - 1));
  };

  const scrollToIndex = (index: number) => {
    const el = carouselRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement;
    if (!card) return;
    const cardWidth = card.offsetWidth + 16;
    el.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  return (
    <section className="w-full py-16 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 bg-[#FAF8F5] border-b border-[#E8E2D9] relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Asymmetric 2-Column Architectural Layout (The Cube Reference 2: Heading Left, 2-Column Metrics Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Heading & Narrative Context (Col 5) */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full lg:sticky lg:top-36 space-y-4 sm:space-y-6">
            <div className="overflow-hidden pt-3 sm:pt-4 pb-1">
              <motion.h2
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111315] font-['Poppins',sans-serif] tracking-tight leading-[1.26] sm:leading-[1.3] pt-1.5 block"
              >
                {t("about.track.title1", "Driven by Reliability,")}{" "}
                <br className="hidden lg:inline" />
                <span className="text-[#FF5500] block mt-1 sm:mt-2">{t("about.track.title2", "Measured by Results.")}</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#625D55] font-['Outfit',sans-serif] text-sm sm:text-base leading-relaxed mt-4 sm:mt-5 max-w-md"
              >
                {t("about.track.intro", "Real-world fleet performance telemetry and guaranteed uptime metrics powering industrial manufacturing corridors, healthcare lifelines, and high-stakes events across Maharashtra.")}
              </motion.p>
            </div>


          </div>

          {/* RIGHT COLUMN: 2x2 Bento Metric Grid (Col 7) */}
          <div className="lg:col-span-7">
            {/* Mobile View: Horizontal Touch-Snap Carousel (< sm) */}
            <div className="block sm:hidden w-full">
              <div
                ref={carouselRef}
                onScroll={handleScroll}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar touch-pan-x -mx-4 px-4 pb-4 pt-1 scroll-smooth"
              >
                {stats.map((stat, idx) => (
                  <motion.div
                    key={`mobile-stat-${idx}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="w-[80vw] max-w-[300px] shrink-0 snap-center bg-white rounded-2xl p-6 border border-[#E8E2D9] shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-4xl font-extrabold text-[#111315] tracking-tight font-['Poppins',sans-serif] block text-[#FF5500]">
                        {stat.value}
                      </span>
                      <h3 className="text-base font-bold text-[#111315] mt-3 font-['Poppins',sans-serif]">
                        {stat.label}
                      </h3>
                    </div>
                    <p className="text-xs text-[#625D55] font-['Outfit',sans-serif] mt-2 leading-relaxed">
                      {stat.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Dot Indicators & Arrow Navigation */}
              <div className="flex items-center justify-between pt-3 px-1">
                <div className="flex items-center gap-1.5">
                  {stats.map((_, i) => (
                    <button
                      key={`dot-${i}`}
                      type="button"
                      onClick={() => scrollToIndex(i)}
                      aria-label={`Go to metric ${i + 1}`}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                        activeIndex === i
                          ? "w-6 bg-[#FF5500]"
                          : "w-1.5 bg-[#DDD6CA] hover:bg-[#B8B0A2]"
                      )}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
                    disabled={activeIndex === 0}
                    className="p-1.5 rounded-full border border-[#E8E2D9] bg-white text-[#111315] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#FAF8F5] transition-colors cursor-pointer"
                    aria-label="Previous metric"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToIndex(Math.min(stats.length - 1, activeIndex + 1))}
                    disabled={activeIndex === stats.length - 1}
                    className="p-1.5 rounded-full border border-[#E8E2D9] bg-white text-[#111315] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#FAF8F5] transition-colors cursor-pointer"
                    aria-label="Next metric"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop 2-Column Bento Grid (sm and above) */}
            <div className="hidden sm:grid sm:grid-cols-2 gap-5 sm:gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 45, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.7,
                    delay: idx * 0.12,
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
                    {/* Monumental Numeral Pop-In */}
                    <div className="overflow-hidden">
                      <motion.span
                        initial={{ y: "75%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          delay: idx * 0.12 + 0.1,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#111315] tracking-tight font-['Poppins',sans-serif] block group-hover:text-[#FF5500] transition-colors leading-none"
                      >
                        {stat.value}
                      </motion.span>
                    </div>

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
