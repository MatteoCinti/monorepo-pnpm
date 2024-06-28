import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
// @ts-expect-error - eslintPlugin is not typed
import eslintPlugin from 'vite-plugin-eslint';

import routes from './src/config/routes.config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      include: ['src/**/*.ts', 'src/**/*.tsx']
    })
  ],
  server: {
    proxy: {
      '/api': {
        target: routes.BACKEND_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/\/api/, ''),
        secure: false
      }
    }
  }
});
