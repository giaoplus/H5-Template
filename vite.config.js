import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`
        }
      ]
    }),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      ext: '.br', // .gz
      algorithm: 'brotliCompress',  //gzip
    })
  ],
  resolve: {
    alias: {
      '@': '/src',
      'assets': '/src/assets',
      'components': '/src/components',
      'config': '/src/config',
      'router': '/src/router',
      'api': '/src/api',
    }
  },
  build:{
    terserOptions:{
      compress: {
        drop_console: true,
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/common.scss";@import "@/styles/mixin.scss";@import "@/styles/variable.scss";@import "@/styles/theme.scss";`
      }
    }
  },
})
