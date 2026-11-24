"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";
import type { IconName, ProductDetailsData } from "@/components/common";

export interface GeneratorItem extends ProductDetailsData {
  icon: IconName;
  application?: string;
  recommendedLoads?: string;
}

export interface OperationalPillar {
  id: string;
  image: string;
  titleKey: string;
  descKey: string;
  f1Key: string;
  f2Key: string;
  f3Key: string;
}

const OPERATIONAL_PILLARS: OperationalPillar[] = [
  {
    id: "rapid-dispatch",
    image: "/images/generators/truck_orange_generator.jpg",
    titleKey: "advantage.pillar1.title",
    descKey: "advantage.pillar1.desc",
    f1Key: "advantage.pillar1.f1",
    f2Key: "advantage.pillar1.f2",
    f3Key: "advantage.pillar1.f3",
  },
  {
    id: "acoustic-silence",
    image: "/images/services/generator_only_bg.jpg",
    titleKey: "advantage.pillar2.title",
    descKey: "advantage.pillar2.desc",
    f1Key: "advantage.pillar2.f1",
    f2Key: "advantage.pillar2.f2",
    f3Key: "advantage.pillar2.f3",
  },
  {
    id: "turnkey-crew",
    image: "/images/services/service_engineer_bg.jpg",
    titleKey: "advantage.pillar3.title",
    descKey: "advantage.pillar3.desc",
    f1Key: "advantage.pillar3.f1",
    f2Key: "advantage.pillar3.f2",
    f3Key: "advantage.pillar3.f3",
  },
  {
    id: "dual-redundancy",
    image: "/images/services/generator_engine_bg.jpg",
    titleKey: "advantage.pillar4.title",
    descKey: "advantage.pillar4.desc",
    f1Key: "advantage.pillar4.f1",
    f2Key: "advantage.pillar4.f2",
    f3Key: "advantage.pillar4.f3",
  },
];

interface GeneratorRangeClientProps {
  generators?: GeneratorItem[];
}

/**
 * The Sarvadnya Advantage: Monolithic Kinetic Pillars
 *
 * Clean architectural hover-driven pillars with authentic background images:
 * - Pure plain background (zero grid boxes / zero boxy pattern)
 * - Pure uncluttered cards (zero top pill badges, zero standard chips, zero tagline clutter)
 * - Smooth kinetic flex expansion on desktop hover
 * - Fluid vertical accordion on mobile
 */
export function GeneratorRangeClient({}: GeneratorRangeClientProps) {
  const { t } = useLanguage();
  const [activePillar, setActivePillar] = useState<number>(0);
  const [activeMobileIndex, setActiveMobileIndex] = useState<number | null>(0);

  return (
    <div className="w-full bg-[#FAF8F5] py-14 sm:py-18 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E8E2D9] relative">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-8 sm:gap-10 lg:gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-4xl text-left">
          <div className="inline-flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#FF5500]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FF5500] font-['Outfit',sans-serif]">
              {t("advantage.eyebrow", "THE SARVADNYA ADVANTAGE")}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#111315] font-['Poppins',sans-serif] tracking-tight leading-[1.22] pt-1">
            {t("advantage.title", "Engineered Operational Trust")}
          </h2>

          <p className="text-sm sm:text-base text-[#524E48] font-['Outfit',sans-serif] leading-relaxed pt-1">
            {t(
              "advantage.desc",
              "Why Maharashtra’s premier manufacturing plants, hospital networks, and flagship cultural events rely on Sarvadnya for zero-blackout continuous power."
            )}
          </p>
        </div>

        {/* =========================================================================
            DESKTOP VIEW (lg:flex): Clean Kinetic Pillars with Hover Expansion
            ========================================================================= */}
        <div
          className="hidden lg:flex w-full h-[480px] xl:h-[520px] gap-3.5 xl:gap-4 items-stretch"
          onMouseLeave={() => setActivePillar(0)}
        >
          {OPERATIONAL_PILLARS.map((pillar, idx) => {
            const isActive = activePillar === idx;

            return (
              <div
                key={pillar.id}
                onMouseEnter={() => setActivePillar(idx)}
                className={cn(
                  "relative rounded-2xl xl:rounded-3xl overflow-hidden cursor-pointer select-none group border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  isActive
                    ? "flex-[2.8] border-[#FF5500]/60 shadow-2xl shadow-[#FF5500]/10"
                    : "flex-1 border-[#E8E2D9] hover:border-white/40"
                )}
              >
                {/* Background Image */}
                <Image
                  src={pillar.image}
                  alt={t(pillar.titleKey)}
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  priority={idx === 0}
                  className={cn(
                    "object-cover object-center transition-all duration-700 ease-out",
                    isActive
                      ? "scale-105 filter-none"
                      : "scale-100 brightness-[0.7] saturate-[0.8] group-hover:brightness-[0.85]"
                  )}
                />

                {/* Dark Multi-Gradient Architectural Overlay */}
                <div
                  className={cn(
                    "absolute inset-0 transition-opacity duration-500",
                    isActive
                      ? "bg-gradient-to-t from-[#0e1012] via-[#0e1012]/80 to-[#0e1012]/35"
                      : "bg-gradient-to-t from-[#0e1012] via-[#0e1012]/85 to-[#0e1012]/50 group-hover:opacity-90"
                  )}
                />

                {/* Ambient Top Laser Line */}
                <div
                  className={cn(
                    "absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#FF5500] to-transparent transition-opacity duration-500 z-20",
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  )}
                />

                {/* Pillar Content: Placed at bottom with zero clutter */}
                <div className="relative z-10 w-full h-full p-6 xl:p-8 flex flex-col justify-end text-white overflow-hidden">
                  {/* Clean Title */}
                  <h3 className="text-xl xl:text-2xl font-bold font-['Poppins',sans-serif] text-white leading-snug">
                    {t(pillar.titleKey)}
                  </h3>

                  {/* Expanded Active Content: Operational Description + 3 Proof Points */}
                  {isActive && (
                    <div className="flex flex-col pt-3 animate-fadeIn">
                      <p className="text-xs xl:text-sm text-white/85 font-['Outfit',sans-serif] leading-relaxed mb-4">
                        {t(pillar.descKey)}
                      </p>

                      {/* 3 Bullet Proof Points */}
                      <div className="space-y-2 pt-3 border-t border-white/15">
                        {[pillar.f1Key, pillar.f2Key, pillar.f3Key].map((fKey, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs xl:text-sm text-white/85">
                            <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                            <span className="leading-tight">{t(fKey)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================================
            MOBILE & TABLET VIEW (lg:hidden): Stacked Clean Kinetic Cards
            ========================================================================= */}
        <div className="flex lg:hidden flex-col gap-3.5 sm:gap-4 w-full">
          {OPERATIONAL_PILLARS.map((pillar, idx) => {
            const isExpanded = activeMobileIndex === idx;

            return (
              <div
                key={pillar.id}
                onClick={() => setActiveMobileIndex(isExpanded ? null : idx)}
                className={cn(
                  "relative rounded-2xl overflow-hidden cursor-pointer select-none border transition-all duration-300",
                  isExpanded
                    ? "border-[#FF5500]/60 shadow-lg shadow-[#FF5500]/10"
                    : "border-[#E8E2D9] bg-[#111315]"
                )}
              >
                {/* Background Image */}
                <Image
                  src={pillar.image}
                  alt={t(pillar.titleKey)}
                  fill
                  sizes="100vw"
                  className={cn(
                    "object-cover object-center transition-all duration-500",
                    isExpanded ? "scale-105 filter-none" : "scale-100 brightness-[0.65]"
                  )}
                />

                {/* Dark Gradient Overlay */}
                <div
                  className={cn(
                    "absolute inset-0 transition-opacity duration-300",
                    isExpanded
                      ? "bg-gradient-to-t from-[#0e1012] via-[#0e1012]/85 to-[#0e1012]/40"
                      : "bg-gradient-to-t from-[#0e1012] via-[#0e1012]/90 to-[#0e1012]/55"
                  )}
                />

                {/* Top Accent Laser */}
                {isExpanded && (
                  <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#FF5500] to-transparent z-20" />
                )}

                {/* Card Content */}
                <div className="relative z-10 p-5 sm:p-6 text-white flex flex-col justify-between">
                  {/* Title Row with smooth chevron toggle */}
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg sm:text-xl font-bold font-['Poppins',sans-serif] text-white leading-snug">
                      {t(pillar.titleKey)}
                    </h3>

                    <div
                      className={cn(
                        "size-7 rounded-full bg-white/10 shrink-0 flex items-center justify-center text-white/80 transition-transform duration-300",
                        isExpanded && "rotate-180 bg-[#FF5500] text-white"
                      )}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Expandable Accordion Body */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden pt-3 mt-3 border-t border-white/15"
                      >
                        <p className="text-xs sm:text-sm text-white/85 font-['Outfit',sans-serif] leading-relaxed mb-3">
                          {t(pillar.descKey)}
                        </p>

                        <div className="space-y-2 pt-2 border-t border-white/10">
                          {[pillar.f1Key, pillar.f2Key, pillar.f3Key].map((fKey, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 text-xs text-white/80">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5500] shrink-0 mt-0.5" />
                              <span className="leading-tight">{t(fKey)}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
