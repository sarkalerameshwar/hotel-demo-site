import React from "react";
import Link from "next/link";
import { Sparkles, BedDouble, Home, ArrowRight } from "lucide-react";
import { hotelConfig } from "@/data/hotel";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ivory-50 flex items-center justify-center px-4 py-32">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-ivory-300 shadow-xl">
        <div className="w-16 h-16 rounded-full bg-gold-500/20 text-gold-600 flex items-center justify-center mx-auto border border-gold-500/30">
          <Sparkles className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase font-bold text-gold-700 tracking-widest">
            Page Not Found • 404
          </span>
          <h1 className="font-serif text-3xl font-bold text-charcoal-500">
            A Regal Destination Awaits
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-200">
            The page or suite you are searching for might have been moved or is momentarily unavailable.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-3">
          <Link
            href="/"
            className="w-full py-3.5 px-4 rounded-xl bg-charcoal-500 hover:bg-charcoal-600 text-ivory-100 font-bold uppercase tracking-wider text-xs shadow-md transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4 text-gold-400" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/rooms"
            className="w-full py-3 px-4 rounded-xl border border-charcoal-300 hover:border-gold-600 text-charcoal-500 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
          >
            <BedDouble className="w-4 h-4 text-gold-600" />
            <span>Explore Rooms & Suites</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
