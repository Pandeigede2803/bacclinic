/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ik.imagekit.io',"randomuser.me","images.unsplash.com"],
  },
  // ... any other configurations
};

module.exports = nextConfig;