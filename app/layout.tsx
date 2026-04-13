import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
// import { MetalTicker } from "@/components/layout/MetalTicker";
import  MetalRatesSection  from "@/components/sections/MetalRatesSection";
// 1. IMPORTANT: We import YOUR custom wrapper, not next-auth directly
import { Providers } from "@/components/Providers";

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
//seo metadata fix remove diamonds
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://bjjewelry.in"),
  title: {
    default: "BJ Jewelry – Fine Gold, & Silver Jewellery | Hyderabad & Chennai",
    template: "%s | BJ Jewelry",
  },
  description:
    "BJ Jewelry – Est. 2007. Hyderabad's finest gold, silver & platinum jewellery. BIS hallmarked, custom orders, bridal collections, wholesale B2B. Now in Chennai.",
  keywords: [
    "gold jewellery Hyderabad",
    "diamond jewellery",
    "bridal jewellery",
    "BIS hallmarked",
    "custom jewellery",
    "silver jewellery",
    "platinum jewellery",
    "kundan polki",
    "wholesale jewellery",
    "BJ Jewelry",
  ],
  authors: [{ name: "BJ Jewelry" }],
  creator: "BJ Jewelry",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bjjewelry.in",
    siteName: "BJ Jewelry",
    title: "BJ Jewelry – Fine Gold, Diamond & Silver Jewellery",
    description: "Est. 2007. Hyderabad & Chennai's destination for every kind of beauty.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "BJ Jewelry" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BJ Jewelry – Fine Gold, Diamond & Silver Jewellery",
    description: "Est. 2007. Hyderabad & Chennai's destination for every kind of beauty.",
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
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${playfair.variable}`}>
      <body className="bg-white text-charcoal antialiased">
         <WishlistProvider>
        <Providers>
          <MetalRatesSection/>
          {/* <MetalTicker /> */}
          <Navbar />
         
          <main>{children}</main>
          <Footer />
        </Providers>
</WishlistProvider>
        {/* WhatsApp floating button */}
        <a
          href="https://wa.me/919444963811?text=Hello%20BJ%20Jewelry"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110"
          style={{ background: "#25D366" }}
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </body>
    </html>
  );
}