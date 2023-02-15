import { createApp } from 'vue'
import App from './App.vue'
import VueSplide from '@splidejs/vue-splide';
import store from "./store/store"
import router from "./router"
createApp(App).use(VueSplide).use(router).use(store).mount('#app')