"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Users, 
  Maximize, 
  Sparkles, 
  ArrowRight, 
  PartyPopper,
  CheckCircle2
} from "lucide-react";
import { BanquetHall } from "@/data/banquets";
import { EventEnquiryModal } from "@/components/forms/EventEnquiryModal";

interface BanquetCardProps {
  hall: BanquetHall;
}

export function BanquetCard({ hall }: BanquetCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="group bg-white rounded-2xl overflow-hidden border border-ivory-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
        {/* Image & Capacity Badge */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-charcoal-400">
          <Image
            src={hall.image}
            alt={hall.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover img-zoom transition-transform duration-700 group-hover:scale-108"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20" />

          {/* Top Capacity & Area Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-semibold text-gold-300 uppercase tracking-wider border border-gold-500/30 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-gold-400" />
              Up to {hall.capacityMax} Guests
            </span>
            <span className="px-2.5 py-1 rounded-full bg-charcoal-600/80 backdrop-blur-md text-ivory-100 text-[11px] font-medium border border-white/20 flex items-center gap-1">
              <Maximize className="w-3 h-3 text-gold-400" />
              {hall.areaSqFt.toLocaleString()} sq. ft.
            </span>
          </div>

          {/* Bottom Highlight */}
          <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-300">
              {hall.highlight}
            </span>
          </div>
        </div>

        {/* Details Body */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-500 group-hover:text-gold-700 transition-colors">
              <Link href={`/banquets/${hall.slug}`}>{hall.name}</Link>
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-200 leading-relaxed line-clamp-2">
              {hall.description}
            </p>
          </div>

          {/* Seating Layouts Grid */}
          <div className="bg-ivory-100 p-3.5 rounded-xl border border-ivory-300 space-y-2">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-charcoal-300 block">
              Seating Capacities (Guests)
            </span>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-white py-1.5 px-2 rounded-lg border border-ivory-200">
                <span className="text-[10px] text-charcoal-100 block">Theatre</span>
                <strong className="text-charcoal-500 font-serif font-bold text-sm">{hall.seatingLayouts.theatre}</strong>
              </div>
              <div className="bg-white py-1.5 px-2 rounded-lg border border-ivory-200">
                <span className="text-[10px] text-charcoal-100 block">Banquet</span>
                <strong className="text-charcoal-500 font-serif font-bold text-sm">{hall.seatingLayouts.banquet}</strong>
              </div>
              <div className="bg-white py-1.5 px-2 rounded-lg border border-ivory-200">
                <span className="text-[10px] text-charcoal-100 block">Cocktail</span>
                <strong className="text-charcoal-500 font-serif font-bold text-sm">{hall.seatingLayouts.cocktail}</strong>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-1.5">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-charcoal-200">
              Ideal For
            </span>
            <div className="flex flex-wrap gap-1.5">
              {hall.suitableFor.slice(0, 2).map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gold-500/10 text-[11px] text-charcoal-400 border border-gold-500/20"
                >
                  <CheckCircle2 className="w-3 h-3 text-gold-600" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-3 grid grid-cols-2 gap-3">
            <Link
              href={`/banquets/${hall.slug}`}
              className="py-2.5 px-3 rounded-xl border border-charcoal-200 hover:border-gold-600 text-charcoal-500 hover:text-gold-700 text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1"
            >
              <span>Explore Hall</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => setIsModalOpen(true)}
              className="py-2.5 px-3 rounded-xl bg-gold-500 hover:bg-gold-600 text-charcoal-600 text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-1"
            >
              <PartyPopper className="w-3.5 h-3.5" />
              <span>Enquire</span>
            </button>
          </div>
        </div>
      </div>

      {/* Event Enquiry Modal */}
      <EventEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedHallId={hall.id}
      />
    </>
  );
}
