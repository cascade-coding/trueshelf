import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],

  base: "/trueshelf/",

  server: {
    host: true,
    allowedHosts: true
  },
})