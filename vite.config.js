import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  build: {
    minify: 'esbuild',  // Use esbuild for minification in production
    sourcemap: false,   // Disable sourcemaps for production (optional)
  },
  define: {
    'process.env.NODE_ENV': '"production"',  // Ensure production mode
  },
  server: {
    host: '0.0.0.0',    // This binds the app to all network interfaces, making it externally accessible
    port: 5173,         // Specify the port you'd like to use
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
