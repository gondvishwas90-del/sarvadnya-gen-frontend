"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage, type Language } from "@/lib/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface LanguageOption {
  code: Language;
  label: string;
  nativeLabel: string;
}

const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "English", nativeLabel: "English" },
  { code: "hi", label: "Hindi", nativeLabel: "हिन्दी" },
  { code: "mr", label: "Marathi", nativeLabel: "मराठी" },
];

interface LanguageSwitcherProps {
  className?: string;
  variant?: "dropdown" | "drawer" | "pill";
  theme?: "light" | "dark" | "glass";
  dropDirection?: "down" | "up";
}

/**
 * LanguageSwitcher Component
 * 
 * Clean, logo-free architectural pill dropdown:
 * - Direct typography labels with uppercase ISO code (EN, HI, MR)
 * - Zero flag graphics or logos per user specifications
 * - Signature Orange (#FF5500) active state highlighting
 * - Outside-click auto-close with keyboard navigation support
 */
export function LanguageSwitcher({
  className,
  variant = "dropdown",
  theme = "light",
  dropDirection = "down",
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const currentOpt = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  // Close when clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
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

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const isDark = theme === "dark" || theme === "glass";

  // Drawer / Mobile layout format
  if (variant === "drawer") {
    return (
      <div className={cn("flex flex-col gap-2 w-full", className)} data-no-translate="true">
        <span
          className={cn(
            "text-[11px] font-sans font-bold uppercase tracking-wider",
            isDark ? "text-white/60" : "text-[#625D55]"
          )}
        >
          Language / भाषा:
        </span>
        <div className="grid grid-cols-3 gap-2 w-full">
          {LANGUAGES.map((opt) => {
            const isActive = language === opt.code;
            return (
              <button
                key={opt.code}
                type="button"
                onClick={() => setLanguage(opt.code)}
                className={cn(
                  "py-2 px-2.5 rounded-xl flex items-center justify-center gap-1.5 border transition-all duration-200 cursor-pointer text-xs font-bold font-sans",
                  isActive
                    ? "bg-[#FF5500] text-white border-[#FF5500] shadow-sm"
                    : isDark
                      ? "bg-white/10 text-white border-white/15 hover:bg-white/20 hover:border-white/30"
                      : "bg-white text-[#1F1F1E] border-[#E8E2D9] hover:border-[#FF5500]"
                )}
              >
                <span className={cn("text-[10px] uppercase font-mono font-bold", isActive ? "text-white" : "text-[#7A756D]")}>
                  {opt.code}
                </span>
                <span>{opt.nativeLabel}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Exact Match: Floating Pill Trigger + Dropdown Card (No Logos, Orange Active)
  return (
    <div ref={containerRef} data-no-translate="true" className={cn("relative inline-block text-left shrink-0", className)}>
      {/* Pill Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "group flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border transition-all shadow-xs cursor-pointer select-none shrink-0 font-sans",
          isDark
            ? isOpen
              ? "bg-white/25 border-white/40 text-white"
              : "bg-white/10 hover:bg-white/20 border-white/15 text-white"
            : isOpen
              ? "border-[#FF5500] ring-2 ring-[#FF5500]/15 bg-white text-[#FF5500]"
              : "border-[#E8E2D9] hover:border-[#FF5500] hover:bg-[#FAF8F5] text-[#1F1F1E]"
        )}
        aria-expanded={isOpen}
        aria-label="Select Language"
      >
        <span className="text-xs font-black uppercase tracking-wider text-[#FF5500]">
          {currentOpt.code}
        </span>
        <span
          className={cn(
            "hidden sm:inline text-xs font-bold tracking-tight",
            isDark ? "text-white" : "text-[#1F1F1E]"
          )}
        >
          {currentOpt.nativeLabel}
        </span>
        <ChevronDown
          className={cn(
            "w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-200 shrink-0",
            isDark
              ? "text-white/70 group-hover:text-white"
              : "text-[#625D55] group-hover:text-[#FF5500]",
            isOpen && "rotate-180 text-[#FF5500]"
          )}
        />
      </button>

      {/* Floating Dropdown Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.96 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "absolute right-0 z-[100] min-w-[155px] bg-white border border-[#E8E2D9] rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.18)] p-1.5 overflow-hidden text-[#1F1F1E]",
              dropDirection === "up" ? "bottom-full mb-2" : "top-full mt-2"
            )}
          >
            <div className="flex flex-col gap-0.5">
              {LANGUAGES.map((opt) => {
                const isActive = language === opt.code;
                return (
                  <button
                    key={opt.code}
                    type="button"
                    onClick={() => {
                      setLanguage(opt.code);
                      setIsOpen(false);
                    }}
                    className={cn(
                      "w-full flex items-center justify-between gap-3 px-3 py-2 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer text-left font-sans",
                      isActive
                        ? "bg-[#FF5500] text-white shadow-xs"
                        : "text-[#1F1F1E] hover:bg-[#FAF8F5] hover:text-[#FF5500]"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          "text-[10px] font-bold font-mono uppercase px-1.5 py-0.5 rounded",
                          isActive ? "bg-white/20 text-white" : "bg-black/5 text-[#625D55]"
                        )}
                      >
                        {opt.code}
                      </span>
                      <span>{opt.nativeLabel}</span>
                    </div>
                    {isActive && <Check className="w-3.5 h-3.5 text-white shrink-0" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
