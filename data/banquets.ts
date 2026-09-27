export interface BanquetHall {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  longDescription: string;
  capacityMax: number;
  areaSqFt: number;
  ceilingHeightFt: number;
  suitableFor: string[];
  features: string[];
  seatingLayouts: {
    theatre: number;
    banquet: number;
    classroom: number;
    cocktail: number;
    ushape: number;
    boardroom: number;
  };
  image: string;
  gallery: string[];
  facilities: string[];
  cateringOptions: string[];
  highlight: string;
}

export interface EventPackage {
  id: string;
  name: string;
  type: "wedding" | "corporate" | "celebration";
  tagline: string;
  startingPricePerGuest: number;
  features: string[];
  recommendedHall: string;
}

export const banquetHallsData: BanquetHall[] = [
  {
    id: "grand-green-park-hall",
    slug: "grand-green-park-hall",
    name: "The Grand Green Park AC Banquet Hall",
    subtitle: "Air-conditioned grand hall for weddings, receptions & large family gatherings",
    description: "Our main central hall accommodating up to 500 guests with stage, mandap space, dedicated dining hall, and bride/groom dressing rooms.",
    longDescription: "The Grand Green Park Banquet Hall is designed for seamless wedding celebrations, reception galas, and cultural events. Equipped with split air conditioning, crystal chandelier lighting, sound system, and a dedicated dining buffet area.",
    capacityMax: 500,
    areaSqFt: 5500,
    ceilingHeightFt: 14,
    suitableFor: [
      "Weddings & Reception Galas",
      "Ring Ceremonies & Engagements",
      "Sangeet & Haldi Celebrations",
      "Large Annual Corporate Meets"
    ],
    features: [
      "Spacious pillarless hall with unobstructed stage view",
      "Air-conditioned Bride & Groom Green Rooms with vanity mirrors",
      "Integrated Stage Lighting & PA Sound System with Cordless Mics",
      "Separate Dedicated Buffet Dining Hall",
      "100% Generator Power Backup during function"
    ],
    seatingLayouts: {
      theatre: 500,
      banquet: 350,
      classroom: 250,
      cocktail: 550,
      ushape: 100,
      boardroom: 60,
    },
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80"
    ],
    facilities: [
      "Dedicated Buffet Counter Area",
      "Stage Setup & Mandap Coordination",
      "Ample Safe Parking with Security"
    ],
    cateringOptions: [
      "Pure Vegetarian Maharashtrian & North Indian Feast",
      "Multi-Cuisine Buffet with Live Chaat & Tandoor",
      "Special Gulab Jamun, Basundi & Jalebi Sweet Counters"
    ],
    highlight: "Spacious AC Hall for 500 Guests"
  },
  {
    id: "executive-conference-hall",
    slug: "executive-conference-hall",
    name: "The Executive Conference & Mini Hall",
    subtitle: "Ideal for corporate meetings, training seminars, and birthday parties",
    description: "A comfortable air-conditioned mid-sized hall equipped with high-resolution projector, whiteboard, podium, and flexible seating.",
    longDescription: "Perfect for dealer meets, doctor conferences, executive business seminars, birthday parties, and naming ceremonies for up to 120 guests.",
    capacityMax: 120,
    areaSqFt: 1600,
    ceilingHeightFt: 12,
    suitableFor: [
      "Corporate Seminars & Training Sessions",
      "Birthday & Anniversary Parties",
      "Naming Ceremonies & Baby Showers",
      "Board Meetings & Dealer Meets"
    ],
    features: [
      "Full HD Projector with motorized screen",
      "Wireless podium and collar microphones",
      "Flexible seating arrangement (Theatre, Classroom, Cluster)",
      "High-speed Wi-Fi and power points for laptops"
    ],
    seatingLayouts: {
      theatre: 120,
      banquet: 80,
      classroom: 60,
      cocktail: 130,
      ushape: 40,
      boardroom: 30,
    },
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80"
    ],
    facilities: [
      "Integrated Audio-Visual Setup",
      "High-Tea & Lunch Buffet Arrangements",
      "Stationery & Mineral Water Service"
    ],
    cateringOptions: [
      "Executive High-Tea with Snacks & Filter Coffee",
      "Working Buffet Lunch & Dinner"
    ],
    highlight: "Perfect for Corporate Meets & Birthdays"
  }
];

export const eventPackagesData: EventPackage[] = [
  {
    id: "marriage-package",
    name: "Complete Wedding & Reception Package",
    type: "wedding",
    tagline: "All-inclusive wedding arrangement with hall, decor, and catering",
    startingPricePerGuest: 650,
    recommendedHall: "The Grand Green Park AC Banquet Hall",
    features: [
      "AC Banquet Hall usage with full stage setup & seating",
      "Lavish Pure Veg or Multi-Cuisine Wedding Feast",
      "Complimentary Suite Room for Bride & Groom",
      "Welcome Drink with Starters",
      "PA System with Mic & Sound Operator",
      "Generator Backup throughout the function"
    ]
  },
  {
    id: "corporate-meeting-package",
    name: "Corporate Conference & Seminar Package",
    type: "corporate",
    tagline: "Seamless business meetings with AV setup, High-Tea & Lunch",
    startingPricePerGuest: 450,
    recommendedHall: "The Executive Conference & Mini Hall",
    features: [
      "AC Conference Hall with Projector & Screen",
      "Morning & Evening High-Tea with Snacks",
      "Buffet Lunch with Pure Veg Multi-Cuisine options",
      "High-speed Wi-Fi access for all delegates",
      "Notepads, pens, and mineral water bottles"
    ]
  }
];
