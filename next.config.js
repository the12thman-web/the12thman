/**
 * @type {import('next').NextConfig}
 */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  staticPageGenerationTimeout: 2000,
  images: {
    //enter the domain or subdomain where you have WordPress installed
    domains: ['i0.wp.com', 'backendrsw.the12thman.in'],
  },
  // your Next.js configuration
})