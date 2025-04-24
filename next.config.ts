import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'ibb.co'
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com'
      },
      {
        protocol: 'https',
        hostname: 'www.zohowebstatic.com'
      },
      {
        protocol: 'https',
        hostname: 'play-lh.googleusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'revenueflo.com'
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co'
      }
    
    ],
  },
};

export default nextConfig;
