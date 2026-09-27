"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  BedDouble, 
  PartyPopper, 
  UtensilsCrossed, 
  Zap, 
  ArrowRight, 
  ShieldCheck, 
  Car,
  Wifi
} from "lucide-react";
import { hotelConfig } from "@/data/hotel";

export function HotelOverviewGrid() {
  const pillars = [
    {
      title: "AC Rooms & Executive Suites",
      description: "Spotless AC rooms with plush beds, Smart TV, clean bathrooms, and 24/7 room service.",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
      href: "/rooms",
      linkText: "View Rooms & Tariffs",
      icon: BedDouble,
      tag: "45 AC Rooms",
    },
    {
      title: "Grand AC Banquet Hall",
      description: "Pillarless 500-capacity hall for weddings, ring ceremonies, birthdays, and conferences.",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
      href: "/banquets",
      linkText: "Explore Banquet Hall",
      icon: PartyPopper,
      tag: "500 Guests Capacity",
    },
    {
      title: "Multi-Cuisine Family Restaurant",
      description: "Authentic North Indian, South Indian, Tandoori, and delicious pure veg/family thalis.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      href: "/dining",
      linkText: "View Restaurant Menu",
      icon: UtensilsCrossed,
      tag: "Pure Veg & Multi-Cuisine",
    },
    {
      title: "24/7 Power Backup & Facilities",
      description: "Heavy silent generator backup, lift to all floors, high-speed Wi-Fi, and safe CCTV parking.",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
      href: "/amenities",
      linkText: "Discover All Facilities",
      icon: Zap,
      tag: "100% Generator Backup",
    },
  ];

  return (
    <section className="py-20 bg-ivory-100/60 border-b border-ivory-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600 bg-gold-500/10 px-3.5 py-1 rounded-full border border-gold-500/20">
            Welcome to {hotelConfig.name}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-500">
            Everything You Need for a Comfortable Stay & Grand Event
          </h2>
          <p className="text-sm text-charcoal-200">
            Conveniently situated in the city center with modern amenities, genuine hospitality, and competitive rates.
          </p>
        </div>

        {/* 4 Primary Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-ivory-300 shadow-sm hover:shadow-xl hover:border-gold-500/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute top-3 right-3 text-[11px] font-bold px-2.5 py-1 rounded-full bg-charcoal-500/80 backdrop-blur-md text-gold-300 border border-gold-500/30">
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-2xl bg-gold-500/10 text-gold-600 flex items-center justify-center border border-gold-500/20 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-charcoal-500 group-hover:text-gold-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-charcoal-200 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center text-xs font-bold text-gold-600 group-hover:text-gold-700 gap-1.5 border-t border-ivory-200">
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
