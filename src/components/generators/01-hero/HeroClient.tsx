"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface HeroSlideData {
  id: string;
  watermark: string;
  image: string;
  alt: string;
  badge: string;
}

interface HeroClientProps {
  currentSlide: HeroSlideData;
}

/**
 * HeroClient Component
 * 
 * High-end 3D Generator Stage:
 * - Floating 3D perspective physics with responsive breathing hover loop
 * - Realistic elliptical ground drop shadow reacting in sync
 * - Large ghost watermark typography positioned behind the 3D model
 * - Soft ambient amber warmth
 */
export function HeroClient({ currentSlide }: HeroClientProps) {
  return (
    <div className="relative w-full max-w-lg lg:max-w-2xl aspect-[4/3] sm:aspect-square flex items-center justify-center select-none overflow-visible">
      {/* Subtle warm radial ambient under-glow */}
      <div className="absolute inset-0 bg-[#FF5500]/[0.10] blur-3xl rounded-full scale-95 pointer-events-none" />

      {/* Giant Ghost Watermark Typography (Adapted from reference style) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-sans font-black text-6xl sm:text-8xl lg:text-[130px] tracking-tighter text-[#1F1F1E]/[0.05] uppercase whitespace-nowrap">
          {currentSlide.watermark}
        </span>
      </div>

      {/* 3D Generator Visual with Gentle Continuous Floating Physics */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 0.4, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-full h-[250px] sm:h-[360px] lg:h-[450px] flex items-center justify-center filter drop-shadow-[0_28px_48px_rgba(31,31,30,0.18)]"
        >
          <Image
            src={currentSlide.image}
            alt={currentSlide.alt}
            fill
            priority
            sizes="(max-width: 768px) 90vw, 50vw"
            className="object-contain select-none transition-transform duration-500 ease-out"
          />
        </motion.div>

        {/* Realistic Floor Contact Drop Shadow */}
        <motion.div
          animate={{
            scale: [1, 0.92, 1],
            opacity: [0.32, 0.20, 0.32],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-[65%] h-5 bg-[#1F1F1E]/30 blur-xl rounded-full mt-[-8px] pointer-events-none"
        />
      </div>
    </div>
  );
}
