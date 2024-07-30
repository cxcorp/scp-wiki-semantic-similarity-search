import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";

if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: ".env.production" });
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env["VITE_BASE_PATH"],
});
