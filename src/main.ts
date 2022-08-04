import './assets/css/index.css'
import 'flowbite'
import App from './App.vue'
import router from './router/index'
import DevUI from 'vue-devui'
import 'vue-devui/style.css'

const pinia = createPinia()

const app = createApp(App)
app.use(router).use(pinia).use(DevUI)
app.mount('#app')