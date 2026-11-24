"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { HeroClient, HeroSlideData } from "./HeroClient";

interface SlideConfig extends HeroSlideData {
  title1Key: string;
  title1Default: string;
  title2Key: string;
  title2Default: string;
  descKey: string;
  descDefault: string;
  bgGradient: string;
  amberAccent: string;
}

const SLIDES: SlideConfig[] = [
  {
    id: "industrial",
    watermark: "250 kVA",
    title1Key: "hero.slide1.title1",
    title1Default: "Reliable Prime Power.",
    title2Key: "hero.slide1.title2",
    title2Default: "When It Matters Most.",
    descKey: "hero.slide1.desc",
    descDefault:
      "Specialized silent generator rental solutions engineered for heavy industrial operations, continuous production loads, and zero-downtime projects.",
    image: "/images/generators/generator_10.png",
    alt: "Sarvadnya Heavy Industrial Prime Power Generator",
    badge: "5 – 250 kVA Prime",
    bgGradient: "from-[#FAF8F5] via-[#FAF8F5]/85 to-[#FAF8F5]/40",
    amberAccent: "bg-[#FF5500]/[0.08]",
  },
  {
    id: "acoustic",
    watermark: "SILENT",
    title1Key: "hero.slide2.title1",
    title1Default: "Acoustic Soundproof.",
    title2Key: "hero.slide2.title2",
    title2Default: "Zero Noise Disruption.",
    descKey: "hero.slide2.desc",
    descDefault:
      "Ultra-quiet CPCB-II compliant power stations specifically calibrated for luxury weddings, banquets, and grand festivals.",
    image: "/images/generators/generator_27.png",
    alt: "Sarvadnya Acoustic Soundproof Event Generator",
    badge: "CPCB-II Soundproof",
    bgGradient: "from-[#F7F5F1] via-[#FAF8F5]/90 to-[#EDE7DD]/50",
    amberAccent: "bg-[#FF5500]/[0.06]",
  },
  {
    id: "mobile",
    watermark: "MOBILE",
    title1Key: "hero.slide3.title1",
    title1Default: "Autonomous Mobile Fleet.",
    title2Key: "hero.slide3.title2",
    title2Default: "24/7 Rapid Deployment.",
    descKey: "hero.slide3.desc",
    descDefault:
      "Heavy-duty mobile generator units with dedicated technician delivery and professional on-site setup across Nashik and Maharashtra.",
    image: "/images/generators/truck_orange_generator_transparent.png",
    alt: "Sarvadnya Mobile Fleet Generator Deployment",
    badge: "Maharashtra Fleet",
    bgGradient: "from-[#FAF6F0] via-[#FAF8F5]/85 to-[#F2EBE0]/60",
    amberAccent: "bg-[#FF5500]/[0.10]",
  },
];

/**
 * SlideView Component
 * Renders an entire self-contained full-bleed hero slide (Background + Typography + 3D Model Stage)
 */
function SlideView({ slide }: { slide: SlideConfig }) {
  const { t } = useLanguage();

  return (
    <div className="relative w-full h-full flex flex-col justify-center overflow-hidden flex-shrink-0 select-none">
      {/* 1. Full-Bleed Background & Lighting Atmosphere */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about/story-main.png"
          alt="Sarvadnya Industrial & Event Power Operations"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter saturate-[0.8] contrast-[1.05]"
        />

        {/* Luminous Ivory Scrim Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} pointer-events-none`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/70 via-transparent to-[#FAF8F5] pointer-events-none" />

        {/* Ambient Amber Warmth Glow */}
        <div
          className={`absolute top-1/4 right-1/4 w-[650px] h-[450px] ${slide.amberAccent} blur-[140px] rounded-full pointer-events-none`}
        />
      </div>

      {/* 2. Foreground Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-24 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: ONLY Heading & Short Description (Zero Buttons, Zero Pills) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5 sm:gap-6 max-w-2xl">
            <h1 className="font-sans font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#1F1F1E] tracking-tight leading-[1.12] text-balance">
              {t(slide.title1Key, slide.title1Default)}{" "}
              <br className="hidden sm:inline" />
              <span className="text-[#FF5500]">
                {t(slide.title2Key, slide.title2Default)}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#403C36] leading-relaxed max-w-xl font-normal">
              {t(slide.descKey, slide.descDefault)}
            </p>
          </div>

          {/* Right Column: 3D Stage with Floating Generator & Ghost Watermark */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <HeroClient currentSlide={slide} />
          </div>

        </div>
      </div>
    </div>
  );
}

/**
 * Hero Component
 * 
 * Re-architected with Seamless Dual-Panel Ribbon Slider:
 * - The INCOMING slide sits directly next to the CURRENT slide in a shared flex track (100% gapless)
 * - Glides gently and slowly from the LEFT (1.4s luxury cubic-bezier easeOut)
 * - Full background, lighting, and text slide together in complete synchronization
 * - Auto-cycles continuously
 */
export function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [incomingIdx, setIncomingIdx] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const transitionRef = useRef(false);

  // Trigger smooth slide from left
  const triggerSlideTo = useCallback((nextIdx: number) => {
    if (transitionRef.current) return;
    transitionRef.current = true;
    setIncomingIdx(nextIdx);
  }, []);

  // Auto-advance loop every 3.5 seconds
  useEffect(() => {
    if (isPaused || incomingIdx !== null) return;
    const timer = setInterval(() => {
      const nextIdx = (currentIdx + 1) % SLIDES.length;
      triggerSlideTo(nextIdx);
    }, 3500);

    return () => clearInterval(timer);
  }, [currentIdx, incomingIdx, isPaused, triggerSlideTo]);

  // Handle onAnimationComplete: seamlessly lock to the new slide
  const handleTransitionComplete = () => {
    if (incomingIdx !== null) {
      setCurrentIdx(incomingIdx);
      setIncomingIdx(null);
    }
    transitionRef.current = false;
  };

  const handleSelectSlide = (idx: number) => {
    if (idx === currentIdx || incomingIdx !== null) return;
    triggerSlideTo(idx);
  };

  const currentSlide = SLIDES[currentIdx];
  const incomingSlide = incomingIdx !== null ? SLIDES[incomingIdx] : null;

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full h-[92vh] sm:h-[95vh] lg:h-screen min-h-[640px] sm:min-h-[700px] lg:min-h-[740px] overflow-hidden bg-[#FAF8F5] border-b border-[#E8E2D9] select-none"
    >
      {/* 
        Gapless Ribbon Stage Track
        When transitioning:
        Track is 200% wide, positioned at -100% left:
        [Incoming Slide (left)] [Current Slide (right)]
        Animates x: 0% -> 50% smoothly over 1.4s.
        The incoming slide enters from the LEFT while the current slide exits to the RIGHT.
        Because they are placed side-by-side in one flex row, there is ZERO GAP between them!
      */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {incomingSlide !== null ? (
          <motion.div
            key={`transitioning-to-${incomingSlide.id}`}
            initial={{ x: "0%" }}
            animate={{ x: "50%" }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1], // Smooth, luxurious easeOutQuint curve
            }}
            onAnimationComplete={handleTransitionComplete}
            className="flex w-[200%] h-full absolute top-0 -left-[100%]"
          >
            {/* 1. Incoming Slide (On the Left - Entering the viewport) */}
            <div className="w-[50%] h-full flex-shrink-0">
              <SlideView slide={incomingSlide} />
            </div>

            {/* 2. Current Slide (On the Right - Exiting the viewport) */}
            <div className="w-[50%] h-full flex-shrink-0">
              <SlideView slide={currentSlide} />
            </div>
          </motion.div>
        ) : (
          <div className="w-full h-full">
            <SlideView slide={currentSlide} />
          </div>
        )}
      </div>

      {/* 
        Persistent Fixed Bottom Progress Controls
        Remains firmly anchored across transitions
      */}
      <div className="absolute bottom-0 left-0 right-0 z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10 pt-4 flex items-center justify-between select-none pointer-events-auto border-t border-[#E8E2D9]/70">
        <div className="flex items-center gap-3 w-full max-w-xs">
          {SLIDES.map((slide, idx) => {
            const isActive = incomingIdx !== null ? idx === incomingIdx : idx === currentIdx;
            return (
              <button
                key={slide.id}
                onClick={() => handleSelectSlide(idx)}
                className="group relative flex-1 h-1.5 rounded-full overflow-hidden bg-[#E8E2D9] transition-all cursor-pointer hover:h-2"
                aria-label={`Jump to slide ${idx + 1}`}
              >
                {isActive ? (
                  <motion.div
                    key={`progress-${currentIdx}-${incomingIdx}`}
                    initial={{ width: incomingIdx !== null ? "100%" : "0%" }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: incomingIdx !== null ? 1.4 : 3.5,
                      ease: "linear",
                    }}
                    className="h-full bg-[#FF5500] rounded-full"
                  />
                ) : (
                  <div
                    className={`h-full w-full rounded-full ${
                      idx < (incomingIdx ?? currentIdx)
                        ? "bg-[#1F1F1E]/30"
                        : "bg-transparent"
                    }`}
                  />
                )}
              </button>
            );
          })}

          <span className="text-xs font-sans font-bold text-[#625D55] pl-2 whitespace-nowrap">
            0{(incomingIdx ?? currentIdx) + 1} / 03
          </span>
        </div>
      </div>

    </section>
  );
}
