"use client";

import React from "react";
import {
  BlogHeader,
  RelatedPosts,
  ScrollProgress,
} from "@/components/blog";
import { CTA } from "@/components/home";
import { useLanguage } from "@/lib/LanguageContext";

interface BlogDetailPageClientProps {
  slug: string;
}

export function BlogDetailPageClient({ slug }: BlogDetailPageClientProps) {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#111315] pt-28 sm:pt-32 pb-20">
      <ScrollProgress />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[60px]">
        {/* Article Header & Hero */}
        <BlogHeader slug={slug} />

        <div className="mt-10 sm:mt-14 w-full">
          {/* Main Content Area - Expanded to acquire space */}
          <article className="w-full">
            <div className="bg-white border border-[#E8E2D9] rounded-3xl p-6 sm:p-10 lg:p-14 shadow-xs w-full">
              <div className="space-y-6 text-[#403C36] text-base sm:text-lg leading-relaxed max-w-4xl">
                <p className="text-lg sm:text-xl text-[#111315] font-semibold leading-relaxed">
                  {t(
                    "blog.detail.introLead",
                    "In this comprehensive guide, we explore the critical factors that determine the success of power management for large-scale events and industrial operations in Nashik."
                  )}
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-[#111315] pt-4">
                  {t("blog.detail.introTitle", "Introduction to Power Reliability")}
                </h2>
                <p>
                  {t(
                    "blog.detail.introP",
                    "When planning a grand wedding or managing a 24/7 manufacturing facility, power isn't just a utility—it's the backbone of your operation. A single minute of downtime can result in massive financial losses or the disruption of a once-in-a-lifetime celebration."
                  )}
                </p>

                <div className="my-8 p-6 sm:p-8 bg-[#FAF8F5] border-l-4 border-[#FF5500] rounded-r-2xl">
                  <p className="italic text-[#111315] text-base sm:text-xl font-medium">
                    {t(
                      "blog.detail.quote",
                      "“Reliability in power generation is not an option; it's a necessity for modern industrial growth.”"
                    )}
                  </p>
                  <cite className="block mt-3 text-[#FF5500] font-bold not-italic text-sm">
                    {t("blog.detail.quoteAuthor", "— Tanmay Avhad, CEO")}
                  </cite>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-[#111315] pt-2">
                  {t("blog.detail.kvaTitle", "Key Considerations for kVA Selection")}
                </h2>
                <p>
                  {t(
                    "blog.detail.kvaP",
                    "Choosing the right kVA rating is the first step. For weddings, you typically need to account for lighting, sound systems, and catering equipment. A 125kVA unit is often the “sweet spot” for grand banquet halls, while 250kVA is preferred for outdoor concerts and large-scale industrial shifts."
                  )}
                </p>

                <ul className="list-disc pl-6 space-y-3 pt-2">
                  <li>
                    {t(
                      "blog.detail.point1",
                      "Peak Load Management: Always factor in a 20% safety margin."
                    )}
                  </li>
                  <li>
                    {t(
                      "blog.detail.point2",
                      "Fuel Efficiency: Modern CPCB II certified engines offer up to 15% better fuel economy."
                    )}
                  </li>
                  <li>
                    {t(
                      "blog.detail.point3",
                      "Noise Control: For residential zones and weddings, acoustic enclosures are mandatory."
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>

        {/* Related Posts */}
        <div className="mt-20 sm:mt-24">
          <RelatedPosts />
        </div>
      </div>

      <div className="mt-20 sm:mt-24">
        <CTA />
      </div>
    </main>
  );
}
