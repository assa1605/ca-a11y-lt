import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo?.name?.endsWith(".riv")) {
            return "assets/rive/[name][extname]";
          }
          return "assets/[name]-[hash][extname]";
        }
      }
    }
  },
  publicDir: "public"
});
