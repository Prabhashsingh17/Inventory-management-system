/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  // API routes are automatically available as serverless functions
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};
