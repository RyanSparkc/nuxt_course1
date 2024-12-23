// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '@/assets/styles/all.scss'
  ],

  components: {
    dirs: [
      {
        path: '~/components/global',
        global: true
      }
    ]
  },

  // 添加基礎路徑配置
  app: {
    // 設定 GitHub Pages 的基礎路徑（替換 'your-repo-name' 為您的倉庫名稱）
    baseURL: '/nuxt_course1/',
    // 設定資源目錄
    buildAssetsDir: 'assets'
  },


})
