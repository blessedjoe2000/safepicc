/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "utfs.io" },
      { hostname: "s4sya57j5i.ufs.sh" },
    ],
  },
};

export default nextConfig;
