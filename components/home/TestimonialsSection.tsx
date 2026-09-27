"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles, ShieldCheck } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-charcoal-500 text-ivory-100 relative overflow-hidden">
      {/* Background Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-semibold uppercase tracking-widest">
            <Quote className="w-3.5 h-3.5 text-gold-400" />
            <span>Client Demonstration Reviews</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Memories Cherished by <br />
            <span className="text-gold-gradient italic font-normal">Our Valued Guests</span>
          </h2>
          <p className="text-ivory-300 text-xs sm:text-sm">
            * Sample fictional reviews illustrating guest feedback presentation for your hotel demo.
          </p>
        </div>

        {/* Testimonial Card & Controls */}
        <div className="relative bg-charcoal-600/90 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-gold-500/30 shadow-2xl space-y-8">
          {/* Star Rating & Stay Tag */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-charcoal-400">
            <div className="flex items-center gap-1 text-gold-400">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
              <span className="ml-2 text-xs font-bold text-ivory-200">5.0 / 5.0 Rating</span>
            </div>

            <span className="px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 text-xs font-semibold uppercase tracking-wider border border-gold-500/30 self-start sm:self-auto">
              {currentTestimonial.stayType}
            </span>
          </div>

          {/* Quote & Comment */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-ivory-100">
              &ldquo;{currentTestimonial.title}&rdquo;
            </h3>
            <p className="text-sm sm:text-base text-ivory-200 leading-relaxed font-light italic">
              {currentTestimonial.comment}
            </p>
          </div>

          {/* Author Info & Navigation Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-charcoal-400">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold-400">
                <Image
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-white">
                  {currentTestimonial.author}
                </h4>
                <p className="text-xs text-gold-300/90">
                  {currentTestimonial.roleOrCity} • <span className="text-ivory-400">{currentTestimonial.date}</span>
                </p>
              </div>
            </div>

            {/* Prev / Next Carousel Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="p-3 rounded-full bg-charcoal-400 hover:bg-gold-500 text-ivory-200 hover:text-charcoal-600 transition-all border border-charcoal-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs text-ivory-300">
                {currentIndex + 1} of {testimonialsData.length}
              </span>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="p-3 rounded-full bg-charcoal-400 hover:bg-gold-500 text-ivory-200 hover:text-charcoal-600 transition-all border border-charcoal-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
