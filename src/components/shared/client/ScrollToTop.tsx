"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * ScrollToTop Component
 *
 * Ensures that upon page navigation (e.g., clicking About, Services, Generators, Contact from Footer),
 * the window immediately resets to the top (0, 0) instantly without any jarring smooth-scroll
 * animation or upward scrolling lag.
 */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Instantly reset scroll to top without any browser smooth-scroll animation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}
