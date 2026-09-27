"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  UtensilsCrossed, 
  ArrowRight, 
  Clock, 
  CalendarDays, 
  PhoneCall,
  Sparkles
} from "lucide-react";
import { restaurantsData } from "@/data/dining";
import { DiningEnquiryModal } from "@/components/forms/DiningEnquiryModal";
import { hotelConfig } from "@/data/hotel";

export function DiningSection() {
  const [isDiningModalOpen, setIsDiningModalOpen] = useState(false);
  const venue = restaurantsData[0];

  return (
    <>
      <section className="py-20 bg-ivory-50 relative overflow-hidden border-b border-ivory-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-8 sm:p-12 rounded-3xl border border-ivory-300 shadow-sm">
            {/* Left Image */}
            <div className="lg:col-span-6 relative h-72 sm:h-96 rounded-2xl overflow-hidden group shadow-md">
              <Image
                src={venue.image}
                alt={venue.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] text-gold-300 font-bold uppercase tracking-wider block">
                  Pure Veg & Multi-Cuisine
                </span>
                <h3 className="font-serif text-2xl font-bold">{venue.name}</h3>
                <p className="text-xs text-ivory-200 mt-1 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-gold-400" />
                  <span>Open Daily: 07:00 AM – 11:00 PM (Lunch & Dinner)</span>
                </p>
              </div>
            </div>

            {/* Right Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-700 text-xs font-semibold uppercase tracking-widest">
                  <UtensilsCrossed className="w-3.5 h-3.5 text-gold-600" />
                  <span>Family Dining & Room Service</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-4xl font-bold text-charcoal-500 leading-tight">
                  Authentic Taste, Warm Service & Family Comfort
                </h2>

                <p className="text-sm text-charcoal-200 leading-relaxed">
                  Treat your family and guests to freshly prepared North Indian curries, Maharashtrian thalis, crispy Chinese, and Tandoori platters in our air-conditioned restaurant or right to your room.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-3 text-xs text-charcoal-300">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-ivory-100 border border-ivory-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-medium">100% Pure Veg & Non-Veg Kitchens</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-ivory-100 border border-ivory-200">
                  <span className="w-2 h-2 rounded-full bg-gold-500" />
                  <span className="font-medium">24/7 In-Room Dining</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/dining"
                  className="px-6 py-3.5 rounded-2xl bg-charcoal-500 hover:bg-charcoal-600 text-ivory-100 text-xs font-bold uppercase tracking-wider transition-all shadow-sm flex items-center gap-2"
                >
                  <span>Explore Full Food Menu</span>
                  <ArrowRight className="w-4 h-4 text-gold-400" />
                </Link>

                <button
                  type="button"
                  onClick={() => setIsDiningModalOpen(true)}
                  className="px-6 py-3.5 rounded-2xl bg-gold-500/15 hover:bg-gold-500/25 border border-gold-500/30 text-gold-700 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <CalendarDays className="w-4 h-4 text-gold-600" />
                  <span>Reserve Table</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dining Modal */}
      <DiningEnquiryModal
        isOpen={isDiningModalOpen}
        onClose={() => setIsDiningModalOpen(false)}
      />
    </>
  );
}
