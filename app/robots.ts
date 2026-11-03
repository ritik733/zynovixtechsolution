import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/changes"],
    },
    sitemap: "https://zynovixtechsolutions.com/sitemap.xml",
  };
}
