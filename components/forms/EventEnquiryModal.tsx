"use client";

import React, { useState } from "react";
import { 
  X, 
  Calendar, 
  Users, 
  PartyPopper, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ShieldAlert,
  Building2
} from "lucide-react";
import { toast } from "sonner";
import { banquetHallsData } from "@/data/banquets";
import { hotelConfig } from "@/data/hotel";
import { getTodayDateString } from "@/lib/utils";

interface EventEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedHallId?: string;
  preselectedPackageName?: string;
}

export function EventEnquiryModal({
  isOpen,
  onClose,
  preselectedHallId,
  preselectedPackageName,
}: EventEnquiryModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [eventType, setEventType] = useState("wedding");
  const [preferredHall, setPreferredHall] = useState(preselectedHallId || banquetHallsData[0]?.id || "grand-celebration-hall");
  const [expectedGuests, setExpectedGuests] = useState(250);
  const [eventDate, setEventDate] = useState(getTodayDateString());
  const [eventDuration, setEventDuration] = useState("full_day");
  const [cateringRequirement, setCateringRequirement] = useState("non_veg_both");
  const [specialNotes, setSpecialNotes] = useState(preselectedPackageName ? `Interested in ${preselectedPackageName}` : "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const selectedHall = banquetHallsData.find((h) => h.id === preferredHall) || banquetHallsData[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim()) {
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

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Event Enquiry Submitted!", {
        description: `Our Banquet Sales Director will connect with you at ${phone} to discuss dates and packages.`,
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
              <PartyPopper className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-ivory-100">
                {isSubmitted ? "Event Request Received" : "Plan Your Event & Banquet Enquiry"}
              </h3>
              <p className="text-xs text-gold-300/90 font-light">
                {hotelConfig.name} • Bespoke Weddings, Galas & Summits
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close event enquiry modal"
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
                Demo Event Enquiry Logged
              </span>
              <h4 className="font-serif text-2xl font-bold text-charcoal-500">
                Thank You, {fullName}!
              </h4>
              <p className="text-sm text-charcoal-200 max-w-md mx-auto">
                We have received your event enquiry for <strong className="text-charcoal-500">{selectedHall.name}</strong> on <strong className="text-charcoal-500">{eventDate}</strong>.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-ivory-300 text-left space-y-2.5 text-xs sm:text-sm">
              <div className="flex justify-between pb-2 border-b border-ivory-200">
                <span className="text-charcoal-200">Venue Space:</span>
                <span className="font-semibold text-charcoal-500">{selectedHall.name}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-ivory-200">
                <span className="text-charcoal-200">Expected Guests:</span>
                <span className="font-semibold text-charcoal-500">{expectedGuests} Guests</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-ivory-200">
                <span className="text-charcoal-200">Event Date & Duration:</span>
                <span className="font-semibold text-charcoal-500">{eventDate} ({eventDuration.replace("_", " ")})</span>
              </div>
              <div className="flex justify-between text-xs text-charcoal-200">
                <span>Client Contact:</span>
                <span className="text-charcoal-400">{phone} • {email}</span>
              </div>
            </div>

            <div className="p-3.5 bg-gold-50 border border-gold-200 rounded-xl text-xs text-charcoal-300 flex items-start gap-2.5 text-left">
              <ShieldAlert className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
              <p>
                <strong>Client Demo Disclaimer:</strong> This demo enquiry form simulates client lead generation. In your live deployment, this can directly post into your CRM, email sales executives, or dispatch instant WhatsApp alerts.
              </p>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3.5 px-6 rounded-xl font-semibold uppercase tracking-wider text-xs bg-charcoal-500 hover:bg-charcoal-600 text-ivory-100 transition-colors shadow-md"
            >
              Done / Return to Banquets
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            {/* Event Category & Preferred Hall */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-300 mb-1.5 flex items-center gap-1.5">
                  <PartyPopper className="w-3.5 h-3.5 text-gold-600" />
                  Event Type
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-ivory-300 bg-white text-charcoal-500 text-sm focus:outline-none focus:border-gold-500"
                >
                  <option value="wedding">Royal Wedding / Reception</option>
                  <option value="reception">Engagement / Sangeet / Mehendi</option>
                  <option value="corporate_conference">Corporate Conference / Seminar</option>
                  <option value="product_launch">Product Launch / Gala Dinner</option>
                  <option value="birthday_party">Milestone Birthday / Anniversary</option>
                  <option value="other">Other Private Gathering</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-300 mb-1.5 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-gold-600" />
                  Preferred Banquet Hall
                </label>
                <select
                  value={preferredHall}
                  onChange={(e) => setPreferredHall(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-ivory-300 bg-white text-charcoal-500 text-sm focus:outline-none focus:border-gold-500"
                >
                  {banquetHallsData.map((hall) => (
                    <option key={hall.id} value={hall.id}>
                      {hall.name} (Max {hall.capacityMax} Guests)
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date, Guests & Duration */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-300 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-gold-600" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={eventDate}
                  min={getTodayDateString()}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-ivory-300 bg-white text-charcoal-500 text-sm focus:outline-none focus:border-gold-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-300 mb-1.5 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-gold-600" />
                  Expected Guests
                </label>
                <input
                  type="number"
                  min="10"
                  max="1500"
                  value={expectedGuests}
                  onChange={(e) => setExpectedGuests(Number(e.target.value))}
                  className="w-full px-3 py-2.5 rounded-xl border border-ivory-300 bg-white text-charcoal-500 text-sm focus:outline-none focus:border-gold-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-300 mb-1.5 flex items-center gap-1.5">
                  Duration
                </label>
                <select
                  value={eventDuration}
                  onChange={(e) => setEventDuration(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-ivory-300 bg-white text-charcoal-500 text-sm focus:outline-none focus:border-gold-500"
                >
                  <option value="half_day">Half Day (4-5 Hours)</option>
                  <option value="full_day">Full Day (8-10 Hours)</option>
                  <option value="multi_day">Multi-Day Celebration</option>
                </select>
              </div>
            </div>

            {/* Organizer Contact Details */}
            <div className="pt-2 border-t border-ivory-300 space-y-4">
              <h4 className="font-serif font-semibold text-charcoal-400 text-sm tracking-wide">
                Organizer Contact Information
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-charcoal-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Singhania"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
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
                    placeholder="name@company.com"
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
                  Specific Requirements & Details (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Need stage decor, bridal suite, audio-visual presentation setup, specific catering preferences..."
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-ivory-300 bg-white text-charcoal-500 text-sm focus:outline-none focus:border-gold-500"
                />
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-charcoal-600 font-semibold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-md transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Submitting Event Enquiry...</span>
                ) : (
                  <>
                    <span>Submit Banquet Enquiry</span>
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
