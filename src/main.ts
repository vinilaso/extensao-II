import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Login from './views/Login.vue';
import './index.css';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login
        }
    ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');