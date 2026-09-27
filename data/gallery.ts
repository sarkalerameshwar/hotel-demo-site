export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "exterior" | "rooms" | "banquets" | "dining" | "amenities" | "events";
  categoryLabel: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  featured?: boolean;
}

export const galleryCategories = [
  { id: "all", label: "All Photos" },
  { id: "exterior", label: "Hotel Exterior & Grounds" },
  { id: "rooms", label: "Rooms & Suites" },
  { id: "banquets", label: "Banquet Halls & Venues" },
  { id: "dining", label: "Dining & Cuisine" },
  { id: "amenities", label: "Pool, Spa & Facilities" },
  { id: "events", label: "Weddings & Celebrations" },
] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: "g-1",
    title: "Hotel Green Park Illuminated Facade",
    category: "exterior",
    categoryLabel: "Hotel Exterior & Grounds",
    src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85",
    alt: "Illuminated luxury hotel exterior with architectural lighting and palm fountains at dusk",
    featured: true,
  },
  {
    id: "g-2",
    title: "The Royal Heritage Suite Parlor",
    category: "rooms",
    categoryLabel: "Rooms & Suites",
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    alt: "Spacious luxury hotel suite bedroom with grand king bed and panoramic windows",
    featured: true,
  },
  {
    id: "g-3",
    title: "The Grand Celebration Ballroom Setup",
    category: "banquets",
    categoryLabel: "Banquet Halls & Venues",
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    alt: "Pillarless grand ballroom decorated for a gala banquet with crystal chandeliers",
    featured: true,
  },
  {
    id: "g-4",
    title: "Fine Dining Awadhi Feast at The Royal Saffron",
    category: "dining",
    categoryLabel: "Dining & Cuisine",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    alt: "Fine dining restaurant dining hall with intimate candlelight tables",
    featured: true,
  },
  {
    id: "g-5",
    title: "Azure Temperature-Controlled Swimming Pool",
    category: "amenities",
    categoryLabel: "Pool, Spa & Facilities",
    src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury swimming pool with sunbeds and cabanas overlooking manicured gardens",
    featured: true,
  },
  {
    id: "g-6",
    title: "Royal Wedding Reception Setup",
    category: "events",
    categoryLabel: "Weddings & Celebrations",
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    alt: "Decorated royal wedding reception stage and floral banquet dining arrangement",
    featured: true,
  },
  {
    id: "g-7",
    title: "Deluxe Heritage King Bedroom",
    category: "rooms",
    categoryLabel: "Rooms & Suites",
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
    alt: "Deluxe hotel room with warm amber lamps and luxury wood finish",
  },
  {
    id: "g-8",
    title: "The Verandah Garden Dining",
    category: "dining",
    categoryLabel: "Dining & Cuisine",
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    alt: "Sunlit open bistro restaurant with garden views and fresh culinary offerings",
  },
  {
    id: "g-9",
    title: "Soma Ayurvedic Rejuvenation Spa",
    category: "amenities",
    categoryLabel: "Pool, Spa & Facilities",
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    alt: "Tranquil luxury spa massage room with herbal aromatherapy oils",
  },
  {
    id: "g-10",
    title: "Executive Premier Club Room",
    category: "rooms",
    categoryLabel: "Rooms & Suites",
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    alt: "Executive room with modern workspace and floor to ceiling glass windows",
  },
  {
    id: "g-11",
    title: "The Lotus Lounge Cocktails",
    category: "dining",
    categoryLabel: "Dining & Cuisine",
    src: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=80",
    alt: "Dimly lit cocktail lounge bar with velvet barstools and crystal glassware",
  },
  {
    id: "g-12",
    title: "Corporate Summit in Crystal Hall",
    category: "banquets",
    categoryLabel: "Banquet Halls & Venues",
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
    alt: "Corporate conference setup with state of the art presentation screens",
  }
];
