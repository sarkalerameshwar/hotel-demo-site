"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Users, 
  BedDouble, 
  Maximize, 
  Sparkles, 
  ArrowRight, 
  CalendarDays,
  Check,
  Tv,
  Wifi,
  Wind,
  PhoneCall
} from "lucide-react";
import { Room } from "@/data/rooms";
import { formatINR } from "@/lib/utils";
import { RoomEnquiryModal } from "@/components/forms/RoomEnquiryModal";

interface RoomCardProps {
  room: Room;
}

export function RoomCard({ room }: RoomCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="group bg-white rounded-3xl overflow-hidden border border-ivory-300 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col lg:flex-row justify-between hover:-translate-y-1 w-full">
        {/* Large Wide Photo Section (45% on desktop) */}
        <div className="relative h-72 sm:h-80 lg:h-auto lg:w-5/12 overflow-hidden bg-charcoal-400 shrink-0">
          <Image
            src={room.thumbnail}
            alt={room.name}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover img-zoom transition-transform duration-700 group-hover:scale-108"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

          {/* Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <span className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-xs font-bold text-gold-300 uppercase tracking-wider border border-gold-500/30">
              {room.category} Room
            </span>
            {room.featured && (
              <span className="px-3 py-1.5 rounded-full bg-gold-500 text-charcoal-600 text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                Featured
              </span>
            )}
          </div>

          {/* Bottom highlight in image */}
          <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
            <span className="text-xs text-gold-300 font-semibold block">
              {room.highlight}
            </span>
          </div>
        </div>

        {/* Large Detailed Content Section (55% on desktop) */}
        <div className="p-6 sm:p-8 lg:p-10 flex-1 flex flex-col justify-between space-y-6">
          {/* Title & Tagline */}
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-2 border-b border-ivory-200">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-500 group-hover:text-gold-700 transition-colors">
                <Link href={`/rooms/${room.slug}`}>{room.name}</Link>
              </h3>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif text-3xl font-bold text-gold-700">
                  {formatINR(room.pricePerNight)}
                </span>
                <span className="text-xs text-charcoal-200">/ night + taxes</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-charcoal-300 leading-relaxed">
              {room.description}
            </p>
          </div>

          {/* Key Quick Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-3 bg-ivory-100/70 p-4 rounded-2xl border border-ivory-200 text-xs text-charcoal-400">
            <div className="flex items-center gap-2">
              <BedDouble className="w-4 h-4 text-gold-600 shrink-0" />
              <span className="font-medium truncate">{room.bedType}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gold-600 shrink-0" />
              <span className="font-medium">Up to {room.maxGuests} Guests</span>
            </div>
            <div className="flex items-center gap-2">
              <Maximize className="w-4 h-4 text-gold-600 shrink-0" />
              <span className="font-medium">{room.sizeSqFt} sq. ft.</span>
            </div>
          </div>

          {/* Inclusions Tags */}
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-wider font-bold text-charcoal-300 block">
              Included Amenities:
            </span>
            <div className="flex flex-wrap gap-2">
              {room.amenities.slice(0, 4).map((amenity, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-ivory-100 text-xs font-medium text-charcoal-400 border border-ivory-200"
                >
                  <Check className="w-3.5 h-3.5 text-gold-600" />
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-charcoal-600 font-bold uppercase tracking-wider text-xs shadow-lg hover:shadow-gold-500/25 transition-all flex items-center justify-center gap-2"
            >
              <CalendarDays className="w-4 h-4" />
              <span>Book This Room</span>
            </button>

            <Link
              href={`/rooms/${room.slug}`}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl border border-charcoal-300 hover:border-gold-600 text-charcoal-500 hover:text-gold-700 text-xs font-bold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2 bg-white"
            >
              <span>View Photos & Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <RoomEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedRoomId={room.id}
      />
    </>
  );
}
