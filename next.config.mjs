import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ["tsx", "md", "mdx"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.modrinth.com",
      },
    ],
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
