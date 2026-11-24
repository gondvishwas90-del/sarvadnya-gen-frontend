import {
  GeneratorRangeClient,
  GeneratorItem,
} from "./GeneratorRangeClient";
import { GENERATOR_IMAGES } from "@/constants";

/**
 * Static generators data: 125 kVA to 300 kVA spectrum (3 key capacity powerhouses)
 */
const GENERATORS_DATA: GeneratorItem[] = [
  {
    id: "gen-125",
    badge: "125 kVA",
    series: "Industrial Series",
    title: "125 kVA Industrial Generator",
    description:
      "The premier choice for grand wedding lawns, industrial process plants, and high-wattage concerts. Features high motor starting capability and rigorous voltage regulation.",
    application: "Grand Weddings, Lawns & Industrial Plants",
    recommendedLoads: "Heavy chillers, extensive stage lighting, cranes & production lines",
    icon: "Factory",
    image: GENERATOR_IMAGES.industrial_125kva,
    specs: [
      { label: "Rated Capacity", value: "125 kVA / 100 kW", icon: "Zap" },
      { label: "Output Voltage", value: "415V 3-Phase / 50 Hz ±0.5%", icon: "CircleDot" },
      { label: "Fuel System", value: "Multi-Cylinder Industrial Diesel", icon: "Fuel" },
      { label: "Acoustic Standard", value: "CPCB-II Heavy Acoustic Soundproofing", icon: "Volume2" },
    ],
    features: [
      { title: "100% Prime Continuous", description: "Meets ISO 8528 industrial prime power standards" },
      { title: "Heavy Surge Capacity", description: "Handles high starting currents of industrial motors" },
      { title: "Dual AMF Integration", description: "Seamless automatic grid-to-generator transfer" },
      { title: "On-Site Operator", description: "Supplied with dedicated technician for live supervision" },
    ],
  },
  {
    id: "gen-250",
    badge: "250 kVA",
    series: "Heavy Industrial Series",
    title: "250 kVA Prime Power Station",
    description:
      "High-output power station engineered for healthcare hospitals, major industrial shutdowns, and multi-acre outdoor festivals where power interruption is not an option.",
    application: "Hospitals, Mega Expos & Infrastructure Projects",
    recommendedLoads: "Central HVAC chillers, medical facilities, cranes & plant substations",
    icon: "Power",
    image: GENERATOR_IMAGES.heavyIndustrial_250kva,
    specs: [
      { label: "Rated Capacity", value: "250 kVA / 200 kW", icon: "Zap" },
      { label: "Output Voltage", value: "415V 3-Phase / 50 Hz", icon: "CircleDot" },
      { label: "Fuel System", value: "Heavy Industrial Turbo Diesel", icon: "Fuel" },
      { label: "Acoustic Standard", value: "Heavy-Gauge Sound-Attenuated Enclosure", icon: "Volume2" },
    ],
    features: [
      { title: "Critical Standby", description: "Meets strict reliability thresholds for medical and data facilities" },
      { title: "Synchronization Ready", description: "Can parallel with second DG set for N+1 redundancy" },
      { title: "Large Capacity Tank", description: "24-hour continuous run without requiring mid-shift refueling" },
      { title: "Turnkey Cabling", description: "Includes heavy aluminum/copper cables and distribution boxes" },
    ],
  },
  {
    id: "gen-300",
    badge: "300 kVA",
    series: "Enterprise Series",
    title: "300 kVA Enterprise Power Station",
    description:
      "Maximum continuous fleet output for large-scale manufacturing campuses, multi-day music festivals, and infrastructure developments across Maharashtra.",
    application: "Heavy Manufacturing, Expos & Multi-Megawatt Grids",
    recommendedLoads: "Continuous plant-wide operations, high-voltage transformers & multi-stage festivals",
    icon: "Cpu",
    image: GENERATOR_IMAGES.enterprise_300kva,
    specs: [
      { label: "Rated Capacity", value: "300 kVA / 240 kW", icon: "Zap" },
      { label: "Output Voltage", value: "415V 3-Phase / 50 Hz", icon: "CircleDot" },
      { label: "Fuel System", value: "Electronic Governor Turbo Diesel", icon: "Fuel" },
      { label: "Acoustic Standard", value: "CPCB-II Master Acoustic Canopy", icon: "Volume2" },
    ],
    features: [
      { title: "Plant-Wide Prime", description: "Sufficient capacity to sustain complete industrial production lines" },
      { title: "Digital Sync Bus", description: "Direct synchronization with on-site transformers or secondary DG sets" },
      { title: "24/7 Breakdown Crew", description: "Priority emergency backup unit and dedicated field engineers" },
      { title: "Custom Busbar Rigging", description: "Engineered cabling tailored to your main switchgear panel" },
    ],
  },
];

/**
 * GeneratorRange Component (Server Component)
 *
 * Renders the fleet spectrum section on the warm light architectural background.
 */
export function GeneratorRange() {
  return (
    <section className="w-full relative z-10">
      <GeneratorRangeClient generators={GENERATORS_DATA} />
    </section>
  );
}
