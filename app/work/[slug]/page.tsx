import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects, getProjectBySlug, getAdjacentProjects } from "@/data/projects";
import { siteConfig } from "@/lib/site";
import CaseStudyHero from "@/components/sections/CaseStudyHero";
import CaseStudyContent from "@/components/sections/CaseStudyContent";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import GradientMesh from "@/components/animations/GradientMesh";
import CursorBlob from "@/components/animations/CursorBlob";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} - Case Study`,
    description: project.pitch,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} - Case Study | Dhanush N`,
      description: project.pitch,
      type: "article",
      url: `${siteConfig.url}/work/${project.slug}`,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${project.title} - Case Study`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} - Case Study | Dhanush N`,
      description: project.pitch,
      images: [siteConfig.ogImage],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const { next } = getAdjacentProjects(slug);

  return (
    <div className="relative min-h-screen">
      <GradientMesh />
      <CursorBlob />
      <Navigation />

      <main className="relative z-10 pt-16">
        <CaseStudyHero project={project} />
        <CaseStudyContent project={project} />

        {/* Next project */}
        {next && (
          <div className="border-t border-black/[0.06] py-16">
            <div className="max-w-6xl mx-auto px-5 sm:px-7 lg:px-10">
              <p className="text-xs font-mono text-[#F97316]/70 uppercase mb-6">
                Next Project
              </p>
              <Link
                href={`/work/${next.slug}`}
                className="focus-ring group flex flex-col gap-6 border border-black/[0.1] bg-[#F8F8F8] p-6 transition-colors duration-300 hover:border-black/28 sm:flex-row sm:items-center sm:justify-between sm:p-8"
              >
                <div>
                  <p className="font-mono text-xs text-[#111]/30 mb-2">{next.number}</p>
                  <h3 className="text-3xl font-black leading-none text-[#111] transition-colors duration-300 group-hover:text-[#111]/72 md:text-5xl">
                    {next.title}
                  </h3>
                  <p className="text-[#111]/40 text-sm mt-2 leading-relaxed">{next.description}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-black/[0.14] flex items-center justify-center flex-shrink-0 group-hover:border-black/34 transition-colors duration-300">
                  <ArrowRight size={18} className="text-[#111]/50 group-hover:text-[#111] transition-colors" />
                </div>
              </Link>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
