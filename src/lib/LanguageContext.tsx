"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { translateTextForDOM } from "./autoTranslations";
import { en, hi, mr } from "@/locales";

export type Language = "en" | "hi" | "mr";

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
}

export const TRANSLATIONS: Record<Language, Record<string, string>> = {
  en,
  hi,
  mr,
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => { },
  t: (key: string, fallback?: string) => fallback || key,
});

const SKIP_TAGS = new Set([
  "SCRIPT",
  "STYLE",
  "NOSCRIPT",
  "TEXTAREA",
  "CODE",
  "PRE",
  "SVG",
]);

const TRANSLATABLE_ATTRS = ["placeholder", "title", "aria-label"] as const;

// Build fast reverse lookup from existing TRANSLATIONS.en values -> target language
const KEY_REVERSE_MAP: Record<"hi" | "mr", Map<string, string>> = {
  hi: new Map(),
  mr: new Map(),
};
for (const [key, enVal] of Object.entries(TRANSLATIONS.en)) {
  const norm = enVal.replace(/\s+/g, " ").trim();
  if (!norm) continue;
  if (TRANSLATIONS.hi[key]) KEY_REVERSE_MAP.hi.set(norm, TRANSLATIONS.hi[key]);
  if (TRANSLATIONS.mr[key]) KEY_REVERSE_MAP.mr.set(norm, TRANSLATIONS.mr[key]);
}

function translateAnyString(raw: string, lang: Language): string | null {
  if (lang === "en") return null;

  const match = raw.match(/^(\s*)([\s\S]*?)(\s*)$/);
  if (!match) return null;

  const [, leading, body, trailing] = match;
  const norm = body.replace(/\s+/g, " ").trim();
  if (!norm || !/[a-zA-Z]/.test(norm)) return null;

  const direct = KEY_REVERSE_MAP[lang].get(norm);
  if (direct) {
    return `${leading}${direct}${trailing}`;
  }

  return translateTextForDOM(raw, lang);
}

function walkAndTranslate(root: Node, lang: Language) {
  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          const el = node as HTMLElement;
          if (SKIP_TAGS.has(el.tagName)) return NodeFilter.FILTER_REJECT;
          if (el.getAttribute?.("data-no-translate") === "true") {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }

        if (node.nodeType === Node.TEXT_NODE) {
          const parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          if (SKIP_TAGS.has(parent.tagName)) return NodeFilter.FILTER_REJECT;
          if (parent.closest?.('[data-no-translate="true"]')) {
            return NodeFilter.FILTER_REJECT;
          }
          const text = node.nodeValue || "";
          if (!text.trim() || !/[a-zA-Z]/.test(text)) {
            return NodeFilter.FILTER_SKIP;
          }
          return NodeFilter.FILTER_ACCEPT;
        }

        return NodeFilter.FILTER_SKIP;
      },
    }
  );

  const textNodes: Text[] = [];
  const elementNodes: HTMLElement[] = [];

  let current: Node | null = walker.nextNode();
  while (current) {
    if (current.nodeType === Node.TEXT_NODE) {
      textNodes.push(current as Text);
    } else if (current.nodeType === Node.ELEMENT_NODE) {
      elementNodes.push(current as HTMLElement);
    }
    current = walker.nextNode();
  }

  for (const textNode of textNodes) {
    const original = (textNode as any).__origText ?? textNode.nodeValue ?? "";
    if (!(textNode as any).__origText) {
      (textNode as any).__origText = original;
    }

    if (lang === "en") {
      if (textNode.nodeValue !== original) {
        textNode.nodeValue = original;
      }
      continue;
    }

    const translated = translateAnyString(original, lang);
    if (translated && textNode.nodeValue !== translated) {
      textNode.nodeValue = translated;
    }
  }

  for (const el of elementNodes) {
    for (const attr of TRANSLATABLE_ATTRS) {
      const val = el.getAttribute(attr);
      if (!val) continue;

      const prop = `__orig_${attr}`;
      const original = (el as any)[prop] ?? val;
      if (!(el as any)[prop]) {
        (el as any)[prop] = original;
      }

      if (lang === "en") {
        if (el.getAttribute(attr) !== original) {
          el.setAttribute(attr, original);
        }
        continue;
      }

      const translated = translateAnyString(original, lang);
      if (translated && el.getAttribute(attr) !== translated) {
        el.setAttribute(attr, translated);
      }
    }
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const pathname = usePathname();
  const observerRef = useRef<MutationObserver | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("preferred_lang") as Language;
      if (saved && ["en", "hi", "mr"].includes(saved)) {
        setLanguageState(saved);
      }
    } catch {
      // LocalStorage unavailable
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("preferred_lang", lang);
    } catch {
      // LocalStorage unavailable
    }
  };

  useEffect(() => {
    if (typeof document === "undefined") return;

    walkAndTranslate(document.body, language);

    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    if (language !== "en") {
      const observer = new MutationObserver((mutations) => {
        for (const m of mutations) {
          if (m.type === "childList") {
            m.addedNodes.forEach((node) => {
              if (node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE) {
                walkAndTranslate(node, language);
              }
            });
          } else if (m.type === "characterData" && m.target) {
            const node = m.target as Text;
            const parent = node.parentElement;
            if (parent && !parent.closest?.('[data-no-translate="true"]')) {
              const original = (node as any).__origText;
              if (original && node.nodeValue === original) {
                const translated = translateAnyString(original, language);
                if (translated && node.nodeValue !== translated) {
                  node.nodeValue = translated;
                }
              }
            }
          }
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true,
      });

      observerRef.current = observer;
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [language, pathname]);

  const t = (key: string, fallback?: string): string => {
    return TRANSLATIONS[language]?.[key] || fallback || TRANSLATIONS.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
