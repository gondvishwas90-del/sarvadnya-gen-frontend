"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { RollingText } from "../common/RollingText";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const STEP_KEYS: Record<string, { title: string; desc: string }> = {
  "01": {
    title: "contact.process.step1.title",
    desc: "contact.process.step1.desc",
  },
  "02": {
    title: "contact.process.step2.title",
    desc: "contact.process.step2.desc",
  },
  "03": {
    title: "contact.process.step3.title",
    desc: "contact.process.step3.desc",
  },
};

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "We’ll Review Your Enquiry",
    description:
      "Our senior electrical engineering team reviews your site parameters, harmonic loads, peak kVA demand, and acoustics within 60 minutes.",
  },
  {
    number: "02",
    title: "Discovery Call Or Site Visit",
    description:
      "We’ll arrange an immediate technical consultation or rapid on-site survey in Nashik to inspect distribution boards, cable length, and safety clearances.",
  },
  {
    number: "03",
    title: "Tailored Proposal Delivered",
    description:
      "You’ll receive a transparent, all-inclusive proposal detailing the exact CPCB-IV+ DG set capacity, heavy hydraulic mobilization, and turnkey fuel logistics.",
  },
];

/**
 * ForgeProcessCards Component (Bright Luxury Theme)
 * 
 * - Desktop: 3 Crisp white architectural cards in symmetric grid
 * - Mobile: Fluid horizontal touch-snap carousel with dot pagination
 */
export function ForgeProcessCards() {
  const { t } = useLanguage();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement;
    if (!card) return;
    const cardWidth = card.offsetWidth + 16;
    const index = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), PROCESS_STEPS.length - 1));
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
    <section className="relative w-full bg-[#FAF8F5] text-[#111315] py-14 sm:py-28 px-4 sm:px-10 lg:px-20 overflow-hidden select-none z-20">
      
      {/* Background Architectural Texture with Soft Ambient Wash */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: "url('/images/services/service_engineer_bg.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/90 to-[#FAF8F5]/95 pointer-events-none" />

      {/* Ambient Warm Golden-Amber Core Lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 size-[500px] bg-[#FF5500]/[0.05] blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 size-[500px] bg-amber-500/[0.04] blur-[160px] pointer-events-none" />

      <div className="max-w-[1500px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-2xl sm:text-5xl lg:text-6xl text-[#111315] font-normal leading-[1.15] sm:leading-[1.1] tracking-tight"
          >
            {t("contact.process.title", "A considered process built around you")}
          </motion.h2>
        </div>

        {/* Mobile Vertical Stacked Cards (< md) */}
        <div className="flex flex-col gap-4 md:hidden w-full">
          {PROCESS_STEPS.map((step) => (
            <div
              key={`mobile-step-${step.number}`}
              className="w-full flex flex-col justify-between p-5 rounded-2xl bg-white border border-[#E8E2D9] shadow-xs relative overflow-hidden"
            >
              {/* Ghost Watermark Numeral */}
              <span className="absolute -right-2 -top-4 font-sans font-black text-6xl text-[#1F1F1E]/[0.04] pointer-events-none select-none">
                {step.number}
              </span>

              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="size-8 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] flex items-center justify-center font-sans font-extrabold text-xs text-[#FF5500] shadow-2xs">
                    {step.number}
                  </span>
                  <div className="size-7 rounded-full bg-[#FAF8F5] border border-[#E8E2D9] flex items-center justify-center text-[#FF5500] shadow-2xs">
                    <ArrowUpRight className="size-3.5" />
                  </div>
                </div>

                <h3 className="font-serif text-base sm:text-lg text-[#111315] font-semibold tracking-tight leading-snug mb-2">
                  {t(STEP_KEYS[step.number]?.title || step.title, step.title)}
                </h3>

                <p className="font-sans text-xs text-[#625D55] leading-relaxed">
                  {t(STEP_KEYS[step.number]?.desc || step.description, step.description)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop 3 Process Cards Grid (Executive Luxury Architectural Stage) */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex flex-col justify-between p-7 sm:p-8 xl:p-10 rounded-2xl bg-white hover:bg-white border border-[#E8E2D9] hover:border-[#FF5500]/50 transition-all duration-500 shadow-xs hover:shadow-xl min-h-[auto] sm:min-h-[340px] overflow-hidden"
            >
              {/* Architectural Large Watermark Numeral */}
              <span className="absolute -right-3 -top-6 font-sans font-black text-7xl sm:text-8xl text-[#1F1F1E]/[0.03] group-hover:text-[#FF5500]/[0.08] pointer-events-none select-none transition-colors duration-500">
                {step.number}
              </span>

              {/* Top Accent Orange Beam on Hover */}
              <div className="absolute top-0 inset-x-8 h-1 bg-gradient-to-r from-transparent via-[#FF5500] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Top: Premium Numeral Badge Cluster */}
              <div className="flex items-center justify-between gap-3 relative z-10">
                <span className="size-10 sm:size-11 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] group-hover:border-[#FF5500]/40 group-hover:bg-[#FF5500]/10 flex items-center justify-center font-sans font-extrabold text-xs sm:text-sm text-[#111315] group-hover:text-[#FF5500] shadow-2xs transition-all duration-300">
                  {step.number}
                </span>
                <div className="size-8 rounded-full bg-[#FAF8F5] border border-[#E8E2D9] flex items-center justify-center text-[#FF5500] group-hover:bg-[#FF5500] group-hover:text-white group-hover:border-[#FF5500] transition-all duration-300 shadow-2xs">
                  <ArrowUpRight className="size-3.5" />
                </div>
              </div>

              {/* Bottom: Title & Narrative */}
              <div className="pt-10 relative z-10">
                <h3 className="font-serif text-[19px] sm:text-lg lg:text-xl xl:text-[22px] text-[#111315] font-normal tracking-tight leading-normal pt-1 mb-3 transition-colors duration-300">
                  <RollingText text={t(STEP_KEYS[step.number]?.title || step.title, step.title)} singleLine />
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#625D55] leading-relaxed transition-colors duration-300">
                  {t(STEP_KEYS[step.number]?.desc || step.description, step.description)}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}
