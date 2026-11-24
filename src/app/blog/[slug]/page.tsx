import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogDetailPageClient } from "@/components/blog";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${title} | Sarvadnya Generators Blog`,
    description: `Learn more about ${title} and how it impacts your power management strategies.`,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  if (!slug) return notFound();

  return <BlogDetailPageClient slug={slug} />;
}
