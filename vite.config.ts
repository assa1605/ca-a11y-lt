import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import fs from "fs-extra";

// ビルド後にRiveファイルをコピーする
const copyRiveFiles = () => {
  return {
    name: "copy-rive-files",
    closeBundle: async () => {
      await fs.copy("src/assets/rive", "dist/assets/rive", { overwrite: true });
    }
  };
};

export default defineConfig({
  plugins: [vue(), copyRiveFiles()],
  publicDir: "public",
  assetsInclude: ["**/*.riv"],
  build: {
    assetsInlineLimit: 0
  },
  server: {
    fs: {
      // publicディレクトリへのアクセスを許可
      allow: ["public"]
    }
  }
});
