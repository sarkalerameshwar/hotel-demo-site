"use client";

import React from "react";
import Link from "next/link";
import { BedDouble, ArrowRight, PhoneCall } from "lucide-react";
import { roomsData } from "@/data/rooms";
import { RoomCard } from "@/components/rooms/RoomCard";
import { hotelConfig } from "@/data/hotel";

export function FeaturedRooms() {
  // Show only 2 featured rooms on the homepage for a clean, non-overwhelming experience
  const featuredRooms = roomsData.slice(0, 2);

  return (
    <section className="py-20 bg-ivory-50 relative border-b border-ivory-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-ivory-300">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-700 text-xs font-semibold uppercase tracking-widest">
              <BedDouble className="w-3.5 h-3.5 text-gold-600" />
              <span>Rooms & Accommodations</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-500 leading-tight">
              Featured AC Rooms & <span className="text-gold-gradient italic font-normal">Suites</span>
            </h2>
            <p className="text-charcoal-200 text-sm leading-relaxed">
              Equipped with split AC, fast Wi-Fi, Smart TV, 24-hour hot water, and 100% generator power backup.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-charcoal-500 text-ivory-100 hover:bg-gold-500 hover:text-charcoal-500 text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
            >
              <span>View All 4 Room Types</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 2 Wide Room Cards */}
        <div className="space-y-6">
          {featuredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        {/* Bottom prompt */}
        <div className="text-center pt-4">
          <Link
            href="/rooms"
            className="inline-flex items-center gap-2 text-sm font-bold text-gold-600 hover:text-gold-700 underline underline-offset-4"
          >
            Looking for Family Suites or Executive Premier? View complete room inventory & amenities →
          </Link>
        </div>
      </div>
    </section>
  );
}
