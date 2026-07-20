/* Lesson 9: View code coverage */
import { defineConfig } from 'vite'
import { coverageConfigDefaults } from "vitest/config"
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: ["./test-setup.js"],
    environment: 'jsdom',
    coverage: {
      provider: "istanbul",
      exclude: ['.src/index.jsx', ...coverageConfigDefaults.exclude]
    }
  }
})

/* Lesson 3: Set up the tooling */


/* import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: ["./test-setup.js"],
    environment: 'jsdom'
  }
}) */
