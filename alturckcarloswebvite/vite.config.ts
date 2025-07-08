import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(() => {
  // Use root path for custom domain
  return {
    plugins: [react(), tailwindcss()],
    base: "/",
  };
});
