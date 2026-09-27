"use client";

import React, { useState } from "react";
import { Sparkles, X, PhoneCall, ShieldCheck } from "lucide-react";
import { hotelConfig } from "@/data/hotel";

export function DemoBanner() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <aside aria-label="Demo Notification" className="bg-charcoal-500 text-ivory-100 text-xs py-2 px-4 border-b border-gold-600/40 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-300 font-medium border border-gold-500/30 text-[11px]">
            <Sparkles className="w-3 h-3 text-gold-400" />
            Client Demo Showcase
          </span>
          <p className="text-ivory-200">
            Previewing: <strong className="text-gold-200">{hotelConfig.name}</strong> • Fully customizable for your hotel property
          </p>
        </div>

        <div className="flex items-center gap-4 text-[11px] text-ivory-300">
          <span className="hidden md:inline-flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
            Mock Enquiry Flow Active (No payment required)
          </span>
          <a
            href={hotelConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-300 hover:text-gold-200 underline flex items-center gap-1 font-medium transition-colors"
          >
            <PhoneCall className="w-3 h-3" />
            Direct Hotel WhatsApp
          </a>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close demo banner"
            className="text-ivory-400 hover:text-ivory-100 p-0.5 rounded transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
