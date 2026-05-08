import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  // Explicit root-relative base — required when deploying to a domain root.
  // Change to '/subfolder/' only if the site ever lives in a subdirectory.
  base: '/',

  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },

  server: {
    port: 5173,
    host: true,
  },
});

