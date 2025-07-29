import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0", // Correct format, no colons
    port: 8080, // Any valid number
    allowedHosts: ['rastaa.onrender.com'], // Allow only this host
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
