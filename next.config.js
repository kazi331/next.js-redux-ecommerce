/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['fakestoreapi.com', 'i.postimg.cc', 'i.ibb.co'],
  },
}

module.exports = nextConfig
