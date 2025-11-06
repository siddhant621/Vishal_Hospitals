import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../Hospital/static/frontend",  
    emptyOutDir: true,                      
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
