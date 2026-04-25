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
  async headers() {
    return [
      {
        // Target semua file di dalam folder public/assets
        source: '/assets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            // Cache di browser dan CDN selama 1 tahun (31536000 detik)
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
