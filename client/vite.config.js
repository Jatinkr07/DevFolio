import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    rollupOptions: {
      input: "./src/main.jsx", // Make sure this points to your actual entry file
    },
  },
  optimizeDeps: {
    include: ["some-package", "another-package"],
  },
});
