"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";
import { GENERATOR_IMAGES } from "@/constants";

interface OEMPartner {
  id: string;
  number: string;
  brandKey: string;
  brand: string;
  typeKey: string;
  defaultType: string;
  bestForKey: string;
  defaultBestFor: string;
  techKey: string;
  defaultTech: string;
  range: string;
  image: string;
}

const OEM_PARTNERS: OEMPartner[] = [
  {
    id: "cummins",
    number: "01",
    brandKey: "about.innovation.cumminsBrand",
    brand: "Cummins",
    typeKey: "about.innovation.cumminsType",
    defaultType: "Heavy Industrial Sets",
    bestForKey: "about.innovation.cumminsBestFor",
    defaultBestFor: "Manufacturing Plants & Large Infrastructure",
    techKey: "about.innovation.cumminsTech",
    defaultTech: "Turbocharged • Dual Electronic Governor • High-Altitude Protection",
    range: "65 – 250 kVA",
    image: GENERATOR_IMAGES.heavyIndustrial_250kva,
  },
  {
    id: "kirloskar",
    number: "02",
    brandKey: "about.innovation.kirloskarBrand",
    brand: "Kirloskar",
    typeKey: "about.innovation.kirloskarType",
    defaultType: "Prime Commercial Series",
    bestForKey: "about.innovation.kirloskarBestFor",
    defaultBestFor: "Luxury Banquets, Healthcare & Commercial Hubs",
    techKey: "about.innovation.kirloskarTech",
    defaultTech: "Sound-Attenuated Weatherproof Canopy • AMF Auto-Start Ready",
    range: "15 – 125 kVA",
    image: GENERATOR_IMAGES.industrial_125kva,
  },
  {
    id: "honda",
    number: "03",
    brandKey: "about.innovation.hondaBrand",
    brand: "Honda",
    typeKey: "about.innovation.hondaType",
    defaultType: "Portable Ultra-Silent",
    bestForKey: "about.innovation.hondaBestFor",
    defaultBestFor: "High-End Weddings, Acoustic Stage & LED Walls",
    techKey: "about.innovation.hondaTech",
    defaultTech: "Clean True Sine-Wave • Eco-Throttle Fuel Economy • Low Vibration",
    range: "5 – 10 kVA",
    image: GENERATOR_IMAGES.entry_5kva,
  },
  {
    id: "mahindra",
    number: "04",
    brandKey: "about.innovation.mahindraBrand",
    brand: "Mahindra",
    typeKey: "about.innovation.mahindraType",
    defaultType: "Construction & Prime",
    bestForKey: "about.innovation.mahindraBestFor",
    defaultBestFor: "Infrastructure Projects, Heavy Machinery & Events",
    techKey: "about.innovation.mahindraTech",
    defaultTech: "CRDi Fuel Injection • Rapid Cold-Start • High Fuel Economy",
    range: "15 – 65 kVA",
    image: GENERATOR_IMAGES.commercial_65kva,
  },
  {
    id: "leyland",
    number: "05",
    brandKey: "about.innovation.leylandBrand",
    brand: "Ashok Leyland",
    typeKey: "about.innovation.leylandType",
    defaultType: "High-Torque Industrial",
    bestForKey: "about.innovation.leylandBestFor",
    defaultBestFor: "Heavy Inductive Motor Loads, Quarries & Cold Storage",
    techKey: "about.innovation.leylandTech",
    defaultTech: "High Inductive Load Start • Continuous Heavy-Duty Endurance",
    range: "30 – 125 kVA",
    image: GENERATOR_IMAGES.midRange_30kva,
  },
];

/**
 * Innovation Component — The Cinematic Architectural Spec Stage
 *
 * Systematic & Silky Smooth Awwwards Architecture:
 * - Left Side: Stable, non-jumping editorial roster (Cummins, Kirloskar, Honda, Mahindra, Leyland).
 *   Hovering smoothly activates the brand without displacing or jumping surrounding elements.
 * - Right Side: Prominent, full-size Round Shape Portal (rounded-full) where the generator image
 *   fills the round canvas and transitions smoothly & cinematically with fluid spring physics.
 * - Zero card boxes, zero pill chips, zero layout jumps.
 * - 100% Sarvadnya luxury bright palette (#FAF8F5, #111315, #FF5500, #E8E2D9).
 */
export function Innovation() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activePartner = OEM_PARTNERS[activeIndex] || OEM_PARTNERS[0];

  return (
    <section className="w-full py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-12 flex flex-col items-center bg-[#FAF8F5] border-b border-[#E8E2D9] relative z-10 overflow-hidden">
      {/* Subtle Warm Amber Volumetric Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#FF5500]/[0.035] blur-[140px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 w-full">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center mb-12 sm:mb-16">
          <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#FF5500] mb-2 sm:mb-2.5">
            {t("about.innovation.eyebrow", "Authorized Tier-1 OEM Fleet Engineering")}
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111315] font-['Poppins',sans-serif] tracking-tight leading-[1.26] sm:leading-[1.3] pt-1.5 pb-1 inline-block">
            {t("about.innovation.title1", "Expanding Horizons for")}{" "}
            <span className="text-[#FF5500]">
              {t("about.innovation.title2", "Sustainable Power")}
            </span>
          </h2>

          <p className="text-[#403C36] text-center font-['Outfit',sans-serif] text-sm sm:text-base lg:text-lg leading-relaxed mt-3 sm:mt-4 max-w-2xl">
            {t(
              "about.innovation.desc",
              "Over the next five years, Sarvadnya Generators aims to expand fleet capacity across Maharashtra, introducing advanced fuel-efficient, CPCB-IV+ compliant silent systems and remaining the primary partner for industrial and flagship event power solutions."
            )}
          </p>
        </div>

        {/* 
          ========================================================================
          MASTER SPLIT CINEMATIC STAGE (Zero Layout Jumps, 100% Silky Smooth)
          - Left: Hairline Editorial Brand Roster with stable hover activation
          - Right: Full-Scale Round Shape Portal with cinematic cross-fading imagery
          ========================================================================
        */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Brand Roster (Col 7) */}
          <div className="lg:col-span-7 flex flex-col gap-2.5 sm:gap-3">
            {OEM_PARTNERS.map((partner, idx) => {
              const isActive = activeIndex === idx;

              return (
                <div
                  key={partner.id}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className={cn(
                    "w-full rounded-2xl sm:rounded-3xl py-4 sm:py-5 lg:py-5 px-4 sm:px-6 transition-all duration-300 ease-out cursor-pointer select-none relative overflow-hidden",
                    isActive
                      ? "bg-white border border-[#E8E2D9] shadow-md shadow-black/[0.04]"
                      : "bg-white/40 hover:bg-white/80 border border-transparent"
                  )}
                >
                  {/* Active Indicator Left Accent Line */}
                  {isActive && (
                    <motion.div
                      layoutId="active-indicator-bar"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#FF5500] rounded-l-2xl sm:rounded-l-3xl"
                      transition={{ type: "spring", stiffness: 350, damping: 32 }}
                    />
                  )}

                  {/* Header Row: Number + Brand + Output Band */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span
                        className={cn(
                          "font-mono text-xs sm:text-sm font-bold transition-colors duration-300",
                          isActive ? "text-[#FF5500]" : "text-[#A0988E]"
                        )}
                      >
                        {partner.number}
                      </span>
                      <h3
                        className={cn(
                          "font-sans font-black tracking-tight transition-all duration-300",
                          isActive
                            ? "text-2xl sm:text-3xl lg:text-[34px] text-[#111315]"
                            : "text-xl sm:text-2xl text-[#625D55] opacity-50 hover:opacity-80"
                        )}
                      >
                        {t(partner.brandKey, partner.brand)}
                      </h3>
                    </div>

                    <div
                      className={cn(
                        "rounded-full px-3.5 sm:px-4 py-1 sm:py-1.5 transition-all duration-300 shrink-0 border flex items-center justify-center",
                        isActive
                          ? "bg-[#FFF7EB] border-[#FF5500]/40 text-[#FF5500] shadow-2xs"
                          : "bg-white border-[#E8E2D9] text-[#111315]"
                      )}
                    >
                      <span className="font-mono text-xs sm:text-sm font-bold tracking-tight">
                        {partner.range}
                      </span>
                    </div>
                  </div>

                  {/* Expanded Active Narrative (Opens smoothly with height animation) */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden pl-7 sm:pl-10 pt-2"
                      >
                        {/* Category Subtitle */}
                        <p className="text-xs sm:text-sm font-bold text-[#FF5500] font-['Outfit',sans-serif] mb-1">
                          {t(partner.typeKey, partner.defaultType)}
                        </p>

                        {/* Tech Specs */}
                        <p className="text-xs sm:text-sm text-[#524E48] font-['Outfit',sans-serif] leading-relaxed max-w-lg font-normal mb-1">
                          {t(partner.techKey, partner.defaultTech)}
                        </p>

                        {/* Ideal For Note */}
                        <p className="text-xs text-[#71695F] font-['Outfit',sans-serif]">
                          <span className="font-semibold text-[#1F1F1E]">
                            {t("about.innovation.idealDeployment", "Ideal Deployment:")}{" "}
                          </span>
                          {t(partner.bestForKey, partner.defaultBestFor)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Full-Scale Floating Generator Visual (Circle background removed) */}
          <div className="lg:col-span-5 flex items-center justify-center py-6 lg:py-0">
            <div className="relative w-full max-w-[440px] h-[280px] sm:h-[340px] lg:h-[380px] flex items-center justify-center">
              {/* Subtle Ambient Volumetric Warmth (No circle border or container) */}
              <div className="absolute w-[280px] h-[180px] bg-[#FF5500]/[0.06] blur-[60px] rounded-full pointer-events-none" />

              {/* Generator Machinery Image: Floating clean and prominent */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePartner.id}
                  initial={{ opacity: 0, scale: 0.92, y: 14 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.05, y: -14 }}
                  transition={{
                    duration: 0.42,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative z-10 w-full h-full flex items-center justify-center"
                >
                  <motion.div
                    animate={{ y: [-4, 4, -4] }}
                    transition={{
                      repeat: Infinity,
                      duration: 4.2,
                      ease: "easeInOut",
                    }}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    <Image
                      src={activePartner.image}
                      alt={`${t(activePartner.brandKey, activePartner.brand)} Generator Machinery`}
                      fill
                      sizes="(max-width: 1024px) 340px, 440px"
                      className="object-contain filter drop-shadow-[0_20px_32px_rgba(31,31,30,0.18)]"
                      priority
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
export default Innovation;
