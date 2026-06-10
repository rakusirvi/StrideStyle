import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  logging: {
    browserToTerminal: true,
  },
};

export default nextConfig;
