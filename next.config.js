/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  images: {
    domains: ['github.com', 'raw.githubusercontent.com', 'avatars.githubusercontent.com'],
    unoptimized: true,
  },
  output: 'standalone',
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};

module.exports = nextConfig;
