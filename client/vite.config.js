import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: true, // or use '0.0.0.0' to specify the host
    port: 3000, // or another port
  },
});
