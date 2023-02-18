const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    unoptimized: true,
    //enter the domain or subdomain where you have WordPress installed
    domains: ['i0.wp.com', 'https://staging.the12thman.in'],
  },
  staticPageGenerationTimeout: 1000,
});

module.exports = nextConfig;
