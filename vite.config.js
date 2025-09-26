import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'node_modules'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "/src/styles/theme.scss";`, // Optional global imports
      },
    },
  },
})
