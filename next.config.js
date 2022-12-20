/** @type {import('next').NextConfig} */
const API_KEY = "189978b586e381358bafab5d8d93fd22";
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: "/api/movie",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      },
    ]
  }
}


module.exports = nextConfig
