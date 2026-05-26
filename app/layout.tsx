import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import StructuredData from "@/components/StructuredData";
import BestOfBayBadge from "@/components/BestOfBayBadge";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: "variable",
  style: ["normal", "italic"],
  display: "swap",
  // Expose the WONK axis so we can turn off the font's "wonky" stylistic
  // alternates (the playful f/j/g letterforms the client flagged).
  axes: ["SOFT", "WONK"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const SITE = "https://piedmontdentalbydesign.com";
const TITLE =
  "Piedmont Dental By Design — Cosmetic, Restorative & Preventive Dentistry";
const DESCRIPTION =
  "Cosmetic, restorative, and preventive dental practice on Grand Avenue in Piedmont, California — co-owned by Dr. Jill Martenson and Dr. David Ma, with 30 years of trusted care. 4.9 ★ on Google. Voted Best of the East Bay 2024 & 2025.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: TITLE,
    template: "%s | Piedmont Dental By Design",
  },
  description: DESCRIPTION,
  applicationName: "Piedmont Dental By Design",
  generator: "Next.js",
  referrer: "strict-origin-when-cross-origin",
  keywords: [
    "cosmetic dentist Piedmont",
    "dentist Piedmont CA",
    "porcelain veneers Piedmont",
    "Invisalign® Piedmont",
    "teeth whitening Piedmont",
    "cosmetic dentistry East Bay",
    "Dr. Jill Martenson",
    "Piedmont Dental By Design",
  ],
  authors: [{ name: "Dr. Jill A. Martenson" }, { name: "Dr. David Ma" }],
  creator: "Piedmont Dental By Design",
  publisher: "Piedmont Dental By Design",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Piedmont Dental By Design",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/hero-poster.jpg",
        width: 1920,
        height: 1080,
        alt: "Piedmont Dental By Design — Dr. Jill Martenson, Dr. David Ma, and team in Piedmont, California",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/hero-poster.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/manifest.json",
  category: "Health & Medical",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  other: {
    "geo.region": "US-CA",
    "geo.placename": "Piedmont, California",
    "geo.position": "37.8246;-122.2429",
    ICBM: "37.8246, -122.2429",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf6ef" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        {children}
        <BestOfBayBadge />
        <StructuredData />
      </body>
    </html>
  );
}
