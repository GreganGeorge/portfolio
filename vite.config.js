// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 2000, // Adjust chunk size warning limit as needed
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Example: Manually define chunks
          if (id.includes('node_modules')) {
            return 'vendor'; // Group all node_modules into a vendor chunk
          }
        },
      },
    },
  },
});
