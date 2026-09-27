"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send, 
  Sparkles, 
  ChevronRight, 
  CheckCircle2, 
  PhoneCall, 
  CalendarDays, 
  PartyPopper,
  ShieldAlert
} from "lucide-react";
import { toast } from "sonner";
import { hotelConfig } from "@/data/hotel";
import { RoomEnquiryModal } from "@/components/forms/RoomEnquiryModal";
import { EventEnquiryModal } from "@/components/forms/EventEnquiryModal";

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("general");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (phone.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }
    if (message.length < 10) {
      toast.error("Message must be at least 10 characters long");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Message Received!", {
        description: `Thank you, ${fullName}. Our ${department} team will respond shortly.`,
      });
    }, 800);
  };

  return (
    <div className="min-h-screen bg-ivory-50 pt-28 pb-20">
      {/* Page Hero Banner */}
      <section className="relative h-80 sm:h-96 w-full overflow-hidden bg-charcoal-500 mb-12">
        <Image
          src={hotelConfig.images.lobby}
          alt="Contact Hotel Green Park Concierge & Desk"
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
            <span className="text-gold-300 font-medium">Contact Us</span>
          </nav>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Connect with Our Concierge
          </h1>
          <p className="text-xs sm:text-sm text-ivory-200 mt-2 max-w-2xl font-light">
            We are here 24 hours a day to assist with room reservations, banquet planning, dining inquiries, and private transfers.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Address */}
          <div className="bg-white p-6 rounded-2xl border border-ivory-300 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-base text-charcoal-500">
              Property Location
            </h4>
            <p className="text-xs text-charcoal-200 leading-relaxed">
              {hotelConfig.contact.address.street}, {hotelConfig.contact.address.locality}, {hotelConfig.contact.address.city} - {hotelConfig.contact.address.pincode}
            </p>
            <span className="text-[11px] text-gold-700 block font-medium">
              {hotelConfig.contact.address.landmark}
            </span>
          </div>

          {/* Phone */}
          <div className="bg-white p-6 rounded-2xl border border-ivory-300 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-base text-charcoal-500">
              Front Desk & Reservations
            </h4>
            <div className="space-y-1 text-xs">
              <a href={`tel:${hotelConfig.contact.phone}`} className="block text-charcoal-400 hover:text-gold-600 font-medium">
                {hotelConfig.contact.phoneDisplay}
              </a>
              <a href={`tel:${hotelConfig.contact.secondaryPhone}`} className="block text-charcoal-200 hover:text-gold-600">
                {hotelConfig.contact.secondaryPhone}
              </a>
            </div>
            <a
              href={hotelConfig.contact.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-semibold hover:underline"
            >
              <PhoneCall className="w-3 h-3" />
              Direct WhatsApp Chat
            </a>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-2xl border border-ivory-300 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-base text-charcoal-500">
              Electronic Inquiries
            </h4>
            <div className="space-y-1 text-xs">
              <a href={`mailto:${hotelConfig.contact.email}`} className="block text-charcoal-400 hover:text-gold-600 font-medium">
                {hotelConfig.contact.email}
              </a>
              <a href={`mailto:${hotelConfig.contact.eventsEmail}`} className="block text-charcoal-200 hover:text-gold-600">
                {hotelConfig.contact.eventsEmail}
              </a>
            </div>
            <span className="text-[11px] text-charcoal-100 block">
              Response within 2 hours
            </span>
          </div>

          {/* Operating Hours */}
          <div className="bg-white p-6 rounded-2xl border border-ivory-300 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-base text-charcoal-500">
              Reception Hours
            </h4>
            <div className="space-y-1 text-xs text-charcoal-200">
              <p>Front Desk: <strong>{hotelConfig.contact.openingHours.frontDesk}</strong></p>
              <p>Concierge: {hotelConfig.contact.openingHours.concierge}</p>
              <p>Check-in: {hotelConfig.contact.openingHours.checkIn} | Check-out: {hotelConfig.contact.openingHours.checkOut}</p>
            </div>
          </div>
        </div>

        {/* Form and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Form Left */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-ivory-300 shadow-md">
            <div className="space-y-2 mb-6">
              <span className="text-xs font-semibold text-gold-700 uppercase tracking-widest">
                Send a Message
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-500">
                Guest Enquiry & Feedback Form
              </h3>
              <p className="text-xs text-charcoal-200">
                Please fill in the form below and our dedicated guest relation officer will assist you.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 text-center space-y-4 bg-ivory-50 rounded-2xl border border-gold-500/30">
                <div className="w-14 h-14 rounded-full bg-gold-500/20 text-gold-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-charcoal-500">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-charcoal-200 max-w-md mx-auto">
                  Thank you, {fullName}. Your inquiry for our {department} team has been received. We will get in touch with you shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFullName("");
                    setEmail("");
                    setPhone("");
                    setSubject("");
                    setMessage("");
                  }}
                  className="px-6 py-2.5 rounded-xl bg-charcoal-500 text-ivory-100 text-xs font-semibold uppercase tracking-wider"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-charcoal-300 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Malhotra"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-ivory-300 bg-ivory-50/50 text-charcoal-500 text-sm focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-charcoal-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-ivory-300 bg-ivory-50/50 text-charcoal-500 text-sm focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-charcoal-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-ivory-300 bg-ivory-50/50 text-charcoal-500 text-sm focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-charcoal-300 mb-1">
                      Concerned Department *
                    </label>
                    <select
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-ivory-300 bg-ivory-50/50 text-charcoal-500 text-sm focus:outline-none focus:border-gold-500"
                    >
                      <option value="general">General Concierge</option>
                      <option value="rooms">Room Reservations</option>
                      <option value="banquets">Banquets & Weddings</option>
                      <option value="dining">Restaurant Reservations</option>
                      <option value="feedback">Guest Experience & Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-charcoal-300 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Inquiry regarding wedding banquet booking for December"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-ivory-300 bg-ivory-50/50 text-charcoal-500 text-sm focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-charcoal-300 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your detailed inquiry or special requirements here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-ivory-300 bg-ivory-50/50 text-charcoal-500 text-sm focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gold-500 hover:bg-gold-600 text-charcoal-600 font-bold uppercase tracking-wider text-xs shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Interactive Map Placeholder & Quick Access */}
          <div className="lg:col-span-5 space-y-6">
            {/* Map Preview Card */}
            <div className="bg-white rounded-3xl overflow-hidden border border-ivory-300 shadow-md p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-serif font-bold text-lg text-charcoal-500">
                  Location & Proximity
                </h4>
                <span className="text-[11px] text-gold-700 font-semibold uppercase">
                  Prime City Location
                </span>
              </div>

              {/* Styled Mock Map Container */}
              <div className="relative h-64 w-full rounded-2xl overflow-hidden bg-charcoal-400 border border-ivory-300 flex items-center justify-center group">
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                  alt="City Map Location"
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-charcoal-600/40" />

                {/* Pin marker */}
                <div className="relative z-10 text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-gold-500 text-charcoal-600 flex items-center justify-center mx-auto shadow-2xl animate-bounce">
                    <MapPin className="w-6 h-6 fill-current" />
                  </div>
                  <div className="bg-charcoal-500/95 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-semibold border border-gold-500/40">
                    {hotelConfig.name}
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-charcoal-200">
                <div className="flex justify-between pb-1 border-b border-ivory-200">
                  <span>International Airport:</span>
                  <span className="font-medium text-charcoal-500">20 Minutes (Private Transfer)</span>
                </div>
                <div className="flex justify-between pb-1 border-b border-ivory-200">
                  <span>Central Railway Station:</span>
                  <span className="font-medium text-charcoal-500">15 Minutes</span>
                </div>
                <div className="flex justify-between">
                  <span>Diplomatic Enclave / City Center:</span>
                  <span className="font-medium text-charcoal-500">5 Minutes</span>
                </div>
              </div>
            </div>

            {/* Direct Enquiry Actions Card */}
            <div className="bg-charcoal-500 text-ivory-100 p-6 rounded-3xl border border-gold-500/40 shadow-xl space-y-4">
              <h4 className="font-serif font-bold text-lg text-white">
                Direct Booking Shortcuts
              </h4>
              <p className="text-xs text-ivory-300">
                Need immediate pricing or dates availability? Choose your category below:
              </p>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <button
                  onClick={() => setIsRoomModalOpen(true)}
                  className="py-2.5 px-3 rounded-xl bg-gold-500 text-charcoal-600 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-gold-400 transition-colors"
                >
                  <CalendarDays className="w-3.5 h-3.5" />
                  <span>Room Booking</span>
                </button>

                <button
                  onClick={() => setIsEventModalOpen(true)}
                  className="py-2.5 px-3 rounded-xl border border-white/30 text-ivory-100 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:border-gold-400 transition-colors"
                >
                  <PartyPopper className="w-3.5 h-3.5 text-gold-400" />
                  <span>Banquet Event</span>
                </button>
              </div>
            </div>
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
