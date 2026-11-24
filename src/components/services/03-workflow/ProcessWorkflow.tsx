"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

interface WorkflowStage {
  number: string;
  titleKey: string;
  descKey: string;
  deliverableKey: string;
  defaultTitle: string;
  defaultDesc: string;
  defaultDeliverable: string;
  image: string;
  alt: string;
}

const STAGES: WorkflowStage[] = [
  {
    number: "01",
    titleKey: "services.workflow.stage1.title",
    descKey: "services.workflow.stage1.desc",
    deliverableKey: "services.workflow.stage1.deliverable",
    defaultTitle: "Power Sizing & Load Audit",
    defaultDesc:
      "Our certified electrical engineers analyze your site load, peak kVA requirements, and venue space to recommend the exact right generator capacity without risk of tripping.",
    defaultDeliverable: "Accurate kVA Load Sizing",
    image: "/images/services/service_engineer_bg.jpg",
    alt: "Certified electrical engineer conducting load audit and power sizing",
  },
  {
    number: "02",
    titleKey: "services.workflow.stage2.title",
    descKey: "services.workflow.stage2.desc",
    deliverableKey: "services.workflow.stage2.deliverable",
    defaultTitle: "Fleet Matching & Transparent Quote",
    defaultDesc:
      "Select from our 5–250 kVA silent DG fleet with clear all-inclusive pricing, automatic mains failure (AMF) panels, and flexible rental tenure without hidden costs.",
    defaultDeliverable: "Clear All-Inclusive Pricing",
    image: "/images/services/generator_only_bg.jpg",
    alt: "Silent soundproof generator set with transparent rental quote",
  },
  {
    number: "03",
    titleKey: "services.workflow.stage3.title",
    descKey: "services.workflow.stage3.desc",
    deliverableKey: "services.workflow.stage3.deliverable",
    defaultTitle: "Rapid Delivery & Professional Setup",
    defaultDesc:
      "Prompt dispatch across Nashik and Maharashtra with specialized hydraulic cranes, weatherproof distribution panels, and heavy-duty cabling deployed by veteran technicians.",
    defaultDeliverable: "Turnkey On-Site Deployment",
    image: "/images/generators/truck_orange_generator.jpg",
    alt: "Hydraulic crane transport truck delivering generator for quick setup",
  },
  {
    number: "04",
    titleKey: "services.workflow.stage4.title",
    descKey: "services.workflow.stage4.desc",
    deliverableKey: "services.workflow.stage4.deliverable",
    defaultTitle: "24/7 Operation & Fuel Management",
    defaultDesc:
      "Dedicated certified technician on-site, automated diesel fuel management, and continuous voltage monitoring to guarantee 100% uninterrupted power throughout your project.",
    defaultDeliverable: "Guaranteed 100% Zero Downtime",
    image: "/images/services/generator_engine_bg.jpg",
    alt: "Heavy-duty generator engine operating with 24/7 on-site technical monitoring",
  },
];

interface StackingCardProps {
  stage: WorkflowStage;
  i: number;
  total: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

function StackingCard({
  stage,
  i,
  progress,
  range,
  targetScale,
}: StackingCardProps) {
  const { t } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);

  // Smooth GPU-accelerated depth scaling as subsequent cards stack over
  const scale = useTransform(progress, range, [1, targetScale]);

  const title = t(stage.titleKey, stage.defaultTitle);
  const desc = t(stage.descKey, stage.defaultDesc);
  const deliverable = t(stage.deliverableKey, stage.defaultDeliverable);

  return (
    <div
      ref={cardRef}
      className="h-[75vh] sm:h-[82vh] lg:h-[88vh] flex items-center justify-center sticky top-0 px-2 sm:px-4"
    >
      <motion.div
        style={{
          scale,
          top: `calc(75px + ${i * 22}px)`,
        }}
        className="relative w-full max-w-7xl mx-auto rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] bg-white border border-[#E8E2D9] shadow-[0_20px_50px_rgba(17,19,21,0.08)] overflow-hidden will-change-transform"
      >
        {/* Subtle Amber Accent Edge on Top */}
        <div className="h-1 w-full bg-gradient-to-r from-[#FF5500]/60 via-[#FF5500] to-[#FF5500]/40" />

        <div className="p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: Editorial Typography & Value Deliverable (Col 6) */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-4 sm:space-y-6">
              <div>
                {/* Monumental Display Headline */}
                <h3 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-[#111315] font-['Poppins',sans-serif] tracking-tight leading-[1.2] sm:leading-[1.18] pt-1 pb-1">
                  {title}
                </h3>

                {/* Deep Narrative Description */}
                <p className="text-xs sm:text-base lg:text-lg text-[#524E48] font-['Outfit',sans-serif] leading-relaxed mt-3 sm:mt-5 max-w-xl">
                  {desc}
                </p>
              </div>

              {/* Deliverable Badge & Action */}
              <div className="pt-3 sm:pt-5 border-t border-[#E8E2D9] flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] text-xs sm:text-sm font-semibold text-[#111315]">
                  <CheckCircle2 className="size-3.5 sm:size-4 text-[#FF5500] shrink-0" />
                  <span>{deliverable}</span>
                </div>

                <Link
                  href="/contact?ref=workflow"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#FF5500] hover:text-[#E04B00] transition-colors group cursor-pointer"
                >
                  <span>{t("common.inquireNow", "Book Now")}</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: Symmetrical Large Rounded Visual Card (Col 6) */}
            <div className="lg:col-span-6 w-full">
              <div className="w-full relative aspect-[16/10] sm:aspect-[16/11] lg:aspect-[4/3] max-h-[220px] sm:max-h-[300px] lg:max-h-[340px] rounded-[18px] sm:rounded-[24px] lg:rounded-[30px] overflow-hidden border border-[#E8E2D9] bg-[#111315] shadow-sm group">
                <Image
                  src={stage.image}
                  alt={stage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center filter contrast-[1.05] saturate-[1.02] transition-transform duration-700 group-hover:scale-[1.03]"
                />

                {/* Ambient Scrim for Depth */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"
                />
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}

/**
 * ProcessWorkflow Component
 *
 * Smooth, 60fps GPU-accelerated Stacking Cards Deck adapted from Join Talent (jointalent.net/solutions/):
 * - Light Luxury Palette (#FAF8F5 canvas, #FFFFFF cards, #E8E2D9 hairline borders, #FF5500 accent)
 * - True Scroll Runway: Each card has dedicated scroll space, gliding smoothly into place
 * - Zero Frame Jitter: Pure CSS sticky pinning combined with Framer Motion GPU transform (scale)
 * - Visible Stacked Rims: Staggered top positioning keeps the rounded top of previous cards visible
 */
export function ProcessWorkflow() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#FAF8F5] pt-16 sm:pt-24 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-12 border-t border-b border-[#E8E2D9]"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#111315] font-['Poppins',sans-serif] tracking-tight leading-[1.24] pt-1.5 pb-1">
            {t("services.workflow.titlePart1", "How Rental Works —")}{" "}
            <span className="text-[#FF5500]">
              {t("services.workflow.titlePart2", "Simple 4-Step Process")}
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#625D55] font-['Outfit',sans-serif] leading-relaxed mt-3.5 max-w-2xl mx-auto">
            {t(
              "services.workflow.subtitle",
              "From initial power sizing to on-site delivery and 24/7 technical assurance, renting silent power is quick and seamless."
            )}
          </p>
        </div>

        {/* Dedicated Smooth Stacking Cards Runway */}
        <div className="relative w-full">
          {STAGES.map((stage, idx) => {
            const targetScale = 1 - (STAGES.length - idx) * 0.035;
            return (
              <StackingCard
                key={stage.number}
                stage={stage}
                i={idx}
                total={STAGES.length}
                progress={scrollYProgress}
                range={[idx * (1 / STAGES.length), 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
