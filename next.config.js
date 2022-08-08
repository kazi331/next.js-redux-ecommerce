/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ['fakestoreapi.com', 'i.postimg.cc', 'i.ibb.co'],
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
