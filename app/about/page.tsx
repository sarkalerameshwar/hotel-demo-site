"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Info, 
  Sparkles, 
  ChevronRight, 
  Award, 
  HeartHandshake, 
  ShieldCheck, 
  Clock, 
  CalendarDays, 
  PartyPopper,
  CheckCircle2
} from "lucide-react";
import { hotelConfig } from "@/data/hotel";
import { RoomEnquiryModal } from "@/components/forms/RoomEnquiryModal";
import { EventEnquiryModal } from "@/components/forms/EventEnquiryModal";

export default function AboutPage() {
  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);

  const leadershipTeam = [
    {
      name: "Rameshwar S. Patil",
      role: "Managing Director & Founder",
      bio: "With over 20 years in hospitality management, Rameshwar envisioned Hotel Green Park as a welcoming hub of comfort, cleanliness, and authentic warmth for families and business travelers.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Chef Prakash Deshmukh",
      role: "Head Chef - Dining & Banquets",
      bio: "Master of authentic North Indian, South Indian, and Maharashtrian specialties, curating delicious family thalis and wedding banquet feasts.",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Sunil Shinde",
      role: "Banquet & Events Manager",
      bio: "Dedicated event coordinator ensuring seamless ring ceremonies, wedding receptions, and corporate conferences for up to 500 guests.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    }
  ];

  const milestones = [
    {
      year: "2016",
      title: "Hotel Green Park Inception",
      description: "Established in the heart of the city with 25 comfortable AC rooms and a family restaurant.",
    },
    {
      year: "2019",
      title: "Grand AC Banquet Hall Addition",
      description: "Added a modern 500-guest pillarless AC banquet hall for weddings, receptions, and family celebrations.",
    },
    {
      year: "2022",
      title: "Executive Suites & Facility Upgrade",
      description: "Introduced Executive Premier and Family Suites with lift facility, round-the-clock power backup, and modern Wi-Fi.",
    },
    {
      year: "2025",
      title: "City's Trusted Hospitality Destination",
      description: "Recognized as the premier venue for family stays, wedding gatherings, and business conferences.",
    }
  ];

  return (
    <div className="min-h-screen bg-ivory-50 pt-28 pb-20">
      {/* Page Hero Banner */}
      <section className="relative h-80 sm:h-96 w-full overflow-hidden bg-charcoal-500 mb-12">
        <Image
          src={hotelConfig.images.about}
          alt="About Hotel Green Park"
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
            <span className="text-gold-300 font-medium">About Us</span>
          </nav>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Our Story & Hospitality
          </h1>
          <p className="text-xs sm:text-sm text-ivory-200 mt-2 max-w-2xl font-light">
            Dedicated to providing clean, comfortable stays, delicious family dining, and memorable celebrations in the heart of the city.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-700 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>Hotel Green Park Experience</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-500 leading-tight">
              Where Comfort <br />
              <span className="text-gold-gradient italic font-normal">Meets Genuine Care</span>
            </h2>

            <p className="text-charcoal-300 text-sm sm:text-base leading-relaxed">
              {hotelConfig.fullDescription}
            </p>

            <p className="text-charcoal-200 text-xs sm:text-sm leading-relaxed">
              Whether welcoming dignitaries, families on joyful holiday retreats, or couples celebrating once-in-a-lifetime fairy tale weddings, our team is dedicated to exceeding every expectation with intuitive warmth and discreet efficiency.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-ivory-300">
              <div>
                <span className="font-serif text-3xl font-bold text-gold-600 block">
                  {hotelConfig.metrics.roomsCount}+
                </span>
                <span className="text-xs text-charcoal-200 uppercase tracking-wider font-semibold">
                  Suites & Rooms
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl font-bold text-gold-600 block">
                  {hotelConfig.metrics.banquetCapacity}+
                </span>
                <span className="text-xs text-charcoal-200 uppercase tracking-wider font-semibold">
                  Event Capacity
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl font-bold text-gold-600 block">
                  {hotelConfig.metrics.yearsOfExcellence}+
                </span>
                <span className="text-xs text-charcoal-200 uppercase tracking-wider font-semibold">
                  Years of Royalty
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-ivory-300">
            <Image
              src={hotelConfig.images.exteriorDay}
              alt="Hotel Grounds"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Milestones & Journey */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-ivory-300 shadow-md space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-gold-700 uppercase tracking-widest">
              A History of Excellence
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-500">
              Key Milestones in Our Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-ivory-50 border border-ivory-200 hover:border-gold-500/50 transition-all space-y-3"
              >
                <span className="font-serif text-3xl font-bold text-gold-600 block">
                  {m.year}
                </span>
                <h4 className="font-serif text-lg font-bold text-charcoal-500">
                  {m.title}
                </h4>
                <p className="text-xs text-charcoal-200 leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team Profiles */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-gold-700 uppercase tracking-widest">
              Meet the Guardians of Hospitality
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-500">
              Our Leadership & Master Curators
            </h2>
            <p className="text-xs text-charcoal-200">
              * Fictional sample profiles for client demonstration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((leader, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl overflow-hidden border border-ivory-300 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-64 w-full overflow-hidden bg-charcoal-400">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover img-zoom transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] text-gold-300 font-semibold uppercase tracking-wider block">
                      {leader.role}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-white">{leader.name}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs text-charcoal-200 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-charcoal-500 text-ivory-100 p-8 sm:p-12 rounded-3xl border border-gold-500/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              We Look Forward to Welcoming You
            </h3>
            <p className="text-xs sm:text-sm text-ivory-300">
              Plan your stay or host your next milestone celebration at {hotelConfig.name}.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <button
              onClick={() => setIsRoomModalOpen(true)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-charcoal-600 font-bold uppercase tracking-wider text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              <CalendarDays className="w-4 h-4" />
              <span>Book a Stay</span>
            </button>
            <button
              onClick={() => setIsEventModalOpen(true)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-white/30 hover:border-gold-400 text-ivory-100 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <PartyPopper className="w-4 h-4 text-gold-400" />
              <span>Enquire Events</span>
            </button>
          </div>
        </div>
      </div>

      <RoomEnquiryModal
        isOpen={isRoomModalOpen}
        onClose={() => setIsRoomModalOpen(false)}
      />

      <EventEnquiryModal
        isOpen={isEventModalOpen}
        onClose={() => setIsEventModalOpen(false)}
      />
    </div>
  );
}
