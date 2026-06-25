import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: false,

  logging: {
    browserToTerminal: false,
  },

  allowedDevOrigins: ["10.253.104.149", "10.193.166.149"],
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
