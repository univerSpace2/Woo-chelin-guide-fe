import { defineConfig } from 'vite'
import VitePluginHtmlEnv from 'vite-plugin-html-env'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePluginHtmlEnv()],
  define:{
    "process.env":{
      SECURE_LOCAL_STORAGE_HASH_KEY:'e$c+m-b$vr9lt0d8_jnk@i&bu49z7@mky*hw^8pe%k55cll9wf',
      // REACT_APP_SECURE_LOCAL_STORAGE_HASH_KEY:'e$c+m-b$vr9lt0d8_jnk@i&bu49z7@mky*hw^8pe%k55cll9wf'
    }
  }
})
