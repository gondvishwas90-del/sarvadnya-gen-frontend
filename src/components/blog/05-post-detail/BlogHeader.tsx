"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BLOG_POSTS } from "../03-grid/BlogGrid";
import { useLanguage } from "@/lib/LanguageContext";

export function BlogHeader({ slug }: { slug: string }) {
  const { t } = useLanguage();
  const matchedPost = BLOG_POSTS.find((p) => p.slug === slug);

  const fallbackTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const title = matchedPost?.title || fallbackTitle;
  const image = matchedPost?.image || "/images/blog/blog-main.png";

  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-[#524E48] text-xs font-mono font-bold uppercase tracking-widest">
        <Link href="/" className="hover:text-[#FF5500] transition-colors">
          {t("nav.home", "Home")}
        </Link>
        <ChevronRight size={14} />
        <Link href="/blog" className="hover:text-[#FF5500] transition-colors">
          {t("nav.insights", "Blog")}
        </Link>
        <ChevronRight size={14} />
        <span className="text-[#FF5500] truncate max-w-[200px] sm:max-w-none">
          {t("Article", "Article")}
        </span>
      </nav>

      <div className="max-w-4xl flex flex-col gap-4">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#111315] leading-[1.28] sm:leading-[1.32] pt-2 pb-1 tracking-tight">
          {t(title, title)}
        </h1>
      </div>

      {/* Hero Visual Frame */}
      <div className="relative aspect-[21/9] min-h-[240px] w-full rounded-3xl overflow-hidden border border-[#E8E2D9] shadow-[0_20px_50px_-20px_rgba(17,19,21,0.12)] bg-[#F3EFE8]">
        <Image src={image} alt={t(title, title)} fill priority className="object-cover" />
      </div>
    </div>
  );
}
