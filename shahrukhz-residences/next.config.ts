import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export: deploy the `out/` folder to any host or CDN.
  output: "export",
  // No image server in a static export; the images in public/ are already sized and compressed.
  images: { unoptimized: true },
};

export default nextConfig;
