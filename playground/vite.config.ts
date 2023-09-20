import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from '@unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { alias } from '../alias'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      ...alias,
    },
  },
  plugins: [
    vue(),
    UnoCSS(),
    AutoImport({
      imports: [
        'vue',
      ],
    }),
  ],
})
