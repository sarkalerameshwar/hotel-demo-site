export interface HotelOffer {
  id: string;
  slug: string;
  title: string;
  category: "Stay" | "Wedding" | "Corporate";
  tag: string;
  discountBadge: string;
  shortDescription: string;
  fullDescription: string;
  validity: string;
  inclusions: string[];
  startingPrice: string;
  image: string;
  isDemoSample: boolean;
}

export const offersData: HotelOffer[] = [
  {
    id: "marriage-room-block",
    slug: "marriage-room-block",
    title: "Marriage & Family Function Room Block",
    category: "Wedding",
    tag: "Special Discount",
    discountBadge: "SPECIAL GROUP RATE",
    shortDescription: "Special discounted room tariffs when booking 10 or more AC rooms for wedding guests and family ceremonies.",
    fullDescription: "Ensure complete comfort for your visiting relatives and baraat guests with our special group rates, 24-hour room service, and ample parking.",
    validity: "Valid on block bookings of 10+ rooms",
    inclusions: [
      "Special discounted AC room tariffs",
      "Complimentary Morning Bed Tea for all guests",
      "Dedicated floor coordinator for the marriage group",
      "Ample safe parking for cars and tourist buses",
      "100% generator backup throughout the stay"
    ],
    startingPrice: "₹1,800 / Room / Night",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80",
    isDemoSample: true,
  },
  {
    id: "corporate-executive-stay",
    slug: "corporate-executive-stay",
    title: "Corporate Executive Business Package",
    category: "Corporate",
    tag: "Business Special",
    discountBadge: "BEST VALUE",
    shortDescription: "Tailored for company executives and sales managers with complimentary breakfast, high-speed Wi-Fi, and laundry discount.",
    fullDescription: "Convenient stay near the railway station and city commercial hub with seamless internet, work table, and quick check-in.",
    validity: "Valid on all corporate bookings",
    inclusions: [
      "Executive AC Room with Work Desk",
      "Complimentary Hot Breakfast at Restaurant",
      "High-Speed Fiber Wi-Fi Access",
      "15% Discount on Restaurant Food Bills",
      "Same-Day Express Laundry Service"
    ],
    startingPrice: "₹2,500 / Night",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
    isDemoSample: true,
  },
  {
    id: "weekend-family-pilgrim",
    slug: "weekend-family-pilgrim",
    title: "Family Pilgrimage & Weekend Stay",
    category: "Stay",
    tag: "Family Package",
    discountBadge: "FAMILY SPECIAL",
    shortDescription: "Spacious Family Suite with comfortable accommodation for 4 adults, free Wi-Fi, and temple travel assistance.",
    fullDescription: "Make your family temple visit relaxed and comfortable in our spacious 4-bed family suite with prompt room service and pure veg meals.",
    validity: "Valid across all weekends & holidays",
    inclusions: [
      "Executive Family Suite with 2 Queen Beds",
      "Complimentary Breakfast for the whole family",
      "Early check-in support (subject to availability)",
      "Temple and local sightseeing cab booking support"
    ],
    startingPrice: "₹3,800 / Family / Night",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
    isDemoSample: true,
  }
];
