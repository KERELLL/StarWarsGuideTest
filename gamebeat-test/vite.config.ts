/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, normalizePath } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

export default defineConfig({
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        dir: "build",
        entryFileNames: (chunkInfo): string => {
          return `js/${normalizePath(chunkInfo.name).replace(
            /(?<=.+\/).+?\./,
            ""
          )}.[hash].js`;
        },
        assetFileNames: (assetInfo): string => {
          if (assetInfo.name?.endsWith(".css")) {
            return "chunked-css-components/index.[hash].css";
          } else {
            return `assets/${normalizePath(assetInfo.name!)}`;
          }
        },
        chunkFileNames: `chunked-script-components/[name]-[hash].js`,
      },
    },
  },
  server: {
    port: 3000,
    open: "/",
    host: "localhost",
    hmr: true,
    cors: {
      origin: "*",
      methods: ["OPTIONS", "GET"],
      maxAge: 2592000,
    },
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@redux": path.resolve(__dirname, "./src/redux"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
  },
});
