/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "practice-templates.vercel.app",
      },
    ],
  },
};

module.exports = nextConfig;
