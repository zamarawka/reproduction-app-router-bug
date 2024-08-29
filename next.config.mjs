/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
    ppr: true,
    reactCompiler: true,
    cssChunking: 'strict',
  }
};

export default nextConfig;
