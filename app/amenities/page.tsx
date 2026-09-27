"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  ChevronRight, 
  Waves, 
  Dumbbell, 
  Wifi, 
  Briefcase, 
  UtensilsCrossed, 
  Car, 
  ShieldCheck, 
  Clock, 
  Compass, 
  Check, 
  CalendarDays,
  PhoneCall
} from "lucide-react";
import { facilitiesData } from "@/data/facilities";
import { hotelConfig } from "@/data/hotel";
import { RoomEnquiryModal } from "@/components/forms/RoomEnquiryModal";

export default function AmenitiesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const iconMap: Record<string, any> = {
    Waves: Waves,
    Sparkles: Sparkles,
    Dumbbell: Dumbbell,
    Wifi: Wifi,
    Briefcase: Briefcase,
    UtensilsCrossed: UtensilsCrossed,
    Car: Car,
    ShieldCheck: ShieldCheck,
    Compass: Compass,
  };

  return (
    <div className="min-h-screen bg-ivory-50 pt-28 pb-20">
      {/* Page Hero Banner */}
      <section className="relative h-80 sm:h-96 w-full overflow-hidden bg-charcoal-500 mb-12">
        <Image
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=80"
          alt="Luxury Pool and Spa Facilities"
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
            <span className="text-gold-300 font-medium">Hotel Amenities</span>
          </nav>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Wellness, Leisure & Privileges
          </h1>
          <p className="text-xs sm:text-sm text-ivory-200 mt-2 max-w-2xl font-light">
            Every convenience has been carefully crafted to offer serenity, rejuvenation, and effortless productivity.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitiesData.map((facility) => {
            const IconComponent = iconMap[facility.iconName] || Sparkles;
            return (
              <div
                key={facility.id}
                className="bg-white rounded-3xl overflow-hidden border border-ivory-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden bg-charcoal-400">
                  <Image
                    src={facility.image}
                    alt={facility.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover img-zoom transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4 z-10 w-10 h-10 rounded-xl bg-black/60 backdrop-blur-md flex items-center justify-center text-gold-300 border border-gold-500/30">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 z-10 text-white">
                    <span className="text-[11px] text-gold-300 font-semibold uppercase tracking-wider block">
                      {facility.highlight}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-white">
                      {facility.name}
                    </h3>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs sm:text-sm text-charcoal-200 leading-relaxed">
                    {facility.description}
                  </p>

                  <div className="pt-3 border-t border-ivory-200 flex items-center justify-between text-xs text-charcoal-300">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-gold-600" />
                      {facility.hours}
                    </span>
                    <span className="text-[11px] font-semibold text-gold-700 uppercase tracking-wider">
                      Complimentary for Residents
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="bg-charcoal-500 text-ivory-100 p-8 sm:p-10 rounded-3xl border border-gold-500/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-white">
              Experience the Luxuries of {hotelConfig.name}
            </h3>
            <p className="text-xs sm:text-sm text-ivory-300">
              Book your stay now to enjoy unlimited access to our Azure pool, Soma spa credits, and executive lounge privileges.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-charcoal-600 font-bold uppercase tracking-wider text-xs shadow-md transition-all flex items-center gap-2 shrink-0"
          >
            <CalendarDays className="w-4 h-4" />
            <span>Book Your Stay</span>
          </button>
        </div>
      </div>

      <RoomEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
