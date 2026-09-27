"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Waves, 
  Sparkles, 
  Dumbbell, 
  Wifi, 
  Briefcase, 
  UtensilsCrossed, 
  Car, 
  ShieldCheck, 
  Clock, 
  Compass, 
  ArrowRight,
  CalendarDays
} from "lucide-react";
import { facilitiesData } from "@/data/facilities";
import { RoomEnquiryModal } from "@/components/forms/RoomEnquiryModal";

export function AmenitiesSection() {
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

  // Top key 6 services for a punchy, clean presentation
  const keyServices = facilitiesData.slice(0, 6);

  return (
    <>
      <section className="py-24 bg-white relative overflow-hidden border-b border-ivory-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-700 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>What We Offer</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-500 leading-tight">
              Curated Services & <br />
              <span className="text-gold-gradient italic font-normal">Luxury Facilities</span>
            </h2>
            <p className="text-charcoal-200 text-sm sm:text-base leading-relaxed">
              Designed to make every moment of your stay effortless, restorative, and memorable.
            </p>
          </div>

          {/* Clean 6-Card Services Grid with Photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyServices.map((service) => {
              const IconComponent = iconMap[service.iconName] || Sparkles;
              return (
                <div
                  key={service.id}
                  className="bg-ivory-50 rounded-3xl overflow-hidden border border-ivory-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  {/* Photo Header */}
                  <div className="relative h-52 w-full overflow-hidden bg-charcoal-400">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover img-zoom transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    <div className="absolute top-4 left-4 z-10 w-10 h-10 rounded-2xl bg-black/60 backdrop-blur-md flex items-center justify-center text-gold-300 border border-gold-500/30">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 z-10 text-white">
                      <span className="text-[10px] text-gold-300 font-bold uppercase tracking-wider block">
                        {service.highlight}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-white">
                        {service.name}
                      </h3>
                    </div>
                  </div>

                  {/* Details & Hours */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <p className="text-xs sm:text-sm text-charcoal-200 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-3 border-t border-ivory-200 flex items-center justify-between text-xs text-charcoal-300">
                      <span className="flex items-center gap-1.5 font-medium text-[11px]">
                        <Clock className="w-3.5 h-3.5 text-gold-600" />
                        {service.hours}
                      </span>
                      <span className="text-[10px] font-bold text-gold-700 uppercase tracking-wider bg-gold-500/10 px-2 py-0.5 rounded-full">
                        Complimentary
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Clean Call To Action Bar */}
          <div className="bg-ivory-100 p-8 rounded-3xl border border-ivory-300 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-500">
                Ready to Experience Our World-Class Services?
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-200 mt-1">
                Book direct today to receive complimentary airport transfers and spa credits.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3.5 rounded-2xl bg-gold-500 hover:bg-gold-600 text-charcoal-600 font-bold uppercase tracking-wider text-xs shadow-md transition-all flex items-center gap-2"
              >
                <CalendarDays className="w-4 h-4" />
                <span>Book a Suite</span>
              </button>
              <Link
                href="/amenities"
                className="px-5 py-3.5 rounded-2xl border border-charcoal-300 hover:border-gold-600 text-charcoal-500 text-xs font-semibold uppercase tracking-wider transition-colors bg-white"
              >
                <span>View All Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RoomEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
