"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { StepEquipmentVisual } from "./Solutions3DElements";

export interface StepItem {
  step: string;
  title: string;
  description: string;
  actionLabel: string;
  metric?: string;
}

interface SolutionsClientProps {
  steps: StepItem[];
  activeStep: number;
  onStepClick: (index: number) => void;
}

/**
 * SolutionsClient Component
 *
 * Open Editorial Process Stage (ZERO CARDS, PINNED STICKY SCROLL):
 * - Scroll-based progression: Step advances as the user scrolls while section is pinned
 * - Manual click support on step nodes with smooth scrolling sync
 * - Left: Floating high-resolution equipment image synced to the active step
 * - Right: Single active step typography with brand sans-serif styling
 * - Bottom: Interactive horizontal connected step nodes
 */
export function SolutionsClient({
  steps,
  activeStep,
  onStepClick,
}: SolutionsClientProps) {
  const currentStep = steps[activeStep] || steps[0];
  const progressPercent =
    steps.length > 1 ? (activeStep / (steps.length - 1)) * 100 : 0;

  return (
    <div className="relative w-full flex flex-col gap-6 sm:gap-8 lg:gap-10 select-none">
      {/* 1. OPEN IMAGE + SINGLE ACTIVE TEXT STAGE (ZERO CARDS / ZERO BOXES) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-center">
        {/* Left: Floating Equipment Visual */}
        <div className="lg:col-span-6 w-full">
          <StepEquipmentVisual
            stepIndex={activeStep}
            stepNumber={currentStep.step}
          />
        </div>

        {/* Right: Single Active Step Typography (Brand Font Styling) */}
        <div className="lg:col-span-6 min-h-[190px] sm:min-h-[220px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.step}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col text-left"
            >
              {/* Minimal Architectural Counter + Metric (Brand Sans Font) */}
              <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
                <span className="font-sans text-sm font-extrabold text-[#FF5500] tracking-wider">
                  {currentStep.step} / 0{steps.length}
                </span>
                <span className="text-[#D4CEC3]">•</span>
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#625D55]">
                  {currentStep.metric || currentStep.actionLabel}
                </span>
              </div>

              {/* Active Step Title */}
              <h3 className="font-sans font-extrabold text-2xl sm:text-3xl lg:text-[34px] text-[#1F1F1E] tracking-tight leading-[1.18] mb-3">
                {currentStep.title}
              </h3>

              {/* Single Active Description */}
              <p className="text-sm sm:text-base lg:text-[17px] text-[#403C36] leading-relaxed mb-5 font-normal max-w-xl">
                {currentStep.description}
              </p>

              {/* Hairline Protocol Action Row */}
              <div className="pt-3.5 border-t border-[#E8E2D9] flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#1F1F1E] max-w-xl">
                <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0" />
                <span>{currentStep.actionLabel}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 2. BOTTOM CONNECTED STEP NODES (Scroll-synced & Clickable) */}
      <div className="relative w-full pt-1">
        {/* Dotted Connecting Line between Node 01 -> Node 02 -> Node 03 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[16.666%] right-[16.666%] top-[20px] sm:top-[22px] -translate-y-1/2 z-0"
        >
          {/* Base Grey Dotted Track */}
          <div className="w-full border-t-2 border-dotted border-[#CFC8BC]" />

          {/* Active Orange Progress Overlay */}
          <motion.div
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 left-0 border-t-2 border-dotted border-[#FF5500]"
          />
        </div>

        {/* Step Nodes */}
        <div className="grid grid-cols-3 gap-2 sm:gap-6 relative z-10">
          {steps.map((item, idx) => {
            const isActive = activeStep === idx;
            const isPassed = idx < activeStep;

            return (
              <button
                key={item.step}
                type="button"
                onClick={() => onStepClick(idx)}
                className="group flex flex-col items-center text-center cursor-pointer focus:outline-none"
                aria-label={`Step ${item.step}: ${item.title}`}
                aria-current={isActive ? "step" : undefined}
              >
                {/* Step Dot Circle (Brand Sans Font) */}
                <div
                  className={cn(
                    "size-9 sm:size-10 rounded-full flex items-center justify-center font-sans text-xs sm:text-sm font-extrabold transition-all duration-300",
                    isActive
                      ? "bg-[#FF5500] text-white border-2 border-[#FF5500] shadow-[0_0_0_5px_rgba(255,85,0,0.16)] scale-110"
                      : isPassed
                      ? "bg-[#1F1F1E] text-white border-2 border-[#1F1F1E]"
                      : "bg-[#FAF8F5] text-[#625D55] border-2 border-[#CFC8BC] group-hover:border-[#1F1F1E] group-hover:text-[#1F1F1E]"
                  )}
                >
                  {item.step}
                </div>

                {/* Concise Step Label */}
                <span
                  className={cn(
                    "mt-2.5 font-sans text-xs sm:text-sm font-bold leading-snug transition-colors line-clamp-2 px-1 max-w-[200px]",
                    isActive
                      ? "text-[#1F1F1E]"
                      : "text-[#7A756D] group-hover:text-[#1F1F1E]"
                  )}
                >
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
