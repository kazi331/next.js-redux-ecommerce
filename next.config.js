/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ['fakestoreapi.com', 'i.postimg.cc', 'i.ibb.co'],
  },
}

module.exports = nextConfig
