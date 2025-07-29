import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss' // <-- Import tailwindcss

// https://vite.dev/config/
export default defineConfig({
  // Tambahkan tailwindcss() ke dalam array plugins
  plugins: [react(), tailwindcss()], 
})