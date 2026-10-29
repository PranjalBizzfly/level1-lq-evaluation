import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optional separate output folder so a verification build doesn't disturb a running dev server.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  async redirects() {
    return [{ source: "/", destination: "/lq-evaluation", permanent: false }];
  },
};

export default nextConfig;
