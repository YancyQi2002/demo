import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {
  AntDesignVueResolver,
  HeadlessUiResolver,
  VarletUIResolver,
  VueUseComponentsResolver
} from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

const resolve = (p: string) => {
  return path.resolve(__dirname, p)
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('./src'),
      '@components': resolve('./src/components')
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
        'pinia',
        '@vueuse/core',
        'vitest',
        {
          'axios': [
            // default imports
            ['default', 'axios'], // import { default as axios } from 'axios',
          ],
          'vue-router': [
            'createRouter',
            'createWebHistory',
            'RouteRecordRaw',
            'useRouter',
            'useRoute',
          ],
        }
      ],
      resolvers: [],
    }),
    Components({
      extensions: ['vue'],
      resolvers: [
        AntDesignVueResolver(),
        HeadlessUiResolver(),
        IconsResolver({
          prefix: 'icon',
        }),
        VarletUIResolver(),
        VueUseComponentsResolver(),
      ],
      dts: true,
    }),
    Icons({
      compiler: 'vue3'
    })
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true
      }
    }
  }
})