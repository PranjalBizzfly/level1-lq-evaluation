import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/", destination: "/lq-evaluation", permanent: false }];
  },
};

export default nextConfig;
