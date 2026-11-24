"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import {
  Factory,
  Sparkles,
  Truck,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";

interface VerticalFeature {
  id: string;
  number: string;
  titleKey: string;
  descKey: string;
  defaultTitle: string;
  defaultDesc: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  image: string;
  alt: string;
}

const VERTICALS: VerticalFeature[] = [
  {
    id: "industrial",
    number: "01",
    titleKey: "services.vertical1.title",
    descKey: "services.vertical1.desc",
    defaultTitle: "Industrial & Heavy Manufacturing",
    defaultDesc:
      "High-capacity silent DG sets from 65 kVA to 250 kVA engineered for continuous manufacturing, infrastructure, and heavy plant operations.",
    icon: Factory,
    href: "/generators",
    image: "/images/generators/generator_10.png",
    alt: "Heavy Industrial Diesel Generator Set 250 kVA",
  },
  {
    id: "events",
    number: "02",
    titleKey: "services.vertical2.title",
    descKey: "services.vertical2.desc",
    defaultTitle: "Event & Wedding Silent Power",
    defaultDesc:
      "Acoustic-shielded silent generators for luxury weddings, grand concerts, and VIP festivals with certified zero noise disruption.",
    icon: Sparkles,
    href: "/contact?service=events",
    image: "/images/generators/generator_38.png",
    alt: "Acoustic Silent Generator for Weddings and Events",
  },
  {
    id: "emergency",
    number: "03",
    titleKey: "services.vertical3.title",
    descKey: "services.vertical3.desc",
    defaultTitle: "60-Minute Emergency Dispatch",
    defaultDesc:
      "Nashik's fastest 60-minute emergency deployment. Mobile DG units mobilized immediately with heavy hydraulic cranes to prevent power failure.",
    icon: Truck,
    href: "tel:+916262629944",
    image: "/images/generators/truck_orange_generator.jpg",
    alt: "Hydraulic Crane Emergency Generator Truck",
  },
  {
    id: "maintenance",
    number: "04",
    titleKey: "services.vertical4.title",
    descKey: "services.vertical4.desc",
    defaultTitle: "Comprehensive AMC & Fuel Logistics",
    defaultDesc:
      "Complete Annual Maintenance Contracts, automated diesel logistics, and dedicated certified electrical engineers stationed on site.",
    icon: ShieldCheck,
    href: "/contact?service=amc",
    image: "/images/services/service_engineer_bg.jpg",
    alt: "Certified Generator Maintenance Engineer",
  },
];

/**
 * ServiceVerticals Component
 *
 * Refined Scroll-Based Feature Showcase:
 * - 100% Scroll-Driven: Scrolling down smoothly advances through the 4 service verticals (01 -> 02 -> 03 -> 04)
 * - Left Column: Clean editorial typography with expanding vertical tabs (Calendly-style) and diagonal arrow pills
 * - Right Column: PURE IMAGE ONLY (No cards, no background boxes, no data text) — high-resolution generator
 *   floating with ambient warmth glow and subtle drop shadow
 * - Signature Light Luxury Palette (#FAF8F5 canvas, #111315 typography, #FF5500 brand accent, #E8E2D9 borders)
 * - Complete localization with generous vertical line clearance
 */
export function ServiceVerticals() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 100% Scroll-Based Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const total = VERTICALS.length;
    const index = Math.min(total - 1, Math.max(0, Math.floor(latest * total)));
    setActiveIndex(index);
  });

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    if (!containerRef.current) return;
    const scrollTarget =
      containerRef.current.offsetTop +
      (index / VERTICALS.length) * containerRef.current.offsetHeight +
      15;
    window.scrollTo({ top: scrollTarget, behavior: "smooth" });
  };

  const activeVertical = VERTICALS[activeIndex];

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[280vh] bg-[#FAF8F5] border-b border-[#E8E2D9] z-10"
    >
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-4 sm:px-6 lg:px-12 xl:px-16 overflow-hidden bg-[#FAF8F5]">
        <div className="max-w-7xl w-full mx-auto my-auto py-6 sm:py-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-16 items-center">
            
            {/* ===================================================================
                LEFT COLUMN: Editorial Headline & Interactive Accordion List (Col 6)
                =================================================================== */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              
              {/* Monumental Display Headline */}
              <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-extrabold text-[#111315] font-['Poppins',sans-serif] tracking-tight leading-[1.2] sm:leading-[1.18] mb-3 sm:mb-4">
                {t("services.verticals.titlePart1", "Specialized Power")}{" "}
                <span className="text-[#FF5500]">
                  {t("services.verticals.titlePart2", "Service Verticals")}
                </span>
              </h2>

              <p className="text-xs sm:text-base text-[#625D55] font-['Outfit',sans-serif] leading-relaxed mb-4 sm:mb-6 max-w-lg">
                {t(
                  "services.verticals.subtitle",
                  "Turnkey silent generator rentals and mission-critical power solutions engineered for zero downtime across Nashik and Maharashtra."
                )}
              </p>

              {/* Fine Hairline Divider */}
              <div className="w-full h-px bg-[#E8E2D9] mb-2 sm:mb-4" />

              {/* Interactive Accordion Tabs */}
              <div className="flex flex-col divide-y divide-[#E8E2D9]">
                {VERTICALS.map((vertical, idx) => {
                  const isActive = activeIndex === idx;
                  const Icon = vertical.icon;
                  const title = t(vertical.titleKey, vertical.defaultTitle);
                  const desc = t(vertical.descKey, vertical.defaultDesc);
                  const isPhone = vertical.href.startsWith("tel:");

                  return (
                    <div
                      key={vertical.id}
                      onClick={() => handleItemClick(idx)}
                      className={cn(
                        "py-3.5 sm:py-4.5 transition-all duration-300 cursor-pointer select-none group relative",
                        isActive ? "opacity-100" : "opacity-40 hover:opacity-75"
                      )}
                    >
                      {/* Header Row: Icon + Title + Arrow Button */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 sm:gap-3.5">
                          <div
                            className={cn(
                              "size-8 sm:size-9 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0",
                              isActive
                                ? "bg-[#FF5500] text-white shadow-sm shadow-[#FF5500]/25"
                                : "bg-white border border-[#E8E2D9] text-[#71695F] group-hover:text-[#111315]"
                            )}
                          >
                            <Icon className="size-4" />
                          </div>

                          <h3
                            className={cn(
                              "font-sans font-bold tracking-tight transition-colors duration-300",
                              isActive
                                ? "text-base sm:text-lg lg:text-xl text-[#111315]"
                                : "text-sm sm:text-base lg:text-lg text-[#524E48] group-hover:text-[#111315]"
                            )}
                          >
                            {title}
                          </h3>
                        </div>

                        {/* Diagonal Arrow Link (Calendly Style) */}
                        {isPhone ? (
                          <a
                            href={vertical.href}
                            onClick={(e) => e.stopPropagation()}
                            className={cn(
                              "size-7 sm:size-8 rounded-lg flex items-center justify-center transition-all duration-300 shrink-0 border",
                              isActive
                                ? "bg-[#FF5500]/10 border-[#FF5500]/30 text-[#FF5500] translate-x-0.5 -translate-y-0.5"
                                : "bg-white border-[#E8E2D9] text-[#8C847A] group-hover:border-[#FF5500]/40 group-hover:text-[#FF5500]"
                            )}
                          >
                            <ArrowUpRight className="size-3.5 sm:size-4" />
                          </a>
                        ) : (
                          <Link
                            href={vertical.href}
                            onClick={(e) => e.stopPropagation()}
                            className={cn(
                              "size-7 sm:size-8 rounded-lg flex items-center justify-center transition-all duration-300 shrink-0 border",
                              isActive
                                ? "bg-[#FF5500]/10 border-[#FF5500]/30 text-[#FF5500] translate-x-0.5 -translate-y-0.5"
                                : "bg-white border-[#E8E2D9] text-[#8C847A] group-hover:border-[#FF5500]/40 group-hover:text-[#FF5500]"
                            )}
                          >
                            <ArrowUpRight className="size-3.5 sm:size-4" />
                          </Link>
                        )}
                      </div>

                      {/* Smooth Expanding Accordion Description */}
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden pl-11 sm:pl-12.5"
                          >
                            <p className="text-xs sm:text-sm text-[#625D55] font-['Outfit',sans-serif] leading-relaxed pt-2 pb-0.5 max-w-md">
                              {desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* ===================================================================
                RIGHT COLUMN: PURE IMAGE ONLY (Col 6)
                Zero background cards, zero data text clutter — high-resolution visual
                =================================================================== */}
            <div className="lg:col-span-6 w-full flex items-center justify-center">
              <div className="relative w-full max-w-[320px] sm:max-w-[440px] lg:max-w-[520px] h-[220px] sm:h-[320px] lg:h-[400px] flex items-center justify-center">
                
                {/* Subtle Ambient Volumetric Warmth Glow */}
                <div
                  aria-hidden="true"
                  className="absolute w-[280px] sm:w-[380px] h-[180px] sm:h-[240px] bg-[#FF5500]/[0.05] blur-[70px] rounded-full pointer-events-none"
                />

                {/* Floating Generator Imagery (Only Image, No Data) */}
                <AnimatePresence mode="wait">
                  {(() => {
                    const isPhoto = activeVertical.image.endsWith(".jpg");
                    return (
                      <motion.div
                        key={activeVertical.id}
                        initial={{ opacity: 0, scale: 0.94, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1.04, y: -16 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className={cn(
                          "relative z-10 w-full h-full flex items-center justify-center filter drop-shadow-[0_18px_30px_rgba(17,19,21,0.14)]",
                          isPhoto && "rounded-2xl sm:rounded-3xl lg:rounded-[36px] overflow-hidden border border-[#E8E2D9] shadow-lg"
                        )}
                      >
                        <Image
                          src={activeVertical.image}
                          alt={activeVertical.alt}
                          fill
                          priority
                          sizes="(max-width: 640px) 320px, (max-width: 1024px) 440px, 520px"
                          className={cn(
                            isPhoto
                              ? "object-cover rounded-2xl sm:rounded-3xl lg:rounded-[36px]"
                              : "object-contain"
                          )}
                        />
                      </motion.div>
                    );
                  })()}
                </AnimatePresence>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
