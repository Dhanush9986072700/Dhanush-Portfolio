import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk, JetBrains_Mono, PT_Serif } from "next/font/google";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const ptSerif = PT_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#fafafa",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Dhanush N — Product Designer",
    template: "%s | Dhanush N",
  },
  description: siteConfig.description,
  keywords: ["product designer", "UI/UX designer", "Bangalore", "design systems", "React", "Next.js", "Figma"],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: "Dhanush N — Product Designer",
    title: "Dhanush N — Product Designer",
    description: "Senior Product Designer crafting interfaces where craft meets code. 4+ years, 12 products shipped.",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Dhanush N — Product Designer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhanush N — Product Designer",
    description: "Senior Product Designer crafting interfaces where craft meets code. Based in Bangalore.",
    images: [siteConfig.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${ptSerif.variable}`}>
      <body className="min-h-screen antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
