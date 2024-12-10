
import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/tailwind.css'
import '@/assets/main.css'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.min.css';



const app = createApp(App).use(router)
app.use(router)
app.mount('#app');
