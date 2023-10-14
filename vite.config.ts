import { defineConfig } from "vite";
import path from "path";
import pkg from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: {
        web: path.resolve(__dirname, "core/web/index.ts"),
        wxapp: path.resolve(__dirname, "core/wxapp/index.ts"),
        h5: path.resolve(__dirname, "core/h5/index.ts"),
        common: path.resolve(__dirname, "core/common/index.ts"),
      },
      name: pkg.name,
      fileName: () => `[name]/index.js`,
    },
    outDir: "lib",
    rollupOptions: {
      // 确保每个子模块打包的产物都是独立的
      external: [
        "@batar/utils/core/web",
        "@batar/utils/core/wxapp",
        "@batar/utils/core/h5",
        "@batar/utils/core/common",
      ],
    },
  },
});
