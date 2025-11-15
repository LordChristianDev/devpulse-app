import { defineConfig, loadEnv } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [svelte()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      }
    },
    define: {
      'process.env': loadEnv(mode, '../'),
    },
    envDir: '../',
    build: {
      outDir: 'dist',
      emptyOutDir: true
    },
  };
});