import type { Metadata } from "next";
import ContactContent from "@/components/sections/ContactContent";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Dhanush N for senior product design roles, front-end product work, and high-impact freelance projects.",
  openGraph: {
    title: "Contact | Dhanush N",
    description:
      "Start a conversation about senior product design, front-end systems, or freelance product work.",
    images: [siteConfig.ogImage],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
