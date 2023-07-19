/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  images: {
    //enter the domain or subdomain where you have WordPress installed
    domains: ['i0.wp.com', 'backendrsw.the12thman.in'],
  },
};

module.exports = nextConfig;
