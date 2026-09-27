import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { HotelOverviewGrid } from "@/components/home/HotelOverviewGrid";
import { FeaturedRooms } from "@/components/home/FeaturedRooms";
import { BanquetsSection } from "@/components/home/BanquetsSection";
import { DiningSection } from "@/components/home/DiningSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero & Fast Booking Search Bar */}
      <HeroSection />

      {/* 2. Hotel Pillars & Page Gateways */}
      <HotelOverviewGrid />

      {/* 3. Featured Rooms */}
      <FeaturedRooms />

      {/* 4. AC Banquet Hall Spotlight */}
      <BanquetsSection />

      {/* 5. Family Restaurant Spotlight */}
      <DiningSection />

      {/* 6. Direct Booking & Contact CTA */}
      <FinalCtaSection />
    </div>
  );
}
