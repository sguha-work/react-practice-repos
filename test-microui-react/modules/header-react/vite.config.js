
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation';
import dns from 'dns';

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'header',
      filename: 'header.js',
      exposes: {
        './BannerComponent': './src/components/banner/banner.component.jsx',
        './MenuComponent': './src/components/menu/menu.component.jsx'
      },
      shared: ['react']
    })
  ],
  preview: {
    host: 'localhost',
    port: 5001,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
