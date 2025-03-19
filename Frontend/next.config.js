/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/suggest',  // Local proxy endpoint
        destination: 'https://script.google.com/macros/s/AKfycbyK9sH0Ztag3Dakoq4lIa4mSEqtYGPIXf6EiwtcQShTrGns-Ssuf0cA-rsEd58IHjBp/exec', // Google Script URL
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
