/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig
