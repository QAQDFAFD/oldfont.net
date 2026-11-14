/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Indexed subpages have no trailing slash. Do not set trailingSlash: true;
  // that would 301 every crawled URL onto a new path.
  trailingSlash: false,
  // The built-in slash redirect is a 308 that runs before middleware and keeps
  // the www host. Middleware sends one 301 straight to the apex URL instead.
  skipTrailingSlashRedirect: true,
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
