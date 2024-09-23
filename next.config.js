/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "https://s3.us-west-2.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
