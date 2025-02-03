/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', '127.0.0.1', 'oazisvendeglo.hu', 'www.oazisvendeglo.hu'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'oazisvendeglo.hu',
        pathname: '/media/**',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.oazisvendeglo.hu',
        pathname: '/media/**',
        port: '',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/mediaa/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        pathname: '/mediaa/**',
      },
    ],
  },
};

module.exports = nextConfig;