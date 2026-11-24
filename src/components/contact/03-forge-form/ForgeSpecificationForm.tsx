"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, ChevronDown, Check } from "lucide-react";
import { RollingText } from "../common/RollingText";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";

interface LuxurySelectOption {
  value: string;
  label: string;
}

function LuxurySelect({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  options: LuxurySelectOption[];
  placeholder?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((o) => o.value === value) || options[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={selectRef} className="relative w-full">
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          "w-full flex items-center justify-between bg-white border border-[#E8E2D9] rounded-xl px-4 py-3 sm:px-5 sm:py-3.5 text-left text-sm sm:text-base font-sans font-medium text-[#111315] shadow-2xs transition-all duration-200 cursor-pointer",
          isOpen ? "border-[#FF5500] ring-2 ring-[#FF5500]/15" : "hover:border-[#111315]/40"
        )}
      >
        <span className="truncate pr-2">{selectedOption ? selectedOption.label : placeholder}</span>
        <div
          className={cn(
            "size-6 rounded-md bg-[#FAF8F5] border border-[#E8E2D9] flex items-center justify-center text-[#FF5500] transition-transform duration-200 shadow-2xs shrink-0",
            isOpen && "rotate-180 bg-[#FF5500]/10 border-[#FF5500]/30"
          )}
        >
          <ChevronDown className="size-3.5" />
        </div>
      </button>

      {/* Floating Animated Luxury Popover Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-0 right-0 top-full mt-1.5 z-50 bg-white border border-[#E8E2D9] rounded-2xl shadow-[0_16px_40px_rgba(31,31,30,0.14)] p-1.5 flex flex-col gap-0.5 overflow-hidden"
          >
            {options.map((option) => {
              const isSelected = option.value === value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-xs sm:text-sm font-sans transition-all duration-150 cursor-pointer",
                    isSelected
                      ? "bg-[#FFF4ED] text-[#FF5500] font-bold"
                      : "text-[#111315] hover:bg-[#FAF8F5] font-medium"
                  )}
                >
                  <span className="truncate pr-2">{option.label}</span>
                  {isSelected && <Check className="size-4 text-[#FF5500] shrink-0" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const CONTACT_METHOD_OPTIONS: LuxurySelectOption[] = [
  { value: "phone", label: "Direct Phone Call" },
  { value: "whatsapp", label: "WhatsApp Message" },
  { value: "email", label: "Email" },
];

const CAPACITY_OPTIONS: LuxurySelectOption[] = [
  { value: "5-25kVA", label: "5 – 25 kVA (Commercial & Retail)" },
  { value: "30-62.5kVA", label: "30 – 62.5 kVA (Events & Medium Load)" },
  { value: "82.5-125kVA", label: "82.5 – 125 kVA (Industrial / Manufacturing)" },
  { value: "160-250kVA", label: "160 – 250 kVA (Heavy Continuous Prime)" },
  { value: "multiple", label: "Multiple DG Synchronized Fleet" },
];

const APPLICATION_OPTIONS: LuxurySelectOption[] = [
  { value: "industrial", label: "Industrial Manufacturing / Plant" },
  { value: "wedding", label: "Grand Wedding / VIP Celebration" },
  { value: "event", label: "Concert / Public Festival" },
  { value: "construction", label: "Infrastructure & Construction Site" },
  { value: "emergency", label: "Emergency Breakdown Standby" },
];

/**
 * ForgeSpecificationForm Component (Bright Luxury Theme)
 * 
 * Exact Forge Automotive Section 2 ("Define Your Specification") architecture:
 * - 2-Column luxury split layout on crisp architectural canvas
 * - Sleek bright fieldsets with custom luxury floating dropdowns
 * - Signature Forge Rolling character submit button
 * - Preserves all contact and quote inquiry fields
 */
export function ForgeSpecificationForm() {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    preferredContact: "phone",
    email: "",
    phone: "",
    location: "",
    capacity: "82.5-125kVA",
    application: "industrial",
    message: "",
  });

  const contactMethodOptions: LuxurySelectOption[] = [
    { value: "phone", label: t("contact.form.method.phone", "Direct Phone Call") },
    { value: "whatsapp", label: t("contact.form.method.whatsapp", "WhatsApp Message") },
    { value: "email", label: t("contact.form.method.email", "Email") },
  ];

  const capacityOptions: LuxurySelectOption[] = [
    { value: "5-25kVA", label: t("contact.form.cap1", "5 – 25 kVA (Commercial & Retail)") },
    { value: "30-62.5kVA", label: t("contact.form.cap2", "30 – 62.5 kVA (Events & Medium Load)") },
    { value: "82.5-125kVA", label: t("contact.form.cap3", "82.5 – 125 kVA (Industrial / Manufacturing)") },
    { value: "160-250kVA", label: t("contact.form.cap4", "160 – 250 kVA (Heavy Continuous Prime)") },
    { value: "multiple", label: t("contact.form.cap5", "Multiple DG Synchronized Fleet") },
  ];

  const applicationOptions: LuxurySelectOption[] = [
    { value: "industrial", label: t("contact.form.app1", "Industrial Manufacturing / Plant") },
    { value: "wedding", label: t("contact.form.app2", "Grand Wedding / VIP Celebration") },
    { value: "event", label: t("contact.form.app3", "Concert / Public Festival") },
    { value: "construction", label: t("contact.form.app4", "Infrastructure & Construction Site") },
    { value: "emergency", label: t("contact.form.app5", "Emergency Breakdown Standby") },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enquiry submitted:", formData);
    setIsSubmitted(true);
  };

  return (
    <section id="form" className="relative w-full bg-white text-[#111315] py-12 sm:py-28 px-3.5 sm:px-10 lg:px-20 z-20 border-b border-[#E8E2D9]">
      
      {/* Ambient Warm Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#FF5500]/[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-16 lg:gap-24 items-start">
        
        {/* LEFT COLUMN: Editorial Heading & Context (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full lg:sticky lg:top-36">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-2xl sm:text-5xl lg:text-6xl text-[#111315] font-normal leading-[1.15] sm:leading-[1.1] tracking-tight mb-3 sm:mb-6"
            >
              {t("contact.form.title", "Define Your Specification")}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-xs sm:text-base text-[#625D55] leading-relaxed font-sans max-w-lg mb-2 sm:mb-0"
            >
              {t(
                "contact.form.desc",
                "Share your project parameters, load requirements, and site location. Our senior electrical engineers will prepare an exact, CPCB-IV+ compliant turnkey power proposal within 1–2 business hours."
              )}
            </motion.p>
          </div>
        </div>

        {/* RIGHT COLUMN: Minimalist Form (7 cols) */}
        <div className="lg:col-span-7 w-full">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 sm:p-14 rounded-2xl sm:rounded-3xl bg-[#FAF8F5] border border-[#E8E2D9] text-center flex flex-col items-center justify-center gap-5 sm:gap-6 shadow-sm"
            >
              <div className="size-14 sm:size-16 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500]">
                <CheckCircle2 className="size-7 sm:size-8" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#111315] font-normal">
                {t("contact.form.successTitle", "Enquiry Received")}
              </h3>
              <p className="text-[#625D55] text-xs sm:text-base max-w-md mx-auto leading-relaxed">
                {t(
                  "contact.form.successDesc",
                  "Thank you for defining your power specification. Tanmay Avhad and our engineering dispatch desk are reviewing your details and will contact you shortly."
                )}
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="mt-3 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full border border-[#111315]/20 bg-white text-xs font-mono uppercase tracking-widest text-[#111315] hover:border-[#FF5500] hover:text-[#FF5500] transition-colors shadow-2xs cursor-pointer"
              >
                {t("contact.form.submitAnother", "Submit another enquiry")}
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6 w-full p-4 sm:p-12 rounded-2xl sm:rounded-3xl bg-[#FAF8F5] border border-[#E8E2D9] shadow-xs sm:shadow-sm">
              
              {/* Full Name Field */}
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <label className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#71695F] font-semibold">
                  {t("contact.form.fullName", "Full Name")} <span className="text-[#FF5500]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder={t("contact.form.namePlaceholder", "e.g. Rahul Sharma / Industrial Plant Head")}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-white border border-[#E8E2D9] focus:border-[#FF5500] focus:ring-2 focus:ring-[#FF5500]/15 rounded-xl px-4 py-3 sm:px-5 sm:py-3.5 text-sm sm:text-base text-[#111315] placeholder-black/30 outline-none transition-all duration-200 shadow-2xs font-sans font-medium"
                />
              </div>

              {/* Preferred Contact Method & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                
                {/* Method */}
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <label className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#71695F] font-semibold">
                    {t("contact.form.contactMethod", "Preferred Contact Method")}
                  </label>
                  <LuxurySelect
                    value={formData.preferredContact}
                    onChange={(val) => setFormData({ ...formData, preferredContact: val })}
                    options={contactMethodOptions}
                  />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <label className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#71695F] font-semibold">
                    {t("contact.form.phone", "Phone Number")} <span className="text-[#FF5500]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98000 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-[#E8E2D9] focus:border-[#FF5500] focus:ring-2 focus:ring-[#FF5500]/15 rounded-xl px-4 py-3 sm:px-5 sm:py-3.5 text-sm sm:text-base text-[#111315] placeholder-black/30 outline-none transition-all duration-200 shadow-2xs font-sans font-medium"
                  />
                </div>

              </div>

              {/* Email & Location Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                
                {/* Email Address */}
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <label className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#71695F] font-semibold">
                    {t("contact.form.email", "Email Address")} <span className="text-[#FF5500]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-[#E8E2D9] focus:border-[#FF5500] focus:ring-2 focus:ring-[#FF5500]/15 rounded-xl px-4 py-3 sm:px-5 sm:py-3.5 text-sm sm:text-base text-[#111315] placeholder-black/30 outline-none transition-all duration-200 shadow-2xs font-sans font-medium"
                  />
                </div>

                {/* Site Location */}
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <label className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#71695F] font-semibold">
                    {t("contact.form.location", "Site Location / Pincode")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("contact.form.locationPlaceholder", "e.g. Ambad MIDC, Nashik 422010")}
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-white border border-[#E8E2D9] focus:border-[#FF5500] focus:ring-2 focus:ring-[#FF5500]/15 rounded-xl px-4 py-3 sm:px-5 sm:py-3.5 text-sm sm:text-base text-[#111315] placeholder-black/30 outline-none transition-all duration-200 shadow-2xs font-sans font-medium"
                  />
                </div>

              </div>

              {/* Required Fleet Capacity & Application Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                
                {/* Generator Capacity */}
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <label className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#71695F] font-semibold">
                    {t("contact.form.capacity", "Required Capacity (kVA)")}
                  </label>
                  <LuxurySelect
                    value={formData.capacity}
                    onChange={(val) => setFormData({ ...formData, capacity: val })}
                    options={capacityOptions}
                  />
                </div>

                {/* Application */}
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <label className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#71695F] font-semibold">
                    {t("contact.form.application", "Application / Industry")}
                  </label>
                  <LuxurySelect
                    value={formData.application}
                    onChange={(val) => setFormData({ ...formData, application: val })}
                    options={applicationOptions}
                  />
                </div>

              </div>

              {/* Message / Project Details */}
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <label className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#71695F] font-semibold">
                  {t("contact.form.notes", "Project Notes & Specific Requirements (Optional)")}
                </label>
                <textarea
                  rows={3}
                  placeholder={t(
                    "contact.form.notesPlaceholder",
                    "Tell us about your expected peak load, daily operating hours, diesel logistics preference, or site constraints..."
                  )}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-[#E8E2D9] focus:border-[#FF5500] focus:ring-2 focus:ring-[#FF5500]/15 rounded-xl px-4 py-3 sm:px-5 sm:py-3.5 text-sm sm:text-base text-[#111315] placeholder-black/30 outline-none transition-all duration-200 resize-none shadow-2xs font-sans font-medium"
                />
              </div>

              {/* Submit Button Matching Forge Style with Rolling Character Animation */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-3.5 sm:gap-4 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-[#111315] hover:bg-[#FF5500] text-white font-mono text-xs sm:text-sm uppercase tracking-[0.22em] font-bold shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
                >
                  <RollingText
                    text={t("contact.form.submit", "Submit Enquiry")}
                    singleLine
                    charClassName="group-hover:text-white"
                  />
                  <ArrowRight className="size-4 text-[#FF5500] group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300" />
                </button>
              </div>

            </form>
          )}
        </div>

      </div>

    </section>
  );
}
