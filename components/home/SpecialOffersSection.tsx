"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Tag, Check, ArrowRight, CalendarDays } from "lucide-react";
import { offersData, HotelOffer } from "@/data/offers";
import { RoomEnquiryModal } from "@/components/forms/RoomEnquiryModal";

export function SpecialOffersSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 lg:py-28 bg-ivory-100 relative border-b border-ivory-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-700 text-xs font-semibold uppercase tracking-widest">
              <Tag className="w-3.5 h-3.5 text-gold-600" />
              <span>Privileged Offers & Packages</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-500 leading-tight">
              Curated Experiences with <br />
              <span className="text-gold-gradient italic font-normal">Exceptional Privileges</span>
            </h2>
            <p className="text-charcoal-300 text-sm sm:text-base leading-relaxed">
              Elevate your stay with our seasonal experiences, weekend escapes, and bespoke wedding celebrations.
            </p>
          </div>

          {/* Offers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offersData.map((offer) => (
              <div
                key={offer.id}
                className="bg-white rounded-3xl overflow-hidden border border-ivory-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 group"
              >
                {/* Image & Discount Badge */}
                <div className="relative h-56 w-full overflow-hidden bg-charcoal-400">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover img-zoom transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-gold-500 text-charcoal-600 text-[11px] font-bold uppercase tracking-wider shadow-sm">
                      {offer.discountBadge}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-ivory-100 text-[11px] font-medium border border-white/20">
                      {offer.tag}
                    </span>
                  </div>

                  {/* Bottom Title in Image */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                    <span className="text-[11px] text-gold-300 uppercase tracking-wider block font-semibold">
                      {offer.validity}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-white leading-tight">
                      {offer.title}
                    </h3>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <p className="text-xs sm:text-sm text-charcoal-200 leading-relaxed">
                    {offer.shortDescription}
                  </p>

                  {/* Inclusions */}
                  <div className="space-y-2 py-3 border-y border-ivory-200">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-charcoal-400 block">
                      Package Inclusions:
                    </span>
                    <div className="space-y-1.5">
                      {offer.inclusions.slice(0, 3).map((inc, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-charcoal-300">
                          <Check className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action Button */}
                  <div className="pt-2 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] text-charcoal-100 uppercase tracking-wider block">From</span>
                      <span className="font-serif font-bold text-base text-charcoal-500">{offer.startingPrice}</span>
                    </div>

                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="px-5 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-charcoal-600 text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm flex items-center gap-1.5"
                    >
                      <CalendarDays className="w-3.5 h-3.5" />
                      <span>Enquire Offer</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
      <RoomEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
