import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build : {
    rollupOptions: {
      main: resolve(root, 'index.html'),
      aboutme: resolve(root, 'test.html'),
      home: resolve(root, 'home.html')
    }
  }
})

