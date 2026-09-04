import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const activeKey = process.env.GEMINI_API_KEY || (env.GEMINI_API_KEY && env.GEMINI_API_KEY !== 'PLACEHOLDER_API_KEY' ? env.GEMINI_API_KEY : '') || "AIzaSyBEqysd-OroYv_s4h3ez1sGbMnY-7OOekA";
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(activeKey),
        'process.env.GEMINI_API_KEY': JSON.stringify(activeKey)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
