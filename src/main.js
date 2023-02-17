import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

import 'ant-design-vue/dist/antd.css';
import './scss/app.scss';

const pinia = createPinia();
const app = createApp(App);

app.use(Antd);
app.use(pinia);
app.use(router);
app.mount('#app');
