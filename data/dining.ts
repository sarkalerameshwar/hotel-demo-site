export interface MenuItem {
  id: string;
  name: string;
  category: "appetizer" | "main" | "dessert" | "beverage" | "breakfast";
  cuisine: string;
  description: string;
  price: number;
  isVegetarian: boolean;
  isChefSpecial: boolean;
  isSpicy?: boolean;
}

export interface RestaurantVenue {
  id: string;
  slug: string;
  name: string;
  type: string;
  tagline: string;
  description: string;
  dressCode: string;
  cuisine: string;
  seatingCapacity: number;
  image: string;
  gallery: string[];
  timings: {
    breakfast?: string;
    lunch?: string;
    dinner?: string;
    allDay?: string;
  };
  features: string[];
  signatureDishes: string[];
}

export const restaurantsData: RestaurantVenue[] = [
  {
    id: "green-park-family-restaurant",
    slug: "green-park-family-restaurant",
    name: "Green Park Multi-Cuisine Family Restaurant",
    type: "Family Restaurant & Pure Veg Section",
    tagline: "Delicious North Indian, Maharashtrian, Chinese & Tandoor delicacies",
    description: "A welcoming, air-conditioned family restaurant serving mouth-watering paneer gravies, tandoori starters, aromatic biryanis, and traditional Maharashtrian thalis with separate seating sections for families.",
    dressCode: "Casual",
    cuisine: "North Indian, Maharashtrian, South Indian & Chinese",
    seatingCapacity: 90,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
    ],
    timings: {
      breakfast: "07:00 AM – 10:30 AM",
      lunch: "12:00 PM – 03:30 PM",
      dinner: "07:00 PM – 11:00 PM",
    },
    features: [
      "Separate Air-Conditioned Family Dining Section",
      "Delicious Pure Veg & Non-Veg Multi-Cuisine Menu",
      "Fast & Prompt 24/7 Room Service Delivery",
      "Authentic Tandoor Oven & Fresh Bread Station"
    ],
    signatureDishes: [
      "Paneer Butter Masala & Garlic Naan",
      "Green Park Special Veg Handi",
      "Hyderabadi Dum Biryani with Raita",
      "Hot Gulab Jamun with Ice Cream"
    ]
  }
];

export const sampleMenuItems: MenuItem[] = [
  {
    id: "m-1",
    name: "Paneer Tikka Tandoori",
    category: "appetizer",
    cuisine: "North Indian",
    description: "Fresh cottage cheese cubes marinated in spiced yogurt and grilled to golden perfection in the clay tandoor.",
    price: 260,
    isVegetarian: true,
    isChefSpecial: true,
  },
  {
    id: "m-2",
    name: "Veg Crispy & Spring Rolls",
    category: "appetizer",
    cuisine: "Chinese",
    description: "Assorted garden vegetables tossed in sweet and spicy chili sauce with fried noodles.",
    price: 210,
    isVegetarian: true,
    isChefSpecial: false,
  },
  {
    id: "m-3",
    name: "Green Park Special Paneer Handi",
    category: "main",
    cuisine: "North Indian",
    description: "Soft paneer cubes cooked in rich cashew-tomato gravy, seasoned with aromatic spices in a copper handi.",
    price: 280,
    isVegetarian: true,
    isChefSpecial: true,
  },
  {
    id: "m-4",
    name: "Veg Dum Biryani with Raita",
    category: "main",
    cuisine: "Indian",
    description: "Fragrant long-grain Basmati rice cooked with fresh seasonal vegetables and authentic biryani spices.",
    price: 240,
    isVegetarian: true,
    isChefSpecial: true,
  },
  {
    id: "m-5",
    name: "Dal Tadka with Jeera Rice",
    category: "main",
    cuisine: "Indian",
    description: "Yellow lentils tempered with pure ghee, cumin, garlic, and fresh green chilies.",
    price: 180,
    isVegetarian: true,
    isChefSpecial: false,
  },
  {
    id: "m-6",
    name: "Hot Gulab Jamun (2 Pcs)",
    category: "dessert",
    cuisine: "Dessert",
    description: "Traditional soft milk dumplings soaked in cardamom-infused rose sugar syrup.",
    price: 80,
    isVegetarian: true,
    isChefSpecial: false,
  }
];
