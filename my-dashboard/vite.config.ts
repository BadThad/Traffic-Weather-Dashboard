import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/trafikverket': {
        target: 'https://api.trafikinfo.trafikverket.se',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/trafikverket/, ''),
      },
    },
  },
});
