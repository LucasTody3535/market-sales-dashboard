import { createApp } from 'vue';
import App from './App.vue';
import { routesConfig } from './routes';

createApp(App).use(routesConfig).mount('#app');
