import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hotelgreenpark.demo";

  const staticRoutes = [
    "",
    "/rooms",
    "/rooms/deluxe-ac-room",
    "/rooms/executive-ac-room",
    "/rooms/family-suite-room",
    "/rooms/presidential-suite",
    "/banquets",
    "/banquets/grand-green-park-hall",
    "/banquets/executive-conference-hall",
    "/dining",
    "/amenities",
    "/gallery",
    "/about",
    "/contact",
    "/booking",
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/rooms") || route.startsWith("/banquets") ? 0.9 : 0.8,
  }));
}
