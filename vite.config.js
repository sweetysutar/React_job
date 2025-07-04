import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import { rewriter } from 'json-server'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  server: {
    port: 3000,
    proxy: {
      '/api': {
      target: 'https://react-job-ne10.onrender.com',
      changeOrigin: 'true',
      rewrite: (path) => path.replace(/^\/api/, ''),
    }
  },
    hmr: {
      overlay: false
    }
  }
})
