"use client";

import { GeneratorCompareClient } from "./GeneratorCompareClient";
import { SectionHeading } from "@/components/common";
import { generatorsData } from "@/constants/data";
import { ArrowRight, PhoneCall } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import {
  translateGeneratorName,
  translateCategoryName,
  translateGeneratorFeature,
} from "@/lib/generatorTranslations";

/**
 * Generator Compare Server Component
 *
 * Renders the comparative fleet overview header, passes available generators to
 * the interactive side-by-side matrix, and anchors the custom sizing consultation strip.
 */
export function GeneratorCompare() {
  const { t, language } = useLanguage();
  const hoursSuffix = t("common.hours", "hours");
  const availableGenerators = generatorsData
    .filter((gen) => gen.status !== "retired" && gen.status !== "maintenance")
    .map((gen) => ({
      id: gen.id,
      name: translateGeneratorName(gen.name, language),
      brand: gen.brand,
      kva: `${parseFloat(gen.power_output_kva)} kVA`,
      type: translateCategoryName(gen.type, language),
      pricePerDay: "₹" + parseInt(gen.daily_rate, 10).toLocaleString("en-IN"),
      runtime: `${parseFloat(gen.runtime_hours_full_tank)} ${hoursSuffix}`,
      fuelType:
        language === "mr"
          ? "डिझेल"
          : language === "hi"
            ? "डीज़ल"
            : gen.fuel_type.charAt(0).toUpperCase() + gen.fuel_type.slice(1),
      noiseLevel: `${parseFloat(gen.noise_level_db)} dB`,
      bestFor: translateGeneratorFeature(gen.highlights?.[0] || "General use", language),
      hasAutoStart: gen.features?.some((f) => f.toLowerCase().includes("auto")),
      hasRemoteMonitoring: gen.features?.some((f) =>
        f.toLowerCase().includes("remote")
      ),
    }));

  return (
    <section
      id="compare"
      className="w-full py-10 sm:py-24 px-4 sm:px-6 md:px-10 lg:px-[60px] bg-[#FAF8F5] border-t border-[#E8E2D9]"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Editorial Matrix Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 sm:gap-6 mb-6 sm:mb-12">
          <div>
            <SectionHeading
              title={
                <>
                  {t("generators.compare.title1", "Find the right")}{" "}
                  <span className="text-[#FF5500]">{t("generators.compare.title2", "generator for you")}</span>
                </>
              }
              align="left"
            />
            <p className="font-sans text-[#625D55] text-sm sm:text-lg leading-relaxed max-w-2xl mt-2 sm:mt-3">
              {t(
                "generators.compare.desc",
                "Compare our generators side by side. We've simplified the specs so you can easily choose what fits your needs."
              )}
            </p>
          </div>
        </div>

        {/* Interactive Side-by-Side Comparison Matrix */}
        <GeneratorCompareClient generators={availableGenerators} />

        {/* Architectural Consultation Strip */}
        <div className="mt-14 sm:mt-20 relative rounded-2xl sm:rounded-3xl bg-white border border-[#E8E2D9] text-[#111315] p-7 sm:p-10 lg:p-12 overflow-hidden shadow-xs">
          {/* Subtle Ambient Orange Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#FF5500]/[0.08] blur-[120px]"
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-2xl">
              <h3 className="font-sans font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-tight text-[#1F1F1E]">
                {t("generators.compare.helpTitle1", "Need help")}{" "}
                <span className="text-[#FF5500]">{t("generators.compare.helpTitle2", "choosing?")}</span>
              </h3>
              <p className="font-sans text-[#625D55] text-sm sm:text-base lg:text-lg leading-relaxed mt-3">
                {t(
                  "generators.compare.helpDesc",
                  "Not sure which generator is right for you? Tell us about your requirements and our experts will create a personalized quotation for you."
                )}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0">
              <a
                href="/contact#form"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF5500] hover:bg-[#E04B00] text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-[#FF5500]/25 group whitespace-nowrap"
              >
                <span>{t("generators.compare.customQuote", "Request Custom Quote")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+916262629944"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#FAF8F5] text-[#111315] border border-[#E8E2D9] hover:border-[#FF5500]/40 font-bold text-sm sm:text-base transition-all shadow-xs whitespace-nowrap"
              >
                <PhoneCall className="w-4 h-4 text-[#FF5500]" />
                <span>{t("generators.compare.talkExpert", "Talk to an Expert")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
