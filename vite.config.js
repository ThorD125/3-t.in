import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** @type {import('tailwindcss').Config} */

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
})
