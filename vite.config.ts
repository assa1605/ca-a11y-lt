import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  publicDir: "public",
  assetsInclude: ["**/*.riv"],
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo?.name?.endsWith(".riv")) {
            return "assets/[name][extname]";
          }
          return "assets/[name]-[hash][extname]";
        }
      }
    }
  },
  server: {
    fs: {
      // publicディレクトリへのアクセスを許可
      allow: ["public"]
    }
  }
});
