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
  DevUiResolver,
  VueUseComponentsResolver
} from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

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
  server: {
    cors: true // 允许跨域
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
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue\??/, // .vue
      ],
      imports: [
        'vue',
        'vue/macros',
        'vue-router',
        'pinia',
        '@vueuse/core',
        {
          'axios': [
            // default imports
            ['default', 'axios'], // import { default as axios } from 'axios',
          ],
        }
      ],
      resolvers: [
        AntDesignVueResolver(),
        ElementPlusResolver(),
        HeadlessUiResolver(),
        DevUiResolver(),
      ],
    }),
    Components({
      extensions: ['vue'],
      resolvers: [
        AntDesignVueResolver(),
        ElementPlusResolver(),
        HeadlessUiResolver(),
        IconsResolver(),
        DevUiResolver(),
        VueUseComponentsResolver(),
      ],
      dts: true,
    }),
    ElementPlus(),
    Icons({
      compiler: 'vue3'
    })
  ]
})
