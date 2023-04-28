const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

// const nextConfig = {
//   reactStrictMode: true,
//   output: 'standalone',
//   images: {
//     //enter the domain or subdomain where you have WordPress installed
//     domains: ['i0.wp.com', 'https://backend.the12thman.in'],
//   },
//   staticPageGenerationTimeout: 1000,
// };

const nextConfig = withPWA({
  reactStrictMode: true,
  output: 'standalone',
  images: {
    //enter the domain or subdomain where you have WordPress installed
    domains: ['i0.wp.com', 'backend.the12thman.in'],
  },
  staticPageGenerationTimeout: 1000,
  // async redirects() {
  //   return [
  //     {
  //       source: '/:path',
  //       destination: '/post/:path',
  //       permanent: true,
  //     },
  //   ];
  // },
});

module.exports = nextConfig;
