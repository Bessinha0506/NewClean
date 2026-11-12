import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Publicado na Cloudflare Pages, na raiz do domínio.
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: { port: 5173 },
});
