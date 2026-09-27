"use client";

import React, { useState } from "react";
import { 
  X, 
  Calendar, 
  Users, 
  BedDouble, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ShieldAlert
} from "lucide-react";
import { toast } from "sonner";
import { roomsData } from "@/data/rooms";
import { hotelConfig } from "@/data/hotel";
import { formatINR, getTodayDateString, getTomorrowDateString, getDaysDifference } from "@/lib/utils";

interface RoomEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoomId?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialGuests?: number;
  initialRooms?: number;
}

export function RoomEnquiryModal({
  isOpen,
  onClose,
  preselectedRoomId,
  initialCheckIn,
  initialCheckOut,
  initialGuests = 2,
  initialRooms = 1,
}: RoomEnquiryModalProps) {
  const [checkIn, setCheckIn] = useState(initialCheckIn || getTodayDateString());
  const [checkOut, setCheckOut] = useState(initialCheckOut || getTomorrowDateString());
  const [selectedRoomId, setSelectedRoomId] = useState(preselectedRoomId || roomsData[0]?.id || "deluxe-room");
  const [roomsCount, setRoomsCount] = useState(initialRooms);
  const [adultsCount, setAdultsCount] = useState(initialGuests);
  const [childrenCount, setChildrenCount] = useState(0);
  const [guestName, setGuestName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const selectedRoom = roomsData.find((r) => r.id === selectedRoomId) || roomsData[0];
  const nights = getDaysDifference(checkIn, checkOut);
  const estimatedTotal = selectedRoom ? selectedRoom.pricePerNight * roomsCount * nights : 0;
  const taxesAndFees = Math.round(estimatedTotal * 0.18); // 18% luxury GST

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!guestName.trim()) {
      toast.error("Please enter your full name");
      return;
    }
    if (!email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (phone.length < 10) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }
    if (new Date(checkOut) <= new Date(checkIn)) {
      toast.error("Check-out date must be after Check-in date");
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury booking availability enquiry response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Availability Enquiry Received!", {
        description: `Our concierge will connect with you at ${phone} to confirm availability and preferences.`,
      });
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-2xl bg-ivory-50 rounded-2xl shadow-2xl border border-gold-500/30 overflow-hidden my-8">
        {/* Header */}
        <div className="bg-charcoal-500 text-ivory-100 p-6 flex items-center justify-between border-b border-gold-600/30">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-gold-400/80 flex items-center justify-center bg-charcoal-600 text-gold-300">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-ivory-100">
                {isSubmitted ? "Enquiry Summary & Confirmation" : "Room Availability & Booking Enquiry"}
              </h3>
              <p className="text-xs text-gold-300/90 font-light">
                {hotelConfig.name} • Guaranteed Best Direct Rates
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close enquiry modal"
            className="text-ivory-400 hover:text-ivory-100 p-1 rounded-lg hover:bg-charcoal-400 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          /* Confirmation State */
          <div className="p-8 space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-gold-500/20 text-gold-600 flex items-center justify-center mx-auto border border-gold-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-gold-100 text-gold-800 text-xs font-semibold uppercase tracking-wider">
                Demo Enquiry Received
              </span>
              <h4 className="font-serif text-2xl font-bold text-charcoal-500">
                Thank You, {guestName}!
              </h4>
              <p className="text-sm text-charcoal-200 max-w-md mx-auto">
                Your reservation enquiry for <strong className="text-charcoal-500">{selectedRoom.name}</strong> has been registered in our demo system.
              </p>
            </div>

            {/* Summary Box */}
            <div className="bg-white p-5 rounded-xl border border-ivory-300 text-left space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between pb-2 border-b border-ivory-200">
                <span className="text-charcoal-200">Selected Room:</span>
                <span className="font-semibold text-charcoal-500">{selectedRoom.name} ({roomsCount} {roomsCount > 1 ? "Rooms" : "Room"})</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-ivory-200">
                <span className="text-charcoal-200">Duration:</span>
                <span className="font-semibold text-charcoal-500">{checkIn} to {checkOut} ({nights} {nights > 1 ? "Nights" : "Night"})</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-ivory-200">
                <span className="text-charcoal-200">Guests:</span>
                <span className="font-semibold text-charcoal-500">{adultsCount} Adults{childrenCount > 0 ? `, ${childrenCount} Children` : ""}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-ivory-200">
                <span className="text-charcoal-200">Estimated Total (with 18% GST):</span>
                <span className="font-bold text-gold-700 text-base">{formatINR(estimatedTotal + taxesAndFees)}</span>
              </div>
              <div className="flex justify-between text-xs text-charcoal-200">
                <span>Contact Details:</span>
                <span className="text-charcoal-400">{phone} • {email}</span>
              </div>
            </div>

            <div className="p-3.5 bg-gold-50 border border-gold-200 rounded-xl text-xs text-charcoal-300 flex items-start gap-2.5 text-left">
              <ShieldAlert className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
              <p>
                <strong>Client Presentation Note:</strong> This is a live demonstration interface. In production, this form will connect to your hotel Property Management System (PMS), channel manager, or WhatsApp notification gateway.
              </p>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3.5 px-6 rounded-xl font-semibold uppercase tracking-wider text-xs bg-charcoal-500 hover:bg-charcoal-600 text-ivory-100 transition-colors shadow-md"
            >
              Done / Return to Website
            </button>
          </div>
        ) : (
          /* Form State */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {/* Step 1: Dates & Room Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-300 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-gold-600" />
                  Check-In Date
                </label>
                <input
                  type="date"
                  value={checkIn}
                  min={getTodayDateString()}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-ivory-300 bg-white text-charcoal-500 text-sm focus:outline-none focus:border-gold-500 font-medium"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-300 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-gold-600" />
                  Check-Out Date
                </label>
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn || getTodayDateString()}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-ivory-300 bg-white text-charcoal-500 text-sm focus:outline-none focus:border-gold-500 font-medium"
                  required
                />
              </div>
            </div>

            {/* Room Selection & Occupancy */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-1">
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-300 mb-1.5 flex items-center gap-1.5">
                  <BedDouble className="w-3.5 h-3.5 text-gold-600" />
                  Room Category
                </label>
                <select
                  value={selectedRoomId}
                  onChange={(e) => setSelectedRoomId(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-ivory-300 bg-white text-charcoal-500 text-xs sm:text-sm focus:outline-none focus:border-gold-500 font-medium"
                >
                  {roomsData.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name} ({formatINR(room.pricePerNight)}/nt)
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-300 mb-1.5 flex items-center gap-1.5">
                  <BedDouble className="w-3.5 h-3.5 text-gold-600" />
                  Rooms Count
                </label>
                <select
                  value={roomsCount}
                  onChange={(e) => setRoomsCount(Number(e.target.value))}
                  className="w-full px-3 py-2.5 rounded-xl border border-ivory-300 bg-white text-charcoal-500 text-sm focus:outline-none focus:border-gold-500"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Room" : "Rooms"}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-300 mb-1.5 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-gold-600" />
                  Adults & Children
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <select
                    value={adultsCount}
                    onChange={(e) => setAdultsCount(Number(e.target.value))}
                    className="w-full px-2 py-2.5 rounded-xl border border-ivory-300 bg-white text-charcoal-500 text-xs focus:outline-none focus:border-gold-500"
                  >
                    {[1, 2, 3, 4, 6, 8].map((n) => (
                      <option key={n} value={n}>
                        {n} Adult{n > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                  <select
                    value={childrenCount}
                    onChange={(e) => setChildrenCount(Number(e.target.value))}
                    className="w-full px-2 py-2.5 rounded-xl border border-ivory-300 bg-white text-charcoal-500 text-xs focus:outline-none focus:border-gold-500"
                  >
                    {[0, 1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>
                        {n} Child{n > 1 ? "ren" : ""}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Guest Contact Details */}
            <div className="space-y-4 pt-2 border-t border-ivory-300">
              <h4 className="font-serif font-semibold text-charcoal-400 text-sm tracking-wide">
                Guest Contact Details
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-charcoal-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Malhotra"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-ivory-300 bg-white text-charcoal-500 text-sm focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-charcoal-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-ivory-300 bg-white text-charcoal-500 text-sm focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-charcoal-300 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-ivory-300 bg-white text-charcoal-500 text-sm focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-charcoal-300 mb-1">
                  Special Requests / Arrival Time (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Airport pickup required, high floor preference, dietary notes..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-ivory-300 bg-white text-charcoal-500 text-sm focus:outline-none focus:border-gold-500"
                />
              </div>
            </div>

            {/* Estimated Price Bar */}
            <div className="bg-ivory-200/60 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 border border-ivory-300">
              <div className="text-center sm:text-left">
                <span className="text-xs text-charcoal-200 block">
                  Estimated Total for {nights} {nights > 1 ? "Nights" : "Night"} ({roomsCount} {roomsCount > 1 ? "Rooms" : "Room"})
                </span>
                <span className="text-lg font-bold text-gold-700">
                  {formatINR(estimatedTotal + taxesAndFees)}
                </span>
                <span className="text-[11px] text-charcoal-100 ml-1.5">(incl. 18% Luxury GST)</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-charcoal-600 font-semibold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-md transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Checking Availability...</span>
                ) : (
                  <>
                    <span>Submit Enquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
