"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Truck,
  MapPin,
  ArrowUpRight,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { RollingText } from "../common/RollingText";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";

/**
 * ForgeContactChannels Component (Bright Luxury Theme)
 *
 * - Desktop: 4-Column architectural grid with hairline dividers
 * - Mobile: Fluid horizontal touch-snap carousel with dot pagination
 */
export function ForgeContactChannels() {
  const { t } = useLanguage();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement;
    if (!card) return;
    const cardWidth = card.offsetWidth + 16;
    const index = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), 3));
  };

  const scrollToIndex = (index: number) => {
    const el = carouselRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement;
    if (!card) return;
    const cardWidth = card.offsetWidth + 16;
    el.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  return (
    <section className="relative w-full bg-[#FAF8F5] border-b border-[#E8E2D9] text-[#111315] z-20 overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto">
        
        {/* Mobile Vertical Stacked Cards (< md) */}
        <div className="flex flex-col gap-4 md:hidden w-full py-6 px-4">
          {/* Card 1: Phone */}
          <div className="w-full p-5 rounded-2xl bg-white border border-[#E8E2D9] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF5500] font-bold">
                  {t("contact.channel.phone.badge", "Phone")}
                </span>
                <div className="size-8 rounded-full bg-[#FAF8F5] border border-[#E8E2D9] flex items-center justify-center text-[#FF5500] shrink-0">
                  <Phone className="size-4" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 my-2">
                <a
                  href="tel:+916262629944"
                  className="font-serif text-lg text-[#111315] font-semibold tracking-tight inline-flex items-center gap-1.5"
                >
                  <span>+91 62626 29944</span>
                  <ArrowUpRight className="size-3.5 text-[#FF5500]" />
                </a>
                <span className="text-[11px] font-mono text-[#8C8275]">
                  {t("contact.channel.phone.role1", "Tanmay Avhad (Lead Dispatch)")}
                </span>

                <a
                  href="tel:+919823197881"
                  className="font-serif text-base text-[#524E48] font-medium tracking-tight pt-2 inline-flex items-center gap-1.5"
                >
                  <span>+91 98231 97881</span>
                  <ArrowUpRight className="size-3.5 text-[#FF5500]" />
                </a>
                <span className="text-[11px] font-mono text-[#8C8275]">
                  {t("contact.channel.phone.role2", "Gopal Avhad (Technical Operations)")}
                </span>
              </div>
            </div>

            <p className="text-[11px] text-[#625D55] mt-3 pt-3 border-t border-[#E8E2D9] font-sans">
              {t("contact.channel.phone.timing", "Mon — Sat: 9:00 AM — 7:00 PM")} • <strong className="text-[#FF5500]">{t("contact.channel.phone.247", "24/7 Dispatch")}</strong>
            </p>
          </div>

          {/* Card 2: Email */}
          <div className="w-full p-5 rounded-2xl bg-white border border-[#E8E2D9] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF5500] font-bold">
                  {t("contact.channel.email.badge", "Email")}
                </span>
                <div className="size-8 rounded-full bg-[#FAF8F5] border border-[#E8E2D9] flex items-center justify-center text-[#FF5500] shrink-0">
                  <Mail className="size-4" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 my-2">
                <a
                  href="mailto:info@sarvadnyagenerators.com"
                  className="font-serif text-base text-[#111315] font-semibold tracking-tight truncate inline-flex items-center gap-1.5"
                >
                  <span className="truncate">info@sarvadnyagenerators.com</span>
                  <ArrowUpRight className="size-3.5 text-[#FF5500] shrink-0" />
                </a>

                <div className="flex flex-col text-[11px] text-[#625D55] gap-1 pt-1 font-sans">
                  <span className="truncate">
                    <span className="font-medium text-[#111315]">{t("contact.channel.email.support", "Support:")}</span> support@sarvadnyagenerators.com
                  </span>
                  <span className="truncate">
                    <span className="font-medium text-[#111315]">{t("contact.channel.email.sales", "Sales:")}</span> sales@sarvadnyagenerators.com
                  </span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-[#625D55] mt-3 pt-3 border-t border-[#E8E2D9] font-sans">
              {t("contact.channel.email.timing", "Response within 1–2 hours for rental inquiries.")}
            </p>
          </div>

          {/* Card 3: Concierge / Logistics */}
          <div className="w-full p-5 rounded-2xl bg-white border border-[#E8E2D9] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF5500] font-bold">
                  {t("contact.channel.logistics.badge", "Logistics")}
                </span>
                <div className="size-8 rounded-full bg-[#FAF8F5] border border-[#E8E2D9] flex items-center justify-center text-[#FF5500] shrink-0">
                  <Truck className="size-4" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 my-2">
                <h3 className="font-serif text-base text-[#111315] font-semibold tracking-tight">
                  {t("contact.channel.logistics.title", "Statewide Mobilization")}
                </h3>
                <p className="text-xs text-[#625D55] leading-relaxed font-sans">
                  {t("contact.channel.logistics.desc", "Heavy hydraulic fleet transport, professional loading, and on-site electrical distribution.")}
                </p>

                <div className="pt-2">
                  <a
                    href="https://wa.me/916262629944"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#FF5500] font-bold"
                  >
                    <MessageSquare className="size-3.5 shrink-0" />
                    <span>{t("contact.channel.logistics.whatsapp", "WhatsApp Quick Dispatch")}</span>
                  </a>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-[#625D55] mt-3 pt-3 border-t border-[#E8E2D9] font-sans">
              {t("contact.channel.logistics.sla", "Guaranteed < 60 minute emergency response in Nashik.")}
            </p>
          </div>

          {/* Card 4: Visit Us */}
          <div className="w-full p-5 rounded-2xl bg-white border border-[#E8E2D9] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF5500] font-bold">
                  {t("contact.channel.visit.badge", "Visit Us")}
                </span>
                <div className="size-8 rounded-full bg-[#FAF8F5] border border-[#E8E2D9] flex items-center justify-center text-[#FF5500] shrink-0">
                  <MapPin className="size-4" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 my-2">
                <h3 className="font-serif text-base text-[#111315] font-semibold tracking-tight">
                  {t("contact.channel.visit.title", "Nashik Central Depot")}
                </h3>
                <p className="text-xs text-[#625D55] leading-relaxed font-sans">
                  {t("contact.channel.visit.address", "Wadala - Pathardi Rd, behind Sudarshan Lawns, Indira Nagar, Nashik 422009")}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider bg-[#FAF8F5] border border-[#E8E2D9] text-[#524E48] font-bold">
                    {t("contact.channel.visit.midc", "MIDC Ambad")}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider bg-[#FAF8F5] border border-[#E8E2D9] text-[#524E48] font-bold">
                    {t("contact.channel.visit.satpur", "Satpur")}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider bg-[#FAF8F5] border border-[#E8E2D9] text-[#524E48] font-bold">
                    {t("contact.channel.visit.sinnar", "Sinnar")}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-[#625D55] mt-3 pt-3 border-t border-[#E8E2D9] font-sans">
              {t("contact.channel.visit.timing", "Inspections & consultations by appointment.")}
            </p>
          </div>
        </div>

        {/* Desktop 4-Column Grid (md and above) - Awwwards-Level Kinetic Cards with Staggered Scroll Entrance & Magnetic Hover */}
        <ul className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 py-10 px-4 sm:px-6 lg:px-8">
          {/* Channel 1: Phone */}
          <motion.li
            initial={{ opacity: 0, y: 45, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.21, 1.02, 0.47, 0.98] }}
            className="p-7 xl:p-8 flex flex-col justify-between rounded-2xl bg-white border border-[#E8E2D9] shadow-xs hover:shadow-2xl hover:border-[#FF5500]/50 transition-all duration-300 group min-h-[320px] relative overflow-hidden cursor-pointer"
          >
            {/* Top Accent Orange Beam on Hover */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF5500] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FF5500]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF5500] font-bold whitespace-nowrap py-1 leading-normal inline-block">
                  {t("contact.channel.phone.badge", "Phone")}
                </span>
                <div className="size-9 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] flex items-center justify-center text-[#FF5500] group-hover:bg-[#FF5500] group-hover:text-white group-hover:border-[#FF5500] transition-all duration-300 shadow-2xs shrink-0">
                  <Phone className="size-4" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 my-2">
                <a
                  href="tel:+916262629944"
                  className="font-serif text-xl xl:text-[22px] text-[#111315] font-normal tracking-tight transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
                >
                  <RollingText text="+91 62626 29944" singleLine />
                  <ArrowUpRight className="size-4 text-[#FF5500] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0" />
                </a>
                <span className="text-[11px] font-mono text-[#8C8275] whitespace-nowrap truncate">
                  {t("contact.channel.phone.role1", "Tanmay Avhad (Lead Dispatch Desk)")}
                </span>

                <a
                  href="tel:+919823197881"
                  className="font-serif text-lg xl:text-[20px] text-[#524E48] font-normal tracking-tight transition-colors pt-2.5 inline-flex items-center gap-1.5 whitespace-nowrap"
                >
                  <RollingText text="+91 98231 97881" singleLine />
                  <ArrowUpRight className="size-3.5 text-[#FF5500] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0" />
                </a>
                <span className="text-[11px] font-mono text-[#8C8275] whitespace-nowrap truncate">
                  {t("contact.channel.phone.role2", "Gopal Avhad (Technical Operations)")}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#625D55] mt-6 leading-relaxed font-sans pt-4 border-t border-[#E8E2D9] relative z-10">
              <span className="whitespace-nowrap">{t("contact.channel.phone.timing", "Mon — Sat: 9:00 AM — 7:00 PM")}</span>
              <br />
              <strong className="text-[#FF5500] font-semibold">
                {t("contact.channel.phone.247", "24/7 Rapid Emergency Dispatch")}
              </strong>
            </p>
          </motion.li>

          {/* Channel 2: Email */}
          <motion.li
            initial={{ opacity: 0, y: 45, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 1.02, 0.47, 0.98] }}
            className="p-7 xl:p-8 flex flex-col justify-between rounded-2xl bg-white border border-[#E8E2D9] shadow-xs hover:shadow-2xl hover:border-[#FF5500]/50 transition-all duration-300 group min-h-[320px] relative overflow-hidden cursor-pointer"
          >
            {/* Top Accent Orange Beam on Hover */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF5500] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FF5500]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF5500] font-bold whitespace-nowrap py-1 leading-normal inline-block">
                  {t("contact.channel.email.badge", "Email")}
                </span>
                <div className="size-9 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] flex items-center justify-center text-[#FF5500] group-hover:bg-[#FF5500] group-hover:text-white group-hover:border-[#FF5500] transition-all duration-300 shadow-2xs shrink-0">
                  <Mail className="size-4" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 my-2">
                <a
                  href="mailto:info@sarvadnyagenerators.com"
                  className="font-serif text-xl xl:text-[22px] text-[#111315] font-normal tracking-tight transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
                >
                  <RollingText text={t("contact.channel.email.cta", "Send Us A Message")} singleLine />
                  <ArrowUpRight className="size-4 text-[#FF5500] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0" />
                </a>
                <span className="text-[11px] font-mono text-[#8C8275] whitespace-nowrap truncate">
                  info@sarvadnyagenerators.com
                </span>

                <div className="flex flex-col text-[11px] text-[#625D55] gap-1 pt-2.5 font-sans">
                  <span className="whitespace-nowrap truncate">
                    <span className="font-medium text-[#111315]">{t("contact.channel.email.support", "Support:")}</span> support@sarvadnyagenerators.com
                  </span>
                  <span className="whitespace-nowrap truncate">
                    <span className="font-medium text-[#111315]">{t("contact.channel.email.sales", "Sales:")}</span> sales@sarvadnyagenerators.com
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#625D55] mt-6 leading-relaxed font-sans pt-4 border-t border-[#E8E2D9] relative z-10">
              {t("contact.channel.email.timing", "Response within 1–2 hours for rental inquiries and mobilization.")}
            </p>
          </motion.li>

          {/* Channel 3: Concierge / Logistics */}
          <motion.li
            initial={{ opacity: 0, y: 45, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.21, 1.02, 0.47, 0.98] }}
            className="p-7 xl:p-8 flex flex-col justify-between rounded-2xl bg-white border border-[#E8E2D9] shadow-xs hover:shadow-2xl hover:border-[#FF5500]/50 transition-all duration-300 group min-h-[320px] relative overflow-hidden cursor-pointer"
          >
            {/* Top Accent Orange Beam on Hover */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF5500] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FF5500]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF5500] font-bold whitespace-nowrap py-1 leading-normal inline-block">
                  {t("contact.channel.logistics.badge", "Concierge & Logistics")}
                </span>
                <div className="size-9 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] flex items-center justify-center text-[#FF5500] group-hover:bg-[#FF5500] group-hover:text-white group-hover:border-[#FF5500] transition-all duration-300 shadow-2xs shrink-0">
                  <Truck className="size-4" />
                </div>
              </div>

              <div className="flex flex-col gap-2 my-2">
                <h3 className="font-serif text-xl xl:text-[22px] text-[#111315] font-normal tracking-tight whitespace-nowrap">
                  <RollingText text={t("contact.channel.logistics.title", "Statewide Mobilization")} singleLine />
                </h3>
                <p className="text-xs text-[#625D55] leading-relaxed mt-1 font-sans">
                  {t("contact.channel.logistics.desc", "Dedicated heavy hydraulic fleet transport, professional loading, and on-site electrical distribution.")}
                </p>

                <div className="pt-2">
                  <a
                    href="https://wa.me/916262629944"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#FF5500] hover:underline font-bold whitespace-nowrap"
                  >
                    <MessageSquare className="size-3.5 shrink-0" />
                    <span>{t("contact.channel.logistics.whatsapp", "WhatsApp Quick Dispatch")}</span>
                  </a>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#625D55] mt-6 leading-relaxed font-sans pt-4 border-t border-[#E8E2D9] relative z-10">
              {t("contact.channel.logistics.sla", "Guaranteed < 60 minute emergency response in Nashik.")}
            </p>
          </motion.li>

          {/* Channel 4: Visit Us / Depots */}
          <motion.li
            initial={{ opacity: 0, y: 45, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.21, 1.02, 0.47, 0.98] }}
            className="p-7 xl:p-8 flex flex-col justify-between rounded-2xl bg-white border border-[#E8E2D9] shadow-xs hover:shadow-2xl hover:border-[#FF5500]/50 transition-all duration-300 group min-h-[320px] relative overflow-hidden cursor-pointer"
          >
            {/* Top Accent Orange Beam on Hover */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF5500] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FF5500]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF5500] font-bold whitespace-nowrap py-1 leading-normal inline-block">
                  {t("contact.channel.visit.badge", "Visit Us")}
                </span>
                <div className="size-9 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] flex items-center justify-center text-[#FF5500] group-hover:bg-[#FF5500] group-hover:text-white group-hover:border-[#FF5500] transition-all duration-300 shadow-2xs shrink-0">
                  <MapPin className="size-4" />
                </div>
              </div>

              <div className="flex flex-col gap-2 my-2">
                <h3 className="font-serif text-xl xl:text-[22px] text-[#111315] font-normal tracking-tight whitespace-nowrap">
                  <RollingText text={t("contact.channel.visit.title", "Nashik Central Depot")} singleLine />
                </h3>
                <p className="text-xs text-[#625D55] leading-relaxed mt-1 font-sans">
                  {t("contact.channel.visit.address", "Wadala - Pathardi Rd, behind Sudarshan Lawns, Indira Nagar, Nashik 422009")}
                </p>
              </div>

              {/* Regional Depots Pills */}
              <div className="flex flex-wrap gap-1.5 pt-3">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#FAF8F5] border border-[#E8E2D9] text-[#524E48] font-bold shadow-2xs whitespace-nowrap">
                  {t("contact.channel.visit.midc", "MIDC Ambad")}
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#FAF8F5] border border-[#E8E2D9] text-[#524E48] font-bold shadow-2xs whitespace-nowrap">
                  {t("contact.channel.visit.satpur", "Satpur")}
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#FAF8F5] border border-[#E8E2D9] text-[#524E48] font-bold shadow-2xs whitespace-nowrap">
                  {t("contact.channel.visit.sinnar", "Sinnar")}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#625D55] mt-6 leading-relaxed font-sans pt-4 border-t border-[#E8E2D9] relative z-10">
              {t("contact.channel.visit.timing", "Equipment inspections & consultations by appointment.")}
            </p>
          </motion.li>
        </ul>
      </div>
    </section>
  );
}
