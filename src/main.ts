import './assets/css/index.css'
import 'flowbite'
import DevUI from 'vue-devui'
import App from './App.vue'
import router from './router/index'
import 'vue-devui/style.css'

const pinia = createPinia()

const app = createApp(App)
app.use(router).use(pinia).use(DevUI)
app.mount('#app')