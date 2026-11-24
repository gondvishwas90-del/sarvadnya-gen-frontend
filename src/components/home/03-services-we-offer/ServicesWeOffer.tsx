"use client";

import React, { useRef, useState } from "react";
import { SectionHeading } from "@/components/common";
import { ServicesWeOfferClient, type ServiceVertical } from "./ServicesWeOfferClient";
import { useLanguage } from "@/lib/LanguageContext";
import { useScroll, useMotionValueEvent } from "framer-motion";

/**
 * ServicesWeOffer Component
 * 
 * Clean, light-theme architectural layout adapted from Joint Talent (jointalent.net/about/):
 * - Light luxury background (#FAF8F5) with warm tone
 * - Left column: Clean vertical tab navigation with active progress fill line
 * - Right column: Unified Single Card in Table Format (generator unit image on top, specifications below)
 * - Pinned sticky scroll container (260vh) with click-to-sync navigation
 * - Full English / Hindi / Marathi localization across all texts and specifications
 */
export function ServicesWeOffer() {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const verticals: ServiceVertical[] = [
    {
      id: "weddings",
      index: "01",
      tabLabel: t("services.tab1") || "Weddings & Banquets",
      tagline: t("services.v1.tagline") || "ACOUSTIC SOUNDPROOF FLEET",
      title: t("services.tab1") || "Weddings & Banquets",
      subtitle: t("services.v1.subtitle") || "Zero Noise Disruption for Lifelong Celebrations",
      description:
        t("services.v1.desc") ||
        "Ultra-silent CPCB-II compliant diesel generators engineered specifically for marriage lawns, farmhouse celebrations, and luxury banquet halls. Clean sine wave voltage safeguards sensitive stage acoustics, LED video walls, and decorative chandeliers.",
      capacity: "5 kVA to 125 kVA",
      specs: [
        {
          label: t("services.v1.spec1.label") || "Acoustic Standard",
          value: t("services.v1.spec1.value") || "< 75 dBA @ 1m (CPCB-II)",
        },
        {
          label: t("services.v1.spec2.label") || "Output Voltage",
          value: t("services.v1.spec2.value") || "3-Phase 415V / Single-Phase 230V",
        },
        {
          label: t("services.v1.spec3.label") || "Switchgear Support",
          value: t("services.v1.spec3.value") || "Automatic Mains Failure (AMF)",
        },
        {
          label: t("services.v1.spec4.label") || "Field Assistance",
          value: t("services.v1.spec4.value") || "Turnkey Cabling & On-Site Technician",
        },
      ],
      primaryImage: "/images/industries/residential.png",
      unitImage: "/images/generators/generator_38.png",
      unitBadge: "CPCB-II ACOUSTIC ENCLOSURE",
      statusBadge: "READY FOR DISPATCH",
      href: "/contact?service=weddings",
      ctaText: t("services.v1.cta") || "Reserve Wedding Power",
    },
    {
      id: "events",
      index: "02",
      tabLabel: t("services.tab2") || "Grand Events & Festivals",
      tagline: t("services.v2.tagline") || "SYNCHRONIZED DUAL REDUNDANCY",
      title: t("services.tab2") || "Grand Events & Festivals",
      subtitle: t("services.v2.subtitle") || "Flawless Execution for High-Capacity Gatherings",
      description:
        t("services.v2.desc") ||
        "High-output multi-generator synchronized power stations built for music festivals, cultural celebrations, sports expos, and public gatherings. Dual DG synchronization ensures automatic, millisecond failover with zero stage blackout risk.",
      capacity: "30 kVA to 250 kVA",
      specs: [
        {
          label: t("services.v2.spec1.label") || "Grid Redundancy",
          value: t("services.v2.spec1.value") || "Dual DG N+1 Synchronization",
        },
        {
          label: t("services.v2.spec2.label") || "AV Frequency Stability",
          value: t("services.v2.spec2.value") || "50 Hz ± 0.5% True Sine Wave",
        },
        {
          label: t("services.v2.spec3.label") || "Distribution Kit",
          value: t("services.v2.spec3.value") || "Weatherproof Panels & Cable Ramps",
        },
        {
          label: t("services.v2.spec4.label") || "Operational Run",
          value: t("services.v2.spec4.value") || "Continuous 24-Hour Fuel Autonomy",
        },
      ],
      primaryImage: "/images/industries/commercial.png",
      unitImage: "/images/generators/generator_14.png",
      unitBadge: "SYNCHRONIZED DUAL DG",
      statusBadge: "EVENT CREW ON CALL",
      href: "/contact?service=events",
      ctaText: t("services.v2.cta") || "Plan Event Power Supply",
    },
    {
      id: "industrial",
      index: "03",
      tabLabel: t("services.tab3") || "Industrial & Projects",
      tagline: t("services.v3.tagline") || "PRIME CONTINUOUS INDUSTRIAL FLEET",
      title: t("services.tab3") || "Industrial & Project Rentals",
      subtitle: t("services.v3.subtitle") || "Rugged Reliability for Uncompromising Production",
      description:
        t("services.v3.desc") ||
        "Heavy-duty continuous-rated diesel generator sets built for manufacturing shutdowns, plant maintenance, and critical infrastructure construction sites. Heavy-gauge industrial enclosures withstand extreme outdoor conditions and heavy motor loads.",
      capacity: "62.5 kVA to 250 kVA",
      specs: [
        {
          label: t("services.v3.spec1.label") || "Power Rating",
          value: t("services.v3.spec1.value") || "100% Prime Continuous (ISO 8528)",
        },
        {
          label: t("services.v3.spec2.label") || "Heavy Inductive Load",
          value: t("services.v3.spec2.value") || "Optimized for Motors, Cranes & Chillers",
        },
        {
          label: t("services.v3.spec3.label") || "Protection Standard",
          value: t("services.v3.spec3.value") || "Heavy-Gauge Weatherproof Steel Canopy",
        },
        {
          label: t("services.v3.spec4.label") || "Support Coverage",
          value: t("services.v3.spec4.value") || "24/7 Dedicated Breakdown Assistance",
        },
      ],
      primaryImage: "/images/industries/construction.png",
      unitImage: "/images/generators/generator_10.png",
      unitBadge: "HEAVY PRIME CONTINUOUS",
      statusBadge: "24/7 INDUSTRIAL FLEET",
      href: "/contact?service=industrial",
      ctaText: t("services.v3.cta") || "Request Industrial Fleet",
    },
  ];

  // Pin & track scroll through the 260vh track container
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Calibrated vertical switching:
    // [0.00, 0.35) -> Vertical 01
    // [0.35, 0.70) -> Vertical 02
    // [0.70, 1.00] -> Vertical 03
    if (latest < 0.35) {
      setActiveIndex(0);
    } else if (latest < 0.70) {
      setActiveIndex(1);
    } else {
      setActiveIndex(2);
    }
  });

  const handleVerticalClick = (index: number) => {
    setActiveIndex(index);
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
      id="applications"
      ref={trackRef}
      className="relative w-full h-[260vh] bg-[#FAF8F5] border-b border-[#E8E2D9]"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center pt-10 pb-6 sm:pt-0 sm:pb-0 px-4 sm:px-6 lg:px-10 xl:px-14 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-3.5 sm:gap-6 lg:gap-8 my-auto">
          <SectionHeading
            title={
              <span className="block lg:whitespace-nowrap">
                {t("services.title")}
              </span>
            }
            description={t("services.desc")}
            align="left"
            className="mb-0 sm:mb-1 max-w-5xl"
          />

          <ServicesWeOfferClient
            verticals={verticals}
            activeIndex={activeIndex}
            scrollYProgress={scrollYProgress}
            onVerticalClick={handleVerticalClick}
          />
        </div>
      </div>
    </section>
  );
}
