"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Image as ImageIcon, Sparkles, ChevronRight } from "lucide-react";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-ivory-50 pt-28 pb-20">
      {/* Page Hero Banner */}
      <section className="relative h-80 sm:h-96 w-full overflow-hidden bg-charcoal-500 mb-12">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80"
          alt="Hotel Green Park Photo Gallery"
          fill
          priority
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-600 via-black/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-ivory-300 mb-3">
            <Link href="/" className="hover:text-gold-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
            <span className="text-gold-300 font-medium">Photo Gallery</span>
          </nav>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Immersive Photo Gallery
          </h1>
          <p className="text-xs sm:text-sm text-ivory-200 mt-2 max-w-2xl font-light">
            Take a visual stroll through our heritage architecture, luxury suites, banquet halls, dining spaces, and celebration setups.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Interactive Gallery with Filter Tabs and Lightbox */}
        <GalleryGrid showFilterTabs={true} />
      </div>
    </div>
  );
}
