import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [tailwindcss(),react()],
=======
  plugins: [react(),tailwindcss()],
>>>>>>> fb34473d7420cb42a1446fa4532ca99974e0fcb1
})
