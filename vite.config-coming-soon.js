import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: 'index-coming-soon.html',
    },
  },
  server: {
    port: 5174,
    host: true,
    open: '/index-coming-soon.html',
  },
});
