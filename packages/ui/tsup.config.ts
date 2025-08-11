import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  dts: false,
  format: ["esm"],
  outDir: "dist",
});
