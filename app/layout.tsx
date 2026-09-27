import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DemoBanner } from "@/components/layout/DemoBanner";
import { ToasterProvider } from "@/components/ui/ToasterProvider";
import { hotelConfig } from "@/data/hotel";

export const metadata: Metadata = {
  title: {
    default: `${hotelConfig.name} | Luxury Hotel, Suites & Grand Conventions`,
    template: `%s | ${hotelConfig.name}`,
  },
  description: hotelConfig.shortDescription,
  keywords: [
    "Hotel Green Park",
    "Green Park AC Rooms",
    "AC Banquet Hall for Weddings",
    "Multi-Cuisine Family Restaurant",
    "Marriage Hall",
    "Hotel in City Center",
    "Comfortable Stays",
  ],
  authors: [{ name: hotelConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hotelgreenpark.demo",
    title: `${hotelConfig.name} — AC Rooms, Banquets & Family Restaurant`,
    description: hotelConfig.shortDescription,
    siteName: hotelConfig.name,
    images: [
      {
        url: hotelConfig.images.hero,
        width: 1200,
        height: 630,
        alt: `${hotelConfig.name} Facade`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${hotelConfig.name} — Luxury Hotel & Conventions`,
    description: hotelConfig.shortDescription,
    images: [hotelConfig.images.hero],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col bg-ivory-50 text-charcoal-400 selection:bg-gold-500 selection:text-charcoal-600">
        <DemoBanner />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ToasterProvider />
      </body>
    </html>
  );
}
