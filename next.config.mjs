/** @type {import('next').NextConfig} */
// next.config.mjs
import nextVideos from 'next-videos';

/** @type {import('next').NextConfig} */
const nextConfig = nextVideos({
  webpack(config) {
    return config;
  },
  
});


export default nextConfig;


