import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin(), require("tailwindcss"), require("autoprefixer")],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
