"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  UtensilsCrossed, 
  Sparkles, 
  ChevronRight, 
  Clock, 
  CalendarDays, 
  Check, 
  Leaf, 
  Flame, 
  Award,
  PhoneCall
} from "lucide-react";
import { restaurantsData, sampleMenuItems, MenuItem } from "@/data/dining";
import { hotelConfig } from "@/data/hotel";
import { formatINR } from "@/lib/utils";
import { DiningEnquiryModal } from "@/components/forms/DiningEnquiryModal";

export default function DiningPage() {
  const [selectedMenuCategory, setSelectedMenuCategory] = useState<"all" | "appetizer" | "main" | "dessert">("all");
  const [selectedVenueForModal, setSelectedVenueForModal] = useState<string | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredMenuItems = sampleMenuItems.filter((item) => {
    if (selectedMenuCategory === "all") return true;
    return item.category === selectedMenuCategory;
  });

  const handleOpenReserve = (venueId?: string) => {
    setSelectedVenueForModal(venueId);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-ivory-50 pt-28 pb-20">
      {/* Page Hero Banner */}
      <section className="relative h-80 sm:h-96 w-full overflow-hidden bg-charcoal-500 mb-12">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
          alt="Multi-Cuisine Family Dining at Hotel Green Park"
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
            <span className="text-gold-300 font-medium">Fine Dining & Lounges</span>
          </nav>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Culinary Craft & Fine Dining
          </h1>
          <p className="text-xs sm:text-sm text-ivory-200 mt-2 max-w-2xl font-light">
            Indulge in authentic Awadhi delicacies, woodfired pizzas on garden terraces, and artisanal cocktail mixology.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Three Distinct Dining Venues Showcase */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-gold-700 uppercase tracking-widest">
              Our Gastronomy Destinations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-500">
              Three Distinctive Culinary Venues
            </h2>
          </div>

          <div className="space-y-12">
            {restaurantsData.map((venue, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={venue.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-10 rounded-3xl border border-ivory-300 shadow-md ${
                    isEven ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`lg:col-span-6 relative h-80 sm:h-96 rounded-2xl overflow-hidden group ${
                    isEven ? "lg:col-start-7" : ""
                  }`}>
                    <Image
                      src={venue.image}
                      alt={venue.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover img-zoom group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-xs text-gold-300 font-semibold uppercase tracking-wider block">
                        {venue.type}
                      </span>
                      <h3 className="font-serif text-2xl font-bold">{venue.name}</h3>
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? "lg:col-start-1" : ""}`}>
                    <div className="space-y-2">
                      <span className="px-3 py-1 rounded-full bg-gold-500/15 text-gold-800 text-[11px] font-bold uppercase tracking-wider">
                        {venue.cuisine}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-500">
                        {venue.name}
                      </h3>
                      <p className="text-xs text-gold-700 font-medium italic">
                        &ldquo;{venue.tagline}&rdquo;
                      </p>
                      <p className="text-xs sm:text-sm text-charcoal-200 leading-relaxed pt-1">
                        {venue.description}
                      </p>
                    </div>

                    {/* Timings */}
                    <div className="p-4 bg-ivory-100 rounded-xl border border-ivory-200 space-y-1.5 text-xs text-charcoal-400">
                      <div className="flex items-center gap-2 font-semibold text-charcoal-500 pb-1 border-b border-ivory-200">
                        <Clock className="w-3.5 h-3.5 text-gold-600" />
                        <span>Dining Hours & Dress Code</span>
                      </div>
                      {venue.timings.lunch && (
                        <div className="flex justify-between">
                          <span className="text-charcoal-200">Lunch Service:</span>
                          <span className="font-medium text-charcoal-500">{venue.timings.lunch}</span>
                        </div>
                      )}
                      {venue.timings.dinner && (
                        <div className="flex justify-between">
                          <span className="text-charcoal-200">Dinner Service:</span>
                          <span className="font-medium text-charcoal-500">{venue.timings.dinner}</span>
                        </div>
                      )}
                      {venue.timings.allDay && (
                        <div className="flex justify-between">
                          <span className="text-charcoal-200">Hours:</span>
                          <span className="font-medium text-charcoal-500">{venue.timings.allDay}</span>
                        </div>
                      )}
                      <div className="flex justify-between pt-1">
                        <span className="text-charcoal-200">Dress Code:</span>
                        <span className="font-medium text-charcoal-500">{venue.dressCode}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-1.5">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-charcoal-400 block">
                        Signature Highlights
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal-300">
                        {venue.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => handleOpenReserve(venue.id)}
                      className="px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-600 text-charcoal-600 font-bold uppercase tracking-wider text-xs shadow-md transition-all flex items-center gap-2"
                    >
                      <CalendarDays className="w-4 h-4" />
                      <span>Reserve Table at {venue.name}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Menu Preview */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-ivory-300 shadow-md space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-gold-700 uppercase tracking-widest">
              Gourmet Selections
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-500">
              Sample À La Carte Menu Preview
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-200">
              A curated preview of our master chef creations. All prices in INR, exclusive of applicable taxes.
            </p>
          </div>

          {/* Menu Category Filter */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: "all", label: "Full Preview" },
              { id: "appetizer", label: "Royal Appetizers" },
              { id: "main", label: "Signature Main Courses" },
              { id: "dessert", label: "Artisanal Desserts" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedMenuCategory(cat.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedMenuCategory === cat.id
                    ? "bg-gold-500 text-charcoal-600 shadow-sm"
                    : "bg-ivory-100 text-charcoal-300 hover:bg-ivory-200 border border-ivory-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredMenuItems.map((dish) => (
              <div
                key={dish.id}
                className="p-5 rounded-2xl bg-ivory-50 border border-ivory-200 hover:border-gold-500/50 transition-all space-y-2 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center ${
                        dish.isVegetarian ? "border-emerald-600" : "border-red-600"
                      }`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          dish.isVegetarian ? "bg-emerald-600" : "bg-red-600"
                        }`} />
                      </div>
                      <h4 className="font-serif font-bold text-lg text-charcoal-500">
                        {dish.name}
                      </h4>
                    </div>
                    <span className="font-serif font-bold text-base text-gold-700 whitespace-nowrap">
                      {formatINR(dish.price)}
                    </span>
                  </div>

                  <p className="text-xs text-charcoal-200 leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-2 text-[10px] text-charcoal-100">
                  <span className="px-2 py-0.5 rounded bg-ivory-200 font-medium">{dish.cuisine}</span>
                  {dish.isChefSpecial && (
                    <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-800 font-semibold flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" />
                      Chef Special
                    </span>
                  )}
                  {dish.isSpicy && (
                    <span className="px-2 py-0.5 rounded bg-red-100 text-red-700 font-semibold flex items-center gap-1">
                      <Flame className="w-2.5 h-2.5" />
                      Spiced
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Reservation Strip */}
        <div className="bg-charcoal-500 text-ivory-100 p-8 sm:p-10 rounded-3xl border border-gold-500/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-white">
              Planning a Special Dinner or VIP Gathering?
            </h3>
            <p className="text-xs sm:text-sm text-ivory-300">
              Private Dining Salons available for groups of up to 16 with bespoke tasting menus and wine pairings.
            </p>
          </div>

          <button
            onClick={() => handleOpenReserve()}
            className="px-8 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-charcoal-600 font-bold uppercase tracking-wider text-xs shadow-md transition-all flex items-center gap-2 shrink-0"
          >
            <CalendarDays className="w-4 h-4" />
            <span>Request Table Reservation</span>
          </button>
        </div>
      </div>

      <DiningEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedRestaurantId={selectedVenueForModal}
      />
    </div>
  );
}
