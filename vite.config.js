import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Read env variable or default to root
const base = process.env.VERCEL ? '/' : '/portfolio/'

export default defineConfig({
  base,
  plugins: [react()],
})
