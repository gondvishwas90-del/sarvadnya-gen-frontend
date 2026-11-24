import {
  AboutHero,
  FoundingStory,
  TrackRecord,
  Community,
  Innovation,
  Timeline,
} from "@/components/about";
import { CTA } from "@/components/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Power Journey | Sarvadnya Generators Nashik",
  description:
    "Nashik's trusted partner for Weddings, Grand Events, and Industrial power since 2009. Learn about our commitment to excellence and why we are the preferred choice for reliable generator rentals in Maharashtra.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* 
        The Cube Architecture Pattern:
        Stage 1: Pinned Hero Stage (sticky top-0 z-0)
      */}
      <AboutHero />

      {/* 
        Stage 2: The Cube Reference Curtain Unveil Wrapper (.content-wrapper)
        Monolithic solid z-10 stacking context with shadow that smoothly 
        slides up over the hero like a grand architectural curtain.
      */}
      <div className="relative z-10 bg-[#FAF8F5] shadow-[0_-24px_60px_rgba(17,19,21,0.14)] border-t border-[#E8E2D9]">
        <FoundingStory />
        <TrackRecord />
        <Community />
        <Innovation />
        <Timeline />
        <CTA />
      </div>
    </div>
  );
}
