// 引入 bootstrap
import * as bootstrap from 'bootstrap'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('bootstrap', bootstrap)
})
