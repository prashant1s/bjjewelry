import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://bjjewelry.in"),
  title: {
    default: "BJ Jewelry | B2B Gold & 925 Silver Jewelry Manufacturers | Chennai & Hyderabad",
    template: "%s | BJ Jewelry",
  },
  description:
    "Since 2007, BJ Jewelry has been a premier B2B partner for BIS Hallmarked 916 gold and 92.5 sterling silver. We connect global retailers to a strategic network of 150+ manufacturers across South India.",
  keywords: [
    "916 gold jewellery wholesale Hyderabad",
    "925 sterling silver manufacturers Chennai",
    "B2B jewelry suppliers India",
    "BIS Hallmarked gold wholesale",
    "92.5 silver jewelry manufacturers",
    "wholesale bridal jewellery South India",
    "BJ Jewelry",
  ],
  authors: [{ name: "BJ Jewelry" }],
  creator: "BJ Jewelry",
  alternates: {
    canonical: 'https://bjjewelry.in',
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bjjewelry.in",
    siteName: "BJ Jewelry",
    title: "BJ Jewelry – B2B Gold & 925 Silver Manufacturing Partner",
    description: "Est. 2007. BJ Jewelry is a premier B2B partner supplying BIS Hallmark Certified 916 gold & 925 silver collections.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "BJ Jewelry B2B" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BJ Jewelry | B2B Gold & 925 Silver Manufacturers",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Structured Data for Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    "name": "BJ Jewelry",
    "description": "B2B Gold and 925 Silver Manufacturers since 2007.",
    "image": "https://bjjewelry.in/og-image.jpg",
    "foundingDate": "2007",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "url": "https://bjjewelry.in",
    "priceRange": "₹₹₹"
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-charcoal antialiased">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
