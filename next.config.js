/** @type {import('next').NextConfig} */
const nextConfig = {
  modularizeImports: {
        "react-icons/?(((\\w*)?/?)*)": {
            transform: "@react-icons/all-files/{{ matches.[1] }}/{{ member }}",
            skipDefaultConversion: true
        }
    },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com'

      },
      {
        protocol: 'https',
        hostname: "firebasestorage.googleapis.com"

      },
      {
        protocol: 'https',
        hostname: "res.cloudinary.com"

      },
    ],
  },

}

module.exports = nextConfig
