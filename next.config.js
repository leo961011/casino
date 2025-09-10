/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enable strict mode (optional but recommended)
  swcMinify: true, // Enabling SWC minifier (recommended for production)
  images: {
    domains: ['yourdomain.com'], // Allow external domains for image optimization (if you're using external image sources)
  },
  i18n: {
    locales: ['en', 'es'], // Example for internationalization
    defaultLocale: 'en',
  },
  // Other custom settings here...
};

module.exports = nextConfig;
