"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  PartyPopper, 
  Users, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  CalendarCheck2,
  PhoneCall
} from "lucide-react";
import { banquetHallsData } from "@/data/banquets";
import { EventEnquiryModal } from "@/components/forms/EventEnquiryModal";
import { hotelConfig } from "@/data/hotel";

export function BanquetsSection() {
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const grandHall = banquetHallsData[0];

  return (
    <>
      <section className="py-20 bg-white relative overflow-hidden border-b border-ivory-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-charcoal-500 to-charcoal-600 rounded-3xl overflow-hidden border border-gold-500/30 text-ivory-100 shadow-xl grid grid-cols-1 lg:grid-cols-12">
            {/* Left Col: Info & Actions */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs font-semibold uppercase tracking-widest">
                  <PartyPopper className="w-3.5 h-3.5 text-gold-400" />
                  <span>Grand AC Banquet & Marriage Hall</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight">
                  Host Your Dream Wedding, Ring Ceremony & Corporate Meets
                </h2>

                <p className="text-sm text-ivory-300 leading-relaxed max-w-xl">
                  A grand pillarless 500-capacity air-conditioned hall with dedicated stage, audio-visual system, bride/groom dressing rooms, and customized pure veg & multi-cuisine catering.
                </p>

                {/* Key feature pills */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-2xl bg-charcoal-400/50 border border-ivory-300/10">
                    <span className="block text-gold-400 font-bold text-base">500+</span>
                    <span className="text-[11px] text-ivory-300">Guest Capacity</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-charcoal-400/50 border border-ivory-300/10">
                    <span className="block text-gold-400 font-bold text-base">100% AC</span>
                    <span className="text-[11px] text-ivory-300">Central Cooling</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-charcoal-400/50 border border-ivory-300/10 col-span-2 sm:col-span-1">
                    <span className="block text-gold-400 font-bold text-base">Backup</span>
                    <span className="text-[11px] text-ivory-300">Power Generator</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-ivory-300/15">
                <button
                  type="button"
                  onClick={() => setIsEventModalOpen(true)}
                  className="px-6 py-3.5 rounded-2xl bg-gold-500 hover:bg-gold-600 text-charcoal-600 font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
                >
                  <CalendarCheck2 className="w-4 h-4" />
                  <span>Check Hall Availability</span>
                </button>

                <Link
                  href="/banquets"
                  className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <span>View All Halls & Stage Photos</span>
                  <ArrowRight className="w-4 h-4 text-gold-400" />
                </Link>
              </div>
            </div>

            {/* Right Col: Image */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
              <Image
                src={grandHall.image}
                alt={grandHall.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-charcoal-600/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 right-6 p-3 rounded-2xl bg-black/60 backdrop-blur-md border border-gold-500/30 text-white text-xs">
                <p className="font-bold text-gold-300">{grandHall.name}</p>
                <p className="text-[11px] text-ivory-300">{grandHall.areaSqFt.toLocaleString()} sq. ft. • {grandHall.ceilingHeightFt} ft Ceiling</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banquet Enquiry Modal */}
      <EventEnquiryModal
        isOpen={isEventModalOpen}
        onClose={() => setIsEventModalOpen(false)}
        preselectedHallId={grandHall.id}
      />
    </>
  );
}
