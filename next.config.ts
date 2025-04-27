import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Allow production builds to complete even with ESLint errors:
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
