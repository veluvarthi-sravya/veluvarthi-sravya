import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"https://veluvarthi-sravya.github.io/",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
