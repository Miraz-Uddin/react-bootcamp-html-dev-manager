import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@utils": `${path.resolve(__dirname, "./src/utils/")}`,
      "@assets": `${path.resolve(__dirname, "./src/assets/")}`,
      "@pages": `${path.resolve(__dirname, "./src/pages/")}`,
      "@shared": `${path.resolve(__dirname, "./src/components/shared/")}`,
      "@notes": `${path.resolve(__dirname, "./src/components/notes/")}`,
      "@profile": `${path.resolve(__dirname, "./src/components/profile/")}`,
      "@auth": `${path.resolve(__dirname, "./src/components/auth/")}`,
    },
  },
});
