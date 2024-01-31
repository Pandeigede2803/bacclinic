/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ik.imagekit.io',"randomuser.me"],
  },
  // ... any other configurations
};

module.exports = nextConfig;