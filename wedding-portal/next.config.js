/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '',
  images: {
    unoptimized: true,
  },
  assetPrefix: 'https://phoebelin.github.io',
  trailingSlash: true,
};

module.exports = nextConfig; 