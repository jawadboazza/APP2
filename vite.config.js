export default defineConfig({
  base: '/APP2/', // Remplacez par le nom de votre dépôt GitHub
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
