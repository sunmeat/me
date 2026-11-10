import {offlinePlugin} from './scripts/offline.mjs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),offlinePlugin()],
  base: '/',
})
