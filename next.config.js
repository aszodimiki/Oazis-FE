/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', '127.0.0.1', 'oazisvendeglo.hu', 'www.oazisvendeglo.hu'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'oazisvendeglo.hu',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: 'www.oazisvendeglo.hu',
        pathname: '/media/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/media/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        pathname: '/media/**',
      },
    ],
  },
};

module.exports = nextConfig;