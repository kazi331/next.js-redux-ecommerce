/** @type {import('next').NextConfig} */
const withPWA  = require('next-pwa')
const nextConfig = {
  pwa: {
    dest: 'public',
    // register: true,
    // scope: '/app',
    // sw: 'service-worker.js',
    disable: process.env.NODE_ENV === 'development',
  },
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ['fakestoreapi.com', 'i.postimg.cc', 'i.ibb.co', 'cdn.discordapp.com', 'avatars.githubusercontent.com', 'i.imgur.com', 'lh3.googleusercontent.com'],
  },
  redirects: async() => {
    return[
      {
        source: '/registration',
        destination: '/register',
        permanent: true
      }
    ]
  }
}

module.exports = withPWA(nextConfig)


