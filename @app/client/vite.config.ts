import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
// @ts-expect-error - eslintPlugin is not typed
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      include: ['src/**/*.ts', 'src/**/*.tsx']
    })
  ]
});
