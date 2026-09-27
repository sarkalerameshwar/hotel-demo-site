"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, Sparkles } from "lucide-react";
import { galleryCategories, galleryItems, GalleryItem } from "@/data/gallery";
import { LightboxModal } from "@/components/gallery/LightboxModal";

interface GalleryGridProps {
  initialCategory?: string;
  limit?: number;
  showFilterTabs?: boolean;
}

export function GalleryGrid({
  initialCategory = "all",
  limit,
  showFilterTabs = true,
}: GalleryGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems = galleryItems.filter((item) => {
    if (selectedCategory === "all") return true;
    return item.category === selectedCategory;
  });

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      {showFilterTabs && (
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 sm:pb-0 scrollbar-none">
          {galleryCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-gold-500 text-charcoal-600 shadow-md font-semibold"
                    : "bg-white text-charcoal-300 hover:bg-ivory-200 border border-ivory-300"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Masonry / Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => handleOpenLightbox(index)}
            className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-md cursor-pointer bg-charcoal-400 border border-ivory-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover img-zoom transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

            {/* Top Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] text-gold-300 font-medium border border-gold-500/30 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-gold-400" />
                {item.categoryLabel}
              </span>
            </div>

            {/* Expand Icon */}
            <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100">
              <Maximize2 className="w-4 h-4" />
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform">
              <h4 className="font-serif text-lg font-bold text-ivory-100 leading-snug">
                {item.title}
              </h4>
              <p className="text-xs text-ivory-300 line-clamp-1 mt-1 opacity-80 group-hover:opacity-100">
                {item.alt}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={displayedItems}
        currentIndex={lightboxIndex}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
