// const {withNextVideo}= reuire('next-video/process')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // localPatterns: [
    //   {
    //     pathname: '/assets/**',
    //     search: "",
    //   },
    // ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
