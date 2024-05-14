/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'links.papareact.com',
      },
      {
        protocol: 'https',
        hostname: 'image.clerk.com',
      },
      {
        protocol: 'https',
        hostname: 'linkedinclone.blob.core.windows.net',
      },
    ],
  },
};

export default nextConfig;
