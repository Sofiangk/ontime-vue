import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
pinia.use(piniaPluginPersistedstate);
app.mount('#app');
