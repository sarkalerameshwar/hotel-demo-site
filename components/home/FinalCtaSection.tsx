"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, BedDouble, PartyPopper, PhoneCall } from "lucide-react";
import { hotelConfig } from "@/data/hotel";
import { RoomEnquiryModal } from "@/components/forms/RoomEnquiryModal";
import { EventEnquiryModal } from "@/components/forms/EventEnquiryModal";

export function FinalCtaSection() {
  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-24 sm:py-32 overflow-hidden bg-charcoal-500 text-ivory-100">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={hotelConfig.images.ctaBanner}
            alt="Hotel Green Park Atmosphere & Hospitality"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-600/95 via-charcoal-500/85 to-black/90" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Book Direct for Best Guaranteed Rates</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Your Comfort & Celebration <br />
            <span className="text-gold-gradient italic font-normal">Starts Here</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-ivory-200 font-light max-w-2xl mx-auto leading-relaxed">
            Whether booking an AC room for business or family travel, or reserving the AC banquet hall for up to 500 guests, our team is ready to serve you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setIsRoomModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-charcoal-600 font-bold uppercase tracking-wider text-xs shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <BedDouble className="w-4 h-4" />
              <span>Book a Room</span>
            </button>

            <button
              onClick={() => setIsEventModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold uppercase tracking-wider text-xs border border-white/40 hover:border-gold-400 backdrop-blur-md transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <PartyPopper className="w-4 h-4 text-gold-400" />
              <span>Enquire About Events</span>
            </button>

            <a
              href={hotelConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-emerald-700/80 hover:bg-emerald-600 text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      </section>

      <RoomEnquiryModal
        isOpen={isRoomModalOpen}
        onClose={() => setIsRoomModalOpen(false)}
      />

      <EventEnquiryModal
        isOpen={isEventModalOpen}
        onClose={() => setIsEventModalOpen(false)}
      />
    </>
  );
}
