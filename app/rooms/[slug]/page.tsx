"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ChevronRight, 
  Users, 
  BedDouble, 
  Maximize, 
  Eye, 
  Sparkles, 
  Check, 
  Clock, 
  CalendarDays, 
  ShieldCheck, 
  PhoneCall, 
  ArrowRight,
  ShowerHead,
  Coffee,
  Wifi,
  Tv
} from "lucide-react";
import { roomsData } from "@/data/rooms";
import { hotelConfig } from "@/data/hotel";
import { formatINR } from "@/lib/utils";
import { RoomCard } from "@/components/rooms/RoomCard";
import { RoomEnquiryModal } from "@/components/forms/RoomEnquiryModal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function RoomDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const room = roomsData.find((r) => r.slug === resolvedParams.slug);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  if (!room) {
    notFound();
  }

  const similarRooms = roomsData
    .filter((r) => r.id !== room.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-ivory-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-charcoal-200">
          <Link href="/" className="hover:text-gold-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
          <Link href="/rooms" className="hover:text-gold-600 transition-colors">
            Rooms & Suites
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
          <span className="text-charcoal-500 font-semibold">{room.name}</span>
        </nav>

        {/* Header Title & Price */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-ivory-300">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 text-gold-800 text-xs font-semibold uppercase tracking-wider border border-gold-500/30">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>{room.highlight}</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-500">
              {room.name}
            </h1>
            <p className="text-xs sm:text-sm text-charcoal-300 font-light max-w-2xl">
              {room.tagline}
            </p>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-ivory-300 shadow-sm flex items-center justify-between md:flex-col md:items-end gap-2">
            <div>
              <span className="text-[11px] text-charcoal-200 uppercase tracking-wider block">
                Starting from
              </span>
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-500">
                  {formatINR(room.pricePerNight)}
                </span>
                <span className="text-xs text-charcoal-200">/ night</span>
              </div>
            </div>

            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-600 text-charcoal-600 font-bold uppercase tracking-wider text-xs shadow-md transition-all flex items-center gap-2"
            >
              <CalendarDays className="w-4 h-4" />
              <span>Book This Room</span>
            </button>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="space-y-4">
          {/* Main Large Image */}
          <div className="relative h-[380px] sm:h-[500px] w-full rounded-3xl overflow-hidden shadow-lg border border-ivory-300 bg-charcoal-400">
            <Image
              src={room.images[activeImageIndex] || room.thumbnail}
              alt={`${room.name} photo ${activeImageIndex + 1}`}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
            />
          </div>

          {/* Thumbnails Row */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
            {room.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative h-20 w-32 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                  activeImageIndex === idx
                    ? "border-gold-500 shadow-md scale-105"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`${room.name} thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Grid: Specs & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
          {/* Left Column: Room Overview, Amenities, Specs */}
          <div className="lg:col-span-8 space-y-8">
            {/* Quick Specs Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white p-5 rounded-2xl border border-ivory-300 shadow-sm text-center">
              <div className="p-2 space-y-1">
                <Maximize className="w-5 h-5 text-gold-600 mx-auto" />
                <span className="text-[10px] text-charcoal-200 uppercase tracking-wider block">Size</span>
                <strong className="font-serif text-charcoal-500 text-base">{room.sizeSqFt} sq. ft.</strong>
              </div>
              <div className="p-2 space-y-1">
                <BedDouble className="w-5 h-5 text-gold-600 mx-auto" />
                <span className="text-[10px] text-charcoal-200 uppercase tracking-wider block">Bedding</span>
                <strong className="font-serif text-charcoal-500 text-sm truncate block">{room.bedType}</strong>
              </div>
              <div className="p-2 space-y-1">
                <Users className="w-5 h-5 text-gold-600 mx-auto" />
                <span className="text-[10px] text-charcoal-200 uppercase tracking-wider block">Occupancy</span>
                <strong className="font-serif text-charcoal-500 text-base">{room.maxGuests} Guests</strong>
              </div>
              <div className="p-2 space-y-1">
                <Eye className="w-5 h-5 text-gold-600 mx-auto" />
                <span className="text-[10px] text-charcoal-200 uppercase tracking-wider block">View</span>
                <strong className="font-serif text-charcoal-500 text-sm truncate block">{room.view}</strong>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-ivory-300 shadow-sm space-y-4">
              <h3 className="font-serif text-2xl font-bold text-charcoal-500">
                About the Accommodation
              </h3>
              <p className="text-charcoal-300 text-sm sm:text-base leading-relaxed">
                {room.longDescription}
              </p>
            </div>

            {/* In-Room Amenities */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-ivory-300 shadow-sm space-y-4">
              <h3 className="font-serif text-2xl font-bold text-charcoal-500">
                In-Room Luxury Amenities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {room.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-charcoal-300">
                    <Check className="w-4 h-4 text-gold-600 shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bathroom Features */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-ivory-300 shadow-sm space-y-4">
              <h3 className="font-serif text-2xl font-bold text-charcoal-500 flex items-center gap-2">
                <ShowerHead className="w-5 h-5 text-gold-600" />
                <span>Marble Bathroom & Wellness En-Suite</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {room.bathroomFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-charcoal-300">
                    <Check className="w-4 h-4 text-gold-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hospitality Services */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-ivory-300 shadow-sm space-y-4">
              <h3 className="font-serif text-2xl font-bold text-charcoal-500">
                Exclusive Services & Privileges
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {room.roomServices.map((service, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-charcoal-300">
                    <Sparkles className="w-4 h-4 text-gold-600 shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Booking Widget & Hotel Policies */}
          <div className="lg:col-span-4 space-y-6">
            {/* Direct Reservation Card */}
            <div className="bg-charcoal-500 text-ivory-100 p-6 sm:p-8 rounded-3xl border border-gold-500/40 shadow-xl space-y-6 sticky top-28">
              <div className="space-y-1">
                <span className="text-[11px] text-gold-400 font-semibold uppercase tracking-wider">
                  Reserve Directly with Us
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Best Rate Guarantee
                </h3>
                <p className="text-xs text-ivory-300">
                  Includes complimentary breakfast, high-speed Wi-Fi, and welcome amenities.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-charcoal-600 border border-charcoal-400 space-y-2 text-xs">
                <div className="flex justify-between text-ivory-300">
                  <span>Nightly Rate:</span>
                  <span className="font-bold text-white">{formatINR(room.pricePerNight)}</span>
                </div>
                <div className="flex justify-between text-ivory-300">
                  <span>Standard Check-in:</span>
                  <span className="text-ivory-100">{hotelConfig.contact.openingHours.checkIn}</span>
                </div>
                <div className="flex justify-between text-ivory-300">
                  <span>Standard Check-out:</span>
                  <span className="text-ivory-100">{hotelConfig.contact.openingHours.checkOut}</span>
                </div>
              </div>

              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-charcoal-600 font-bold uppercase tracking-wider text-xs shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <CalendarDays className="w-4 h-4" />
                <span>Check Availability & Dates</span>
              </button>

              <div className="pt-2 border-t border-charcoal-400 space-y-2 text-xs text-ivory-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Free cancellation up to 48 hours prior</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-gold-400 shrink-0" />
                  <a href={`tel:${hotelConfig.contact.phone}`} className="hover:text-gold-400">
                    Concierge Desk: {hotelConfig.contact.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Rooms Recommendation */}
        <div className="pt-12 border-t border-ivory-300 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-500">
              Other Suites You May Like
            </h3>
            <Link
              href="/rooms"
              className="text-xs font-semibold uppercase tracking-wider text-gold-700 hover:text-gold-800 flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarRooms.map((simRoom) => (
              <RoomCard key={simRoom.id} room={simRoom} />
            ))}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <RoomEnquiryModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        preselectedRoomId={room.id}
      />
    </div>
  );
}
