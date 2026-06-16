import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize build output
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true,
      },
    },
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion'],
          'form-vendor': ['react-hook-form'],
          'ui-vendor': ['@heroicons/react'],
        },
      },
    },
    // Increase chunk size warning limit (healthcare content is content-heavy)
    chunkSizeWarningLimit: 1000,
    // Source maps for error tracking in production
    sourcemap: false,
    // Optimize CSS
    cssCodeSplit: true,
  },
  // Development optimizations
  server: {
    port: 5173,
  },
})
