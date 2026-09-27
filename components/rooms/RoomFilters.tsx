"use client";

import React from "react";
import { Filter, SlidersHorizontal, Users, Sparkles } from "lucide-react";

interface RoomFiltersProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  guestFilter: number;
  onGuestFilterChange: (count: number) => void;
  sortBy: "price-asc" | "price-desc" | "size-desc" | "popular";
  onSortChange: (sort: "price-asc" | "price-desc" | "size-desc" | "popular") => void;
  totalResults: number;
}

export function RoomFilters({
  selectedCategory,
  onSelectCategory,
  guestFilter,
  onGuestFilterChange,
  sortBy,
  onSortChange,
  totalResults,
}: RoomFiltersProps) {
  const categories = [
    { id: "all", label: "All Rooms & Suites" },
    { id: "deluxe", label: "Deluxe Rooms" },
    { id: "executive", label: "Executive Premier" },
    { id: "suite", label: "Royal Suites" },
    { id: "presidential", label: "Presidential" },
    { id: "villa", label: "Garden Villas" },
  ];

  return (
    <div className="bg-white p-5 rounded-2xl border border-ivory-300 shadow-sm space-y-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-ivory-200">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gold-600" />
          <h3 className="font-serif font-bold text-lg text-charcoal-500">
            Filter & Refine Accommodations
          </h3>
          <span className="px-2.5 py-0.5 rounded-full bg-ivory-200 text-charcoal-300 text-xs font-medium">
            {totalResults} {totalResults === 1 ? "Category" : "Categories"} Found
          </span>
        </div>

        {/* Sort selector */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <SlidersHorizontal className="w-4 h-4 text-charcoal-200" />
          <span className="text-xs text-charcoal-200 whitespace-nowrap">Sort By:</span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as any)}
            className="px-3 py-1.5 rounded-xl border border-ivory-300 bg-ivory-50 text-xs font-medium text-charcoal-500 focus:outline-none focus:border-gold-500 w-full md:w-auto"
          >
            <option value="popular">Recommended / Popular</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="size-desc">Room Area: Largest First</option>
          </select>
        </div>
      </div>

      {/* Category Pills & Guests dropdown */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Category buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-gold-500 text-charcoal-600 shadow-sm font-semibold"
                    : "bg-ivory-100 text-charcoal-300 hover:bg-ivory-200 border border-ivory-300"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Guest capacity filter */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <Users className="w-4 h-4 text-gold-600" />
          <span className="text-xs text-charcoal-300 whitespace-nowrap">Min Guests:</span>
          <select
            value={guestFilter}
            onChange={(e) => onGuestFilterChange(Number(e.target.value))}
            className="px-3 py-1.5 rounded-xl border border-ivory-300 bg-ivory-50 text-xs font-medium text-charcoal-500 focus:outline-none focus:border-gold-500"
          >
            <option value={0}>Any Capacity</option>
            <option value={2}>2+ Guests</option>
            <option value={3}>3+ Guests</option>
            <option value={4}>4+ Guests</option>
          </select>
        </div>
      </div>
    </div>
  );
}
