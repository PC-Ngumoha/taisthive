/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    // domains: ['i.ibb.co']
    remotePatterns: [
      {
        hostname: 'i.ibb.co'
      }
    ]
  }
};

export default nextConfig;
