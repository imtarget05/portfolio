/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com', 'raw.githubusercontent.com', 'avatars.githubusercontent.com'],
    unoptimized: true,
  },
  output: 'standalone',
};

module.exports = nextConfig;