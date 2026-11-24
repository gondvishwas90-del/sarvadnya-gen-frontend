import type { Metadata } from "next";
import { CookiesContent } from "@/components/legal/CookiesContent";

export const metadata: Metadata = {
  title: "Cookie Policy | Sarvadnya Generators",
  description:
    "Understanding how we use tracking technologies to improve your power rental discovery experience.",
};

export default function CookiesPage() {
  return <CookiesContent />;
}
