import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => {
  return {
    base: command === "build" ? "/Portfolio/" : "/",
    plugins: [react()],
  };
});
