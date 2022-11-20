import { defineConfig } from 'vite'
import VitePluginHtmlEnv from 'vite-plugin-html-env'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePluginHtmlEnv()]
})

// export default {
//   plugins:[
//       react(),
//       VitePluginHtmlEnv()
//   ]
// }