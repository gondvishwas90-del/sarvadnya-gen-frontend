"use client";

import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/common";
import { ArrowUpRight, Zap } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export function WishlistRecommendations() {
  const { t } = useLanguage();

  const recommendations = [
    {
      kva: "30 kVA",
      label: t("cart.rec.item1_label", "Commercial Standard"),
      desc: t("cart.rec.item1_desc", "Restaurants, banks, and corporate branches in Nashik."),
      highlight: t("cart.rec.item1_highlight", "Popular for Retail & SME"),
    },
    {
      kva: "125 kVA",
      label: t("cart.rec.item2_label", "Wedding & Grand Event"),
      desc: t("cart.rec.item2_desc", "Acoustic silent enclosure ideal for lawn marriages & banquets."),
      highlight: t("cart.rec.item2_highlight", "High Demand Acoustic Set"),
    },
    {
      kva: "250 kVA",
      label: t("cart.rec.item3_label", "Industrial Heavyweight"),
      desc: t("cart.rec.item3_desc", "Heavy manufacturing plants & infrastructure projects."),
      highlight: t("cart.rec.item3_highlight", "Continuous 24/7 Power"),
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-[60px] bg-[#F3EFEA] border-t border-[#E8E2D9]">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <SectionHeading title={t("cart.rec.title", "Most Requested Generator Capacities")} />
            <p className="text-xs sm:text-sm text-[#524E48] mt-1.5 font-sans">
              {t("cart.rec.subtitle", "Curated silent diesel gensets matched to Nashik's standard commercial and industrial load profiles.")}
            </p>
          </div>
          <Link
            href="/generators"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF5500] hover:text-[#E04B00] transition-colors shrink-0"
          >
            <span>{t("cart.rec.explore_all", "Explore All 20+ Capacities")}</span>
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        {/* Recommendations Grid: Desktop 3-Col / Mobile Clean Vertical Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {recommendations.map((rec) => (
            <Link
              key={rec.kva}
              href={`/generators?search=${rec.kva.replace(/[^0-9]/g, "")}`}
              className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-[#E8E2D9] hover:border-[#FF5500] hover:shadow-[0_14px_36px_-12px_rgba(255,85,0,0.12)] transition-all group flex flex-row items-center gap-4 sm:gap-5 w-full"
            >
              {/* Left Side: Bold kVA Capacity Badge */}
              <div className="shrink-0 w-20 sm:w-24 h-20 sm:h-24 rounded-2xl bg-[#FFF5EE] border border-[#FF5500]/25 flex flex-col items-center justify-center text-center p-2 group-hover:bg-[#FF5500] group-hover:border-[#FF5500] transition-all shadow-2xs">
                <Zap className="size-4 text-[#FF5500] group-hover:text-white mb-0.5 transition-colors" />
                <span className="font-sans font-black text-xl sm:text-2xl leading-none text-[#111315] group-hover:text-white transition-colors">
                  {rec.kva.split(" ")[0]}
                </span>
                <span className="font-mono text-[9px] uppercase font-bold tracking-wider text-[#FF5500] group-hover:text-white transition-colors mt-0.5">
                  {rec.kva.split(" ")[1] || "kVA"}
                </span>
              </div>

              {/* Right Side: Title, Details & CTA */}
              <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                <div>
                  <span className="inline-block text-[9px] font-mono font-bold uppercase tracking-wider text-[#FF5500] bg-[#FFF5EE] px-2 py-0.5 rounded-md mb-1.5">
                    {rec.highlight}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-[#111315] font-sans group-hover:text-[#FF5500] transition-colors truncate">
                    {rec.label}
                  </h4>
                  <p className="text-xs text-[#524E48] font-sans mt-1 line-clamp-2 leading-relaxed">
                    {rec.desc}
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-[#FF5500] font-bold group-hover:translate-x-0.5 transition-transform">
                  <span>{t("cart.rec.view_fleet", "View Fleet Models")}</span>
                  <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
