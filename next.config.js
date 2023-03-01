// const withPWA = require('next-pwa')({
//   dest: 'public',
//   register: true,
//   skipWaiting: true,
// });

const nextConfig = {
  reactStrictMode: true,
  images: {
    optimized: true,
    //enter the domain or subdomain where you have WordPress installed
    domains: ['i0.wp.com', 'https://12thmanstaging.the12thman.in'],
  },
  staticPageGenerationTimeout: 1000,
};

// const nextConfig = withPWA({
//   reactStrictMode: true,
//   output: 'standalone',
//   images: {
//     unoptimized: true,
//     //enter the domain or subdomain where you have WordPress installed
//     domains: ['i0.wp.com', 'https://12thmanstaging.the12thman.in'],
//   },
//   staticPageGenerationTimeout: 1000,
// });

module.exports = nextConfig;
