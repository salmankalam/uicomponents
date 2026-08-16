import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, "src/hybrid-main.tsx"),
    },
    outDir: "C:\\Users\\salma\\Studio\\21st-showcase\\wp-content\\themes\\twentyfirst-showcase\\assets\\hybrid",
    emptyOutDir: true,
  },
  base: "",
});
