import type { Metadata } from "next";
import { TermsContent } from "@/components/legal/TermsContent";

export const metadata: Metadata = {
  title: "Terms & Conditions | Sarvadnya Generators",
  description:
    "Standard operating procedures and legal framework for renting generators with Sarvadnya Generators.",
};

export default function TermsPage() {
  return <TermsContent />;
}
