"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { BedDouble, Sparkles, ChevronRight, PhoneCall } from "lucide-react";
import { roomsData } from "@/data/rooms";
import { RoomCard } from "@/components/rooms/RoomCard";
import { RoomFilters } from "@/components/rooms/RoomFilters";
import { hotelConfig } from "@/data/hotel";

export default function RoomsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [guestFilter, setGuestFilter] = useState(0);
  const [sortBy, setSortBy] = useState<"price-asc" | "price-desc" | "size-desc" | "popular">("popular");

  const filteredRooms = useMemo(() => {
    let result = roomsData.filter((room) => {
      if (selectedCategory !== "all" && room.category !== selectedCategory) {
        return false;
      }
      if (guestFilter > 0 && room.maxGuests < guestFilter) {
        return false;
      }
      return true;
    });

    if (sortBy === "price-asc") {
      result.sort((a, b) => a.pricePerNight - b.pricePerNight);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.pricePerNight - a.pricePerNight);
    } else if (sortBy === "size-desc") {
      result.sort((a, b) => b.sizeSqFt - a.sizeSqFt);
    } else if (sortBy === "popular") {
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [selectedCategory, guestFilter, sortBy]);

  return (
    <div className="min-h-screen bg-ivory-50 pt-28 pb-20">
      {/* Page Hero Banner */}
      <section className="relative h-72 sm:h-80 w-full overflow-hidden bg-charcoal-500 mb-12">
        <Image
          src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80"
          alt="Hotel Akruti Rooms & Accommodations"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-600 via-black/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-ivory-300 mb-3">
            <Link href="/" className="hover:text-gold-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
            <span className="text-gold-300 font-medium">Rooms & Suites</span>
          </nav>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            AC Rooms & Family Suites
          </h1>
          <p className="text-xs sm:text-sm text-ivory-200 mt-2 max-w-xl font-light">
            Clean, comfortable accommodations with 24-hour room service, lift, and generator backup.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Interactive Filters Bar */}
        <RoomFilters
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          guestFilter={guestFilter}
          onGuestFilterChange={setGuestFilter}
          sortBy={sortBy}
          onSortChange={setSortBy}
          totalResults={filteredRooms.length}
        />

        {/* Large Wide Rooms Listing */}
        {filteredRooms.length > 0 ? (
          <div className="space-y-8">
            {filteredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 rounded-3xl border border-ivory-300 text-center space-y-4 max-w-md mx-auto">
            <div className="w-12 h-12 rounded-full bg-gold-500/20 text-gold-600 flex items-center justify-center mx-auto">
              <BedDouble className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-charcoal-500">
              No matching rooms
            </h3>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setGuestFilter(0);
              }}
              className="px-5 py-2.5 rounded-xl bg-gold-500 text-charcoal-600 text-xs font-semibold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
