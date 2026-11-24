"use client";

import React, { useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { SolutionsClient } from "./SolutionsClient";
import { useScroll, useMotionValueEvent } from "framer-motion";

/**
 * Solutions Component (Client Component with Multi-Language Support)
 * 
 * Re-architected to "How the Rental Process Works" (docs/content.md Section 7.6):
 * - Step 01: Share Your Requirements
 * - Step 02: Discuss Power Sizing
 * - Step 03: Confirm Availability & Quotation
 * 
 * Pinned Sticky Scroll Implementation:
 * - Locks the entire process stage in view as the user scrolls
 * - Step 1: 0.00 to 0.35 scroll progress
 * - Step 2: 0.35 to 0.70 scroll progress
 * - Step 3: 0.70 to 1.00 scroll progress (Remains locked in view until Step 3 is completed)
 * - Only after scrolling past Step 3 does the page naturally scroll down to the next section
 */
export function Solutions() {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      title: t("solutions.step1Title"),
      description: t("solutions.step1Desc"),
      actionLabel: t("solutions.step1Action"),
      metric: t("solutions.step1Metric"),
    },
    {
      step: "02",
      title: t("solutions.step2Title"),
      description: t("solutions.step2Desc"),
      actionLabel: t("solutions.step2Action"),
      metric: t("solutions.step2Metric"),
    },
    {
      step: "03",
      title: t("solutions.step3Title"),
      description: t("solutions.step3Desc"),
      actionLabel: t("solutions.step3Action"),
      metric: t("solutions.step3Metric"),
    },
  ];

  // Pin & track scroll through the 260vh track container
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Smooth, calibrated step switching:
    // [0.00, 0.35) -> Step 01
    // [0.35, 0.70) -> Step 02
    // [0.70, 1.00] -> Step 03 (Remains pinned until Step 3 is finished)
    if (latest < 0.35) {
      setActiveStep(0);
    } else if (latest < 0.70) {
      setActiveStep(1);
    } else {
      setActiveStep(2);
    }
  });

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const scrollableDistance = trackRef.current.offsetHeight - window.innerHeight;
    const stepFractions = [0.1, 0.5, 0.85];
    const targetScroll = scrollTop + scrollableDistance * (stepFractions[index] ?? 0.5);
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  return (
    <section
      ref={trackRef}
      className="relative w-full h-[260vh] bg-[#FAF8F5] border-b border-[#E8E2D9]"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-6 sm:gap-8 lg:gap-10">
          {/* Left-Aligned, Single-Line Desktop Header (No Eyebrow) */}
          <div className="max-w-4xl text-left">
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#1F1F1E] tracking-tight leading-[1.18] lg:whitespace-nowrap">
              {t("solutions.title")}
            </h2>
            <p className="text-sm sm:text-base text-[#625D55] mt-1.5 sm:mt-2 leading-relaxed">
              {t("solutions.desc")}
            </p>
          </div>

          {/* Interactive Steps Visual & Content Stage */}
          <SolutionsClient
            steps={steps}
            activeStep={activeStep}
            onStepClick={handleStepClick}
          />
        </div>
      </div>
    </section>
  );
}
