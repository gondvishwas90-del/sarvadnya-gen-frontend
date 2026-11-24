import type { Language } from "./LanguageContext";

const MONTH_MAP_HI: Record<string, string> = {
  january: "जनवरी",
  february: "फरवरी",
  march: "मार्च",
  april: "अप्रैल",
  may: "मई",
  june: "जून",
  july: "जुलाई",
  august: "अगस्त",
  september: "सितंबर",
  october: "अक्टूबर",
  november: "नवंबर",
  december: "दिसंबर",
};

const MONTH_MAP_MR: Record<string, string> = {
  january: "जानेवारी",
  february: "फेब्रुवारी",
  march: "मार्च",
  april: "एप्रिल",
  may: "मे",
  june: "जून",
  july: "जुलै",
  august: "ऑगस्ट",
  september: "सप्टेंबर",
  october: "ऑक्टोबर",
  november: "नोव्हेंबर",
  december: "डिसेंबर",
};

/**
 * Formats date strings like "May 05, 2026" or "April 28, 2026" into localized format.
 */
export function formatBlogDate(dateStr: string, language: Language): string {
  if (!dateStr || language === "en") return dateStr;

  // Pattern: "Month Day, Year" e.g., "May 05, 2026" or "May 5, 2026"
  const match = dateStr.match(/^([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})$/);
  if (!match) return dateStr;

  const [, month, day, year] = match;
  const lowerMonth = month.toLowerCase();

  if (language === "hi") {
    const localizedMonth = MONTH_MAP_HI[lowerMonth] || month;
    return `${day} ${localizedMonth}, ${year}`;
  }

  if (language === "mr") {
    const localizedMonth = MONTH_MAP_MR[lowerMonth] || month;
    return `${day} ${localizedMonth}, ${year}`;
  }

  return dateStr;
}
