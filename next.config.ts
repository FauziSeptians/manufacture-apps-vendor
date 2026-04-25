import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Mengizinkan semua domain dengan protokol https
      },
      {
        protocol: 'http',
        hostname: '**', // Mengizinkan semua domain dengan protokol http
      },
    ],
  },
};

export default nextConfig;
