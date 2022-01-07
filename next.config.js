/** @type {import('next').NextConfig} */
module.exports = {
  "noImplicitAny": false,
  images: {
    domains: [
      's.gravatar.com',
      'lh3.googleusercontent.com',
      'res.cloudinary.com',
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
