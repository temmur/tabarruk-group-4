import './assets/main.css'
import uz from '@/locales/uz.json'
import ru from '@/locales/ru.json'
import en from '@/locales/uz.json'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import Vue3Marquee from 'vue3-marquee'

import App from './App.vue'
import router from './router'

const savedLanguage = localStorage.getItem('lang') || 'uz'

const i18n = createI18n({
    legacy: false,
  locale: savedLanguage,
  fallbackLocale: 'en',
  messages: {
    ru: ru,
    uz: uz,
    en: en
  }
})


const app = createApp(App)
app.use(i18n)
app.use(router)
app.use(Vue3Marquee)
app.mount('#app')
