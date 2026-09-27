"use client";

import React, { useState } from "react";
import { 
  X, 
  Calendar, 
  Users, 
  UtensilsCrossed, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  ShieldAlert
} from "lucide-react";
import { toast } from "sonner";
import { restaurantsData } from "@/data/dining";
import { hotelConfig } from "@/data/hotel";
import { getTodayDateString } from "@/lib/utils";

interface DiningEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRestaurantId?: string;
}

export function DiningEnquiryModal({
  isOpen,
  onClose,
  preselectedRestaurantId,
}: DiningEnquiryModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [restaurant, setRestaurant] = useState(preselectedRestaurantId || restaurantsData[0]?.id || "royal-saffron");
  const [date, setDate] = useState(getTodayDateString());
  const [timeSlot, setTimeSlot] = useState("07:30 PM");
  const [guestsCount, setGuestsCount] = useState(2);
  const [seatingPreference, setSeatingPreference] = useState("indoor");
  const [dietaryOrOccasion, setDietaryOrOccasion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const selectedVenue = restaurantsData.find((r) => r.id === restaurant) || restaurantsData[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (phone.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Table Reservation Enquiry Sent!", {
        description: `Our restaurant host at ${selectedVenue.name} will confirm your table seating.`,
      });
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-xl bg-ivory-50 rounded-2xl shadow-2xl border border-gold-500/30 overflow-hidden my-8">
        {/* Header */}
        <div className="bg-charcoal-500 text-ivory-100 p-6 flex items-center justify-between border-b border-gold-600/30">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-gold-400/80 flex items-center justify-center bg-charcoal-600 text-gold-300">
              <UtensilsCrossed className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-ivory-100">
                {isSubmitted ? "Table Enquiry Confirmed" : "Reserve a Dining Experience"}
              </h3>
              <p className="text-xs text-gold-300/90 font-light">
                {hotelConfig.name} • Fine Dining & Lounges
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dining modal"
            className="text-ivory-400 hover:text-ivory-100 p-1 rounded-lg hover:bg-charcoal-400 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-gold-500/20 text-gold-600 flex items-center justify-center mx-auto border border-gold-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-gold-100 text-gold-800 text-xs font-semibold uppercase tracking-wider">
                Table Enquiry Registered
              </span>
              <h4 className="font-serif text-2xl font-bold text-charcoal-500">
                Table Requested for {fullName}
              </h4>
              <p className="text-sm text-charcoal-200">
                At <strong className="text-charcoal-500">{selectedVenue.name}</strong> on <strong className="text-charcoal-500">{date}</strong> at <strong className="text-charcoal-500">{timeSlot}</strong> for {guestsCount} guests.
              </p>
            </div>

            <div className="p-3.5 bg-gold-50 border border-gold-200 rounded-xl text-xs text-charcoal-300 flex items-start gap-2.5 text-left">
              <ShieldAlert className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
              <p>
                <strong>Demo Notice:</strong> This is a sample reservation enquiry interface. In production, this can seamlessly integrate with table management platforms like SevenRooms, OpenTable, or direct WhatsApp restaurant hostess lines.
              </p>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3.5 px-6 rounded-xl font-semibold uppercase tracking-wider text-xs bg-charcoal-500 hover:bg-charcoal-600 text-ivory-100 transition-colors shadow-md"
            >
              Done / Return to Dining
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-300 mb-1.5 flex items-center gap-1.5">
                <UtensilsCrossed className="w-3.5 h-3.5 text-gold-600" />
                Select Restaurant / Lounge
              </label>
              <select
                value={restaurant}
                onChange={(e) => setRestaurant(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-ivory-300 bg-white text-charcoal-500 text-sm focus:outline-none focus:border-gold-500"
              >
                {restaurantsData.map((venue) => (
                  <option key={venue.id} value={venue.id}>
                    {venue.name} — {venue.type}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-300 mb-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-gold-600" />
                  Date
                </label>
                <input
                  type="date"
                  value={date}
                  min={getTodayDateString()}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-ivory-300 bg-white text-charcoal-500 text-xs focus:outline-none focus:border-gold-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-300 mb-1 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-gold-600" />
                  Time Slot
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-ivory-300 bg-white text-charcoal-500 text-xs focus:outline-none focus:border-gold-500"
                >
                  <option value="12:30 PM">12:30 PM (Lunch)</option>
                  <option value="01:30 PM">01:30 PM (Lunch)</option>
                  <option value="02:30 PM">02:30 PM (Lunch)</option>
                  <option value="04:00 PM">04:00 PM (High Tea)</option>
                  <option value="07:00 PM">07:00 PM (Dinner)</option>
                  <option value="08:00 PM">08:00 PM (Dinner)</option>
                  <option value="09:00 PM">09:00 PM (Dinner)</option>
                  <option value="10:00 PM">10:00 PM (Late Night)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-300 mb-1 flex items-center gap-1">
                  <Users className="w-3 h-3 text-gold-600" />
                  Guests
                </label>
                <select
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-ivory-300 bg-white text-charcoal-500 text-xs focus:outline-none focus:border-gold-500"
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10, 12, 16].map((g) => (
                    <option key={g} value={g}>
                      {g} {g === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block text-xs font-medium text-charcoal-300 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Radhika Kapoor"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-ivory-300 bg-white text-charcoal-500 text-xs focus:outline-none focus:border-gold-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-charcoal-300 mb-1">
                  Phone Number / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-ivory-300 bg-white text-charcoal-500 text-xs focus:outline-none focus:border-gold-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-charcoal-300 mb-1">
                Occasion / Special Dietary Notes (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Birthday celebration, anniversary cake, jain dietary preference..."
                value={dietaryOrOccasion}
                onChange={(e) => setDietaryOrOccasion(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-ivory-300 bg-white text-charcoal-500 text-xs focus:outline-none focus:border-gold-500"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-charcoal-600 font-semibold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-md transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending Request...</span>
                ) : (
                  <>
                    <span>Request Table Booking</span>
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
