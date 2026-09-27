"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Award, HeartHandshake } from "lucide-react";
import { hotelConfig } from "@/data/hotel";

export function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-ivory-100 relative overflow-hidden border-b border-ivory-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-6 relative">
            {/* Main Image */}
            <div className="relative h-[420px] sm:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-ivory-300 group">
              <Image
                src={hotelConfig.images.about}
                alt="Hotel Green Park Courtyard & Architecture"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover img-zoom group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating Award Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-charcoal-500/90 backdrop-blur-md border border-gold-500/40 text-ivory-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 shrink-0 border border-gold-500/30">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-gold-200">
                    Hospitality Excellence Landmark
                  </h4>
                  <p className="text-[11px] text-ivory-300">
                    Recognized for world-class suites, royal gastronomy & banquet galas
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Gold Frame accent */}
            <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 border-2 border-gold-500/30 rounded-3xl -z-10 hidden sm:block pointer-events-none" />
          </div>

          {/* Right Column: Editorial Text & Metrics */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-700 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>Timeless Heritage & Gracious Service</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-500 leading-tight">
              A Place Where Every Stay <br />
              <span className="text-gold-gradient italic font-normal">Becomes a Story</span>
            </h2>

            <p className="text-charcoal-300 text-sm sm:text-base leading-relaxed">
              {hotelConfig.fullDescription}
            </p>

            {/* Three Highlight Metrics */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-ivory-300">
              <div>
                <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-600 block">
                  {hotelConfig.metrics.roomsCount}+
                </span>
                <span className="text-xs text-charcoal-200 uppercase tracking-wider font-semibold">
                  Luxury Rooms & Suites
                </span>
              </div>

              <div>
                <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-600 block">
                  {hotelConfig.metrics.banquetCapacity}+
                </span>
                <span className="text-xs text-charcoal-200 uppercase tracking-wider font-semibold">
                  Event Guest Capacity
                </span>
              </div>

              <div>
                <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-600 block">
                  {hotelConfig.metrics.yearsOfExcellence}+
                </span>
                <span className="text-xs text-charcoal-200 uppercase tracking-wider font-semibold">
                  Years of Royalty
                </span>
              </div>
            </div>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-charcoal-300">
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-gold-600 shrink-0" />
                <span>24/7 Dedicated Butler Concierge</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold-600 shrink-0" />
                <span>Pillarless Luxury Banquet Halls</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/about"
                className="px-6 py-3.5 rounded-full bg-charcoal-500 hover:bg-charcoal-600 text-ivory-100 text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 text-gold-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
