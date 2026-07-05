/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export so the site can be served by GitHub Pages.
  output: "export",
  // Project Pages are served from /<repo>/, so all routes/assets need this prefix.
  basePath: "/vibecoding-for-aisulu",
  // Emit folder/index.html for clean URLs on Pages.
  trailingSlash: true,
  // next/image optimization is unavailable in a static export.
  images: { unoptimized: true },
};

export default nextConfig;
