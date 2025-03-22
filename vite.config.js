import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0',
    port: 4173,  // You can change this if needed
    allowedHosts: ['https://ec-react-cm0u.onrender.com'],  // Add your Render domain
  }
});
