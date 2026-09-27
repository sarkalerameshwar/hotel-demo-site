"use client";

import React, { useState } from "react";
import { 
  Calendar, 
  Users, 
  BedDouble, 
  Search, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { roomsData } from "@/data/rooms";
import { RoomEnquiryModal } from "@/components/forms/RoomEnquiryModal";
import { getTodayDateString, getTomorrowDateString } from "@/lib/utils";

export function BookingSearchPanel() {
  const [checkIn, setCheckIn] = useState(getTodayDateString());
  const [checkOut, setCheckOut] = useState(getTomorrowDateString());
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [roomType, setRoomType] = useState(roomsData[0]?.id || "deluxe-room");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
        <form
          onSubmit={handleSearchSubmit}
          className="bg-white/95 backdrop-blur-xl p-5 sm:p-7 rounded-3xl shadow-2xl border border-gold-500/30 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end"
        >
          {/* Check-In */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-400 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-gold-600" />
              Check-In
            </label>
            <input
              type="date"
              value={checkIn}
              min={getTodayDateString()}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full px-3.5 py-3 rounded-2xl border border-ivory-300 bg-ivory-50 text-charcoal-500 text-sm font-medium focus:outline-none focus:border-gold-500 transition-colors shadow-inner"
              required
            />
          </div>

          {/* Check-Out */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-400 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-gold-600" />
              Check-Out
            </label>
            <input
              type="date"
              value={checkOut}
              min={checkIn || getTodayDateString()}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full px-3.5 py-3 rounded-2xl border border-ivory-300 bg-ivory-50 text-charcoal-500 text-sm font-medium focus:outline-none focus:border-gold-500 transition-colors shadow-inner"
              required
            />
          </div>

          {/* Guests */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-400 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-gold-600" />
              Guests
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full px-3.5 py-3 rounded-2xl border border-ivory-300 bg-ivory-50 text-charcoal-500 text-sm font-medium focus:outline-none focus:border-gold-500 transition-colors shadow-inner"
            >
              <option value={1}>1 Guest</option>
              <option value={2}>2 Guests</option>
              <option value={3}>3 Guests</option>
              <option value={4}>4 Guests</option>
              <option value={6}>6+ Guests</option>
            </select>
          </div>

          {/* Room Selection */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-400 flex items-center gap-1.5">
              <BedDouble className="w-4 h-4 text-gold-600" />
              Room Type
            </label>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full px-3.5 py-3 rounded-2xl border border-ivory-300 bg-ivory-50 text-charcoal-500 text-sm font-medium focus:outline-none focus:border-gold-500 transition-colors shadow-inner"
            >
              {roomsData.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.name}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div className="pt-1">
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-charcoal-600 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-xl hover:shadow-gold-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Search className="w-4 h-4 text-charcoal-600" />
              <span>Check Availability</span>
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center gap-6 mt-3 text-xs text-ivory-300">
          <span className="flex items-center gap-1.5 drop-shadow">
            <ShieldCheck className="w-4 h-4 text-gold-400" />
            Best Direct Rates Guaranteed
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline drop-shadow">
            Complimentary Breakfast & High-Speed Wi-Fi Included
          </span>
        </div>
      </div>

      <RoomEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialCheckIn={checkIn}
        initialCheckOut={checkOut}
        initialGuests={guests}
        initialRooms={rooms}
        preselectedRoomId={roomType}
      />
    </>
  );
}
