import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/my-react-app/', // 你的 repo 名稱，最後要有斜線
  plugins: [react()]
})