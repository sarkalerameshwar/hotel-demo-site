export interface Testimonial {
  id: string;
  author: string;
  roleOrCity: string;
  stayType: "Family Vacation" | "Royal Wedding" | "Corporate Summit" | "Weekend Retreat" | "Dining Experience";
  rating: number;
  date: string;
  title: string;
  comment: string;
  avatar: string;
  isDemoSample: boolean;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "t-1",
    author: "Vikram & Ananya Singhania",
    roleOrCity: "Mumbai",
    stayType: "Royal Wedding",
    rating: 5,
    date: "Sample Stay - November 2024",
    title: "An unforgettably regal wedding experience for our 600 guests",
    comment: "The Grand Celebration Ballroom exceeded every dream we had for our daughter's wedding. The banquet staff managed our multi-day sangeet and reception seamlessly, the Awadhi catering was sublime, and the hospitality made every guest feel like royalty.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    isDemoSample: true,
  },
  {
    id: "t-2",
    author: "Dr. Rajeshwar Oberoi",
    roleOrCity: "London / New Delhi",
    stayType: "Family Vacation",
    rating: 5,
    date: "Sample Stay - January 2025",
    title: "Flawless comfort, neat rooms, and exceptional service",
    comment: "From the seamless check-in to the peaceful, comfortable AC rooms and delicious North & South Indian meals, Hotel Green Park provided our family with warmth, unmatched comfort, and memorable hospitality.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    isDemoSample: true,
  },
  {
    id: "t-3",
    author: "Pooja Malhotra",
    roleOrCity: "Bengaluru",
    stayType: "Corporate Summit",
    rating: 5,
    date: "Sample Stay - December 2024",
    title: "Top-tier conference facilities and immaculate high-speed connectivity",
    comment: "We hosted our Asia-Pacific annual executive summit in the Royal Crystal Hall. The hybrid AV setup, prompt IT concierge, and executive high-tea buffets kept our delegates impressed throughout the three-day convention.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    isDemoSample: true,
  },
  {
    id: "t-4",
    author: "Sameer & Radhika Kapoor",
    roleOrCity: "Chandigarh",
    stayType: "Weekend Retreat",
    rating: 5,
    date: "Sample Stay - February 2025",
    title: "The Royal Heritage Suite and the Soma Spa were pure rejuvenation",
    comment: "The bespoke butler service, private jacuzzi, and 36-hour slow cooked Dal at The Royal Saffron made our anniversary weekend stay extraordinarily special. We cannot wait to return.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    isDemoSample: true,
  }
];
