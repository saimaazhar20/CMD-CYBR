import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-icons']
  },
  images: {
    unoptimized: true
  }
};

export default nextConfig;
