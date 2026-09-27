export interface Room {
  id: string;
  slug: string;
  name: string;
  category: "standard" | "deluxe" | "executive" | "suite" | "family";
  tagline: string;
  description: string;
  longDescription: string;
  pricePerNight: number;
  currency: string;
  sizeSqFt: number;
  bedType: string;
  maxGuests: number;
  maxAdults: number;
  maxChildren: number;
  view: string;
  featured: boolean;
  images: string[];
  thumbnail: string;
  amenities: string[];
  bathroomFeatures: string[];
  roomServices: string[];
  highlight: string;
}

export const roomsData: Room[] = [
  {
    id: "deluxe-ac-room",
    slug: "deluxe-ac-room",
    name: "Deluxe AC Room",
    category: "deluxe",
    tagline: "Comfortable air-conditioned room for solo travelers & couples",
    description: "Equipped with plush double bedding, split air-conditioning, 43-inch Smart LED TV, fast Wi-Fi, and a clean attached western bathroom.",
    longDescription: "Our Deluxe AC Room offers the ideal balance of comfort, cleanliness, and value. Features split air-conditioning, comfortable king-size mattress with fresh cotton linens, work table, high-speed Wi-Fi, and clean attached western bathroom with 24-hour hot water.",
    pricePerNight: 2200,
    currency: "INR",
    sizeSqFt: 280,
    bedType: "Comfort Double Bed",
    maxGuests: 2,
    maxAdults: 2,
    maxChildren: 1,
    view: "City View",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Split Air Conditioning",
      "Free High-Speed Wi-Fi",
      "43-inch Smart LED TV with HD channels",
      "24/7 Room Service & Intercom",
      "Complimentary Mineral Water Bottles",
      "Work Desk & Chair",
      "100% Power Backup Generator"
    ],
    bathroomFeatures: [
      "Attached Western Bathroom",
      "24-Hour Hot & Cold Water Geyser",
      "Clean Fresh Bath Towels & Soaps"
    ],
    roomServices: [
      "Daily Housekeeping",
      "Morning Bed Tea & Coffee Service",
      "Same-Day Laundry Service"
    ],
    highlight: "Best Value for Business & Pilgrims"
  },
  {
    id: "executive-ac-room",
    slug: "executive-ac-room",
    name: "Executive Premier AC Room",
    category: "executive",
    tagline: "Spacious premium room with cozy seating sofa and work desk",
    description: "Designed for corporate executives and families seeking extra space, featuring cushioned sofa seating, mini-fridge, and LED ambient lighting.",
    longDescription: "The Executive Premier Room provides added square footage, a comfortable two-seater sofa area with coffee table, mini-refrigerator, tea/coffee maker, and modern wooden wardrobes.",
    pricePerNight: 2900,
    currency: "INR",
    sizeSqFt: 350,
    bedType: "Plush King Size Bed",
    maxGuests: 3,
    maxAdults: 2,
    maxChildren: 1,
    view: "Main Road & City View",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Individual Climate Control Split AC",
      "Free High-Speed Wi-Fi",
      "50-inch Smart LED TV with OTT apps",
      "Mini Refrigerator & In-Room Tea Kettle",
      "Sofa Seating with Coffee Table",
      "Wardrobe with Electronic Safe Locker",
      "24/7 Room Service & Generator Backup"
    ],
    bathroomFeatures: [
      "Spacious Tiled Bathroom",
      "Glass Shower Area with Hot Water",
      "Complimentary Toiletries Kit & Hair Dryer"
    ],
    roomServices: [
      "Express Check-In & Check-Out",
      "Room Dining from Multi-Cuisine Restaurant",
      "Shoe Shine & Ironing Board on Request"
    ],
    highlight: "Popular Choice for Business Travelers"
  },
  {
    id: "family-suite-room",
    slug: "family-suite-room",
    name: "Executive Family Suite",
    category: "family",
    tagline: "Large 4-person family accommodation with twin double beds",
    description: "Ideal for family vacations, marriages, and pilgrim groups, featuring two queen beds, dining table, and spacious luggage area.",
    longDescription: "Our Executive Family Suite comfortably accommodates up to 4 adults and 2 children. Draped in pleasant warm colors with two large beds, comfortable lounge seating, and quick access to our lift and restaurant.",
    pricePerNight: 4200,
    currency: "INR",
    sizeSqFt: 520,
    bedType: "Two Queen Size Double Beds",
    maxGuests: 5,
    maxAdults: 4,
    maxChildren: 2,
    view: "Panoramic Town View",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Dual Split AC Units for whole room cooling",
      "High-speed Fiber Wi-Fi",
      "55-inch 4K Smart TV",
      "Four-Seater Dining Area",
      "Mini Fridge & Electric Kettle",
      "Extra Wardrobes & Luggage Racks",
      "24/7 Room Dining Support"
    ],
    bathroomFeatures: [
      "Large Western Bathroom",
      "High-Pressure Hot Water Geyser",
      "Full Toiletry Kit & Fresh Linens"
    ],
    roomServices: [
      "Priority Family Dining Room Service",
      "Assistance with Tour & Temple Cabs",
      "Daily Morning Newspapers"
    ],
    highlight: "Perfect for Families & Wedding Guests"
  },
  {
    id: "presidential-suite",
    slug: "presidential-suite",
    name: "The Grand Green Park Suite",
    category: "suite",
    tagline: "Spacious master bedroom with separate private living lounge",
    description: "Our top-tier executive suite featuring an independent living room with sofa set, master king bedroom, and premium amenities.",
    longDescription: "The Grand Green Park Suite offers luxury comfort with an independent living parlor, plush leatherette sofa set, master king bedroom, and dedicated room service.",
    pricePerNight: 5500,
    currency: "INR",
    sizeSqFt: 650,
    bedType: "Royal King Size Bed",
    maxGuests: 4,
    maxAdults: 3,
    maxChildren: 2,
    view: "City Panorama",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Separate Living Lounge & Master Bedroom",
      "Two Smart LED TVs",
      "Dual Split ACs",
      "Tea/Coffee Station & Mini Bar Chiller",
      "Complimentary Breakfast for 2",
      "Express Valet & Room Service"
    ],
    bathroomFeatures: [
      "Premium Marble En-suite",
      "Bathtub & Rain Shower",
      "Hot Water Geyser 24 Hours"
    ],
    roomServices: [
      "Dedicated Room Attendant",
      "Complimentary Late Check-out on Request"
    ],
    highlight: "VIP & Bride/Groom Suite"
  }
];
