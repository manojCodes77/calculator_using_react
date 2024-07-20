import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/calculator_with_tailwind/',
  plugins: [react()],
  build: {
    outDir: 'dist',  // Ensure this matches your build directory
  },
})
