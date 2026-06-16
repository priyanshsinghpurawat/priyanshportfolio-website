import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import Sitemap from "vite-plugin-sitemap";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    imagetools(),
    tsconfigPaths(),
    Sitemap({
      hostname: "https://priyanshsinghpurawat.github.io", // Adjust this later when the domain is final
      dynamicRoutes: [
        "/projects/ecommerce-mern",
        "/projects/aspect-ratio-calculator",
        "/projects/notes-app",
        "/projects/exchange-rate",
        "/writing/bca-self-taught-mern",
        "/writing/why-i-switched-to-vite",
      ],
    }),
  ],
  server: {
    host: "::",
    port: 8080,
  },
});
