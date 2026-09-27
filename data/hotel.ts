export interface HotelConfig {
  name: string;
  tagline: string;
  subtagline: string;
  shortDescription: string;
  fullDescription: string;
  brandName: string;
  establishedYear: number;
  contact: {
    phone: string;
    phoneDisplay: string;
    secondaryPhone: string;
    email: string;
    bookingEmail: string;
    eventsEmail: string;
    whatsapp: string;
    whatsappLink: string;
    address: {
      street: string;
      locality: string;
      city: string;
      state: string;
      pincode: string;
      country: string;
      landmark: string;
    };
    openingHours: {
      frontDesk: string;
      concierge: string;
      checkIn: string;
      checkOut: string;
    };
    socials: {
      instagram: string;
      facebook: string;
      google: string;
    };
  };
  metrics: {
    roomsCount: number;
    banquetCapacity: number;
    yearsOfExcellence: number;
    satisfactionRate: string;
  };
  images: {
    hero: string;
    about: string;
    exteriorNight: string;
    exteriorDay: string;
    lobby: string;
    restaurant: string;
    banquet: string;
    ctaBanner: string;
  };
}

export const hotelConfig: HotelConfig = {
  name: "Hotel Green Park",
  brandName: "Hotel Green Park & Executive Banquet",
  tagline: "Comfort, Warmth & Gracious Hospitality",
  subtagline: "Your premier destination for comfortable AC stays, family dining, and memorable marriage celebrations.",
  shortDescription:
    "Located conveniently in the heart of the city, Hotel Green Park offers well-appointed AC rooms, multi-cuisine family dining, and a spacious AC banquet hall for weddings, ring ceremonies, and corporate meets.",
  fullDescription:
    "Whether visiting for business, family pilgrimages, or hosting grand marriage celebrations, Hotel Green Park welcomes you with warm Indian hospitality, spotless rooms, 24-hour room service, and secure parking.",
  establishedYear: 2016,
  contact: {
    phone: "+919876543210",
    phoneDisplay: "+91 98765 43210",
    secondaryPhone: "+91 (0217) 2345678",
    email: "info@hotelgreenpark.com",
    bookingEmail: "bookings@hotelgreenpark.com",
    eventsEmail: "banquets@hotelgreenpark.com",
    whatsapp: "+919876543210",
    whatsappLink: "https://wa.me/919876543210?text=Hello%20Hotel%20Green%20Park,%20I%20would%20like%20to%20enquire%20about%20a%20room%20or%20banquet%20booking.",
    address: {
      street: "Station Road, Near City Central Square",
      locality: "Opposite Town Hall",
      city: "City Center",
      state: "Maharashtra",
      pincode: "413001",
      country: "India",
      landmark: "5 Mins from Railway Station & Bus Stand",
    },
    openingHours: {
      frontDesk: "24 Hours / 7 Days",
      concierge: "06:00 AM – 11:30 PM",
      checkIn: "12:00 PM (Noon)",
      checkOut: "11:00 AM",
    },
    socials: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      google: "https://google.com/maps",
    },
  },
  metrics: {
    roomsCount: 45,
    banquetCapacity: 500,
    yearsOfExcellence: 9,
    satisfactionRate: "4.6 / 5.0",
  },
  images: {
    hero: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=80",
    about: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    exteriorNight: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    exteriorDay: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    lobby: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
    restaurant: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    banquet: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    ctaBanner: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1800&q=85",
  },
};
