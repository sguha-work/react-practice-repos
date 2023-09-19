
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
      name: 'footer',
      filename: 'footer.js',
      exposes: {
        './FooterContent': './src/components/footer-content/footer-content.component.jsx',
        './CopyrightComponent': './src/components/copyright/copyright.component.jsx'
      },
      shared: ['react']
    })
  ],
  preview: {
    host: 'localhost',
    port: 5002,
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
