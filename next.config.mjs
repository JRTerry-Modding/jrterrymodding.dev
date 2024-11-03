/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.modrinth.com",
      },
    ],
  },
};

export default nextConfig;
