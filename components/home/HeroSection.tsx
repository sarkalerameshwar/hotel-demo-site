"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, BedDouble, PartyPopper, ChevronDown } from "lucide-react";
import { hotelConfig } from "@/data/hotel";
import { BookingSearchPanel } from "@/components/home/BookingSearchPanel";
import { EventEnquiryModal } from "@/components/forms/EventEnquiryModal";

export function HeroSection() {
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-14 overflow-hidden">
        {/* Background Image with Clean Luxury Gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src={hotelConfig.images.hero}
            alt={hotelConfig.name}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-600 via-black/45 to-black/65" />
        </div>

        {/* Hero Central Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center my-auto py-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-gold-400/40 text-gold-300 text-xs font-semibold tracking-[0.25em] uppercase mb-6 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Welcome to {hotelConfig.name}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.12] mb-6 drop-shadow-md">
            Comfort, Warmth & <br className="hidden sm:inline" />
            <span className="text-gold-gradient italic font-normal">
              Gracious Hospitality
            </span>
          </h1>

          <p className="text-base sm:text-lg text-ivory-200 font-light max-w-xl mx-auto leading-relaxed mb-8 drop-shadow">
            Well-appointed AC rooms, grand AC marriage halls, multi-cuisine family dining, and 24/7 power backup in the heart of the city.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/rooms"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-charcoal-600 font-bold uppercase tracking-wider text-xs shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <BedDouble className="w-4 h-4" />
              <span>Explore Our Suites</span>
            </Link>

            <button
              onClick={() => setIsEventModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold uppercase tracking-wider text-xs border border-white/40 hover:border-gold-400 backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <PartyPopper className="w-4 h-4 text-gold-400" />
              <span>Plan Weddings & Events</span>
            </button>
          </div>
        </div>

        {/* Bottom Booking Search Panel */}
        <div className="relative z-20 mt-6">
          <BookingSearchPanel />
        </div>
      </section>

      <EventEnquiryModal
        isOpen={isEventModalOpen}
        onClose={() => setIsEventModalOpen(false)}
      />
    </>
  );
}
