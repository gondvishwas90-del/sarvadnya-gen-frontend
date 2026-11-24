"use client";

import { GeneratorCompareClient } from "./GeneratorCompareClient";
import { SectionHeading } from "@/components/common";
import { generatorsData } from "@/constants/data";
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
      </div>
    </section>
  );
}
