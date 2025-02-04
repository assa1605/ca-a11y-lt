import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import fs from "fs-extra";

// ビルド後にRiveファイルをコピーする
const copyRiveFiles = () => {
  return {
    name: "copy-rive-files",
    writeBundle: async () => {
      try {
        // src/assets/riveからdistにコピー
        const files = await fs.readdir("src/assets/rive");
        console.log("Found Rive files:", files);

        for (const file of files) {
          if (file.endsWith(".riv")) {
            const sourcePath = `src/assets/rive/${file}`;
            const targetPath = `dist/assets/rive/${file}`;

            // ディレクトリが存在することを確認
            await fs.ensureDir("dist/assets/rive");

            // ソースファイルの存在確認
            const sourceExists = await fs.pathExists(sourcePath);
            console.log(`Source file ${sourcePath} exists: ${sourceExists}`);

            await fs.copy(sourcePath, targetPath, { overwrite: true });

            // コピー後のファイルの存在確認
            const targetExists = await fs.pathExists(targetPath);
            console.log(
              `Copied ${file} to ${targetPath}, exists: ${targetExists}`
            );
          }
        }
      } catch (error) {
        console.error("Error copying Rive files:", error);
      }
    }
  };
};

export default defineConfig({
  plugins: [vue(), copyRiveFiles()],
  assetsInclude: ["**/*.riv"],
  build: {
    assetsInlineLimit: 0,
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/slides.md")
      }
    }
  }
});
