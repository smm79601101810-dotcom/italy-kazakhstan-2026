import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 800,
    // Three.js + R3F are loaded via dynamic import in Hero,
    // bundler keeps them in a separate chunk automatically.
  },
});
