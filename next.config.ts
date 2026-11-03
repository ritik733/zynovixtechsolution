import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "192.168.1.2",
    "192.168.1.8",
    "192.168.137.1",
    "*.local",
  ],
  compress: true,
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "simple-icons",
      "framer-motion",
    ],
    viewTransition: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
