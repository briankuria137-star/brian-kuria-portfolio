import { siteConfig } from "@/lib/site";
import { WebsiteStructuredData } from "@/components/seo/WebsiteStructuredData";
import type { Metadata } from "next";
import { Instrument_Sans, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const displayFont = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = siteConfig.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  verification: {
    google: "6t1qdpvNlv88tc9Gyv-W1HplRuWujNyr1mhImhh0VZE",
  },
  keywords: [
    "Brian Kuria",
    "IT professional",
    "web developer",
    "BKM DIGITAL",
    "Next.js developer",
    "digital solutions",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteConfig.title,
    description:
      "IT professional and technology builder. Practical digital products, websites, and technology solutions — including the BKM DIGITAL ecosystem.",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/branding/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description:
      "IT professional and technology builder. Practical digital products, websites, and technology solutions.",
    images: ["/images/branding/og-image.png"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <body className="font-body bg-background text-foreground antialiased">
        <WebsiteStructuredData />
        {children}
      </body>
    </html>
  );
}
