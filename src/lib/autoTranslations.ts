import type { Language } from "./LanguageContext";
import { MR_PHRASES, MR_TERM_REPLACEMENTS } from "./mrTranslations";

/**
 * Site-wide Hindi dictionary (Natural, colloquial spoken Hindi)
 */
export const HI_PHRASES: Record<string, string> = {
  // Navigation & Header
  "Home": "होम",
  "Services": "सेवाएं",
  "Our Services": "हमारी सेवाएं",
  "Generator": "जनरेटर",
  "Generators": "जनरेटर",
  "Fleet": "जनरेटर",
  "Generator Fleet": "जनरेटर",
  "Blog": "ब्लॉग",
  "About": "हमारे बारे में",
  "About Us": "हमारे बारे में",
  "Contact": "संपर्क",
  "Contact Us": "संपर्क करें",
  "Request Quote": "कोटेशन मांगें",
  "Request a Quote": "कोटेशन मांगें",
  "Request a Rental Quote": "कोटेशन मांगें",
  "Start Your Rental Enquiry": "कोटेशन मांगें",
  "Get a Rental Quote": "कोटेशन मांगें",
  "Explore Rental Solutions": "जनरेटर देखें",
  "Direct Fleet Dispatch": "तुरंत जनरेटर भेजें",
  "Menu": "मेनू",
  "MENU": "मेनू",
  "Close": "बंद करें",
  "CLOSE": "बंद करें",
  "Language": "भाषा",
  "Select Language": "भाषा चुनें",
  "User Account": "यूज़र अकाउंट",
  "My Dashboard": "मेरा डैशबोर्ड",
  "Profile": "प्रोफाइल",
  "Settings": "सेटिंग्स",
  "Logout": "लॉगआउट",
  "Login": "लॉगिन",
  "Sign In": "साइन इन",
  "Sign Up": "साइन अप",
  "Cart": "कार्ट",
  "Quote Cart": "कोटेशन कार्ट",

  // Hero Section & Facts
  "Reliable Power.": "भरोसेमंद बिजली।",
  "When It Matters Most.": "जब सबसे ज़्यादा ज़रूरत हो।",
  "Reliable Prime Power.": "भरोसेमंद बिजली।",
  "Acoustic Soundproof.": "आवाज़ बिल्कुल नहीं।",
  "Zero Noise Disruption.": "बिना किसी शोर-शराबे के।",
  "Autonomous Mobile Fleet.": "मोबाइल जनरेटर गाड़ियां।",
  "24/7 Rapid Deployment.": "24 घंटे तुरंत सर्विस।",
  "Acoustic Silent": "सुपर साइलेंट",
  "CPCB-II soundproof enclosures": "CPCB-II साउंडप्रूफ जनरेटर",
  "Nashik & Across MH": "नासिक और पूरे महाराष्ट्र में",
  "Dedicated delivery & setup team": "डिलीवरी और सेटअप के लिए अपनी टीम",
  "Capacity fleet for events & industry": "इवेंट्स और फैक्ट्रियों के लिए हर साइज में उपलब्ध",
  "5 – 250 kVA Prime": "5 – 250 kVA प्राइम",
  "CPCB-II Soundproof": "CPCB-II साउंडप्रूफ",
  "Maharashtra Fleet": "महाराष्ट्र फ्लीट",

  // Services We Offer
  "Power Solutions for Events and Industry": "इवेंट्स और इंडस्ट्री के लिए बिजली समाधान",
  "Weddings & Banquets": "शादियां और बैंक्वेट्स",
  "Grand Events & Festivals": "बड़े इवेंट्स और मेले",
  "Industrial & Projects": "फैक्ट्रियां और प्रोजेक्ट्स",
  "Industrial & Project Rentals": "फैक्ट्रियां और प्रोजेक्ट्स",
  "Scroll to explore": "देखने के लिए स्क्रॉल करें",
  "Reserve Wedding Power": "शादी के लिए बुक करें",
  "Plan Event Power Supply": "इवेंट के लिए पावर प्लान करें",
  "Request Industrial Fleet": "इंडस्ट्रियल जनरेटर मांगें",
  "CPCB-II ACOUSTIC ENCLOSURE": "CPCB-II साउंडप्रूफ कैनोपी",
  "READY FOR DISPATCH": "तुरंत भेजने के लिए तैयार",
  "SYNCHRONIZED DUAL DG": "सिंक्रोनाइज़्ड डबल बैकअप",
  "EVENT CREW ON CALL": "इवेंट टीम तैयार",
  "HEAVY PRIME CONTINUOUS": "हैवी प्राइम कंटीन्यूअस",
  "24/7 INDUSTRIAL FLEET": "24 घंटे इंडस्ट्रियल फ्लीट",
  "Acoustic Standard": "शोर का स्तर",
  "Output Voltage": "आउटपुट वोल्टेज",
  "Switchgear Support": "स्विचगियर सपोर्ट",
  "Field Assistance": "साइट सपोर्ट",
  "Grid Redundancy": "बैकअप सिस्टम",
  "AV Frequency Stability": "फ्रीक्वेंसी स्थिरता",
  "Distribution Kit": "डिस्ट्रीब्यूशन किट",
  "Operational Run": "चलने का समय",
  "Power Rating": "पावर रेटिंग",
  "Heavy Inductive Load": "भारी लोड क्षमता",
  "Protection Standard": "सुरक्षा मानक",
  "Support Coverage": "सपोर्ट सुविधा",
  "Turnkey Cabling & On-Site Technician": "पूरी केबल वायरिंग और मैकेनिक साथ",
  "Weatherproof Distribution Panels & Cable Ramps": "वाटरप्रूफ बिजली पैनल और केबल रैंप",
  "Continuous 24-Hour Fuel Autonomy": "24 घंटे लगातार डीज़ल बैकअप",
  "24/7 Dedicated Breakdown Assistance": "24 घंटे ब्रेकडाउन सर्विस",

  // Assurances / Industries Served
  "Plan Your Power Requirements with Confidence": "पूरी तसल्ली के साथ अपनी बिजली का इंतजाम करें",
  "Three clear assurances defining every Sarvadnya rental across Nashik and Maharashtra.":
    "नासिक और पूरे महाराष्ट्र में सर्वज्ञ की हर बुकिंग के साथ तीन पक्के वादे।",
  "Events & Banquets": "इवेंट्स और शादियां",
  "Transparent Quotations": "साफ़ और पक्के रेट",
  "Clear pricing inclusive of transport, operator, and standard cabling.":
    "किराया, गाड़ी का भाड़ा, मैकेनिक और केबल सब कुछ मिलाकर बिल्कुल साफ़ हिसाब, कोई छुपा हुआ खर्च नहीं।",
  "Festivals & Concerts": "समारोह और कॉन्सर्ट",
  "Synchronized Power": "डबल बैकअप जनरेटर",
  "Dual DG backup for critical events requiring zero downtime.":
    "ज़रूरी इवेंट्स के लिए दो जनरेटर का बैकअप, ताकि एक पल के लिए भी बिजली न जाए।",
  "Factories & Plants": "फैक्ट्री और प्लांट्स",
  "Dedicated Support": "24 घंटे मैकेनिक सपोर्ट",
  "On-site technician assistance throughout your rental duration.":
    "साइट पर जनरेटर चालू रखने और लोड संभालने के लिए ट्रेंड मैकेनिक हमेशा मौजूद।",
  "Hospitals & Emergency": "अस्पताल और इमरजेंसी",
  "Rapid Deployment": "तुरंत ऑन-साइट डिलीवरी",
  "Dedicated delivery & setup team across Nashik and Maharashtra.":
    "नासिक और आसपास के इलाकों में ज़रूरत पड़ते ही तेज़ी से जनरेटर भेजने की सुविधा।",

  // Generator Range
  "Generator Fleet from 5 kVA to 250+ kVA": "5 kVA से 250+ kVA तक के जनरेटर",
  "View Specifications": "डिटेल्स देखें",
  "Enquire Now": "रेट पूछें",
  "/day": "/दिन",
  "POPULAR": "सबसे लोकप्रिय",
  "HEAVY DUTY": "हैवी ड्यूटी",
  "EVENT SILENT": "सुपर साइलेंट",
  "Best For:": "खास तौर पर उपयुक्त:",
  "Tap or Swipe": "टैप या स्वाइप करें",
  "Entry Series": "एंट्री सीरीज",
  "Mid-Range Series": "मिड-रेंज सीरीज",
  "Heavy Industrial Series": "हैवी सीरीज",
  "Commercial Series": "कमर्शियल सीरीज",
  "Rated Capacity": "रेटेड क्षमता",
  "Fuel System": "ईंधन प्रणाली",
  "5 kVA Silent Generator": "5 kVA साइलेंट जनरेटर",
  "30 kVA Silent Generator": "30 kVA साइलेंट जनरेटर",
  "65 kVA Commercial Generator": "65 kVA कमर्शियल जनरेटर",
  "125 kVA Industrial Generator": "125 kVA इंडस्ट्रियल जनरेटर",
  "250 kVA Prime Power Station": "250 kVA प्राइम पावर स्टेशन",

  // Solutions / Process
  "From Requirements to Rental Enquiry": "ज़रूरत बताने से लेकर जनरेटर आने तक का आसान तरीका",
  "Share Your Requirements": "अपनी ज़रूरत बताएं",
  "Online Form or WhatsApp": "ऑनलाइन फॉर्म या व्हाट्सएप",
  "5-Minute Sizing": "5 मिनट में लोड का अंदाज़ा",
  "Discuss Power Sizing": "लोड और सही साइज पर बात करें",
  "Expert Advisory": "एक्सपर्ट सलाह",
  "Accurate Load Sizing": "एकदम सही लोड का चुनाव",
  "Confirm Availability & Quotation": "रेट और बुकिंग कन्फर्म करें",
  "Dispatch Confirmation": "डिलीवरी कन्फर्म",
  "Transparent Billing": "साफ़ और पक्का हिसाब",

  // Marquee
  "DIESEL GENERATOR RENTAL": "डीज़ल जनरेटर रेंटल",
  "SILENT SOUNDPROOF": "साइलेंट साउंडप्रूफ जनरेटर",
  "NASHIK & MAHARASHTRA": "नासिक और पूरे महाराष्ट्र में",
  "100% RELIABLE PRIME POWER": "100% भरोसेमंद बिजली",
  "FACTORIES & PROJECTS": "फैक्ट्रियां और प्रोजेक्ट्स",
  "RAPID ON-SITE DELIVERY": "तुरंत ऑन-साइट डिलीवरी",
  "24/7 DEDICATED TECHNICIAN": "24 घंटे मैकेनिक सपोर्ट",
  "5 KVA TO 250+ KVA CAPACITY": "5 kVA से 250 kVA तक",
  "FUEL EFFICIENT ENGINES": "कम डीज़ल खपत",
  "TRANSPARENT PRICING": "साफ़ और पक्के रेट",
  "TURNKEY CABLING & SETUP": "केबल और स्विचगियर साथ",

  // FAQ & Testimonials
  "Frequently Asked Questions": "अक्सर पूछे जाने वाले सवाल",
  "What Event Organizers & Project Leads Say": "ग्राहक हमारे बारे में क्या कहते हैं",
  "Load Sizing & kVA": "लोड का हिसाब",
  "Acoustic Compliance": "शोर के नियम",
  "Technical Logistics": "मैकेनिक व केबल",
  "Regional Coverage": "कवरेज क्षेत्र",

  // CTA
  "Get Reliable Silent Power for Your Event or Site": "अपने इवेंट या साइट के लिए तुरंत जनरेटर बुक करें",
  "Ready to Secure Power for Your Event or Site?": "अपने इवेंट या साइट के लिए तुरंत जनरेटर बुक करें",
  "Call +91 62626 29944": "कॉल करें: +91 62626 29944",

  // Blog
  "Power Insights & Generator Sizing Guides": "पावर गाइड्स और सही जनरेटर चुनने की जानकारी",
  "Read Article": "पूरा पढ़ें",
  "Read Complete Guide": "पूरी गाइड पढ़ें",
  "min read": "मिनट का समय",
  "Event Power Guide": "इवेंट पावर गाइड",
  "Acoustic Standards": "ध्वनि नियम",
  "Industrial Operations": "इंडस्ट्रियल पावर",
  "Calculating kVA for Outdoor Weddings": "आउटडोर शादी के लिए कितने kVA का जनरेटर चाहिए?",
  "Why CPCB-II Silent Canopies Matter in Urban Venues": "शहर में आयोजनों के लिए CPCB-II साइलेंट जनरेटर क्यों ज़रूरी हैं?",
  "Prime Continuous vs Standby DG Sets: Key Differences": "प्राइम कंटीन्यूअस और स्टैंडबाय जनरेटर में क्या फर्क है?",

  // Technology / Service Area
  "Service Area & Geographic Coverage": "सर्विस एरिया और कवरेज",
  "24/7 Rapid Mobilization": "24 घंटे डिलीवरी चालू",
  "Nashik City & Industrial MIDC Zones": "नासिक शहर और MIDC क्षेत्र",
  "North Maharashtra & Adjoining Districts": "उत्तर महाराष्ट्र और आसपास के जिले",
  "Statewide Maharashtra": "पूरे महाराष्ट्र में",

  // Footer & Links
  "Quick Links": "त्वरित लिंक",
  "Contact Info": "संपर्क जानकारी",
  "Call Support": "कॉल सपोर्ट",
  "Email Us": "ईमेल करें",
  "Location": "लोकेशन",
  "Indira Nagar, Nashik": "इंदिरा नगर, नासिक",
  "Newsletter": "न्यूज़लेटर",
  "Subscribe": "सब्सक्राइब करें",
  "Your email address": "अपना ईमेल दर्ज करें",
  "Subscribed successfully!": "सफलतापूर्वक सब्सक्राइब हुआ!",
  "Secure & Encrypted": "सुरक्षित और एन्क्रिप्टेड",
  "Privacy Policy": "गोपनीयता नीति",
  "Cookie Policy": "कुकी नीति",
  "Terms of Service": "सेवा की शर्तें",
  "Terms of Rental": "किराये के नियम व शर्तें",
  "All rights reserved.": "सर्वाधिकार सुरक्षित।",

  // About Page
  "Powering Nashik's Grandest Milestones.": "नासिक के सबसे बड़े आयोजनों को भरोसेमंद बिजली का साथ।",
  "Powering Nashik's": "नासिक के सबसे बड़े आयोजनों को",
  "Grandest Milestones.": "भरोसेमंद बिजली का साथ।",
  "Since 2009, Sarvadnya has engineered uninterrupted silent power solutions across Maharashtra. From high-stakes industrial operations and weddings to critical healthcare grids, we keep the state running with 5 to 250 kVA silent DG sets and 24/7 on-site technical dispatch.":
    "2009 से सर्वज्ञ पूरे महाराष्ट्र में बिना रुकावट के साइलेंट बिजली समाधान दे रहा है। बड़ी फैक्ट्रियों और शादियों से लेकर अस्पतालों तक, हम 5 से 250 kVA के साइलेंट डीजी सेट्स और 24 घंटे ऑन-साइट मैकेनिक सपोर्ट के साथ आपकी बिजली चालू रखते हैं।",
  "Explore Fleet & Rates": "जनरेटर और रेट देखें",
  "Explore Fleet &amp; Rates": "जनरेटर और रेट देखें",
  "Our Founding Story": "शुरुआत की कहानी",
  "Established": "स्थापना",
  "17+ Years of Unbroken Trust": "17+ सालों का पक्का भरोसा",
  "Successful Project Deployments": "सफल प्रोजेक्ट और बुकिंग्स",
  "Fleet Range": "फ्लीट रेंज",
  "Silent CPCB-IV+ Certified Sets": "साइलेंट CPCB सर्टिफाइड जनरेटर",
  "Readiness": "सपोर्ट",
  "On-Site Technical Engineers": "साइट पर 24 घंटे ट्रेंड मैकेनिक",
  "A Journey of Reliability": "भरोसे का एक सफर",
  "A Journey of": "भरोसे का",
  "Reliability": "एक सफर",
  "Sarvadnya Generators was founded in 2009 with a clear mission: to provide dependable and affordable power backup solutions for businesses, events, construction sites, and industrial operations across Nashik and nearby regions.":
    "सर्वज्ञ जनरेटर्स की शुरुआत 2009 में एक साफ़ सोच के साथ हुई थी: नासिक और आसपास के इलाकों में दुकानों, शादियों, कंस्ट्रक्शन साइटों और फैक्ट्रियों को सही रेट पर भरोसेमंद बिजली बैकअप देना।",
  "What started with a small fleet of just one diesel generator has now grown into a trusted generator rental company. We are known for our reliability, quick service, and customer-focused support, ensuring that our clients never face power interruptions.":
    "सिर्फ एक डीज़ल जनरेटर से शुरू हुआ यह सफर आज शहर की सबसे भरोसेमंद जनरेटर रेंटल कंपनी बन चुका है। हम अपनी विश्वसनीयता, तुरंत सर्विस और पक्के सपोर्ट के लिए जाने जाते हैं, ताकि हमारे ग्राहकों का काम कभी बिजली की वजह से न रुके।",
  "Our commitment to reliability, transparent pricing, and 24/7 assistance makes us a trusted choice for temporary and long-term power requirements.":
    "भरोसेमंद जनरेटर, साफ़ और पक्के रेट, और 24 घंटे मैकेनिक सपोर्ट ही हमें छोटी और लंबी अवधि की बिजली ज़रूरतों के लिए ग्राहकों की पहली पसंद बनाते हैं।",
  "The Beginning": "शुरुआत",
  "Sarvadnya Generators": "सर्वज्ञ जनरेटर्स",
  "Driven by Reliability, Measured by Results.": "भरोसे पर कायम, नतीजों से साबित।",
  "Driven by Reliability,": "भरोसे पर कायम,",
  "Measured by Results.": "नतीजों से साबित।",
  "Years Experience": "सालों का अनुभव",
  "Continuous silent power rental operations across Maharashtra since 2009.":
    "2009 से पूरे महाराष्ट्र में साइलेंट जनरेटर सर्विस का लगातार अनुभव।",
  "Satisfied Clients": "संतुष्ट ग्राहक",
  "Trusted by premier industrial plants, wedding venues, and corporate enterprises.":
    "बड़ी फैक्ट्रियों, मैरिज हॉल्स और कॉर्पोरेट कंपनियों का पक्का भरोसा।",
  "Emergency Support": "इमरजेंसी सपोर्ट",
  "Immediate on-site technical dispatch with active standby backup readiness.":
    "ज़रूरत पड़ते ही तुरंत मैकेनिक टीम और स्टैंडबाय बैकअप जनरेटर हाजिर।",
  "Successful Deployments": "सफल बुकिंग्स",
  "Proven track record of zero critical downtime power operations delivered.":
    "बिना किसी रुकावट के लगातार बिजली पहुंचाने का शानदार रिकॉर्ड।",
  "The Sarvadnya Promise": "सर्वज्ञ का पक्का वादा",
  "The Sarvadnya": "सर्वज्ञ का",
  "Promise": "पक्का वादा",
  "We deliver uninterrupted power with rapid dispatch, meticulously maintained generator sets, and dedicated 24/7 technical engineers on site.":
    "हम समय पर डिलीवरी, पूरी तरह मेंटेन किए हुए जनरेटर और साइट पर 24 घंटे मौजूद ट्रेंड मैकेनिक के साथ बिना रुकावट बिजली का वादा करते हैं।",
  "Guaranteed Zero Downtime": "बिजली रुकने की जीरो गुंजाइश",
  "Synchronized multi-generator setups and automatic load-transfer units ensure zero-second interruptions for mission-critical operations.":
    "डबल जनरेटर बैकअप और ऑटोमैटिक स्विच से बिजली जाने पर एक सेकंड की भी रुकावट नहीं आती।",
  "Acoustic Silence (<75 dBA)": "सुपर साइलेंट (<75 dBA)",
  "Engineered soundproof acoustic canopies with heavy-duty silencers designed specifically for luxury weddings, banquets, and urban healthcare sites.":
    "हैवी साइलेंसर और साउंडप्रूफ कैनोपी, जो शादियों, बैंक्वेट्स और अस्पतालों में बिना किसी शोर के शांति बनाए रखते हैं।",
  "Stationed Field Engineers": "साइट पर हाजिर मैकेनिक",
  "Certified mechanical and electrical engineers remain on-site throughout your deployment to manage fuel, live monitoring, and real-time load balancing.":
    "जनरेटर चालू करने, डीज़ल भरने और लोड संभालने के लिए ट्रेंड मैकेनिक हर समय आपकी साइट पर तैनात रहते हैं।",
  "Rapid Transit Fleet": "तेज़ डिलीवरी फ्लीट",
  "In-house dedicated transportation trailers and mobile quick-response units ready for immediate deployment across 5 districts in Maharashtra.":
    "खुद की ट्रांसपोर्ट गाड़ियों के साथ नासिक और आसपास के जिलों में तुरंत डिलीवरी के लिए तैयार।",
  "Expanding Horizons for Sustainable Power": "भविष्य की तैयारी और आधुनिक तकनीक",
  "Expanding Horizons for": "भविष्य की तैयारी और",
  "Sustainable Power": "आधुनिक तकनीक",
  "Over the next five years, Sarvadnya Generators aims to expand fleet capacity across Maharashtra, introducing advanced fuel-efficient, CPCB-IV+ compliant silent systems and remaining the primary partner for industrial and flagship event power solutions.":
    "सर्वज्ञ जनरेटर्स कम डीज़ल खपत, नए CPCB सर्टिफाइड साइलेंट जनरेटर और आधुनिक तकनीकों के साथ पूरे महाराष्ट्र में अपनी फ्लीट का विस्तार कर रहा है, ताकि हर इवेंट और फैक्ट्री को बेहतरीन सर्विस मिले।",
  "Heavy Industrial Sets": "हैवी इंडस्ट्रियल सेट्स",
  "Turbocharged • Electronic Governor": "टर्बोचार्ज्ड • इलेक्ट्रॉनिक गवर्नर",
  "Prime Commercial Series": "प्राइम कमर्शियल सीरीज",
  "Sound-Attenuated Canopy (<75 dBA)": "साउंडप्रूफ कैनोपी (<75 dBA)",
  "Portable Ultra-Silent": "पोर्टेबल सुपर साइलेंट",
  "Clean Sine-Wave • Compact Event Power": "क्लीन साइन-वेव • छोटे आयोजनों के लिए",
  "Construction & Prime": "कंस्ट्रक्शन और प्राइम",
  "High Fuel Economy • Rapid Cold-Start": "कम डीज़ल खपत • तुरंत स्टार्ट",
  "High-Torque Industrial": "हाई-टॉर्क इंडस्ट्रियल",
  "Continuous Heavy Load Endurance": "लगातार भारी लोड संभालने की क्षमता",
  "Milestones of Excellence": "सफलता के मील के पत्थर",
  "Milestones of": "सफलता के",
  "Excellence": "मील के पत्थर",
  "Follow our operational roadmap from a single generator in 2009 to Maharashtra's leading power infrastructure partner.":
    "2009 में सिर्फ एक जनरेटर से लेकर आज पूरे महाराष्ट्र के सबसे भरोसेमंद पावर पार्टनर बनने का हमारा सफर।",
  "Follow our operational roadmap from a single generator in 2009 to Maharashtra’s leading power infrastructure partner.":
    "2009 में सिर्फ एक जनरेटर से लेकर आज पूरे महाराष्ट्र के सबसे भरोसेमंद पावर पार्टनर बनने का हमारा सफर।",
  "Chapter one": "पहला अध्याय",
  "Chapter two": "दूसरा अध्याय",
  "Chapter three": "तीसरा अध्याय",
  "Chapter four": "चौथा अध्याय",
  "Chapter five": "पांचवां अध्याय",
  "Building Trust": "पक्का भरोसा",
  "Service Excellence": "शानदार सर्विस",
  "Industry Leader": "इंडस्ट्री में सबसे आगे",
  "Future Horizons": "भविष्य की उड़ान",

  // Local Everyday UI Terms (from user's guidelines)
  "Fleet & Generator Maintenance Hub": "फ्लीट एवं जेनरेटर सर्विस केंद्र",
  "Schedule / Record Maintenance": "सर्विस का समय तय करें / सर्विस एंट्री करें",
  "Contracts & Invoices": "एग्रीमेंट और बिल",
  "Manage billing, booking-linked draft invoices, and post-event usage settlements":
    "बिलिंग, कच्चे बिल और इवेंट के बाद का हिसाब-किताब संभालें",
  "Create Document": "दस्तावेज़ बनाएं",
  "Invoice": "बिल",
  "Contract": "एग्रीमेंट",
  "Agreement": "शर्तनामा",
  "Draft": "कच्चा",
  "Total Tickets": "कुल टिकट",
  "Due Soon / Overdue": "समय होने वाला है / तारीख निकल चुकी है",
  "In Progress": "चालू काम",
  "Completed (Month)": "पूरा हुआ (इस महीने)",
  "Confirmed": "कन्फर्म",
  "Active jobs": "चालू काम",
  "Pending Approval": "मंज़ूरी बाकी है",
  "Awaiting review": "चेक होना बाकी है",
  "Paid": "पेमेंट हो गया",
  "Pending": "बाकी है",
  "Partial": "आधा बाकी",
  "Bank Transfer": "बैंक ट्रांसफर",
  "UPI": "यूपीआई",
  "Cheque / NEFT": "चेक / एनईएफटी",
  "Single Date": "एक तारीख",
  "Date Range": "तारीखों के बीच",
  "Multi-Date": "कई तारीखें",
  "1 Day Duration": "1 दिन का समय",
  "7 Days Duration": "7 दिनों का समय",
  "11 Days Duration": "11 दिनों का समय",
  "3 Days Duration": "3 दिनों का समय",
  "Day": "दिन",
  "Days": "दिन",
  "Duration": "समय",
  "2 Operating Shifts": "2 काम की शिफ्ट",
  "3 Operating Shifts": "3 काम की शिफ्ट",
  "Shift / Day": "शिफ्ट / दिन",
  "Trial Included": "ट्रायल शामिल",
  "Rows per page": "प्रति पेज पंक्तियां",
  "Showing": "दिख रहे हैं",
  "of": "में से",
  "Page": "पेज",
  "No records found.": "कोई रिकॉर्ड नहीं मिला।",
  "Welcome Back": "वापसी पर स्वागत है",
  "Sign in to continue to your account": "अपने खाते में जाने के लिए लॉगिन करें",
  "Email": "ईमेल",
  "Enter your email": "अपना ईमेल दर्ज करें",
  "Password": "पासवर्ड",
  "Enter your password": "अपना पासवर्ड दर्ज करें",
  "Connecting...": "कनेक्ट हो रहा है...",
  "Don't have an account?": "खाता नहीं है?",
  "Sign up": "साइन अप",
  "Save": "सेव करें",
  "Save Changes": "बदलाव सेव करें",
  "Cancel": "कैंसल करें",
  "Edit": "एडिट करें",
  "Delete": "डिलीट करें",
  "Add": "जोड़ें",
  "Refresh": "रिफ्रेश",
  "Search": "सर्च",
  "Filter": "फ़िल्टर",
  "Status": "स्टेटस",
  "Actions": "एक्शन",
  "View": "देखें",
  "Export": "डाउनलोड",
  "Import": "अपलोड",
  "Loading...": "लोड हो रहा है...",
  "Back": "पीछे जाएं",
  "All": "सब",
  "Active": "चालू",
  "Inactive": "बंद",
  "Published": "पब्लिश",
  "Generator Fleet Control Center": "जेनरेटर कंट्रोल सेंटर",
  "Live Telemetry": "लाइव रीडिंग",
  "Alert Thresholds": "अलर्ट सीमाएं",
  "Add Unit": "यूनिट जोड़ें",
  "Running": "चल रहा है",
  "Idle": "खाली खड़ा",
  "Offline": "बंद",
  "Warning": "चेतावनी",
  "Fault": "खराबी",
  "Total Power Output Load": "कुल बिजली का लोड",
  "Total Diesel in Active Tanks": "चालू टंकियों में कुल डीज़ल",
  "Est. Fleet Burn Rate": "डीज़ल खर्च होने की अंदाज़न रफ्तार",
  "Call": "कॉल करें",
  "Start": "शुरू करें",
  "Booking": "बुकिंग",
  "LIVE RUNNING": "चालू",
  "ATTENTION": "ध्यान दें",
  "CRITICAL LOAD": "भारी लोड",
  "STANDBY": "स्टैंडबाय",
  "OFFLINE": "बंद",

  // Generator Page Vocabulary (Natural, colloquial Hindi)
  "Industrial Generator Rentals Across Maharashtra": "पूरे महाराष्ट्र में इंडस्ट्रियल जेनरेटर किराए पर",
  "Browse Generators": "सभी जेनरेटर देखें",
  "Get Instant Quote": "तुरंत कोटेशन पाएं",
  "Emergency Rental": "इमरजेंसी में जेनरेटर चाहिए",
  "Load Calculator": "लोड कैलकुलेटर",
  "WhatsApp Enquiry": "व्हाट्सएप पर पूछें",
  "Need Help Choosing?": "सही जेनरेटर चुनने में मदद चाहिए?",
  "Find Your Perfect Match": "अपनी ज़रूरत के हिसाब से जेनरेटर खोजें",
  "Power Requirement": "पावर की ज़रूरत",
  "Select kVA": "kVA चुनें",
  "Industry Type": "काम का प्रकार",
  "Select Industry": "काम का प्रकार चुनें",
  "Events & Weddings": "शादी और इवेंट्स",
  "Construction": "कंस्ट्रक्शन",
  "Hospitals": "अस्पताल",
  "Factories": "फैक्ट्री और इंडस्ट्री",
  "Rental Duration": "कितने समय के लिए चाहिए",
  "Select Duration": "समय चुनें",
  "Daily": "रोज़ाना",
  "Weekly": "हफ़्ते भर के लिए",
  "Monthly": "महीने भर के लिए",
  "Long Term": "लंबे समय के लिए",
  "Enter City": "शहर का नाम लिखें",
  "Find Available Generators": "उपलब्ध जेनरेटर देखें",
  "Browse All": "सभी उपलब्ध",
  "By Power Capacity": "पावर क्षमता के अनुसार",
  "By Usage / Industry": "काम या इंडस्ट्री के अनुसार",
  "By Generator Type": "जेनरेटर के प्रकार के अनुसार",
  "All Capacities": "सभी क्षमताएं",
  "All Usage": "सभी काम",
  "All Types": "सभी प्रकार",
  "Silent Generators": "सायलेंट जेनरेटर",
  "Diesel Generators": "डीज़ल जेनरेटर",
  "Mobile DG Vans": "मोबाइल डीजी वैन",
  "Trailer Mounted": "ट्रेलर माउंटेड",
  "Reset Filters": "फ़िल्टर हटाएं",
  "Loading generators...": "जेनरेटर लोड हो रहे हैं...",
  "Fuel Cons.": "डीज़ल खपत",
  "Noise Level": "आवाज़ स्तर",
  "Max Runtime": "चलने का समय",
  "Phase": "फेज़",
  "/ day": "/ दिन",
  "per day": "प्रति दिन",
  "View Details": "पूरी जानकारी देखें",
  "Compare": "तुलना करें",
  "Add to Quote": "कोटेशन में जोड़ें",
  "Added to Quote": "जुड़ गया",
  "Added": "जुड़ गया",
  "Find the right": "अपनी ज़रूरत के लिए सही",
  "generator for you": "जेनरेटर चुनें",
  "How Long It Runs": "लगातार कितने घंटे चलेगा",
  "Fuel Type": "ईंधन का प्रकार",
  "Auto Start": "ऑटो स्टार्ट (AMF)",
  "Remote Monitoring": "रिमोट मॉनिटरिंग",
  "Compare Fleet": "जेनरेटरों की तुलना करें",
  "Highlight Differences": "अंतर दिखाएं",
  "Highlight Diff": "अंतर दिखाएं",
  "Restore 3 Units": "3 यूनिट रीसेट करें",
  "Clear All": "सभी हटाएं",
  "Technical Matrix": "टेक्निकल जानकारी",
  "Specifications": "मुख्य खूबियां",
  "Comparing": "तुलना कर रहे हैं",
  "selected units": "चुने हुए जेनरेटर",
  "Unit": "यूनिट",
  "Change": "बदलें",
  "Book": "बुक करें",
  "Add Generator": "जेनरेटर जोड़ें",
  "Add Generator to Compare": "तुलना के लिए जेनरेटर जोड़ें",
  "Compare Slot": "तुलना स्लॉट",
  "Add to Comparison": "तुलना में जोड़ें",
  "Select Replacement": "दूसरा जेनरेटर चुनें",
  "Replacing": "इसकी जगह",
  "Included": "शामिल है",
  "Standard": "स्टैंडर्ड",
  "Side-by-Side Specs": "आमने-सामने तुलना",
  "Swipe units →": "स्वाइप करके देखें →",
  "← Swipe cards to compare specifications →": "← खूबियों की तुलना करने के लिए कार्ड स्वाइप करें →",
  "Choose from our verified silent fleet": "हमारे वेरिफाइड सायलेंट फ्लीट में से चुनें",
  "Need help": "सही चुनाव में",
  "choosing?": "मदद चाहिए?",
  "Request Custom Quote": "कोटेशन मांगें",
  "Talk to an Expert": "एक्सपर्ट से बात करें",
  "Back to Generator Fleet": "वापस जेनरेटर लिस्ट पर जाएं",
  "Asset Code": "एसेट कोड",
  "Voltage": "वोल्टेज",
  "Frequency": "फ्रीक्वेंसी",
  "Shift Rate:": "प्रति शिफ्ट रेट:",
  "Security Deposit:": "सिक्योरिटी डिपॉजिट:",
  "Technical Specifications": "टेक्निकल खूबियां",
  "Key Features": "खास विशेषताएं",
  "Need More Information?": "और जानकारी चाहिए?",
  "Our experts are ready to help you choose the right product": "सही जेनरेटर चुनने में मदद के लिए हमारे एक्सपर्ट्स तैयार हैं",
  "Book Now": "अभी बुक करें",
  "Call Now": "अभी कॉल करें",
  "WhatsApp": "व्हाट्सएप",
  "You May Also Like": "इन्हें भी देखें",
  "View Fleet": "सभी जेनरेटर देखें",
  "Fuel Tank": "डीज़ल टैंक",
  "Compliance": "नियम व सर्टिफिकेशन",
  "Weddings & Banquet Halls": "शादी और बैंक्वेट हॉल",
  "Exhibitions & Concerts": "प्रदर्शनियां और कॉन्सर्ट",
  "Factories & Manufacturing": "फैक्ट्री और मैन्युफैक्चरिंग",
  "Construction & Road Projects": "कंस्ट्रक्शन और सड़क काम",
  "Hospitals & Cold Storage": "अस्पताल और कोल्ड स्टोरेज",
  "Malls & Retail Shops": "मॉल और दुकानें",
  "Hotels & Resorts": "होटल और रिसॉर्ट",
  "Film & Media Production": "शूटिंग और मीडिया प्रोडक्शन",
  "Government & Water Projects": "सरकारी और पानी प्रोजेक्ट",
  "Agriculture": "खेती और किसानी",
  "Emergency Backup": "इमरजेंसी बैकअप",
  "Three Phase": "थ्री फेज़",
  "Single Phase": "सिंगल फेज़",
  "Diesel": "डीज़ल",

  // Blog Page Vocabulary (Natural, colloquial Hindi)
  "The Ultimate Guide to Choosing the Right Generator for Your Wedding": "शादी के लिए सही जेनरेटर चुनने की पूरी गाइड",
  "Don't let power outages dim your big day. Learn how to calculate your kVA needs, manage acoustic levels, and ensure seamless entertainment.":
    "अपने खास दिन की रौनक बिजली जाने से कम न होने दें। जानें कि कितने kVA की ज़रूरत होगी, आवाज़ का स्तर कैसे संभालें और बिना रुकावट शादी कैसे पूरी करें।",
  "Read Full Guide": "पूरी गाइड पढ़ें",
  "All Articles": "सभी लेख",
  "Guides": "गाइड्स",
  "Maintenance": "सर्विस और मेंटेनेंस",
  "Industrial": "इंडस्ट्रियल",
  "Efficiency": "डीज़ल बचत",
  "Case Studies": "केस स्टडीज़",
  "Technology": "टेक्नोलॉजी",
  "Search articles...": "लेख खोजें...",
  "Search blog articles": "ब्लॉग लेख खोजें",
  "No articles match your current filter.": "आपके चुने हुए फ़िल्टर से कोई लेख नहीं मिला।",
  "Try clearing your search or switching back to all articles.": "सर्च साफ़ करके देखें या सभी लेख चुनें।",
  "Show All Articles": "सभी लेख देखें",
  "Previous article": "पिछला लेख",
  "Next article": "अगला लेख",
  "Essential Maintenance Tips for Industrial Silent DG Sets": "इंडस्ट्रियल सायलेंट डीजी सेट की ज़रूरी सर्विस और मेंटेनेंस टिप्स",
  "Critical Power Backup for Hospitals: Why Every Second Counts": "अस्पतालों के लिए इमरजेंसी पावर बैकअप: जहां एक-एक सेकंड कीमती है",
  "Optimizing Fuel Management: Strategies for Long-Term Rentals": "डीज़ल की बचत: लंबे समय के रेंटल के लिए कारगर तरीके",
  "How Sarvadnya Generators is Powering Nashik's Industrial Expansion": "सर्वज्ञ जनरेटर्स कैसे नासिक के औद्योगिक विकास को दे रहा है निर्बाध बिजली",
  "The Science of Silence: How Our Acoustic Enclosures Work": "शोर-शराबा बंद: हमारे साउंडप्रूफ कैनोपी कैसे काम करते हैं",
  "Pro Tips for Planning Power Infrastructure for Outdoor Concerts": "आउटडोर कॉन्सर्ट और बड़े आयोजनों के लिए बिजली का सही इंतज़ाम",
  "Written By": "लेखक",
  "Published On": "तारीख",
  "Read Time": "पढ़ने का समय",
  "Share": "शेयर करें",
  "Link Copied": "लिंक कॉपी हो गया",
  "Categories": "कैटेगरी",
  "Popular Tags": "पॉपुलर टैग्स",
  "Need Fleet Sizing Help?": "सही जेनरेटर चुनने में मदद चाहिए?",
  "Talk directly with our Nashik dispatch engineers to select the exact silent DG capacity for your venue or site.":
    "अपने वेन्यू या साइट के लिए सही सायलेंट डीजी क्षमता चुनने के लिए सीधे हमारे नासिक के सर्विस इंजीनियरों से बात करें।",
  "Request Consultation": "सलाह लें",
  "Related Articles": "संबंधित लेख",
  "View All": "सभी देखें",
  "Optimizing Fuel Management for Long-Term Rentals": "लंबे समय के रेंटल के लिए डीज़ल की बचत",
  "How We Are Powering Nashik's Industrial Expansion": "हम कैसे नासिक के औद्योगिक विकास को दे रहे हैं रफ्तार",
  "Planning Power for Outdoor Concerts": "आउटडोर कॉन्सर्ट के लिए बिजली का इंतज़ाम",
  "6 min read": "6 मिनट",
  "7 min read": "7 मिनट",
  "5 min read": "5 मिनट",
  "8 min read": "8 मिनट",

  // Services Page Vocabulary (Natural, colloquial Hindi)
  "Uninterrupted Power,": "बिना रुकावट बिजली,",
  "Engineered for Zero Downtime": "जीरो ब्रेकडाउन की पक्की गारंटी",
  "Specialized Power": "खास पावर",
  "Service Verticals": "सर्विस विकल्प",
  "Industrial Rentals": "इंडस्ट्रियल और फैक्ट्री रेंटल",
  "Event Silent Power": "शादी और इवेंट सायलेंट जनरेटर",
  "Emergency Dispatch": "इमरजेंसी बिजली बैकअप",
  "AMC & Maintenance": "एएमसी और मेंटेनेंस सर्विस",
  "Learn More": "और जानें",
  "Precision-Engineered": "कदम-दर-कदम",
  "Deployment Pipeline": "काम करने का आसान तरीका",
  "Intelligent Power Audit": "साइट और बिजली लोड की जांच",
  "Custom Fleet Matching": "ज़रूरत अनुसार सही डीजी सेट",
  "Rapid Heavy Deployment": "तुरंत ट्रांसपोर्ट और वायरिंग",
  "24/7 Turnkey Assurance": "24/7 ऑपरेटर और डीज़ल सपोर्ट",
  "Success Stories": "हमारे काम की मिसाल",
  "Real results from real clients": "ग्राहकों का सच्चा अनुभव और भरोसा",
  "Downtime Reduction": "बिजली कटौती में कमी",
  "Average improvement in first 6 months": "शुरुआती 6 महीनों में देखा गया सुधार",
  "Industrial Units Served": "फैक्ट्रियों व साइटों पर सेवा",
  "Powering businesses across Maharashtra": "पूरे महाराष्ट्र में व्यापारों को दी निर्बाध बिजली",
  "Client Rating": "ग्राहकों की रेटिंग",
  "Based on 500+ verified customer reviews": "500 से अधिक संतुष्ट ग्राहकों की समीक्षा",
  "What is the maximum capacity available?": "आपके पास अधिकतम कितनी क्षमता का जनरेटर उपलब्ध है?",
  "Do you provide emergency services in Nashik?": "क्या आप नासिक में इमरजेंसी सर्विस देते हैं?",
  "Are your generators eco-friendly?": "क्या आपके जनरेटर पर्यावरण के अनुकूल और शांत हैं?",
  "What is included in the turnkey rental service?": "टर्नकी रेंटल सर्विस में क्या-क्या शामिल होता है?",
  "Max Silent Fleet Unit": "सबसे बड़ा सायलेंट जनरेटर",
  "Uptime Guarantee": "बिजली चालू रहने का भरोसा",

  // Contact Page Vocabulary (Natural, colloquial Hindi)
  "Send Us A Message": "हमें ईमेल भेजें",
  "Statewide Mobilization": "पूरे महाराष्ट्र में डिलीवरी",
  "WhatsApp Quick Dispatch": "व्हाट्सएप पर तुरंत संपर्क",
  "Nashik Central Depot": "नासिक मुख्य डिपो",
  "Define Your Specification": "अपनी ज़रूरत बताएं",
  "Enquiry Received": "आपकी जानकारी प्राप्त हुई",
  "Submit another enquiry": "दूसरी इंक्वायरी भेजें",
  "Submit Enquiry": "जानकारी भेजें",
  "Full Name": "पूरा नाम",
  "Phone Number": "मोबाइल नंबर",
  "Email Address": "ईमेल पता",
  "Site Location / Pincode": "साइट का पता या पिनकोड",
  "Required Capacity (kVA)": "ज़रूरी क्षमता (kVA)",
  "Application / Industry": "काम का प्रकार",
  "Project Notes & Specific Requirements (Optional)": "काम से जुड़ी खास बातें (वैकल्पिक)",
  "We’ll Review Your Enquiry": "हम आपकी ज़रूरत की समीक्षा करेंगे",
  "Discovery Call Or Site Visit": "फोन पर बात या साइट का दौरा",
  "Tailored Proposal Delivered": "सटीक कोटेशन व जनरेटर रवाना",
  "Open in Google Maps": "गूगल मैप पर देखें",
  "Get Directions": "रास्ता देखें",

  // Booking Page Vocabulary (Natural, colloquial Hindi)
  "Book Your Power": "अपनी ज़रूरत का जनरेटर बुक करें",
  "Pick Your Dates": "तारीखें चुनें",
  "Start Date": "शुरुआती तारीख",
  "End Date": "आखिरी तारीख",
  "Rental Days": "किराए के कुल दिन",
  "How Much Power?": "कितनी पावर की ज़रूरत है?",
  "Power Needed": "ज़रूरी लोड (पावर)",
  "Available Generators": "उपलब्ध जनरेटर",
  "Available Fleet": "उपलब्ध जनरेटर",
  "Daily Operating Hours": "रोज़ाना कितने घंटे चलेगा?",
  "Daily Run Time": "रोज़ाना चलने का समय",
  "Fleet Quantity Required": "कितने जनरेटर चाहिए?",
  "Fleet Quantity": "कुल जनरेटर",
  "Rental Summary": "बुकिंग का ब्योरा",
  "Take Bulk Order": "बड़ा प्रोजेक्ट / बल्क ऑर्डर चाहिए?",
  "Proceed to Checkout": "पेमेंट के लिए आगे बढ़ें",
  "Select Dates to Proceed": "आगे बढ़ने के लिए तारीखें चुनें",
  "Total Amount": "कुल रकम",
  "Rate per Unit/Day": "प्रति दिन किराया (एक यूनिट)",
  "Rental Subtotal": "जनरेटर का कुल किराया",
  "Logistics & Delivery": "गाड़ी और डिलीवरी का खर्च",

  // Cart & Wishlist Vocabulary (Natural, colloquial Hindi)
  "Your Cart is Empty": "आपकी कार्ट खाली है",
  "Generator Cart": "जनरेटर कार्ट",
  "Shortlisted Units": "चुने हुए जनरेटर",
  "Clear All Items": "सभी हटाएं",
  "Daily Rental": "रोज़ाना का किराया",
  "Explore Products": "जनरेटर देखें",
  "Most Requested Generator Capacities": "सबसे ज़्यादा पसंद किए जाने वाले जनरेटर",
  "Explore All 20+ Capacities": "सभी 20+ क्षमताएं देखें",
  "View Fleet Models": "मॉडल देखें",

  // Bulk Order Page Vocabulary (Natural, colloquial Hindi)
  "Bulk Order": "बल्क ऑर्डर",
  "Select Dates": "तारीखें चुनें",
  "Configure Generators": "जनरेटर सेट करें",
  "Review Order": "ऑर्डर चेक करें",
  "Fleet Dispatch Overview": "फ्लीट व बुकिंग सारांश",
  "Total Units": "कुल जनरेटर",
  "Standby Generator": "स्टैंडबाय जनरेटर",
  "Extra Shift Ready": "एक्स्ट्रा शिफ्ट तैयार",
  "Include Transport": "गाड़ी और डिलीवरी शामिल",
  "Include Fuel": "डीज़ल भी शामिल",
  "Commercial Quotation": "ऑफिशियल कोटेशन",
  "Procurement & Delivery Information": "ग्राहक व डिलीवरी की जानकारी",
  "Site Delivery Location": "डिलीवरी की जगह",
  "Fleet Allocation": "आवंटित जनरेटर",
  "Review Your Bulk Order": "अपने बल्क ऑर्डर की जांच करें",
  "Total Rental Est.": "कुल अनुमानित किराया",
  "Advance Token (20%)": "एडवांस टोकन (20%)",
  "Balance on Site": "साइट पर बाकी रकम",
  "Contact Person": "संपर्क व्यक्ति का नाम",
  "Phone / WhatsApp": "मोबाइल / व्हाट्सएप नंबर",
  "Company / Enterprise Name": "कंपनी या फर्म का नाम",
  "Official Email": "ऑफिशियल ईमेल",
  "Site Delivery Address & Landmark": "डिलीवरी का पूरा पता और लैंडमार्क",
  "GSTIN Number": "जीएसटी नंबर",
  "Back to Configure": "पीछे कॉन्फ़िगरेशन पर जाएं",
  "Request Official Quote (PDF)": "पक्का कोटेशन देखें (PDF)",
  "Pay Advance Token": "एडवांस टोकन भरें",
  "Login Required": "लॉग इन ज़रूरी है",
};

const normalizeForLookup = (str: string) =>
  str
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

const HI_LOWER = new Map<string, string>();
for (const [k, v] of Object.entries(HI_PHRASES)) {
  HI_LOWER.set(normalizeForLookup(k), v);
}

const MR_LOWER = new Map<string, string>();
for (const [k, v] of Object.entries(MR_PHRASES)) {
  MR_LOWER.set(normalizeForLookup(k), v);
}

// Ordered term/phrase replacements for dynamic/unseen composite strings in Hindi
const HI_TERM_REPLACEMENTS: Array<[RegExp, string]> = [
  [/\b(\d+)\s*kVA\s+Silent\s+Generator\b/gi, "$1 kVA साइलेंट जनरेटर"],
  [/\b(\d+)\s*kVA\s+Diesel\s+Generator\b/gi, "$1 kVA डीज़ल जनरेटर"],
  [/\b(\d+)\s*kVA\s+Industrial\s+Generator\b/gi, "$1 kVA इंडस्ट्रियल जनरेटर"],
  [/\b(\d+)\s*kVA\s+Commercial\s+Generator\b/gi, "$1 kVA कमर्शियल जनरेटर"],
  [/\b(\d+)\s*kVA\s+Prime\s+Power\s+Station\b/gi, "$1 kVA प्राइम पावर स्टेशन"],
  [/\b(\d+)\s*Days?\s+Duration\b/gi, "$1 दिन का समय"],
  [/\b(\d+)\s*Operating\s+Shifts?\b/gi, "$1 काम की शिफ्ट"],
];

interface LocaleConfig {
  phrases: Record<string, string>;
  lowerMap: Map<string, string>;
  termReplacements: Array<[RegExp, string]>;
  generatorsWord: string;
  stepWord: string;
  shortlistedPrefix: string;
  shortlistedSuffix: string;
  minReadWord: string;
  rightsReserved: string;
  hoursWord: string;
  fullTankPrefix: string;
  runtimeWord: string;
  viewingPrefix: string;
  foundWord: string;
  clearWord: string;
  comparingSuffix: string;
  compareSlotWord: string;
  unitWord: string;
  bookSuffix: string;
  removeSuffix: string;
  insuranceWord: string;
  lastYearText: string;
}

const LOCALE_CONFIGS: Record<"hi" | "mr", LocaleConfig> = {
  hi: {
    phrases: HI_PHRASES,
    lowerMap: HI_LOWER,
    termReplacements: HI_TERM_REPLACEMENTS,
    generatorsWord: "जनरेटर",
    stepWord: "स्टेप",
    shortlistedPrefix: "",
    shortlistedSuffix: "शॉर्टलिस्ट किए गए जनरेटर मॉडल दिख रहे हैं",
    minReadWord: "मिनट का समय",
    rightsReserved: "सर्वज्ञ जनरेटर्स। सर्वाधिकार सुरक्षित।",
    hoursWord: "घंटे",
    fullTankPrefix: "फुल टैंक पर",
    runtimeWord: "रनटाइम",
    viewingPrefix: "देख रहे हैं:",
    foundWord: "मिले",
    clearWord: "हटाएं",
    comparingSuffix: "चुने हुए जनरेटर की तुलना",
    compareSlotWord: "तुलना स्लॉट",
    unitWord: "यूनिट",
    bookSuffix: "बुक करें",
    removeSuffix: "हटाएं",
    insuranceWord: "बीमा",
    lastYearText: "पिछले साल इस समय",
  },
  mr: {
    phrases: MR_PHRASES,
    lowerMap: MR_LOWER,
    termReplacements: MR_TERM_REPLACEMENTS,
    generatorsWord: "जनरेटर",
    stepWord: "पायरी",
    shortlistedPrefix: "",
    shortlistedSuffix: "निवडलेले जनरेटर मॉडेल्स दाखवत आहे",
    minReadWord: "मिनिटे वाचन",
    rightsReserved: "सर्वज्ञ जनरेटर्स. सर्व हक्क राखीव.",
    hoursWord: "तास",
    fullTankPrefix: "फुल टँकवर",
    runtimeWord: "रनटाइम",
    viewingPrefix: "पाहत आहात:",
    foundWord: "सापडले",
    clearWord: "साफ करा",
    comparingSuffix: "निवडलेल्या युनिट्सची तुलना",
    compareSlotWord: "तुलना स्लॉट",
    unitWord: "युनिट",
    bookSuffix: "बुक करा",
    removeSuffix: "काढा",
    insuranceWord: "विमा",
    lastYearText: "गेल्या वर्षी याच वेळी",
  },
};

function translateByLocaleConfig(norm: string, cfg: LocaleConfig): string | null {
  if (!norm || !/[a-zA-Z]/.test(norm)) return null;

  // 1. Exact & case-insensitive match
  if (cfg.phrases[norm]) return cfg.phrases[norm];
  const lowerHit = cfg.lowerMap.get(normalizeForLookup(norm));
  if (lowerHit) return lowerHit;

  // 2. Dynamic pattern templates
  let m: RegExpMatchArray | null;

  if ((m = norm.match(/^(\d+)\s+Generators?$/i))) {
    return `${m[1]} ${cfg.generatorsWord}`;
  }
  if ((m = norm.match(/^Step\s+(\d+)\s*\/\s*(\d+)$/i))) {
    return `${cfg.stepWord} ${m[1]} / ${m[2]}`;
  }
  if ((m = norm.match(/^Showing\s+(\d+)\s+shortlisted\s+generator\s+models$/i))) {
    return `${cfg.shortlistedPrefix}${m[1]} ${cfg.shortlistedSuffix}`;
  }
  if ((m = norm.match(/^(\d+)\s+min\s+read$/i))) {
    return `${m[1]} ${cfg.minReadWord}`;
  }
  if ((m = norm.match(/^©\s*(\d{4})\s+Sarvadnya Generators\.?\s*All rights reserved\.?$/i))) {
    return `© ${m[1]} ${cfg.rightsReserved}`;
  }
  if ((m = norm.match(/^([\d.]+\s*hours?)\s+runtime on full tank$/i))) {
    return `${cfg.fullTankPrefix} ${m[1].replace(/hours?/i, cfg.hoursWord)} ${cfg.runtimeWord}`;
  }
  if ((m = norm.match(/^Viewing:\s*(.+)$/i))) {
    const inner = translateByLocaleConfig(m[1].trim(), cfg) || m[1].trim();
    return `${cfg.viewingPrefix} ${inner}`;
  }
  if ((m = norm.match(/^(\d+)\s+found$/i))) {
    return `${m[1]} ${cfg.foundWord}`;
  }
  if ((m = norm.match(/^Clear\s*\((\d+)$/i))) {
    return `${cfg.clearWord} (${m[1]}`;
  }
  if ((m = norm.match(/^Comparing\s+(\d+)\s+selected\s+units$/i))) {
    return `${m[1]} ${cfg.comparingSuffix}`;
  }
  if ((m = norm.match(/^Compare\s+Slot\s+(\d+)$/i))) {
    return `${cfg.compareSlotWord} ${m[1]}`;
  }
  if ((m = norm.match(/^Unit\s+(\d+)\s*•\s*(.+)$/i))) {
    const sub = translateByLocaleConfig(m[2].trim(), cfg) || m[2].trim();
    return `${cfg.unitWord} ${m[1]} • ${sub}`;
  }
  if ((m = norm.match(/^Book\s+([\d.]+\s*kVA)$/i))) {
    return `${m[1]} ${cfg.bookSuffix}`;
  }
  if ((m = norm.match(/^Remove\s+([\d.]+\s*kVA)$/i))) {
    return `${m[1]} ${cfg.removeSuffix}`;
  }
  if ((m = norm.match(/^([\d–\-.\s]+)\s*hrs$/i))) {
    return `${m[1].trim()} ${cfg.hoursWord}`;
  }
  if (norm.match(/^Insurance\s*\(₹/i)) {
    return `${cfg.insuranceWord} (₹`;
  }
  if (norm.match(/^This time last year$/i)) {
    return cfg.lastYearText;
  }

  // 3. Multi-part pipe titles (e.g. "Page Title | Sarvadnya Generators")
  if (norm.includes(" | ")) {
    const parts = norm
      .split(" | ")
      .map((p) => translateByLocaleConfig(p.trim(), cfg) || p.trim());
    const joined = parts.join(" | ");
    if (joined !== norm) return joined;
  }

  // 4. Composite domain-term fallback so mixed strings translate cleanly
  let candidate = norm;
  let changed = false;
  for (const [pattern, replacement] of cfg.termReplacements) {
    const next = candidate.replace(pattern, replacement);
    if (next !== candidate) {
      candidate = next;
      changed = true;
    }
  }

  return changed ? candidate : null;
}

/**
 * Translates any visible text fragment while preserving exact leading/trailing spaces.
 * Returns null if no translation is needed or available (so original node stays untouched).
 */
export function translateTextForDOM(rawText: string, language: Language): string | null {
  if (language === "en") return null;

  const match = rawText.match(/^(\s*)([\s\S]*?)(\s*)$/);
  if (!match) return null;

  const [, leading, body, trailing] = match;
  const norm = body.replace(/\s+/g, " ").trim();
  if (!norm || !/[a-zA-Z]/.test(norm)) return null;

  // Skip pure emails, URLs, or JSX/code-like paths
  if (
    /^https?:\/\//i.test(norm) ||
    /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(norm)
  ) {
    return null;
  }

  const cfg = LOCALE_CONFIGS[language];
  const translated = translateByLocaleConfig(norm, cfg);
  return translated ? `${leading}${translated}${trailing}` : null;
}
