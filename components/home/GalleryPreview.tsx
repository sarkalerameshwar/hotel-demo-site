"use client";

import React from "react";
import Link from "next/link";
import { Image as ImageIcon, Sparkles, ArrowRight } from "lucide-react";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export function GalleryPreview() {
  return (
    <section className="py-20 lg:py-28 bg-ivory-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-700 text-xs font-semibold uppercase tracking-widest">
              <ImageIcon className="w-3.5 h-3.5 text-gold-600" />
              <span>Visual Journey & Splendor</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-500 leading-tight">
              A Glimpse into Our <br />
              <span className="text-gold-gradient italic font-normal">Sanctuary of Grandeur</span>
            </h2>
            <p className="text-charcoal-200 text-sm sm:text-base leading-relaxed">
              Explore high-resolution glimpses of our regal suites, banquet halls, sparkling swimming pools, and gourmet dining rooms.
            </p>
          </div>

          <div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-charcoal-500 hover:bg-charcoal-600 text-ivory-100 text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
            >
              <span>View Full Gallery (Lightbox)</span>
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </Link>
          </div>
        </div>

        {/* Gallery Grid Preview (6 featured items) */}
        <GalleryGrid limit={6} showFilterTabs={false} />
      </div>
    </section>
  );
}
