import React from "react";
import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { hotelConfig } from "@/data/hotel";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-ivory-50 pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <nav className="flex items-center gap-2 text-xs text-charcoal-200">
          <Link href="/" className="hover:text-gold-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
          <span className="text-charcoal-500 font-semibold">Privacy Policy</span>
        </nav>

        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-ivory-300 shadow-sm space-y-6">
          <div className="space-y-2 border-b border-ivory-200 pb-4">
            <span className="text-xs uppercase font-bold text-gold-700 tracking-wider">
              Guest Privacy & Data Protection
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-500">
              Privacy Policy & Terms
            </h1>
            <p className="text-xs text-charcoal-200">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })} • {hotelConfig.name}
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-charcoal-300 leading-relaxed">
            <h3 className="font-serif text-lg font-bold text-charcoal-500">
              1. Information We Collect
            </h3>
            <p>
              At {hotelConfig.name}, we value and respect your personal privacy. When you enquire about room reservations, banquet celebrations, or dining tables, we collect only necessary contact and reservation preferences to provide seamless hospitality services.
            </p>

            <h3 className="font-serif text-lg font-bold text-charcoal-500 pt-2">
              2. Client Demonstration Notice
            </h3>
            <p>
              This website is a live demonstration interface created for {hotelConfig.name}. Mock enquiry forms demonstrate customer flow without requiring credit card payments or transmitting confidential financial information.
            </p>

            <h3 className="font-serif text-lg font-bold text-charcoal-500 pt-2">
              3. Communication & Preferences
            </h3>
            <p>
              Our guest relations and concierge teams may contact you via telephone, email, or WhatsApp regarding your reservation inquiries or banquet packages. You may opt out of promotional communications at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
