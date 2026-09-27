import React from "react";
import Link from "next/link";
import { ChevronRight, FileText } from "lucide-react";
import { hotelConfig } from "@/data/hotel";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-ivory-50 pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <nav className="flex items-center gap-2 text-xs text-charcoal-200">
          <Link href="/" className="hover:text-gold-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
          <span className="text-charcoal-500 font-semibold">Terms & Conditions</span>
        </nav>

        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-ivory-300 shadow-sm space-y-6">
          <div className="space-y-2 border-b border-ivory-200 pb-4">
            <span className="text-xs uppercase font-bold text-gold-700 tracking-wider">
              Hospitality Guidelines
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-500">
              Terms & Conditions
            </h1>
            <p className="text-xs text-charcoal-200">
              {hotelConfig.name} • Guest Guidelines & Booking Policies
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-charcoal-300 leading-relaxed">
            <h3 className="font-serif text-lg font-bold text-charcoal-500">
              1. Check-in & Check-out Policies
            </h3>
            <p>
              Standard Check-in time is {hotelConfig.contact.openingHours.checkIn} and Check-out time is {hotelConfig.contact.openingHours.checkOut}. Early check-in and late check-out are subject to suite availability and prior confirmation with our front desk.
            </p>

            <h3 className="font-serif text-lg font-bold text-charcoal-500 pt-2">
              2. Banquet & Event Reservations
            </h3>
            <p>
              Event bookings, catering arrangements, and stage setups are confirmed upon formal agreement of dates and menu selection with our Banquet Sales Director.
            </p>

            <h3 className="font-serif text-lg font-bold text-charcoal-500 pt-2">
              3. Demonstration Disclaimer
            </h3>
            <p>
              This website serves as a fully functional client demo showcasing {hotelConfig.name}. All hotel details, pricing tiers, and contact channels can be replaced with the client&apos;s verified properties upon deployment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
