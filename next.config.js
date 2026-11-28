/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  images: {
    domains: ['github.com', 'raw.githubusercontent.com', 'avatars.githubusercontent.com'],
    unoptimized: true,
  },
  // 'standalone' for Render/Docker deployment
  // For Cloudflare Pages, use @cloudflare/next-on-pages adapter which reads this output
  output: 'standalone',
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
  // Experimental flags for better Cloudflare compatibility
  experimental: {
    // Enable server components optimization for edge
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  // Headers for security and caching
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, OPTIONS, POST' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
        ],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
  // Redirects for canonical URLs
  async redirects() {
    return [
      { source: '/portfolio', destination: '/', permanent: true },
      { source: '/work', destination: '/#projects', permanent: true },
    ];
  },
};

module.exports = nextConfig;
