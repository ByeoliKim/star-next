/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movie",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source:"/api/movies/:id",
        // /api/movies/12 같은 경로로 접근했을 때 실행될 거임
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
        // source 와 destination 에 들어가는 명칭을 동일하게 해 주자!
      },
    ];
  },
}


module.exports = nextConfig
