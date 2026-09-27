export interface Facility {
  id: string;
  name: string;
  category: "dining" | "events" | "comfort" | "service" | "transport";
  description: string;
  iconName: string;
  image: string;
  hours: string;
  highlight: string;
}

export const facilitiesData: Facility[] = [
  {
    id: "restaurant",
    name: "Multi-Cuisine Family Restaurant",
    category: "dining",
    description: "Serving delicious North Indian, Maharashtrian, South Indian, and Chinese specialties with pure veg & non-veg options.",
    iconName: "UtensilsCrossed",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    hours: "07:00 AM – 11:00 PM",
    highlight: "Pure Veg & Family Dining"
  },
  {
    id: "banquet-hall",
    name: "AC Banquet & Conference Hall",
    category: "events",
    description: "Fully air-conditioned banquet hall with stage, audio-visual system, and catering for up to 500 guests for weddings, ring ceremonies & meetings.",
    iconName: "Briefcase",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
    hours: "Available on Booking",
    highlight: "500 Guests Capacity with Stage & Sound"
  },
  {
    id: "wifi",
    name: "Free High-Speed Wi-Fi",
    category: "comfort",
    description: "Complimentary high-speed internet accessible across all guest rooms, lobby, and restaurant for seamless connectivity.",
    iconName: "Wifi",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    hours: "24/7 Unlimited Access",
    highlight: "High-Speed Fiber Internet"
  },
  {
    id: "room-service",
    name: "24-Hour Room Service",
    category: "service",
    description: "Enjoy hot meals, tea, coffee, snacks, and beverages delivered directly to your room with just one intercom call.",
    iconName: "Clock",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
    hours: "24 Hours Continuous",
    highlight: "Prompt In-Room Service"
  },
  {
    id: "parking",
    name: "Ample Safe Parking & Valet",
    category: "comfort",
    description: "Dedicated on-site secure parking space for guest cars, tourist buses, and wedding vehicles with 24-hour security guards.",
    iconName: "Car",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80",
    hours: "24 Hours Monitored",
    highlight: "Free Safe Parking for All Guests"
  },
  {
    id: "generator",
    name: "100% Power Backup Generator",
    category: "comfort",
    description: "Heavy-duty automatic power generator ensuring uninterrupted air conditioning, lift, lighting, and water supply at all times.",
    iconName: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    hours: "Automatic 24/7 Backup",
    highlight: "Continuous AC & Lift Operation"
  }
];
