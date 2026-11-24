"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";

export interface SuccessStory {
  id: string;
  metricKey: string;
  quoteKey: string;
  authorKey: string;
  roleKey: string;
  logoKey: string;
  image: string;
}

const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: "story-1",
    metricKey: "services.stories.s1.metric",
    quoteKey: "services.stories.s1.quote",
    authorKey: "services.stories.s1.author",
    roleKey: "services.stories.s1.role",
    logoKey: "services.stories.s1.logo",
    image: "/images/services/generator_engine_cutaway.png",
  },
  {
    id: "story-2",
    metricKey: "services.stories.s2.metric",
    quoteKey: "services.stories.s2.quote",
    authorKey: "services.stories.s2.author",
    roleKey: "services.stories.s2.role",
    logoKey: "services.stories.s2.logo",
    image: "/images/industries/healthcare.png",
  },
  {
    id: "story-3",
    metricKey: "services.stories.s3.metric",
    quoteKey: "services.stories.s3.quote",
    authorKey: "services.stories.s3.author",
    roleKey: "services.stories.s3.role",
    logoKey: "services.stories.s3.logo",
    image: "/images/services/generator_only_bg.jpg",
  },
  {
    id: "story-4",
    metricKey: "services.stories.s4.metric",
    quoteKey: "services.stories.s4.quote",
    authorKey: "services.stories.s4.author",
    roleKey: "services.stories.s4.role",
    logoKey: "services.stories.s4.logo",
    image: "/images/generators/truck_orange_generator.jpg",
  },
  {
    id: "story-5",
    metricKey: "services.stories.s5.metric",
    quoteKey: "services.stories.s5.quote",
    authorKey: "services.stories.s5.author",
    roleKey: "services.stories.s5.role",
    logoKey: "services.stories.s5.logo",
    image: "/images/industries/commercial.png",
  },
];

const CINEMATIC_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function SuccessStoriesClient() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const total = SUCCESS_STORIES.length;

  const getStoryAtOffset = useCallback(
    (offset: number) => {
      const idx = (activeIndex + offset + total * 10) % total;
      return { story: SUCCESS_STORIES[idx], index: idx };
    },
    [activeIndex, total]
  );

  const goToNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const selectIndex = (targetIndex: number) => {
    let diff = (targetIndex - activeIndex) % total;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    setDirection(diff >= 0 ? 1 : -1);
    setActiveIndex(targetIndex);
  };

  // 3-second continuous loop timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      goToNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, goToNext]);

  const activeStory = SUCCESS_STORIES[activeIndex];
  const farLeft = getStoryAtOffset(-2);
  const nearLeft = getStoryAtOffset(-1);
  const nearRight = getStoryAtOffset(1);
  const farRight = getStoryAtOffset(2);

  // Cinematic Capsule Morph: Expands from near-right capsule into center, collapses to near-left capsule
  const centerCardVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 380 : -380,
      scaleX: 0.18,
      scaleY: 0.85,
      borderRadius: 9999,
      opacity: 0,
    }),
    center: {
      x: 0,
      scaleX: 1,
      scaleY: 1,
      borderRadius: 32,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: CINEMATIC_EASE,
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -380 : 380,
      scaleX: 0.18,
      scaleY: 0.85,
      borderRadius: 9999,
      opacity: 0,
      transition: {
        duration: 0.55,
        ease: CINEMATIC_EASE,
      },
    }),
  };

  return (
    <div
      className="w-full flex flex-col items-center select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* =========================================================================
          DESKTOP VIEW (hidden lg:flex): Kinetic Morphing Capsule Horizon
          ========================================================================= */}
      <div className="hidden lg:flex items-center justify-center relative w-full h-[400px] xl:h-[420px]">
        
        {/* 1. Far Left Capsule (Slot -2) - 100% Edge-to-Edge Image (Zero Black Bars) */}
        <div
          onClick={() => selectIndex(farLeft.index)}
          aria-label={`View story: ${t(farLeft.story.authorKey)}`}
          className="relative w-[56px] xl:w-[62px] h-[200px] xl:h-[220px] rounded-full border-4 border-white shadow-sm overflow-hidden cursor-pointer shrink-0 opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-105 z-10 bg-white"
        >
          <div className="relative w-full h-full">
            <Image
              src={farLeft.story.image}
              alt={t(farLeft.story.authorKey)}
              fill
              sizes="80px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-300" />
          </div>
        </div>

        {/* Connector Bridge 1 */}
        <div className="h-[2px] xl:h-[2.5px] w-6 xl:w-8 bg-[#E0D7CA] shadow-2xs shrink-0" />

        {/* 2. Near Left Capsule (Slot -1) - 100% Edge-to-Edge Image (Zero Black Bars) */}
        <div
          onClick={() => selectIndex(nearLeft.index)}
          aria-label={`View story: ${t(nearLeft.story.authorKey)}`}
          className="relative w-[82px] xl:w-[90px] h-[300px] xl:h-[320px] rounded-full border-4 border-white shadow-md shadow-[#111315]/8 overflow-hidden cursor-pointer shrink-0 transition-transform duration-300 hover:scale-105 z-10 bg-white"
        >
          <div className="relative w-full h-full">
            <Image
              src={nearLeft.story.image}
              alt={t(nearLeft.story.authorKey)}
              fill
              sizes="100px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-300" />
          </div>
        </div>

        {/* Connector Bridge 2 */}
        <div className="h-[2px] xl:h-[2.5px] w-6 xl:w-8 bg-[#E0D7CA] shadow-2xs shrink-0" />

        {/* 3. Center Stage: Capsule Expands into Card, Collapses to Left on Exit */}
        <div className="relative w-[700px] xl:w-[780px] 2xl:w-[820px] h-[370px] xl:h-[390px] overflow-hidden shrink-0 z-20 flex items-center justify-center">
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={`active-morph-${activeStory.id}`}
              custom={direction}
              variants={centerCardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full h-full rounded-[32px] bg-white border border-[#E8E2D9] shadow-xl shadow-[#111315]/6 p-6 xl:p-8 flex items-stretch gap-6 xl:gap-8 overflow-hidden origin-center"
            >
              {/* Left Column: Metric + Quote + Author Meta */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, delay: 0.15 }}
                className="flex-1 flex flex-col justify-between overflow-hidden min-w-[340px]"
              >
                <div>
                  {/* High-Impact Metric Headline */}
                  <h3 className="text-2xl xl:text-3xl font-extrabold text-[#111315] font-['Poppins',sans-serif] tracking-tight leading-tight mb-3 xl:mb-4">
                    {t(activeStory.metricKey)}
                  </h3>

                  {/* Editorial Serif Quote */}
                  <p className="text-sm xl:text-base text-[#242220] font-serif italic leading-relaxed line-clamp-4">
                    &ldquo;{t(activeStory.quoteKey)}&rdquo;
                  </p>
                </div>

                {/* Client Attribution Pill */}
                <div className="pt-3 xl:pt-4 border-t border-[#F0EAE1] mt-auto">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E8E2D9] text-xs font-['Outfit',sans-serif] text-[#524E48] max-w-full">
                    <span className="font-bold text-[#111315] truncate">
                      {t(activeStory.authorKey)}
                    </span>
                    <span className="text-[#D6CEBE]">•</span>
                    <span className="text-[#71695F] truncate">
                      {t(activeStory.roleKey)}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Photo Canvas + Client Logo Badge */}
              <div className="relative w-[280px] xl:w-[320px] h-full rounded-[22px] xl:rounded-[26px] overflow-hidden bg-white shrink-0 border border-[#E8E2D9]/70">
                <Image
                  src={activeStory.image}
                  alt={t(activeStory.authorKey)}
                  fill
                  sizes="320px"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-start pointer-events-none z-10">
                  <span className="text-white font-mono font-black text-sm xl:text-base tracking-widest drop-shadow-md uppercase">
                    {t(activeStory.logoKey)}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Connector Bridge 3 */}
        <div className="h-[2px] xl:h-[2.5px] w-6 xl:w-8 bg-[#E0D7CA] shadow-2xs shrink-0" />

        {/* 4. Near Right Capsule (Slot +1) - 100% Edge-to-Edge Image (Zero Black Bars) */}
        <div
          onClick={() => selectIndex(nearRight.index)}
          aria-label={`View story: ${t(nearRight.story.authorKey)}`}
          className="relative w-[82px] xl:w-[90px] h-[300px] xl:h-[320px] rounded-full border-4 border-white shadow-md shadow-[#111315]/8 overflow-hidden cursor-pointer shrink-0 transition-transform duration-300 hover:scale-105 z-10 bg-white"
        >
          <div className="relative w-full h-full">
            <Image
              src={nearRight.story.image}
              alt={t(nearRight.story.authorKey)}
              fill
              sizes="100px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-300" />
          </div>
        </div>

        {/* Connector Bridge 4 */}
        <div className="h-[2px] xl:h-[2.5px] w-6 xl:w-8 bg-[#E0D7CA] shadow-2xs shrink-0" />

        {/* 5. Far Right Capsule (Slot +2) - 100% Edge-to-Edge Image (Zero Black Bars) */}
        <div
          onClick={() => selectIndex(farRight.index)}
          aria-label={`View story: ${t(farRight.story.authorKey)}`}
          className="relative w-[56px] xl:w-[62px] h-[200px] xl:h-[220px] rounded-full border-4 border-white shadow-sm overflow-hidden cursor-pointer shrink-0 opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-105 z-10 bg-white"
        >
          <div className="relative w-full h-full">
            <Image
              src={farRight.story.image}
              alt={t(farRight.story.authorKey)}
              fill
              sizes="80px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-300" />
          </div>
        </div>
      </div>

      {/* =========================================================================
          MOBILE & TABLET VIEW (lg:hidden): Adaptive Card + Prev/Next Controls
          ========================================================================= */}
      <div className="flex lg:hidden flex-col gap-6 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStory.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: CINEMATIC_EASE }}
            className="w-full rounded-3xl bg-white border border-[#E8E2D9] shadow-lg shadow-[#111315]/5 p-5 sm:p-7 flex flex-col gap-5 overflow-hidden"
          >
            {/* Top Metric */}
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#111315] font-['Poppins',sans-serif] tracking-tight leading-snug">
              {t(activeStory.metricKey)}
            </h3>

            {/* Photo Canvas */}
            <div className="relative w-full h-[200px] sm:h-[240px] rounded-2xl overflow-hidden bg-white">
              <Image
                src={activeStory.image}
                alt={t(activeStory.authorKey)}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-start pointer-events-none z-10">
                <span className="text-white font-mono font-black text-xs sm:text-sm tracking-widest drop-shadow-md uppercase">
                  {t(activeStory.logoKey)}
                </span>
              </div>
            </div>

            {/* Editorial Quote */}
            <p className="text-sm sm:text-base text-[#242220] font-serif italic leading-relaxed">
              &ldquo;{t(activeStory.quoteKey)}&rdquo;
            </p>

            {/* Client Attribution Pill */}
            <div className="pt-3 border-t border-[#F0EAE1]">
              <div className="inline-flex flex-wrap items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E8E2D9] text-xs font-['Outfit',sans-serif] text-[#524E48]">
                <span className="font-bold text-[#111315]">
                  {t(activeStory.authorKey)}
                </span>
                <span className="text-[#D6CEBE]">•</span>
                <span className="text-[#71695F]">
                  {t(activeStory.roleKey)}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Mobile Prev / Next Controls with Mini Avatars */}
        <div className="flex items-center justify-between gap-4 pt-1">
          <button
            type="button"
            onClick={goToPrev}
            aria-label="Previous story"
            className="size-10 rounded-full bg-white border border-[#E8E2D9] flex items-center justify-center text-[#111315] hover:border-[#FF5500] hover:text-[#FF5500] transition-colors shadow-2xs"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Mini Pill Avatars */}
          <div className="flex items-center gap-2">
            {SUCCESS_STORIES.map((story, idx) => (
              <button
                key={story.id}
                type="button"
                onClick={() => selectIndex(idx)}
                aria-label={`Select story ${idx + 1}`}
                className={cn(
                  "relative transition-all duration-300 overflow-hidden border",
                  idx === activeIndex
                    ? "w-8 h-8 rounded-full border-[#FF5500] shadow-sm"
                    : "w-6 h-6 rounded-full border-white opacity-60 hover:opacity-100"
                )}
              >
                <Image
                  src={story.image}
                  alt=""
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={goToNext}
            aria-label="Next story"
            className="size-10 rounded-full bg-white border border-[#E8E2D9] flex items-center justify-center text-[#111315] hover:border-[#FF5500] hover:text-[#FF5500] transition-colors shadow-2xs"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM MINIMAL PILL PAGINATION TRACK (Desktop & Tablet)
          ========================================================================= */}
      <div className="hidden lg:flex items-center justify-center gap-2 mt-8">
        {SUCCESS_STORIES.map((story, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={story.id}
              type="button"
              onClick={() => selectIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={cn(
                "transition-all duration-500 rounded-full cursor-pointer",
                isActive
                  ? "w-8 h-2 bg-[#FF5500] shadow-xs"
                  : "size-2 bg-[#D6CEBE] hover:bg-[#FF5500]/50"
              )}
            />
          );
        })}
      </div>
    </div>
  );
}
