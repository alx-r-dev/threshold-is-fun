/// <reference types="vitest/config" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  test: {
    include: ["src/test/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"]
  },
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]]
      }
    })
  ]
});
