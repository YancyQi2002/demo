import './assets/css/index.css'
import 'flowbite'
import 'vue-devui/layout/style.css'
import App from './App.vue'
import router from './router/index'

const pinia = createPinia()

const app = createApp(App)
app.use(router).use(pinia)
app.mount('#app')