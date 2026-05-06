import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xiphiasimmigration.com",
      },
      {
        protocol: "https",
        hostname: "www.xiphiasimmigration.com",
      },
    ],
  },
};

export default nextConfig;
