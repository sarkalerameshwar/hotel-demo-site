"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  PartyPopper, 
  Sparkles, 
  ChevronRight, 
  Users, 
  Maximize, 
  Check, 
  Award, 
  CalendarDays,
  PhoneCall,
  CheckCircle2
} from "lucide-react";
import { banquetHallsData, eventPackagesData } from "@/data/banquets";
import { hotelConfig } from "@/data/hotel";
import { formatINR } from "@/lib/utils";
import { BanquetCard } from "@/components/banquets/BanquetCard";
import { EventEnquiryModal } from "@/components/forms/EventEnquiryModal";

export default function BanquetsPage() {
  const [selectedHallForModal, setSelectedHallForModal] = useState<string | undefined>(undefined);
  const [selectedPackageForModal, setSelectedPackageForModal] = useState<string | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (hallId?: string, pkgName?: string) => {
    setSelectedHallForModal(hallId);
    setSelectedPackageForModal(pkgName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-ivory-50 pt-28 pb-20">
      {/* Page Hero Banner */}
      <section className="relative h-80 sm:h-96 w-full overflow-hidden bg-charcoal-500 mb-12">
        <Image
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80"
          alt="Hotel Green Park Wedding & Event Venues"
          fill
          priority
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-600 via-black/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-ivory-300 mb-3">
            <Link href="/" className="hover:text-gold-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
            <span className="text-gold-300 font-medium">Banquets & Events</span>
          </nav>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Regal Weddings & Grand Galas
          </h1>
          <p className="text-xs sm:text-sm text-ivory-200 mt-2 max-w-2xl font-light">
            Host majestic celebrations, conferences, and intimate gatherings in over 14,000+ sq. ft. of versatile pillarless banquet spaces.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white p-8 rounded-3xl border border-ivory-300 shadow-sm">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-gold-500/15 text-gold-700 flex items-center justify-center font-serif font-bold text-lg">
              01
            </div>
            <h3 className="font-serif text-xl font-bold text-charcoal-500">
              Pillarless Grand Ballrooms
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-200 leading-relaxed">
              Expansive, unobstructed viewing angles for up to 800 guests, equipped with intelligent lighting and line-array audio systems.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-gold-500/15 text-gold-700 flex items-center justify-center font-serif font-bold text-lg">
              02
            </div>
            <h3 className="font-serif text-xl font-bold text-charcoal-500">
              Master Culinary Banqueting
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-200 leading-relaxed">
              Customized multi-course royal Indian, Awadhi, Continental, and live barbecue food counters prepared by master chefs.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-gold-500/15 text-gold-700 flex items-center justify-center font-serif font-bold text-lg">
              03
            </div>
            <h3 className="font-serif text-xl font-bold text-charcoal-500">
              Dedicated Event Specialists
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-200 leading-relaxed">
              From mandap decor and thematic florals to VIP bridal suites and guest room blocks, our planners take care of every detail.
            </p>
          </div>
        </div>

        {/* Banquet Halls List */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-gold-700 uppercase tracking-widest">
              Explore Our Spaces
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-500">
              Versatile Banquet Halls & Venues
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-200">
              Select the ideal venue for your upcoming wedding, convention, or private celebration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {banquetHallsData.map((hall) => (
              <BanquetCard key={hall.id} hall={hall} />
            ))}
          </div>
        </div>

        {/* Event Packages */}
        <div className="space-y-8 bg-ivory-100 p-8 sm:p-12 rounded-3xl border border-ivory-300">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-gold-700 uppercase tracking-widest">
              Curated All-Inclusive Packages
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-500">
              Sample Celebration & Wedding Packages
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-200">
              All packages are fully customizable based on guest headcount, menu preferences, and event themes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventPackagesData.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-ivory-300 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-lg transition-all"
              >
                <div className="space-y-3">
                  <span className="px-3 py-1 rounded-full bg-gold-500/15 text-gold-800 text-[11px] font-bold uppercase tracking-wider">
                    {pkg.type} Package
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-charcoal-500">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-charcoal-200 leading-relaxed">
                    {pkg.tagline}
                  </p>

                  <div className="pt-2">
                    <span className="text-[10px] text-charcoal-100 uppercase tracking-wider block">Starting at</span>
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif text-2xl font-bold text-gold-700">{formatINR(pkg.startingPricePerGuest)}</span>
                      <span className="text-xs text-charcoal-200">/ guest + taxes</span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-ivory-200">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-charcoal-400 block">
                      Package Features:
                    </span>
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-charcoal-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleOpenModal(undefined, pkg.name)}
                  className="w-full py-3 px-4 rounded-xl bg-gold-500 hover:bg-gold-600 text-charcoal-600 font-bold uppercase tracking-wider text-xs shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <PartyPopper className="w-4 h-4" />
                  <span>Enquire This Package</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Fast Contact Strip */}
        <div className="bg-charcoal-500 text-ivory-100 p-8 sm:p-10 rounded-3xl border border-gold-500/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-white">
              Planning a Grand Wedding or Conference?
            </h3>
            <p className="text-xs sm:text-sm text-ivory-300">
              Connect directly with our Banquet Sales Director for customized floor layouts, dates, and tasting appointments.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <a
              href={`tel:${hotelConfig.contact.phone}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-white/30 hover:border-gold-400 text-ivory-100 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-gold-400" />
              <span>{hotelConfig.contact.phoneDisplay}</span>
            </a>

            <button
              onClick={() => handleOpenModal()}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-charcoal-600 font-bold uppercase tracking-wider text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              <PartyPopper className="w-4 h-4" />
              <span>Submit Event Enquiry</span>
            </button>
          </div>
        </div>
      </div>

      {/* Global Event Enquiry Modal */}
      <EventEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedHallId={selectedHallForModal}
        preselectedPackageName={selectedPackageForModal}
      />
    </div>
  );
}
