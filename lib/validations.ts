import { z } from "zod";

export const roomBookingEnquirySchema = z.object({
  checkIn: z.string().min(1, "Check-in date is required"),
  checkOut: z.string().min(1, "Check-out date is required"),
  rooms: z.coerce.number().min(1, "At least 1 room is required").max(10, "Maximum 10 rooms per online enquiry"),
  adults: z.coerce.number().min(1, "At least 1 adult is required").max(20, "Please contact front desk for larger groups"),
  children: z.coerce.number().min(0, "Children cannot be negative").max(10),
  roomType: z.string().min(1, "Please select a preferred room or suite"),
  guestName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number (at least 10 digits)"),
  specialRequests: z.string().optional(),
}).refine(
  (data) => {
    if (!data.checkIn || !data.checkOut) return true;
    return new Date(data.checkOut) > new Date(data.checkIn);
  },
  {
    message: "Check-out date must be strictly after Check-in date",
    path: ["checkOut"],
  }
);

export type RoomBookingEnquiryInput = z.infer<typeof roomBookingEnquirySchema>;

export const eventEnquirySchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email address is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  companyOrFamily: z.string().optional(),
  eventType: z.enum(["wedding", "reception", "corporate_conference", "product_launch", "birthday_party", "anniversary", "other"], {
    errorMap: () => ({ message: "Please select an event type" }),
  }),
  preferredHall: z.string().min(1, "Please select your preferred banquet hall"),
  expectedGuests: z.coerce.number().min(10, "Minimum 10 guests for banquet enquiries").max(1500, "For over 1500 guests, please call directly"),
  eventDate: z.string().min(1, "Event date is required"),
  eventDuration: z.enum(["half_day", "full_day", "multi_day"], {
    errorMap: () => ({ message: "Please select event duration" }),
  }),
  cateringRequirement: z.enum(["veg_only", "non_veg_both", "high_tea_only", "custom_menu"], {
    errorMap: () => ({ message: "Please choose catering requirement" }),
  }),
  specialNotes: z.string().optional(),
});

export type EventEnquiryInput = z.infer<typeof eventEnquirySchema>;

export const diningEnquirySchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  restaurant: z.string().min(1, "Please select a restaurant"),
  date: z.string().min(1, "Reservation date is required"),
  timeSlot: z.string().min(1, "Preferred time is required"),
  guestsCount: z.coerce.number().min(1, "At least 1 guest required").max(30, "For groups larger than 30, please contact banquet team"),
  seatingPreference: z.enum(["indoor", "outdoor_garden", "private_dining", "bar_lounge"], {
    errorMap: () => ({ message: "Please select a seating preference" }),
  }),
  dietaryOrOccasion: z.string().optional(),
});

export type DiningEnquiryInput = z.infer<typeof diningEnquirySchema>;

export const contactMessageSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  department: z.enum(["general", "rooms", "banquets", "dining", "careers", "feedback"], {
    errorMap: () => ({ message: "Please select a department" }),
  }),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export type ContactMessageInput = z.infer<typeof contactMessageSchema>;
