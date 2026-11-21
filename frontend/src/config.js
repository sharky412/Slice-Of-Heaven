const config = {
  // API base URL; set VITE_API_URL to override (e.g. in .env.local or the hosting provider).
  server: import.meta.env.VITE_API_URL || 'http://localhost:4000',
}

export default config
