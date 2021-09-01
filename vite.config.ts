import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  // k8s için
  // server: {
  //   host: '0.0.0.0',
  //   port: 3000,
  //   hmr: {
  //     port: 443
  //   },
  // },
  plugins: [reactRefresh()]
});