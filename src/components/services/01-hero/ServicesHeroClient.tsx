"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, ArrowRight, ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const SCENES = [
  {
    id: "engineering",
    label: "Certified Engineering",
    image: "/images/services/service_engineer_bg.jpg",
    alt: "Certified Sarvadnya Generator Engineer Servicing Acoustic Canopy",
  },
  {
    id: "fleet",
    label: "Rapid Fleet Dispatch",
    image: "/images/generators/truck_orange_generator.jpg",
    alt: "Sarvadnya Mobile Generator Fleet Truck in Transit",
  },
];

const SCENE_DURATION = 3000; // Strictly 3.0 seconds per scene change

/**
 * ServicesHeroClient Component
 * 
 * Fullscreen Cinematic Services Hero:
 * - 100% Edge-to-Edge Fullscreen stage with auto-cycling crystal-clear 2.7K action photography
 * - Auto-advances every 3 seconds with smooth 0.85s kinetic crossfade
 * - Pure minimal luxury: Zero unwanted pill badges, zero top/bottom telemetry clutter
 * - Masked kinetic curtain typography protecting Devanagari (Marathi & Hindi) matras from clipping
 * - Dual direct dispatch action buttons
 */
export function ServicesHeroClient() {
  const { t } = useLanguage();
  const [activeScene, setActiveScene] = useState(0);

  // Auto-advance scenes strictly every 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveScene((prev) => (prev + 1) % SCENES.length);
    }, SCENE_DURATION);

    return () => clearTimeout(timer);
  }, [activeScene]);

  const scrollToWorkflow = () => {
    const el = document.getElementById("process-workflow") || document.getElementById("applications");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentScene = SCENES[activeScene] || SCENES[0];

  return (
    <section className="relative w-full min-h-[70vh] lg:h-[85vh] lg:min-h-[640px] max-h-[820px] flex items-end overflow-hidden group bg-[#0D0E10] select-none border-b border-white/10">
      
      {/* ========================================================================
          1. FULLSCREEN 100% EDGE-TO-EDGE CINEMATIC BACKGROUND
          ======================================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentScene.id}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1.0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={currentScene.image}
              alt={currentScene.alt}
              fill
              priority
              unoptimized
              sizes="100vw"
              className="object-cover object-center filter contrast-[1.05] transition-transform duration-1000 group-hover:scale-[1.05]"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ========================================================================
          2. FOREGROUND EDITORIAL CONTENT (ZERO CLUTTER - 85% PRESENCE)
          ======================================================================== */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[60px] pb-10 sm:pb-14 lg:pb-18">
        <div className="max-w-4xl lg:max-w-[85%] flex flex-col items-start text-left space-y-3 sm:space-y-4">

          {/* Masked Kinetic Headline with Generous Matra Headroom */}
          <div className="overflow-hidden pt-2 sm:pt-3 pb-1 px-1">
            <motion.h1
              initial={{ y: "115%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-[66px] font-extrabold text-white tracking-tight leading-[1.18] sm:leading-[1.12] font-['Poppins',sans-serif] pt-1 pb-1 drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]"
            >
              <span className="block text-white">
                {t("services.hero.title1", "Uninterrupted Power,")}
              </span>
              <span className="block text-[#FF5500] mt-1 sm:mt-1.5">
                {t("services.hero.title2", "Engineered for Zero Downtime")}
              </span>
            </motion.h1>
          </div>

          {/* Masked Subtitle Narrative */}
          <div className="overflow-hidden pt-1 pb-1 max-w-2xl sm:max-w-3xl">
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/95 text-xs sm:text-base lg:text-lg leading-relaxed font-['Outfit',sans-serif] font-medium drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]"
            >
              {t(
                "services.hero.subtitle",
                "From continuous industrial manufacturing and critical healthcare facilities to grand weddings and high-profile festivals, Sarvadnya delivers 24/7 turnkey silent generator rentals, fuel logistics, and rapid 60-minute emergency dispatch across Nashik and Maharashtra."
              )}
            </motion.p>
          </div>

          {/* Action Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-2 sm:pt-4"
          >
            <a
              href="tel:+916262629944"
              className="px-8 py-4 bg-[#FF5500] hover:bg-[#E04400] text-white font-bold rounded-xl transition-all transform hover:scale-[1.02] active:scale-98 flex items-center gap-3 shadow-lg shadow-[#FF5500]/30 text-sm sm:text-base uppercase tracking-wider cursor-pointer group/btn"
            >
              <PhoneCall className="w-4.5 h-4.5 shrink-0" />
              <span>{t("services.hero.directDispatch", "Direct Dispatch: +91 62626 29944")}</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-300 shrink-0" />
            </a>

            <button
              type="button"
              onClick={scrollToWorkflow}
              className="px-7 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-xl border border-white/20 hover:border-white/40 transition-all flex items-center gap-2.5 text-sm sm:text-base uppercase tracking-wider cursor-pointer group/btn"
            >
              <span>View Rental Process</span>
              <ChevronDown className="w-4.5 h-4.5 text-white/70 group-hover/btn:text-white group-hover/btn:translate-y-0.5 transition-all" />
            </button>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
