import type { NextConfig } from "next";

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === "development",
  workboxOptions: {
    disableDevLogs: true,
  },
});

const nextConfig: NextConfig = {
  // --- INI KUNCINYA UNTUK NEXT.JS 16 ---
  // Kita beri tahu Next.js untuk mematikan Turbopack khusus untuk build ini
  // karena PWA plugin saat ini hanya support Webpack.
  webpack: (config: any) => {
    return config;
  },
};

// --- JANGAN LUPA BAGIAN INI: BUNGKUS CONFIG-NYA! ---
export default withPWA(nextConfig);
