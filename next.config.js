/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:[
    {
      protocol: "https",
      hostname: "m.media-amazon.com",
      pathname: "/**",
    },
  ],
};

module.exports = nextConfig
