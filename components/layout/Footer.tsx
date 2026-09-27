"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Twitter, 
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { toast } from "sonner";
import { hotelConfig } from "@/data/hotel";

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    setIsSubscribed(true);
    toast.success("Thank you for subscribing!", {
      description: "You will receive our seasonal privileges and exclusive event invitations.",
    });
    setNewsletterEmail("");
  };

  return (
    <footer className="bg-charcoal-500 text-ivory-100 relative overflow-hidden pt-16 pb-12 border-t border-charcoal-400">
      {/* Decorative Gold Glow in background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-charcoal-300">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-gold-400 flex items-center justify-center bg-charcoal-600 text-gold-400 font-serif text-2xl font-bold">
                GP
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-ivory-100">{hotelConfig.name}</h3>
                <p className="text-xs tracking-[0.2em] uppercase text-gold-400 font-medium">
                  Luxury Hotel & Convention Center
                </p>
              </div>
            </div>

            <p className="text-sm text-ivory-300 leading-relaxed max-w-md">
              {hotelConfig.shortDescription}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={hotelConfig.contact.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-charcoal-400 hover:bg-gold-500 text-ivory-200 hover:text-charcoal-600 flex items-center justify-center transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={hotelConfig.contact.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-charcoal-400 hover:bg-gold-500 text-ivory-200 hover:text-charcoal-600 flex items-center justify-center transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={hotelConfig.contact.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-charcoal-400 hover:bg-gold-500 text-ivory-200 hover:text-charcoal-600 flex items-center justify-center transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={hotelConfig.contact.socials.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-charcoal-400 hover:bg-gold-500 text-ivory-200 hover:text-charcoal-600 flex items-center justify-center transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-gold-300 tracking-wide">
              Quick Exploration
            </h4>
            <ul className="space-y-2.5 text-sm text-ivory-300">
              <li>
                <Link href="/rooms" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span>Rooms & Suites</span>
                </Link>
              </li>
              <li>
                <Link href="/banquets" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span>Banquets & Weddings</span>
                </Link>
              </li>
              <li>
                <Link href="/dining" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span>Family Restaurant & Dining</span>
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span>Facilities & Generator Backup</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span>Photo Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span>About Hotel Green Park</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-gold-300 tracking-wide">
              Contact & Concierge
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-ivory-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <span>
                  {hotelConfig.contact.address.street}, {hotelConfig.contact.address.locality},{" "}
                  {hotelConfig.contact.address.city} - {hotelConfig.contact.address.pincode}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`tel:${hotelConfig.contact.phone}`} className="hover:text-gold-400 transition-colors">
                  {hotelConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`mailto:${hotelConfig.contact.email}`} className="hover:text-gold-400 transition-colors">
                  {hotelConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Check-in: {hotelConfig.contact.openingHours.checkIn} | Check-out: {hotelConfig.contact.openingHours.checkOut}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-gold-300 tracking-wide">
              Hotel Green Park Updates
            </h4>
            <p className="text-xs text-ivory-300 leading-relaxed">
              Subscribe to receive exclusive seasonal rates, private dining invites, and wedding planning guides.
            </p>

            {isSubscribed ? (
              <div className="p-3 bg-gold-500/15 border border-gold-500/30 rounded-xl flex items-center gap-2 text-gold-300 text-xs">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-gold-400" />
                <span>You are subscribed to the newsletter.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full bg-charcoal-600 border border-charcoal-300 rounded-xl py-2.5 pl-3.5 pr-10 text-xs text-ivory-100 placeholder:text-ivory-400 focus:outline-none focus:border-gold-500 transition-colors"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-2.5 rounded-lg bg-gold-500 text-charcoal-600 hover:bg-gold-400 transition-colors flex items-center justify-center"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-ivory-400 block">
                  * Demo newsletter form. No spam.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-400">
          <p>
            © {new Date().getFullYear()} {hotelConfig.name}. All Rights Reserved. Client Presentation Demonstration.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-gold-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold-400 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-gold-400 transition-colors">
              Guest Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
