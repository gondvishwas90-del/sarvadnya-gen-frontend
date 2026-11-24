import type { Metadata } from "next";
import { PrivacyContent } from "@/components/legal/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Sarvadnya Generators",
  description:
    "Our commitment to protecting your personal data and ensuring transparency in our power rental services.",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
