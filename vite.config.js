import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Listen on all network interfaces (required for Render)
    port: process.env.PORT || 5173, // Use PORT environment variable or fallback to 5173
  },
})
