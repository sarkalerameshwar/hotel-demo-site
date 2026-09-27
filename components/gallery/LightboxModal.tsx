"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { GalleryItem } from "@/data/gallery";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: GalleryItem[];
  currentIndex: number;
  onNavigate: (newIndex: number) => void;
}

export function LightboxModal({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNavigate,
}: LightboxModalProps) {
  const currentItem = items[currentIndex];

  const handlePrev = useCallback(() => {
    onNavigate(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-fade-in select-none">
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between z-20 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-2 text-ivory-100">
          <span className="px-2.5 py-1 rounded-full bg-gold-500/20 text-gold-300 text-xs border border-gold-500/30 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3" />
            {currentItem.categoryLabel}
          </span>
          <span className="text-xs text-ivory-400">
            {currentIndex + 1} of {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          aria-label="Close lightbox"
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-ivory-100 hover:text-white transition-all transform hover:scale-105"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Prev Button */}
      <button
        onClick={handlePrev}
        aria-label="Previous image"
        className="absolute left-3 sm:left-6 z-20 p-3 rounded-full bg-black/50 hover:bg-gold-500 text-white hover:text-charcoal-600 transition-all border border-white/20 backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="relative w-full max-w-5xl h-[70vh] sm:h-[80vh] mx-auto px-4 flex items-center justify-center">
        <div className="relative w-full h-full rounded-lg overflow-hidden flex items-center justify-center">
          <Image
            src={currentItem.src}
            alt={currentItem.alt || currentItem.title}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Navigation Next Button */}
      <button
        onClick={handleNext}
        aria-label="Next image"
        className="absolute right-3 sm:right-6 z-20 p-3 rounded-full bg-black/50 hover:bg-gold-500 text-white hover:text-charcoal-600 transition-all border border-white/20 backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-center z-20">
        <h4 className="font-serif text-lg sm:text-xl text-ivory-100 font-medium">
          {currentItem.title}
        </h4>
        <p className="text-xs text-ivory-300 mt-1 max-w-xl mx-auto line-clamp-1 sm:line-clamp-none">
          {currentItem.alt}
        </p>
      </div>
    </div>
  );
}
