"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  Phone, 
  CalendarDays, 
  Sparkles,
  MapPin,
  ChevronRight,
  Utensils,
  BedDouble,
  PartyPopper,
  Image as ImageIcon,
  Info
} from "lucide-react";
import { hotelConfig } from "@/data/hotel";
import { RoomEnquiryModal } from "@/components/forms/RoomEnquiryModal";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/", icon: Sparkles },
    { name: "Rooms & Suites", href: "/rooms", icon: BedDouble },
    { name: "Banquets & Events", href: "/banquets", icon: PartyPopper },
    { name: "Dining", href: "/dining", icon: Utensils },
    { name: "Amenities", href: "/amenities", icon: Sparkles },
    { name: "Gallery", href: "/gallery", icon: ImageIcon },
    { name: "About Us", href: "/about", icon: Info },
    { name: "Contact", href: "/contact", icon: MapPin },
  ];

  // Determine navbar background styling based on scroll or current route
  const isHomePage = pathname === "/";
  const showDarkOrSolid = isScrolled || !isHomePage;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          showDarkOrSolid
            ? "bg-ivory-50/95 text-charcoal-400 backdrop-blur-md shadow-md border-b border-ivory-300 py-3.5"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent text-white py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Hotel Brand */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-gold-400/80 flex items-center justify-center bg-charcoal-500/80 text-gold-300 transition-transform group-hover:scale-105 shadow-sm">
              <span className="font-serif text-xl font-bold tracking-wider">GP</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-xl sm:text-2xl font-bold tracking-wide transition-colors ${
                showDarkOrSolid ? "text-charcoal-500" : "text-white"
              }`}>
                {hotelConfig.name}
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-gold-500 font-semibold">
                Luxury Hotel & Events
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-all hover:text-gold-500 relative py-1 ${
                    isActive
                      ? "text-gold-500 font-semibold"
                      : showDarkOrSolid
                      ? "text-charcoal-300"
                      : "text-ivory-100"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-500 rounded-full animate-fade-in" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-charcoal-600 shadow-md hover:shadow-gold-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <CalendarDays className="w-4 h-4 text-charcoal-600" />
              <span>Book Your Stay</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="sm:hidden flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-gold-500 text-charcoal-600"
            >
              <CalendarDays className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className={`p-2 rounded-lg transition-colors ${
                showDarkOrSolid
                  ? "text-charcoal-400 hover:bg-ivory-200"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-ivory-50 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-slide-up border-l border-gold-500/30">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-ivory-300">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full border border-gold-500 flex items-center justify-center bg-charcoal-500 text-gold-300 font-serif font-bold">
                    GP
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-charcoal-500">{hotelConfig.name}</h3>
                    <p className="text-[10px] tracking-wider text-gold-600 uppercase font-semibold">Luxury Hospitality</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-charcoal-300 hover:text-charcoal-500 rounded-full hover:bg-ivory-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="py-6 space-y-1.5">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-gold-500/15 text-gold-700 font-semibold border-l-4 border-gold-500"
                          : "text-charcoal-300 hover:bg-ivory-200/80 hover:text-charcoal-500"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-4 h-4 ${isActive ? "text-gold-600" : "text-charcoal-200"}`} />
                        <span>{link.name}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-charcoal-100" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-ivory-300 space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsBookingModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-semibold uppercase tracking-wider bg-gold-500 hover:bg-gold-600 text-charcoal-600 shadow-md transition-colors"
              >
                <CalendarDays className="w-4 h-4" />
                <span>Book Your Stay</span>
              </button>

              <div className="flex items-center justify-center text-xs text-charcoal-300 pt-2">
                <a
                  href={hotelConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-700 font-semibold hover:underline flex items-center gap-1.5"
                >
                  <span>Need Assistance? WhatsApp Concierge</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Room Enquiry Modal */}
      <RoomEnquiryModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
}
