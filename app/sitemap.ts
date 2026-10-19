import { MetadataRoute } from "next";
import { services } from "@/data/services";
import { portfolioProjects } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://zynovixtechsolutions.com";

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/team",
    "/careers",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}${service.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const portfolioRoutes = portfolioProjects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug || project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...portfolioRoutes];
}
