import { createApp } from 'vue'
import './assets/css/index.css'
import 'flowbite'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'

const pinia = createPinia()

const app = createApp(App)
app.use(router).use(pinia)
app.mount('#app')
