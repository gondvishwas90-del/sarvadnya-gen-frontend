"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

/**
 * BlogHero Component
 *
 * Ultra-Premium Architectural Aperture Expand Hero (Apple / Lusion Style):
 * - Background Image starts as a floating centered aperture frame and expands outwards to edge-to-edge full bleed
 * - Counter-scale physics on the photograph creates a fixed-in-space 3D camera lens effect
 * - Pure minimal luxury: Headline, excerpt narrative, and bespoke CTA without pill badges or telemetry clutter
 * - Masked kinetic curtain typography reveals for Devanagari & English with generous matra clearance
 * - Crystal-clear uncompressed 16:9 architectural photograph
 */
export function BlogHero() {
  const { t } = useLanguage();

  const featuredPost = {
    slug: "choosing-right-generator-wedding",
    title:
      "The Ultimate Guide to Choosing the Right Generator for Your Wedding",
    excerpt:
      "Don't let power outages dim your big day. Learn how to calculate your kVA needs, manage acoustic levels, and ensure seamless entertainment.",
    image: "/images/blog/blog_hero_event.jpg",
  };

  return (
    <section className="relative w-full min-h-[70vh] lg:h-[85vh] lg:min-h-[640px] max-h-[820px] flex flex-col justify-center overflow-hidden group bg-[#0D0E10] border-b border-white/10 pt-20 sm:pt-24 pb-8 sm:pb-12">
      {/* Background Ambience / Deep Obsidian Canvas */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_40%,rgba(255,85,0,0.06),transparent_70%)] pointer-events-none" 
      />

      {/* 1. ARCHITECTURAL APERTURE CONTAINER */}
      <motion.div
        initial={{
          clipPath: "inset(12% 14% 12% 14% round 28px)",
          opacity: 0.85,
        }}
        animate={{
          clipPath: "inset(0% 0% 0% 0% round 0px)",
          opacity: 1,
        }}
        transition={{
          duration: 1.4,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute inset-0 w-full h-full overflow-hidden will-change-[clip-path]"
      >
        {/* Counter-Scaling Image Layer */}
        <motion.div
          initial={{ scale: 1.24 }}
          animate={{ scale: 1.04 }}
          transition={{
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative w-full h-full"
        >
          <Image
            src={featuredPost.image}
            alt={featuredPost.title}
            fill
            priority
            unoptimized
            className="object-cover object-center filter contrast-[1.04] transition-transform duration-1000 group-hover:scale-[1.06]"
          />
        </motion.div>
      </motion.div>

      {/* 2. OVERLAID EDITORIAL TYPOGRAPHY & INTERACTION - VERTICALLY CENTERED */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[60px] my-auto">
        <div className="max-w-4xl lg:max-w-[85%] mx-auto sm:mx-0 flex flex-col items-center sm:items-start text-center sm:text-left space-y-3 sm:space-y-4">

          {/* Masked Kinetic Headline */}
          <div className="overflow-hidden pt-2.5 sm:pt-3 pb-1 px-1 w-full">
            <motion.h1
              initial={{ y: "115%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-[66px] font-extrabold text-white leading-[1.18] sm:leading-[1.12] tracking-tight font-['Poppins',sans-serif] pt-1 pb-1 drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] text-center sm:text-left"
            >
              {t("blog.hero.title", featuredPost.title)}
            </motion.h1>
          </div>

          {/* Masked Excerpt */}
          <div className="overflow-hidden pt-1 pb-1 w-full flex justify-center sm:justify-start">
            <motion.p
              initial={{ y: 35, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/95 font-['Outfit',sans-serif] text-xs sm:text-base lg:text-lg leading-relaxed max-w-2xl sm:max-w-3xl font-medium drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)] text-center sm:text-left mx-auto sm:mx-0"
            >
              {t("blog.hero.excerpt", featuredPost.excerpt)}
            </motion.p>
          </div>

          {/* Action Row: CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2 sm:pt-4 flex justify-center sm:justify-start w-full"
          >
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#111315] hover:bg-[#FF5500] hover:text-white font-bold text-sm sm:text-base rounded-xl transition-all duration-300 shadow-[0_12px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_30px_rgba(255,85,0,0.4)] group/btn"
            >
              <span>{t("blog.hero.cta", "Read Full Guide")}</span>
              <ArrowRight
                size={18}
                className="group-hover/btn:translate-x-1.5 transition-transform duration-300 text-[#FF5500] group-hover/btn:text-white"
              />
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="absolute bottom-8 right-6 sm:right-12 z-20 hidden md:flex items-center gap-3 text-white/50 text-xs uppercase tracking-[0.2em] font-medium font-['Outfit',sans-serif] pointer-events-none"
      >
        <span>Scroll to read</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1 h-1.5 rounded-full bg-[#FF5500]"
          />
        </div>
      </motion.div>
    </section>
  );
}
