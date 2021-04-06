import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/styles/main.css";
import store from './store'
import router from './router'

createApp(App).use(router).use(store).mount('#app')
