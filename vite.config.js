import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
     preview: {
    host: "0.0.0.0",
    port: process.env.PORT || 3000,
    allowedHosts: ["ec-react-n8qw.onrender.com"] // Add your Render domain here
  }
});
