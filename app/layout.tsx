import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#020202",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Dhanush N - Senior Product Designer",
    template: "%s | Dhanush N",
  },
  description: siteConfig.description,
  keywords: [
    "product designer",
    "UI/UX designer",
    "Bangalore",
    "design systems",
    "React",
    "Next.js",
    "Figma",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: "Dhanush N - Senior Product Designer",
    title: "Dhanush N - Senior Product Designer",
    description:
      "Senior Product Designer crafting interfaces where craft meets code. 4+ years, 10+ products shipped.",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Dhanush N - Senior Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhanush N - Senior Product Designer",
    description:
      "Senior Product Designer crafting interfaces where craft meets code. Based in Bangalore.",
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
