import { createApp } from 'vue';
import { createPinia } from 'pinia'
import App from './App.vue';
import { routesConfig } from './routes';

createApp(App).use(routesConfig).use(createPinia()).mount('#app');
