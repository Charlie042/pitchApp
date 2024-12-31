import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    dangerouslyAllowSVG: true,
    remotePatterns:[
      {
        protocol:"https",
        hostname: "avatars.githubusercontent.com"
      },
      {
        protocol:"https",
        hostname: "placehold.co"
      }
    ]
  }
};

export default nextConfig;
