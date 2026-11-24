import type { Language } from "./LanguageContext";

const HINDI_WORDS: Record<string, string> = {
  "Portable": "पोर्टेबल",
  "Silent": "साइलेंट",
  "Industrial": "इंडस्ट्रियल",
  "Commercial": "कमर्शियल",
  "Standby": "स्टैंडबाय",
  "Inverter": "इन्वर्टर",
  "Generator": "जनरेटर",
  "Generators": "जनरेटर",
  "Towable": "टोवेबल",
  "Honda": "होंडा",
  "Kirloskar": "किर्लोस्कर",
  "Cummins": "कमिंस",
  "Mahindra": "महिंद्रा",
  "Powerol": "पॉवरोल",
  "Yamaha": "यामाहा",
  "Caterpillar": "कैटरपिलर",
  "Greaves": "ग्रीव्स",
  "Mid-Range": "मिड-रेंज",
  "Heavy": "हैवी",
};

const MARATHI_WORDS: Record<string, string> = {
  "Portable": "पोर्टेबल",
  "Silent": "सायलेंट",
  "Industrial": "इंडस्ट्रियल",
  "Commercial": "कमर्शियल",
  "Standby": "स्टँडबाय",
  "Inverter": "इन्व्हर्टर",
  "Generator": "जनरेटर",
  "Generators": "जनरेटर",
  "Towable": "टोवेबल",
  "Honda": "होंडा",
  "Kirloskar": "किर्लोस्कर",
  "Cummins": "कमिन्स",
  "Mahindra": "महिंद्रा",
  "Powerol": "पॉवरोल",
  "Yamaha": "यामाहा",
  "Caterpillar": "कॅटरपिलर",
  "Greaves": "ग्रीव्हज",
  "Mid-Range": "मिड-रेंज",
  "Heavy": "हेवी",
};

/**
 * Translates generator names into clean Hindi or Marathi based on current language.
 * E.g. "125 kVA Industrial Cummins Generator" -> "125 kVA इंडस्ट्रियल कमिंस जनरेटर"
 */
export function translateGeneratorName(name: string | undefined | null, lang: Language): string {
  if (!name) return "";
  if (lang === "en") return name;

  const dict = lang === "mr" ? MARATHI_WORDS : HINDI_WORDS;

  let translated = name;
  for (const [enWord, transWord] of Object.entries(dict)) {
    const reg = new RegExp(`\\b${enWord}\\b`, "gi");
    translated = translated.replace(reg, transWord);
  }

  return translated;
}

/**
 * Translates categories like "Residential", "Commercial", "Industrial", "Silent Fleet"
 */
export function translateCategoryName(category: string | undefined | null, lang: Language): string {
  if (!category) return lang === "mr" ? "सायलेंट फ्लीट" : lang === "hi" ? "साइलेंट फ्लीट" : "Silent Fleet";
  if (lang === "en") return category;
  const lower = category.toLowerCase();
  if (lower.includes("resident")) return lang === "mr" ? "रेसिडेन्शियल" : "रेसिडेंशियल";
  if (lower.includes("commercial")) return "कमर्शियल";
  if (lower.includes("industr")) return "इंडस्ट्रियल";
  if (lower.includes("event")) return lang === "mr" ? "इव्हेंट्स" : "इवेंट्स";
  if (lower.includes("silent")) return lang === "mr" ? "सायलेंट फ्लीट" : "साइलेंट फ्लीट";
  if (lower.includes("construct")) return "कन्स्ट्रक्शन";
  return category;
}

/**
 * Translates generator descriptions into natural, polished Marathi or Hindi.
 */
export function translateGeneratorDescription(
  name: string | undefined | null,
  desc: string | undefined | null,
  lang: Language
): string {
  if (!desc) return "";
  if (lang === "en") return desc;

  const translatedName = translateGeneratorName(name, lang);

  if (lang === "mr") {
    return `${translatedName} - अखंडित वीज पुरवठ्यासाठी उच्च कार्यक्षमतेचा सायलेंट जनरेटर. औद्योगिक प्रकल्प, रुग्णालये, कार्यालये आणि विवाह सोहळ्यांसाठी अत्यंत विश्वसनीय.`;
  }

  if (lang === "hi") {
    return `${translatedName} - निर्बाध बिजली बैकअप के लिए उच्च क्षमता का साइलेंट जनरेटर। औद्योगिक परियोजनाओं, अस्पतालों और भव्य आयोजनों के लिए पूर्णतः भरोसेमंद।`;
  }

  return desc;
}

/**
 * Translates generator feature titles and descriptions.
 */
export function translateGeneratorFeature(feature: string | undefined | null, lang: Language): string {
  if (!feature) return "";
  if (lang === "en") return feature;

  const mapMr: Record<string, string> = {
    "General use": "सर्वसाधारण वापरासाठी",
    "CPCB-II Silent Canopy": "CPCB-II सुपर सायलेंट कॅनोपी",
    "Zero Noise Disruption": "आवाजमुक्त कार्यप्रदर्शन",
    "Auto Start (AMF)": "ऑटो स्टार्ट (AMF सुसंगत)",
    "Remote Monitoring": "रिमोट मॉनिटरिंग सक्षम",
    "Low Fuel Consumption": "कमी इंधन वापर",
    "High Reliability": "उच्च विश्वासार्हता",
    "3 Phase Power": "थ्री फेज अखंडित वीज",
  };

  const mapHi: Record<string, string> = {
    "General use": "सामान्य उपयोग के लिए",
    "CPCB-II Silent Canopy": "CPCB-II सुपर साइलेंट कैनोपी",
    "Zero Noise Disruption": "बिना किसी शोर के संचालन",
    "Auto Start (AMF)": "ऑटो स्टार्ट (AMF कम्पैटिबल)",
    "Remote Monitoring": "रिमोट मॉनिटरिंग सक्षम",
    "Low Fuel Consumption": "कम ईंधन खपत",
    "High Reliability": "अत्यधिक भरोसेमंद",
    "3 Phase Power": "थ्री फेज निर्बाध बिजली",
  };

  const map = lang === "mr" ? mapMr : mapHi;
  return map[feature] || translateGeneratorName(feature, lang);
}

/**
 * Translates derived key features for generator detail page.
 */
export function getTranslatedHighlights(
  product: {
    canopy_type?: string | null;
    starting_type?: string | null;
    alternator_make?: string | null;
    cooling_system?: string | null;
    features?: Array<{ title: string; description?: string | null }>;
  },
  lang: Language
): Array<{ title: string; desc: string }> {
  if (product.features && product.features.length > 0) {
    return product.features.map((f) => ({
      title: translateGeneratorFeature(f.title, lang),
      desc: f.description
        ? lang === "mr"
          ? "उच्च गुणवत्तेची कार्यक्षमता आणि अचूक व्होल्टेज नियंत्रण."
          : lang === "hi"
            ? "उच्च गुणवत्ता का प्रदर्शन और सटीक वोल्टेज नियंत्रण।"
            : f.description
        : "",
    }));
  }

  if (lang === "mr") {
    return [
      {
        title: "ध्वनिरोधक सायलेंट कॅनोपी",
        desc: "कमी आवाजाच्या कामकाजासाठी CPCB-II प्रमाणित अकौस्टिक शील्डिंग.",
      },
      {
        title: "इलेक्ट्रिक स्टार्ट सिस्टीम",
        desc: "सुरक्षित इंटरलॉक्ससह जलद आणि खात्रीशीर इग्निशन पॅनेल.",
      },
      {
        title: `${product.alternator_make || "Stamford"} अल्टरनेटर`,
        desc: "सर्वोच्च लोड असतानाही स्थिर व सुरक्षित व्होल्टेज पुरवठा.",
      },
      {
        title: "प्रगत कूलिंग सिस्टीम",
        desc: "दीर्घकाळ स्थिर तापमानावर अविरत चालण्यासाठी विशेष डिझाइन.",
      },
    ];
  }

  if (lang === "hi") {
    return [
      {
        title: "साउंडप्रूफ साइलेंट कैनोपी",
        desc: "शांत संचालन के लिए CPCB-II प्रमाणित ध्वनिरोधक शील्डिंग।",
      },
      {
        title: "इलेक्ट्रिक स्टार्ट सिस्टम",
        desc: "सुरक्षा इंटरलॉक के साथ त्वरित और भरोसेमंद इग्निशन पैनल।",
      },
      {
        title: `${product.alternator_make || "Stamford"} अल्टरनेटर`,
        desc: "पीक लोड के दौरान भी स्थिर व सुरक्षित वोल्टेज आपूर्ति।",
      },
      {
        title: "उन्नत कूलिंग सिस्टम",
        desc: "लंबे समय तक निरंतर तापमान नियंत्रण के साथ चलने के लिए डिज़ाइन।",
      },
    ];
  }

  return [
    {
      title: `${product.canopy_type || "Silent"} Enclosure`,
      desc: "CPCB-II acoustic shielding for low-noise operation",
    },
    {
      title: product.starting_type || "Electric Start",
      desc: "Reliable quick-ignition panel with safety interlocks",
    },
    {
      title: `${product.alternator_make || "Stamford"} Alternator`,
      desc: "Stable sine wave voltage regulation under peak load",
    },
    {
      title: product.cooling_system || "Air/Water Cooled",
      desc: "Engineered for sustained ambient thermal stability",
    },
  ];
}
