import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// No GitHub Pages o site fica em https://bessinha0506.github.io/NewClean/,
// por isso o build usa a base "/NewClean/". Em desenvolvimento continua na raiz.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/NewClean/' : '/',
  plugins: [react()],
  server: { port: 5173 },
}));
