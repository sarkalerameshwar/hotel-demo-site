"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ChevronRight, 
  Users, 
  Maximize, 
  PartyPopper, 
  Sparkles, 
  Check, 
  PhoneCall, 
  CalendarDays,
  UtensilsCrossed,
  Layers,
  Building
} from "lucide-react";
import { banquetHallsData } from "@/data/banquets";
import { hotelConfig } from "@/data/hotel";
import { BanquetCard } from "@/components/banquets/BanquetCard";
import { EventEnquiryModal } from "@/components/forms/EventEnquiryModal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function BanquetDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const hall = banquetHallsData.find((h) => h.slug === resolvedParams.slug);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!hall) {
    notFound();
  }

  const otherHalls = banquetHallsData.filter((h) => h.id !== hall.id);

  return (
    <div className="min-h-screen bg-ivory-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-charcoal-200">
          <Link href="/" className="hover:text-gold-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
          <Link href="/banquets" className="hover:text-gold-600 transition-colors">
            Banquets & Events
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
          <span className="text-charcoal-500 font-semibold">{hall.name}</span>
        </nav>

        {/* Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-ivory-300">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 text-gold-800 text-xs font-semibold uppercase tracking-wider border border-gold-500/30">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>{hall.highlight}</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-500">
              {hall.name}
            </h1>
            <p className="text-xs sm:text-sm text-charcoal-300 font-light max-w-2xl">
              {hall.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-600 text-charcoal-600 font-bold uppercase tracking-wider text-xs shadow-md transition-all flex items-center gap-2"
            >
              <PartyPopper className="w-4 h-4" />
              <span>Enquire for Booking</span>
            </button>
          </div>
        </div>

        {/* Photo Banner */}
        <div className="relative h-[380px] sm:h-[500px] w-full rounded-3xl overflow-hidden shadow-lg border border-ivory-300 bg-charcoal-400">
          <Image
            src={hall.gallery[activeImageIndex] || hall.image}
            alt={hall.name}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Specs Left Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Seating Layouts Matrix */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-ivory-300 shadow-sm space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-gold-700 uppercase tracking-wider">
                  Capacity Specifications
                </span>
                <h3 className="font-serif text-2xl font-bold text-charcoal-500">
                  Seating Layouts & Guest Capacities
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-ivory-100 border border-ivory-200 text-center space-y-1">
                  <span className="text-xs text-charcoal-200 block">Theatre Style</span>
                  <strong className="font-serif text-2xl font-bold text-charcoal-500">{hall.seatingLayouts.theatre}</strong>
                  <span className="text-[10px] text-charcoal-100 block">Auditorium / Stage</span>
                </div>
                <div className="p-4 rounded-xl bg-ivory-100 border border-ivory-200 text-center space-y-1">
                  <span className="text-xs text-charcoal-200 block">Round Banquet</span>
                  <strong className="font-serif text-2xl font-bold text-charcoal-500">{hall.seatingLayouts.banquet}</strong>
                  <span className="text-[10px] text-charcoal-100 block">Round Tables of 8-10</span>
                </div>
                <div className="p-4 rounded-xl bg-ivory-100 border border-ivory-200 text-center space-y-1">
                  <span className="text-xs text-charcoal-200 block">Cocktail / Standing</span>
                  <strong className="font-serif text-2xl font-bold text-charcoal-500">{hall.seatingLayouts.cocktail}</strong>
                  <span className="text-[10px] text-charcoal-100 block">High Tables & Bar</span>
                </div>
                <div className="p-4 rounded-xl bg-ivory-100 border border-ivory-200 text-center space-y-1">
                  <span className="text-xs text-charcoal-200 block">Classroom Style</span>
                  <strong className="font-serif text-2xl font-bold text-charcoal-500">{hall.seatingLayouts.classroom}</strong>
                  <span className="text-[10px] text-charcoal-100 block">Desks with Note pads</span>
                </div>
                <div className="p-4 rounded-xl bg-ivory-100 border border-ivory-200 text-center space-y-1">
                  <span className="text-xs text-charcoal-200 block">U-Shape</span>
                  <strong className="font-serif text-2xl font-bold text-charcoal-500">{hall.seatingLayouts.ushape}</strong>
                  <span className="text-[10px] text-charcoal-100 block">Interactive Workshop</span>
                </div>
                <div className="p-4 rounded-xl bg-ivory-100 border border-ivory-200 text-center space-y-1">
                  <span className="text-xs text-charcoal-200 block">Boardroom</span>
                  <strong className="font-serif text-2xl font-bold text-charcoal-500">{hall.seatingLayouts.boardroom}</strong>
                  <span className="text-[10px] text-charcoal-100 block">Executive Summit</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-ivory-300 shadow-sm space-y-4">
              <h3 className="font-serif text-2xl font-bold text-charcoal-500">
                Venue Overview & Architecture
              </h3>
              <p className="text-charcoal-300 text-sm sm:text-base leading-relaxed">
                {hall.longDescription}
              </p>
            </div>

            {/* Features & AV Specs */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-ivory-300 shadow-sm space-y-4">
              <h3 className="font-serif text-2xl font-bold text-charcoal-500">
                Audio-Visual & Event Infrastructure
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {hall.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-300">
                    <Check className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Catering Options */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-ivory-300 shadow-sm space-y-4">
              <h3 className="font-serif text-2xl font-bold text-charcoal-500 flex items-center gap-2">
                <UtensilsCrossed className="w-5 h-5 text-gold-600" />
                <span>Banqueting & Culinary Offerings</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {hall.cateringOptions.map((cat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-300">
                    <Sparkles className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                    <span>{cat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Venue Quick Facts & Booking Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-charcoal-500 text-ivory-100 p-6 sm:p-8 rounded-3xl border border-gold-500/40 shadow-xl space-y-6 sticky top-28">
              <div className="space-y-1">
                <span className="text-[11px] text-gold-400 font-semibold uppercase tracking-wider">
                  Venue Blueprint
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  {hall.name}
                </h3>
              </div>

              <div className="p-4 rounded-xl bg-charcoal-600 border border-charcoal-400 space-y-2.5 text-xs">
                <div className="flex justify-between text-ivory-300">
                  <span>Total Area:</span>
                  <span className="font-bold text-white">{hall.areaSqFt.toLocaleString()} Sq. Ft.</span>
                </div>
                <div className="flex justify-between text-ivory-300">
                  <span>Max Guest Capacity:</span>
                  <span className="font-bold text-gold-400">{hall.capacityMax} Guests</span>
                </div>
                <div className="flex justify-between text-ivory-300">
                  <span>Ceiling Clearance:</span>
                  <span className="text-ivory-100">{hall.ceilingHeightFt} Feet Height</span>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-charcoal-600 font-bold uppercase tracking-wider text-xs shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <PartyPopper className="w-4 h-4" />
                <span>Reserve Event Date</span>
              </button>

              <div className="pt-2 border-t border-charcoal-400 space-y-2 text-xs text-ivory-300">
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-gold-400 shrink-0" />
                  <a href={`tel:${hotelConfig.contact.phone}`} className="hover:text-gold-400">
                    Banquets Line: {hotelConfig.contact.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Halls */}
        <div className="pt-12 border-t border-ivory-300 space-y-6">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-500">
            Explore Other Event Spaces
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherHalls.map((h) => (
              <BanquetCard key={h.id} hall={h} />
            ))}
          </div>
        </div>
      </div>

      <EventEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedHallId={hall.id}
      />
    </div>
  );
}
