import { defineConfig } from 'vite'
import tsrPlugin from '@tanstack/start/plugin'

export default defineConfig({
  plugins: [tsrPlugin()],
})
