import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  base: './', // ДОБАВЬТЕ ЭТУ СТРОЧКУ - это важно для GitHub Pages!
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
