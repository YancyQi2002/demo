// @ts-nocheck
import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {
  AntDesignVueResolver,
  ElementPlusResolver,
  HeadlessUiResolver,
} from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'

const resolve = (p: string) => {
  return path.resolve(__dirname, p)
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  },
  envPrefix: [
    'VITE_',
    'TAURI_',
  ],
  plugins: [
    vue({
      reactivityTransform: true
    }),
    AutoImport({
      imports: ['vue', 'vue/macros', 'vue-router', 'pinia'],
      resolvers: [
        AntDesignVueResolver(),
        ElementPlusResolver(),
        HeadlessUiResolver(),
      ],
    }),
    Components({
      extensions: ['vue'],
      resolvers: [
        AntDesignVueResolver(),
        ElementPlusResolver(),
        HeadlessUiResolver(),
      ],
    }),
    ElementPlus(),
  ]
})
