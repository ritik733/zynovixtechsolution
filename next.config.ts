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
};

export default nextConfig;