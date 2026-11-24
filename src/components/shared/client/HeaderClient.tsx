"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFullscreen } from "@/lib/FullscreenContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  Phone,
  ArrowRight,
  X,
} from "lucide-react";
import { Button, LanguageSwitcher } from "@/components/common";
import { useLanguage } from "@/lib/LanguageContext";
import { useQuote } from "@/lib/QuoteContext";
import Image from "next/image";

/**
 * Navigation links for the full architectural curtain drawer
 */
const FULL_NAV_ITEMS = [
  {
    key: "nav.home",
    fallback: "Home",
    href: "/",
    image: "/images/generators/generator_38.png",
  },
  {
    key: "nav.about",
    fallback: "About",
    href: "/about",
    image: "/images/generators/generator_38.png",
  },
  {
    key: "nav.services",
    fallback: "Services",
    href: "/services",
    image: "/images/generators/generator_14.png",
  },
  {
    key: "nav.fleet",
    fallback: "Generator",
    href: "/generators",
    image: "/images/generators/generator_10.png",
  },
  {
    key: "nav.insights",
    fallback: "Blog",
    href: "/blog",
    image: "/images/generators/generator_36.png",
  },
  {
    key: "nav.contact",
    fallback: "Contact",
    href: "/contact",
    image: "/images/generators/generator_10.png",
  },
];

const SOCIAL_LINKS = [
  {
    label: "WhatsApp",
    href: "https://wa.me/916262629944",
    icon: (
      <svg className="size-4.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.122-.518-1.554-.645-2.535-2.227-2.613-2.33-.077-.104-.632-.843-.632-1.608 0-.765.399-1.142.541-1.298.144-.156.314-.195.42-.195.105 0 .211.001.303.006.097.004.228-.037.356.27.132.316.452 1.103.492 1.185.04.082.067.177.013.284-.053.106-.08.172-.16.265-.079.094-.167.21-.239.282-.08.081-.163.169-.07.329.093.16.413.682.887 1.104.611.543 1.127.712 1.287.792.16.08.254.07.348-.039.094-.109.4-.467.507-.627.106-.16.213-.133.359-.08.146.053.931.439 1.091.519.16.08.267.12.306.186.04.066.04.385-.104.79z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="size-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg className="size-4.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg className="size-4.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.67 1.67 0 1 0 0-3.34 1.67 1.67 0 0 0 0 3.34m1.39 9.74v-8.37H5.07v8.37h2.78z" />
      </svg>
    ),
  },
];

/**
 * Header Component (Client Component)
 *
 * Zenarate-Style Floating Dual-Island Navbar:
 * - Island 1 (Left): Brand logo emblem + clean direct navigation links (Generator, Services, How It Works, Blog, About, Contact)
 * - Island 2 (Right): Language switcher + Cart + Profile account + Request Quote CTA
 * - Auto-hides smoothly on scroll down to give 100% viewport clearance for sections & footer
 * - Phone call icon removed per feedback
 */
export default function Header({ children }: { children?: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const { isFullscreen } = useFullscreen();
  const pathname = usePathname();
  const { t } = useLanguage();

  // Scroll detection for transparent-to-solid transition & auto-hide on scroll down / show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = Math.max(0, window.scrollY);
      const isAtBottom =
        window.innerHeight + currentScrollY >=
        document.documentElement.scrollHeight - 240;

      // Solid background after 20px
      setIsScrolled(currentScrollY > 20);

      // 1. If curtain drawer is open, keep header visible
      if (isMenuOpen) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // 2. When reaching or scrolling inside the footer, ALWAYS keep navbar hidden
      // so it never overlaps or cuts off the footer cards
      if (isAtBottom && currentScrollY > 300) {
        setIsVisible(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      // 3. Always visible at the top of the page (Hero section)
      if (currentScrollY <= 80) {
        setIsVisible(true);
      } else {
        // Scrolling down -> hide navbar immediately
        if (currentScrollY > lastScrollY.current + 6) {
          setIsVisible(false);
        }
        // Scrolling up -> show navbar smoothly (only when not near footer)
        else if (currentScrollY < lastScrollY.current - 10) {
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    // Initialize check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  // Lock body scroll when the curtain drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close drawer and restore visibility upon route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsVisible(true);
  }, [pathname]);

  // Hide header on auth pages or in fullscreen mode
  const isAuthPage = pathname === "/login" || pathname === "/signup";
  if (isFullscreen || isAuthPage) {
    return null;
  }

  return (
    <>
      {/* 
        FLOATING CAPSULE NAVBAR
        Floating island pill: fixed top-3.5 sm:top-5 inset-x-0
        - Transparent glass at top -> Solid dark capsule on scroll
        - Auto-hides on scroll down to give 100% viewport clearance for sections & footer
        - Smoothly reveals on scroll up
      */}
      <header
        data-testid="site-header"
        className={cn(
          "fixed top-3.5 sm:top-5 inset-x-0 z-50 px-3 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300 transform",
          isVisible || isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-24 opacity-0 pointer-events-none"
        )}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-2.5 sm:gap-4">
          {/* 
            ========================================================================
            LEFT ISLAND CAPSULE: BRAND LOGO + MAIN NAVIGATION (Zenarate-Style)
            ========================================================================
          */}
          <nav
            aria-label="Main Navigation"
            className={cn(
              "pointer-events-auto relative rounded-full px-2.5 sm:px-3.5 py-1.5 flex items-center gap-1.5 sm:gap-2.5 lg:gap-3 transition-all duration-300 select-none shadow-md",
              isScrolled || isMenuOpen
                ? "bg-white/95 backdrop-blur-xl border border-[#E8E2D9] shadow-[0_12px_36px_rgba(0,0,0,0.08)] text-[#111315]"
                : "bg-white border border-[#E8E2D9] shadow-[0_8px_24px_rgba(0,0,0,0.06)] text-[#111315]"
            )}
          >
            {/* Brand Emblem + Monogram */}
            <div className="flex items-center gap-2 shrink-0 pr-1 lg:pr-2.5 lg:border-r lg:border-[#E8E2D9]">
              <Link
                href="/"
                className="size-8 sm:size-9 rounded-full bg-white hover:scale-105 active:scale-95 flex items-center justify-center p-0.5 shrink-0 shadow-2xs border border-[#E8E2D9] transition-all duration-200 overflow-hidden"
                aria-label="Sarvadnya Generator Home"
              >
                <img
                  src="/images/brand/sarvadnya-emblem.png"
                  alt="Sarvadnya Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                  draggable={false}
                />
              </Link>
              <Link
                href="/"
                className="flex flex-col text-left leading-none hover:opacity-90 transition-opacity"
              >
                <span className="font-sans font-extrabold text-xs sm:text-[13px] tracking-tight text-[#111315] uppercase whitespace-nowrap">
                  Sarvadnya
                </span>
                <span className="font-sans text-[9.5px] sm:text-[10px] text-[#FF5500] font-bold whitespace-nowrap">
                  सर्वज्ञ
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links (Clean Direct Links with Orange Active Capsule) */}
            <div className="hidden lg:flex items-center gap-1 text-sm font-semibold text-[#524E48]">
              {/* Direct Link 1: Home */}
              <Link
                href="/"
                className={cn(
                  "px-3.5 py-1.5 rounded-full transition-all duration-200 text-xs sm:text-[13px]",
                  pathname === "/"
                    ? "bg-[#FF5500] text-white font-bold shadow-xs"
                    : "text-[#524E48] hover:text-[#FF5500] hover:bg-[#FAF8F5] font-semibold"
                )}
              >
                {t("nav.home", "Home")}
              </Link>

              {/* Direct Link 2: About */}
              <Link
                href="/about"
                className={cn(
                  "px-3.5 py-1.5 rounded-full transition-all duration-200 text-xs sm:text-[13px]",
                  pathname === "/about"
                    ? "bg-[#FF5500] text-white font-bold shadow-xs"
                    : "text-[#524E48] hover:text-[#FF5500] hover:bg-[#FAF8F5] font-semibold"
                )}
              >
                {t("nav.about", "About")}
              </Link>

              {/* Direct Link 3: Services */}
              <Link
                href="/services"
                className={cn(
                  "px-3.5 py-1.5 rounded-full transition-all duration-200 text-xs sm:text-[13px]",
                  pathname.startsWith("/services")
                    ? "bg-[#FF5500] text-white font-bold shadow-xs"
                    : "text-[#524E48] hover:text-[#FF5500] hover:bg-[#FAF8F5] font-semibold"
                )}
              >
                {t("nav.services", "Services")}
              </Link>

              {/* Direct Link 4: Generator */}
              <Link
                href="/generators"
                className={cn(
                  "px-3.5 py-1.5 rounded-full transition-all duration-200 text-xs sm:text-[13px]",
                  pathname.startsWith("/generators")
                    ? "bg-[#FF5500] text-white font-bold shadow-xs"
                    : "text-[#524E48] hover:text-[#FF5500] hover:bg-[#FAF8F5] font-semibold"
                )}
              >
                {t("nav.fleet", "Generator")}
              </Link>

              {/* Direct Link 5: Blog */}
              <Link
                href="/blog"
                className={cn(
                  "px-3.5 py-1.5 rounded-full transition-all duration-200 text-xs sm:text-[13px]",
                  pathname.startsWith("/blog")
                    ? "bg-[#FF5500] text-white font-bold shadow-xs"
                    : "text-[#524E48] hover:text-[#FF5500] hover:bg-[#FAF8F5] font-semibold"
                )}
              >
                {t("nav.insights", "Blog")}
              </Link>

              {/* Direct Link 6: Contact */}
              <Link
                href="/contact"
                className={cn(
                  "px-3.5 py-1.5 rounded-full transition-all duration-200 text-xs sm:text-[13px]",
                  pathname === "/contact"
                    ? "bg-[#FF5500] text-white font-bold shadow-xs"
                    : "text-[#524E48] hover:text-[#FF5500] hover:bg-[#FAF8F5] font-semibold"
                )}
              >
                {t("nav.contact", "Contact")}
              </Link>
            </div>
          </nav>

          {/* 
            ========================================================================
            RIGHT ISLAND CAPSULE: ACTION CLUSTER (Zenarate-Style)
            - Language Switcher
            - Cart Button
            - Profile Dropdown
            - Request Quote CTA Button
            - Mobile Menu Hamburger Toggle (for mobile)
            ========================================================================
          */}
          <div
            className={cn(
              "pointer-events-auto rounded-full px-2 sm:px-3 py-1.5 flex items-center gap-1.5 sm:gap-2 transition-all duration-300 select-none shrink-0 shadow-md",
              isScrolled || isMenuOpen
                ? "bg-white/95 backdrop-blur-xl border border-[#E8E2D9] shadow-[0_12px_36px_rgba(0,0,0,0.08)] text-[#111315]"
                : "bg-white border border-[#E8E2D9] shadow-[0_8px_24px_rgba(0,0,0,0.06)] text-[#111315]"
            )}
          >
            {/* Language Switcher */}
            <LanguageSwitcher theme="light" />

            {/* Cart / Saved Fleet Wishlist Button */}
            <CartButton />

            {/* Primary Request Quote CTA (Visible on md and up) */}
            <Link
              href="/contact#form"
              onClick={(e) => {
                if (pathname === "/contact") {
                  e.preventDefault();
                  document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="hidden md:inline-flex items-center justify-center rounded-full bg-[#FF5500] hover:bg-[#E04B00] active:scale-95 text-white font-bold text-xs sm:text-sm px-4 py-1.5 transition-all duration-200 shadow-xs whitespace-nowrap cursor-pointer ml-1"
            >
              {t("nav.requestQuote", "Request Quote")}
            </Link>

            {/* Mobile Curtain Drawer Toggle Button (Visible on < lg) */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center rounded-full bg-[#111315] text-white hover:bg-[#FF5500] size-8 sm:size-8.5 transition-colors cursor-pointer shrink-0 ml-0.5"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="w-4 h-3.5 text-white"
                viewBox="0 0 18 14"
                fill="none"
                aria-hidden="true"
              >
                <motion.line
                  x1={2}
                  y1={2.5}
                  x2={16}
                  y2={2.5}
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  animate={
                    isMenuOpen
                      ? { x1: 4, y1: 2, x2: 14, y2: 12 }
                      : { x1: 2, y1: 2.5, x2: 16, y2: 2.5 }
                  }
                  transition={{ duration: 0.2 }}
                />
                <motion.line
                  x1={2}
                  y1={7}
                  x2={16}
                  y2={7}
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.15 }}
                />
                <motion.line
                  x1={2}
                  y1={11.5}
                  x2={16}
                  y2={11.5}
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  animate={
                    isMenuOpen
                      ? { x1: 4, y1: 12, x2: 14, y2: 2 }
                      : { x1: 2, y1: 11.5, x2: 16, y2: 11.5 }
                  }
                  transition={{ duration: 0.2 }}
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* 
        NAVBAR-ALIGNED ARCHITECTURAL MENU PANEL
        Matches exact w-full max-w-5xl width of the floating navbar without altering it
      */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Click-outside Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "linear" }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/45"
              aria-hidden="true"
            />

            {/* Dropdown Drawer Aligned to Navbar Width */}
            <div className="fixed top-[4.75rem] sm:top-[5.25rem] inset-x-0 z-40 flex justify-center px-3 sm:px-6 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
                className="pointer-events-auto w-full max-w-5xl max-h-[calc(100vh-6rem)] flex flex-col bg-white text-[#111315] border border-[#E8E2D9] rounded-3xl shadow-[0_24px_70px_rgba(0,0,0,0.12)] overflow-y-auto overscroll-contain"
              >
                <div className="w-full px-5 sm:px-8 py-6 sm:py-7 flex flex-col justify-between gap-6">
                  {/* Navigation Grid */}
                  <nav aria-label="Mega menu navigation">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5">
                      {FULL_NAV_ITEMS.map((item, index) => {
                        const isActive =
                          item.href === "/"
                            ? pathname === "/"
                            : pathname.startsWith(item.href);

                        return (
                          <motion.li
                            key={item.href}
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.04 + index * 0.03,
                              duration: 0.25,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                          >
                            <Link
                              href={item.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="group relative flex items-center justify-between w-full px-3 py-2.5 rounded-2xl hover:bg-black/[0.03] transition-colors text-left"
                            >
                              <div className="flex items-baseline gap-3.5">
                                {/* Monospace Index Numeral */}
                                <span className="font-mono text-xs text-[#FF5500]/75 group-hover:text-[#FF5500] font-bold transition-colors">
                                  0{index + 1}
                                </span>

                                {/* Editorial Title */}
                                <span
                                  className={cn(
                                    "font-sans font-extrabold text-xl sm:text-2xl leading-tight tracking-tight transition-all duration-200",
                                    isActive
                                      ? "text-[#FF5500] translate-x-0.5"
                                      : "text-[#111315] group-hover:text-[#FF5500] group-hover:translate-x-1"
                                  )}
                                >
                                  {t(item.key, item.fallback)}
                                </span>
                              </div>

                              {/* Arrow Glider on Hover */}
                              <ArrowRight
                                className={cn(
                                  "w-5 h-5 text-[#FF5500] transition-all duration-200 shrink-0",
                                  isActive
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                                )}
                              />
                            </Link>
                          </motion.li>
                        );
                      })}
                    </ul>
                  </nav>

                  {/* Drawer Language Selector */}
                  <div className="pt-4 border-t border-[#E8E2D9]">
                    <LanguageSwitcher variant="drawer" theme="light" />
                  </div>

                  {/* Bottom Action Strip */}
                  <div className="pt-4 border-t border-[#E8E2D9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
                    {/* Direct Contact Links */}
                    <div className="flex flex-wrap items-center gap-5">
                      <a
                        href="tel:+916262629944"
                        className="font-mono font-bold text-[#111315] hover:text-[#FF5500] transition-colors flex items-center gap-2"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#FF5500]" />
                        +91 62626 29944
                      </a>
                      <a
                        href="mailto:info@sarvadnyagenerators.com"
                        className="text-[#524E48] hover:text-[#111315] transition-colors"
                      >
                        info@sarvadnyagenerators.com
                      </a>
                    </div>

                    {/* Social Media & Quick Quote Action */}
                    <div className="flex items-center gap-3">
                      {SOCIAL_LINKS.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="size-8 rounded-full border border-[#E8E2D9] bg-[#FAF8F5] hover:bg-[#FF5500] hover:text-white hover:border-[#FF5500] flex items-center justify-center text-[#524E48] transition-all shadow-2xs"
                        >
                          {social.icon}
                        </a>
                      ))}
                      <Link
                        href="/contact#form"
                        onClick={(e) => {
                          setIsMenuOpen(false);
                          if (pathname === "/contact") {
                            e.preventDefault();
                            document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                        className="rounded-full bg-[#FF5500] hover:bg-[#E04B00] text-white font-bold px-4 py-1.5 transition-all duration-200 ml-2 shadow-xs cursor-pointer"
                      >
                        {t("nav.requestQuote", "Request Quote")}
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/**
 * Saved Fleet & Wishlist Cart Button
 */
function CartButton() {
  const { totalItems } = useQuote();

  return (
    <Link
      href="/cart"
      className="relative flex items-center justify-center size-8 sm:size-9 rounded-full border border-[#E8E2D9] bg-[#FAF8F5] hover:bg-[#F4EDE2] transition-all shadow-2xs text-[#111315] hover:text-[#FF5500] hover:border-[#FF5500]/40 shrink-0 cursor-pointer"
      aria-label="Generator Cart"
      title="View Detailed Cart"
    >
      <ShoppingCart className="w-3.5 h-3.5" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 size-4 rounded-full bg-[#FF5500] text-white text-[9.5px] font-bold flex items-center justify-center tabular-nums shadow-xs">
          {totalItems}
        </span>
      )}
    </Link>
  );
}
