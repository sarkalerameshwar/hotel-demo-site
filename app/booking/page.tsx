"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  Users, 
  BedDouble, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  Clock, 
  ShieldCheck, 
  PhoneCall,
  ArrowRight,
  ShieldAlert,
  CreditCard
} from "lucide-react";
import { toast } from "sonner";
import { roomsData } from "@/data/rooms";
import { hotelConfig } from "@/data/hotel";
import { formatINR, getTodayDateString, getTomorrowDateString, getDaysDifference } from "@/lib/utils";

export default function BookingPage() {
  const [checkIn, setCheckIn] = useState(getTodayDateString());
  const [checkOut, setCheckOut] = useState(getTomorrowDateString());
  const [selectedRoomId, setSelectedRoomId] = useState(roomsData[0]?.id || "deluxe-room");
  const [roomsCount, setRoomsCount] = useState(1);
  const [adultsCount, setAdultsCount] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);

  const [guestName, setGuestName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [flightDetails, setFlightDetails] = useState("");
  const [paymentPreference, setPaymentPreference] = useState("pay_at_hotel");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const selectedRoom = roomsData.find((r) => r.id === selectedRoomId) || roomsData[0];
  const nights = getDaysDifference(checkIn, checkOut);
  const roomBaseTotal = selectedRoom ? selectedRoom.pricePerNight * roomsCount * nights : 0;
  const taxesAndFees = Math.round(roomBaseTotal * 0.18);
  const grandTotal = roomBaseTotal + taxesAndFees;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!guestName.trim()) {
      toast.error("Please provide your full name");
      return;
    }
    if (!email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (phone.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }
    if (new Date(checkOut) <= new Date(checkIn)) {
      toast.error("Check-out date must be strictly after Check-in date");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmed(true);
      toast.success("Enquiry Reservation Recorded!", {
        description: `Booking reference #GH-${Math.floor(100000 + Math.random() * 900000)} generated.`,
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-ivory-50 pt-28 pb-20">
      {/* Page Hero Banner */}
      <section className="relative h-72 sm:h-80 w-full overflow-hidden bg-charcoal-500 mb-10">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80"
          alt="Reservations at Hotel Green Park"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-600 via-black/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <nav className="flex items-center gap-2 text-xs text-ivory-300 mb-3">
            <Link href="/" className="hover:text-gold-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
            <span className="text-gold-300 font-medium">Book Your Stay</span>
          </nav>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Online Room Reservation & Availability
          </h1>
          <p className="text-xs sm:text-sm text-ivory-200 mt-2 max-w-xl font-light">
            Guaranteed best direct rate with complimentary daily breakfast buffet and luxury airport transfer privileges.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isConfirmed ? (
          /* Confirmation State */
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-gold-500/40 shadow-2xl space-y-8 text-center animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-gold-500/20 text-gold-600 flex items-center justify-center mx-auto border-2 border-gold-500/40">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="px-3.5 py-1 rounded-full bg-gold-100 text-gold-800 text-xs font-bold uppercase tracking-wider">
                Booking Reference: #GH-{Math.floor(100000 + Math.random() * 900000)}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-500">
                Reservation Enquiry Confirmed!
              </h2>
              <p className="text-sm text-charcoal-300 max-w-md mx-auto">
                Thank you, <strong>{guestName}</strong>. Your reservation request for <strong>{selectedRoom.name}</strong> has been logged in our demo property management system.
              </p>
            </div>

            {/* Summary details */}
            <div className="bg-ivory-50 p-6 rounded-2xl border border-ivory-300 text-left space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between pb-2 border-b border-ivory-200">
                <span className="text-charcoal-200">Reserved Accommodation:</span>
                <span className="font-bold text-charcoal-500">{selectedRoom.name} ({roomsCount} {roomsCount > 1 ? "Rooms" : "Room"})</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-ivory-200">
                <span className="text-charcoal-200">Dates:</span>
                <span className="font-bold text-charcoal-500">{checkIn} to {checkOut} ({nights} {nights > 1 ? "Nights" : "Night"})</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-ivory-200">
                <span className="text-charcoal-200">Occupancy:</span>
                <span className="font-bold text-charcoal-500">{adultsCount} Adults{childrenCount > 0 ? `, ${childrenCount} Children` : ""}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-ivory-200">
                <span className="text-charcoal-200">Estimated Total (incl. 18% GST):</span>
                <span className="font-bold text-gold-700 text-lg">{formatINR(grandTotal)}</span>
              </div>
              <div className="flex justify-between text-xs text-charcoal-200">
                <span>Guest Phone & Email:</span>
                <span className="text-charcoal-400 font-medium">{phone} • {email}</span>
              </div>
            </div>

            {/* Client Presentation Banner */}
            <div className="p-4 bg-gold-50 border border-gold-200 rounded-2xl text-xs text-charcoal-300 flex items-start gap-3 text-left">
              <ShieldAlert className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
              <p>
                <strong>Client Demo Notice:</strong> This live booking engine demonstrated the exact guest flow. In your actual hotel website, this will sync room availability directly with your Property Management System (e.g. Opera, IDS, eZee) or direct payment gateway.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-charcoal-500 hover:bg-charcoal-600 text-ivory-100 font-bold uppercase tracking-wider text-xs transition-colors"
              >
                Return to Homepage
              </Link>
              <button
                onClick={() => setIsConfirmed(false)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-charcoal-300 hover:border-gold-600 text-charcoal-500 text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Book Another Stay
              </button>
            </div>
          </div>
        ) : (
          /* Form Layout */
          <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Steps Form (8 Cols) */}
            <div className="lg:col-span-8 space-y-8">
              {/* Step 1: Stay Dates & Occupancy */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-ivory-300 shadow-sm space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-ivory-200">
                  <div className="w-8 h-8 rounded-full bg-gold-500 text-charcoal-600 flex items-center justify-center font-serif font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-charcoal-500">
                      Select Dates & Party Size
                    </h3>
                    <p className="text-xs text-charcoal-200">
                      Standard Check-in is {hotelConfig.contact.openingHours.checkIn} • Check-out {hotelConfig.contact.openingHours.checkOut}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-300 mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gold-600" />
                      Check-In Date
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      min={getTodayDateString()}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-ivory-300 bg-ivory-50 text-charcoal-500 text-sm font-medium focus:outline-none focus:border-gold-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-300 mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gold-600" />
                      Check-Out Date
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      min={checkIn || getTodayDateString()}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-ivory-300 bg-ivory-50 text-charcoal-500 text-sm font-medium focus:outline-none focus:border-gold-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-300 mb-1">
                      Rooms Count
                    </label>
                    <select
                      value={roomsCount}
                      onChange={(e) => setRoomsCount(Number(e.target.value))}
                      className="w-full px-3 py-2.5 rounded-xl border border-ivory-300 bg-ivory-50 text-charcoal-500 text-sm focus:outline-none focus:border-gold-500"
                    >
                      {[1, 2, 3, 4, 5].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "Room" : "Rooms"}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-300 mb-1">
                      Adult Guests
                    </label>
                    <select
                      value={adultsCount}
                      onChange={(e) => setAdultsCount(Number(e.target.value))}
                      className="w-full px-3 py-2.5 rounded-xl border border-ivory-300 bg-ivory-50 text-charcoal-500 text-sm focus:outline-none focus:border-gold-500"
                    >
                      {[1, 2, 3, 4, 6, 8].map((n) => (
                        <option key={n} value={n}>
                          {n} Adults
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-300 mb-1">
                      Children (Under 10)
                    </label>
                    <select
                      value={childrenCount}
                      onChange={(e) => setChildrenCount(Number(e.target.value))}
                      className="w-full px-3 py-2.5 rounded-xl border border-ivory-300 bg-ivory-50 text-charcoal-500 text-sm focus:outline-none focus:border-gold-500"
                    >
                      {[0, 1, 2, 3, 4].map((n) => (
                        <option key={n} value={n}>
                          {n} Children
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 2: Choose Room Category */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-ivory-300 shadow-sm space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-ivory-200">
                  <div className="w-8 h-8 rounded-full bg-gold-500 text-charcoal-600 flex items-center justify-center font-serif font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-charcoal-500">
                      Choose Your Suite Category
                    </h3>
                    <p className="text-xs text-charcoal-200">
                      Select from our collection of hand-crafted rooms and luxury suites
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {roomsData.map((room) => {
                    const isSelected = selectedRoomId === room.id;
                    return (
                      <div
                        key={room.id}
                        onClick={() => setSelectedRoomId(room.id)}
                        className={`p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                          isSelected
                            ? "border-gold-500 bg-gold-500/10 shadow-md"
                            : "border-ivory-200 hover:border-ivory-300 bg-ivory-50/50"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-ivory-300">
                            <Image
                              src={room.thumbnail}
                              alt={room.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <span className="text-[10px] uppercase font-bold text-gold-700 tracking-wider">
                              {room.category}
                            </span>
                            <h4 className="font-serif text-lg font-bold text-charcoal-500">
                              {room.name}
                            </h4>
                            <p className="text-xs text-charcoal-200">
                              {room.sizeSqFt} sq. ft. • {room.bedType} • Max {room.maxGuests} Guests
                            </p>
                          </div>
                        </div>

                        <div className="text-left sm:text-right w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-ivory-200 flex sm:flex-col justify-between items-center sm:items-end">
                          <div>
                            <span className="font-serif text-xl font-bold text-gold-700">
                              {formatINR(room.pricePerNight)}
                            </span>
                            <span className="text-[11px] text-charcoal-200 block">/ night + taxes</span>
                          </div>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-1 ${
                            isSelected ? "border-gold-600 bg-gold-600 text-white" : "border-charcoal-200"
                          }`}>
                            {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Guest Details & Preferences */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-ivory-300 shadow-sm space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-ivory-200">
                  <div className="w-8 h-8 rounded-full bg-gold-500 text-charcoal-600 flex items-center justify-center font-serif font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-charcoal-500">
                      Guest Contact Information
                    </h3>
                    <p className="text-xs text-charcoal-200">
                      Enter the primary guest&apos;s details for booking confirmation and arrival coordination
                    </p>
                  </div>
                </div>

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
                      className="w-full px-3.5 py-2.5 rounded-xl border border-ivory-300 bg-ivory-50 text-charcoal-500 text-sm focus:outline-none focus:border-gold-500"
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
                      className="w-full px-3.5 py-2.5 rounded-xl border border-ivory-300 bg-ivory-50 text-charcoal-500 text-sm focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-charcoal-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-ivory-300 bg-ivory-50 text-charcoal-500 text-sm focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-charcoal-300 mb-1">
                      Special In-Room Requests (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. High floor, quiet room, late check-in..."
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-ivory-300 bg-ivory-50 text-charcoal-500 text-sm focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-charcoal-300 mb-1">
                      Flight / Airport Transfer Details (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Flight AI-102 landing at 4:30 PM..."
                      value={flightDetails}
                      onChange={(e) => setFlightDetails(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-ivory-300 bg-ivory-50 text-charcoal-500 text-sm focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Booking Summary Sidebar (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-charcoal-500 text-ivory-100 p-6 sm:p-8 rounded-3xl border border-gold-500/40 shadow-xl space-y-6 sticky top-28">
                <div className="space-y-1">
                  <span className="text-[11px] text-gold-400 font-semibold uppercase tracking-wider">
                    Reservation Breakdown
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {selectedRoom.name}
                  </h3>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between pb-2 border-b border-charcoal-400">
                    <span className="text-ivory-300">Check-in:</span>
                    <span className="font-bold text-white">{checkIn}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-charcoal-400">
                    <span className="text-ivory-300">Check-out:</span>
                    <span className="font-bold text-white">{checkOut}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-charcoal-400">
                    <span className="text-ivory-300">Duration:</span>
                    <span className="font-bold text-white">{nights} {nights > 1 ? "Nights" : "Night"}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-charcoal-400">
                    <span className="text-ivory-300">Rooms & Guests:</span>
                    <span className="font-bold text-white">{roomsCount} Room, {adultsCount} Adults</span>
                  </div>
                </div>

                {/* Price Calculation */}
                <div className="p-4 bg-charcoal-600 rounded-2xl border border-charcoal-400 space-y-2 text-xs">
                  <div className="flex justify-between text-ivory-300">
                    <span>Room Base Tariff:</span>
                    <span>{formatINR(roomBaseTotal)}</span>
                  </div>
                  <div className="flex justify-between text-ivory-300">
                    <span>Luxury GST & Govt Taxes (18%):</span>
                    <span>{formatINR(taxesAndFees)}</span>
                  </div>
                  <div className="pt-2 border-t border-charcoal-400 flex justify-between items-baseline">
                    <span className="font-semibold text-white">Grand Total:</span>
                    <span className="font-serif text-2xl font-bold text-gold-400">{formatINR(grandTotal)}</span>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-charcoal-600 font-bold uppercase tracking-wider text-xs shadow-xl transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Validating Reservation...</span>
                  ) : (
                    <>
                      <span>Submit Availability Enquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="space-y-2 text-[11px] text-ivory-300">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>Instant confirmation enquiry (No payment deducted)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>24/7 Reservations Assistance: {hotelConfig.contact.phoneDisplay}</span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
